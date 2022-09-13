<template>
    <PageHeader>
        <template #title>
            <div class="demo-title">
                <Title :level="1">
                    XXX XXXXX
                </Title>
            </div>
        </template>

        <template #extra>
            <div class="demo-extra-img">
                <Image :src="this.Imagelist[0]"/>
            </div>
        </template>

        <template #content >
            <Circle/>
            <div style="text-align:center;">
            {{ this.data["content"] }}<br>
            {{ this.data["content_2"]}}

            <a href="#section-1">
                <Space direction="vertical" type="flex">
                    <Button @click="updateParentValue" type="success"  style="width:50%; margin-top: 50px;">View Detail</Button>
                </Space>
            </a>

            </div>
        </template>
    </PageHeader>

</template>
<script>
import Banner from '@/assets/Banner.png'
import Circle from '@/views/circle.vue'

export default {
    components: {
        Banner,
        Circle
    },
    data () {
        return {
            Imagelist: [
                Banner
            ],
            data: 
            {
                content: 'This is the content, this is the content, this is the content, this is the content.',
                content_2: 'This is the content, this is the content, this is the content, this is the content.'
            },
        }
    },
    methods: {
        updateParentValue() {
            this.$emit("childEvent");
        },
    }
}
</script>
<style>
    .demo-extra-img{
        margin-top: -100px;
        text-align: center;
        width: 500px;
    }
    .demo-extra-img img{
        width: 100%;
        border-radius: 6px;
    }
    @media screen and (max-width: 768px) {
        .demo-extra-img{
            margin-top: 0;
            width: 100%;
        }
        .demo-extra-img img{
            width: 100%;
        }
    }
</style>