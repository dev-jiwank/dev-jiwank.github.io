<template>
    <div style="text-align:center">
        <Typography v-if="true">
            <Title :level="1" class="title-left-padding">
                {{ title_carrer }}
                <Icon type="ios-bonfire"/>
            </Title>
        </Typography>
    </div>

    <div class="container">
        <div class="text">
            <Typography style="text-align:center">
                <!-- <Title :level="3">네트워크 통신 장비 제조 업체</Title> -->
                2021.06 ~ 현재
            </Typography>

            <Typography style="text-align:center">
                <Title :level="4">Openwrt (linux) 개발</Title>
            </Typography>
            <Paragraph>
                <ul class="midul">
                    <li>무선랜 라우터를 위한 Non-Real-Time 리눅스 기반의 오픈 소스 운영 체제 개발</li>
                    <li>Broadcom Chip을 베이스로 개발</li>
                    <li>Makefile 구성, Package 추가, patch 개발</li>
                </ul>
            </Paragraph>

            <Typography style="text-align:center">
                <Title :level="4">Built-in Modem WEB-UI 개발</Title>
            </Typography>
            <Paragraph>
                <ul class="midul">
                    <li>Vue.js을 사용한 개발</li>
                    <li>Rest-API / JSON-RPC 를 이용한 개발</li>
                    <li>Axios / Websocket / Webserver(uttpd, ngnix) 개발</li>
                    <li>Shell Script(Bash), ubus, sqlite3 Back-End 개발</li>
                    <li>Opensource Framework (Bootstrap, element, iview, vuetify) 개발</li>
                </ul>
            </Paragraph>

            <Typography style="text-align:center">
                <Title :level="4">DOCSIS (동축 케이블) 개발</Title>
            </Typography>
            <Paragraph>
                <ul class="midul">
                    <li>Europe, Japan, America(South & North) 사업자를 대상</li>
                    <li>네트워크 환경 구축, 관리, 검증</li>
                </ul>
            </Paragraph>


            <Typography style="text-align:center">
                <Title :level="4">etc ...</Title>
            </Typography>
            <Paragraph>
                <ul class="midul">
                    <li>Jira + Confluence 를 통한 이슈 관리 및 사업자와 협업 진행</li>
                    <li>Bitbucket을 통한 코드 관리</li>
                    <li>Jenkins 자동 빌드를 통한 펌웨어 및 릴리즈 관리</li>
                </ul>
            </Paragraph>
        </div>
    </div>

</template>
<script>
export default {
    data() {
        return {
            title_carrer : 'Career',
        }
    },
}
</script>
<style lang="less" scoped>
    .container {
        display: flex;
        justify-content: center;
    }
    .text {
        text-align: left;
    }
</style>