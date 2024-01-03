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
            this.searchMonster('Aboleth')
        },
        methods : {
            searchMonster(monsterName) {
                axios.get(`https://www.dnd5eapi.co/api/monsters`).then((response) => {
                    const monsters = response.data.results;
                    const matchedMonster = monsters.find(
                        (monster) => monster.name.toLowerCase() === monsterName.toLowerCase()
                    );

                    if (matchedMonster) {
                        axios.get('https://www.dnd5eapi.co'+matchedMonster.url).then((monsterResponse) => {
                            const monsterData = monsterResponse.data;

                            console.log(monsterData)
                            // monsterResult.innerHTML = `
                            // <h2>${monsterData.name}</h2>
                            // <p><strong>Index:</strong> ${monsterData.index}</p>
                            // <!-- You can display more monster details here -->
                            // `;
                        })
                        .catch((error) => {
                            // monsterResult.innerHTML = "Error fetching monster details.";
                        });
                    } else {
                        console.log("not-found")
                        // monsterResult.innerHTML = "Monster not found.";
                    }
                })
                .catch((error) => {
                    // monsterResult.innerHTML = "Error fetching monsters.";
                });
            }
        }
    }
</script>