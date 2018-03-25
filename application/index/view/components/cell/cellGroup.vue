<template>
  <div class="t-cell-group">
    <div class="t-cell-group-title">
      {{$props.title}}
    </div>
    <slot />
  </div>
</template>

<style>
.t-cell-group {
  padding: 10px;
  margin-top: 25px;
}
.t-cell-group-title {
  font-size: 15px;
  color: #ccc;
  margin-bottom: 5px;
}
.t-cell-group .t-cell-item:last-child {
  border-bottom: none;
}
</style>

<script>
export default {
  name: "t-cell-group",
  props: {
    title: String
  }
};
</script>
