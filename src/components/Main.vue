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
            store: store,
            open: false,
            selectedItem: {}
        }
    },
    methods: {
        showModal(item) {
            console.log('show modal', item.name);
            this.selectedItem = item;
            this.open = true;
        },
        closeModal() {
            this.open = false;
            this.selectedItem = {};
        }
    },
    created() {
        // console.log(this.store)
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <CardProduct v-for="product in store.products" :item="product" :key="product.id" @show="showModal" />
        </div>
    </div>
    <div class="selected-product" v-if="open">
        <div class="card">
            <div class="card-header">
                <h4>
                    {{ selectedItem.name }}
                </h4>
                <div class="close-icon">
                    <font-awesome-icon @click="closeModal" icon="fa-solid fa-circle-xmark" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.row {
    row-gap: 20px;
}

.selected-product::after {
    content: '';
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 60;
    background-color: rgba($color: #000000, $alpha: 0.5);
}

.selected-product .card {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 70;
    border-radius: 10px;
    padding: 20px;
    width: 100%;
    max-width: 500px;
    background-color: white;
    text-align: center;

    .card-header {
        display: flex;
        justify-content: space-between;
    }

}
</style>