<template>
    <div class="t-input">
        <input type="text" :placeholder="placeholder" @input="change_value" />
        <div class="error">
            <div v-show="!isError">
                {{error}}
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
export default {
  name: "t-input",
  data() {
    return {
      defaultValue: ""
    };
  },
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "请输入"
    },
    error: {
      type: String,
      default: ""
    }
  },
  mounted() {
    this.$data.defaultValue = this.$props.value;
  },
  computed: {
    isError() {
      var { required } = this.$props;
      var { defaultValue } = this.$data;
      if (required) {
        // console.log("defaultValue", defaultValue);
        if (defaultValue) {
          //   console.log("isError", true);
          return true;
        } else {
          //   console.log("isError", false);
          return false;
        }
      }
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

