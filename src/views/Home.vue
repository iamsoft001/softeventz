<template>
  <div>
    <home-page/>
    <vue-typer/>
    <our-work/>
    <kin-vision/>
    <job-done/>
  
  </div>
</template>

<script>
import HomePage from "@/components/HomePage.vue"
import VueTyper from '@/components/VueTyper.vue';
import OurWork from '@/components/OurWork.vue';
import KinVision from '@/components/KinVision.vue';
import JobDone from '@/components/JobDone.vue';


export default {
  components:{HomePage, VueTyper, OurWork, KinVision, JobDone}
};
</script>

<style>
</style>
