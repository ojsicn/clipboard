<template>
    <div>
        <div class="jumbotron">
            <h1 class="display-6">{{ boardList[index].title }}</h1>
            <p class="lead">Writer : {{ boardList[index].writer }}</p>
            <hr class="my-4">
            <p>{{ boardList[index].content }}</p>
            <a class="btn btn-warning btn-lg my-4" href="javascript:;" role="button" @click="updateData">수정</a>
            <a class="btn btn-danger btn-lg ml-1" href="javascript:;" role="button" @click="deleteData">삭제</a>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'Detail',
        data() {
            return {
                boardList: [],
                index: this.$route.params.contentId,
            }
        },
        mounted() {
            this.loadBoardList()
        },
        methods: {
            loadBoardList () {
                this.boardList = JSON.parse(localStorage.getItem('board-list')) || []
            },
            deleteData() {
                this.$router.push({
                    path: '/'
                })
                this.boardList.splice(this.index, 1)
                localStorage.clear()
                localStorage.setItem('board-list', JSON.stringify(this.boardList))
            },
            updateData() {
                this.$router.push({
                    name: 'Create',
                    params: {
                        contentId: this.index
                    }
                })
            }
        }
    }
</script>


<style scoped>
    .createFont {
        font-size: 32px;
    }
</style>