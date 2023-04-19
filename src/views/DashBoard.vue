<template>
  <div class="q-pa-md">
    <div class="row q-col-gutter-md">
      <div class="col-4">
        <AccountDash/>
      </div>
      <div class="col-8">
        <div class="row q-col-gutter-md">
          <div class="col-10">
            <q-card class="my-card q-px-sm" flat bordered>
              <q-toolbar>
                <q-icon name="fas fa-archive" class="q-mr-sm"/>
                <div class="text-overline q-mr-sm">Voucher</div>
                <q-badge label="8" rounded color="green" class="q-mr-sm"></q-badge>
                <q-icon name="fas fa-user" class="q-mr-sm"></q-icon>
                <div class="text-overline q-mr-sm">Partner</div>
                <q-badge label="6" rounded color="green"></q-badge>
                <q-icon name="fas fa-shield-alt" class="q-mx-sm"></q-icon>
                <div class="text-overline q-mr-sm">Support</div>
                <q-space/>
                <q-btn color="green" icon="fab fa-mixcloud" label="On Left"></q-btn>
              </q-toolbar>
            </q-card>
          </div>
          <div class="col-2">
            <q-card class="my-card q-px-sm" flat bordered>
              <q-toolbar class="flex flex-center column">
                <q-icon name="fas fa-ellipsis-h" class="q-mx-sm"/>
              </q-toolbar>
            </q-card>
          </div>
        </div>
        <h6 class="text-weight-bolder q-ml-lg topTitle">DashBoard</h6>
        <q-toolbar class="topToolbar">
          <div class="text-overline q-mr-sm">My Game Server</div>
          <q-badge label="28" rounded color="black"/>
          <div class="text-overline q-mx-sm">My VPS</div>
          <q-badge label="10" rounded color="grey"></q-badge>
          <div class="text-overline q-mx-sm">My Root Servers</div>
          <q-badge label="5" rounded color="grey"></q-badge>
          <div class="text-overline q-mx-sm">My Domains</div>
          <q-badge label="5" rounded color="grey"/>
          <q-space/>
          <q-icon name="fas fa-ellipsis-h" class="q-mx-sm"/>
        </q-toolbar>

        <div class="row q-col-gutter-md">
          <div class="col-4">
            <q-card class="my-card q-px-sm q-py-lg secCard card1" flat>
              <q-toolbar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar1.jpg" alt="avatar">
                </q-avatar>
                <q-space></q-space>
                <q-badge label="Online" rounded color="green"/>
              </q-toolbar>
              <div class="text-overline text-weight-bolder q-ml-md">Fivem Dev #256019</div>
              <div class="text-overline q-ml-md">185.223.28.170.2000</div>
              <q-toolbar>
                <div class="text-overline text-weight-bolder q-ml-sm">21.11.2022</div>
                <q-space></q-space>
                <q-btn color="grey"
                       round
                       flat
                       dense
                       :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                       @click="expanded = !expanded"/>
              </q-toolbar>
              <q-separator></q-separator>
              <q-slide-transition>
                <div v-show="expanded">
                  <q-separator/>
                  <q-card-section class="flex flex-center row">
                    <q-icon name="far fa-lightbulb" class="q-mr-md"/>
                    <q-icon name="far fa-laptop" class="q-mr-md"/>
                    <q-icon name="far fa-credit-card" class="q-mr-md"/>
                    <q-icon name="fas fa-box" class="q-mr-md"/>
                  </q-card-section>
                </div>
              </q-slide-transition>
            </q-card>
          </div>
          <div class="col-4">
            <q-card class="my-card q-px-sm q-py-lg secCard card1" flat>
              <q-toolbar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar1.jpg" alt="avatar">
                </q-avatar>
                <q-space></q-space>
                <q-badge label="Online" rounded color="green"/>
              </q-toolbar>
              <div class="text-overline text-weight-bolder q-ml-md">Fivem Dev #256019</div>
              <div class="text-overline q-ml-md">185.223.28.170.2000</div>
              <q-toolbar>
                <div class="text-overline text-weight-bolder q-ml-sm">21.11.2022</div>
                <q-space></q-space>
                <q-btn color="grey"
                       round
                       flat
                       dense
                       :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                       @click="expanded = !expanded"/>
              </q-toolbar>
              <q-separator></q-separator>
              <q-slide-transition>
                <div v-show="expanded">
                  <q-separator/>
                  <q-card-section class="flex flex-center row">
                    <q-icon name="far fa-lightbulb" class="q-mr-md"/>
                    <q-icon name="far fa-laptop" class="q-mr-md"/>
                    <q-icon name="far fa-credit-card" class="q-mr-md"/>
                    <q-icon name="fas fa-box" class="q-mr-md"/>
                  </q-card-section>
                </div>
              </q-slide-transition>
            </q-card>
          </div>
          <div class="col-4">
            <q-card class="my-card q-px-sm q-py-lg secCard card1" flat>
              <q-toolbar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar1.jpg" alt="avatar">
                </q-avatar>
                <q-space></q-space>
                <q-badge label="Online" rounded color="green"/>
              </q-toolbar>
              <div class="text-overline text-weight-bolder q-ml-md">Fivem Dev #256019</div>
              <div class="text-overline q-ml-md">185.223.28.170.2000</div>
              <q-toolbar>
                <div class="text-overline text-weight-bolder q-ml-sm">21.11.2022</div>
                <q-space></q-space>
                <q-btn color="grey"
                       round
                       flat
                       dense
                       :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                       @click="expanded = !expanded"/>
              </q-toolbar>
              <q-separator></q-separator>
              <q-slide-transition>
                <div v-show="expanded">
                  <q-separator/>
                  <q-card-section class="flex flex-center row">
                    <q-icon name="far fa-lightbulb" class="q-mr-md"/>
                    <q-icon name="far fa-laptop" class="q-mr-md"/>
                    <q-icon name="far fa-credit-card" class="q-mr-md"/>
                    <q-icon name="fas fa-box" class="q-mr-md"/>
                  </q-card-section>
                </div>
              </q-slide-transition>
            </q-card>
          </div>
        </div>

        <div class="row q-col-gutter-md q-my-md">
          <div class="col-4">
            <q-card class="my-card q-px-sm q-py-lg secCard card1" flat>
              <q-toolbar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar1.jpg" alt="avatar">
                </q-avatar>
                <q-space></q-space>
                <q-badge label="Online" rounded color="green"/>
              </q-toolbar>
              <div class="text-overline text-weight-bolder q-ml-md">Fivem Dev #256019</div>
              <div class="text-overline q-ml-md">185.223.28.170.2000</div>
              <q-toolbar>
                <div class="text-overline text-weight-bolder q-ml-sm">21.11.2022</div>
                <q-space></q-space>
                <q-btn color="grey"
                       round
                       flat
                       dense
                       :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                       @click="expanded = !expanded"/>
              </q-toolbar>
              <q-separator></q-separator>
              <q-slide-transition>
                <div v-show="expanded">
                  <q-separator/>
                  <q-card-section class="flex flex-center row">
                    <q-icon name="far fa-lightbulb" class="q-mr-md"/>
                    <q-icon name="far fa-laptop" class="q-mr-md"/>
                    <q-icon name="far fa-credit-card" class="q-mr-md"/>
                    <q-icon name="fas fa-box" class="q-mr-md"/>
                  </q-card-section>
                </div>
              </q-slide-transition>
            </q-card>
          </div>
          <div class="col-4">
            <q-card class="my-card q-px-sm q-py-lg secCard card1" flat>
              <q-toolbar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar1.jpg" alt="avatar">
                </q-avatar>
                <q-space></q-space>
                <q-badge label="Online" rounded color="green"/>
              </q-toolbar>
              <div class="text-overline text-weight-bolder q-ml-md">Fivem Dev #256019</div>
              <div class="text-overline q-ml-md">185.223.28.170.2000</div>
              <q-toolbar>
                <div class="text-overline text-weight-bolder q-ml-sm">21.11.2022</div>
                <q-space></q-space>
                <q-btn color="grey"
                       round
                       flat
                       dense
                       :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                       @click="expanded = !expanded"/>
              </q-toolbar>
              <q-separator></q-separator>
              <q-slide-transition>
                <div v-show="expanded">
                  <q-separator/>
                  <q-card-section class="flex flex-center row">
                    <q-icon name="far fa-lightbulb" class="q-mr-md"/>
                    <q-icon name="far fa-laptop" class="q-mr-md"/>
                    <q-icon name="far fa-credit-card" class="q-mr-md"/>
                    <q-icon name="fas fa-box" class="q-mr-md"/>
                  </q-card-section>
                </div>
              </q-slide-transition>
            </q-card>
          </div>
          <div class="col-4">
            <q-card class="my-card q-px-sm q-py-lg secCard card1" flat>
              <q-toolbar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar1.jpg" alt="avatar">
                </q-avatar>
                <q-space></q-space>
                <q-badge label="Online" rounded color="green"/>
              </q-toolbar>
              <div class="text-overline text-weight-bolder q-ml-md">Fivem Dev #256019</div>
              <div class="text-overline q-ml-md">185.223.28.170.2000</div>
              <q-toolbar>
                <div class="text-overline text-weight-bolder q-ml-sm">21.11.2022</div>
                <q-space></q-space>
                <q-btn color="grey"
                       round
                       flat
                       dense
                       :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                       @click="expanded = !expanded"/>
              </q-toolbar>
              <q-separator></q-separator>
              <q-slide-transition>
                <div v-show="expanded">
                  <q-separator/>
                  <q-card-section class="flex flex-center row">
                    <q-icon name="far fa-lightbulb" class="q-mr-md"/>
                    <q-icon name="far fa-laptop" class="q-mr-md"/>
                    <q-icon name="far fa-credit-card" class="q-mr-md"/>
                    <q-icon name="fas fa-box" class="q-mr-md"/>
                  </q-card-section>
                </div>
              </q-slide-transition>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import AccountDash from '@/components/AccountDash.vue';

export default {
  name: 'DashBoard',
  components: { AccountDash },
  setup() {
    return {
      expanded: ref(false),
    };
  },
};
</script>

<style scoped>
.topTitle {
  margin-top: 10px;
}
.topToolbar {
  margin-top: -40px;
}
.secCard {
  border-radius: 20px;
}
.card1 {
  background: #edfef0;
}
.card2 {
  background: #edfef0;
}
.card3 {
  background: #edfef0;
}
.card4 {
  background: #edfef0;
}
.card5 {
  background: #edfef0;
}
.card6 {
  background: #edfef0;
}

</style>
