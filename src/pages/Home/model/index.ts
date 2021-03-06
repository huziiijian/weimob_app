import { observable, computed, action } from "mobx";
import {
   history,
   qs,
} from 'src/utils';
import Service from '../service'
import Store from '../../../store'


import LifeCycle, { LifeCycleProps } from 'src/utils/VM/lifeCycle'
interface Params {
   route: string
}
interface Query {
}
class PageModel extends LifeCycle<Params, Query>{
   constructor(props: LifeCycleProps<Params, Query>) {
      super(props)
   }
   componentDidMount = () => {

   }
   @computed get goodsInfo() {
      return Store.goodsInfo
   }
   @computed get goodTypeCount() {
      return Store.goodTypeCount
   }
   @observable route = history.location.pathname;
   @observable showLoading = true;
   @observable inputConfig: {
      placeholder: string,
      type: string,
      message: string
   }[] = [
         { placeholder: '请输入手机号', type: 'phone', message: '获取验证码' },
         { placeholder: '请输入验证码', type: 'message', message: '' }
      ];
   @action setRoute = (route: string) => {
      this.route = route;
   }
}


export default PageModel;
