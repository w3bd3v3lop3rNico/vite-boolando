<script>
export default {
    data() {
        return {

        }
    },
    props: {
        item: {
            tipe: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="card col-4">
        <div class="card-image-body">
            <figure class="card-figure">
                <img :src="'/img/' + item.backImage" alt="">
                <img :src="'/img/' + item.frontImage" alt="" class="card-a">
            </figure>
            <div class="card-image-icon">
                &hearts;
            </div>
            <div class="card-image-discount position-abs">
                <span class="percentage">50%</span>
                <span>sostenibilità</span>
            </div>
        </div>
        <div class="card-title">
            <p> {{ item.brand }}</p>
            <p class="small-title">{{ item.name }}</p>
            <p><span class="color-red">{{ item.price }}</span></p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.col-4 {
    flex-basis: calc((100% * 4) / 12);
    padding: 10px;
}
.card-image-body {
    position: relative;
    .card-figure {
    position: relative;
    .card-a {
        position: absolute;
        top: 0;
        &:hover {
            opacity: 0;
        }
        
    }
    
    
    }
    .card-image-icon {
        position: absolute;
        z-index: 999;
        top: 5px;
        right: 5px;
    }
    .card-image-discount {
        position: absolute;
        bottom: 5px;
        left: 5px;
    }
}


</style>