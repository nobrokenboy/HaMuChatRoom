<script>

</script>
<template>
    <div class="expand">
      <ul class="expand-list">
          <li>
              <span class="icon iconfont"></span>
              <span class="text">哈哈钱包</span>
          </li>
      </ul>
    </div>
</template>
<style lang="sass" scoped>
    .expand{
        margin-top:2rem;
        padding:1.5rem;
        overflow: auto;
        .expand-list{
            width:100%;
            >li{
                 height:2.8rem;
                 line-height:2.8rem;
                 margin-bottom:0.625rem;
                >span{
                     display:inline-block;
                     color:#fff;
                     font-size:1rem;
                 }
                >span.icon{
                     position:relative;
                     font-size:1.5rem;
                    &:before{
                         position:absolute;
                     }
                }
            }

            li:nth-child(1)>span.icon:before{
                content:"\e600";
            }
        }
    }

</style>