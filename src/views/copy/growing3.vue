<template>
    <div class="container">
        <Image :src="lampImage" style="margin-top:100px"/>

        <section class="background-overlay-cover-1">
            <div>
                <Image :src="overlayImage_1_title" class="overall-title"/>
            </div>

            <div>
                <Image :src="overlayImage_1_background" style="position: relative;"/>

                <Image :src="overlayImage_1_icon" class="item-info-box-1"/>
                <Image :src="overlayImage_1_button" class="item-info-box-btn-1"/>
            </div>

            <div>
                <Image :src="overlayImage_2_background" style="position: relative;"/>

                <Image :src="overlayImage_2_icon" class="item-info-box-left-2"/>
                <Image :src="overlayImage_2_icon_rigth" class="item-info-box-right-2"/>
                <Image :src="overlayImage_2_button" class="item-info-box-right-under-2"/>
            </div>

            <div>
                <Image :src="overlayImage_3_background" style="position: relative;"/>

                <Image :src="overlayImage_3_icon_left" class="item-info-box-left-3"/>
                <Image :src="overlayImage_3_icon_right" class="item-info-box-right-3"/>
                <Image :src="overlayImage_3_icon_left_btn" class="item-info-box-left-under-3"/>
                <Image :src="overlayImage_3_icon_right_btn" class="item-info-box-right-under-3"/>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            backgroundImage: require('@/assets/background_second.webp'),
            lampImage: require('@/assets/lamp.webp'),
            overlayImage_1_title: require('@/assets/part1_title.webp'),

            // SECTION 1
            overlayImage_1_background: require('@/assets/bg-part1.webp'),
            overlayImage_1_icon: require('@/assets/part1_icon.webp'),
            overlayImage_1_button: require('@/assets/part1_button.png'),
            // SECTION 2
            overlayImage_2_background: require('@/assets/part2_cover.webp'),
            overlayImage_2_icon: require('@/assets/part2_left.webp'),
            overlayImage_2_icon_rigth: require('@/assets/part2_icon_right.webp'),
            overlayImage_2_button: require('@/assets/part2-btn.webp'),
            // SECTION 3
            overlayImage_3_background: require('@/assets/part3_cover.webp'),
            overlayImage_3_icon_left: require('@/assets/part3_left.webp'),
            overlayImage_3_icon_left_btn: require('@/assets/part3_left_btn.webp'),
            overlayImage_3_icon_right: require('@/assets/part3_right.webp'),
            overlayImage_3_icon_right_btn: require('@/assets/part3-right_btn.webp'),
        };
    },
    methods: {
        // 필요한 메서드 추가
    },
};
</script>

<style scoped>
.container {
    background: url('@/assets/background_second.webp');
    position: relative;
    background-size: cover;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.background-overlay-cover-1 {
    position: absolute;
    top: 10%;
}
.overall-title {
    height: auto;
    width: 50%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
}
/* section 1 */
.item-info-box-1 {
    position: absolute;
    left: 0;
}

.item-info-box-btn-1 {
    position: absolute;
    left: 25%;
    width: 50%;
    top: 40%;
}

/* section 2 */
.item-info-box-left-2 {
    margin-top: 40px;
    position: absolute;
    left: 5%;
    width: 45%;
}
.item-info-box-right-2 {
    margin-top: 40px;
    position: absolute;
    right: 5%;
    width: 45%;
}
.item-info-box-right-under-2 {
    position: absolute;
    right: 5%;
    width: 45%;
    transform: translate(-0%, 210%);
}

/* section 3 */
.item-info-box-left-3 {
    margin-top: 25px;
    position: absolute;
    left: 10%;
    width: 35%;
}
.item-info-box-right-3 {
    margin-top: 35px;
    position: absolute;
    right: 10%;
    width: 35%;
}
.item-info-box-left-under-3 {
    position: absolute;
    left: 10%;
    width: 35%;
    top: 92.9%;
}
.item-info-box-right-under-3 {
    position: absolute;
    right: 10%;
    width: 35%;
    top: 93%;
}

@media (max-width: 768px) {
    /* .background-overlay-icon-1{
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        z-index: 5;
    } */
}
</style>
