<script>
  export default {
    methods: {
      async fetchData(api_endpoint, query) {
        if(query && api_endpoint) {
          let data = await fetch(`https://api.datamuse.com/words?${api_endpoint}=${query}`)
          let json = await data.json()
          return json
        }
        else {
          return []
        }
      }
    }, 
  }
</script>