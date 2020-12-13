<template>
  <h1>Job Details Page</h1>
  
  <p>The job id is {{id}}</p>
</template>

<script>
export default {
    props:['id'],

    // 2 methods of sending the params id to details:
    //  1. thru props (see above) 2. setting id property from $route.params.id (see below)
    // data(){
    //     return {
    //     // $route gives access to information on the route
    //         id: this.$route.params.id,
    //     }
    // }
}
</script>

<style>

</style>