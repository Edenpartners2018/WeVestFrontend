<template>
    
  <div class="q-pa-md">
        <div class="row">
            <div class="col">
                <CTitle ttype='title' :title="v_page.title" :desc="v_page.desc"></CTitle>
            </div>
        </div>

        <div class="row q-gutter-sm box_label">
            <div class="col">
                <CBigLabel ref='label_btc' title="abc" :onclick="onClickTrend"></CBigLabel>
            </div>
            <div class="col">
                <CBigLabel ref='label_binance' title="abc" :onclick="onClickTrend"></CBigLabel>
            </div>
        </div>
        <div class="row q-gutter-sm box_label">
            <div class="col">
                <CBigLabel ref='label_upbit' title="abc" :onclick="onClickTrend"></CBigLabel>
            </div>
            <div class="col">
                <CBigLabel ref='label_bithumb' title="abc"  :onclick="onClickTrend"></CBigLabel>
            </div>
        </div>
        
        <div class="row">
            <div class="col">
                <CTitle ttype='subtitle' :title="$t('page.home.index.title')" :desc="$t('page.home.index.desc')"></CTitle>                
                <CIndexChart ref='indexChart'></CIndexChart>
            </div>      
        </div>

        <div class="row">
            <div class="col">
                <CTitle ttype='subtitle' :title="$t('page.home.asset.title')" :desc="$t('page.home.asset.desc')"></CTitle>
                <AssetList ref='assetList' @onClickAsset="onClickAsset"></AssetList>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <CTitle ttype='subtitle' :title="$t('page.home.blog.title')" :desc="$t('page.home.blog.desc')"></CTitle>
                <BlogList ref='blogList' @onClickBlog="onClickBlog"></BlogList>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <q-separator class="sector_seperator" />
            </div>
        </div>

        <div class="row q-gutter-sm">
            <div class="col">
                <CTitle ttype='subtitle' :title="v_subpage.cwatch.title" :desc="v_subpage.cwatch.desc"></CTitle>
                 <div class="q-pa-md flex flex-center text-center">
                    <div class="col-6" @click="onClickKnob">
                        <span class="btc-eth">BTC</span><br>
                        <q-knob
                            show-value readonly class="text-green q-ma-md box_knob"
                            :min="0" :max="10"
                            v-model="v_risk.btc.value" size="110px" :thickness="0.30"                            
                            :color="v_risk.btc.color" track-color="grey-3">
                            <q-icon :name="v_risk.btc.icon" class="q-mr-xs box_knob"  />
                            <span class="box_knob">{{ v_risk.btc.value }}</span>
                        </q-knob>
                    </div>
                    <div class="col-6" @click="onClickKnob">
                        <span class="btc-eth">ETH</span><br>
                        <q-knob
                            show-value readonly  class="text-green q-ma-md box_knob"
                            :min="0" :max="10"
                            v-model="v_risk.eth.value" size="110px" :thickness="0.30"                            
                            :color="v_risk.eth.color" track-color="grey-3">
                            <q-icon :name="v_risk.eth.icon" class="q-mr-xs box_knob" />
                            <span class="box_knob">{{ v_risk.eth.value }}</span>
                        </q-knob>
                    </div>
                </div>
            </div>      
        </div>

        <div class="row">
            <div class="col">
                <q-separator class="sector_seperator" />
            </div>
        </div>

        <div class="row">
            <div class="col">
                <CTitle :title="$t('page.home.toplist.title')" :desc="$t('page.home.toplist.desc')"></CTitle>

                <q-virtual-scroll 
                    :items="v_toplist"
                    virtual-scroll-horizontal                   
                >
                    <template v-slot="{ item, index }">
                        <div 
                            :key="index"
                            class='box_hotlist text-center'
                            @click="onClickToplist(item.value)"
                        >
                            <div>
                                <q-icon :name="item.icon" class="hotlist-icon"/>
                            </div>
                            <div>
                                <span class="hotlist-name"> {{ item.label }}</span>
                            </div>                            
                        </div>
                    </template>
                </q-virtual-scroll>
            
  <!--
                <q-toggle v-model="visible" label="Visible image" class="q-mb-md" />
