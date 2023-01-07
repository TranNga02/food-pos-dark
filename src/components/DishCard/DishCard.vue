<template>
    <div class="dish-card mt-5">
        <div class="card text-center">
            <div class="card-body">
                <img :src="require(`../../assets/Image/${dishInfo.image}`)" alt="">
                <div class="content px-3">
                    <h5 class="card-title name">{{ dishInfo.name }}</h5>
                    <p class="card-text price">$ {{ dishInfo.price }}</p>
                    <p class="card-text available-product">{{ dishInfo.quantity }} Bowls available</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'dish-card',
        props:{
            dishInfo: {
                type: Object,
                default: function () {
                    return { message: 'hello' }
                }
            }
        }
    }
</script>
<style lang="scss">
    @import url("./style.scss");
</style>