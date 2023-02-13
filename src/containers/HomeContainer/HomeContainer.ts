import { Component, Vue } from 'vue-property-decorator';
import MenuContainer from './elements/MenuContainer';

@Component({
  components: { MenuContainer },
})
export default class HomeContainer extends Vue {}
