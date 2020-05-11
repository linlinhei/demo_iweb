<template>
  <b-container class="my-5">
    <b-row>
      <b-col md="8" class="py-2">
        <b-row>
          <b-col cols="3">
            <h5>关于i前端</h5>
            <ul class="list-unstyled">
              <li><a href="">发展历程</a></li>
              <li><a href="">管理团队</a></li>
              <li><a href="">企业文化</a></li>
              <li><a href="">加入我们</a></li>
            </ul>
          </b-col>
          <b-col cols="3">
            <h5>新手帮助</h5>
            <ul class="list-unstyled">
              <li><a href="">学员账号</a></li>
              <li><a href="">选课流程</a></li>
              <li><a href="">网报流程</a></li>
              <li><a href="">上课地点</a></li>
            </ul>
          </b-col>
          <b-col cols="3">
            <h5>常见问题</h5>
            <ul class="list-unstyled">
              <li><a href="">如何注册</a></li>
              <li><a href="">如何搜课</a></li>
              <li><a href="">如何报名</a></li>
              <li><a href="">如何缴费</a></li>
            </ul>
          </b-col>
          <b-col cols="3">
            <h5>联系我们</h5>
            <ul class="list-unstyled">
              <li><a href="">校区电话</a></li>
              <li><a href="">意见建议</a></li>
              <li><a href="">联系邮箱</a></li>
            </ul>
          </b-col>
        </b-row>
      </b-col>
      <b-col md="4" class="py-5">
        <dt id="hotline"></dt>
        <dd>客服热线</dd>
        <dd>4008-220-220 (9:00-24:00)</dd>
      </b-col>
    </b-row>
    <!-- 页脚的下半部分 -->
    <b-row>
      <b-col cols="12">
        <ul class="list-inline text-center">
          <li class="list-inline-item">
            Copyright © 2016 iqianduan.com, All Rights Reserved 版权所有
          </li>
        </ul>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <ul class="list-inline text-center">
          <li class="list-inline-item">北京前端教育科技有限公司</li>
          <li class="list-inline-item">京ICP备123456号-1</li>
          <li class="list-inline-item">京公网安备110180201608号</li>
        </ul>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style>
#hotline {
  float: left;
  width: 40px;
  height: 39px;
  background: url("~@/assets/images/iconlist.png") no-repeat 0 -410px;
  margin: 6px 10px 0 0;
}
</style>
