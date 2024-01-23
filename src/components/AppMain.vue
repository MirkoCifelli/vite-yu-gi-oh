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
    methods :{
        OjectArcType(x){
            this.store.archImput = x
        }
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
                    <select 
                        v-model="store.archImput"
                        @click="$emit('qualcosa')"
                        class="form-select" aria-label="Default select example">
                        <option 
                        @click="OjectArcType(value)"
                        v-for="(arc,i) in store.archArray" :key="i"
                        :value="arc.archetype_name"
                        >
                            {{ arc.archetype_name }}
                        </option>
                        <!-- <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option> -->
                    </select>
                </div>
                <div class="col-12 bg-dark text-light">
                    Found {{store.cards.length}} Card
                </div>
            </div>
            <div class="row mt-2 justify-content-center ">
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
