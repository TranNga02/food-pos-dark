<template>
    <div class="home-page">
        <DarkLayout>
            <div class="col-sm-8">
                <MenuContainer></MenuContainer>
            </div>
            <div class="col-sm-4">
                ajjah
            </div>
        </DarkLayout>
    </div>
</template>
<script>
import DarkLayout from '@/layout/DarkLayout/DarkLayout.vue';
import MenuContainer from '@/container/MenuContainer/MenuContainer.vue'
export default{
    name: "home-page",
    components: {
    MenuContainer,
    DarkLayout
}
}
</script>
<style lang="scss">
@import url(./style.scss);
</style>