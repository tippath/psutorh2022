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
        <v-container class = "pt-0 pb-0">
            <v-row>
                <v-col cols="12">
                    <div class="mt-8 text-purple text-title text-center">
                        Step 1 of 2
                    </div>
                </v-col>
                <v-col cols="12" class="text-center pb-0">
                    <div class="mt-0 text-center">
                        <img v-if="getLine.pictureUrl == ''" src="https://media.discordapp.net/attachments/941495794211631124/1021642588396191804/Untitled_1.png" alt="" width="240">
                        <img v-else :src="getLine.pictureUrl" alt="" width="240">
           
                    </div>
                </v-col>
                <v-col cols="12" class="text-center pt-2 pb-0 ">
                    {{ getLine.displayName }}
                </v-col>
                <v-col cols="12">
                    <v-form>
                        <v-text-field
                            v-model="form.Firstname"
                            dense
                            label="First name"
                            >
                        </v-text-field>
                        <v-text-field
                            v-model="form.Lastname"
                            dense
                            label="Last name"
                            >
                        </v-text-field>
                        <div class="gender-group d-flex mt-3">
                            <p>Gender</p>
                            <div class="circle" :class="form.gender == 1 ? 'active' : ''" @click="chooseGender(1)">
                                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="40px" viewBox="0 -2 24 30" width="55px" fill="#FFFFFF"><rect fill="none" height="24" width="24"/><path d="M17.5,9.5C17.5,6.46,15.04,4,12,4S6.5,6.46,6.5,9.5c0,2.7,1.94,4.93,4.5,5.4V17H9v2h2v2h2v-2h2v-2h-2v-2.1 C15.56,14.43,17.5,12.2,17.5,9.5z M8.5,9.5C8.5,7.57,10.07,6,12,6s3.5,1.57,3.5,3.5S13.93,13,12,13S8.5,11.43,8.5,9.5z"/></svg>
                            </div>
                            <p>Female</p>
                            <div class="circle" :class="form.gender == 2 ? 'active' : ''" @click="chooseGender(2)">
                                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="40px" viewBox="0 -2 24 30" width="55px" fill="#FFFFFF"><rect fill="none" height="24" width="24"/><path d="M9.5,11c1.93,0,3.5,1.57,3.5,3.5S11.43,18,9.5,18S6,16.43,6,14.5S7.57,11,9.5,11z M9.5,9C6.46,9,4,11.46,4,14.5 S6.46,20,9.5,20s5.5-2.46,5.5-5.5c0-1.16-0.36-2.23-0.97-3.12L18,7.42V10h2V4h-6v2h2.58l-3.97,3.97C11.73,9.36,10.66,9,9.5,9z"/></svg>
                            </div>
                            <p>Male</p>
                        </div>
                        <v-btn rounded color="purple lighten-1" dark class="w-100 mt-5" @click="next">Next</v-btn>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
        
    </div>
</template>
<script>
import axios from 'axios'
export default{
    mounted(){
        liff.init({
            liffId: '1657494426-XVqArQQk'
        }).then(() => {
            if(liff.isLoggedIn()){
                liff.getProfile().then(profile => {                    
                    this.$store.dispatch('setLine',profile);
                    this.isDone();
                })
            }else{
                liff.login();
            }
        })
    },  
    computed: {
        getLine(){
            return this.$store.getters.getLine;      
        }
    },
    data(){
        return {
            form: {
                Firstname: this.$store.getters.getRegister.Firstname,
                Lastname: this.$store.getters.getRegister.Lastname,
                gender: this.$store.getters.getRegister.gender
            }
        }
    },
    methods: {
        isDone(){
            axios.get('https://sutorh-2022-default-rtdb.asia-southeast1.firebasedatabase.app/members/${this.$store.gettersgetLine.userId}/profile.json').then((res) => {
                if(res.data != null){
                    this.$router.push('register/done')
                }
            });
        },
        chooseGender(gender){
            this.form.gender = gender
        },
        validate(){
            let validated = true
            const errors = []
            let errorMsg = ''
            const validatorField = [
                'Firstname',
                'Lastname'
            ]
            validatorField.forEach((field) => {
                if(this.form[field] == ''){
                    validated = false
                    errors.push(`${field} can not be null.`)
                }
            })
            if(!validated){
                this.errorMsg = errors.map((error) => error+'<br/>').join('')
                this.dialog = true
                this.$store.dispatch('setDialog', {
                    isShow: true,
                    title: 'Form is error.',
                    message: errors.map((error) => error+'<br/>').join('')
                })
            }
            console.log(errorMsg)
            return validated
        },
        next(){
            if(this.validate()){
                this.$store.dispatch('setRegister', this.form)
                this.$router.push('/register/step2')
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .v-form{
        padding: 0 10px;
    }
    .gender-group{
        p{
            margin-bottom: 0;
            align-self: center;
            margin-right: 20px;
        }
        .circle{
            width: 45px;
            height: 45px;
            color: #FFF;
            border-radius: 50%;
            position: relative;
            background: rgba($color: #000000, $alpha: 0.3);
            margin-right: 7px;
            &.active{
                background: #ab47bc;
            }
            svg{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
</style>