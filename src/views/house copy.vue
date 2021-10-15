<template>
  <div>
    
    <v-app>
     
      <navbar :address="addressComp" @clickIcon="isOpenSidebar=!isOpenSidebar"></navbar>
      <!-- <sidebar @clickLink="isOpenSidebar=!isOpenSidebar" ref="sb" :open="isOpenSidebar"></sidebar> -->

      <v-navigation-drawer
        v-model="isOpenSidebar"
        absolute
        left
        hide-overlay
        disable-route-watcher
        ref="nd"
        >
        
        <v-list
          nav
          dence   
        >
          <v-list-item-group
          v-model="selectedItem"
          active-class="text--acent-4"
          style="top:64px"
          >
            
            <router-link class="routerLink" to="/"> 
              <v-list-item>
                <v-list-item-title>
                  На главную 
                </v-list-item-title>
              </v-list-item>
            </router-link>
              
            <div v-for="link in links" :key="link.id">   
              <router-link 
              :to="link.url+houseKey+link.children" 
              class="routerLink"
              > 
                
                <v-list-item>
                  <v-list-item-title>
                    {{link.title}} 
                  </v-list-item-title>
                </v-list-item>
              </router-link>
            </div>

          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-main >
        
        <v-container class="app-content" :class= {full:!isOpenSidebar}>
          <router-view></router-view>
        </v-container>
      </v-main>

      <v-footer
      color="primary"
      >
        <v-col class="font-weight-bold text-center white--text">
           <button @click="test">Test</button>
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
        isOpenSidebar: this.setIsOpenSidebar,
        address: {
          evr16: 'пр-кт. Европейский, д. 16',
          evr18k1: 'пр-кт. Европейский, д. 18, к. 1',
          evr18k2: 'пр-кт. Европейский, д. 18, к. 2',
          dnepr65: 'улица Днепропетровская, д. 65'
        },
        selectedItem: 1,
        items: [
          { text: 'На главную'},
          { text: 'Общая информация'},
          { text: 'Раскрытие информации'},
          { text: 'Объявления'},
          { text: 'Должники'},
          { text: 'Вопросы ответы'},
          { text: 'Контакты'},
          { text: 'Документы'},
        ],
        links: [
          {
          id: 2,
          url: '/house/',
          title: 'Общая информация',
          children:'/info'
          },
          {
          id: 3,
          url: '/house/',
          title: 'Раскрытие информации',
          children:'/disclosure'
          },
          {
          id: 4,
          url: '/house/',
          title: 'Объявления',
          children:'/informing'
          },
          {
          id: 5,
          url: '/house/',
          title: 'Должники',
          children:'/debtors'
          },
          {
          id: 6,
          url: '/house/',
          title: 'Вопросы ответы',
          children:'/answers'
          },
          {
          id: 7,
          url: '/house/',
          title: 'Контакты',
          children:'/contacts'
          },
          {
          id: 8,
          url: '/house/',
          title: 'Документы',
          children:'/documents'
          }
        ]
      }
    },
    components: {
      navbar, sidebar
    },
    computed: {
      houseKey() {
        return this.$route.params.houseKey
      },
      addressComp() {
        return this.address[this.$route.params.houseKey]
      },
      setIsOpenSidebar(){
        return !this.$refs.nd.isMobile
      }
    },
    methods:{
      test(){
        console.log("isMobile" + this.$refs.nd.isMobile);
      }
    }
  }
</script>
<style scoped>
.app-content{margin-left:250px;transition:margin-left .3s;position:relative} 
.app-content.full{margin-left:0}

.routerLink{
     text-decoration: none;
 }
</style>
