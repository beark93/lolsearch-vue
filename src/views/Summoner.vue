<template>
  <div>
    <h1>Summoner Page : {{ name }}</h1>
    <div class="summoner">
        <div class="icon"><img v-bind:src="summoner.icon" /></div>
        <div class="level"> {{ summoner.level }} </div>
    </div>
    <div class="matches">
        <ul>
            <li v-for="match in matches" v-bind:key="match.gameID">
                <div class="match">
                    <img v-bind:src="match.championImg" />
                    <div class="name"> {{ match.championKN }} </div>
                    <div class="date"> {{ match.matchdate }} </div>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import { getSummorByName, getMatchesByName } from '@/api/index';

export default {
    data() {
        return {
            summoner: {
                icon: "http://placehold.it/150x150",
                level: "",
                accountID: ""
            },
            matches: [
            ]
        };
    },
    props: {
        name: {
            type: String,
            default: ''
        }
    },
    methods: {
        async getSummor(name) {
            const response = await getSummorByName(name);

            if(response.result == "success") {
                this.summoner.icon = "http://ddragon.leagueoflegends.com/cdn/11.11.1/img/profileicon/" +response.data.profileIconId + ".png";
                this.summoner.level = response.data.summonerLevel;
                this.summoner.accountID = response.data.accountId;
            } else {
                alert(response.msg);
            }
        },
        async getMatches(accountID) {
            const response = await getMatchesByName(accountID);

            if(response.result == "success") {
                this.matches = response.data.matches;
            } else {
                alert(response.msg);
            } 
        }
    },
    watch: {
        'summoner.accountID': function (accountID) {
            this.getMatches(accountID)
        }
    },
    created() {
        this.getSummor(this.name)
    }
};
</script>

<style>
.summoner .icon {width: 100px; height: 100px;}
.summoner .icon img {width:100%;}

.matches ul {list-style: none; padding: 0;} 
.matches ul li {margin-bottom: 20px;} 
.matches ul li .match {position:relative; width:100%;} 
.matches ul li .match img{width: 50px; height: 50px;} 
.matches ul li .match .name{width: 200px; height: 25px; display:inline;} 
.matches ul li .match .date{width: 200px; height: 25px; display:inline;} 
</style>
