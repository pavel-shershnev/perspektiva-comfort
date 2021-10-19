<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Поиск по номеру квартиры"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
     <!-- hide-default-header
    hide-default-footer -->
    <v-data-table
   
    fixed-header
      disable-sort
      :headers="headers"
      :items="deptors"
      :search="search"
    ></v-data-table>
    
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Квартира',
            align: 'start',
            value: 'flat',
          },
          { text: 'Долг', value: 'debt', filterable: false },
          { text: 'Пени', value: 'Peni', filterable: false },
          { text: 'Сумма долга', value: 'amount', filterable: false },
        ],
        deptors: [
          {
            flat: 22,
            debt: 1000,
            Peni: 11,
            amount: 1011
          },
            {
            flat: 32,
            debt: 1000,
            Peni: 10,
            amount: 1010
          },
            {
            flat: 55,
            debt: 1000,
            Peni: 10,
            amount: 1010
          },
            {
            flat: 9,
            debt: 1000,
            Peni: 10,
            amount: 1010
          },
            {
            flat: 87,
            debt: 1000,
            Peni: 10,
            amount: 1010
          },{
            flat: 22,
            debt: 1000,
            Peni: 11,
            amount: 1011
          },
            {
            flat: 32,
            debt: 1000,
            Peni: 10,
            amount: 1010
          },
            {
            flat: 55,
            debt: 1000,
            Peni: 10,
            amount: 1010
          },
            {
            flat: 9,
            debt: 1000,
            Peni: 10,
            amount: 1010
          },
            {
            flat: 87,
            debt: 1000,
            Peni: 10,
            amount: 1010
          },{
            flat: 22,
            debt: 1000,
            Peni: 11,
            amount: 1011
          },
            {
            flat: 32,
            debt: 1000,
            Peni: 10,
            amount: 1010
          },
            {
            flat: 55,
            debt: 1000,
            Peni: 10,
            amount: 1010
          },
            {
            flat: 9,
            debt: 1000,
            Peni: 10,
            amount: 1010
          },
            {
            flat: 87,
            debt: 1000,
            Peni: 10,
            amount: 1010
          },{
            flat: 22,
            debt: 1000,
            Peni: 11,
            amount: 1011
          },
            {
            flat: 32,
            debt: 1000,
            Peni: 10,
            amount: 1010
          },
            {
            flat: 55,
            debt: 1000,
            Peni: 10,
            amount: 1010
          },
            {
            flat: 9,
            debt: 1000,
            Peni: 10,
            amount: 1010
          },
            {
            flat: 87,
            debt: 1000,
            Peni: 10,
            amount: 1010
          }
        ],
      }
    },
  }
</script>