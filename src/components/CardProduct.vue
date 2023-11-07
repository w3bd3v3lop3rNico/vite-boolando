<script>
</script>

<template>
    <div class="card">
        <div class="card-image-body">
            <figure class="card-figure">
                <img src="/img/1b.webp" alt="">
                <img src="/img/1.webp" alt="" class="card-a">
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
            <p>Lorem, ipsum.</p>
            <p class="small-title">Lorem ipsum</p>
            <p><span class="color-red">23.50</span> <span class="line">20.00</span></p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
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