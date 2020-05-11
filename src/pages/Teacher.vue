<template>
  <b-container>
    <b-breadcrumb :items="items" class="bg-transparent"></b-breadcrumb>
    <h6>金牌讲师</h6>
    <div>
      <b-row class="my-5" v-for="(item, index) in list.data" :key="index">
        <b-col lg="2" md="3" sm="4">
          <img :src="require(`../assets/images/${item.tpic}`)" alt class="img-fluid" />
        </b-col>
        <b-col lg="10" md="9" sm="8">
          <h3>
            {{item.tname}}
            <span>{{item.maincourse}}</span>
          </h3>
          <div>
            <dl>
              <dt>工作经历:</dt>
              <dd>{{item.experience}}</dd>
            </dl>
            <dl>
              <dt>授课风格:</dt>
              <dd>{{item.style}}</dd>
            </dl>
          </div>
        </b-col>
      </b-row>
      <!-- <b-row class="my-5">
        <b-col lg="2" md="3" sm="4">
          <img src="../assets/images/cl.jpg" alt class="img-fluid" />
        </b-col>
        <b-col lg="10" md="9" sm="8">
          <h3>
            成亮
            <span>Web全栈开发</span>
          </h3>
          <div>
            <dl>
              <dt>工作经历:</dt>
              <dd>10年互联网开发经验， 精通HTML5，CSS3，js，vue，angualr 等网页前端技术及 php后端 开发；先后就职于多家 IT 互联网公司，曾任某网络公司技术主管，服务机构有首都师范大学、中国联通、中国石油、国家图书馆、中国摄影协会等。</dd>
            </dl>
            <dl>
              <dt>授课风格:</dt>
              <dd>讲课诙谐幽默，深处浅出，深得学生喜爱。</dd>
            </dl>
          </div>
        </b-col>
      </b-row>-->
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Teacher",
  data() {
    return {
      list: [],
      items: [
        {
          text: "首页",
          to: { name: "home" }
        },
        {
          text: "名师堂",
          active: true
        }
      ]
    };
  },
  methods: {
    getTeachers() {
      this.$axios
        .get("/teacher/list")
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            this.list = res.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    //组件挂载时,调用getTeachers()方法
    this.getTeachers();
  }
};
</script>
<style >
.breadcrumb-item + .breadcrumb-item::before {
  content: ">" !important;
}
</style>