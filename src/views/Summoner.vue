<template>
  <div>
    <h1>Summoner Page : {{ name }}</h1>
    <div class>
        <div class="icon"><img v-bind:src="icon" /></div>
        <div class="level"> {{ level }} </div>
    </div>
  </div>
</template>

<script>
import { getSummorByName } from '@/api/index';

export default {
    data() {
        return {
            icon: "http://placehold.it/150x150",
            level: ""
        };
    },
    props: {
        name: {
            type: String,
            default: ''
        }
    },
    methods: {
        async submitForm() {
            const response = await getSummorByName(this.name);

            if(response.result == "success") {
                this.icon = "http://ddragon.leagueoflegends.com/cdn/11.11.1/img/profileicon/" +response.data.profileIconId + ".png";
                this.level = response.data.summonerLevel;
            } else {
                alert(response.msg);
            }
        },
    },
    created() {
        this.submitForm()
    }
};
</script>

<style>
.icon {width: 100px; height: 100px;}
.icon img {width:100%;}
</style>
