<template>
    <div class="plat-card">
      <div class="plat-image-container">
        <img :src="plat.image" :alt="plat.nomPlat" class="plat-image" />
      </div>
      <div class="plat-details">
        <h2 class="plat-title">{{ plat.nomPlat }}</h2>
        <p class="plat-description">{{ plat.description }}</p>
        <p class="plat-price">{{ plat.prix }}1255 €</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PlatCard',
    props: {
      plat: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .plat-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .plat-image-container {
    width: 100%;
    max-height: 200px;
  }
  
  .plat-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
  
  .plat-details {
    margin-top: 10px;
  }
  
  .plat-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .plat-description {
    font-size: 14px;
    margin-bottom: 5px;
  }
  
  .plat-price {
    font-size: 16px;
    font-weight: bold;
  }
  </style>
  