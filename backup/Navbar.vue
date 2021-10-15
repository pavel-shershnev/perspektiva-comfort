<template>
  <div>
    <v-app-bar
      app
      color="primary"
      dark
    >

      <v-app-bar-nav-icon @click="$emit('clickIcon')"></v-app-bar-nav-icon>
      <h3>| logo |</h3>  
  
      <v-spacer></v-spacer>
  
      <h3>{{address}}</h3>

    </v-app-bar>
  </div>
</template>
<script>
export default {
  emits: ['clickIcon'],
  name: 'Navbar',
  props:['address'],
}
</script>

