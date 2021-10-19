<template>
  <div>
    <v-row class="mx-2">
      <v-col   md="12">
        <v-card
          elevation="1"
          >
          <v-card-title>
              Раскрытие информации об УК
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mx-2">
      <v-col
       md="2"
       class="d-flex"
       cols="12"
       sm="6"
      >
        <v-select
          :items="items"
          label="2021 год"
          solo
        ></v-select>
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
      items: ['2018 год', '2019 год', '2020 год', '2021 год'],
      docs: [
        'РАБОТЫ ПО СОДЕРЖАНИЮ И РЕМОНТУ ИМУЩЕСТВА МКД',
        'ТАРИФЫ, НОРМАТИВЫ И ПОСТАВЩИКИ КОММУНАЛЬНЫХ УСЛУГ',
        'ОТЧЕТ ОБ ИСПОЛНЕНИИ ДОГОВОРА УПРАВЛЕНИЯ, СМЕТА ДОХОДОВ/РАСХОДОВ'
      ]
    }),
  }
</script>
