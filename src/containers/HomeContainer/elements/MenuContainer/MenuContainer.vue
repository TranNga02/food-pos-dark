<template>
  <div class="menu">
    <div class="header">
      <div>
        <p class="header-title" v-if="shopInfo != null">{{ shopInfo.name }}</p>
        <p class="date">{{ getDate() }}</p>
      </div>
      <div>
        <Input placeholder="Search for food, coffee, etc.." :onChange="changeSearch" icon="search" solo />
      </div>
    </div>
    <div class="navbar">
      <v-btn-toggle class="bt-group" v-model="menuValue" mandatory>
        <v-btn
          class="btn"
          v-for="item in menuCategory"
          :key="item.name"
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
        <DropDown :options="dropdownItems" :value="orderType" :onChange="changeOrderType" />
      </div>
    </div>
    <div class="detail">
      <v-row>
        <v-col md="4" class="col-sm-4" v-for="product in productInfo" :key="product.id">
          <DishCard
            width="250px"
            :productInfo="product"
            :onChangeDish="changeProductOrder"
            :productOrderInfo="productOrderInfo"
          />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts" src="./MenuContainer.ts"></script>

<style lang="scss" src="./style.scss"></style>
