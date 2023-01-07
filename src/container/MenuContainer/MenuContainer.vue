<template>
    <div class="menu-container container">
        <div class="header">
            <div class="info">
                <h1>Jaegar Resto</h1>
                <p>Tuesday, 2 Feb 2021</p>
            </div>
            <div class="nav-type">
                <ul class="nav nav-pills outline-active">
                    <li class="nav-item">
                        <router-link to="/menu/hot-dishes" class="nav-link">
                            Hot Dishes
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/menu/cold-dishes" class="nav-link">
                            Cold Dishes
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/menu/soup" class="nav-link">
                            Soup
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/menu/grill" class="nav-link">
                            Grill
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/menu/appetizer" class="nav-link">
                            Appetizer
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/menu/dessert" class="nav-link">
                            Dessert
                        </router-link>
                    </li>
                </ul>
                <hr>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
</script>
<style lang="scss">
@import url(./style.scss);
</style>