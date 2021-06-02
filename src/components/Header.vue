<template>
  <header class="header">
    <input class="new-todo" v-model="name" autofocus autocomplete="off">
    <button type="button" @click="goSummoner">검색</button>
  </header>
</template>

<script>
export default {
    data() {
        return {
            name: ""
        };
    },
    methods: {
        goSummoner() {
            const { name } = this;

            if (name !== "") {
                location.href = '/summoner/' + name
            } else {
                alert('소환사명을 입력해주세요.');
            }
        }
    }
};
</script>