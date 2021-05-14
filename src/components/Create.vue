<template>
    <div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">글쓴이</span>
            </div>
            <input type="text" class="form-control" placeholder="글쓴이" aria-label="Username"
                aria-describedby="basic-addon1" v-model.trim="formData.writer">
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">제목</span>
            </div>
            <input type="text" class="form-control" placeholder="제목" aria-label="Username"
                aria-describedby="basic-addon1" v-model.trim="formData.title">
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">내용</span>
            </div>
            <textarea type="text" class="form-control"
                placeholder="내용" aria-label="Username" aria-describedby="basic-addon1" v-model.trim="formData.content"></textarea>
        </div>
        <button type="button" class="btn btn-block btn-primary" @click="onClickAddOrUpdate()">등록</button>
    </div>
</template>


<script>
    export default {
        name: 'Create',
        data() {
            return {
                formData: {
                    writer: '',
                    title: '',
                    content: ''
                }
            }
        },
        methods: {
            onClickAddOrUpdate() {
                if(this.formData.writer == ''){
                    alert('글쓴이를 입력해 주세요')
                    return false
                }
                if(this.formData.title == ''){
                    alert('타이틀을 입력해 주세요')
                    return false
                }
                if(this.formData.content == ''){
                    alert('내용을 입력해 주세요')
                    return false
                }
                const boardList = JSON.parse(localStorage.getItem('board-list')) || []
                this.formData.id = new Date().getTime()
                if(this.$route.params.contentId == null) {
                    boardList.push(this.formData)
                    localStorage.setItem('board-list', JSON.stringify(boardList))
                } else {
                    for(let i = 0; i < boardList.length; i++) {
                        if(boardList[i].id == this.$route.params.contentId) {
                            boardList.splice(i, 1, this.formData)
                        }
                    }
                    localStorage.clear()
                    localStorage.setItem('board-list', JSON.stringify(boardList))
                }
                this.$router.push({
                    path: '/'
                })
            },
        }
    }
</script>


<style scoped>
</style>