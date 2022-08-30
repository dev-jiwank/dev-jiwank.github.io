<template>
    <div>
      <section id="section-1">
        <Intro/>
      </section>

      <Divider />

      <section id="section-3">
        <Skill/>
      </section>

      <Divider />

    </div>
</template>
<script>
import Intro from '@/views/intro.vue'
import Skill from '@/views/skill.vue'

export default {
  components: {
    Intro,
    Skill
  }
}
</script>