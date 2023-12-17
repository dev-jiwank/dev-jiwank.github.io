<template>
    <div>
        <el-card class="box-card-pokinit">
            <template #header>
            <div class="card-header-pokinit">
                <span>{{ '능력치 설정' }}</span>
                <el-button class="button-pokinit" text>{{ "초기화" }}</el-button>
            </div>
            </template>

            <div>
                {{"공격력"}} <el-button size="small" circle><el-icon><Plus /></el-icon></el-button><el-progress :percentage="percentage*10">{{ 5 }}</el-progress>
                <hr>
                {{"방어력"}} <el-button size="small" circle><el-icon><Plus /></el-icon></el-button><el-progress :percentage="percentage*10"/>
                <hr>
                {{"스테미나"}} <el-button size="small" circle><el-icon><Plus /></el-icon></el-button><el-progress :percentage="percentage*10"/>
                <hr>
                <!-- <div>
                <el-button-group>
                    <el-button :icon="Minus" @click="decrease" />
                    <el-button :icon="Plus" @click="increase" />
                </el-button-group>
                </div> -->
            </div>

            <template #footer>
                <div style="text-align: center; margin-top: 0px;">
                    <el-button style="width: 30%;" type="primary" round>{{ "설정" }}</el-button>
                </div>
            </template>
        </el-card>
    </div>
</template>

<script>
import axios from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus'
import { Minus, Plus } from '@element-plus/icons-vue'

const customColors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]

export default {
    components :{
        Minus,
        Plus
    },
    data() {
        return{
            percentage : 5
        }
        
    },
    mounted(){

    },
    methods : {
        customColorMethod() {
            if (percentage < 30) {
                return '#909399'
            }
            if (percentage < 70) {
                return '#e6a23c'
            }
            return '#67c23a'
            // }
            // const increase = () => {
            // percentage.value += 10
            // if (percentage.value > 100) {
            //     percentage.value = 100
            // }
            // }
            // const decrease = () => {
            // percentage.value -= 10
            //     if (percentage.value < 0) {
            //         percentage.value = 0
            //     }
            // }
        }
    }
}
</script>

<style>
.card-header-pokinit {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text-pokinit {
  font-size: 14px;
}

.item-pokinit {
  margin-bottom: 18px;
}

.box-card-pokinit {
  width: auto
}
</style>