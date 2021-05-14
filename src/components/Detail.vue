<template>
    <div>
        <div class="jumbotron" v-if="board !== null">
            <h1 class="display-6">{{ board.title }}</h1>
            <p class="lead">Writer : {{ board.writer }}</p>
            <hr class="my-4">
            <p>{{ board.content }}</p>
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
                board: null,
                id: this.$route.params.contentId,
            }
        },
        mounted() {
            this.loadBoardItem()
        },
        methods: {
            loadBoardItem () {
                const boardList = JSON.parse(localStorage.getItem('board-list')) || []
                console.log(boardList)
                let boardItem = null
                for(let i = 0; i < boardList.length; i++) {
                    if(boardList[i].id == this.$route.params.contentId) {
                        boardItem = boardList[i]
                    }
                }
                this.board = boardItem
            },
            deleteData() {
                const boardList = JSON.parse(localStorage.getItem('board-list')) || []
                console.log(boardList)
                for(let i = 0; i < boardList.length; i++) {
                        if(boardList[i].id == this.$route.params.contentId) {
                            boardList.splice(i, 1)
                            console.log(i)
                            console.log(boardList)
                            console.log(boardList[i])
                        }
                    }
                localStorage.clear()
                localStorage.setItem('board-list', JSON.stringify(boardList))
                this.$router.push({
                    path: '/'
                })
            },
            updateData() {
                this.$router.push({
                    name: 'Create',
                    params: {
                        contentId: this.id
                    }
                })
            },
        }
    }
</script>


<style scoped>
    .createFont {
        font-size: 32px;
    }
</style>