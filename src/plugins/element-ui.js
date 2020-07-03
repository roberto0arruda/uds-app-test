import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'

import { Button, Select, Dialog, Option, Form, FormItem } from 'element-ui'

import lang from 'element-ui/lib/locale/lang/pt-br'
import locale from 'element-ui/lib/locale'

// configure language
locale.use(lang)

Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.component(Dialog.name, Dialog)
Vue.component(Option.name, Option)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
