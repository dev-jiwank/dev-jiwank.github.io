<template>
    <!-- <div style="text-align:center">
        <Typography v-if="true">
            <Title :level="2" class="title-left-padding">
                {{ title_pp }}
                <Icon type="ios-man"/>
            </Title>
        </Typography>
    </div> -->

<el-card class="box-card-pjc">
    <div style="margin-top:20px;">
        <el-row :gutter="12" class="responsive-row-pjc">
            <el-col :span="12"  @click="router_go_to_name('fear-and-greed')">
                <el-card :shadow="'hover'">
                    <template #header>
                        <div>
                            <span>{{ "Fear & Greed of Crypto" }}</span>
                        </div>
                    </template>
                    <div style="text-align:center;">
                        {{"IMAGE WILL BE HERE"}}
                    </div>
                </el-card>
            </el-col>
            <el-col :span="12" @click="router_go_to_name('soccer')"> 
                <el-card :shadow="'hover'">
                    <template #header>
                        <div>
                            <span>{{ "Premier League 1 (EPL) Overview" }}</span>
                        </div>
                    </template>
                    <div style="text-align:center;">
                        {{"IMAGE WILL BE HERE"}}
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
</el-card>

</template>
<script>
    export default {
        data () {
            return {
                title_pp : 'Solo Project',
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
</style>