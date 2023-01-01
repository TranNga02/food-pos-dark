<template>
    <div id="dish-card">
        <div class="card">
            <div class="card-body">
                <img src="../assets/Image/noodles.png" alt="">
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
    @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap'); 
    @import url("../styles/card.scss");
</style>