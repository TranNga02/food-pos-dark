<template>
    <div class="menu-container container">
        <div class="info">
            <h1>Jaegar Resto</h1>
            <p>Tuesday, 2 Feb 2021</p>
        </div>
        <div class="menu">
            <div class="nav-type">
                <ul class="nav nav-pills outline-active">
                    <li class="nav-item active">
                        <router-link to="/menu-content" class="nav-link">
                            Hot Dishes
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/home-page" class="nav-link">
                            Cold Dishes
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/menu-content" class="nav-link">
                            Soup
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/menu-content" class="nav-link">
                            Grill
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/menu-content" class="nav-link">
                            Appetizer
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/menu-content" class="nav-link">
                            Dessert
                        </router-link>
                    </li>
                </ul>
                <hr>
            </div>
            <router-view></router-view>
            <!-- <MenuContent></MenuContent> -->
        </div>
    </div>
</template>
<script>
// import MenuContainerJs from "./MenuContainer";

// import MenuContent from '../MenuContent/MenuContent.vue';
export default{
    name: "menu-container",
    components:{
        // MenuContent
    }
}
</script>
<style lang="scss">
@import url(./style.scss);
</style>