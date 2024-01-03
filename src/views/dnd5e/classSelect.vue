<template>
    <div>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        components: {

        },
        data () {
            return {

            }
        },
        mounted(){
            this.class()
        },
        methods : {
            class(Name) {
                // axios.get(`https://www.dnd5eapi.co/api/classes`).then((response) => {
                //     console.log(response.data.results[0])
                // })
                // .catch((error) => {
                // });


                axios.get(`https://www.dnd5eapi.co/api/classes/wizard/levels`).then((response) => {
                    console.log(response.data)
                })
                .catch((error) => {
                });
            }
        }
    }
</script>