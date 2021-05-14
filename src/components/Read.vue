<template>
    <div>
        <app-bar/>
        <div class="">
            <br><br><br><br>
            <table class="table">
            <thead class="col">
                <tr class="col">
                    <th scope="row-2">번호</th>
                    <th scope="row-2">글쓴이</th>
                    <th scope="row-2">제목</th>
                    <th scope="row-6">내용</th>
                </tr>
            </thead>
            <tbody class="col">
                <tr v-for="(value, index) of boardList" :key="index" @click="detail(index)">
                    <th scope="row-2">{{index+1}}</th>
                    <td class="row-2">{{value.writer}}</td>
                    <td class="row-2">{{value.title}}</td>
                    <td class="row-6">{{value.content}}</td>
                </tr>
            </tbody>
        </table>
        <button class="btn btn-primary ml-2" type="submit" @click="write">글쓰기</button>
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
            detail(index) {
                this.$router.push({
                    name: 'Detail',
                    params: {
                        contentId: index
                    }
                })
            }
        },
        
    }
</script>