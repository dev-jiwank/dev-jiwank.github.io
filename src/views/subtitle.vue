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
            <Circle  v-on:childEvent_button="circle_done"/>
            <div style="text-align:center;">
            {{ this.data["content"] }}

            <Space direction="vertical" type="flex">
                <div  v-show="!this.button_trigger">
                    <Button type="primary" loading  style="width:50%; margin-top: 50px;">Loading...</Button>
                </div>

                <transition name="move-down">
                    <div  v-show="this.button_trigger" class="transition-box">
                        <Button @click="updateParentValue" type="success"  style="width:50%; margin-top: 50px;">자세히 보기</Button>
                    </div>
                </transition>
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
                content: '뜨거운 열정과 혁신적인 창의성을 추구하는 느낌있는 개발자입니다.'
            },
            button_trigger:false
        }
    },
    methods: {
        updateParentValue() {
            this.$emit("childEvent");
        },
        circle_done() {
            this.button_trigger = true
        }
    }
}
</script>
<style>
    .demo-extra-img{
        margin-top: 0px;
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