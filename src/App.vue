<template>
  <q-layout view="lHh Lpr lFf">
<!--    <SideBar/>-->
<!--    <RightSideBar/>-->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'LayoutDefault',
  // components: { RightSideBar, SideBar },
};
</script>

<style>
.debug-r {
  border: 1px solid red;
}

.debug-g {
  border: 1px solid green;
}

.debug-b {
  border: 1px solid blue;
}

</style>
