<template>
    <div>
        <table>
            <tr>
                <td>글쓴이</td>
                <td>제목</td>
                <td>내용</td>
            </tr>
            <!-- data : 어레이 객체들, value : 어레이 객체 -->
            <tr v-for="(value, index) in data" :key="index">
                <td>{{value.writer}}</td>
                <td>{{value.title}}</td>
                <td>{{value.content}}</td>
            </tr>            
        </table>
        <button @click="write">글쓰기</button>
    </div>
</template>


<script>
import data from '@/data' // 왜 @/data/index.js가 아니라 @/data인지?..

export default {
    name: 'Read',
    data() {
        return {
            data: data
        }
    },
    methods: {
        write() {
            this.$router.push({
                path: 'create'
            })
        }
    }
}
</script>