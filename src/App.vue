<template>
  <div class="app">
    <header>
      <div class="title">
        <img src="./assets/heart.svg" alt="">
        <h1>Rye Jobs</h1>
      </div>
      <div class="order">
        <button @click="handleClick('title')">Order by title</button>
        <button @click="handleClick('salary')">Order by salary</button>
        <button @click="handleClick('location')">Order by location</button>
      </div>
    </header>

    <JobList :jobs="jobs" :order="order"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import JobList from './components/JobList.vue';
import Job from './types/Job'
import OrderTerm from './types/OrderTerm'

export default defineComponent({
  name: 'App',
  components: { JobList },
  setup() {
    const jobs = ref<Job[]>([
      {id:'1', title: 'Carpenter', location: 'Lagos', salary: 30000 },
      {id:'2', title: 'Visual Designer', location: 'Ibadan', salary: 60000 },
      {id:'3', title: 'Fisherman', location: 'Akure', salary: 40000 },
      {id:'4', title: 'Engineer', location: 'Lagos', salary: 82000 },
      {id:'5', title: 'Prison Guard', location: 'Abuja', salary: 37000 },
    ])

    const order = ref<OrderTerm>('title')

    const handleClick = (term: OrderTerm) => {
      order.value = term
    }

    return { jobs, handleClick, order }

  }
});
</script>

<style lang="scss">
header {
  text-align: center;

  .order {
    margin-top: 20px;
  }

  .title {
    display: flex;
    justify-content: center;
  }

  img {
    width: 60px;
    margin-right: 20px;
  }

  h1 {
    font-size: 3em;
  }
}

button {
  margin: 0 10px;
  color: #1195c9;
  border: 3px solid #1195c9;
  background: #d5f0ff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}


</style>
