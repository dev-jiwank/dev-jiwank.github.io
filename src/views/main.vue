<template>
    <div>
      <section  v-show="false" id="section-0">
        <Subtitle  v-on:childEvent="updateParentValue" />
      </section>

    <transition name="ease">
        <div v-show="true" class="transition-box">

        <section id="section-1">
          <Profile/>
        </section>

        <Divider />

        <section id="section-2">
          <Skill/>
        </section>

        <Divider />

        <section id="section-3">
          <Career/>
        </section>

        <Divider />

        <section id="section-3">
          <Contact/>
        </section>

        <Divider />
<!-- 
        <section id="section-4">
          <Solo/>
        </section> -->

        </div>
    </transition>

    </div>    
</template>
<script>
import Solo from '@/views/project.vue'
import Intro from '@/views/intro.vue'
import Profile from '@/views/profile.vue'
import Skill from '@/views/skill.vue'
import Career from '@/views/career.vue'
import Subtitle from '@/views/subtitle.vue'
import Contact from '@/views/contact.vue'

export default {
  components: {
    Solo,
    Subtitle,
    Intro,
    Profile,
    Skill,
    Career,
    Contact
  },
  data() {
    return {
      parentVaule : false
    }
  },
  mounted() {
    this.parentVaule = false
  },
  methods: {
    updateParentValue() {
      this.parentVaule = true
    },
  },
}
</script>