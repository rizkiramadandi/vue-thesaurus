<script>
    export default {
      emits: ["word"],
      props: {
          title: String,
          subtitle: String,
          data: Array,
          query: String,
          input: String,
          isLoading: Boolean
      },
      methods: {
        changeWord(word) {
          this.$emit("word",word)
        }
      }
    }
</script>

<template>
    <div>
      <h1>{{ title }}</h1>
      <div>{{ subtitle }}</div>
      <div v-if="!isLoading">
        <div v-if="query && data.length > 0">Here is the {{ title.toLowerCase() }} list of the word "{{ query }}" ({{ data.length }} word found)</div>
        <div v-if="data.length > 0" class="word-container">
          <span v-for="(data, index) in data" :key="index+'-data'" class="word" @click="changeWord(data.word)">
            {{ data.word }}
          </span>
        </div>
        <div v-if="data.length == 0 && input">
          No word found
        </div>
        <div v-if="!input">
          No input
        </div>
      </div>
      <div v-else>
        Loading data...
      </div>
    </div>
  </template>

<style>
  .word-container {
    display: flex;
    flex-wrap: wrap;
    margin: 1em auto;
  }

  .word {
    border: .1em solid grey;
    padding: .5em;
    text-align: center;
    border-radius: .5em;
    margin: .25em;
    transition: .25s;
  }

  .word:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, .1);
  }
</style>
