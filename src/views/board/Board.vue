<template>
  <RightSideBar/>
  <div class="q-pa-md">
    <div class="row q-col-gutter-md">
      <div class="col-3">
        <q-list>
          <q-item class="q-my-sm" clickable active-class="text-green">
            <q-item-section avatar class="flex flex-center column">
              <q-icon name="fas fa-pen"/>
            </q-item-section>
            <q-item-section class="q-ml-md">
              <div class="text-outline">공지사항</div>
            </q-item-section>
          </q-item>
          <q-item class="q-my-sm" clickable :active="true" active-class="text-weight-bolder">
            <q-item-section avatar class="flex flex-center column">
              <q-icon name="fas fa-pen"/>
            </q-item-section>
            <q-item-section class="q-ml-md">
              <div class="text-outline">자유게시판</div>
            </q-item-section>
          </q-item>
          <q-item class="q-my-sm" clickable active-class="text-green">
            <q-item-section avatar class="flex flex-center column">
              <q-icon name="fas fa-pen"/>
            </q-item-section>
            <q-item-section class="q-ml-md">
              <div class="text-outline">문의하기</div>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="col-8">
        <h6 class="text-weight-bolder q-ml-lg topTitle">자유게시판</h6>
        <div>
          <q-toolbar>
            <q-space/>
            <q-select
              v-model="searchOption"
              :options="options"
              square outlined
              dense
              class="q-mx-md"
              style="width: 150px"
            />
            <q-input v-model="text" label="검색" dense>
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>

          </q-toolbar>
        </div>

        <q-markup-table flat>
          <thead>
          <tr>
            <th class="text-center" width="1"><strong>글번호</strong></th>
            <th class="text-center"><strong>제목</strong></th>
            <th class="text-center"><strong>글쓴이</strong></th>
            <th class="text-center"><strong>추천수</strong></th>
            <th class="text-center"><strong>조회수</strong></th>
            <th class="text-center"><strong>작성일</strong></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(index) in 10" :key="index">
            <td class="text-center">1</td>
            <td class="text-left">부산 연제구, 돼지국밥 전문점.jpg</td>
            <td class="text-center">Wingging</td>
            <td class="text-center">24</td>
            <td class="text-center">235</td>
            <td class="text-center">2023-04-19 23:40</td>
          </tr>
          </tbody>
        </q-markup-table>
        <div class="flex flex-center q-my-md">
          <q-pagination
            v-model="current"
            :max="5"
          />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import RightSideBar from '@/components/RightSideBar.vue';
import { ref } from 'vue';

export default {
  name: 'LullabyBoard',
  components: { RightSideBar },
  setup() {
    return {
      options: ref(['제목+내용', '글쓴이']),
      searchOption: ref('제목+내용'),
    };
  },
};
</script>

<style scoped>
.topTitle {
  margin-top: 10px;
}
</style>
