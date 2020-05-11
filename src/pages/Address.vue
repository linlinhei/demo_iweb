<template>
  <b-container>
    <b-breadcrumb :items="items" class="bg-transparent"></b-breadcrumb>
    <b-row class="py-3">
      <b-col cols="3">
        <div class="icon-location"></div>
      </b-col>
      <b-col cols="9">
        <dl>
          <dt>北京中关村中心</dt>
          <dd>校区地址：北京市海淀区北三环西路甲18号（大钟寺附近）中鼎大厦B座7层</dd>
          <dd>咨询电话：010-62130963</dd>
          <dd>邮编：100098</dd>
        </dl>
      </b-col>
    </b-row>
    <b-row class="py-3">
      <b-col cols="3">
        <div class="icon-location"></div>
      </b-col>
      <b-col cols="9">
        <dl>
          <dt>北京中关村中心</dt>
          <dd>校区地址：北京市海淀区北三环西路甲18号（大钟寺附近）中鼎大厦B座7层</dd>
          <dd>咨询电话：010-62130963</dd>
          <dd>邮编：100098</dd>
        </dl>
      </b-col>
    </b-row>
    <b-row class="py-3">
      <b-col cols="3">
        <div class="icon-location"></div>
      </b-col>
      <b-col cols="9">
        <dl>
          <dt>北京广渠门中心</dt>
          <dd>校区地址：北京市东城区广渠门东广渠家园25号楼启达大厦一层</dd>
          <dd>咨询电话：15321130620</dd>
          <dd>邮编：100010</dd>
        </dl>
      </b-col>
    </b-row>
    <b-row class="py-3">
      <b-col cols="3">
        <div class="icon-location"></div>
      </b-col>
      <b-col cols="9">
        <dl>
          <dt>北京北京清华园中心</dt>
          <dd>校区地址：北京市海淀区花园路小关街120号万盛商务会馆A区三层</dd>
          <dd>咨询电话：010-82676916</dd>
          <dd>邮编：100088</dd>
        </dl>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "首页",
          to: { name: "home" }
        },
        {
          text: "校区",
          active: true
        }
      ]
    };
  },
  name: "Address"
};
</script>

<style>
.icon-location {
  width: 31px;
  height: 47px;
  background: url(~@/assets/images/iconlist.png) no-repeat 0 -530px;
  margin: 40px auto;
}
.breadcrumb-item + .breadcrumb-item::before {
  content: ">" !important;
}
</style>