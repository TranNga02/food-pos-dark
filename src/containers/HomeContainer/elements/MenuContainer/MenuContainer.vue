<template>
  <div class="menu">
    <div class="header">
      <div>
        <p class="header-title">{{ title }}</p>
        <p class="date">{{ date }}</p>
      </div>
      <div>
        <Input placeholder="Search for food, coffee, etc.." :onChange="changeSearch" icon="search" :solo="true" />
      </div>
    </div>
    <div class="navbar">
      <v-btn-toggle class="bt-group" v-model="menuValue" mandatory>
        <v-btn
          class="btn"
          v-for="item in menuItems"
          :key="item.value"
          color="white"
          text
          height="25px"
          min-width="fit-content"
        >
          {{ item.name }}
        </v-btn>
      </v-btn-toggle>
    </div>
    <div class="detail-header">
      <div><p>Choose Dishes</p></div>
      <div>
        <DropDown :options="dropdownItems" :value="selectValue" label="Order Type" :onChange="changeSelect" />
      </div>
    </div>
    <div class="detail">
      <v-row>
        <v-col md="4" class="col-sm-4" v-for="dish in dishInfo" :key="dish.id">
          <DishCard width="250px" :dishInfo="dish" :onChangeDish="changeDishOrder" :dishesOrder="dishesOrder" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts" src="./MenuContainer.ts"></script>

<style lang="scss" src="./style.scss"></style>
