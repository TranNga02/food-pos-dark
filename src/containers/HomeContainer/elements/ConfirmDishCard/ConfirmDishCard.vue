<template>
  <div class="card">
    <v-row class="card__info">
      <v-col md="8">
        <div class="card__image">
          <img :src="require(`@/assets/images/${dishOrder.src}`)" width="45px" />
        </div>
        <div>
          <p class="card__name">{{ dishOrder.name }}</p>
          <p class="card__price">$ {{ dishOrder.price }}</p>
        </div>
      </v-col>
      <v-col md="2">
        <div class="card__quantity">
          <Input
            :value="dishOrder.quantity"
            :onChange="onChangeQuantity"
            type="number"
            :max="dishOrder.available"
            solo
          />
        </div>
      </v-col>
      <v-col md="2">
        <div class="card__price--total">$ {{ total }}</div>
      </v-col>
    </v-row>
    <v-row class="card__confirm">
      <v-col md="10">
        <Input placeholder="Order Note..." :onChange="onChangeNote" solo />
      </v-col>
      <v-col md="2">
        <Button icon="trash" plain :onClick="clickBtn"></Button>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" src="./ConfirmDishCard.ts"></script>

<style lang="scss" src="./style.scss"></style>
