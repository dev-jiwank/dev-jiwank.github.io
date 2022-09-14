<template>
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%', background: 'white'}">
                <Menu mode="horizontal" theme="light" active-name="1" >
                    <div class="layout-nav">
                        <MenuItem to="home" name="1">
                            Home
                        </MenuItem>

                        <MenuItem to="parctice" name="2">
                            About
                        </MenuItem>

                        <MenuItem  @click="value = true" name="3">
                            Contact
                            <Drawer  placement="bottom" :closable="false" width="640" v-model="value">
                                <Title :level="4">
                                    Contacts
                                </Title>
                                <div class="demo-drawer-profile">
                                    <Row>
                                        <Col span="24">
                                            E-mail: wldhks1004@naver.com
                                            <Button shape="circle" icon="md-copy" @click="handleCopy"></Button>
                                        </Col>
                                        <Col span="24">
                                            Phone Number: 010-7754-8578
                                        </Col>
                                        <Col span="24">
                                            Kakao Talk ID: payphone22
                                        </Col>
                                    </Row>
                                </div>
                            </Drawer>
                        </MenuItem>

                    </div>
                </Menu>
            </Header>
            <Content class="content-layout">
                <router-view></router-view>
            </Content>
            <Footer class="layout-footer-center">1996 &copy; Jiwan Kim </Footer>
        </Layout>
    </div>
</template>
<script>
export default {
    data () {
        return {
            value: false,
            pStyle: {
                fontSize: '16px',
                color: 'rgba(0,0,0,0.85)',
                lineHeight: '24px',
                display: 'block',
                marginBottom: '16px'
            }
        }
    },
    methods: {
        handleCopy () {
            this.$Copy({
                text: "wldhks1004@naver.com",
                successTip: "Success",
                errorTip: "Fail"
            })
        }
    }
}
</script>

<style>
    .layout{
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height: 100%;
    }
    .ivu-layout-header{
        z-index: 3;
    }
    .layout-logo{
        width: 40px;
        height: 40px;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 10px;
        left: -15px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }
    .content-layout{
        margin: 70px 10px 0;
        background: #fff;
        min-height: 650px;
    }
    .dev-run-preview .dev-run-preview-edit{ display: none }
    .demo-drawer-profile{
        font-size: 16px;
    }
    .demo-drawer-profile .ivu-col{
        margin-bottom: 12px;
    }
</style>
