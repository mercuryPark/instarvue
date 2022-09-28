<template>
    <div class="post">
    <div class="post-header">
      <div class="profile" :style="{ backgroundImage : `url(${데이터.userImage})`}"></div>
      <span class="profile-name">{{데이터.name}}</span>
    </div>
    <div @click="$store.commit('좋아요변경')" class="post-body" :style="{backgroundImage : `url(${데이터.postImage})`}"></div>
    <div class="post-content">
      <p>{{데이터.likes}} Likes</p>
      <p><strong>{{데이터.name}}</strong> {{데이터.content}}</p>
      <p class="date">{{데이터.date}}</p>
    </div>
</div> 
</template>

<script>

export default {
     //eslint-disable-next-line
     name:'Post',
    props:{
        데이터 : Array,
    }
}
</script>

<style>
    .post {
  width: 100%;
}
.profile {
  /* background-image: url("https://placeimg.com/100/100/arch"); */
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  /* background-image: url("https://placeimg.com/640/480/animals"); */
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
} 
</style>