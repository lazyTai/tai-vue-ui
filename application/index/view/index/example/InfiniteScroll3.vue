<template>
    <div class="infinitescroll3">
        <t-infinite-scroll3>
            <template scope="scrollviewdata">
                {{scrollviewdata}}
                <div v-for="n in 100">
                    {{n}}
                </div>
            </template>
        </t-infinite-scroll3>
    </div>

</template>
<script>
export default {};
</script>