<template>
    <div style="text-align:center">
        <Typography v-if="true">
            <Title :level="2" class="title-left-padding">
                {{ title_carrer }}
                <Icon type="ios-bonfire"/>
            </Title>
        </Typography>
    </div>

    <div style="margin-left:10px">
        <Typography style="text-align:center">
            <Title :level="3">네트워크 통신 장비 제조 업체</Title>
            2021.06 ~ 현재
        </Typography>
        <Paragraph>
            <ul class="midul">
                <li>홈 네트워킹 서비스를 위한 모뎀 개발</li>
                <li>모뎀에 내장된 UI 개발을 담당</li>
                <li>네트워크 환경 구축 및 관리하는 업무 진행</li>
                <li>네트워크 검증 업무 진행</li>
                <li>이슈 및 빌드 트리 관리</li>
            </ul>
        </Paragraph>

        <Typography style="text-align:center">
            <Title :level="3">History</Title>
        </Typography>
        <Paragraph>
            <blockquote class="midul">Openwrt 기반 Web-UI 개발</blockquote>
            <ul class="midul">
                <li>Linux 기반의 오픈 소스 운영 체제</li>
                <li>Vue.js를 활용한 반응형 웹 개발</li>
                <li>Ubus를 통한 Websocket 통신</li>
            </ul>

            <blockquote class="midul">모뎀 Web-UI 코어 변경</blockquote>
            <ul class="midul">
                <li>양산 라이센스로 인한 프레임워크 코어 변경</li>
            </ul>

            <blockquote class="midul">Web-UI Common feature 작업</blockquote>
            <ul class="midul">
                <li>사업자별 별도의 UI를 feature로 구분화</li>
                <li>특정 기능 빌드 옵션으로 스위칭화</li>
            </ul>

            <blockquote class="midul">사업자 전달 Sample 작업</blockquote>
            <ul class="midul">
                <li>사업자에게 제품 판매를 위한 작업</li>
                <li>선행 개발로 사업자 히스토리 및 입맛에 맞춰 진행</li>
            </ul>
        </Paragraph>
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
.midul {
        display: table;
        margin-left: auto;
        margin-right: auto;
    }
</style>