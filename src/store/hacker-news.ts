import { defineStore } from 'pinia';
import axios from 'axios';

const api = axios.create({ baseURL: 'https://api.hnpwa.com' });

export interface FeedItem {
  id: number;
  title: string;
  points?: number | null;
  user?: string | null;
  time: number;

  // eslint-disable-next-line camelcase
  time_ago: string;
  // eslint-disable-next-line camelcase
  comments_count: number;
  type: string;
  url?: string;
  domain?: string;
}
export default defineStore('hacker-news', {
  state: () => ({
    items: [],
    item: null,
  }),
  actions: {
    async getFeeds(name: string, maxPages: number) {
      const { data } = await api.get(`v0/${name}/${maxPages}.json`);
      data.sort((a: FeedItem, b: FeedItem) => b.time - a.time);
      console.log(data);
      this.items = data;
    },
    async getFeed(feedId: number) {
      const { data } = await api.get(`v0/item/${feedId}.json`);
      console.log(data);
      this.item = data;
    },
  },
});
