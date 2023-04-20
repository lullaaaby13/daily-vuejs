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
      <div class="col-9">
        <h5 class="q-mb-sm">이것은 포스트 제목이다.jpg</h5>
        <div class="row q-col-gutter-sm">
          <div>글쓴이</div>
          <div>|</div>
          <div>{{ new Date() }}</div>
          <div>|</div>
          <div>조회수 2355</div>
        </div>
        <q-separator class="q-my-sm"/>
        <q-toolbar class="top">
          <q-space/>
          <q-btn flat size="md" color="primary">목록</q-btn>
          <q-btn flat size="md" color="secondary">뒤로가기</q-btn>
        </q-toolbar>

        <div>
          글 본문이란다
        </div>
        <q-separator class="q-my-sm"/>
        <q-toolbar class="topToolbar">
          <q-avatar size="xl">
            <q-icon name="fas fa-comment"/>
          </q-avatar>
          <h6>31개의 댓글</h6>
        </q-toolbar>

        <q-card class="q-pa-md q-my-sm" bordered flat>
          <q-toolbar class="top">
            <div class="text-overline">작성자</div>
            <q-space/>
            <div class="text-overline">{{ new Date() }}</div>
          </q-toolbar>
          <div class="q-pl-sm text-body2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor eos iure vel.
            Amet autem, deleniti doloribus expedita in inventore molestiae nesciunt possimus quo
            repellat sed sit tenetur, voluptas voluptate!
          </div>
          <q-toolbar class="top">
            <q-space/>
            <q-btn flat size="md" color="primary">추천 10</q-btn>
            <q-btn flat size="md" color="secondary">비추 1</q-btn>
          </q-toolbar>
        </q-card>
        <q-card class="q-pa-md q-my-sm q-ml-xl" bordered flat>
          <q-toolbar class="top">
            <div class="text-overline">작성자</div>
            <q-space/>
            <div class="text-overline">{{ new Date() }}</div>
          </q-toolbar>
          <div class="q-pl-sm text-body2">
            <strong class="text-primary">@작성자</strong>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor eos iure vel.
            Amet autem, deleniti doloribus expedita in inventore molestiae nesciunt possimus quo
            repellat sed sit tenetur, voluptas voluptate!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor eos iure vel.
            Amet autem, deleniti doloribus expedita in inventore molestiae nesciunt possimus quo
            repellat sed sit tenetur, voluptas voluptate!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor eos iure vel.
            Amet autem, deleniti doloribus expedita in inventore molestiae nesciunt possimus quo
            repellat sed sit tenetur, voluptas voluptate!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor eos iure vel.
            Amet autem, deleniti doloribus expedita in inventore molestiae nesciunt possimus quo
            repellat sed sit tenetur, voluptas voluptate!
          </div>
          <q-toolbar class="top">
            <q-space/>
            <q-btn flat size="md" color="primary">추천 10</q-btn>
            <q-btn flat size="md" color="secondary">비추 1</q-btn>
          </q-toolbar>
        </q-card>

      </div>
    </div>
  </div>
</template>

<script>
import RightSideBar from '@/components/RightSideBar.vue';
import { ref } from 'vue';

export default {
  name: 'LullabyLogin',
  components: { RightSideBar },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.topTitle {
  margin-top: 10px;
}

.topToolbar {
  margin-top: -40px;
  margin-bottom: -30px;
}

.top {
  margin-top: -20px;
  margin-bottom: -15px;
}
</style>
