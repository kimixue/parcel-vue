<template>
    <div class="g-doc">
        <span>{{msg}}</span>
    </div>
</template>
<script>
    export default {
        name: 'app',
        data(){
            return {
                msg:'kimi'
            }
        }
    }
</script>
<style lang="scss" scoped>
    .g-doc{
        span{
            color:red;
        }
    }
</style>