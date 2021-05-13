<template>
    <div>
        <div>{{detailData.writer}}</div>
        <div>{{detailData.title}}</div>
        <div>{{detailData.content}}</div>
        <button @click="updateData">수정</button>
        <button @click="deleteData">삭제</button>
    </div>
</template>


<script>
import data from '@/data' // flutter에서는 import '폴더주소' as dt로 사용.

export default {
    name: 'Detail',
    data() {
        const index = this.$route.params.contentId // index에는 contentId로 받은 content의 index 값이 저장됨. / index는 선언만 / $route는 무슨뜻? 
        return {
            index: index,
            detailData: data[index], // data에는 import 해온 data 폴더의 index.js의 어레이 객체들에서 저장된 index에 해당하는 객체를 받아와서 현재 component에 return함.
        }
    },
    methods: {
        deleteData() {
            data.splice(this.index, 1)
            this.$router.push({ // ()안에 {}는 왜 있는건가? {실행문}는 실행만, {}가 없으면 실행 후 return값까지.
                path: '/'
            })
        },
        updateData() {
            this.$router.push({
                name: 'Create',
                params: {
                    contentId: this.index // data return을 안해주니 Create에 param값이 전달되지 않음.
                }
            })
        }
    }
}
</script>

