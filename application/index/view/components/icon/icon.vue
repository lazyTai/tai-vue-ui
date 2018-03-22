<template>
    <div>
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
    spin: Boolean
  }
};
</script>
