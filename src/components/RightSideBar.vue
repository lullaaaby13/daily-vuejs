<template>
  <q-drawer
    show-if-above
    v-model="rightDrawerOpen"
    side="right"
    bordered
    :width="240"
  >
    <q-toolbar class="q-mt-lg">
      <q-icon name-="far fa-question-circle" class="q-mr-sm"/>
      <q-icon name-="far fa-caret-square-right" class="q-mr-sm"/>
      <q-space/>
      <q-icon name="fab fa-mixcloud" class="q-mr-sm"/>
      <div class="text-overline">Online</div>
    </q-toolbar>
    <div class="flex flex-center column">
      <q-item class="q-mx-sm">
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" alt="boy">
          </q-avatar>
        </q-item-section>
        <q-item-section class="none">
          <div>
            <strong>Lullaby</strong>
            <q-badge color="green" rounded class="q-mx-sm"></q-badge>
            <q-icon name="fas fa-chevron-down" color="grey"></q-icon>
          </div>
          <q-item-label caption>Lullaby</q-item-label>
        </q-item-section>
      </q-item>
      <div class="text-h6">
        <strong>150.080.01 $</strong>
        <q-icon name="fas fa-plus-circle" color="green" class="q-ml-md"></q-icon>
      </div>
    </div>
    <q-toolbar>
      <q-icon name="fas fa-info-circle" class="q-mr-sm"></q-icon>
      <div class="text-overline">Zap Coins</div>
    </q-toolbar>
    <div class="flex flex-center column q-pa-md">
      <q-linear-progress rounded size="20px" value="0.69" color="warning"/>
      <q-toolbar class="top">
        <div class="text-overline">Storage</div>
        <q-space/>
        <div class="text-overline">69%</div>
      </q-toolbar>
    </div>
    <q-toolbar class="top">
      <q-icon name="far fa-hdd" class="q-mr-sm"/>
      <div class="text-overline">Partner Menu</div>
    </q-toolbar>
    <q-separator/>
    <q-toolbar>
      <q-icon name="fas fa-columns" class="q-mr-sm"/>
      <div class="text-overline">Web Interface</div>
    </q-toolbar>
    <q-toolbar>
      <q-icon name="fas fa-sitemap" class="q-mr-sm"/>
      <div class="text-overline">Website</div>
    </q-toolbar>
    <q-toolbar>
      <q-icon name="fas fa-check-square" class="q-mr-sm"/>
      <div class="text-overline">Ticket Support</div>
    </q-toolbar>
    <q-toolbar>
      <q-icon name="fas fa-figma" class="q-mr-sm"/>
      <div class="text-overline">Interruptions</div>
    </q-toolbar>
    <q-toolbar>
      <q-icon name="fas fa-chrome" class="q-mr-sm"/>
      <div class="text-overline">Donation Settings</div>
    </q-toolbar>
    <q-toolbar>
      <q-icon name="fas fa-star" class="q-mr-sm"/>
      <div class="text-overline">Wish List</div>
    </q-toolbar>
    <q-toolbar>
      <div style="position: absolute;
    bottom: 20px;
    margin-left: auto; margin-right: auto;
     left:0; right: 0; text-align: center;">
        <div class="flex flex-center row">
          <div class="text-overline q-mr-sm">Quick News</div>
          <q-icon name="fab fa-facebook-f" class="q-mr-sm"></q-icon>
          <q-icon name="fab fa-twitter"></q-icon>
        </div>
      </div>
    </q-toolbar>
  </q-drawer>

</template>

<script>
import { ref } from 'vue';

export default {
  name: 'RightSideBar',
  setup() {
    const rightDrawerOpen = ref(true);
    return {
      rightDrawerOpen,
    };
  },
};
</script>

<style>
.q-item__section--main.none {
  flex: none !important;
}

.top {
  margin-top: -10px;
}
</style>
