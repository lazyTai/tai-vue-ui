<template>
    <div class="t-button-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: "t-button-group"
};
</script>
<style>
.t-button-group {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-wrap:wrap;
}
.t-button-group .t-button {
  margin-right: 10px;
   margin-top: 10px;
}
</style>

