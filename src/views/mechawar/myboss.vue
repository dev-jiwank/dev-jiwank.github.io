<template>
    <div>
        <Card>
            <template #title> List</template>
            <p>Content of card</p>
            <p>Content of card</p>
            <p>Content of card</p>


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
            <!-- <template #extra>
                <img src="https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large" style="width: 280px">
            </template> -->
        </ListItem>
    </List>

        </Card>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                data_0: [
                    {
                        title: 'ASDF.',
                        description: 'ASDF',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar'
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