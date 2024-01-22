<script>
export default {
    data() {
        return {
            
        };
    },
   
    props:{
        card: Object
    }

}
// console.log('quiiii',card)
</script>

<template>
    
        <div class="single-card">
            <div class="mb-2">
                <img class="w-100 mt-2 "
                    :src="card.card_images[0].image_url"
                    :alt="card.name">
            </div>

            <div>
                <h2 class="mb-3 fs-5 text-light text-center">
                    {{ card.name }}
                </h2>

                <h4 class="fs-6 text-center ">
                    {{ card.archetype }}
                </h4>
            </div>
        </div>
        <!-- <h2>
            ciao sono qui
        </h2>
    -->
</template>

<style lang="scss" scoped>
</style>
