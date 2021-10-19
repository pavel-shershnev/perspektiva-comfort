<template>
  <div>
    <v-row class="mx-2">
      <v-col   md="12">
        <v-card
          elevation="1"
          >
          <v-card-title>
              Документы компании
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  
   <v-row class="mx-2" v-for="doc in docs" :key="doc">
    <v-col   md="12" >
      <v-card
        elevation="5"
      >
        <v-card-title font-size=14px>
          {{doc}}
        </v-card-title>
        <v-card-text style="padding-bottom: 0px; padding-left: 25px">
          <p style="margin-bottom:0">имя_файла.pdf</p>
        </v-card-text>
        <v-card-actions>
          <v-btn
           class="mx-3"
           depressed
           outlined 
           rounded
           color="primary" 
          >
            Смотреть
          </v-btn>
          <v-btn
           class="mx-3"
           depressed
           outlined 
           rounded
           color="primary" 
          >
            Скачать
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <!-- <v-col   md="3"> -->
      <!-- <v-card
        elevation="5"
      >
        

      </v-card> -->
    <!-- </v-col> -->
  </v-row>
  </div>
</template>
<script>
  export default {
    data: () => ({
      docs: [
        'ИНН/КПП',
        'Свидетельство о регистрации юридического лица',
        'Договор управления',
        'Лицензии на осуществление деятельности по управлению многоквартирными домами',
      ]
    }),
  }
</script>