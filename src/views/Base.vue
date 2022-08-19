<template>
<div class="layout">
    <Layout>
        <Header>
            <Menu mode="horizontal" modeactive-name="1" :open-names="['1-1']">
                <div class="layout-logo"></div>
                <div class="layout-nav">

                    <MenuItem to="home" name="1">
                        <Icon type="ios-paper" />
                        Home
                    </MenuItem>

                    <MenuItem to="jiwan" name="2">
                        <Icon type="ios-people" />
                        About
                    </MenuItem>

                    <MenuItem to="login" name="3">
                        <Icon type="ios-people" />
                        Works
                    </MenuItem>

                    <MenuItem to="contact" name="4">
                        <Icon type="ios-people" />
                        Contact
                    </MenuItem>

                </div>
            </Menu>
        </Header>
    </Layout>
</div>
</template>

<script>
    export default {
    };
</script>

<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
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
.layout .ivu-layout-header {
    background: #191a23;
}
</style>