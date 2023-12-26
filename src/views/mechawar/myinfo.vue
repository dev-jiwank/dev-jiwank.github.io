<template>
    <div>
        <Card>
            <template #title>
                <!-- <Avatar size="large" shape="square" src="https://robohash.org/123" style="border: 1px solid #dcdee2;"/> -->
                <div class="war-center-location">
                    <Image src="https://robohash.org/123" style="max-width: 35%; height: auto; border: 1px solid #dcdee2; border-radius: 15%;"/>
                </div>
            </template>

                <Grid :col="2" :border="false">
                    <GridItem style="height:auto;">
                        <div style="text-align: center; font-size: 13px;" class="war-info">
                            <div>{{ "LEVEL" }}</div>
                        </div>
                        <div class="war-center-text">
                            <span style="font-size: 14px;">{{ "23" }}</span>
                        </div>
                    </GridItem>
                    <GridItem style="height:auto;">
                        <div style="text-align: center; font-size: 13px;" class="war-info">
                            <div>{{ "EXP" }}</div>
                        </div>
                        <div class="war-center-text">
                            <span style="font-size: 14px;">{{ "23/100" }}</span>
                        </div>
                    </GridItem>
                </Grid>

                <Grid square :col="3" :border="false">
                        <GridItem style="height:auto;">
                            <div style="text-align: center; font-size: 13px;" class="war-info">
                                <div>{{ "POWER" }}</div>
                            </div>
                            <div class="war-center-text">
                                <span style="font-size: 14px;">{{ "12" }}</span>
                            </div>
                        </GridItem>
                        <GridItem style="height:auto;">
                            <div style="text-align: center; font-size: 13px;" class="war-info">
                                <div>{{ "ENERGY" }}</div>
                            </div>
                            <div class="war-center-text">
                                <span style="font-size: 14px;">{{ "10/12" }}</span>
                            </div>
                            <div class="war-center-location">
                            <CountDown :target="targetTime2" @on-end="handleEnd" v-font="10" />
                            </div>
                        </GridItem>
                        <GridItem style="height:auto;">
                            <div style="text-align: center; font-size: 13px;" class="war-info">
                                <div>{{ "GUARD" }}</div>
                            </div>
                            <div class="war-center-text">
                                <span style="font-size: 14px;">{{ "12" }}</span>
                            </div>
                        </GridItem>
                </Grid>

                <Space direction="vertical" type="flex" style="margin-top:10px;">
                    <Button long type="primary">{{"ITEM / MAGIC"}}</Button>
                </Space>

                <div class="war-center-location" style="margin-top:10px;">
                    <ButtonGroup>
                        <Button type="primary">
                            SAVE
                        </Button>
                        <Button type="primary">
                            LOAD
                        </Button>
                    </ButtonGroup>
                </div>
        </Card>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                targetTime2: new Date().getTime() + 30000
            }
        },
        methods: {
            handleEnd () {
                console.log("1")
            }
        }
    }
</script>

<style>
    .war-center-location {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .war-border {
        border: 1px solid #dcdee2;
    }
    .war-center-text {
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: clip;
    }
    /* .box-card-info {
        margin: 100px;
    } */
    .war-info {
        color: #999;
    }
    /* .pagination-container-info {
        display: flex;
        justify-content: center;
        align-items: center;
    } */
</style>
