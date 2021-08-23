<template>
    <div class="swap-card">
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

        <div class="row">
            <div class="q-pa-md gSubTitleLG">
                Select a Token
            </div>
            <q-space />
            <div class="q-pa-md q-mt-md">
                <q-btn color="grey-10" flat icon="close" />
            </div>
        </div>
        <div>
            <q-input v-model="search" debounce="500" filled placeholder="Search" hint="Debouncing 500ms" />
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
        <div class="q-pa-md col">
            <div>Coin Name</div>
            <div>Coin Name</div>
            <div>Coin Name</div>
        </div>

        <div class="q-pa-md">
            <q-btn color="primary" label="Manage Token List" class="full-width" />
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
/* .card { */
    /* width:370px; */
    /* margin: 0 auto ; */

.swap-card {
  max-width: 700px;
  width: auto;
  margin:0 auto;
} 


</style>
