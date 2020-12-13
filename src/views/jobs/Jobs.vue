<template>
  <h1>jobs</h1>
  <div class="job" v-for="job in jobs" :key="job.id">
      <!-- adding params if the id of each job -->
        <router-link :to="{name:'JobDetails', params:{id: job.id}}">
            <h2>{{job.title}}</h2>
        </router-link>
      
  </div>
</template>

<script>
export default {
    data(){
        return{
            jobs:[
                {title: 'ux designer', id:1, details:'lorem'},
                {title: 'web developer', id:2, details:'lorem'},
                {title: 'vue developer', id:3, details:'lorem'},
            ]
        }
    }
}
</script>

<style>
    .job h2{
        background: #f4f4f4;
        padding: 20px;
        border-radius: 10px;
        margin: 10px auto;
        max-width: 600px;
        cursor: pointer;
        color: #444;
    }
    .job h2:hover{
        background: #ddd;
    }
    .job a{
        text-decoration: none;
    }
</style>