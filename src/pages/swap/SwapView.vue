<template>
    <div class="swap">
        <!-- Swap Template -->
        <div class="q-ma-sm">            
            <div class="boarder q-pa-md">
                <div class="boarder q-mb-lg"> 
                    <div class="q-gutter-y-md" style="max-width: 600px">
                        <q-tabs
                            v-model="tab"
                            class="grey"
                        >
                            <q-tab label="Swap" />
                            <q-tab label="Pool" />
                            <q-tab label="Vote" />
                            <q-tab label="Charts" />
                        </q-tabs>
                    </div>
                </div>
                <div class="row">
                    <div class="gSubTitleLG">
                        Swap
                    </div>     
                    <q-space />
                    <div class="q-pt-lg">
                        <q-btn flat color="grey-7" icon="settings" />
                    </div>
                </div>
                
                <div class="row q-pa-md q-my-sm boarder">
                    <div>
                        <q-btn rounded color="grey-10" label="ETH" />
                    </div>     

                    <q-space />
                    
                    <div class="text-h6">
                        0.0 
                    </div>
                </div>
                <div class="text-center">
                    <q-btn rounded color="grey-10" icon="swap_vert" />
                </div>    
                <div class="row q-pa-md q-my-sm boarder">
                    <div>
                        <q-btn rounded color="primary" label="Select a Token" />
                    </div>
                    <q-space />
                    <div class="text-h6">
                        0.0
                    </div>
                </div>  
                <div class="text-center q-pt-lg">
                    <q-btn rounded color="primary" class="q-py-sm full-width" label="Connect Wallet"/>
                </div>
            </div>
        </div>

        <q-separator class="q-my-xl" size="10px" />

        <!-- Transaction Settings Template -->
        <div class="q-ma-sm">
            <div class="boarder q-pa-md">
                <div class="text-subtitle1 text-weight-bold">
                    Transaction Settings
                </div>
                <div class="row q-my-md">
                    <div>
                        Slippage tolerance
                    </div>
                    <div class="q-pl-sm"> 
                        <q-icon name="help_outline"> 
                            <q-tooltip>
                                Your transaction will revert if the price changes unfavorobly by more than this percentage.
                            </q-tooltip>
                        </q-icon>
                    </div>
                </div>
                <div class="row text-center">
                    <div class="q-pt-sm q-pr-md">
                        <q-btn rounded color="primary" label="Auto"/>
                    </div>
                    <div>
                        <q-input rounded outlined v-model="text" bg-color="white" input-class="text-center"
                                type="number" suffix="%" :dense="dense"/>
                    </div>
                </div>
                <div class="row q-my-md">
                    <div>
                        Transaction deadline 
                    </div>
                    <div class="q-pl-sm"> 
                        <q-icon name="help_outline"> 
                            <q-tooltip>
                                Your transaction will revert if it is pending for more than this period of time.
                            </q-tooltip>
                        </q-icon>
                    </div>
                </div>
                <div class="row text-center">
                    <div>
                        <q-input rounded outlined type="number" v-model="text" :dense="dense" style="width: 80px" />
                    </div>
                    <div class="q-ml-md q-pt-md">
                            minutes
                    </div>
                </div>
                <div class="q-my-md text-subtitle1 text-weight-bold">
                    Interface Settings
                </div>
                <div class="row q-pb-sm">
                    <div>
                        Toggle Expert Mode
                    </div>
                    <div class="q-pl-sm"> 
                        <q-icon name="help_outline"> 
                            <q-tooltip>
                                Allow high price impact trades and skip the confirm screen. Use at your own risk.
                            </q-tooltip>
                        </q-icon>
                    </div>    
                    <q-space />
                    <div>
                        <q-toggle v-model="bluetooth" label="ON/OFF" />
                    </div>
                </div>
                <div class="row q-py-md">
                    <div>
                        Disable Multihops
                    </div>
                    <div class="q-pl-sm"> 
                        <q-icon name="help_outline"> 
                            <q-tooltip>
                                Restricts swaps to direct pairs only.
                            </q-tooltip>
                        </q-icon>
                    </div>
                        <q-space />
                    <div>
                        <q-toggle v-model="bluetooth" label="ON/OFF" />
                    </div>
                </div>
            </div>
        </div>

        <q-separator class="q-my-xl" size="10px" />

        <!-- Select a Token -->

        <div class="q-ma-sm">
            <div class="boarder q-pa-md">
                <div class="row">
                    <div class="gSubTitleLG">
                        Select a Token
                    </div>
                        <q-space />
                    <div class="q-mt-lg">
                        <q-btn color="grey-10" flat icon="close" />
                    </div>
                </div>
                <div>
                    <q-input v-model="search" debounce="500" filled placeholder="Search name" hint="Debouncing 500ms" />
                </div>
                <div class="gSubTitleLG">
                    Common bases
                </div>
                <div class="row">
                    <div  class="q-gutter-sm q-pb-md">
                        <q-btn icon="paid" label="ETH" v-for="n in 5" :key="`xs-${n}`" />
                    </div>
                </div>

                    <q-separator size="1px" />
                
                <div>
                    <q-list bordered class=""> 
                        <q-item class="row" clickable v-ripple>
                            <q-item-section avatar>
                                <q-icon size="30px" name="paid" />
                            </q-item-section>
                            <div class="col-11 text-left">
                                <div class="text-align:left">CVC</div>
                                <div class="gCaption">Civic</div>
                            </div>                
                        </q-item>
                        
                        <q-item class="row" clickable v-ripple>
                            <q-item-section avatar>
                                <q-icon class="" size="30px" name="paid" />
                            </q-item-section>
                            <div class="text-left">
                                <div class="text-align:left">LINK</div>
                                <div class="gCaption">Chainlink</div>
                            </div>
                        </q-item>  
                        <q-item class="row" clickable v-ripple>
                            <q-item-section avatar>
                                <q-icon class="" size="30px" name="paid" />
                            </q-item-section>
                            <div class="text-left">
                                <div class="text-align:left">BTC</div>
                                <div class="gCaption">Bitcoin</div>
                            </div>
                        </q-item>           
                    </q-list>
                </div>

                <div>
                    <q-btn color="primary" label="Manage Token List" class="full-width" />
                </div>
            </div>
        </div>

        <q-separator class="q-my-xl" size="10px" />

        <!-- Pools Overview -->

        <div class="q-ma-md">        
            <div class="row q-mb-xl">
                <div class="gSubTitleLG">
                    Pools Overview
                </div>
                <q-space />
                
                <div class="q-pr-md q-pt-md">
                    <q-btn dense rounded outlined color="grey-10" icon-right="expand_more" label="More" style="width: 90px">
                        <q-menu>
                        <q-list style="min-width: 100px">
                            <q-item clickable v-close-popup>
                            <q-item-section>Create a Pool</q-item-section>
                            </q-item>
                            <q-item clickable v-close-popup>
                            <q-item-section>Migrate</q-item-section>
                            </q-item>
                            <q-item clickable v-close-popup>
                            <q-item-section>V2 liquidity</q-item-section>
                            </q-item>
                            <q-item clickable v-close-popup>
                            <q-item-section>Learn</q-item-section>
                            </q-item>
                        </q-list>
                        </q-menu>
                    </q-btn>
                </div>
                <div class="q-mt-md">
                    <q-btn icon="add" color="primary" label="New Position" />
                </div>
            
            </div>
            <div class="row">        
                <div class="col-8 q-pr-xs">
                    <div class="boarder q-pa-md">
                        <div class="text-h6">
                            Learn about providing liquidity
                            <span>
                                <q-icon name="call_made"> </q-icon>
                            </span>             
                        </div> 
                        <div>
                            Check out our v3 LP walkingthrough and margration guides.
                        </div>
                    </div>     
                </div>   
            
            
                <div class="col-4">
                    <div class="boarder q-pa-md">
                        <div class="text-subtitle1">
                                Top pools
                            <span>
                                <q-icon name="call_made"> </q-icon>
                            </span> 
                        </div>
                        <div>
                            Explore popular pools on WeVest Analytics.
                        </div>   
                    </div>
                </div>
            </div>

            
            <div class="text-center boarder q-my-lg">
                <div class="q-mt-lg">
                    <q-icon name="inbox" class="text-grey" style="font-size: 4em;" />
                </div>
                <div class="q-my-lg text-subtitle1">
                Your V3 liquidity position will appear hear.
                </div>
                <div class="q-mb-lg">
                    <q-btn color="primary" label="Connect a wallet" /> 
                </div>         
            </div>
        
            
            <div>
                <q-btn icon="menu" outlined label="View V2 Liquidity" />
            </div>
        </div>  

        <q-separator class="q-my-xl" size="10px" />

        <div>
            <q-btn dense rounded outlined color="primary" icon-right="expand_more" label="More" style="width: 90px">
                <q-menu>
                <q-list style="min-width: 100px">
                    <q-item clickable v-close-popup>
                    <q-item-section>Create a Pool</q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
                    <q-item-section>Migrate</q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
                    <q-item-section>V2 liquidity</q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
                    <q-item-section>Learn</q-item-section>
                    </q-item>
                </q-list>
                </q-menu>
            </q-btn>
        </div>
        
        <q-separator class="q-my-xl" size="10px" />

                <div class="row">
            <div class="col-12 col-md-6">
                <div class="row">
                    <div>
                        <q-btn flat size="20px" icon="keyboard_arrow_left"  />
                    </div>
                    <div class="q-pt-sm text-h6">
                        Add Liquidity
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="row btns q-ml-xl q-my-md">
                    <div class="q-mt-xs">
                        <q-btn flat label="Clear All" size="11px" />
                    </div>
                    <div>
                        <q-btn flat color="grey-7" icon="settings" />
                    </div>    
                </div>
            </div>
        </div>    

        <q-separator size="1px" />

        <div class="row">                 
            <div class="col-12 col-md-6 q-pa-md" >
                <div class="text-h6 q-pt-lg">
                    Select Pair
                </div>
                <div class="row q-my-md"> 
                    <div class="col-6 q-pr-sm">
                        <q-select dense round filled v-model="model" :options="options" label="ETH" />
                    </div>
                    <div class="col-6">
                        <q-select dense bg-color="primary" label-color="white" rounded outlined v-model="model" :options="options" label="Select a token" />
                    </div>
                </div>

                                    
                <div class="boarder q-pa-sm row">
                    <div>
                        <div class="text-h6">Fee tier</div>
                        <div class="gCaption">The % you will earn in fees.</div>
                    </div>
                    <q-space />
                    <div class="q-pt-sm">
                        <q-btn label="Edit" />
                    </div>
                </div>          
                  
                <div> 
                    <div class="text-h6 q-my-md">
                        Deposit Amounts
                    </div>
                    <div>
                        <div class="boarder q-pa-md q-my-sm">
                            <div class="row" clickable v-ripple>
                                <div class="q-pr-xs" avatar>
                                    <q-icon size="30px" name="paid" />
                                </div>
                                <div class="text-h6">
                                    ETH
                                </div>
                                <q-space />
                                <div class="text-h6 text-right">
                                    0.0 
                                </div>                       
                            </div>
                        </div>
                        <div class="boarder q-pa-md q-my-sm">    
                            <div class="row">
                                <div>
                                    <q-btn color="primary" rounded label="Select a Token" />
                                </div>
                                <q-space />
                                <div class="text-h6">
                                    0.0 
                                </div>                       
                            </div>
                        </div>    
                    </div> 
                </div>
            </div>
    
            <div class="col-12 col-md-6 q-pa-md">
                <div class="row">
                    <div class="text-h6 q-pt-lg">
                        Set Price Range
                    </div>                 
                </div>
                <div>
                    <div class="text-center q-pt-xl">
                        <q-icon size="50px" name="inventory_2" />
                    </div>
                    <div class="text-h6 text-center q-py-xl">
                        Your position will appear here.
                    </div>  
                </div>
                <div class="row"> 
                    <div class="col-6 q-pr-xs">
                        <div class="boarder q-pa-md">
                            <div class="text-center">
                                Min Price
                            </div>
                            <div class="row q-py-md text-center">
                                <div>
                                    <q-btn size="10px" dense flat icon="add" />
                                </div>
                                <div>0.0</div> 
                                <div>    
                                    <q-btn size="10px" dense flat icon="remove" />                           
                                </div>
                            </div>
                            <div class="text-center">
                                per ETH
                            </div>
                        </div>
                    </div>    
                    <div class="col-6 q-pl-xs">
                        <div class="boarder q-pa-md">
                            <div class="text-center">
                                    Max Price
                            </div>
                            <div class="row q-py-md">
                                <div>
                                    <q-btn size="10px" dense flat icon="add" />
                                </div>
                                <div>0.0</div> 
                                <div>
                                    <q-btn size="10px" dense flat icon="remove" />                           
                                </div>
                            </div>
                            <div class="text-center">
                                per ETH
                            </div>                                
                        </div>
                    </div>                    
                </div> 
                <div>
                    <div class="q-my-sm">
                        <q-btn class="full-width" label="Full Range" />
                    </div>
                    <div class="q-my-md">    
                        <q-btn class="full-width" color="primary" label="Connect wallet" />
                    </div>
                </div>
            </div>                    
        </div>

        <q-separator class="q-my-xl" size="10px" />

        <div class="boarder">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="row">
                        <div>
                            <q-btn flat size="20px" icon="keyboard_arrow_left"  />
                            
                        </div>
                        <div class="q-pt-sm text-h6">
                            Add Liquidity
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="row btns q-ml-xl q-my-md">
                        <div class="q-mt-xs">
                            <q-btn flat label="Clear All" size="11px" />
                        </div>
                        <div class="q-gutter">
                            <q-btn outline color="grey-8" label="ETH" />
                            <q-btn outline color="grey-8" label="0xBTC" />                            
                        </div>
                        <div>
                            <q-btn flat color="grey-7" icon="settings" />
                        </div>    
                    </div>
                </div>
            </div>    

            <q-separator size="1px" />

            <div class="row">                 
                <div class="col-12 col-md-6 q-pa-md" >
                    <div class="text-h6 q-pt-lg">
                        Select Pair
                    </div>
                    <div class="row q-my-md"> 
                        <div class="col-6 q-pr-sm">
                            <q-select dense round filled v-model="model" :options="options" label="ETH" />
                        </div>
                        <div class="col-6">
                            <q-select dense round filled v-model="model" :options="options" label="0XBTC" />
                        </div>
                    </div>

                                        
                    <div class="boarder q-pa-sm row">
                        <div>
                            <div class="text-h6">1% Fee tier</div>
                            <div class="gCaption">99% select</div>
                        </div>
                        <q-space />
                        <div class="q-pt-sm">
                            <q-btn label="Edit" />
                        </div>
                    </div>
                
                
                    <div class="row q-my-md">
                        <div class="col-4">
                            <div class="boarder q-pa-sm">
                                <div>
                                    <div>
                                        0.05% fee
                                    </div>                                   
                                    <div class="q-py-md">
                                        Best for stable pairs.
                                    </div>
                                    <div class="select q-pl-xs">
                                        0% select
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div class="col-4 q-px-xs">
                            <div class="boarder q-pa-sm">                        
                                <div>
                                    <div>
                                        0.3% fee
                                    </div>                                   
                                    <div class="q-py-md">
                                        Best for most pairs.
                                    </div>
                                    <div class="select q-pl-xs">
                                        1% select
                                    </div>
                                </div>   
                            </div>
                        </div>
                        <div class="col-4">                    
                            <div class="boarder q-pa-sm">
                                <div >
                                    <div>
                                        1% fee
                                    </div>                                   
                                    <div class="q-py-md">
                                        Best for exotic pairs.
                                    </div>
                                    <div class="select q-pl-xs">
                                        1% select
                                    </div>
                                </div>     
                            </div>                 
                        </div>
                    </div>        
                    <div> 
                        <div class="text-h6 q-my-md">
                            Deposit Amounts
                        </div>
                        <div class="">
                            <div class="boarder q-pa-sm q-my-sm">
                                <div class="row" clickable v-ripple>
                                    <div class="q-pr-xs" avatar>
                                        <q-icon size="30px" name="paid" />
                                    </div>
                                    <div class="text-h6">
                                        ETH
                                    </div>
                                    <q-space />
                                    <div class="text-h6 text-right">
                                        0.0 
                                    </div>                       
                                </div>
                            </div>
                            <div class="boarder q-pa-sm q-my-sm">
                                <div class="row" clickable v-ripple>
                                    <div class="q-pr-xs" avatar>
                                        <q-icon size="30px" name="paid" />
                                    </div>
                                    <div class="text-h6">
                                        0xBTC
                                    </div>
                                    <q-space />
                                    <div class="text-h6 text-right">
                                        0.0 
                                    </div>                       
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
        
                <div class="col-12 col-md-6 q-pa-md">
                    <div class="row">
                        <div class="text-h6 q-pt-lg">
                            Select Pair
                        </div>
                            <q-space />
                        <div class="q-pt-lg">
                            <q-btn dense flat icon="add_circle_outline"/>
                            <q-btn dense flat icon="remove_circle_outline" />
                        </div>
                        <div class="q-my-lg">
                            Current Price: 6750.14 <span class="gCaption">0XBTC per ETH</span>
                        </div>
                    </div>
                    <div>
                        CHART
                    </div>
                    <div class="row"> 
                        <div class="col-6 q-pr-xs">
                            <div class="boarder q-pa-md">
                                <div class="text-center">
                                    Min Price
                                </div>
                                <div class="row q-py-md text-center">
                                    <div>
                                        <q-btn size="10px" dense flat icon="add" />
                                    </div>
                                    <div>3383.3</div> 
                                    <div>    
                                        <q-btn size="10px" dense flat icon="remove" />                           
                                    </div>
                                </div>
                                <div class="text-center">
                                    0XBTC per ETH
                                </div>
                            </div>
                        </div>    
                        <div class="col-6 q-pl-xs">
                            <div class="boarder q-pa-md">
                                <div class="text-center">
                                        Max Price
                                </div>
                                <div class="row q-py-md">
                                    <div>
                                        <q-btn size="10px" dense flat icon="add" />
                                    </div>
                                    <div>3383.3</div> 
                                    <div>
                                        <q-btn size="10px" dense flat icon="remove" />                           
                                    </div>
                                </div>
                                <div class="text-center">
                                    0XBTC per ETH
                                </div>                                
                            </div>
                        </div>                    
                    </div> 
                    <div>
                        <div class="q-my-sm">
                            <q-btn class="full-width" label="Full Range" />
                        </div>
                            <q-btn class="full-width" color="primary" label="Connect wallet" />
                        <div class="q-my-md">    
                        </div>
                    </div>
                </div>                    
            </div>
        </div>
        <q-separator class="q-my-xl" size="10px" />

        <div class="boarder">    
            <div class="row">
                <div class="text-h6">
                Token Create
                </div>
                    <q-space />
                <div>
                    <q-btn flat icon="settings" />
                </div>
            </div> 
            <div class="boarder q-mb-lg"> 
                <div class="boarder q-pa-md">
                    <div>
                    코인 선택 후 하단에 잔액 표시
                    잔액 정보를 보고 금액 입력
                    </div>
                    <div class="text-subtitle1">비율</div>
                        <div class="row">
                            <div class="col">
                                <q-btn label="25%"/>
                            </div> 
                            <div class="col">
                                <q-btn label="50%"/>
                            </div> 
                            <div class="col">
                                <q-btn label="75%"/>
                            </div> 
                            <div class="col">
                                <q-btn label="100%"/>
                            </div> 
                        </div>    
                    <div class="row">
                        <div>
                            <q-btn label="LONG"/>
                        </div>
                        <div>
                            <q-btn label="SHORT" />
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                    <div class="q-gutter-y-md" style="max-width: 600px">
                        <q-tabs v-model="tab" class="grey" >
                            <q-tab label="Asset" />
                            <q-tab label="Token Issue" />
                            <q-tab label="Pool" />
                            <q-tab label="Vote" />
                            <q-tab label="Chart" />
                        </q-tabs>
                    </div>
                </div>     
            </div>   

        <q-separator class="q-my-xl" size="10px" />

            <div class="row text-center">
                <div>
                    <div>Are you sure?</div>
                </div>
                    <q-space />
                <div>
                    <q-btn icon="close" />
                </div>
                <q-separator class="" size="1px" />
                <p>
                    Expert mode turns off the confirm transaction prompt and allows high
                    slippage trades that often result in bad rates and lost funds.
                </p>
                <p>
                    ONLY USE THIS MODE IF YOU KNOW WHAT YOU ARE DOING.
                </p>
                <div>
                    <q-btn rounded color="primary" label="Turn On Expert Mode" />
                <div>
            </div>

        </div>
    </div>    
</template>







<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})
</script>

<style scoped>
.swap {
    /* 모바일 반응형 */
  max-width: 700px;
  width: auto;
  margin:0 auto;
} 

.btns {
    margin-right: -50px;
}

.select {
    border:solid 1px grey ;
    border-radius: 6px;
}

.boarder {
    border: 1px solid #bcbcbc;
    border-radius: 7px;

}

</style>
