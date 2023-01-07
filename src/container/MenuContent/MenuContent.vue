<template>
    <div class="menu-content">
        <div class="content">
            <div class="row">
                <div class="col-sm-4" v-for="(dish,index) in dishInfo" v-bind:key="index">
                    <DishCard v-bind:dishInfo="dish"></DishCard>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./MenuContent.js">
</script>
<style lang="scss">
@import url(./style.scss);
</style>