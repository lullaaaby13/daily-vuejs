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
        <q-card class="q-pa-md absolute-center" style="width: 300px;">
          <q-card-section>
            <div class="text-subtitle1 text-weight-bold text-center">로그인</div>
          </q-card-section>
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
          >
            <q-input outlined type="text" v-model="name" label="아이디" />
            <q-input outlined type="password" v-model="age" label="비밀번호"/>
            <div class="flex flex-center">
              <q-btn label="로그인" type="submit" color="primary"/>
              <q-btn label="회원가입" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
          </q-form>
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
    const onSubmit = () => {
      alert('onSubmit');
    };
    const onReset = () => {
      alert('onReset');
    };

    return {
      options: ref(['제목+내용', '글쓴이']),
      searchOption: ref('제목+내용'),
      onSubmit,
      onReset,
    };
  },
};
</script>

<style scoped>
.topTitle {
  margin-top: 10px;
}
</style>
