<template>
    <t-layout class="body">
        <t-header-back title="左右佈局"></t-header-back>
        <t-cell-group title="账号密码">
            <t-cell-item>
                <div slot="icon"></div>
                <div slot="left">名字</div>
                <div slot="right">
                    <t-input :validate="[{type:'length',exp:$expTypes.exp_length6,error:'字数不能小于6' },
                    {type:'required',exp:$expTypes.exp_not_null,error:'不能为空' } ]"></t-input>
                </div>
            </t-cell-item>
            <t-cell-item>
                <div slot="icon"></div>
                <div slot="left">邮箱</div>
                <div slot="right">
                    <t-input :validate="[{exp:$expTypes.exp_email,error:'不是邮箱' },
                  ]"></t-input>
                </div>
            </t-cell-item>
        </t-cell-group>

        <t-cell-group title="账号密码">
            <t-cell-item>
                <div slot="icon"></div>
                <div slot="left">名字</div>
                <div slot="right">
                    <t-input :validate="[{type:'length',exp:$expTypes.exp_length6,error:'字数不能小于6' },
                    {type:'required',exp:$expTypes.exp_not_null,error:'不能为空' } ]"></t-input>
                </div>
            </t-cell-item>
            <t-cell-item>
                <div slot="icon"></div>
                <div slot="left">邮箱</div>
                <div slot="right">
                    <t-input :validate="[{exp:$expTypes.exp_email,error:'不是邮箱' },
                  ]"></t-input>
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
