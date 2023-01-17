<template>
  <v-navigation-drawer class="side-bar" :width="90">
    <v-list-item class="item">
      <v-list-item-icon class="logo">
        <FontIcon name="logo" :size="40"></FontIcon>
      </v-list-item-icon>
    </v-list-item>
    <v-list>
      <v-list-item v-for="item in items" class="item" :key="item.icon">
        <router-link :to="item.path" class="nav-link">
          <v-list-item-icon class="icon-button">
            <FontIcon :name="item.icon"></FontIcon>
          </v-list-item-icon>
        </router-link>
      </v-list-item>
    </v-list>
    <v-list-item class="item">
      <v-list-item-icon class="icon-button">
        <FontIcon name="log-out"></FontIcon>
      </v-list-item-icon>
    </v-list-item>
  </v-navigation-drawer>
</template>

<script lang="ts" src="./SideBar.ts"></script>

<style lang="scss" src="./style.scss"></style>
