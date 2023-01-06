<template>
    <div class="sidebar-container d-flex align-items-stretch">
        <SideBar></SideBar>
    </div>
</template>
<script>
import SideBar from '@/components/SideBar/SideBar.vue';
export default{
    name: "sidebar-container",
    comments: SideBar,
    components: { SideBar }
}
</script>
<style lang="scss">
@import url(./style.scss);
</style>