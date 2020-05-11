<template>
  <div class="typeNav">
    <span class="mr-2">课程等级:</span>
    <router-link
      :to="{name:'course',query:{curPage:1,typeId:0}}"
      :class="typeId==0?'btn btn-success mx-2' :'btn mx-2'"
    >不限</router-link>
    <router-link
      :to="{name:'course',query:{curPage:1,typeId:item.tpid}}"
      v-for="(item, index) in list"
      :key="index"
      :class="typeId==item.tpid?'mx-2 btn btn-success':'mx-2 btn'"
    >{{item.tpname}}</router-link>
  </div>
</template>

<script>
export default {
  name: "TypeNav",
  data() {
    return {
      list: [],
      typeId: this.$route.query.typeId
    };
  },
  methods: {
    getTypes() {
      this.$axios
        .get("/type")
        .then(res => {
          // console.log(res);
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
    //将网址上的typeId赋值给vue变量
    // this.typeId = this.$route.query.typeId;
    this.getTypes();
  }
};
</script>

<style>
.typeNav {
  height: 80px;
  padding: 26px 16px;
  font-size: 16px;
  background-color: #f5f5f5;
  color: #555555;
}
.typeNav a {
  /* color: #555555; */
  text-decoration: none !important;
}
</style>