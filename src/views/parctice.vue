<template>
    <!-- <Row>
        <Col span="12">
            <PageHeader title="PageHeader"></PageHeader>
        </Col>
        <Col span="12">
            <Image :src="this.Imagelist[0]"/>
        </Col>
    </Row> -->

    <PageHeader>
        <template #title>
            <div class="demo-title">
                <Title :level="1">
                    JIWAN
                </Title>
            </div>
        </template>

        <template #extra>
            <div class="demo-extra-img">
                <Image :src="this.Imagelist[0]"/>
            </div>
        </template>

        <template #content>
            {{ this.data["content"] }}<br>
            {{ this.data["content_2"]}}
            <Space direction="vertical" type="flex">
                <Button type="success" long>SUBMIT</Button>
                <Button type="error" long>DELETE</Button>
            </Space>
        </template>
    </PageHeader>

</template>
<script>
import Banner from '@/assets/Banner.png'

export default {
components: {
    Banner
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
    }
}
</script>
<style>
    .demo-extra-img{
        margin-top: -100px;
        text-align: center;
        max-width: 500vw;
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
