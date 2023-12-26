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
      myheight: '',
      once_trigger_auto_scroll: true
    };
  },
  // methods: {
  //   autoscroll() {
  //     window.scrollTo({
  //       top:  this.myheight + 75,
  //       behavior: 'smooth'
  //     });
  //   },
  // },
  // mounted() {
  //   this.myheight = window.innerHeight;

  //   let scrollTimeout;

  //   this.handleScroll = () => {
  //     clearTimeout(scrollTimeout);

  //     scrollTimeout = setTimeout(() => {
  //       let scrollLocation = document.documentElement.scrollTop;

  //       if ((this.myheight / 5) < scrollLocation && this.once_trigger_auto_scroll) {
  //         this.once_trigger_auto_scroll = false;
  //         this.autoscroll();
  //       }
  //     }, 50);
  //   };

  //   window.addEventListener('scroll', this.handleScroll);
  // },
  // destroyed() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // },
};
</script>