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
        createCard(){
            axios.get(this.store.baseUrl).then((response)=>{
            // console.log(response)
            this.store.cards = response.data.data;
            // console.log( 'sopra', this.store.cards)
        });
        },
        arcCard(){
            axios.get(this.store.archUrl).then((response)=>{
          
            this.store.archArray = response.data;
           
        });
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

    <AppMain />

    <!-- <AppFooter /> -->
</template>

<style lang="scss">
@use "assets/scss/main" as *;
@import "assets/scss/partials/reset";
</style>
