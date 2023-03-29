<template>
  <div class="side-bar">
    <div class="side-bar__logo">
      <div class="icon-button icon-button__logo">
        <FontIcon name="logo" :size="40" />
      </div>
    </div>
    <div class="side-bar__items">
      <ul>
        <li v-for="item in items" class="item" :key="item.icon">
          <router-link :to="item.path">
            <div class="icon-button icon-button__item">
              <FontIcon :name="item.icon" />
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="side-bar__log-out">
      <div class="icon-button icon-button__log-out">
        <FontIcon name="log-out" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./SideBar.ts"></script>

<style lang="scss" src="./style.scss"></style>
