<template>
  <div class="menu">
    <div class="header">
      <div>
        <p class="title">{{ title }}</p>
        <p class="date">{{ date }}</p>
      </div>
      <div>
        <Input placeholder="Search for food, coffee, etc.." icon="search" solo />
      </div>
    </div>

    <div class="content">
      <div class="navbar">
        <ul>
          <router-link v-for="item in items" :key="item.name" :to="item.path">
            <li>{{ item.name }}</li>
          </router-link>
        </ul>
      </div>
      <div class="detail">
        <div class="detail-header">
          <div><p>Choose Dishes</p></div>
          <div><DropDown :onChange="changeSelect" /></div>
        </div>
        <div class="detail-content">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./MenuContainer.ts"></script>

<style lang="scss" src="./style.scss"></style>
