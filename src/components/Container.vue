<template>
    <div>
  <Post v-for="(a,i) in 데이터" :key="i" :데이터="$store.state.데이터[i]" />
</div>
</template>

<script>
import Post from "./Post.vue"
export default {
    //eslint-disable-next-line
    name: 'Container',
    props:{
        데이터 : Array,
    },
    components: {
        Post,
    }

}
</script>