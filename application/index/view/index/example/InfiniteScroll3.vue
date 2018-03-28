<template>
    <div class="infinitescroll3">
        <t-header-back title="动画滚动--无限加载"></t-header-back>
        <t-infinite-scroll3 class="t-infinite-scroll3">
            <template scope="scrollviewdata">
                {{scrollviewdata}}
                <div v-for="n in lists">
                    {{n}}
                </div>
            </template>
        </t-infinite-scroll3>
    </div>

</template>
<style>
.t-infinite-scroll3 {
  max-height: 400px;
  border: 1px solid;
}
</style>

<script>
export default {
  data() {
    return {
      lists: [1, 2, 3, 4]
    };
  }
};
</script>