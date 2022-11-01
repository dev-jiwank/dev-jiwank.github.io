<template>
<div style="text-align:center;">
    <Typography>
        <Title :level="2" class="title-left-padding">
            {{ title_introduce }}
            <AvatarList :list="list" />
        </Title>
    </Typography>

    <Rate disabled allow-half v-model="valueHalf" />

    <List item-layout="vertical">
        <ListItem v-for="item in data" :key="item.title">
            <ListItemMeta :title="item.title" :description="item.description" />
            {{ item.content }}<br>
            {{ item.content_0 }}<br>
            {{ item.content_1 }}<br>
            {{ item.content_2}}<br>
            <!-- <template #action>
                <li>
                    <Icon type="ios-star-outline" /> 123
                </li>
                <li>
                    <Icon type="ios-thumbs-up-outline" /> 234
                </li>
                <li>
                    <Icon type="ios-chatbubbles-outline" /> 345
                </li>
            </template> -->
            <!-- <template #extra>
                <img src="https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large" style="width: 280px">
            </template> -->
        </ListItem>
    </List>
</div>
</template>
<script>
import Profile from '@/assets/Profile.png'

export default {
components: {
},
    data() {
        return {
            data: [
                {
                    title: '김지완 (KIM JIWAN)',
                    description: '무지를 아는 것이 곧 앎의 시작이다. - 소크라테스',
                    avatar: Profile,
                    content: '생년월일 : 1996년 10월 4일 (만 26세)',
                    content_0: '성별 : 남자 (군필)',
                    content_1: '거주지 : 경기도 성남시',
                    content_2: '취미 : 낚시'
                },
            ],
            list: [
                {
                    src: Profile,
                    tip: '안녕하세요 ! '
                }
            ],
            title_introduce : 'About Me',
            valueHalf: 0
        }
    },
    mounted() {
        this.fetchData()
    },
	beforeDestroy () {
		if (this.interval) {
			clearInterval(this.interval)
		}
	},
    methods: {
        fetchData() {
			this.interval = setInterval(() => {
				this.valueHalf++
				if (this.valueHalf === 5) {
                    setTimeout(() => this.valueHalf = 0, 5000)
				}
			}, 500)
        }
    }
}
</script>

<style>
    .title-left-padding{
        padding-left: 20px;
    }
</style>