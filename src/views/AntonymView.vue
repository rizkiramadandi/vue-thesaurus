<script>
  import Fetch from "@/components/Fetch.vue"
  import ProcessedTemplate from "@/components/ProcessedTemplate.vue"

  export default {
    emits:["word"],
    components: {
      ProcessedTemplate
    },
    props: {
      input: String
    },
    data() {
      return {
        query: this.input,
        data: null,
        title: `Antonym`,
        subtitle: `Opposite word`,
      }
    },
    created() {
      this.getData()
    },
    methods: {
      changeWord(word) {
        this.$emit("word",word)
      },
      async getData() {
        this.isLoading = true
        this.data = await this.fetchData(`rel_ant`,this.query)
        this.isLoading = false
      }
    },
    mixins: [Fetch],
    watch: {
      input() {
        this.query = this.input
        this.getData()
      }
    }
  }
</script>

<template>
  <ProcessedTemplate :title="title" :subtitle="subtitle" :query="query" :data="data" :input="input" :isLoading="isLoading" @word="(word) => changeWord(word)" />
</template>