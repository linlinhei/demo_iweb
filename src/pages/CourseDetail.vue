<template>
  <b-container>
    <b-breadcrumb :items="items" class="bg-transparent"></b-breadcrumb>
    <b-row v-if="list" class="mb-3">
      <b-col md="6" sm="12">
        <img :src="list.pic" alt style="width:100%;max-width:400px;" class="img-fluid" />
      </b-col>
      <b-col md="6" sm="12" class="course_info">
        <h2>{{list.title}}</h2>
        <ul class="list-unstyled">
          <li>讲师:{{list.tname}}</li>
          <li>课时:{{list.cLength}}</li>
          <li>上课时间:{{list.startTime}}</li>
          <li>
            开课地点:{{list.address}}
            <router-link to="/address">查看各校区地址</router-link>
          </li>
        </ul>
        <div v-if="list.price" class="mb-2">
          课程价格:
          <h4 class="text-danger d-inline-block">¥{{list.price.toFixed(2)}}</h4>
        </div>
        <div class="course_link">
          <span class="btn btn-warning add_cart" @click="addCart()">
            <em class="icon-cart"></em>加入购物车
          </span>
          <span class="btn btn-secondary ml-3" @click="addFavorite()">加入收藏</span>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <h2 class="title">
          <span>课程详情</span>
        </h2>
      </b-col>
      <b-col cols="12" v-html="list.details" class="details"></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "CourseDetail",
  data() {
    return {
      items: [
        {
          text: "首页",
          to: { name: "home" }
        },
        {
          text: "全部课程",
          active: true
        }
      ],
      list: {},
      cid: this.$route.query.cid
    };
  },
  methods: {
    //添加收藏
    addFavorite() {
      if (this.$global.isLogin) {
        this.$axios
          .post(
            "/favorite/add",
            this.$qs.stringify({
              cid: this.cid,
              uid: sessionStorage.getItem("uid")
            })
          )
          .then(res => {
            console.log(res);
            if (res.data.code == "200") {
              alert("添加收藏成功");
            } else if (res.data.code == "201") {
              alert("课程已收藏");
            }
          })
          .catch(err => {
            console.error(err);
          });
      } else {
        alert("请先登录");
        this.$router.push("/login");
      }
    },
    //添加购物车
    addCart() {
      if (!this.$global.isLogin) {
        alert("请先登录");
        this.$router.push("/login");
      } else {
        var uid = sessionStorage.getItem("uid");
        this.$axios
          .post(
            "/cart/add",
            this.$qs.stringify({
              cid: this.cid,
              uid
            })
          )
          .then(res => {
            console.log(res);
            if (res.data.code == "200") {
              alert("添加购物车成功");
              location.reload();
            }
          })
          .catch(err => {
            console.error(err);
          });
      }
    },
    getCourseDetails() {
      this.$axios
        .get("/course/detail", {
          params: {
            cid: this.$route.query.cid
          }
        })
        .then(res => {
          // console.log(res);
          if (res.data.code == 200) {
            this.list = res.data.data;
            //图片地址单独赋值,避免"Error: Cannot find module './undefined'"
            this.list.pic = require("@/assets/images/" + this.list.pic);
          }
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  mounted() {
    //查询课程详情
    this.getCourseDetails();
  }
};
</script>

<style>
.breadcrumb-item + .breadcrumb-item::before {
  content: ">" !important;
}
.icon-cart {
  display: inline-block;
  vertical-align: middle;
  width: 19px;
  height: 14px;
  background: url(~@/assets/images/iconlist.png) no-repeat 0 -500px;
  margin-right: 9px;
  margin-top: -4px;
  color: #fff;
}
.details {
  padding: 20px 40px;
  font-size: 14px;
  line-height: 28px;
  color: #666;
}
.details p {
  text-indent: 28px;
}
.course_info > h2 {
  font-size: 24px;
  font-weight: lighter;
}
.course_info > ul {
  background: #f5f5f5;
  width: 320px;
  height: 120px;
  color: #888;
  padding: 10px 0 0 14px;
  box-sizing: border-box;
  margin-top: 16px;
}
.course_info > ul > li > a {
  color: #f60;
  text-decoration: underline;
}
.course_info > ul > li > a:hover {
  color: #f30;
}
.course_info > p {
  color: #888;
}
.course_link > .add_cart {
  display: inline-block;
  vertical-align: middle;
  background: #f90;
  line-height: 34px;
  color: #fff;
  padding: 0 20px 0 16px;
  font-size: 16px;
  margin-right: 16px;
  cursor: pointer;
}
.course_link > .add_cart:hover {
  color: #fff;
}
</style>