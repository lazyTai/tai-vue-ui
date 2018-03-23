<template>
    <div>
        <t-pick :ListData="lists"></t-pick>
    </div>
</template>
<script>
export default {
  data() {
    return {
      lists: [1, 2, 3, 4, 5, 6]
    };
  }
};
</script>