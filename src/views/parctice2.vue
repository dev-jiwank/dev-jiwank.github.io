<template>
    <Typography>
        <Title>TEST</Title>
    </Typography>
    
    <Grid :border="false" center square>
        <GridItem>
            <Card>
                <div style="text-align:center">
                    <img src="https://dev-file.iviewui.com/stJXDnKhL5qEBD0dHSDDTKbdnptK6mV5/large">
                    <h3>TEST</h3>
                </div>
            </Card>
        </GridItem>
        <GridItem>
            <Card>
                <div style="text-align:center">
                    <img src="https://dev-file.iviewui.com/stJXDnKhL5qEBD0dHSDDTKbdnptK6mV5/large">
                    <h3>TEST</h3>
                </div>
            </Card>
        </GridItem>
        <GridItem>
            <Card>
                <div style="text-align:center">
                    <img src="https://dev-file.iviewui.com/stJXDnKhL5qEBD0dHSDDTKbdnptK6mV5/large">
                    <h3>TEST</h3>
                </div>
            </Card>
        </GridItem>
    </Grid>

            <!-- <Timeline>
                <TimelineItem>
                    <p class="time">1976年</p>
                    <p class="content">Apple I 问世</p>
                </TimelineItem>
                <TimelineItem>
                    <p class="time">1984年</p>
                    <p class="content">发布 Macintosh</p>
                </TimelineItem>
                <TimelineItem>
                    <p class="time">2007年</p>
                    <p class="content">发布 iPhone</p>
                </TimelineItem>
                <TimelineItem>
                    <p class="time">2010年</p>
                    <p class="content">发布 iPad</p>
                </TimelineItem>
                <TimelineItem>
                    <p class="time">2011年10月5日</p>
                    <p class="content">史蒂夫·乔布斯去世</p>
                </TimelineItem>
            </Timeline>



            <Space direction="vertical" type="flex">
                <Progress :percent="25" />
                <Progress :percent="45" status="active" />
                <Progress :percent="65" status="wrong" />
                <Progress :percent="100" />
                <Progress :percent="25" hide-info />
            </Space>



    <Collapse v-model="value">
        <Panel name="1">
            史蒂夫·乔布斯
            <template #content>史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</template>
        </Panel>
        <Panel name="2">
            斯蒂夫·盖瑞·沃兹尼亚克
            <template #content>斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</template>
        </Panel>
        <Panel name="3">
            乔纳森·伊夫
            <template #content>乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</template>
        </Panel>
    </Collapse>



    <Card style="width:320px">
        <div style="text-align:center">
            <img src="https://dev-file.iviewui.com/stJXDnKhL5qEBD0dHSDDTKbdnptK6mV5/large">
            <h3>A high quality UI Toolkit based on Vue.js</h3>
        </div>
    </Card>

    <Card style="width:320px">
        <div style="text-align:center">
            <img src="https://dev-file.iviewui.com/stJXDnKhL5qEBD0dHSDDTKbdnptK6mV5/large">
            <h3>A high quality UI Toolkit based on Vue.js</h3>
        </div>
    </Card> -->

</template>
<script>
    export default {
        data () {
            return {
                value: '1'
            }
        }
    }
</script>

<style scoped>
    .time{
        font-size: 14px;
        font-weight: bold;
    }
    .content{
        padding-left: 5px;
    }
</style>
