<template>
  <b-container>
    <!-- 面包屑 -->
    <b-breadcrumb :items="items" class="bg-transparent"></b-breadcrumb>
    <!-- <b-nav>
      <b-nav-text>课程等级:</b-nav-text>
      <b-nav-item active>不限</b-nav-item>
      <b-nav-item>基础课程</b-nav-item>
      <b-nav-item>核心课程</b-nav-item>
      <b-nav-item>进阶课程</b-nav-item>
    </b-nav>-->
    <!-- 课程等级 -->
    <type-nav></type-nav>
    <div style="border:1px solid green" class="my-3"></div>
    <b-row v-for="(item, index) in list.list" :key="index" class="course_list my-2">
      <b-col cols="3" class="py-2 mt-3">
        <router-link :to="{name:'course_detail',query:{cid:item.cid}}">
          <img :src="require(`@/assets/images/${item.pic}`)" alt class="img-fluid" />
        </router-link>
      </b-col>
      <b-col cols="5" class="information py-4">
        <h2>
          <router-link :to="{name:'course_detail',query:{cid:item.cid}}">{{item.title}}</router-link>
        </h2>
        <p>讲师:{{item.tname}}</p>
        <p>课时:{{item.cLength}}</p>
        <p>开课时间:{{item.startTime}}</p>
        <p>
          上课地点:{{item.address}}
          <router-link to>查看各校区地址</router-link>
        </p>
      </b-col>
      <b-col cols="2" class="my-5 py-4">
        <h2 class="text-danger">¥{{item.price}}</h2>
      </b-col>
      <b-col cols="2" class="my-5 py-4">
        <router-link :to="{name:'course_detail',query:{cid:item.cid}}" class="btn btn-success">查看详情</router-link>
      </b-col>
    </b-row>

    <!-- 分页导航 -->
    <b-pagination-nav :link-gen="linkGen" :number-of-pages="pageTotal" use-router></b-pagination-nav>
  </b-container>
</template>

<script>
import TypeNav from "../components/TypeNav";
export default {
  name: "Course",
  components: {
    TypeNav
  },
  data() {
    return {
      list: {},
      curPage: 1, //当前页码
      typeId: 0, //课程类型
      pageSize: 3, //单页记录数
      total: 0, //总记录数
      pageTotal: 1, //总页数
      items: [
        {
          text: "首页",
          to: { name: "home" }
        },
        {
          text: "全部课程",
          active: true
        }
      ]
    };
  },
  methods: {
    getCourses() {
      console.log(this.$route);
      this.$axios
        .get("/course/list", {
          params: {
            curPage: this.curPage,
            typeId: this.typeId
            // pageSize: this.$route.query.pageSize
          }
        })
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            this.list = res.data.data;
            // this.pageSize = res.data.data.pageSize;
            this.total = res.data.data.total;
            this.pageTotal = res.data.data.pageTotal;
          }
        })
        .catch(err => {
          console.error(err);
        });
    },
    //pageNum是当前页码
    linkGen(pageNum) {
      //请求地址:/course?curPage=1&typeId=1
      //在Vue中如何做页面跳转
      return { path: `/course?curPage=${pageNum}&typeId=${this.typeId}` };
    }
  },
  mounted() {
    //组件挂载完成后,给参数赋值
    this.curPage = this.$route.query.curPage;
    this.typeId = this.$route.query.typeId;
    this.getCourses();
  }
};
</script>

<style>
.course_list {
  border-bottom: 1px dotted #ccc;
}
.course_list > .information > h2 {
  font-size: 16px;
  font-weight: lighter;
  margin: 4px 0 16px;
}
.course_list > .information > p {
  font-size: 12px;
  color: #555555;
  margin: 0;
  height: 24px;
}
.breadcrumb-item + .breadcrumb-item::before {
  content: ">" !important;
}
</style>