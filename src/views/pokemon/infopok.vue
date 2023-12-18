<template>
    <div>
        <el-card>
            <div style="text-align:center">
                <Typography>
                    <Title :level="4">
                        {{ "[ 포켓몬 도감 ]" }}
                    </Title>
                </Typography>

                <!-- <Button type="primary" @click="modal = true">Display dialog box</Button> -->
                <Modal
                    v-model="modal"
                    footer-hide>
                    <template #header>
                        <p>
                            <span> {{ "No. "+this.modal_data.id+" / "+this.modal_data.name }} </span>
                        </p>
                    </template>
                    <p style="margin-bottom:10px;">
                        <Tag size="large" v-for="(value, key) in modal_data.type" :key="key">
                            {{ value }}
                        </Tag>
                    </p>
                    <p>{{ this.modal_data.desc }}</p>
                    <!-- <hr>
                    <p>{{ this.modal_data.type }}</p>
                    <hr>
                    <p>{{ this.modal_data.stat }}</p> -->
                </Modal>

                    <!-- <Select placeholder="find">
                        <Option v-for="(option, index) in options1" :value="option.value" :key="index">{{option.label}}</Option>
                    </Select> -->
            </div>
            <el-row v-loading="loading" v-if="isMobile==true">
                    <el-col :span="8" v-for="(data, index) in pkm" :key="index">
                        <el-card  shadow="hover" style="margin:1px;" @click="open_modal(data)">
                            <img :src="data.img" style="width: 100%; height: 100%;" />
                                <div style="text-align: center; white-space: nowrap; overflow: hidden; text-overflow: clip;">
                                    <span style="font-size: 9px;">{{ data.name }}</span>
                                </div>
                            <div style="text-align: center;" class="pok-info">
                                <div>{{ "No."+data.id }}</div>
                                <!-- <span v-for="(value, key) in data.type" :key="key">{{ value+" "}}</span> -->
                            </div>
                        </el-card>
                    </el-col>
            </el-row>

            <el-row v-loading="loading" v-else-if="isMobile==false">
                    <el-col :span="4" v-for="(data, index) in pkm" :key="index">
                        <el-card  shadow="hover" style="margin:1px;" @click="open_modal(pkm)">
                            <img :src="data.img" style="width: 100%; height: 100%;" />
                                <div style="text-align: center; white-space: nowrap; overflow: hidden; text-overflow: clip;">
                                    <span style="font-size: 14px;">{{ data.name }}</span>
                                </div>
                            <div style="text-align: center;" class="pok-info">
                                <div>{{ "No."+data.id }}</div>
                                <!-- <span v-for="(value, key) in data.type" :key="key">{{ value+" "}}</span> -->
                            </div>
                        </el-card>
                    </el-col>
            </el-row>

            <div class="pagination-container-info">
                <el-pagination
                layout="prev, pager, next"
                :total="170"
                @current-change="pageMove"
                />
            </div>
        <!-- <div style="text-align: center; margin-top: 30px;">
                <Button type="primary">Primary</Button>
            </div>     -->
        </el-card>
    </div>
</template>

<script>
import axios from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus'
import mobileCheck from "../../shared/mobilecheck.js";

export default {
    components : {
        ElMessageBox
    },
    mixins: [mobileCheck],
    data() {
        return{
            pkm : [],
            pokemon : {
                name : '',
                img : '',
                id : '',
                type : []
            },
            typedata :[
                {name:'독',value:"poison"},
                {name:'물',value:"water"},
                {name:'일반',value:"normal"},
                {name:'전기',value:"electric"},
                {name:'불',value:"fire"},
                {name:'비행',value:"flying"},
                {name:'전투',value:"fighting"},
                {name:'용',value:"dragon"},
                {name:'곤충',value:"bug"},
                {name:'풀',value:"grass"},
                {name:'에스퍼',value:"psychic"},
                {name:'얼음',value:"ice"},
                {name:'돌',value:"rock"},
                {name:'페어리',value:"fairy"},
                {name:'땅',value:"ground"},
                {name:'고스트',value:"ghost"},
            ],
            once_trigger : true,
            loading : false,
            modal: false,
            modal_data : {
                name : '',
                desc : '',
                stat : '',
                type : '',
                id : ''
            }
        }
        
    },
    watch: {
        isMobile(a, b) {
            this.fetchData()
        },
    },
    mounted(){
        this.loading = true

        if(!this.isMobile&&once_trigger){
            this.once_trigger = false
            this.fetchData()
        }
    },
    methods : {
        open_modal(data) {
            this.modal = true

            this.modal_data.id = data.id
            this.modal_data.name = data.name
            this.modal_data.desc = data.desc
            this.modal_data.stat = data.stat
            this.modal_data.type = data.type
        },

        async fetchData() {
            this.pkm = []

            this.generateArrayByValue('1').then((select_array_3) => {
                this.get_api_pokemon(select_array_3)
            })
        },
        async pageMove(pageNum){
            this.pkm = []

            this.generateArrayByValue(pageNum).then((select_array_3) => {
                this.get_api_pokemon(select_array_3)
            })
        },

        async generateArrayByValue(value) {
            let numofpage =  this.isMobile ? 9 : 12

            const maxNumber = 151;
            const startNumber = (value - 1) * numofpage + 1;

            if (startNumber > maxNumber) {
                return [];
            }

            const resultArray = [];
            for (let i = 0; i < numofpage; i++) {
                const currentNumber = startNumber + i;
                if (currentNumber <= maxNumber) {
                    resultArray.push(currentNumber);
                }
            }

            return resultArray;
        },

        async get_api_pokemon(rannum) {
            //hthttps://pokeapi.co/api/v2/pokemon?limit=151"
            rannum.forEach(num => {
                const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${num}`
                const urlPokemonSpec = `https://pokeapi.co/api/v2/pokemon-species/${num}`
                const urlPokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png`
                
                Promise.all([
                axios.get(urlPokemon),
                axios.get(urlPokemonSpec)
                ]).then(([pData, pSpec]) => {
                    // console.log(pData.data, pSpec.data)
                    // console.log(pSpec.data.flavor_text_entries.find(item => item.language.name === "ko")?.flavor_text)

                    const typekornames = pData.data.types.map(item => {
                        const typeName = item.type.name;
                        const foundType = this.typedata.find(type => type.value === typeName);
                            return foundType ? foundType.name : typeName;
                    });

                    this.pkm.push({
                        name: pSpec.data.names.find(entry => entry.language.name === "ko")?.name,
                        img: urlPokemonImg,
                        type : typekornames,
                        id : pSpec.data.id,
                        stat : pData.data.stats,
                        desc : pSpec.data.flavor_text_entries.find(item => item.language.name === "ko")?.flavor_text
                    });

                }).finally(()=>{
                    this.loading = false
                })
            });
        },

        async find_pokemon(number) {
            const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${number}`
            const urlPokemonSpec = `https://pokeapi.co/api/v2/pokemon-species/${number}`
            const urlPokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`
            
            Promise.all([
                axios.get(urlPokemon),
                axios.get(urlPokemonSpec)
            ]).then(([pData, pSpec]) => {
                this.pokemon.name = pSpec.data.names.find(entry => entry.language.name === "ko")?.name
                this.pokemon.img = urlPokemonImg
            })
        },
    }
}
</script>


<style>
    .box-card-info {
        margin: 100px;
    }
    .pok-info {
        font-size: 12px;
        color: #999;
    }
    .pagination-container-info {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
