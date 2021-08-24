<template>
    <div class="swap">
        <q-card class="q-ma-sm">
            <div class="q-ma-md">
                <div class="row q-pa-md">
                    <div class="gSubTitleLG">
                        Swap
                    </div>     
                    <q-space />
                    <div class="q-pt-lg">
                        <q-btn flat color="grey-7" icon="settings" />
                    </div>
                </div>
                
                <q-card class="row q-pa-xl">
                    <div>
                        ETH
                    </div>     
                    <q-space />
                    <div>
                        0.0 
                    </div>
                </q-card>
                <q-card class="row q-pa-xl q-my-md">
                    <div>
                        Select a Token
                    </div>

                    <q-space />

                    <div>
                        0.0
                    </div>
                </q-card>

                <div class="text-center q-pb-lg">
                    <q-btn color="primary" class="q-py-sm full-width" label="Connect Wallet"/>
                </div>
            </div>
        </q-card>

        <q-separator class="q-my-xl" size="10px" />

        <div class="row">
            <div class="q-pa-md gSubTitleLG">
                Select a Token
            </div>
            <q-space />
            <div class="q-pa-md q-mt-lg">
                <q-btn color="grey-10" flat icon="close" />
            </div>
        </div>
        <div>
            <q-input v-model="search" debounce="500" filled placeholder="Search name" hint="Debouncing 500ms" />
        </div>
        <div class="q-pa-md gSubTitleLG">
            Common bases
        </div>
        <div class="q-pa-md q-gutter-sm">
            <q-btn />
            <q-btn />
            <q-btn />
            <q-btn />
            <q-btn />
            <q-btn />             
        </div>

            <q-separator size="1px" />
        
        <div class="q-pa-md">
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

        <div class="q-pa-md">
            <q-btn color="primary" label="Manage Token List" class="full-width" />
        </div>

        <q-separator class="q-my-xl" size="10px" />
        
        <div class="q-ma-md">        
            <div class="row q-mb-xl">
                <div class="gSubTitleLG">
                    Pools Overview
                </div>
                <q-space />
                <div class="q-mr-sm q-mt-md">
                    <q-select dense rounded outlined v-model="model" :options="options" label="More" style="width: 100px"/>
                </div>
                <div class="q-mt-md">
                    <q-btn icon="add" color="primary" label="New Position" />
                </div>
            </div>
            <div class="row">
                <div class="col-8 q-pr-sm">
                    <q-card>
                        <q-card-section class="bg-primary text-white">
                            <div class="text-h6">
                                Learn about providing liquidity
                                <span>
                                    <q-icon name="call_made"> </q-icon>
                                </span>             
                            </div> 
                            </q-card-section>
                        <q-card-section>
                            Check out our v3 LP walkingthrough and margration guides.
                        </q-card-section>
                    </q-card>
                </div>   
                <div class="col-4">
                    <q-card>
                        <q-card-section class="bg-primary text-white">
                            <div class="text-subtitle1">
                                Top pools
                            <span>
                                <q-icon name="call_made"> </q-icon>
                            </span> 
                            </div>
                        </q-card-section>
                        <q-card-section>
                            Explore popular pools on Uniswap Analytics.
                        </q-card-section> 
                    </q-card>                       
                </div>    
            </div>

            <div class="text-center q-my-lg">
                <q-card bordered>
                    <div class="q-mt-lg">
                        <q-icon name="inbox" class="text-grey" style="font-size: 4em;" />
                    </div>
                    <div class="q-my-lg text-subtitle1">
                    Your V3 liquidity position will appear hear.
                    </div>
                    <div class="q-mb-lg">
                        <q-btn color="primary" label="Connect a wallet" /> 
                    </div>         
                </q-card>
            </div>
            
            <div>
                <q-btn icon="menu" outlined label="View V2 Liquidity" />
            </div>
        </div>  

        <q-separator class="q-my-xl" size="10px" />

        <div class="q-ma-md">
            <div class="row">
                <div>
                    <q-btn flat size="20px" icon="keyboard_arrow_left"  />
                </div>
                <div class="col text-center text-h6">
                    Add Liquidity
                </div>
                <div class="col row btns">
                    <div class="q-mt-xs">
                        <q-btn flat label="Clear All" size="11px" />
                    </div>
                    <div class="q-gutter">
                        <q-btn outline color="grey-8" label="1INCH" />
                        <q-btn outline color="grey-8" label="AAVE" />                            
                    </div>
                    <div>
                        <q-btn flat color="grey-7" icon="settings" />
                    </div>
                </div>
            </div>    

            <q-separator size="1px" />

            <div> 
                <div class="text-h6 q-pt-lg">
                    Select Pair
                </div>
                <div class="row q-my-md"> 
                    <div class="col-6 q-pr-sm">
                        <q-select dense round filled v-model="model" :options="options" label="1INCH" />
                    </div>
                    <div class="col-6">
                        <q-select dense round filled v-model="model" :options="options" label="AAVE" />
                    </div>
                </div>
                <div class="row">
                    <q-card outlined round>                                        
                        <q-item>                                  
                            <q-item-section class="">
                                0.05% fee  tier
                            </q-item-section>
                            
                            
                            <q-item-section class="">                        
                                    <q-btn label="Edit" />
                            </q-item-section>                               
                        </q-item>                                         
                    </q-card>
                </div>
                <div class="row q-my-md">
                    <div class="col-4">
                        <q-card>
                          <q-item>
                                <div>
                                    <div>
                                        0.05% fee
                                    </div>                                   
                                    <div class="q-py-md">
                                        Best for stable pairs.
                                    </div>
                                    <div class="select">
                                        0% select
                                    </div>
                                </div>   
                            </q-item>
                        </q-card>
                    </div>
                    <div class="col-4 q-px-xs">
                        <q-card>
                            <q-item>
                                <div>
                                    <div>
                                        0.3% fee
                                    </div>                                   
                                    <div class="q-py-md">
                                        Best for most pairs.
                                    </div>
                                    <div class="select">
                                        1% select
                                    </div>
                                </div>   
                            </q-item>
                        </q-card>
                    </div>
                    <div class="col-4">
                 
                        <q-card>
                            <q-item>
                                <div >
                                    <div>
                                        1% fee
                                    </div>                                   
                                    <div class="q-py-md">
                                        Best for exotic pairs.
                                    </div>
                                    <div class="select">
                                        1% select
                                    </div>
                                </div>      
                            </q-item>
                        </q-card>
                 
                    </div>
                </div>        
            </div>

            <div> 
                <div class="text-h5 q-my-md">
                    Deposit Amounts
                </div>
                <div class="">
                    <q-card class="q-my-sm">
                        <q-item class="row" clickable v-ripple>
                            <q-item-section avatar>
                                <q-icon size="30px" name="paid" />
                            </q-item-section>
                            <q-item-section class="text-h6">
                                ETH
                            </q-item-section>
                            <q-item-section class="text-h6 text-right">
                                0.0 
                            </q-item-section>                       
                        </q-item>
                    </q-card>
                    <q-card>
                        <q-item class="row" clickable v-ripple>
                            <q-item-section avatar>
                                <q-icon size="30px" name="paid" />
                            </q-item-section>
                            <q-item-section class="text-h6">
                                BTC
                            </q-item-section>
                            <q-item-section class="text-h6 text-right">
                                0.0 
                            </q-item-section>                       
                        </q-item>
                    </q-card>
                </div>  
                <div> 

                </div>
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
</style>
