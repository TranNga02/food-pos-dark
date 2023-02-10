import { Component, Vue } from 'vue-property-decorator';
import MenuContainer from './elements/MenuContainer';
import OrderContainer from './elements/OrderContainer';

@Component({
  components: { MenuContainer, OrderContainer },
})
export default class HomeContainer extends Vue {}