-->
                <q-slide-transition>
                    <div v-show="v_toplist_visible">
                        <CTopTable ref="exchangeTop"></CTopTable>                        
                    </div>
                </q-slide-transition>
  
                                                
            </div>
        </div>

        <div class="row">
            <div class="col">
                <q-separator class="sector_seperator" />
            </div>
        </div>

        <div class="row">
            <div class="col q-gutter-sm">
                <CTitle :title="$t('page.home.eureka.title')" :desc="$t('page.home.eureka.desc')"></CTitle>

                <div class="row box_eureka" :style="a_eureka.color" v-for="(a_eureka,index) in v_eureka" :key="index">
                    <div class="box_eureka_icon">
                        <q-icon name="lightbulb" />
                    </div>
                    <div class="box_eureka_text" @click="onClickEureka(a_eureka.link)">
                        <div class="text-h6">{{ a_eureka.title }}</div>
                        <div class="text-subtitle2">{{ a_eureka.subtitle }}</div>
                    </div>
                </div>

            </div>
        </div>

        <div class="row">
            <div class="col">
                <q-separator class="sector_seperator" />
            </div>
        </div>

        <div class="row">
            <div class="col">
                <CTitle ttype="title" :title="$t('page.home.category.title')" :desc="$t('page.home.category.desc')"></CTitle>

                <q-tabs v-model="v_tab" class="text-grey tab_bgcolor" active-color="primary" indicated-color="primary" align="justify">
                    <q-tab name="upbit" :label="$t('name.upbit')" @click="onClickTabCategory('upbit')" />
                    <q-tab name="bithumb" :label="$t('name.bithumb')" @click="onClickTabCategory('bithumb')" />
                </q-tabs>              

                <div class="row q-gutter-sm box_label">
                    <div class="col">
                        <CBigLabel class="col-4" ref='label_major' title="abc" :onclick="onClickCategory"></CBigLabel>
                    </div>
                    <div class="col">
                        <CBigLabel class="col-4" ref='label_korean' title="abc" :onclick="onClickCategory"></CBigLabel>                
                    </div>
                </div>
                <div class="row q-gutter-sm box_label">
                    <div class="col">
                        <CBigLabel class="col-4" ref='label_chinese' title="abc" :onclick="onClickCategory"></CBigLabel>
                    </div>
                    <div class="col">
                        <CBigLabel class="col-4" ref='label_nft' title="abc" :onclick="onClickCategory"></CBigLabel>
                    </div>
                </div>
                <div class="row q-gutter-sm box_label">
                    <div class="col">
                        <CBigLabel class="col-4" ref='label_defi' title="abc" :onclick="onClickCategory"></CBigLabel>
                    </div>
                    <div class="col">
                        <CBigLabel class="col-4" ref='label_misc' title="abc" :onclick="onClickCategory"></CBigLabel>
                    </div>
                </div>    
            </div>
        </div>

        <div class="row">
            <div class="col">
                <q-separator class="sector_seperator" />
            </div>
        </div>

        <div class="row">
            <div class="col">
                <CTitle :title="$t('page.home.mustknow.title')" :desc="$t('page.home.mustknow.desc')"></CTitle>
            </div>
        </div>

  </div> 

</template>


<script>
import { Config } from 'src/data/Config';
import NavFunc from 'src/util/NavFunc';
import CommonFunc from 'src/util/CommonFunc';
import logger from 'src/error/Logger';
import APIService from 'src/services/apiService';
import DataService from 'src/services/dataService';

import CTitle from 'components/CTitle';
import CBigLabel from 'components/CBigLabel';
import BlogList from 'components/BlogList';
import AssetList from 'components/AssetList';
import CTopTable from 'pages/home/CTopTable';
import CIndexChart from 'pages/home/CIndexChart';
import CExchangeIndexChart from 'pages/home/CExchangeIndexChart';


