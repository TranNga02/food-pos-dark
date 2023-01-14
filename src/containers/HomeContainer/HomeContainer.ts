import { Component, Vue } from 'vue-property-decorator';
import Button from '@/components/Button';
import SideBar from '@/components/SideBar';

@Component({
  components: { Button, SideBar },
})
export default class HomeContainer extends Vue {}
