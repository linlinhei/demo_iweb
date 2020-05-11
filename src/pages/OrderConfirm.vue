<template>
  <b-container>
    <b-breadcrumb :items="items" class="bg-transparent"></b-breadcrumb>
    <h2 class="order_title">
      选择收货地址
      <a href>管理收货地址</a>
    </h2>
    <div class="user_address">
      <ul class="list-unstyled">
        <li class="active">
          <span></span>韩小米 18512345678 北京 北京市 海淀区 万寿路文博大厦二楼达内科技
        </li>
        <li>
          <span></span>张大胖 18512345678 北京 北京市 海淀区 北三环东路中鼎大厦B座7层
        </li>
        <li>
          <span></span>王小明 18512345678 河北 石家庄市 桥西区 友谊南大街43号 翰林观天下 12栋 1-2001
        </li>
      </ul>
    </div>
    <h2 class="order_title">确认订单信息</h2>
    <div class="order_list">
      <h3 class="clearfloat">
        <span>商品信息</span>
        <span>单价</span>
        <span>数量</span>
        <span>小计</span>
      </h3>
      <ul class="list-unstyled">
        <li v-for="(item, index) in list" :key="index">
          <img :src="require(`@/assets/images/${item.pic}`)" alt />
          <h4>{{item.title}}</h4>
          <span>¥{{item.price.toFixed(2)}}</span>
          <em>{{item.count}}</em>
          <strong>&yen;{{(item.price*item.count).toFixed(2)}}</strong>
        </li>

        <!-- <li>
                <img src="img-course/01.png" alt=""/>
                <h4>JAVASCRIPT基础入门</h4>
                <span>799.00</span>
                <em>2</em>
                <strong>1368.00</strong>
            </li>
            <li>
                <img src="img-course/01.png" alt=""/>
                <h4>JAVASCRIPT基础入门</h4>
                <span>799.00</span>
                <em>2</em>
                <strong>1368.00</strong>
        </li>-->
      </ul>
    </div>
    <h2 class="order_title">
      备注信息：
      <input type="text" />
    </h2>
    <div class="order_sum">
      <ul class="list-unstyled">
        <li>
          <span>商品总金额：</span>
          <span id="priceSum">¥{{orderAmount.toFixed(2)}}</span>
        </li>
        <li>
          <span>配送费：</span>
          <span>¥12.0</span>
        </li>
        <li>
          <span>应付金额：</span>
          <strong id="paySum">¥{{(orderAmount+12).toFixed(2)}}</strong>
        </li>
        <li>
          <button type="button" @click="dosubmit">提交订单</button>
        </li>
      </ul>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "OrderConfirm",
  data() {
    return {
      items: [
        { text: "首页", to: { name: "home" } },
        { text: "订单确认", active: true }
      ],
      list: [],
      orderAmount: 0
    };
  },
  methods: {
    //提交订单接口的调用
    dosubmit() {
      this.$axios
        .post(
          "/order/add",
          this.$qs.stringify({
            uid: sessionStorage.getItem("uid"),
            orderAmount: sessionStorage.getItem("orderAmount"),
            selected: sessionStorage.getItem("orderConfirm")
          })
        )
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            alert("订单提交成功");
          }
        })
        .catch(err => {
          console.error(err);
        });
    },
    //获取确认订单商品信息
    getOrderConfirm() {
      // var selected=sessionStorage.getItem("selected");
      // this.list=JSON.parse(selected);
      this.list = JSON.parse(sessionStorage.orderConfirm);
      this.orderAmount = parseInt(sessionStorage.orderAmount);
      // console.log(typeof this.orderAmount);
    }
  },
  mounted() {
    this.getOrderConfirm();
  }
};
</script>

<style>
.breadcrumb-item + .breadcrumb-item::before {
  content: ">" !important;
}
.order_title {
  margin-top: 40px;
  font-size: 14px;
  color: #333;
  margin-bottom: 15px;
  font-weight: bold;
}
.order_title > a {
  float: right;
  font-weight: lighter;
  text-decoration: underline;
  color: #333;
}
.order_title > input {
  width: 800px;
  height: 32px;
  border: 1px solid #ccc;
}
.user_address {
  border: 1px solid #eee;
  background: #fff;
  padding: 20px 100px;
}
.user_address > ul > li {
  line-height: 34px;
  height: 34px;
  border: 1px solid transparent;
  font-size: 14px;
  color: #999;
  cursor: pointer;
}
.user_address > ul > li:hover {
  background: #f5f5f5;
}
.user_address > ul > li > span {
  float: left;
  width: 35px;
  height: 34px;
  margin-right: 50px;
}
.user_address > ul > li.active {
  background: #fffce4;
  border: 1px solid #ff6600;
}
.user_address > ul > li.active span {
  background: #ff6600 url(~@/assets/images/iconlist.png) no-repeat 7px -741px;
}
.order_list > h3 {
  line-height: 36px;
  border-top: 2px solid #ddd;
  border-bottom: 1px solid #ddd;
  color: #999;
  font-weight: lighter;
  font-size: 14px;
}
.order_list > h3 > span {
  display: inline-block;
  vertical-align: middle;
  text-align: center;
}
.order_list > h3 > span:nth-child(1) {
  width: 55%;
}
.order_list > h3 > span:nth-child(2) {
  width: 15%;
}
.order_list > h3 > span:nth-child(3) {
  width: 15%;
}
.order_list > h3 > span:nth-child(4) {
  width: 15%;
}
/*??????±í*/
.order_list > ul > li {
  padding: 20px 0px;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
}
.order_list > ul > li > img,
.order_list > ul > li > h4,
.order_list > ul > li > span,
.order_list > ul > li > em,
.order_list > ul > li > strong {
  display: inline-block;
  vertical-align: middle;
  text-align: center;
}
.order_list > ul > li > img {
  width: 20%;
  max-height: 150px;
  /* margin-right: 80px; */
}
.order_list > ul > li > h4 {
  padding-left: 20px;
  text-align: left;
  width: 35%;
  font-weight: lighter;
  font-size: 14px;
  margin-bottom: 0;
  height: 20px;
}
.order_list > ul > li > span {
  width: 15%;
}
.order_list > ul > li > em {
  width: 15%;
  font-style: normal;
}
.order_list > ul > li > strong {
  width: 15%;
  font-weight: bold;
  color: #f60;
}
.order_sum {
  margin-top: 40px;
  border-top: 1px solid #ddd;
  padding-top: 10px;
}
.order_sum > ul > li {
  line-height: 30px;
  text-align: right;
  font-size: 14px;
}
.order_sum > ul > li > span,
.order_sum > ul > li > strong {
  display: inline-block;
  text-align: right;
  width: 120px;
  font-style: normal;
}
.order_sum > ul > li > strong {
  color: #f60;
}
.order_sum > ul > li > button {
  width: 120px;
  height: 36px;
  background: #f63;
  font-size: 18px;
  color: #fff;
  border: none;
  margin-top: 10px;
}
.order_sum > ul > li > button:hover {
  background: #fc5a25;
}
</style>