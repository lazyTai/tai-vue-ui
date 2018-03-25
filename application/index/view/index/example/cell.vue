<template>
    <t-layout class="body">
        <t-header-back title="左右佈局"></t-header-back>
        <t-cell-group title="账号密码">
            <t-cell-item>
                <div slot="icon"></div>
                <div slot="left">登录</div>
                <div slot="right">
                    <t-input required error="不能为空"></t-input>
                </div>
            </t-cell-item>
        </t-cell-group>
    </t-layout>
</template>
<style>
.body {
  background: #eeee;
}
</style>

<script>
export default {};
</script>
