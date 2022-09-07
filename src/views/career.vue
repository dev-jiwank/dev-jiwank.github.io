<template>
    <div style="text-align:center">
        <Typography v-if="true">
            <Title :level="2" class="title-left-padding">
                {{ title_carrer }}
            </Title>
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
