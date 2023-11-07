<script>
import CardProduct from './CardProduct.vue';
import productsJson from '../db.json';

export default {
    components: {
        CardProduct
    },
    data() {
        return {
        }
    },
    data() {
        return {
            products: productsJson.products,
        }
    },
    created() {
        console.log(this.products)
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <CardProduct v-for="product in products" 
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