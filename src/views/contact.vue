<template>
<div style="text-align:center;">
    <Typography>
        <Title :level="1" class="title-left-padding">
            {{ title_introduce }}
            <Icon type="md-swap" />
        </Title>
    </Typography>

    <el-row :gutter="20">
        <el-col :span="24" :sm="8">
        <div>
            <el-statistic value="010-7754-8578" title="Phone">
            <template slot="suffix">
                <span>
                <Icon type="md-swap" />
                </span>
            </template>
            </el-statistic>
        </div>
        </el-col>
        <el-col :span="24" :sm="8">
        <div>
            <el-statistic value="wldhks1004@naver.com" title="E-Mail">
            <template slot="suffix">
                <span>
                <Icon type="md-swap" />
                </span>
            </template>
            </el-statistic>
        </div>
        </el-col>
        <el-col :span="24" :sm="8">
        <div>
            <el-statistic value="payphone22" title="Kakao Talk">
            <template slot="suffix">
                <span>
                <Icon type="md-swap" />
                </span>
            </template>
            </el-statistic>
        </div>
        </el-col>
    </el-row>
</div>
</template>
<script>
import Profile from '@/assets/Profile.png'

export default {
components: {
},
    data() {
        return {
            title_introduce : 'Contact',
        }
    },
    mounted() {

    },
	beforeDestroy () {

	},
    methods: {

    }
}
</script>

<style scoped>
    @media screen and (max-width: 600px) {
        .el-col {
            width: 100%;
        }
    }
</style>