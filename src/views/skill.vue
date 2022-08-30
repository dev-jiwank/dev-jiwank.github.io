<template>
    <Grid :border="false" >

        <GridItem :style="{width: '100%'}">
            <Card>
                <div style="text-align:center">
                    <Image :src="this.verticalUrlList[0]"/>
                    <h3>Vue</h3>
                </div>
            </Card>
        </GridItem>

        <GridItem>
            <Card>
                <div style="text-align:center">
                    <Image :src="this.verticalUrlList[0]"/>
                    <h3>Vue</h3>
                </div>
            </Card>
        </GridItem>

        <GridItem>
            <Card>
                <div style="text-align:center">
                    <Image :src="this.verticalUrlList[0]"/>
                    <h3>Vue</h3>
                </div>
            </Card>
        </GridItem>

        <GridItem>
            <Card>
                <div style="text-align:center">
                    <Image :src="this.verticalUrlList[0]"/>
                    <h3>Vue</h3>
                </div>
            </Card>
        </GridItem>

        <GridItem>
            <Card>
                <div style="text-align:center">
                    <Image :src="this.verticalUrlList[0]"/>
                    <h3>Vue</h3>
                </div>
            </Card>
        </GridItem>

        <GridItem>
            <Card>
                <div style="text-align:center">
                    <Image :src="this.verticalUrlList[0]"/>
                    <h3>Vue</h3>
                </div>
            </Card>
        </GridItem>

        <GridItem>
            <Card>
                <div style="text-align:center">
                    <Image :src="this.verticalUrlList[0]"/>
                    <h3>Vue</h3>
                </div>
            </Card>
        </GridItem>
    </Grid>
</template>
<script>
import Vue_img from '@/assets/vue.png'

export default {
components: {
    Vue_img
},
    data() {
        return {
            verticalUrlList: [
                Vue_img,
                'https://file.iviewui.com/images/image-demo-1.jpg'
            ]
        }
    }
}
</script>''