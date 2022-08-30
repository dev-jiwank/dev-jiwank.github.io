<template>
<Title>1</Title>
    <Grid :border="false" center square>
        <GridItem>
            <Card>
                <Image :src="this.verticalUrlList[0]"/>
                <h3>asd</h3>
            </Card>
        </GridItem>

        <GridItem>
            <Card>
                <Image :src="this.verticalUrlList[0]"/>
                <h3>asd</h3>
            </Card>
        </GridItem>
        
        <GridItem>
            <Card>
                <Image :src="this.verticalUrlList[0]"/>
                <h3>asd</h3>
            </Card>
        </GridItem>
    </Grid>
<Title>2</Title>
    <Grid :border="false" center square>
        <GridItem>
            <Card>
                <Image :src="this.verticalUrlList[0]"/>
                <h3>asd</h3>
            </Card>
        </GridItem>

        <GridItem>
            <Card>
                <Image :src="this.verticalUrlList[0]"/>
                <h3>asd</h3>
            </Card>
        </GridItem>
        
        <GridItem>
            <Card>
                <Image :src="this.verticalUrlList[0]"/>
                <h3>asd</h3>
            </Card>
        </GridItem>
    </Grid>
<Title>3</Title>
    <Grid :border="false" center square>
        <GridItem>
            <Card>
                <Image :src="this.verticalUrlList[0]"/>
                <h3>asd</h3>
            </Card>
        </GridItem>

        <GridItem>
            <Card>
                <Image :src="this.verticalUrlList[0]"/>
                <h3>asd</h3>
            </Card>
        </GridItem>
        
        <GridItem>
            <Card>
                <Image :src="this.verticalUrlList[0]"/>
                <h3>asd</h3>
            </Card>
        </GridItem>
    </Grid>
<Title>4</Title>
    <Grid :border="false" center square>
        <GridItem>
            <Card>
                <Image :src="this.verticalUrlList[0]"/>
                <h3>asd</h3>
            </Card>
        </GridItem>

        <GridItem>
            <Card>
                <Image :src="this.verticalUrlList[0]"/>
                <h3>asd</h3>
            </Card>
        </GridItem>
        
        <GridItem>
            <Card>
                <Image :src="this.verticalUrlList[0]"/>
                <h3>asd</h3>
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
</script>
