<template>
  <div>
    <v-app>
      
      <navbar :address="addressComp" @clickIcon="isOpenSidebar=!isOpenSidebar"></navbar>
      <sidebar @clickLink="isOpenSidebar=!isOpenSidebar" ref="sb" :open="isOpenSidebar"></sidebar>

      <v-main >
        <v-container class="app-content" :class= {full:!isOpenSidebar}>
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
    mounted(){
      console.log('isOpenSidebar',this.isOpenSidebar);
      console.log('мегакостыль',this.$refs.sb.$refs.nd.isMobile)
    },
    data() {
      return {
        
        isOpenSidebar: this.ios,
        address: {
          evr16: 'пр-кт. Европейский, д. 16',
          evr18k1: 'пр-кт. Европейский, д. 18, к. 1',
          evr18k2: 'пр-кт. Европейский, д. 18, к. 2',
          dnepr65: 'улица Днепропетровская, д. 65'
        }
      }
    },
    computed: {
      ios(){
        return !this.$refs.sb.$refs.nd.isMobile
      },
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
.app-content{margin-left:250px;transition:margin-left .3s;position:relative} 
.app-content.full{margin-left:0}
</style>
