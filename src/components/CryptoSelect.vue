<template>
    <div>
        <q-select
            :style="v_style"
            ref="assetSearch"
            :value="v_search"
            :loading="v_loading"
            :error="v_error"
            use-input fill-input hide-selected use-chips dense borderless
            :hide-dropdown-icon="v_dropdown_icon"
            input-debounce="100"
            input-class=""
            :error-message="v_errorMsg"
            :label="label"
            :filled="v_filled"
            :options="v_options"
            :hide-bottom-space="v_bottom_space"
            @filter="filterFn"
            @input.native="filter($event.target.value)"
            @input="onSearchInput"
            @input-value="onSearchChange"
            @new-value="onSearch"
            @keyup.enter.native="onSearchEnter"
            behavior="menu"
        >

            <template v-slot:prepend>
                <q-icon name="search" @click.stop />
            </template>

            <template v-slot:option="scope">
                <q-item
                    v-bind="scope.itemProps"
                    v-on="scope.itemEvents"
                >
                    <q-item-section>
                        <q-item-label v-html="scope.opt.label" />
                        <q-item-label caption>{{
                            scope.opt.value
                        }}</q-item-label>
                    </q-item-section>
                </q-item>
            </template>

            <template v-slot:no-option>
                <q-item>
                    <q-item-section class="text-grey">
                        No results
                    </q-item-section>
                </q-item>
            </template>
        </q-select>
    </div>

</template>

<script>
import { store } from "src/store/store";
import { Config } from "src/data/Config";
import CommonFunc from "src/util/CommonFunc";
import logger from "src/error/Logger";
import {AssetListModel} from "src/models/AssetModel";
import _ from 'lodash';

import { debounce } from 'quasar';

export default {
    name: 'Index',
    props: {
        label: {
            default:'',
        },
        filled: {
            default:'0'
        },
        errorMsg: {
            default:'Please select an asset'
        },
        hideBottomSpace: {
            default: "0"
        },
        hideDropdownIcon: {
            default: "0"
        },
        myStyle: {
            default: ""
        }
    },
    computed: {
        v_filled() {
            if (this.filled=="1") return true;
            return false;
        },
        v_bottom_space() {
            if (this.hideBottomSpace=="1") {
                return true;
            }
            return false;
        },
        v_dropdown_icon() {
            if (this.hideDropdownIcon=="1") {
                return true;
            }
            return false;
        },
        v_style() {
            return this.myStyle;
        }
    },
    data() {
        return {
            v_assets: new AssetListModel(),

            v_loading:false,
            v_error: false,
			v_search: null,
			v_options: [],
            g_options: [],

            v_errorMsg: this.errorMsg,
            
        };
    },
    created() {
        // filter 함수 debounce 처리(입력할때 마다 필터링 하지 않고 살짝 딜레이 줘서 필터링 되게)
        this.filter = debounce(this.filter, 500);
    },
    methods: {
        clear() {
            this.v_loading = false;
            this.v_search = "";
            this.g_options = [];
            this.v_options = [];
            this.$refs.assetSearch.refresh(-1);
            this.$refs.assetSearch.blur();
        },
        setValue(value){
            logger.log.debug("AutoComplete.setValue : value=",value);
            this.v_search = value;

        },
        getItem(items,label) {
            //logger.log.debug("getPrice.pair=",this.items);
            return _.find(items,{label:label} );
        },
		filter(keyword) {
			this.$refs.assetSearch.filter(keyword);
			this.v_asset = keyword;
		},
		filterFn(val, update, abort) {
			/*
        	if (val.length < 1) {
            	abort()
            	return
        	}
        	*/
			update(() => {
				const needle = val.toLowerCase();
				this.v_options = this.g_options.filter(
					(v) => v.label.toLowerCase().indexOf(needle) > -1
				);
			});
		},
		isValidInput(value) {
			if (! value) return false;

            if (value.length > 1) {
				return true;
			}
			return false;
		},
        querySearch(value) {
            const _this=this;

            this.g_options = [];
            this.v_loading=true;
            this.v_assets.query(value).then(resp=>{
                logger.log.debug("AutoComplete.querySearch : value=",value,resp);
                if (resp.data.length==0) return;

                for (let index=0;index<resp.data.length;index++) {                    
                    _this.g_options.push({label:resp.data[index].symbol +" - "+resp.data[index].name, 
                        symbol:resp.data[index].symbol, 
                        id: resp.data[index].id}
                    );
                }
                _this.filter(value);
                _this.v_loading=false;
            }).catch(err=>{
                logger.log.debug("AutoComplete.querySearch : err=",err);
                _this.v_loading=false;
            });
        },
        setError(value,msg='') {
            this.v_error = value;
            if (msg.length==0) {
                this.v_errorMsg = this.errorMsg;
            } else {
                this.v_errorMsg = msg;
            }
        },


		onSearch(value) {
			//logger.log.debug('onSearch=',value);
		},
		onSearchInput(item) {
			//logger.log.debug("AutoComplete.onSearchInput=", this.v_search,item);
			//this.g_input = item;            
            this.v_search = item;

            if (this.isValidInput(item.label)) {
				this.v_error = false;
                this.$emit("onSelect",item);
			}
		},
		onSearchChange(value) {						
			if (value.length==0) {                
                this.g_options = [];
            } else if (value.length==1) {
				if (this.g_options.length==0) {
                    this.querySearch(value);
                }                
            }

            //logger.log.debug("CryptoSelect.onSearchChange=", this.v_search,value);
		},
		onSearchEnter(event) {
			let a_item = this.getItem(this.g_options,event.target.value);
            //logger.log.debug("AutoComplete.onSearchEnter : item=",a_item);
			
            if (! this.isValidInput(this.g_input)) {			
                return;
            }
            
            logger.log.debug("AutoComplete.onSearchEnter : item2=",a_item);
            
            this.g_input = a_item;

            event.target.blur();
            this.v_error = false;
            this.$refs.assetSearch.refresh(-1);			            
            this.$emit("onSelect",a_item);
/*            
            const _this=this;
            setTimeout( ()=> {
                _this.$refs.assetSearch.refresh(-1);			
                _this.$emit("onSelect",a_item);
            },300);
*/

		},

    },
};
</script>

<style scoped>

.inputTextSearch {
    width:100px;
}
</style>