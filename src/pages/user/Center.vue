<template>
  <b-container>
    <b-breadcrumb :items="items" class="bg-transparent"></b-breadcrumb>
    <b-row>
      <b-col cols="3">
        <b-list-group>
          <b-list-group-item active>
            <router-link to class="text-light">个人中心首页</router-link>
          </b-list-group-item>
          <b-list-group-item>
            <router-link to>我的课程</router-link>
          </b-list-group-item>
          <b-list-group-item>
            <router-link to>我的收藏</router-link>
          </b-list-group-item>
          <b-list-group-item>
            <router-link to>个人资料</router-link>
          </b-list-group-item>
          <b-list-group-item>
            <router-link to>修改密码</router-link>
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col cols="9">
        <div class="user_info">
          <h2>{{uname}}，您好~欢迎来到会员中心！</h2>
          <p>
            <span>邮箱：{{uname}}</span>
            <span>手机号：18501051518</span>
            <router-link to>修改资料</router-link>
          </p>
          <p>您在i前端共购买过10门课程，其中已学完3门，剩余7门。</p>
        </div>
        <h5 class="page-header py-3">
          <span>我购买的课程</span>
        </h5>
        <b-row class="py-2">
          <b-col cols="4" v-for="(item, index) in orderList" :key="index">
            <router-link :to="{name:'course_detail',query:{cid:item.cid}}">
              <img :src="require(`@/assets/images/${item.pic}`)" alt class="img-fluid" />
            </router-link>
            <router-link
              :to="{name:'course_detail',query:{cid:item.cid}}"
              class="courseTitle"
            >{{item.title}}</router-link>
          </b-col>
        </b-row>
        <h5 class="page-header py-3">
          <span>我的收藏</span>
        </h5>
        <b-row class="py-2">
          <b-col cols="4" v-for="(item, index) in favoriteList" :key="index">
            <router-link :to="{name:'course_detail',query:{cid:item.cid}}">
              <img :src="require(`@/assets/images/${item.pic}`)" alt class="img-fluid" />
            </router-link>
            <router-link
              :to="{name:'course_detail',query:{cid:item.cid}}"
              class="courseTitle"
            >{{item.title}}</router-link>
          </b-col>
        </b-row>
        <!-- <ul class="clearfloat">
          <li>
            <a href>
              <div class="uc_img">
                <img src="@/assets/images/img-course/02.png" alt />
                <span>未学习</span>
              </div>
              <p>HTML5基础入门</p>
            </a>
          </li>
          <li>
            <a href>
              <div class="uc_img">
                <img src="@/assets/images/img-course/03.png" alt />
                <span class="history">已学完</span>
              </div>
              <p>HTML5基础入门</p>
            </a>
          </li>
        </ul>
        <h2 class="title3">
          <span>我的收藏</span>
        </h2>
        <ul class="clearfloat">
          <li>
            <a href>
              <div class="uc_img">
                <img src="@/assets/images/img-course/01.png" alt />
              </div>
              <p>HTML5基础入门</p>
            </a>
          </li>
          <li>
            <a href>
              <div class="uc_img">
                <img src="@/assets/images/img-course/02.png" alt />
              </div>
              <p>HTML5基础入门</p>
            </a>
          </li>
          <li>
            <a href>
              <div class="uc_img">
                <img src="@/assets/images/img-course/03.png" alt />
              </div>
              <p>HTML5基础入门</p>
            </a>
          </li>
        </ul>-->
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Center",
  data() {
    return {
      items: [
        {
          text: "首页",
          to: { name: "home" }
        },
        {
          text: "用户中心",
          active: true
        }
      ],
      uname: sessionStorage.getItem("uname"),
      orderList: [],
      favoriteList: []
    };
  },
  methods: {
    //获取收藏列表
    getFavoriteList() {
      this.$axios
        .post("/favorite/list", "uid=" + sessionStorage.getItem("uid"))
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            this.favoriteList = res.data.data;
          }
        })
        .catch(err => {
          console.error(err);
        });
    },

    //获取用户订单列表
    getOrderList() {
      this.$axios
        .post("/order/list", "uid=" + sessionStorage.getItem("uid"))
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            this.orderList = res.data.data;
          }
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  mounted() {
    this.getOrderList();
    this.getFavoriteList();
  }
};
</script>

<style>
.container a:hover {
  text-decoration: none;
  color: #555;
}
.breadcrumb-item a {
  color: #6c757d !important;
}
.breadcrumb-item + .breadcrumb-item::before {
  content: ">" !important;
}
.page-header {
  border-bottom: 2px solid #ddd;
}
.courseTitle {
  display: block;
  margin: 10px 0;
  text-decoration: none;
  color: #555;
  text-align: center;
}
.list-group-item a {
  display: block;
  color: #555;
  font-size: 14px;
  text-decoration: none;
  text-align: center;
}
.list-group-item.active {
  background-color: #28a745 !important;
  border-color: #28a745 !important;
}
.navbar .backhome {
  float: right;
  color: #fff;
  font-size: 15px;
  line-height: 40px;
  text-decoration: underline;
  margin-right: 35px;
}
.user {
  margin-top: 30px;
}
.user_side {
  float: left;
  width: 200px;
  min-height: 420px;
  border-top: 2px solid #99c46c;
  background: #f5f5f5;
}
.user_side ul li {
  text-align: center;
  line-height: 40px;
  font-size: 14px;
}
.user_side ul li:hover {
  background: #eee;
  cursor: pointer;
}
.user_side ul li.active {
  background: #b3db83;
  color: #fff;
}

.user_main {
  float: right;
  width: 740px;
}
.user_info {
  margin-bottom: 40px;
}
.user_info > h2 {
  font-size: 18px;
  font-weight: lighter;
  line-height: 30px;
}
.user_info > p {
  margin-bottom: 25px;
  font-size: 14px;
}
.user_info > p > span {
  font-size: 12px;
  color: #999;
  padding-right: 18px;
}
.user_info > p > a {
  font-size: 12px;
  color: #f60;
  text-decoration: underline;
}
</style>