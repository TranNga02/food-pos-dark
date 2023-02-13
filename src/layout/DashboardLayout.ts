import { Component, Vue } from 'vue-property-decorator';
import SideBar from '@/components/SideBar';

@Component({
  components: { SideBar },
})
export default class Layout extends Vue {}
