<template>
    <div class="t-input">
        <input type="text" :placeholder="placeholder" @input="change_value" />
        <div class="error">
            <div v-show="!validateInfor.isError">
                {{validateInfor.errors.toString()}}
            </div>
        </div>
    </div>
</template>
<style scoped>
.t-input input {
  border: none;
  height: 40px;
  line-height: 40px;
  text-indent: 5px;
  outline: none;
  width: 100%;
  font-size: 15px;
  margin-top: 13px;
}
.t-input .error {
  font-size: 12px;
  height: 12px;
  color: brown;
  text-align: right;
}
</style>

<script>
/* 
验证数字的正则表达式集 
验证数字：^[0-9]*$ 
验证n位的数字：^\d{n}$ 
验证至少n位数字：^\d{n,}$ 
验证m-n位的数字：^\d{m,n}$ 
验证零和非零开头的数字：^(0|[1-9][0-9]*)$ 
验证有两位小数的正实数：^[0-9]+(.[0-9]{2})?$ 
验证有1-3位小数的正实数：^[0-9]+(.[0-9]{1,3})?$ 
验证非零的正整数：^\+?[1-9][0-9]*$ 
验证非零的负整数：^\-[1-9][0-9]*$ 
验证非负整数（正整数 + 0） ^\d+$ 
验证非正整数（负整数 + 0） ^((-\d+)|(0+))$ 
验证长度为3的字符：^.{3}$ 
验证由26个英文字母组成的字符串：^[A-Za-z]+$ 
验证由26个大写英文字母组成的字符串：^[A-Z]+$ 
验证由26个小写英文字母组成的字符串：^[a-z]+$ 
验证由数字和26个英文字母组成的字符串：^[A-Za-z0-9]+$ 
验证由数字、26个英文字母或者下划线组成的字符串：^\w+$ 
验证用户密码:^[a-zA-Z]\w{5,17}$ 正确格式为：以字母开头，长度在6-18之间，只能包含字符、数字和下划线。 
验证是否含有 ^%&',;=?$\" 等字符：[^%&',;=?$\x22]+ 
验证汉字：^[\u4e00-\u9fa5],{0,}$ 
验证Email地址：/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
验证InternetURL：^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$ ；^[a-zA-z]+://(w+(-w+)*)(.(w+(-w+)*))*(?S*)?$ 
验证电话号码：^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$：--正确格式为：XXXX-XXXXXXX，XXXX-XXXXXXXX，XXX-XXXXXXX，XXX-XXXXXXXX，XXXXXXX，XXXXXXXX。 
验证身份证号（15位或18位数字）：^\d{15}|\d{}18$ 
验证一年的12个月：^(0?[1-9]|1[0-2])$ 正确格式为：“01”-“09”和“1”“12” 
验证一个月的31天：^((0?[1-9])|((1|2)[0-9])|30|31)$ 正确格式为：01、09和1、31。 
整数：^-?\d+$ 
不为空：/\S/

*/
import { isEmail, isShit } from "./util";
import _ from "underscore";
export default {
  name: "t-input",
  data() {
    return {
      defaultValue: ""
    };
  },
  props: {
    validate: {
      type: [String, Array],
      default: () => {
        return [];
      }
    },
    value: {
      type: [String, Number],
      default: ""
    },
    placeholder: {
      type: String,
      default: "请输入"
    }
  },
  mounted() {
    this.$data.defaultValue = this.$props.value;
  },
  computed: {
    validateInfor() {
      var _validateInfor = { isError: false, errors: [] };
      var { validate } = this.$props;
      var { defaultValue } = this.$data;
      _.each(validate, function(item) {
        var isError = isShit(item.exp, defaultValue);
        // console.log("item.exp", item.exp);
        // console.log("isError", isError);
        if (isError) {
          _.without(_validateInfor.errors, item.error);
        } else {
          _validateInfor.errors.push(item.error);
          _validateInfor.isError = isError;
        }
      });
      return _validateInfor;
    }
  },
  methods: {
    change_value(e) {
      //   console.log("change_value", e.target.value);
      this.$data.defaultValue = e.target.value;
      this.$emit("input", e.target.value);
    }
  }
};
</script>

