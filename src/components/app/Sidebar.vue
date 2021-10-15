<template>
  <div>
    <v-navigation-drawer
    v-model="open"
    absolute
    left
    hide-overlay
    ref="nd"
    disable-route-watcher
    
    >
     <!-- class="v-navigation-drawer--is-mobile" -->
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
           
          <div v-for="link in links" :key="link.id" @click="clickLink">   
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
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
 
  props:{
    open: Boolean,
    default: true,
  },
  methods: {
    clickLink () {
      if (this.$refs.nd.isMobile===true){
        this.$emit('clickLink')
      }
      else return
    }
  },
 mounted(){
   console.log(this.$refs.nd.isMobile);
 },
  computed: {
    houseKey() {
      return this.$route.params.houseKey
    },
    // openComp() {
    //   return this.$props.open
    // }
  },
  //  watch: {
  //   open () {
  //     this.openSidebar = this.open
  //   },
  //   openSidebar () {
  //     this.$emit('clickLink', this.openSidebar)
  //   },
  // },

  data: () => ({
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
  })
}
</script>
<style scoped>
.routerLink{
     text-decoration: none;
 }
/* a.active{background-color:#F1F3F4}
.app-sidenav.open{
  -webkit-transform:translateX(0);
  transform:translateX(0)} */
</style>

