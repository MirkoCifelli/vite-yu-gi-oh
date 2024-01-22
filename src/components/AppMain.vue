<script>
import SingleCard from './SingleCard.vue';
import { store } from '../store';
export default {
    data() {
        return {
            store
        };
    },

    components: {
        SingleCard
    },
    mounted(){
        console.log('sottoooo', this.store.cards)
    }

}
// console.log(" quiiiii", store)
// console.log('qui due', store.cards[0].name)
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-auto mb-2 ">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="col-12 bg-dark text-light">
                    Found x Card
                </div>
            </div>
            <div class="row mt-2 ">
                <div class="col-2 bg-warning m-2 " v-for="(elem,i) in store.cards" :key="i">
                    <SingleCard  :card="elem"/>
                    <!-- <SingleCard v-for="(elem,i) in store.cards" :key="i"/> -->
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
</style>
