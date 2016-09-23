<script>

</script>
<template>
    <div class="card">
        <header>
            <div class="basic-msg">
                <div class="pic-wrapper">
                   <span>
                        <img src="../../dist/img/header.png"/>
                   </span>
                </div>
                <div class="name-wrapper">
                    <p>哈姆太郎爱吃菠萝</p>
                </div>
            </div>
            <p class="intro">
                "这个家伙很懒哦！"
            </p>
        </header>
    </div>
</template>
<style lang="sass" scoped>
     .card{
         padding:3rem 1.5rem 1.5rem;

         .basic-msg{
             height:4rem;
             .pic-wrapper{
                 float:left;
                 display:table;
                 width:30%;
                 height:100%;
                 line-height:4rem;
                 >span{
                    display:table-cell;
                    vertical-align:middle;

                     img{
                         width:4rem;
                         height:4rem;
                         border-radius:50%;
                     }
                  }
             }
             .name-wrapper{
                 float:left;
                 width:70%;
                 p{
                     margin-top:0.625rem;
                     font-size:1.25rem;
                 }

             }
         }
         .intro{
             width:100%;
             margin-top:0.625rem;
             font-size:1rem;
             color:#c0c0c0;
             text-overflow:ellipsis;
             word-break: break-all;
         }


     }
</style>