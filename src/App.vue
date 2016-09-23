
<script>
    import Card from 'components/card.vue';
    import Expand from 'components/expand.vue';
    import Setting from 'components/setting.vue';
    import Headers from 'components/headers.vue';
    import List from 'components/list.vue';
    import Footers from 'components/footers.vue';

    export default {
        components:{Card,Expand,Setting,Headers,List,Footers}
    }
</script>
<template>
    <div id="app">
        <div class="sidebar animated">
            <card></card>
            <expand></expand>
            <setting></setting>
        </div>
        <div class="main">
            <headers></headers>
            <list></list>
            <footers></footers>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    #app{
        margin:20px auto;
        width:100%;
        .sidebar{
            position:fixed;
            left:0;
            top:0;
            right:20%;
            bottom:0;
            background:#F69B29 url('../dist/img/slidenav.png') no-repeat center;/*这里不要使用绝对路径*/
            background-size:cover;

        }
        .main{
            width:100%;
            height:100%;

        }
    }


</style>