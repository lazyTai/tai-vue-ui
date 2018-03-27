<template>
    <div class="infinitescroll3">
        <t-infinite-scroll3 height='200'>
            <div v-for="n in 100">
                {{n}}
            </div>
        </t-infinite-scroll3>
    </div>

</template>
<script>
export default {};
</script>