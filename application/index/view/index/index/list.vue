<template>
    <yd-list theme="3">
        <yd-list-item v-for="(item, key ) in $state.index_lists" :key="key">
            <img slot="img" :src="item.image_url">
            <span slot="title">{{item.title}}</span>
            <yd-list-other slot="other">
                <router-link :to="'/detail?id='+item.id">
                    <div class="item_price_desc">
                        <div class="item_price">
                            <span class="demo-list-price">
                                <em>¥</em>{{item.price}}</span>
                            <span class="demo-list-del-price">
                            </span>
                        </div>
                        <div class="item_desc">
                            {{item.desc}}
                        </div>
                    </div>
                </router-link>
            </yd-list-other>
        </yd-list-item>
    </yd-list>
</template>
<script>
export default {};
</script>
<style scoped>
.item_price_desc {
  height: 48px;
  overflow: hidden;
}
</style>
