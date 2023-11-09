import { reactive } from 'vue';
// import productsJSON from './db.json';
export const store = reactive({
   
    products: [],

    footer: [
        {
            title: 'Boolando s.r.l.',
            data: [
                {legals: 'Informazioni legali'},
                {privacy: 'Informativa sulla privacy'},
                {rights: 'Diritto di recesso'}
            ]
        },
        {
            title: 'Trovaci anche su',
            data: [
                {}
            ]
        }
    ]
});
