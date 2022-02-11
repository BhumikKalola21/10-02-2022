import { createApp } from "vue";

import Activeuser from './components/activeUser.vue';

import Userdata from './components/userData.vue';

import App from './App.vue'

const app = createApp(App);

app.component("active-user", Activeuser);
app.component("user-data", Userdata);

app.mount("#app");
