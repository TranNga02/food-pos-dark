import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Icon extends Vue {
  @Prop({ required: true }) readonly icon: string;
  @Prop({ default: '#EA7C69' }) readonly color: string;

  get types(): Record<string, string> {
    return {
      about_us: 'about_us',
      add: 'add',
      appereance: 'appereance',
      arrow_up: 'arrow_up',
      arrow_down: 'arrow_down',
      back: 'back',
      card: 'card',
      coin: 'coin',
      customer: 'customer',
      dashboard: 'dashboard',
      discount: 'discount',
      edit: 'edit',
      export: 'export',
      home: 'home',
      log_out: 'log-out',
      message: 'message',
      notification: 'notification',
      option: 'option',
      order: 'order',
      paypal: 'paypal',
      print: 'print',
      logo: 'logo',
      security: 'security',
      setting: 'setting',
      trash: 'trash',
      wallet: 'wallet',
    };
  }
}
