<template>
  <div>
    <v-app>
      
      <navbar :address="addressComp" @clickIcon="isOpenSidebar=!isOpenSidebar"></navbar>
      <sidebar></sidebar>

      <v-main >
        <v-container >
          <router-view></router-view>
        </v-container>
      </v-main>

      <v-footer
      color="primary"
      >
        <v-col class="font-weight-bold text-center white--text">
          footer
        </v-col>
      </v-footer>

    </v-app>
    
  </div>
  
</template>

<script>
  import navbar from '../components/app/Navbar'
  import sidebar from '../components/app/Sidebar'


  export default { 

    name: 'Home',
    data() {
      return {
        key:0,
        isOpenSidebar: true,
        address: {
          evr16: 'пр-кт. Европейский, д. 16',
          evr18k1: 'пр-кт. Европейский, д. 18, к. 1',
          evr18k2: 'пр-кт. Европейский, д. 18, к. 2',
          dnepr65: 'улица Днепропетровская, д. 65'
        }
      }
    },
    computed: {
      addressComp() {
        return this.address[this.$route.params.houseKey]
      },
    },
  
    components: {
      navbar, sidebar
    },
  }
</script>
<style scoped>
/* .app-content{margin-left:250px;transition:margin-left .3s;position:relative}
.app-content.full{padding-left:0} */
</style>
