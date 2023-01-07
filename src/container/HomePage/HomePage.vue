<template>
    <div class="home-page">
        <DarkLayout>
            <div class="row">
                <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <MenuContainer></MenuContainer>
                </div>
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <OrderCart></OrderCart>
                </div>
            </div>
        </DarkLayout>
    </div>
</template>
<script>
import DarkLayout from '@/layout/DarkLayout/DarkLayout.vue';
import MenuContainer from '@/container/MenuContainer/MenuContainer.vue'
import OrderCart from '@/container/OrderCart/OrderCart.vue';
export default{
    name: "home-page",
    components: {
    MenuContainer,
    DarkLayout,
    OrderCart
}
}
</script>
<style lang="scss">
@import url(./style.scss);
</style>