import hackerNewsStore from '@/store/hacker-news';

export default {
  setup() {
    const store = hackerNewsStore();
    return {
      store,
    };
  },
};
