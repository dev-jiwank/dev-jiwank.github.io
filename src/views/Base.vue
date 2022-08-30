<template>
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%', background: 'white'}">
                <Menu mode="horizontal" theme="light" active-name="1" >
                    <img class="layout-logo" alt="logo" src="../assets/logo_head.png">
                    <div class="layout-nav">
                        <MenuItem to="home" name="1">
                            <!-- <Icon type="md-home"></Icon> -->
                            Home
                        </MenuItem>
                        <MenuItem to="parctice" name="2">
                            About
                        </MenuItem>
                        <MenuItem to="parctice2" name="3">
                            Contact
                        </MenuItem>
                    </div>


                    <!-- <div class="layout-nav">
                        <Dropdown>
                            <a href="javascript:void(0)">
                                <Icon type="md-list"></Icon>
                            </a>
                            <template #list>
                                <DropdownMenu>
                                    <DropdownItem>Home</DropdownItem>
                                    <DropdownItem>About</DropdownItem>
                                    <DropdownItem>Contact</DropdownItem>
                                </DropdownMenu>
                            </template>
                        </Dropdown>
                    </div> -->


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
        margin: 70px 0px 0;
        background: #fff;
        min-height: 650px;
    }
    .dev-run-preview .dev-run-preview-edit{ display: none }
</style>
