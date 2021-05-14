<template>
    <div>
        <app-bar/>
        <div class="cont container border-primary">
            <br><br><br><br>
            <div class="col-12 card" v-for="(value, index) of boardList" :key="index" @click="detail(value)">
                <div class="ml-1 font-weight-bold "><span class="font-weight-bold">No.</span> {{index + 1}}</div>
                <div class="ml-1 text-truncate "><span class="font-weight-bold">Writer. </span> {{value.writer}}</div>
                <div class="ml-1 text-truncate "><span class="font-weight-bold">Title. </span> {{value.title}}</div>
            </div>
            <br>
        </div>
        <div>
            <button type="button" class="btn btn-block btn-primary" @click="write">글쓰기</button>
        </div>
    </div>
</template>


<script>

    import AppBar from '@/components/AppBar.vue'

    export default {
        name: 'Read',
        components: {
            AppBar,
        },
        data() {
            return {
                boardList: []
            }
        },
        mounted() {
            this.loadBoardList()
        },
        methods: {
            loadBoardList () {
                this.boardList = JSON.parse(localStorage.getItem('board-list')) || []
            },
            write() {
                this.$router.push({
                    path: 'create'
                })
            },
            detail(data) {
                this.$router.push({
                    name: 'Detail',
                    params: {
                        contentId: data.id
                    }
                })
            }
        },
        
    }
</script>


<style scoped>
    .cont {
        width: 100%;
        height: 25rem;
        overflow: scroll;
    }
</style>