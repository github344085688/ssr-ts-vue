/**
 * Created by f on 2018/5/24.
 */
import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import axAxios from '../../axios'
import template from './textFiledUnderLine.vue'
@Component({
  mixins: [template]
})
export default class textFieldUnderline extends axAxios {
  @Prop({
    default: false
  })
  focus: boolean;

  @Prop({
    default: 'none'
  })
  underLineColor: string;

  @Prop({
    default: 'none'
  })
  focusLineColor: string;

  get lineClass(): void {
    return
  }

  get focusLineClass(): any {
    if (this.focus) return 'text-field-focus'
  }
}
