<template>
    <PageHeader>
        <!-- <template #title>
            <div class="demo-title" >
                <Title :level="1" >
                    XXX XXXXX
                </Title>
            </div>
        </template> -->

        <template #extra>
            <div class="demo-extra-img">
                <Image :src="this.Imagelist[0]"/>
            </div>
        </template>

        <template #content >
            <Title :level="1" style="text-align:center;">
                DEV. JiwanK
            </Title>
            <Circle/>
            <div style="text-align:center;">
            {{ this.data["content"] }}

            <Space direction="vertical" type="flex">
                <Button @click="updateParentValue" type="success"  style="width:50%; margin-top: 50px;">자세히 보기</Button>
            </Space>

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
                content: '뜨거운 열정과 혁신적인 창의성을 추구하는 개념있는 개발자입니다.'
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