<template>
<div>
 
 <v-container>
   <div class="text-center white--text cyan" >
     <h1>ООО «ПЕРСПЕКТИВА КОМФОРТ»</h1>
     <v-img 
     class="mx-10"
     height="250"
     src="https://activezone-pro.ru/images/stories/Client_logos/Investtorg.png"
     ></v-img>
<br>
     <p class="text-center white"><router-link to="/about">О компании</router-link></p>

    <h3>Здравствуйте, уважаемые жильцы!</h3>
    <br>
    <h4>Рады приветствовать Вас на сайте нашей управляющей компании!</h4>
    <h4>Здесь вы найдёте всю необходимую информацию, подлежащую раскрытию,согласно Стандарта раскрытия информации (Постановления Правительства №731 от 23 сентября 2010 г.)</h4>
   </div>
   <br>

      <v-row class="mx-2">
    <v-col  v-for="home in homes" :key="home.id" md="6">
      <v-card
        elevation="12"
      >
        <v-img
        
        height="350"
        :src="home.img"
        >
        </v-img>
        <v-card-title font-size=14px>
          {{home.address}}
        </v-card-title>
        <v-card-text>
          <p>{{home.date}}</p>
        </v-card-text>
    

    <v-card-actions>
      <v-btn
        class="mx-3"
        depressed
      outlined 
        rounded
        color="primary"
        @click="$router.push(`/house/${home.houseKey}/info`)"
      >
       Выбрать
      </v-btn>
    </v-card-actions>
    
      </v-card>
    </v-col>
  </v-row>
  </v-container>

 
 
</div>


 
</template>

<script>


  export default {
    name: 'Welcome',
    data() {
      return {
      homes: [
        {
          id: 1,
          address: "Ленинградская область, р-н. Всеволожский, д. Кудрово, пр-кт. Европейский, д. 16",
          date: "c 23 марта 2017 г.",
          img: "https://cdn.dominfo.ru/houses/photo/production/358758/732d883de59e53ed886f888a6f9f68e9.jpg",
          houseKey: "evr16"
        },
        {
          id: 2,
          address: "Ленинградская область, р-н. Всеволожский, д. Кудрово, пр-кт. Европейский, д. 18, к. 1",
          date: "c 7 марта 2017 г.",
          img: "https://4-img.onrealt.ru/files/06-2021/26/28/0e/kudrovo-kypit-kvartiru-vtorichnoe-zhilje-evropejskij-prospekt-18k2-1079497437.jpg",
          houseKey: "evr18k1"
        },
        {
          id: 3,
          address: "Ленинградская область, р-н. Всеволожский, д. Кудрово, пр-кт. Европейский, д. 18, к. 2",
          date: "c 29 декабря 2016 г.",
          img: "https://images.pro.bkn.ru/rfn/s_big/1526a2aa-2c13-11e7-b547-448a5bd44c07.jpg",
          houseKey: "evr18k2"
        },
        {
          id: 4,
          address: "Санкт-Петербург, улица Днепропетровская, д. 65",
          date: "c 16 мая 2021 г.",
          img: "https://www.remospro.ru/upload/objects/100/100/2637989/68323bafad532bd3a3d2ee5966c81aa5.jpg",
          houseKey: "dnepr65"
        },
      ]
    }
    },
    components: {
     
    },
  }
</script>