export default {
  name: 'PageIndex',
  components: {
      CTitle,
      CBigLabel,
      CTopTable,
      CIndexChart,
      CExchangeIndexChart,
      BlogList,
      AssetList
  },

  data: function () {
    return {
        v_risk: {
            btc: {value:56, color:'red'}, 
            eth: {value:56, color:'green'}, 
        },
        v_tab:'upbit',     
        v_tab_toplist:'ret' ,
        v_toplist_visible:false,  
        v_page: {title:this.$t('page.home.title'), desc:''},
        v_subpage: { 
            cwatch: { title:this.$t('page.home.cwatch.title'), desc:''} 
        },
            
        v_toplist:[
            {label:this.$t('name.price_surge'),value:'ret', icon:"auto_awesome"},
            {label:this.$t('name.yester_ret'),value:'yester_ret', icon:"auto_graph"},
            {label:this.$t('name.volume_surge'),value:'volume', icon:"signal_cellular_alt"},
            {label:this.$t('name.volume_change'),value:'tvz', icon:"insert_chart"},            
        ],
        v_eureka:[
            {
                title:'Crypto VC 그들의 투자성적은?', 
                subtitle:'전문적인 식견을 가진 그들의 성과는?', desc:'그들로부터 배울것이 있는가?', 
                color: 'background:#FFDC46;', link:'cryptovc'
            },
            {
                title:'Crypto VC이 사랑한 프로젝트들?', subtitle:'전문적인 식견을 가진 그들의 성과는?', desc:'그들로부터 배울것이 있는가?', 
                color:'background:#D7F1FA;', link:'vcportfolio'
            },
        ],
    }
  },
    created: function () {
        //console.log("HomeView.created");
    },
    mounted: function() {
        //console.log("HomeView.mounted - ");
        this.refresh();
    },
    updated: function() {
        //console.log("HomeView.updated");
    },
    
    methods: {
        updatePageHeader: function(json_data) {
            const dic_columns = CommonFunc.getColumnDic(json_data['upbit']['btc'].columns,[],[]);
            let watch_date = json_data['upbit']['btc'].values[json_data['upbit']['btc'].values.length-1][dic_columns['trade_date']];
            this.v_page.desc = watch_date;
        },



        updateAlert: function(data) {
            logger.log.debug('updteAlert - ',data);
            this.g_data_watch = data;

            let dic_columns = CommonFunc.getColumnDic(data['BTC'].columns,[],[]);            
            this.v_subpage.cwatch.desc = 'UTC ' + data['BTC'].values[data['BTC'].values.length-1][dic_columns['utc_trade_date']];

            let btc_value = CommonFunc.getCWatchValueAndColor(data['BTC'].values[data['BTC'].values.length-1][dic_columns['rise_prob']]);
            this.v_risk.btc.value = btc_value.value;
            this.v_risk.btc.color = btc_value.color;
            this.v_risk.btc.icon = btc_value.icon;
            logger.log.debug('updteAlert - ',btc_value);

            let eth_value = CommonFunc.getCWatchValueAndColor(data['ETH'].values[data['ETH'].values.length-1][dic_columns['rise_prob']]);
            this.v_risk.eth.value = eth_value.value;
            this.v_risk.eth.color = eth_value.color;
            this.v_risk.eth.icon = eth_value.icon;
        },


        refresh: function() {
            const _this = this;
        
            let funcs = [            
                //this.loadCalendarEffectData('1h'),
                this.loadBlogList(),
                this.loadAssetList(),
                /*
                this.loadIndexData(),
                this.loadCryptoTopAssetData('1h'),
                DataService.loadCryptoWatchData(30).then(function(data) {
                    _this.updateAlert(data);
                }),
                */
            ];
            Promise.all(funcs).then(function() {

            });
        },

        loadBlogList: function() {
            this.$refs.blogList.update();
        },

        loadAssetList: function() {
            this.$refs.assetList.update();
        },

        loadCalendarEffectData: function(freq) {
            const _this = this;

            return new Promise(function(resolve,reject) {
                //let a_today = CommonFunc.getToday(false);
                //logger.log.debug("HomeView.loadjw52 - today=",a_today);
                //let a_start_date = CommonFunc.addDays(a_today, -1 );
                //let a_end_date = CommonFunc.addDays(a_today, 1 );
                
                let dic_param = {freq:freq};
                logger.log.debug("HomeView.loadCalendarEffectData - dic_param=",dic_param);

                APIService.getCryptoCalendarEffectData(dic_param,function(response) {
                    _this.g_data_ce = response.data.data;
                    logger.log.debug("HomeView.loadCalendarEffectData - response",_this.g_data_ce);
                    //_this.$refs.sectorTable.update(_this.g_data);
                    resolve();
                },function(err) {
                    logger.log.error("HomeView.loadCalendarEffectData - error",err);
                    reject();
                });
            });            

        },

        loadIndexData: function() {
            const _this = this;

            return new Promise(function(resolve,reject) {
                let a_today = CommonFunc.getToday(false);
                //logger.log.debug("HomeView.loadjw52 - today=",a_today);
                let a_start_date = CommonFunc.addDays(a_today, -1 );
                //let a_end_date = CommonFunc.addDays(a_today, 1 );
                
                let dic_param = {freq:'1h',start_date:a_start_date};
                logger.log.debug("HomeView.loadIndexData - dic_param=",dic_param);

                APIService.getCryptoIndexData(dic_param,function(response) {
                    _this.g_data = response.data.data;
                    logger.log.debug("HomeView.getCryptoIndexData - response",_this.g_data);
                    
                    _this.updatePageHeader(_this.g_data);
                    _this.updateWidget(_this.g_data);
                    _this.updateIndexChart(_this.g_data);

                    _this.updateExchangeWidget(_this.g_data,_this.v_tab);
                    //_this.updateExchangeIndexChart(_this.g_data,_this.tab);
                    //_this.$refs.sectorTable.update(_this.g_data,_this.tab);
                    resolve();
                },function(err) {
                    logger.log.error("HomeView.loadOverviewData - error",err);
                    reject();
                });
            });            
        },
        

        loadCryptoTopAssetData: function(freq) {
            const _this = this;

            return new Promise(function(resolve,reject) {
                let a_today = CommonFunc.getToday(false);
                //logger.log.debug("HomeView.loadjw52 - today=",a_today);
                let a_start_date = CommonFunc.addDays(a_today, 0 );
                //let a_end_date = CommonFunc.addDays(a_today, 1 );
                
                let dic_param = {freq:freq,start_date:a_start_date};
                logger.log.debug("HomeView.loadCryptoTopAssetData - dic_param=",dic_param);

                APIService.getCryptoTopAssetData(dic_param,function(response) {                    
                    _this.g_data_top = response.data.data;
                    //logger.log.debug("HomeView.loadCryptoTopAssetData - response",response.data);
                    logger.log.debug("HomeView.loadCryptoTopAssetData - response",_this.g_data_top);
                    _this.updateTopTable(_this.g_data_top,_this.v_tab,'ret');
                    resolve();
                },function(err) {
                    logger.log.error("HomeView.loadCryptoTopAssetData - error",err);
                    reject();
                });
            });            
        },
        

        updateWidget: function(data) {
            if (! data.hasOwnProperty('binance')) {
              return
            }

            let dic_columns = CommonFunc.getColumnDic(data['binance']['overall'].columns,[],[]);            
            let column_ret = dic_columns['index_ret'];
            let column_price = dic_columns['price_avg'];

            const exchanges = ['binance','upbit','bithumb','btc'];
            let a_category = 'overall';
            let a_ref = null;
            for (let index in exchanges) {
                let a_exchange = exchanges[index];
                
                a_ref = a_exchange;
                a_category = 'overall';
                if (a_exchange=='btc') {
                  a_exchange = 'binance';
                  a_category = 'btc';
                  a_ref = 'btc';
                }

                let a_index = data[a_exchange][a_category].values[data[a_exchange][a_category].values.length-1][column_price];
                let a_ret = data[a_exchange][a_category].values[data[a_exchange][a_category].values.length-1][column_ret];
                
                let a_label = {title:this.$t('name.'+a_ref), value:a_index, value_pct_change: a_ret};
                
                this.$refs['label_'+a_ref].update(a_label);                
            }
            
        },

        updateExchangeWidget: function(data,exchange) {
            let dic_columns = CommonFunc.getColumnDic(data[exchange]['overall'].columns,[],[]);            
            let column_ret = dic_columns['index_ret'];
            let column_price = dic_columns['price_avg'];
            
            for (let index=0; index<Config.general.SECTORS.length;index++) {
                let a_sector = Config.general.SECTORS[index];
                //console.log('sector=',a_sector);
                let a_index = data[exchange][a_sector].values[data[exchange][a_sector].values.length-1][column_price];
                let a_ret = data[exchange][a_sector].values[data[exchange][a_sector].values.length-1][column_ret];

                let a_label = {title:this.$t('category.'+a_sector), value:a_index, value_pct_change: a_ret, field:a_sector};
                this.$refs['label_'+a_sector].update(a_label);
            }
        },

        updateIndexChart: function(data) {
            if (! data.hasOwnProperty('binance')) {
              return
            }
            this.$refs.indexChart.update(data);
        },

        updateExchangeIndexChart: function(data,exchange) {
            if (! data.hasOwnProperty('binance')) {
              return
            }
            this.$refs.exchangeChart.update(data,exchange);
        },

        updateTopTable: function(data,exchange,target) {
            console.log('HomeView.updateTopTable=',data);
            if (CommonFunc.isEmptyObject(data)) {
                return;
            }
            this.$refs.exchangeTop.update(data,exchange,'overall',target);
        },

        showChart: function(asset,dates,a_date) {
            console.log('HomeView.showChart=',asset);        
            //this.items_52w = json_list;
            this.$refs.chartWinner.update('gaia_crypto_trend_upbit',asset,dates);
        },


        onLoad: function(progress) {
            console.log('onLoad - ',progress);
        },

        onClickCategory: function(sector) {
            logger.log.debug('onClickCategory - ',sector);
            
            let dic_param = { name:'sector', path:'sector', params:{exchange:this.v_tab, sector:sector} };
            this.$router.push(dic_param);
        },

        onClickTrend: function() {
            logger.log.debug('onClickTrend - ');

            let dic_param = { name:'trend', path:'trend', params:{} };
            this.$router.push(dic_param);            
        },

        onClickToplist:function() {
            logger.log.debug('onClickToplist - ');
            this.v_toplist_visible = true;

            this.updateTopTable(this.g_data_top,this.v_tab,this.v_tab_toplist); 
            //_this.updateTopTable(_this.g_data_top,_this.v_tab,'ret');
        },

        onClickEureka: function(link) {
            logger.log.debug('onClickEureka - ',link);

            let dic_param = { name:link, path:link, params:{} };
            this.$router.push(dic_param);            
        },

        onClickTabCategory: function(exchange) {
            logger.log.debug('onClickTabCategory - ',exchange);
            this.updateExchangeWidget(this.g_data,exchange);
        },

        onClickKnob: function() {
            logger.log.debug('onClickKnob');
            let dic_param = { name:'cwatch', path:'cwatch', params:{} };
            this.$router.push(dic_param);            
        },
        
        onClickAsset: function(dic_param) {
            logger.log.debug('onClickAsset');
            this.$router.push(dic_param);
        },

        onClickBlog: function(param) {
            NavFunc.navBlog(this,param.page_id);
        }
    }

};
</script>


