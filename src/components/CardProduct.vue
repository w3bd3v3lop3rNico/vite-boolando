<script>
export default {
    data() {
        return {
        }
    },
    props: {
        item: {
            tipe: Array,
            required: true
        }
    },
    methods: {
        // dichiaro la funzione
        getDiscountedPrice() {
            // mi salvo in una variabile il valore di default "0" da sottrarre al prezzo originale
            let discountPrice = 0
            // ciclo l'array de
            for (let i = 0; i < this.item.badges.length; i++) {
                // console.log(i)
                const currentBadge = this.item.badges[i];
                // console.log(currentBadge) 
                if (currentBadge.type === 'discount') {
                    let discountValue = parseInt(currentBadge.value) * -1;
                    // console.log(discountValue);
                    discountPrice = (this.item.price / 100) * discountValue;
                }
                // console.log(discountPrice)
            }
            const finalPrice = this.item.price - discountPrice;
            // console.log(finalPrice)
            return finalPrice.toFixed(2)
        },
        onClick() {
            console.log(this.item.name)
            this.$emit('show', this.item)
        }
    },
    created() {
        // this.getDiscountedPrice(this.item)
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
            <div class="card-image-icon" :class="item.isInFavorites ? 'favourite' : ''">
                <font-awesome-icon icon="fa-solid fa-heart" />
            </div>
            <div class="card-image-tags">
                <p :class="badge.type" v-for="(badge, index) in item.badges" :key="index">{{ badge.value }}</p>
            </div>
        </div>
        <div class="card-text">
            <p class="brand"> {{ item.brand }}</p>
            <h4 class="title" @click="onClick">{{ item.name }}</h4>
            <p class="prices">
                 <span class="discounted-price">
                    {{ getDiscountedPrice() }}
                </span>
                <span v-show="item.price != getDiscountedPrice()" class="original-price">
                    {{ item.price }}
                </span>
               
            </p>
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

    .favourite {
        color: red;
    }

    .tag {
        padding: 3px 10px;
        background-color: green;
    }

    .discount {
        padding: 3px 10px;
        background-color: red;
    }

    .card-image-icon {
        position: absolute;
        z-index: 30;
        top: 5px;
        right: 0;
        background-color: white;
        padding: 5px;
        display: flex;
        align-items: center;
    }

    .card-image-tags {
        position: absolute;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        bottom: 25%;
        font-size: 10px;
        gap: 2px;
        color: white;
    }
}
.card-text {
    .brand {
        font-size: 12px;
    }
    .title {
        font-weight: bold;
        text-transform: uppercase;
        font-size: 13px;
    }
    .prices {
        font-size: 12px;
        display: flex;
        gap: 5px;

        .discounted-price {
            font-weight: bold;
            color: red;
        }
        .original-price {
            text-decoration: line-through;
        }
    }
}
</style>