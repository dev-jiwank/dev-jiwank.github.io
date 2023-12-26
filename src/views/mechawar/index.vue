<template>
    <!-- <Row>
        <Col span="11">
            <Card>
                <template #title>The standard card</template>
                <p>Content of card</p>
                <p>Content of card</p>
                <p>Content of card</p>
            </Card>
        </Col>
        <Col span="11" offset="2">
            <Card dis-hover>
                <template #title>Disable card with hover shadows</template>
                <p>Content of card</p>
                <p>Content of card</p>
                <p>Content of card</p>
            </Card>
        </Col>
    </Row> -->
    <!-- <Grid square>
        <GridItem>1</GridItem>
        <GridItem>2</GridItem>
        <GridItem>3</GridItem>
        <GridItem>4</GridItem>
        <GridItem>5</GridItem>
        <GridItem>6</GridItem>
    </Grid> -->
    <div>
        <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="4">
                <!-- <myinfo></myinfo> -->
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
                <myboss></myboss>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <myquest></myquest>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import myinfo from './myinfo.vue'
import myboss from './myboss.vue'
import myquest from './myquest.vue'


export default {
    components: {
        myinfo,
        myboss,
        myquest
    },
    data() {
        return {

        };
    },
    methods: {

    }
};
</script>
