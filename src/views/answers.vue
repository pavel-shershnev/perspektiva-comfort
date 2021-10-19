<template>
  <div>
    <v-row class="mx-2">
      <v-col   md="12">
        <v-card
          elevation="1"
          >
          <v-card-title>
              Часто задаваемые вопросы
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

      <v-row justify="center" class="mx-2" >
   
        <v-expansion-panels popout>
          <v-expansion-panel
          v-for="answer in answers" :key="answer.id"
          >
            <v-expansion-panel-header style="padding-bottom: 0px;"><span class="text-h6">{{answer.title}}</span></v-expansion-panel-header>

            <v-expansion-panel-content>
            {{answer.text}}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        
      </v-row>
  </div>
</template>
<script>
  export default {
    data: () => ({
      answers: [
        {id:1,
        title: "Вопрос",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {id:2,
        title: "Вопрос 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {id:3,
        title: "Вопрос 3",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {id:4,
        title: "Вопрос 4",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {id:5,
        title: "Вопрос 5",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
      ]
      
    }),
  }
</script>