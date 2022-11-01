<template>
    <Grid :border="false" :col="3" padding='0' >
        <GridItem style="text-align:right; width:33.3%;">
            <Space wrap>
                <Circle :percent="100" :stroke-color="color[0]" style="width:100px">
                    <span v-if="this.end_num" style="font-size:24px; color:#19be6b;">
                        MAX
                        <p>열정</p>
                    </span>
                    <span v-else style="font-size:24px">
                        <CountUp :end="100" :duration="5" ref="count" v-font="24" />%
                        <p>열정</p>
                    </span>
                </Circle>
            </Space>
        </GridItem>

        <GridItem style="text-align:center; width:33.3%;">
            <Space wrap>
                <Circle :percent="100" :stroke-color="color[1]" style="width:100px">
                    <span v-if="this.end_num" style="font-size:24px; color:#ff9900;">
                        MAX
                        <p>창의성</p>
                    </span>
                    <span v-else style="font-size:24px">
                        <CountUp :end="100" :duration="6" ref="count" v-font="24" />%
                        <p>창의성</p>
                    </span>
                </Circle>
            </Space>
        </GridItem>

        <GridItem style="text-align:left; width:33.3%;">
            <Space wrap>
                <Circle :percent="100" :stroke-color="color[2]" style="width:100px">
                    <span v-if="this.end_num" style="font-size:24px; color:#ed4014;">
                        MAX
                        <p>개념</p>
                    </span>
                    <span v-else style="font-size:24px">
                        <CountUp :end="100" :duration="6" ref="count" v-font="24" />%
                        <p>개념</p>
                    </span>
                </Circle>
            </Space>
        </GridItem>
    </Grid>
</template>
<script>
export default {
    data() {
        return {
            update: 5000,
            percent: 0,
            end_num : false
        }
    },
    computed: {
        color () {
            let color = ['#2db7f5', '#2db7f5','#2db7f5'];

            if (this.end_num == true) {
                color = ['#19be6b', '#ff9900','#ed4014'];
                this.circle_done()
            }
            return color;
        }
    },
    mounted () {
        this.$refs.count.CountUp.start(()=> this.end_num = true);
    },
    methods: {
        handlePause () {
            this.$refs.count.CountUp.pauseResume();
        },
        handleReset () {
            this.$refs.count.CountUp.reset();
        },
        handleStart () {
            this.$refs.count.CountUp.start(()=> console.log('Complete!'));
        },
        handleUpdate () {
            this.$refs.count.CountUp.update(this.update);
        },
        circle_done () {
            this.$emit("childEvent_button");
        }
    }
}
</script>