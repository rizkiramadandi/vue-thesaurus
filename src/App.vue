<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
  export default {
    data() {
      return {
        input: null
      }
    },
  }
</script>

<template>
  <header>
    <div class="wrapper">
      <input type="text" v-model="input" class="input" placeholder="Your word here...">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/synonym">Synonym</RouterLink>
        <RouterLink to="/antonym">Antonym</RouterLink>
        <RouterLink to="/rhyme">Rhyme</RouterLink>
        <RouterLink to="/homophone">Homophone</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView :input="input" @word="(word) => input = word" />

  <a id="github" href="https://github.com/rizkiramadandi/vue-thesaurus" rel="noreferrer noopener">
    <span>Github</span>
    <img src="/src/assets/github.svg" alt="Github">
  </a>
</template>