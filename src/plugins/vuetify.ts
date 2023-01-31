import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

const opts = {
  theme: {
    themes: {
      light: {
        primary: '#ea7c69',
      },
    },
  },
};

export default new Vuetify(opts);
