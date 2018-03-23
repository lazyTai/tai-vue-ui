<template>
    <div class="t-pick-item">
        <slot />
    </div>
</template>
<style scoped>
.t-pick-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  overflow: hidden;
  width: 100%;
}
</style>

<script>
export default {
  name: "t-pick-item"
};
</script>