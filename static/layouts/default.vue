<template>
  <v-app>
    <nuxt></nuxt>
    <Dialog/>
  </v-app>
</template>

<script>
import Dialog from '~/components/Dialog'

export default{
  components: {
    Dialog
  }
}
</script>

<style lang="scss">
    .v-application{
        font-family: 'Quicksand', sans-serif;
    }
    .v-toolbar__title{
        text-align: center;
        width: 100%;
        font-weight: bold
    }
    .v-application.purple{
      background-color:#6a1b9a !important;
      border-color:#6a1b9a !important;
    }
    .text-purple{
      color: #6a1b9a;
    }
    .text-main{
      font-size: 20px;
    }
    .text-title{
      font-size: 20px;
      font-weight: bold;
    }
    .w-100{
      width: 100%;
    }
    .w-80{
      width: 80%
    }
    .my-btn{
      font-size: 20px !important;
      text-transform: none !important;
      height: auto !important;
      padding: 10px 0;
      font-weight: bold;
      
    }
    .outlined{
        min-height: 35px;
        border: 1.5px solid #6a1b9a;
        border-radius: 28px;
        line-height: normal;
      }
    .set-padding{
      padding: 0 10px;
    }
</style>