<template>
    <div style="text-align:center">
        <Typography v-if="true">
            <Title :level="2" class="title-left-padding">
                {{ title_pp }}
                <Icon type="ios-man"/>
            </Title>
        </Typography>
    </div>

    <List item-layout="vertical" :border='false' @click="click()">
        <ListItem v-for="item in data_0" :key="item.title">
            <ListItemMeta :avatar="item.avatar" :title="item.title" :description="item.description"/>
            {{ item.content }}<br>
            {{ item.content_0 }}<br>
            {{ item.content_1 }}<br>
            {{ item.content_2 }}
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
            <template #extra>
                <img src="https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large" style="width: 280px">
            </template>
        </ListItem>
    </List>
</template>
<script>
    export default {
        data () {
            return {
                title_pp : 'Solo Project',
                data_0: [
                    {
                        title: '개발 진행 중...',
                        description: '루어 낚시 관련하여 다양한 정보를 제공하는 다목적 사이트',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: '3면이 바다로 둘러싸인 대한민국에는 약 1000만명의 낚시인들이 있으며, 해마다 수십만명의 낚시인들이 꾸진히 증가하는 추세에 있습니다.',
                        content_0: '그러나 이들에게 누군가 정해준 정보를 제공하는 공간이 없습니다. 이러한 공간이 없다보니 많은 문제들을 네이버 카페 등 에서 해결합니다.',
                        content_1: '이는 원하는 정보를 알아내기 힘들며 많은 시간을 낭비시키게 되고 결국은 낚시 특성상 정해진 답을 얻기 어렵습니다.',
                        content_2: '이러한 문제를 해결하기 위한 목적으로 개발을 시작하게 되었습니다.'
                    }
                ]
            }
        },
        methods : {
            click() {
                window.open('lure')
            }
        }
    }
</script>