<template>
    <div>
        <v-app-bar
            color="purple lighten-1"
            dense
            flat
            dark
        >
            <v-toolbar-title>Register</v-toolbar-title>
        </v-app-bar>
        <v-container class="pt-0 pb-0"></v-container>
            <v-row>
                <v-col cols="12">
                    
                        <div class="text-center mt-10">
                            <img src="https://media.discordapp.net/attachments/941495794211631124/1022126564160311326/Untitled_3.png" alt="" width="270px"> 
                            <h1 class="text-title mt-3">Welcome, {{ name }}!</h1>
                            <p class="mt-7 ">
                                Welcome to SUT Oral Health ChatBot, <br/>we hope you have a good time here.
                            </p>
                    </div>
                        <div class="text-center"><v-btn rounded color="purple lighten-1" dark class="w-80 mt-5"  @click="book">Book your queue today, now!</v-btn></div>
                        <div class="text-center mt-6"><v-btn outlined rounded width="285px" color="purple lighten-1">CLOSE</v-btn></div>
                        <!-- <div class="text-center w-80  mb-0 mt-8 outlined text-purple lighten-1" @click="back">CLOSE</div>      -->
  
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                name: this.$store.getters.getRegister.Firstname
            }
        },
        methods:{
            book(){
                this.$router.push('/book')
            },
            close(){

            }
        }
    }
</script>