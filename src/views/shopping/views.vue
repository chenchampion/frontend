<template>

  <div id="views">

    <div id="welcome-wraps">

      <div id="J-buy-act-container" class="buy-act-container">
        <div id="J-buy-coupon" class="buy-coupon"></div>
        <div id="J-buy-banner" class="buy-banner"></div>
        <div id="J-buy-bulletin" class="buy-bulletin"></div>
        <div id="J-buy-tofuSection" class="buy-tofuSection"></div>
      </div>


      <!--欢迎业务组件-->
      <markets-module :markets="markets"></markets-module>

      <!--秒杀倒计时组件-->
      <promotions-module></promotions-module>

      <!--商品组件-->
      <goods-module :goods="goods"></goods-module>

      <!--分类展示组件-->
      <showcase-module></showcase-module>

      <!--外链下载APP组件-->
      <!--<down-module></down-module>-->


    </div>

  </div>

</template>

<script>

  //加载局部业务组件
  import MarketsModule from '../../views/shopping/markets.vue'//欢迎欢迎组件
  import PromotionsModule from '../../views/shopping/promotions.vue'//秒杀倒计时组件
  import GoodsModule from '../../views/shopping/goods.vue'//商品组件
  import ShowcaseModule from '../../views/shopping/showcase.vue'//分类展示组件
  import DownModule from '../../views/shopping/down.vue'//外链下载APP组件

  export default {
    props:['goods','markets'],
    components: {
      MarketsModule,PromotionsModule,GoodsModule,ShowcaseModule,DownModule
    },
  }

</script>
