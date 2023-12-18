<template>

<el-card class="box-card-pjc">
    <div style="text-align:center">
        <Typography v-if="true">
            <Title :level="3" class="title-left-padding">
                {{ "Project List" }}
                <Icon type="ios-man"/>
            </Title>
        </Typography>
    </div>
    <div>
        <el-row class="responsive-row-pjc">
            <el-col :span="24"  @click="router_go_to_name('fear-and-greed')">
                <el-card :shadow="'hover'" style="margin:20px">
                    <template #header>
                        <div>
                            <span>{{ "* 암호화폐 투심 지수" }}</span>
                        </div>
                    </template>
                    <div class="img-height-pjc">
                        <Image :src="this.imgList[0]"/>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="24" @click="router_go_to_name('soccer')"> 
                <el-card :shadow="'hover'" style="margin:20px">
                    <template #header>
                        <div>
                            <span>{{ "* 프리미어리그 순위/정보/일정" }}</span>
                        </div>
                    </template>
                    <div class="img-height-pjc">
                        <Image :src="this.imgList[1]"/>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="24" @click="router_go_to_name('pok')"> 
                <el-card :shadow="'hover'" style="margin:20px">
                    <template #header>
                        <div>
                            <span>{{ "Pokemon (NOW IN PROGRESS)" }}</span>
                        </div>
                    </template>
                    <div style="text-align:center;">
                        {{"IMAGE WILL BE HERE"}}<br>
                        {{"NOW PROJECT IS IN PROGRESS"}}
                    </div>
                    <!-- <img
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="image"
                    /> -->
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
</el-card>

</template>
<script>
import fgimg from '@/assets/feargreedimg.png'
import fbimg from '@/assets/football.png'
    export default {
        components: {
            fgimg,
            fbimg
        },
        data () {
            return {
                title_pp : 'Solo Project',
                imgList : [
                    fgimg,
                    fbimg
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
    .box-card-pjc {
        margin: 50px;
        width: auto;
    }
    @media screen and (max-width: 600px) {
        .box-card-pjc {
            margin: 10px;
            width: auto;
        }
        .el-row .el-col {
            margin-bottom: 10px;
        }
        .responsive-row-pjc {
        flex-direction: column;
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