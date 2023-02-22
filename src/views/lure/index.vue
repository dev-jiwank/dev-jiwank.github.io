<template>
    <div style="text-align:center">
        <Typography v-if="true">
            <Title :level="3" class="title-left-padding">
                {{ title_current }}
                <Icon type="ios-megaphone"/>
            </Title>
            <Title :level="5">-{{ current_time+" 기준"}}-</Title>
        </Typography>
    </div>

    <Table border :columns="columns" :data="fish_table"></Table>
</template>
<script>
    export default {
        data () {
            return {
                title_current: 'XX XX XXXX',
                current_time: '',
                suggest_fish: [],
                day:['(일)','(월)','(화)','(수)','(목)','(금)','(토)'],
                columns: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'suggest'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data: [
                    {
                        name: 'John Brown',
                        suggest: 18,
                        address: 'New York No. 1 Lake Park',
                    },
                    {
                        name: 'Jim Green',
                        suggest: 24,
                        address: 'London No. 1 Lake Park',
                    },
                    {
                        name: 'Joe Black',
                        suggest: 30,
                        address: 'Sydney No. 1 Lake Park',
                    },
                    {
                        name: 'Jon Snow',
                        suggest: 26,
                        address: 'Ottawa No. 2 Lake Park',
                    }
                ],
                fish_table: [],
                fish_data: [
                    {
                        name: 'ulcuk',
                        time_west_nt: ['1','2','3'],
                        time_west_st: ['1','2','3'],
                        time_east: ['4','5','6'],
                        time_south: ['7','8','9']
                    },
                    {
                        name: 'nong a',
                        time_west_nt: ['1','2','3'],
                        time_west_st: ['1','2','3'],
                        time_east: ['4','5','6'],
                        time_south: ['7','8','9']
                    },
                    {
                        name: 'go dung',
                        time_west_nt: ['1','2','3'],
                        time_west_st: ['1','2','3'],
                        time_east: ['4','5','6'],
                        time_south: ['7','8','9']
                    },
                    {
                        name: 'pul chi',
                        time_west_nt: ['1','2','3'],
                        time_west_st: ['1','2','3'],
                        time_east: ['4','5','6'],
                        time_south: ['7','8','9']
                    },
                    {
                        name: 'guang a',
                        time_west_nt: ['1','2','3'],
                        time_west_st: ['1','2','3'],
                        time_east: ['4','5','6'],
                        time_south: ['7','8','9']
                    },
                    {
                        name: 'cham dom',
                        time_west_nt: ['1','2','3'],
                        time_west_st: ['1','2','3'],
                        time_east: ['4','5','6'],
                        time_south: ['7','8','9']
                    },
                    {
                        name: 'jun gang e',
                        time_west_nt: ['1','2','3'],
                        time_west_st: ['1','2','3'],
                        time_east: ['4','5','6'],
                        time_south: ['7','8','9']
                    },
                    {
                        name: 'boll rack',
                        time_west_nt: ['1','2','3'],
                        time_west_st: ['1','2','3'],
                        time_east: ['4','5','6'],
                        time_south: ['7','8','9']
                    },
                    {
                        name: 'sam chi',
                        time_west_nt: ['1','2','3'],
                        time_west_st: ['1','2','3'],
                        time_east: ['4','5','6'],
                        time_south: ['7','8','9']
                    },
                    {
                        name: 'ozing a',
                        time_west_nt: ['1','2','3'],
                        time_west_st: ['1','2','3'],
                        time_east: ['4','5','6'],
                        time_south: ['7','8','9']
                    },
                    {
                        name: 'jang dea',
                        time_west_nt: ['1','2','3'],
                        time_west_st: ['1','2','3'],
                        time_east: ['4','5','6'],
                        time_south: ['7','8','9']
                    },
                ]
            }
        },
        mounted() {
            this.fetchData()
        },
        methods: {
            fetchData(){
                this.getTime()
                this.getSuggest()

                // console.log(this.fish_table)
                // // console.log( this.fish_data.filter(item => item.time_west) )
                // console.log('------------------------------------');
            },
            getTime(){
                let today = new Date()

                let year = today.getFullYear()
                let month = today.getMonth() + 1
                let date = today.getDate()
                let day = this.day[today.getDay()]

                this.current_time = year+'년 '+month+'월 '+date+'일'+day
            },
            getSuggest() {
                for(const key in Object.keys(this.fish_data)){
                    let request = {name:'', suggest: '', address: ''}

                    request.name = this.fish_data[key].name
                    request.suggest = '하'
                    request.address = 'north'

                    this.fish_table.push(request)
                }
            }
        } 
    }
</script>
