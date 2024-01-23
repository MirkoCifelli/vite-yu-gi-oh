import { reactive } from "vue";
export const store = reactive({
    cards: [],
    baseUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    archUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    archArray:[],
    archImput: ''
});