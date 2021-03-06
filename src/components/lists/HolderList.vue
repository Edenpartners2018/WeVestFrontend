<template>
	<div>

		<CTitle ttype='subtitle' :title="v_title" desc=""
			:loadMoreCaption="v_more_caption" @onClickTitleMore="onClickMoreFriend"></CTitle>

		<q-skeleton v-if="!v_list_loaded" height="150px" square animation="pulse-x" />
		<div v-show="v_list_loaded">
			<div v-show="data && data.holders.items.length>0">
				<q-list separator class="rounded-borders">
					<q-item 
						class="q-pa-sm"
						clickable
						:key="index"
						v-if="index<v_maxLength && data.holders.items.length>0"
						v-for="(a_user, index) in data.holders.items"				
					>
						<q-item-section class="avatar" avatar top>
							<WAvatar :avatar="a_user.avatar" :username="a_user.username" />
						</q-item-section>

						<q-item-section top @click.stop="onClickPortfolio(a_user)">
							
							<q-item-label lines="1">
								<span class="gUserNameSM">
									{{ a_user.display_name ? a_user.display_name : a_user.username }}
								</span>

								<span class="q-ml-sm gCaption">at</span>
								<q-badge
									class="q-ml-xs" color="purple-4" text-color="white">
									<span>$ {{ v_format(a_user.price) }}</span>
								</q-badge>								
								<q-badge
									class="q-ml-xs" color="red-14" text-color="white">
									<span> {{ v_roi(a_user) }}</span>
								</q-badge>								

							</q-item-label>

							<q-item-label lines="1">

								<WSubinfo 
									dateFormat="0"
									username=""  
									:pub_date="a_user.created_at" 
									:like_count="-1" 
									:dislike_count="-1" />

							</q-item-label>
						</q-item-section>
						
						<q-item-section side>
							<q-item-label lines="1">
								<q-btn dense icon="navigate_next" @click="onClickPortfolio(a_user)" />
							</q-item-label>
						</q-item-section>

					</q-item>
					<q-separator class="q-mb-md" size="1px" />

				</q-list>

				<LoadMore ref="loadMore" @onClickLoadMore="onClickLoadMore" />
			</div>

			<div v-show="(! data ) || (data.holders.items.length==0)" class="text-center">
				<div class="gListTitle"> 
					{{noDataTitle}}
				</div>
				<div class="gCaption">
					{{noDataDescription}}
				</div>
			</div>
		</div>
	</div>

</template>


<script>
import { store } from 'src/store/store';
import { Config } from 'src/data/Config';
import NavFunc from 'src/util/NavFunc';
import CommonFunc from "src/util/CommonFunc";
import logger from "src/error/Logger";

import CTitle from 'components/CTitle';
import WAvatar from "src/components/w/WAvatar";
import WSubinfo from 'components/WSubinfo';
import LoadMore from "src/components/LoadMore";
import UserModel from "src/models/UserModel";

export default {
	name:'HolderList',
	components: {
		CTitle,
		WAvatar,
		WSubinfo,
		LoadMore
	},
    props: {
		data: {
			required: false,
			default: null
		},
        maxLength: {
            default: 20,
        },
        limit: {
            default: 20,
        },
		title: {
			type:String,
			default: "Holder List"
		},
		moreCaption: {
			type:String,
			default: ""
		},
		noDataTitle: {
			type:String,
			default:"No Data"
		},
		noDataDescription: {
			type:String,
			default:"No holders"
		},
    },
    computed: {
		v_me() {			
			return store.getters.me;
		},
        v_format() {
            return (value) => {   
                if (! value) return 0;

                return CommonFunc.formatNumber(value,1);
            }
        },
        v_shorten() {
            return (value) => {
                return CommonFunc.shortenString(value,Config.setting.maxTitleLength);
            };
        },		
        v_roi() {
            return (user) => {				
				if (! this.v_price) {
					this.v_price = store.state.prices.getPrice(user.asset.symbol);
				}
				if (! this.v_price) {
					return '';
				}

				logger.log.debug('HolderList.v_roi : user,price=',user,this.v_price);				
				const a_ret = CommonFunc.calcRet(user.price,this.v_price.last)*100;
				return CommonFunc.formatNumber(a_ret,2)+"%";
			}
        },

    },

	data() {
		return {
			v_list_loaded: false,

			g_data: null,
			
			v_title: this.title,
			v_maxLength: this.maxLength,
			v_more_caption: this.moreCaption,								
		
            v_pagination: {
                offset: 0,
                limit: this.limit,
            },

			v_price: null,

			v_asset: this.data,
			v_items: null,

			//v_label_follow:'Follow',

			v_label_add_friend:'Follow',
			v_loading_add_friend:false,

			v_follow_loading:false,		
		};
	},
	mounted() {
		logger.log.debug("HolderList.mounted",this.data);
	},
	methods: {
		update() {
            this.loadHolders();
		},

		setAsset(asset) {
            logger.log.debug("HolderList.setAsset",asset);
            this.v_asset = asset;
        },

		setTitle(count) {
			this.v_title = this.title + " ( " + count.toString() + " )";
		},

        loadHolders(limit=null,offset=null) {
            const _this=this;
			
			let dicParam = {asset_id: this.v_asset.id,limit:limit,offset:offset};

            this.v_asset.loadHolders(dicParam).then( response => {
                logger.log.debug("HolderList.loadHolders - response=",response);
				_this.$refs.loadMore.setPageParameter(response.data);
				_this.setTitle(_this.$refs.loadMore.v_count);
				_this.v_list_loaded = true;
            }).catch(err=>{
				logger.log.error("ProfileView.loadFollower - err=",err);
				_this.v_list_loaded = true;
            });

        },

		onClickUser(username) {
			logger.log.debug("onClickUser : username = ", username);			
			NavFunc.navProfile(this,username);
			//this.$emit("onClickBlog",{page_id:page_id});
		},

		onClickLoadMore() {
			logger.log.debug("onClickLoadMore : next_url = ", this.v_next_url);

			this.v_maxLength = 999999;
			//this.v_query.limit = this.$refs.loadMore.v_next.limit;
			//this.v_query.offset = this.$refs.loadMore.v_next.offset;
			this.loadHolders(this.$refs.loadMore.v_next.limit,this.$refs.loadMore.v_next.offset);

		},

		onClickMoreFriend() {
			logger.log.debug("FriendList.onClickMoreFriend : 1");
			
			//store.getters.nav.add(this.$route);
            //NavFunc.navProfile(this,this.v_user.username);
		},
		onClickPortfolio(holder) {
			logger.log.debug("FriendList.onClickPortfolio : holder=",holder);
			NavFunc.navPortfolio(this,holder.username,holder.portfolio_id);
		}
	},
};
</script>


<style scope>
.avatar {
	margin-top:-4px;
}
.news-title {
	font-size: 18px;
	color: #000000;
}

.news-date {
	font-size: 10px;
	color: #888888;
}


</style>