<template>
    <div>
        <v-app-bar
            color = "purple lighten-1"
            dense
            flat
            dark
        >
            <v-toolbar-title>Register Booking</v-toolbar-title>
        </v-app-bar>
        <v-container class ="pt-0 pb-8">
            <v-row>
                <v-col cols="12">
                     
                    <div class ="mt-5 text-purple text-title text-center" id="p1">
                        Please select the card.
                    </div>                
                </v-col>
                <v-col cols="12">

                    <!-- Card 1 -->
                    <v-card
                        class="mx-auto"
                        :class="this.selectedBook == 1 ? 'active': ''"
                        max-width="400"
                    >
                        <v-img
                        class="white--text align-end"
                        height="200px"
                        src="https://img.freepik.com/free-photo/appealing-young-woman-sparkle-sunglasses-looking-distance-portrait-glamorous-european-model-with-short-haircut-smiling_197531-20541.jpg?w=900&t=st=1663805625~exp=1663806225~hmac=643089289e336e11f06cd48946c9a2bde7f09b31e900a38435220e962fb5c63a"
                        >
                        <div class="more-detail" @click="moreDetail">More Detail</div>
                        </v-img>

                        <div class="card-content">
                            <div>
                                <v-card-text class="text--primary">
                                <h1>Genaral</h1>
                                </v-card-text>
                                <v-card-subtitle class="pb-4">Book the queue for genaral people. </v-card-subtitle>
                            </div>
                            <v-btn class="circle" @click="chooseBook(1)">
                                <v-icon>check</v-icon>
                            </v-btn>
                        </div>
                    </v-card>

                    <!-- Card 2 -->
                    <v-card class="mx-auto" :class="this.selectedBook == 2 ? 'active': ''" max-width="400">
                        <v-img
                        class="white--text align-end"
                        height="200px"
                        src="https://img.freepik.com/free-photo/curly-girl-eyeglasses-holds-notebooks-purple-wall_197531-23785.jpg?w=996&t=st=1663805555~exp=1663806155~hmac=73e585fb083ce06ebdba70e468f29d395c3b0be756853df0b63f9f123f356839"
                        >
                        <div class="more-detail" @click="moreDetail">More Detail</div>
                        </v-img>

                        <div class="card-content">
                            <div>
                                <v-card-text class="text--primary">
                                <h1>Student</h1>
                                </v-card-text>
                                <v-card-subtitle class="pb-4">Book the queue for SUT's students. </v-card-subtitle>
                            </div>
                            <v-btn class="circle" @click="chooseBook(2)">
                                <v-icon>check</v-icon>
                            </v-btn>
                        </div>
                    </v-card>

                    <!-- Card 3 -->
                    <v-card class="mx-auto" :class="this.selectedBook ==  3 ? 'active': ''" max-width="400">
                        <v-img
                        class="white--text align-end"
                        height="200px"
                        src="https://img.freepik.com/free-photo/busy-young-gentleman-with-brunette-hair-white-shirt-black-striped-suit-talking-phone-looking-watch-smiling-against-violet-background-business-concept_197531-29718.jpg?t=st=1663805447~exp=1663806047~hmac=a4160bd6270610387cccf2c835a666161fe2ab3891c7c55233a81175aa9c1ca7"
                        >
                        <div class="more-detail" @click="moreDetail">More Detail</div>
                        </v-img>

                        <div class="card-content">
                            <div>
                                <v-card-text class="text--primary">
                                <h1>Personnel</h1>
                                </v-card-text>
                                <v-card-subtitle class="pb-4">Book the queue for SUT's personnels/staffs. </v-card-subtitle>
                            </div>
                            <v-btn class="circle" @click="chooseBook(3)">
                                <v-icon>check</v-icon>
                            </v-btn>
                        </div>
                    </v-card>
                </v-col>
                <v-col>
                    <div class="set-padding">
                    <v-btn rounded color="purple lighten-1" dark class="w-100 mt-3" @click="next">Next</v-btn>
                    </div>
                </v-col>
                </v-row>
                <v-dialog v-model="dialog" max-width="290">
                <v-card class="dialog-card">
                    <v-img
                        class="white--text align-end"
                        height="200px"
                        src="https://media.discordapp.net/attachments/941495794211631124/1022314635065561189/unknown.png"
                        >
                        </v-img>
                    <v-card-title class="headline">การให้บริการของศูนย์สุขภาพช่องปาก (SUT)</v-card-title>
                    <v-card-text>
                        <p><b>วันจันทร์-พฤหัสบดี : 08:30 - 16:30</br>วันศุกร์ : 08:30 - 12:00</b></p>
                        <p class = "detail">
                            <b>งานทางทันตกรรมทั่วไป</b></br>
                            <ul>
                                <li>ขูดหินน้ำลาย อุดฟัน ถอนฟัน</li>
                            </ul>
                            <b>งานทางทันตกรรมเฉพาะทาง</b></br>
                            <ul>
                                <li>รักษาโรคปริทันต์</li>
                                <li>ทันตกรรมบุรณะ</li>
                                <li>ผ่าฟันคุด</li>
                                <li>ศัลยกรรมในช่องปาก ใบหน้า เเละกระดูกขากรรไกร</li>
                                <li>รักษาคลองรากฟัน</li>
                                <li>ทันตกรรมประดิษฐ์</li>
                                <li>ทันตกรรมรากเทียม</li>
                                <li>ทันตกรรมจัดฟัน</li>
                                <li>ทันตกรรมสำหรับเด็ก</li>
                            </ul>
                        </p>
                    </v-card-text>

                    <v-card-actions>
                    <v-spacer></v-spacer>

            <v-btn color="text-purple" text @click="dialog = false">OK</v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
        </v-container>
    </div>
</template>


<script>
export default{
    data(){
        return{
            dialog: true,
            selectedBook: 0
        }
    },
    methods: {
        next(){

        },
        moreDetail(){
            this.dialog = true
        },
        chooseBook(id){
            this.selectedBook = id
        }
    }
}
</script>

<style lang="scss" scoped>
    .circle{
        height:32px !important;
        width: 32px !important;
        min-width: auto !important;
        border-radius: 50px;
        color:#FFF;
        background: rgba($color: #6a1b9a, $alpha: 0.3) !important;
        align-self: center;
    }
    .card-content{
        display: flex;
        justify-content: space-between;
        padding: 15px;
    }
    .more-detail{
        font-size: 12px;
        color:#6a1b9a;
        border-radius:25px;
        padding:10px 20px;
        background: #FFF;
        font-weight: bold;
        display: inline;
        position: absolute;
        bottom: 11px;
        right: 11px;
    }
    .v-card__subtitle{
        padding:0;
    }
    .v-card__text{
        padding:0;
        padding-bottom: 5px;
        h1{
            font-size:20px;
        }
    }
    .v-card+.v-card{
        margin-top: 30px;
    }
    .v-card.active{
        .circle{
            background: rgba($color: #6a1b9a, $alpha: 1) !important;
        }
        .v-image{
            &::before{
                content: 'Selected';
                font-weight: bold;
                font-size: 24px;
                height: 100%;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background:rgba($color: #000000, $alpha: 0.5) !important;
            }
        }
    }
    .dialog-card{
        p{
            margin-bottom: 0;
        }
        .v-card__title.headline{
            font-size: 20px !important;
        }
        .v-card__text{
            padding-bottom: 0;
        }
        .detail{
            margin: 10px 0;
        }
    }
</style>