<template>
  <v-navigation-drawer class="side-bar">
    <v-list-item class="item">
      <v-list-item-icon class="icon-button logo">
        <span :class="logo"></span>
      </v-list-item-icon>
    </v-list-item>
    <v-list class="main-items">
      <v-list-item v-for="item in items" class="item" :key="item.title">
        <router-link :to="item.path" class="nav-link">
          <v-list-item-icon class="icon-button">
            <span :class="['icon', item.icon]"></span>
          </v-list-item-icon>
        </router-link>
      </v-list-item>
    </v-list>
    <v-list-item class="item">
      <v-list-item-icon class="icon-button">
        <span :class="['icon', logOut]"></span>
      </v-list-item-icon>
    </v-list-item>
  </v-navigation-drawer>
</template>

<script lang="ts" src="./SideBar.ts"></script>

<style lang="scss" src="./style.scss"></style>
