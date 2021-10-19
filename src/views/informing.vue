<template>
  <div>
    <v-row class="mx-2">
      <v-col   md="12">
        <v-card
          elevation="1"
          >
          <v-card-title>
              Объявления
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

      <v-row justify="center" class="mx-2" >
   
        <v-expansion-panels popout>
          <v-expansion-panel
          v-for="message in messages" :key="message.id"
          >
            <v-expansion-panel-header style="padding-bottom: 0px;"><span class="text-h6">{{message.title}}</span></v-expansion-panel-header>
            <p class="text-caption" style="padding-left: 25px">{{message.date}}</p>
             
            <v-expansion-panel-content>
            {{message.text}}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        
      </v-row>
  </div>
</template>
<script>
  export default {
    data: () => ({
      messages: [
        {id:1,
        title: "Название объявления",
        date: "дата",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {id:2,
        title: "Название объявления2",
        date: "дата",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {id:3,
        title: "Название объявления3",
        date: "дата",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {id:4,
        title: "Название объявления4",
        date: "дата",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {id:5,
        title: "Название объявления5",
        date: "дата",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
      ]
      
    }),
  }
</script>