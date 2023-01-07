import Vue from 'vue';

declare module 'vue/types/vue' {
  interface Vue {
    _vnode: {
      fnOptions: {
        functional: boolean;
      };
    };
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    _componentTag?: string;
  }
}
