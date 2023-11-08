<script>
import CardProduct from './CardProduct.vue';
// import productsJson from '../db.json';
import { store } from '../store.js'

export default {
    components: {
        CardProduct
    },
    data() {
        return {
            // products: productsJson.products,
            store : store
        }
    },
    created() {
        console.log(this.store)
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <CardProduct v-for="product in store.products" 
            :item="product"
            :key="product.id"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.row {
    row-gap: 20px;
}
</style>