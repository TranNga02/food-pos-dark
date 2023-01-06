<template>
    <div class="dark-layout">
        <div class="row m-0">
            <div class="col-sm-auto sticky-top p-0 d-flex align-items-stretch">
                <SideBarContainer></SideBarContainer>
            </div>
            <div class="col-sm p-3 min-vh-100">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
import SideBarContainer from '@/container/SideBarContainer/SideBarContainer.vue';
export default {
    name: "dark-layout",
    comments: SideBarContainer,
    components: { SideBarContainer }
}
</script>
<style lang="scss">
@import url(./style.scss);
</style>