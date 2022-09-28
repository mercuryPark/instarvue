import {createStore} from 'vuex'
import 데이터 from './data'
import axios from 'axios'
const store = createStore({
    state() {
        return {
            name : 'kim',
            age : 25,
            좋아요버튼 : 0,
            데이터 : 데이터,
            더보기 : 0,
            more : {}

        }
    },
    mutations:{
        setMore(state ,data){
         state.more = data
        },
        이름변경(state){
            state.name = 'park'
        },
        나이변경(state){
            state.age++
        },
        좋아요변경(state){
            for(let i = 0; i < 3; i++){
            if(state.좋아요버튼 == 0){
            state.데이터[i].likes++
            state.좋아요버튼 = 1
        }else if(state.좋아요버튼 == 1){
            state.데이터[i].likes--
            state.좋아요버튼 = 0
        }
    } 
    }
    
    },
    actions : {
        getData(context){
          axios.get(`https://codingapple1.github.io/vue/more${this.state.더보기}.json`).then((a)=>{
              this.state.데이터.push(a.data)
              this.state.더보기++
              context.commit('setMore',a.data)
          })
        },
   },
})

export default store;