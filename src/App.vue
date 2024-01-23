<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
// import AppFooter from './components/AppFooter.vue';
import axios from 'axios';
// import { store } from './store.js';
import { store } from './store';

export default {
    data() {
        return {
            store
        };
    },
    components: {
        AppHeader,
        AppMain,
        // AppFooter
    },  
    methods: {
        createCardParams(){
            axios.get(this.store.baseUrl,{
                params:{
                    archetype: this.store.archImput
                }
            }).then((response)=>{
            
            this.store.cards = response.data.data;
            
        })
        },
        createCard(){
            axios.get(this.store.baseUrl)
            .then((response)=>{
            
            this.store.cards = response.data.data;
            
        })
        },
        arcCard(){
            
            axios.get(this.store.archUrl).then((response)=>{
          
            this.store.archArray = response.data;
           
        })
        }
    },
    created(){
        this.createCard();
        this.arcCard();
    }
}
</script>

<template>


    <AppHeader />

    <AppMain @qualcosa="createCardParams"/>

    <!-- <AppFooter /> -->
</template>

<style lang="scss">
@use "assets/scss/main" as *;
@import "assets/scss/partials/reset";
</style>
