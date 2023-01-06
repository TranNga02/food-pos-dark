<template>
    <div class="menu-content">
        <div class="row">
            <div class="col-sm-4">
                <DishCard v-bind:dishInfo="dishInfo"></DishCard>
            </div>
            <div class="col-sm-4">
                <DishCard v-bind:dishInfo="dishInfo"></DishCard>
            </div>
            <div class="col-sm-4">
                <DishCard v-bind:dishInfo="dishInfo"></DishCard>
            </div>
        </div>
    </div>
</template>
<script>
import DishCard from '../../components/DishCard/DishCard.vue';
export default{
    name: 'menu-content',
    data(){
        return {
            dishInfo: {
                image: "@/assets/Image/noodles.png",
                name: "Spicy seasoned seafood noodles",
                price: 2.29,
                quantity: 20,
                ordered: 200
            },
        }
    },
    components:{
        DishCard
    }
}
</script>
<style></style>