<template>
    <div class="container">
        <img :src="backgroundImageTop" class="background-top" @load="handleImageLoad"/>
        <button class="centered-button">
            <img ref="centeredButtonImage" :src="buttonImage"/>
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            backgroundImageTop: require('@/assets/background_first.webp'),
            buttonImage: require('@/assets/button_pre_resrvation.webp')
        };
    },
    methods: {
        handleImageLoad() {
            // 이미지가 로드되면 스타일을 적용
            this.applyButtonStyle();
        },
        applyButtonStyle() {
            // 이미지가 로드된 후에 버튼 이미지에 스타일 적용
            const img = this.$refs.centeredButtonImage;
            if (img) {
                img.style.width = '80%';
                img.style.height = 'auto';
            }
        }
    },
    mounted() {
        // 페이지 로드 후 이미지 스타일 적용
        this.applyButtonStyle();
    }
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
    top: 70%; /* 화면 세로 중앙에 위치하는 기준점 */
    transform: translate(0%, -50%); 
}

/* SIZE OF BUTTON */
/* .centered-button img {
    width: 80%;
    height: auto;
} */

/* @media (max-width: 767px) {
    .centered-button img {
        width: 80%;
        height: auto;
    }
} */
</style>
