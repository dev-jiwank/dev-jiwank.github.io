<template>

<div>
    <div style="text-align:center">
        <Typography v-if="true">
            <Title :level="3" class="title-left-padding">
                {{ "Project List" }}
                <Icon type="ios-man"/>
            </Title>
        </Typography>
    </div>
    <div>
        <el-row class="img-container">
            <el-col :span="22"  @click="router_go_to_name('fear-and-greed')">
                <el-card :shadow="'hover'">
                    <template #header>
                        <div>
                            <span>{{ "* 암호화폐 투심 지수" }}</span>
                        </div>
                    </template>
                    <div class="img-container">
                        <img :src="this.imgList[0]" class="centered-images" />
                    </div>
                </el-card>
            </el-col>
            <el-col :span="22" @click="router_go_to_name('soccer')" style="margin:10px;">
                <el-card :shadow="'hover'">
                    <template #header>
                        <div>
                            <span>{{ "* 프리미어리그 순위/정보/일정" }}</span>
                        </div>
                    </template>
                    <div class="img-container">
                        <img :src="this.imgList[1]" class="centered-images" />
                    </div>
                </el-card>
            </el-col>
            <el-col :span="22" @click="router_go_to_name('growing')" style="margin:10px;">
                <el-card :shadow="'hover'">
                    <template #header>
                        <div>
                            <span>{{ "* 버섯커 키우기 사전예약 (Clone by joy-games)" }}</span>
                        </div>
                    </template>
                    <div class="img-container">
                        <img :src="this.imgList[2]" class="centered-images" />
                    </div>
                </el-card>
            </el-col>
            <el-col :span="22" @click="router_go_to_name('pok')" style="margin:10px;">
                <el-card :shadow="'hover'">
                    <template #header>
                        <div>
                            <span>{{ "* 포켓몬 도감 1세대" }}</span>
                        </div>
                    </template>
                    <div class="img-container">
                        <img :src="this.imgList[3]" class="centered-images" />
                    </div>
                    <!-- <img
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="image"
                    /> -->
                </el-card>
            </el-col>
            <el-col :span="22" @click="router_go_to_name('devicedashboard')" style="margin:10px;">
                <el-card :shadow="'hover'">
                    <template #header>
                        <div>
                            <span>{{ "* Device Dashboard" }}</span>
                        </div>
                    </template>
                    <div class="img-container">
                        {{"Currently in progress"}}
                    </div>
                </el-card>
            </el-col>
            <!-- <el-col :span="8">
                <el-card :shadow="'hover'">
                    <template #header>
                        <div>
                            <span>{{ "TODO ..." }}</span>
                        </div>
                    </template>
                    <div style="text-align:center;">
                        {{""}}
                    </div>
                </el-card>
            </el-col> -->
        </el-row>
    </div>
</div>
</template>
<script>
import fgimg from '@/assets/feargreedimg.png'
import fbimg from '@/assets/football.png'
import cljyimg from '@/assets/clonejoygame.png'
import pkming from '@/assets/pokemonlogo.png'

    export default {
        components: {
            fgimg,
            fbimg,
            cljyimg,
            pkming
        },
        data () {
            return {
                title_pp : 'Solo Project',
                imgList : [
                    fgimg,
                    fbimg,
                    cljyimg,
                    pkming
                ]
            }
        },
        methods : {
            router_go_to_name(name){
                this.$router.push({ name: name });
            }
        }
    }
</script>

<style scoped>
    .centered-images {
    max-width: 100%; 
    max-height: 100%;
    }

    .box-card-pjc {
        margin: 50px;
        width: auto;
    }
    .img-container {
        display: flex;
        justify-content: center;
        align-items: center;

    }
    .card-margin {
        margin: 10px;
    }
    @media screen and (max-width: 600px) {
        .box-card-pjc {
            margin: 0px;
            width: auto;
        }
        .el-row .el-col {
            margin-bottom: 10px;
        }
        .el-col-8 {
            max-width: none;
        }
        .el-col-12 {
            max-width: none;
        }
    }
    /* .image {
        width: 100%;
        display: block;
    } */
</style>