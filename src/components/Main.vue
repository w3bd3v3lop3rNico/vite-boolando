<script>
import CardProduct from './CardProduct.vue';

export default {
    components: {
        CardProduct
    },
    data() {
        return {
            

        }
    },
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-4" v-for="n in 6" :key="n">
                <CardProduct />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.row {
    row-gap: 20px;
}
.col-4 {
    flex-basis: calc((100% * 4) / 12);
    padding: 10px;
}
</style>