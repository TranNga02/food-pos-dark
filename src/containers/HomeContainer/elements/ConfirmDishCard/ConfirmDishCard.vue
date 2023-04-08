<template>
  <div class="card">
    <v-row class="card__info">
      <v-col md="8">
        <div class="card__image">
          <img
            :src="`https://pos-api.utilityhelpful.com/storage/images/origins/${productOrderInfo.info.image}`"
            width="45px"
          />
        </div>
        <div>
          <p class="card__name">{{ productOrderInfo.info.name }}</p>
          <p class="card__price">$ {{ productOrderInfo.info.price }}</p>
        </div>
      </v-col>
      <v-col md="2">
        <div class="card__quantity">
          <Input
            :value="productOrderInfo.quantity"
            :onChange="onChangeQuantity"
            type="number"
            :max="productOrderInfo.info.unit"
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
        <Input placeholder="Order Note..." solo />
      </v-col>
      <v-col md="2">
        <Button icon="trash" plain :onClick="clickBtn"></Button>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" src="./ConfirmDishCard.ts"></script>

<style lang="scss" src="./style.scss"></style>
