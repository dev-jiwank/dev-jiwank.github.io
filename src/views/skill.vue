<template>
    <div style="text-align:center">
        <Typography v-if="true">
            <Title :level="2" class="title-left-padding">
                {{ title_skill }}
            </Title>
        </Typography>
    </div>
    
    <Grid :border="false" padding=24>
        <GridItem :style="{width: '25%'}"></GridItem>
        <GridItem :style="{width: '50%'}">
            <Card>
                <div style="text-align:center">
                    <Tooltip content="HTML / CSS / JavaScript" placement="bottom">
                        <Image :src="this.verticalUrlList[1]"/>
                    </Tooltip>
                </div>
            </Card>
        </GridItem>
        <GridItem :style="{width: '25%'}"></GridItem>
    </Grid>

    <Grid :border="false" padding=24>
        <GridItem>
            <Card>
                <div style="text-align:center">
                    <Tooltip content="Vue.js" placement="bottom">
                        <Image :src="this.verticalUrlList[0]" />
                    </Tooltip>
                </div>
            </Card>
        </GridItem>

        <GridItem>
            <Card>
                <div style="text-align:center">
                    <Tooltip content="C / C+ Programming" placement="bottom">
                        <Image :src="this.verticalUrlList[2]"/>
                    </Tooltip>
                </div>
            </Card>
        </GridItem>

        <GridItem>
            <Card>
                <div style="text-align:center">
                    <Tooltip content="Linux & Shell Script" placement="bottom">
                        <Image :src="this.verticalUrlList[3]"/>
                    </Tooltip>
                </div>
            </Card>
        </GridItem>

        <GridItem>
            <Card>
                <div style="text-align:center">
                    <Tooltip content="Bitbucket" placement="bottom">
                        <Image :src="this.verticalUrlList[4]"/>
                    </Tooltip>
                </div>
            </Card>
        </GridItem>

        <GridItem>
            <Card>
                <div style="text-align:center">
                    <Tooltip content="Jira" placement="bottom">
                        <Image :src="this.verticalUrlList[5]"/>
                    </Tooltip>
                </div>
            </Card>
        </GridItem>

        <GridItem>
            <Card>
                <div style="text-align:center">
                    <Tooltip content="Git" placement="bottom">
                        <Image :src="this.verticalUrlList[6]"/>
                    </Tooltip>
                </div>
            </Card>
        </GridItem>
    </Grid>

</template>
<script>
import Vue_img from '@/assets/Vue_180.png'
import htmljscss from '@/assets/htmljscss_180.png'
import Clang from '@/assets/C_180.png'
import Linux from '@/assets/Linux_180_2.png'
import Bitbucket from '@/assets/Bitbucket_180.png'
import Jira from '@/assets/Jira_180.png'
import Git from '@/assets/Git_180.png'

export default {
components: {
    Vue_img,
    htmljscss,
    Clang,
    Linux,
    Bitbucket,
    Jira,
    Git
},
    data() {
        return {
            trg_scroll : false,
            title_skill : 'XXXXX XXXXX',
            verticalUrlList: [
                Vue_img,
                htmljscss,
                Clang,
                Linux,
                Bitbucket,
                Jira,
                Git
            ]
        }
    },
    mounted() {
        window.addEventListener('scroll', () => {
        let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
        let windowHeight = window.innerHeight; // 스크린 창
        let fullHeight = document.body.scrollHeight; //  margin 값은 포함 x
        console.log(scrollLocation +" "+  windowHeight+" "+fullHeight)
        if(scrollLocation > 60 ){
            this.trg_scroll = true
        }
        })
    }
}
</script>

<style>
    .title-left-padding{
        padding-left: 20px;
    }
</style>