<template>
  <v-navigation-drawer class="side-bar">
    <v-list-item class="item">
      <v-list-item-icon :class="['icon', logo]">
        <Icon :icon="logo" />
      </v-list-item-icon>
    </v-list-item>
    <v-list class="main-items">
      <v-list-item v-for="item in items" class="item" :key="item.title">
        <router-link :to="`/${item.path}`" class="nav-link">
          <v-list-item-icon :class="['icon', item.icon]">
            <Icon :icon="item.icon" />
          </v-list-item-icon>
        </router-link>
      </v-list-item>
    </v-list>
    <v-list-item class="item">
      <v-list-item-icon :class="['icon', logOut]">
        <Icon :icon="logOut" />
      </v-list-item-icon>
    </v-list-item>
  </v-navigation-drawer>
</template>
<script lang="ts" src="./SideBar.ts"></script>

<style lang="scss" src="./style.scss"></style>
