<template>
  <v-row>
    <v-col cols="12" sm="8" class="menu">
      <v-card>
        <v-navigation-drawer>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="name">Jaegar Resto</v-list-item-title>
              <v-list-item-subtitle class="day"> Tuesday, 2 Feb 2021</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list class="menu-types">
            <v-list-item v-for="item in items" class="item" :key="item">
              <router-link to="/..." class="nav-link">
                <v-list-item-content class="type">
                  {{ item }}
                </v-list-item-content>
              </router-link>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
        </v-navigation-drawer>
      </v-card>
      <div class="content">
        <router-view></router-view>
      </div>
    </v-col>
    <v-col cols="12" sm="4" class="order-cart"></v-col>
  </v-row>
</template>

<script lang="ts" src="./MenuContainer.ts"></script>
<style scoped lang="scss" src="./style.scss"></style>
