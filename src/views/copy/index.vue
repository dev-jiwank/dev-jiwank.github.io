<template>
  <div>
      <first></first>
      <!-- <second></second> -->
      <third></third>
  </div>
</template>

<script>
import first from './growing.vue'
// import second from './growing2.vue'
import third from './growing3.vue'

export default {
  components: {
    first,
    // second,
    third
  },
  data() {
    return {
      myHeight: window.innerHeight,
      myLocation: document.documentElement.scrollTop,
      once_trigger_auto_scroll: true
    };
  },
  // mounted() {
  //   window.addEventListener('resize', this.handleResize);
  //   window.addEventListener('scroll', this.handleLocation);
  // },
  // beforeDestroy() {
  //   window.removeEventListener('resize', this.handleResize);
  //   window.removeEventListener('scroll', this.handleLocation);
  // },

  // methods: {
  //   handleResize() {
  //     this.myHeight = window.innerHeight
  //     console.log(this.myHeight)
  //   },
  //   handleLocation() {
  //     this.myLocation = document.documentElement.scrollTop
  //     console.log(this.myHeight, this.myLocation)

  //     if((this.myHeight/3<this.myLocation) && this.once_trigger_auto_scroll){
  //       this.once_trigger_auto_scroll = false
  //       this.scrollToBottom()
  //     }
  //     // else if((this.myHeight/2<this.myLocation) && this.once_trigger_auto_scroll == false) {
  //     //   this.once_trigger_auto_scroll = true
  //     //   this.scrollToTop()
  //     // }

  //   },

  //   scrollToTop() {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: 'smooth' 
  //     });
  //   },
  //   scrollToBottom() {
  //     window.scrollTo({
  //       top: this.myHeight+100,
  //       behavior: 'smooth' 
  //     });
  //   }
  // },
};
</script>