<template>
    <div :style='style'>
        <svg class="icon" aria-hidden="true">
            <use :xlink:href="'#icon-'+icon"></use>
        </svg>
    </div>
</template>
<script>
export default {
  name: "t-icon",
  props: {
    icon: String,
    spin: Boolean,
    size: {
      type: String || Number
    }
  },
  computed: {
    style: function() {
      var self = this;
      return {
        fontSize: self.$props.size + "px"
      };
    }
  }
};
</script>
