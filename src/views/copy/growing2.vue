<template>
    <div class="container">
        <Image :src="backgroundImage" class="background-growing"/>

        <div class="overlay">
            <el-row>
                <el-col :span="24">
                    <Image :src="overlayImage_1_title" class="background-overlay-title-1"/>
                    <Image :src="overlayImage_1_background" class="background-overlay-cover-1"/>
                    <Image :src="overlayImage_1_icon" class="background-overlay-icon-1"/>
                    <Image :src="overlayImage_1_button" class="background-overlay-button-1"/>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="24">
                    <Image :src="overlayImage_2_background" class="background-overlay-cover-1"/>
                    <Image :src="overlayImage_2_icon" class="background-overlay-icon-2"/>
                    <Image :src="overlayImage_2_icon_rigth" class="background-overlay-icon-2-right"/>
                    <Image :src="overlayImage_2_button" class="background-overlay-button-2-right"/>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="24">
                    <Image :src="overlayImage_3_background" class="background-overlay-cover-1"/>
                    <Image :src="overlayImage_3_icon_left" class="background-overlay-icon-3"/>
                    <Image :src="overlayImage_3_icon_left_btn" class="background-overlay-icon-3-btn"/>
                    <Image :src="overlayImage_3_icon_right" class="background-overlay-icon-3-right"/>
                    <Image :src="overlayImage_3_icon_right_btn" class="background-overlay-icon-3-right-btn"/>
                </el-col>
            </el-row>
            
        </div>
    </div>
</template>

<script>
import mobileCheck from "../../shared/mobilecheck.js";
export default {
    // mixins: [mobileCheck],
    data() {
        return {
            backgroundImage: require('@/assets/background_second.webp'),
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
    // watch: {
    //     isMobile(a, b) {
    //         this.fetchData()
    //     },
    // },
    methods : {
        // fetchData (){
        //     console.log(this.isMobile)
        // }
    }
};
</script>

<style scoped>
    .container {
        position: relative;
    }
    .background-growing {
        background-size: cover;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

/* section1 */
    .overlay {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
    }
    .background-overlay-title-1 {
        margin-top: 100px;
        height: auto;
    }
    .background-overlay-cover-1 {
        height: auto; 
    }
    .background-overlay-icon-1{
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
    }
    .background-overlay-button-1 {
        position: absolute;
        top: 90%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
/* section2 */
    .background-overlay-icon-2{
        position: absolute;
        top: 55%;
        left: 30%;
        transform: translate(-50%, -50%);
        width: 45%;
    }
    .background-overlay-icon-2-right{
        position: absolute;
        top: 40%;
        left: 70%;
        transform: translate(-50%, -50%);
        width: 40%;
    }
    .background-overlay-button-2-right {
        position: absolute;
        top: 75%;
        left: 70%;
        transform: translate(-50%, -50%);
        width: 25%;
    }

@media (max-width: 768px) {
/* section1 */    
    .overlay {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
    }
    .background-overlay-title-1 {
        margin-top: 100px;
        height: auto;
        width: 100%;
    }
    .background-overlay-cover-1 {
        height: auto;
        width: 200%;
        margin-left: -50%;
    }
    .background-overlay-icon-1{
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 200%;
    }
    .background-overlay-button-1 {
        position: absolute;
        top: 90%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
    }
/* section2 */
    .background-overlay-icon-2{
        position: absolute;
        top: 55%;
        left: 10%;
        transform: translate(-50%, -50%);
        width: 100%;
    }
    .background-overlay-icon-2-right{
        position: absolute;
        top: 40%;
        left: 95%;
        transform: translate(-50%, -50%);
        width: 100%;
    }
    .background-overlay-button-2-right {
        position: absolute;
        top: 75%;
        left: 95%;
        transform: translate(-50%, -50%);
        width: 75%;
    }
/* section3 */
    .background-overlay-icon-3{
        position: absolute;
        top: 40%;
        left: 10%;
        transform: translate(-50%, -50%);
        width: 100%;
    }
    .background-overlay-icon-3-btn{
        position: absolute;
        top: 80%;
        left: 10%;
        transform: translate(-50%, -50%);
        width: 75%;
    }
    .background-overlay-icon-3-right{
        position: absolute;
        top: 45%;
        left: 95%;
        transform: translate(-50%, -50%);
        width: 70%;
    }
    .background-overlay-icon-3-right-btn{
        position: absolute;
        top: 80%;
        left: 95%;
        transform: translate(-50%, -50%);
        width: 75%;
    }

}

</style>
