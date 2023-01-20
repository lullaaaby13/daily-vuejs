<template>
  <q-page class="full-width row justify-center items-center content-center">
    <!--    <q-card class="col-8 q-my-lg" style="height: 70px;">-->
    <!--      <q-card-section>-->
    <!--        <q-btn>데이터 가져오기</q-btn>-->
    <!--      </q-card-section>-->
    <!--    </q-card>-->
    <q-card class="col-8" style="height: 640px;">
      <q-table
        title="HackerNews"
        :rows="store.items"
        :columns="columns"
        row-key="name"
        :pagination="initialPagination"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="id" :props="props">
              {{ props.row.id }}
            </q-td>
            <q-td class="cursor-pointer"
                  key="title"
                  :props="props"
                  @click="onTitleClick(props.row.id)">
              {{ props.row.title }}
              <q-badge class="q-mx-sm" color="green">{{ props.row.comments_count }}</q-badge>
            </q-td>
            <q-td key="user" :props="props">
              {{ props.row.user }}
            </q-td>
            <q-td key="time_ago" :props="props">
              {{ props.row.time_ago }}
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </q-card>

    <q-dialog v-model="showModal" class="row justify-center items-center">
      <q-card class="col-6" style="height: 700px; max-height: 80vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ store.item.title }}</div>
          <q-space/>
          <q-btn icon="close" flat round dense v-close-popup/>
        </q-card-section>

        <q-separator class="q-ma-md"/>

        <q-card-section>a{{ store.item.content }}</q-card-section>
        <q-separator class="q-ma-md"/>

        <div class="q-pa-lg text-subtitle1">Comments</div>
        <template v-for="(value, index) in store.item.comments"
                  :key="index">
          <q-card-section v-html="value.content"/>
          <q-separator class="q-ma-md"/>
        </template>

      </q-card>
    </q-dialog>

  </q-page>

</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import hackerNewsStore from '@/store/hacker-news';
import { storeToRefs } from 'pinia';

const columns = [
  {
    name: 'id',
    field: 'id',
    required: true,
    label: 'ID',
    align: 'center',
  },
  {
    name: 'title',
    field: 'title',
    required: true,
    label: '제목',
    align: 'left',
  },
  {
    name: 'user',
    field: 'user',
    required: true,
    label: '작성자',
    align: 'center',
  },
  {
    name: 'time_ago',
    field: 'time_ago',
    required: true,
    label: '작성 시간',
    align: 'center',
  },
];
export default defineComponent({
  name: 'StorePractice',
  async beforeCreate() {
    const store = hackerNewsStore();
    await store.getFeeds('news', 1);
  },
  methods: {
    btnClick() {
      this.showModal = true;
    },
    async onTitleClick(feedId: number) {
      await this.store.getFeed(feedId);
      this.showFeedDialog();
    },
    showFeedDialog() {
      this.showModal = true;
    },
  },
  setup() {
    const store = hackerNewsStore();
    return {
      store,
      showModal: ref(false),
      columns,
      initialPagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 10,
      },
    };
  },
});
</script>