<style scoped>
.box_label {
    margin-top:1px;
    margin-bottom:1px;
}

.box_eureka {

    display: grid;
    grid-template-columns: minmax(55px, 55px) 1fr;

    border: 1px solid #BBBBBB;
    /*background:#D7F1FA; blue*/
    /*background:#FFDC46; yellow*/ 
    /*background:#B4B4FF; purple */
    background:#FFE150;
    border-radius:8px; 
    padding: 15px; 
    /* margin:10px 8px 22px; */
    margin: 20px 0px 20px 0px;    
}

.box_eureka_icon {
    /*width:80px;
    */
    font-size:40px;
    color:#EB5A5A;
    margin:-8px 0px 0px 0px;
    /*padding-left:10px;*/
}
.box_eureka_text {    
    font-size: 13px;
}

.btc-eth {
    color: #111111;
    font-size: 18px;
    font-weight: 700;
}

.box_knob {
    font-size:25px; 
}

.box_hotlist {
    border: 1px solid #BBBBBB; 
    border-radius:8px; 
    height:130px;
    width:200px;
    margin:10px 20px 10px 0px;
}

.hotlist-icon {    
    color:gold;
    font-size:40px;
    padding:20px;
    /* position:relative; top:30px; */
}

.hotlist-name {
    color:#111111;
    font-size:20px;
    font-weight:800;
    padding:20px;
    /* position:relative; top:10px; */
}
</style>