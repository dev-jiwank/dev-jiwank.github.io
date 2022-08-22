<template>
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%'}">
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem to="home" name="1">
                            <Icon type="ios-navigate"></Icon>
                            Home
                        </MenuItem>
                        <MenuItem to="jiwan" name="2">
                            <Icon type="ios-keypad"></Icon>
                            About
                        </MenuItem>
                        <MenuItem to="login" name="3">
                            <Icon type="ios-analytics"></Icon>
                            Works
                     </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            Contact
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '650px'}">
                <router-view></router-view>
            </Content>
            <Footer class="layout-footer-center">1996-&copy; Jiwan Kim </Footer>
        </Layout>
    </div>
</template>
<script>
export default {

}
</script>

<style>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height: 100%;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }
  .dev-run-preview .dev-run-preview-edit{ display: none }
</style>
