<template>
    <div class="list_item" >
        <div class="list_item_left_icon">
            <svg class="icon" aria-hidden="true">
                <use :xlink:href="'#'+left_icon"></use>
            </svg>
        </div>
        <div class="title_sub_title">
            <div class="list_item_title">{{title}}</div>
            <div class="list_item_sub_title">{{sub_title}}</div>
        </div>
        <div class="list_item_right_icon">
            <svg class="icon" aria-hidden="true">
                <use :xlink:href="'#'+right_icon"></use>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    left_icon: String,
    title: String,
    sub_title: String,
    right_icon: String,
    click:Function,
  }
};
</script>
<style scoped>
.list_item {
  display: flex;
  border-bottom: 1px solid #eee;
  padding: 10px 0px;
  cursor: pointer;
}
.list_item .list_item_left_icon {
  width: 30px;
  display: flex;
  align-self: center;
  font-size: 20px;
}
.list_item .title_sub_title {
  display: flex;
  align-self: center;
  flex: 1;
  line-height: 30px;
}
.list_item .list_item_sub_title {
  font-size: 12px;
  padding-top: 3px;
  padding-left: 5px;
}
.list_item .list_item_right_icon {
  display: flex;
  align-self: center;
}
</style>

