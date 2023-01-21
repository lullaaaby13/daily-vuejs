<template>
<!--  레퍼런스 사이트: https://brightdata.com/pricing/proxy-network-->
  <q-page class="column justify-center items-center">
    <div class="default-viewport row justify-center q-my-lg">
      <div class="column justify-center items-center">
        <div class="q-my-sm text-h3">Proxy Network Pricing</div>
        <p class="q-my-sm text-subtitle1 text-grey">
          The best-performing proxy infrastructure in the industry with the largest GEO coverage
        </p>
        <q-tabs
          v-model="tab"
          class="q-my-lg text-primary"
          @click="onTabClick(tab)"
        >
          <q-tab name="yearly" label="Yearly subscription" />
          <q-tab name="monthly" label="monthly subscription" />
        </q-tabs>
        <div class="row">
          <div v-for="index in 3" :key="index">
            <q-btn class="cursor-not-allowed" icon="check" rounded flat disable></q-btn>
            <span>Avg. 99.9% success rates</span>
          </div>

        </div>
      </div>
    </div>

    <div class="row justify-between" style="width: 1400px;">
      <q-card class="col-2 q-pa-sm" style="height: 530px;" v-for="index in 5" :key="index">
        <q-card-section class="column justify-center items-center">
          <div class="text-h6 q-ma-md text-bold text-primary">Pay per use</div>
          <q-btn class="q-ma-md" color="primary" rounded>Start Now ></q-btn>
        </q-card-section>

        <q-separator/>

        <q-card-section>
          <q-list padding>
            <q-item>
              <q-item-section>
                <q-item-label>Residential proxies</q-item-label>
                <q-item-label caption>$15.00/GB</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>Datacenter proxies</q-item-label>
                <q-item-label caption>$0.80/IP + $0.110/GB</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>ISP proxies</q-item-label>
                <q-item-label caption>$0.50/IP + $15.00/GB</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>Mobile proxies</q-item-label>
                <q-item-label caption>$40.00/GB</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>

        </q-card-section>

        <q-separator/>
        <q-card-section>
          <q-list padding>
            <q-item>
              <q-item-section side>
                <q-icon color="primary" name="check" />
              </q-item-section>
              <q-item-section>
                <p class="text-grey">Dedicated Account Manager</p>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>

      <div class="q-ma-lg text-subtitle1 text-grey-7">
        *
        <span class="text-grey-10">City-level targeting</span>
        and
        <span class="text-grey-10">dedicated IP addresses</span>
        available at an additional cost
      </div>
    </div>

    <div class="default-viewport row justify-center">
      <div class="column justify-center items-center">
        <h3>Pricing FQA</h3>
        <q-card class="q-my-sm" v-for="index in 6" :key="index">
          <q-expansion-item
            label="Can I use proxies without a monthly commitment?"
            :header-style="{'font-weight': 'bold'}"
            style="width: 960px;"
          >
            <q-card>
              <q-card-section class="text-grey-7 text-weight-bold">
                Yes! Bright Data offers a Pay-As-You-Go plan for all proxies
                (Data Center, Residential, ISP, and Mobile) as well as for Web Unlocker,
                self-service Web Scraper IDEs, and Search Engine Collector.
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-card>

      </div>
    </div>
    <div class="default-viewport row justify-center q-my-lg">
      <div class="column justify-center items-center">
        <div class="text-h4 q-my-md">Ready to get started?</div>
        <q-btn
          class="q-my-md"
          style="width: 300px;"
          color="primary"
          rounded
          size="large"
        >Start now ></q-btn>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'PricingTier',
  methods: {
    onTabClick(tab: string) {
      console.log(tab);
    },
  },
  setup() {
    return {
      tab: ref('yearly'),
    };
  },
};
</script>

<style scoped>
.default-viewport {
  width: 1400px;
}
.debug-box {
  border: 1px solid red;

}
</style>
