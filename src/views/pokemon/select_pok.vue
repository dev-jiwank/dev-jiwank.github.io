<template>
    <div>
        <el-card>
            <div style="text-align:center">
                <Typography>
                    <Title :level="1">
                        {{ "[ 포켓몬 선택 ]" }}
                    </Title>
                </Typography>
            </div>
            <el-row :gutter="20" v-loading="loading">
                    <el-col :span="8" v-for="(data, index) in pkm" :key="index">
                        <el-card  shadow="hover" @click="select_own_pok(data.name)">
                            <img :src="data.img" style="width: 100%; height: 100%;" />
                            <div style="text-align: center;">
                                <span>{{ data.name }}</span>
                            </div>
                            <div style="text-align: center;" class="pok-desc">
                                <div>{{ "[속성]" }}</div>
                                <span v-for="(value, key) in data.type" :key="key">{{ value+" "}}</span>
                            </div>
                        </el-card>
                    </el-col>
            </el-row>

            <div style="text-align: center; margin-top: 30px;" @click="renew()">
                <el-button style="width: 30%;" type="primary" round>{{ "다시 뽑기" }}</el-button>
            </div>
        </el-card>
    </div>
</template>

<script>
import axios from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus'

export default {

    data() {
        return{
            pkm : [],
            pokemon : {
                name : '',
                img : '',
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
            loading : false
        }
        
    },
    mounted(){
        this.getRandomNumbers()
    },
    methods : {
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
                    if(pSpec.data.is_legendary||pSpec.data.is_mythical){
                        return this.getRandomNumbers(1, rannum)
                    }
                    else {
                        this.loading = false
                    }

                    const typekornames = pData.data.types.map(item => {
                        const typeName = item.type.name;
                        const foundType = this.typedata.find(type => type.value === typeName);
                            return foundType ? foundType.name : typeName;
                    });

                    this.pkm.push({
                        name: pSpec.data.names.find(entry => entry.language.name === "ko")?.name,
                        img: urlPokemonImg,
                        type : typekornames
                    });
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

        async select_own_pok(name){
            ElMessageBox.confirm(
                `${name} 를 선택하시겠습니까 ?`,
                {
                    confirmButtonText: '선택',
                    cancelButtonText: '취소',
                    center: true,
                }
            ).then(() => {
                this.$emit('selectedPokemon', name);
                this.$router.push({ name: 'pokinit' });
                // ElMessage({
                //     type: 'success',
                //     message: 'Delete completed',
                // })
            }).catch(() => {
                // ElMessage({
                //     type: 'info',
                //     message: 'Delete canceled',
                // })
            })
        },

        getRandomNumbers(num, exec_array_number) {
            this.loading = true

            const legendNum = num ? num : 3;
            const excludeNumbers = exec_array_number ? exec_array_number : [];

            // 1부터 151까지의 숫자 배열 생성
            const numbers = Array.from({ length: 151 }, (_, i) => i + 1);

            // 제외할 숫자들을 배열에서 제거
            excludeNumbers.forEach(excludeNum => {
                const index = numbers.indexOf(excludeNum);
                if (index !== -1) {
                    numbers.splice(index, 1);
                }
            });

            // 랜덤 숫자 생성
            const randomNumbers = [];
            for (let j = 0; j < legendNum; j++) {
                const randomIndex = Math.floor(Math.random() * numbers.length);
                const selectedNumber = numbers.splice(randomIndex, 1)[0];
                randomNumbers.push(selectedNumber);
            }

            return this.get_api_pokemon(randomNumbers);
        },

        async renew(){
            this.pkm = []
            this.getRandomNumbers()
        }
    }
}
</script>


<style>
.box-card-pok {
  margin: 100px;
}
.pok-desc {
  font-size: 12px;
  color: #999;
}
</style>
