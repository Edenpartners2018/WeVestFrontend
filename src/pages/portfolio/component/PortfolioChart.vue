<template>

  <div class="boxChart">    
    <q-skeleton v-if="!v_chart_loaded" height="200px" square animation="pulse" />
    <highcharts class="hc" :options="g_chart['chart1']" ref="chart1" v-show="v_chart_loaded">
    </highcharts>    
  </div>

</template>


<script>
import CommonFunc from 'src/util/CommonFunc';
import APIService from 'src/services/apiService';
import DataService from 'src/services/dataService';
import logger from "src/error/Logger";

import CTitle from 'src/components/CTitle';
import ChartTimeframe from 'components/ChartTimeframe';

export default {
    name: 'PortfolioChart',
    components: {
      CTitle,
      ChartTimeframe
    },
    data() {
      return {
        v_chart_loaded: false,

        g_data: null,
        g_data_kvix: null,
        g_data_event: null,
        g_period: 350,
        
        
        g_title: {
          'title1': 'chart.title.risk'
        },

        g_chart: {
          'chart1': {
              series: [
                {name:"test", type:'column', data:[10]},
                {name:"test2", type:'column', data:[30]},
              ],                  
          },
          'chart2': {
              series: [],                  
          },
          'chart3': {
              series: [],                  
          },
        },         
      }
    },

    methods: {
        showChart: function(data) {
            let series = [];
            for (let index=0; index<data.items.length; index++) {
              series.push( { name: data.items[index].api_asset.symbol ,type: 'bar', yAxis:0, data: [data.items[index].roi] } );
            }

            this.g_chart['chart1'] = CommonFunc.getChartOption(series);
        },

        update: function(portfolio) {
            this.showChart(portfolio);
            this.v_chart_loaded = true;
        },

    }
  }
</script>