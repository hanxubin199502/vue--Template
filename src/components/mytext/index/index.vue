<template>
 <div class="index">
    <div class="masklayer" v-show="masklayer"></div>
    <!-- 登录 -->
    <div class="bgimg">
        <div class="myname">
            <div class="mynameleft">
                <img src="../../../assets/t1@2x.png" alt class="portrait">
                <div>登录/注册></div>
            </div>
            <div class="mynameright">
                <div>可用积分:1234567489</div>
            </div>
        </div>
    </div>
    <!-- 话费兑换 -->
    <div class="bigbill">
        <div class="billexchange"><span>话费兑换</span></div>
        <div class="biglist">
            <div class="simbill">
                <ul>
                    <li>
                        <div class="bill">2元话费</div>
                        <div class="Integral">380积分</div>
                        <div class="exchange">立即兑换</div>
                    </li>
                    <li class="midbill">
                        <div class="bill">5元话费</div>
                        <div class="Integral">680积分</div>
                        <div class="exchange">立即兑换</div>
                    </li>
                    <li>
                        <div class="bill">10元话费</div>
                        <div class="Integral">1180积分</div>
                        <div class="exchange">立即兑换</div>
                    </li>
                </ul>
            </div>
            <div class="simbillone">
                <ul>
                    <li class="flex">
                        <div class="bigmeberleft">
                            <img src="../../../assets/pay.png" alt="">
                        </div>
                        <div class="bigmeberright">
                            <div class="moneybbill">20元话费</div>
                            <div class="integral">3120积分</div>
                            <div class="Exchange">立即兑换</div>
                        </div>
                    </li>
                    <li class="sidbill flex">
                        <div class="bigmeberleft">
                            <img src="../../../assets/pay.png" alt="">
                        </div>
                        <div class="bigmeberright">
                            <div class="moneybbill">5元话费</div>
                            <div class="integral">4220积分</div>
                            <div class="Exchange">立即兑换</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="prompt">温馨提示：支持移动 联通 电信全号段充值</div>
    </div>
    <!-- Q币兑换 -->
    <div class="bigbill">
        <div class="billexchange"><span>Q币兑换</span></div>
    </div>
 </div>
</template>

<script>
export default {
    name:'index',
  data () {
    return {
      masklayer:false,
    }
  },
  methods:{
    //   morefind(){
    //       this.$router.push({path:'./login'})
    //   },
  }
}

</script>
<style scoped>
.index{
    width: 100%;
    height: 100%;
}
.masklayer{
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
.bgimg{
  width: 100%;
  height: 2.2rem;
  background: url(../../../assets/my_image@2x.png) center, no-repeat;
  overflow: hidden;
}
.myname {
  width: 95%;
  margin: 0 auto;
  margin-top: 0.5rem;
  overflow: hidden;
}
.mynameleft {
  float: left;
  color: #fff;
  font-size: 0.5rem;
}
.mynameleft img {
  width: 1rem;
  height: 1rem;
  float: left;
  margin-top: 0.1rem;
  border-radius: 50%;
}
.mynameleft div {
  float: left;
  margin-top: 0.15rem;
  margin-left: 0.2rem;
}
.mynameright {
  width: 4rem;
  height: 1.15rem;
  line-height: 1rem;
  color: #fff;
  float: right;
  text-align: center;
}
.bigbill{
  height: 8.55rem;
  border: 1px solid #fff;
  margin: 0.5rem 0rem;
  background: #fff;
}
.billexchange{
  height: 0.5rem;
  border-left: 2px solid #cbcbcb;
  margin: 0.4rem 0.2rem;
  line-height: 0.5rem;
}
.billexchange span{
  color: #000;
  margin-left: 0.2rem;
}
.biglist{
  height: 6.25rem;
}
.prompt{
  height: 1rem;
  line-height: 1rem;
  margin: auto 0.2rem;
  color: #969393;
}
.simbill{
  height: 3rem;
  margin: 0rem 0.2rem;
}
.simbill ul{
    overflow: hidden;
    width: 100%;
    height: 3rem;
}
.simbill ul li{
    float: left;
    width: 31.3%;
    height: 2.95rem;
    border: 1px solid #969393;
    text-align: center;
}
.midbill{
    margin: 0 0.2rem;
}
.simbillone{
    height: 3rem;
    margin: 0.2rem 0.2rem;

}
.simbillone ul{
    overflow: hidden;
}
.simbillone ul li{
    float: left;
    width: 48.25%;
    height: 3rem;
    border: 1px solid #969393;
}
.sidbill{
    margin-left: 0.2rem;
}
.bill{
    color: red;
    font-size: 0.5rem;
    margin-top: 0.2rem;
}
.Integral{
    font-size: 0.45rem;
    margin-top: 0.15rem;
}
.exchange{
    width: 2rem;
    height: 0.8rem;
    border: 1px solid red;
    margin: 0.2rem 0.2rem;
    margin-left: 0.45rem;
    line-height: 0.8rem;
    background: red;
    color: #fff;
    font-size: 0.4rem;
}
.flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.bigmeberleft{
    width: 3rem;
    height: 3rem;
}
.bigmeberleft img{
    width: 2rem;
    height: 2rem;
    margin-top: 0.45rem;
    margin-left: 0.1rem;
}
.bigmeberright{
    width: 3rem;
    height: 3rem;
    text-align: center;
}
.moneybbill{
    font-size: 0.5rem;
    color: red;
    margin-top: 0.2rem;
}
.integral{
    font-size: 0.45rem;
    margin-top: 0.15rem;
}
.Exchange{
    width: 2rem;
    height: 0.8rem;
    border: 1px solid red;
    line-height: 0.8rem;
    background: red;
    color: #fff;
    font-size: 0.4rem;
    margin-top: 0.2rem;
    margin-left: 0.1rem;
}
</style>
