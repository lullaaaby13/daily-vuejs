<template>
  <q-card class="my-card q-pa-sm colorCard" flat :height="300">
    <h6 class="text-weight-bolder q-ml-lg">Account</h6>
    <q-list>
      <q-item class="q-my-sm" clickable
              :active="link === 'Dashboard'"
              @click="link = 'Dashboard'" active-class="border text-green">
        <q-item-section avatar class="flex flex-center column">
          <q-icon name="fas fa-tachometer-alt"/>
        </q-item-section>
        <q-item-section class="q-ml-md">Dashboard</q-item-section>
      </q-item>
      <q-item class="q-my-sm" clickable
              :active="link === 'CashBox'"
              @click="link = 'CashBox'" active-class="border text-green">
        <q-item-section avatar class="flex flex-center column">
          <q-icon name="fas fa-box-open"/>
        </q-item-section>
        <q-item-section class="q-ml-md">CashBox</q-item-section>
      </q-item>
      <q-item class="q-my-sm" clickable
              :active="link === 'Contact'"
              @click="link = 'Contact'" active-class="border text-green">
        <q-item-section avatar class="flex flex-center column">
          <q-icon name="fas fa-address-book"/>
        </q-item-section>
        <q-item-section class="q-ml-md">Contact</q-item-section>
      </q-item>
      <q-item class="q-my-sm" clickable
              :active="link === 'Cash'"
              @click="link = 'Cash'" active-class="border text-green">
        <q-item-section avatar class="flex flex-center column">
          <q-icon name="fas fa-credit-card"/>
        </q-item-section>
        <q-item-section class="q-ml-md">Cash</q-item-section>
      </q-item>
      <q-item class="q-my-sm" clickable
              :active="link === 'Orders'"
              @click="link = 'Orders'" active-class="border text-green">
        <q-item-section avatar class="flex flex-center column">
          <q-icon name="fas fa-copy"/>
        </q-item-section>
        <q-item-section class="q-ml-md">Orders</q-item-section>
        <q-item-section side class="styleme">
          <q-badge label="3" color="green"></q-badge>
        </q-item-section>
      </q-item>
      <q-item class="q-my-sm" clickable
              :active="link === 'Invoices'"
              @click="link = 'Invoices'" active-class="border text-green">
        <q-item-section avatar class="flex flex-center column">
          <q-icon name="fas fa-download"/>
        </q-item-section>
        <q-item-section class="q-ml-md">Invoices</q-item-section>
        <q-item-section side class="styleme">
          <q-badge label="85.06$" color="orange"></q-badge>
        </q-item-section>
      </q-item>
      <q-item class="q-my-sm" clickable
              :active="link === 'Affiliate'"
              @click="link = 'Affiliate'" active-class="border text-green">
        <q-item-section avatar class="flex flex-center column">
          <q-icon name="fas fa-download"/>
        </q-item-section>
        <q-item-section class="q-ml-md">Affiliate</q-item-section>
        <q-item-section side class="styleme">
          <q-badge label="0.83$" color="blue"></q-badge>
        </q-item-section>
      </q-item>
      <q-item class="q-my-sm" clickable
              :active="link === 'Community'"
              @click="link = 'Community'" active-class="border text-green">
        <q-item-section avatar class="flex flex-center column">
          <q-icon name="fas fa-satellite"/>
        </q-item-section>
        <q-item-section class="q-ml-md">Community</q-item-section>
        <q-item-section side class="styleme">
          <q-badge label="0.00$" color="grey"></q-badge>
        </q-item-section>
      </q-item>
    </q-list>
  </q-card>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'AccountDash',
  setup() {
    return {
      link: ref('Dashboard'),
    };
  },
};
</script>

<style>
  .colorCard {
    background: #f6f8f7;
    height: 660px;
    border-radius: 25px;
  }
  .q-item__section--avatar {
    color: black !important;
  }
  .border {
    background: #60c471;
    border-radius: 50%;
    width: 55px;
  }
  .styleme {
    margin-left: 165px;
  }
</style>
