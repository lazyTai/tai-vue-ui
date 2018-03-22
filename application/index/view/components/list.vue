<template>
    <div class="list">
        <slot></slot>
    </div>
</template>

<script>
import ListItem from "./list_item.vue";
export default {
  ListItem
};
</script>
<style scoped>
.list {
  margin: 10px;
}
</style>

