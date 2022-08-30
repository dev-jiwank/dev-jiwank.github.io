<template>
    <Carousel
        v-model="value"
        :autoplay="setting.autoplay"
        :autoplay-speed="setting.autoplaySpeed"
        :dots="setting.dots"
        :radius-dot="setting.radiusDot"
        :trigger="setting.trigger"
        :arrow="setting.arrow">
        <CarouselItem>
            <Image :style="{width: '100%'}" :src="this.verticalUrlList[0]"/>
        </CarouselItem>
        <CarouselItem>
            <Image :style="{width: '100%'}" :src="this.verticalUrlList[1]"/>
        </CarouselItem>
        <CarouselItem>
            <Image :style="{width: '100%'}" :src="this.verticalUrlList[2]"/>
        </CarouselItem>
        <CarouselItem>
            <Image :style="{width: '100%'}" :src="this.verticalUrlList[3]"/>
        </CarouselItem>
    </Carousel>
</template>
<script>
    export default {
      data() {
        return {
          verticalUrlList: [
            'https://file.iviewui.com/images/image-demo-1.jpg',
            'https://file.iviewui.com/images/image-demo-2.jpg',
            'https://file.iviewui.com/images/image-demo-3.jpg',
            'https://file.iviewui.com/images/image-demo-4.jpg',
          ],
          value: 0,
          setting: {
              autoplay: true,
              autoplaySpeed: 2000,
              dots: 'inside',
              radiusDot: false,
              trigger: 'click',
              arrow: 'hover'
          }
        }
      }
    }
</script>
