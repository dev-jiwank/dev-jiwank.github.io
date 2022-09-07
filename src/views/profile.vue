<template>
<div style="text-align:center">
    <Typography>
        <Title :level="2" class="title-left-padding">
            {{ title_introduce }}
            <AvatarList :list="list" />
        </Title>
    </Typography>

    <List item-layout="vertical">
        <ListItem v-for="item in data" :key="item.title">
            <ListItemMeta :title="item.title" :description="item.description" />
            {{ item.content }}<br>
            {{ item.content_2}}
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
                    title: 'KIM JIWAN',
                    description: 'Hello. XXXXX XXXXX XXXXX.',
                    avatar: Profile,
                    content: 'This is the content, this is the content, this is the content, this is the content.',
                    content_2: 'This is the content, this is the content, this is the content, this is the content.'
                },
            ],
            list: [
                {
                    src: Profile,
                    tip: '안녕하세요 ! '
                }
            ],
            title_introduce : 'About Me',
        }
    }
}
</script>

<style>
    .title-left-padding{
        padding-left: 20px;
    }
</style>