<template>
    <div class="role-switch">
      <button @click="changeRole('user')">User</button>
      <button @click="changeRole('admin')">Admin</button>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const emit = defineEmits();
  const changeRole = (role) => {
    emit('roleChanged', role);
  };
  </script>
  
  <style scoped>
  button {
    margin: 0 10px;
    padding: 10px 20px;
    cursor: pointer;
  }
  </style>
  