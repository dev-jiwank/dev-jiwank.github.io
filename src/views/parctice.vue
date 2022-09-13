<template>
    <div style="text-align:center">
        <Typography v-if="true">
            <Title :level="2" class="title-left-padding">
                {{ title_carrer }}
            </Title>
        </Typography>
    </div>

    <div style="margin-left:10px">
        <Paragraph>
            <ul>
                <li>김지완입니다 반갑습니다</li>
                <li>
                </li>
                <li>김지완 API 김지완</li>
                <li>김지완 UI</li>
                <li>김지완</li>
                <li>김지완</li>
            </ul>
        </Paragraph>

        <Typography>
            <Title :level="3">제목이요</Title>
            <blockquote>김지완</blockquote>
        </Typography>
    </div>

</template>
<script>
export default {
    data() {
        return {
            title_carrer : 'XXXXX',
        }
    },
}
</script>
