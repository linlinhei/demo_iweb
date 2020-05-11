<template>
  <div>
    <h2 class="title">
      <span>最新课程</span>
      <router-link :to="{name:'course',query:{curPage:1,typeId:0}}" class="more">更多</router-link>
    </h2>
    <b-row>
      <b-col
        md="3"
        sm="6"
        v-for="(item, index) in list"
        :key="index"
        class="d-flex my-3"
        style="flex-direction:column"
      >
        <router-link :to="{name:'course_detail',query:{cid:item.cid}}">
          <img :src="require(`@/assets/images/${item.pic}`)" alt class="img-fluid" />
        </router-link>
        <router-link :to="{name:'course_detail',query:{cid:item.cid}}">{{item.title}}</router-link>
        <p>讲师:{{item.tname}}</p>
        <strong class="text-danger">¥{{item.price.toFixed(2)}}</strong>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "HomeCourse",
  data() {
    return {
      list: [],
      countNum: 4 //返回课程的数量
    };
  },
  methods: {
    getData() {
      this.$axios
        .get("/course/newest", {
          params: {
            countNum: this.countNum
          }
        })
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            this.list = res.data.data;
          }
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style>
.title {
  height: 40px;
  border-bottom: 2px solid #ddd;
  font-weight: lighter;
  margin-top: 20px;
  margin-bottom: 0;
}
.title > span {
  float: left;
  min-width: 100px;
  line-height: 38px;
  text-align: center;
  font-size: 18px;
  border-bottom: 2px solid #57bc4c;
}
.title > .more {
  float: right;
  font-size: 14px;
  color: #999;
  margin-top: 12px;
}
</style>