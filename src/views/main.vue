<template>
    <div>
      <section id="section-1">
        <Profile/>
      </section>
      <section id="section-2">
        <Circle/>
      </section>
      <Divider />

      <section id="section-3">
        <Skill/>
      </section>

      <Divider />

      <section id="section-4">
        <Career/>
      </section>

      <Divider />

      <section id="section-5">
        <Intro/>
      </section>
    </div>
</template>
<script>
import Intro from '@/views/intro.vue'
import Profile from '@/views/profile.vue'
import Circle from '@/views/circle.vue'
import Skill from '@/views/skill.vue'
import Career from '@/views/career.vue'

export default {
  components: {
    Intro,
    Profile,
    Circle,
    Skill,
    Career
  }
}
</script>