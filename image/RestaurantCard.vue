<template>
  <div :style="changeBackground"  class="restaurant--card"  >
<div class="restaurant--image"></div>
  <div class="restaurant--information">
<div class="top">
  <p class="name">
   {{ info_restaurant.name }}
  </p>
  <p class="note">
    <span> {{info_restaurant.note }}
  </span>
  </p>
  </div>
  <p class="time">   {{ info_restaurant.drive_time }}
  </p>
</div>
  </div>
  
</template>

<script>
//import { url } from 'inspector'

import { computed } from 'vue';
export default { 
 name: 'RestaurantCard',
  props: {
    info_restaurant:{
     type: Object,
     required: true
  }},
  setup(props){
    const changeBackground =  computed(() => {
      return{
        backgroundImage : `url(${props.info_restaurant.image})`
      }
    })
    console.log(changeBackground)
    return{
      changeBackground
    }
  }
}
 

  
</script>

<style lang="scss">

  .restaurant--card {
    width: 470px;
    height: 350px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s ease;
    margin-top: 40px;
  }
  
  .restaurant--card:hover {
    transform: translateY(-4px);
  }

  .restaurant--image {
    height: 60%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .restaurant--information {
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 40%;
    background-color: #fff;
    position: relative;
    z-index: 1;
    border-top: 1px solid #f5f5f5;
    text-decoration: none !important;
  }

  .name {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
    text-transform: uppercase;
    text-decoration: none !important;
  }

  .note {
    display: inline-block;
    background-color: #f5f5f5;
    color: #333;
    padding: 5px;
    font-size: 0.8rem;
    border-radius: 5px;
    margin-right: 10px;
  }

  .time {
    font-size: 0.8rem;
    font-family: 'Times New Roman', Times, serif;
    margin-top: 10px;
    text-decoration: none !important;
  }

</style>
