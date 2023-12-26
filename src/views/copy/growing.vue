<template>
    <div class="container">
        <img :src="backgroundImageTop" class="background-top"/>
        <button class="centered-button">
            <img src="@/assets/button_pre_resrvation.webp"/>
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            backgroundImageTop: require('@/assets/background_first.webp'),
        };
    },
};
</script>

<style scoped>
.container {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.background-top {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.centered-button {
    z-index: 3; /* 버튼이 이미지 위에 올라가도록 설정 */
    position: absolute;
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
    top: 75%; /* 화면 세로 중앙에 위치하는 기준점 */

}

/* SIZE OF BUTTON */
.centered-button img {
    width: 50%;
    height: auto;
}

@media (max-width: 767px) {
    .centered-button img {
        width: 100%;
        height: auto;
    }
}
</style>
