<template>
  <v-navigation-drawer class="side-bar">
    <v-list-item class="item">
      <v-list-item-icon class="logo">
        <FontIcon :name="'icon-logo'" :color="'#EA7C69'" :size="40"></FontIcon>
      </v-list-item-icon>
    </v-list-item>
    <v-list>
      <v-list-item v-for="item in items" class="item" :key="item.icon">
        <router-link :to="item.path" class="nav-link">
          <v-list-item-icon class="icon-button">
            <FontIcon :name="`icon ${item.icon}`" :color="'#EA7C69'" :size="24"></FontIcon>
          </v-list-item-icon>
        </router-link>
      </v-list-item>
    </v-list>
    <v-list-item class="item">
      <v-list-item-icon class="icon-button">
        <FontIcon :name="'icon icon-log-out'" :color="'#EA7C69'" :size="24"></FontIcon>
      </v-list-item-icon>
    </v-list-item>
  </v-navigation-drawer>
</template>

<script lang="ts" src="./SideBar.ts"></script>

<style lang="scss" src="./style.scss"></style>
