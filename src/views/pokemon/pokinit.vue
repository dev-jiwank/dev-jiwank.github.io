<template>
    <div>
        <el-card class="box-card-pokinit" v-loading="data_loading">
            <template #header>
                <div class="card-header-pokinit">
                    <span>{{ "ACCOUNT : "+this.$store.getters.getName}}</span>
                </div>
            </template>
            <div>
                <Button type="primary" @click="save()">Save</Button>
            </div>
            <template #footer>

            </template>
        </el-card>
    </div>
</template>

<script>
import axios from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus'

export default {
    components :{

    },
    data() {
        return{
            data_loading : false
        }  
    },

    mounted(){
        this.data_loading = true
        this.jiwan()
    },
    
    methods : {
        jiwan() {
            this.$store.dispatch('loadFromLocalStorage').finally(()=>{
                this.data_loading = false
                console.log(this.$store.getters.getName)
            })
        },
        save(){
            this.$store.dispatch('loadFromLocalStorage').finally(()=>{
                this.$store.dispatch('saveToFile');
            })
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

/* .text-pokinit {
  font-size: 14px;
}

.item-pokinit {
  margin-bottom: 18px;
} */

.box-card-pokinit {
  width: auto;
  margin: 10px;
}
</style>