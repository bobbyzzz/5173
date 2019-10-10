<template>
  <div class="top">
    <div class="top_box clearfix">
      <ul class="top_left" id="loginList">
        <li class="hello">您好！</li>
        <li class="login" >
          请
          <a target="_self" href="https://passport.5173.com/?returnUrl=http%3A//dlc2c.5173.com/">登录</a>
        </li>
        <li class="login-qq">
          <a
            title="QQ登录"
            class="qq_login f_666"
            href="https://passport.5173.com/Partner/LoginFrom?appNo=qq&amp;returnUrl=http%3A//dlc2c.5173.com/"
          >QQ登录</a>
        </li>
        <li class="register">
          <a target="_blank" href="https://passport.5173.com/User/Register">免费注册</a>
        </li>
      </ul>
      <!-- 右 -->
      <ul id="topRight" class="top_right">
        <li class="my5173">
          <a target="_self" href="http://user.5173.com/default.aspx" ref="nofollow" @mouseenter="enter()" @mouseleave="leave()">
            我的5173
            <s class="like_arrow_down black_arrow" style="margin-left:8px"></s>
            <span class="line">|</span>
          </a>
          <div class="sub_box" v-show="seen">
            <ul class="user_list">
              <li class>
                <a
                  target="_self"
                  href="http://trade.5173.com/html/buyer/orders.aspx"
                  ref="nofollow"
                >我购买的商品</a>
              </li>
              <li class>
                <a
                  target="_self"
                  href="http://trading.5173.com/list/viewmybizofferslist2.aspx"
                  ref="nofollow"
                >出售中的商品</a>
              </li>
              <li class="current">
                <a
                  target="_self"
                  href="http://trade.5173.com/html/seller/orders.aspx"
                  ref="nofollow"
                >我的订单管理</a>
              </li>
            </ul>
          </div>
        </li>
     
        <li id="markCart" class="mark_cart">
          <a href="http://trading.5173.com/list/viewmyshoppingcart.aspx" ref="nofollow" style=" width: 70px;" >
            我的收藏
            <em class="line">|</em>
          </a>
        </li>
        <li class>
          <a target="_blank" @mouseenter="enter3()" href="http://kf.5173.com" ref="nofollow">
            客服中心
            <s class="like_arrow_down black_arrow"></s>
            <em class="line">|</em>
          </a>
          <div class="sub_box" @mouseleave="leave3()" v-show="seen3">
            <ul class="support_list">
              <li class>
                <a target="_blank" href="http://sc.5173.com/" ref="nofollow">咨询中心</a>
              </li>
              <li class>
                <a target="_blank" href="http://safe.5173.com/" ref="nofollow">安全中心</a>
              </li>
              <li class>
                <a target="_blank" href="http://aid.5173.com/" ref="nofollow">帮助中心</a>
              </li>
              <li class="current">
                <a
                  target="_blank"
                  href="http://sc.5173.com/index.php?question/ask/"
                  ref="nofollow"
                >我要咨询</a>
              </li>
              <li class="current">
                <a
                  target="_blank"
                  href="http://sc.5173.com/?question/complain.html"
                  ref="nofollow"
                >我要投诉</a>
              </li>
              <li class>
                <a target="_blank" href="http://jubao.5173.com" ref="nofollow">廉政举报</a>
              </li>
            </ul>
          </div>
        </li>
        <li class style>
          <a @mouseenter="enter2()" >
            网站导航
            <s class="like_arrow_down black_arrow"></s>
            <em class="line">|</em>
          </a>
          <div class="sub_box map_box" v-show="seen2" @mouseleave="leave2()" style=" width: 191px;  display: flex;
                        flex-wrap: wrap;">
            <dl class="map_list">
              <dt>商品类</dt>
              <dd>
                <a class href="http://yxb.5173.com" target="_blank" ref="nofollow">金币交易</a>
              </dd>
              <dd>
                <a class href="http://gameid.5173.com" target="_blank" ref="nofollow">帐号交易</a>
              </dd>
              <dd>
                <a class href="http://zb.5173.com/" target="_blank" ref="nofollow">装备交易</a>
              </dd>
              <dd>
                <a class href="http://dlc2c.5173.com/" target="_blank" ref="nofollow">游戏代练</a>
              </dd>
              <dd>
                <a class href="http://dkjy.5173.com/" target="_blank" ref="nofollow">点卡交易</a>
              </dd>
              <dd>
                <a class href="http://custom.xubei.com/home" target="_blank" ref="nofollow">帐号租赁</a>
              </dd>
              <dd>
                <a class href="http://zzjy.5173.com/" target="_blank" ref="nofollow">棋牌游戏</a>
              </dd>
              <dd>
                <a class href="http://mall.5173.com/" target="_blank" ref="nofollow">金币商城</a>
              </dd>
            </dl>
            <dl class="map_list">
              <dt>服务类</dt>
              <dd>
                <a
                  class
                  href="http://gameid.5173.com/fworder/publish.aspx?u_ref=gameid_index"
                  target="_blank"
                  ref="nofollow"
                >资料修改</a>
              </dd>
              <dd>
                <a class href="http://sc.5173.com" target="_blank" ref="nofollow">投诉建议</a>
              </dd>
              <dd>
                <a class href="http://sc.5173.com" target="_blank" ref="nofollow">咨询中心</a>
              </dd>
              <dd>
                <a class href="http://safe.5173.com" target="_blank" ref="nofollow">安全中心</a>
              </dd>
              <dd>
                <a class href="http://redtrading.5173.com" target="_blank" ref="nofollow">5173助理</a>
              </dd>
              <dd>
                <a
                  class
                  href="http://mobile.5173.com/Subscription/Index"
                  target="_blank"
                  ref="nofollow"
                >短信服务</a>
              </dd>
              <dd>
                <a class href="http://cps.5173.com/" target="_blank" ref="nofollow">推广联盟</a>
              </dd>
            </dl>
            <dl class="map_list">
              <dt>其他</dt>
              <dd>
                <a class href="http://app.5173.com/" target="_blank" ref="nofollow">手机5173</a>
              </dd>
              <dd>
                <a class href="http://kaifu.5173.com/" target="_blank" ref="nofollow">页游开服</a>
              </dd>
            </dl>
          </div>
        </li>
        <li class>
          <a  @mouseenter="enter1()" >
            官方微信
            <s class="like_arrow_down black_arrow"></s>
            <em class="line">|</em>
          </a>
          <div class="sub_box sns_box" v-show="seen1" @mouseleave="leave1()">
            <div class="wx_Qr_code_list">
              <div class="wx_code"></div>
              <div class="wx_txt">关注5173微信</div>
            </div>
            <ul class="sns_list">
              <li>
                <a
                  class="icon_sina"
                  target="_blank"
                  href="http://e.weibo.com/1804287704/profile"
                  ref="nofollow"
                >新浪微博</a>
              </li>
              <li>
                <a
                  class="icon_tx"
                  target="_blank"
                  href="http://e.t.qq.com/good5173"
                  ref="nofollow"
                >腾讯微博</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="pay_shouji">
          <a href="http://app.5173.com"  style="color: #F60; " class="a1" target="_blank">
            <s class="icon_mob"></s>手机5173
          </a>
        </li>
      </ul> 
    </div> 


   <div class="header header_index950">
    <!-- 顶部登陆条+快捷菜单条 -->
    <!--网站Logo+四级联动搜索条-->
    <div class="header_box clearfix">
        <h1 class="logo">
            <a class="logo_5173" title="中国网络游戏服务网" href="http://www.5173.com/"></a> <a target="_blank" class="holiday_logo" href="http://app.5173.com/"></a>
        </h1>
        <!-- 四级联动游戏选择 -->
        <div class="game_select game_select_main clearfix" id="gameSelectV2">
            <form id="gsForm" method="get" class="clearfix">
            <div class="game_select_box" id="gameSelectBox">
                <ul class="tab_menu">
                    <li class="current"><a href="#multipleSearch">普通搜索</a></li>
                    <li><a href="#simpleSearch">简单搜索</a></li>
                </ul>
                <div class="tab_box clearfix" id="multipleSearch" style="display: block;">
              
                    <!-- 游戏选择菜单 -->
                    <ul class="gs_menu" id="gsMenu">
                        <li id="gs_game" class="gs_name arrow" title="选择游戏名称">游戏名称</li><li id="gs_plat" class="gs_plat arrow" title="选择游戏平台" style="display:none;">平台</li>
                        <li id="gs_operator" class="gs_operators arrow" title="选择运营商" style="display: none;">
                            运营商</li>
                        <li id="gs_area" class="gs_area arrow" title="选择游戏区">游戏区</li>
                        <li id="gs_server" class="gs_server arrow" title="选择游戏服务器">游戏服务器</li>
                        <li id="gs_type" class="gs_type arrow" title="选择分类">全部分类</li>
                      
                        <li class="gs_search_item">
                            <input class="gs_search_box holderfont" id="gsSearchBox" type="text" placeholder="请输入任意关键字" autocomplete="off">
                        </li>
                    </ul>
                 
                </div>
                <div class="tab_box clearfix tab_box_reset hide" id="simpleSearch" style="display: none;">
                    <div class="left_bg">
                    </div>
                    <div class="simple_search_box">
                        <input type="text" class="simple_search_input holderfont" id="simpleSearchInput" placeholder="关键字找游戏、搜区服、寻商品" autocomplete="off">
                    </div>
                    <div class="right_bg">
                    </div>
                </div>
            </div>
            <div class="btn_box">
                <input class="gs_search_btn" id="gsSearchBtn" type="submit" value="搜索"></div>
            </form>
            <!-- 游戏选择列表 -->
            <div class="gs_box" id="gsBox">
            </div>
            <!-- <ul class="hot_game_list"><li><a href="http://s.5173.com/dnf-0-0-0-0-0-0-0-0-a-a-a-a-a-0-0-0-0.shtml" onclick="__utmTrackEvent(encodeURIComponent('新版首页'),encodeURIComponent('热门游戏'),encodeURIComponent('地下城与勇士'));">地下城与勇士</a></li><li><a href="http://s.5173.com/search/858f058e63e74156a1d4dcf3239df20c-0-0-0-0-0-0-0-0-a-a-a-a-a-0-0-0-0.shtml" onclick="__utmTrackEvent(encodeURIComponent('新版首页'),encodeURIComponent('热门游戏'),encodeURIComponent('魔兽怀旧服'));">魔兽怀旧服</a></li><li><a href="http://s.5173.com/jx3-0-0-0-0-kb0ewi-0-0-0-a-a-a-a-a-0-0-0-0.shtml" onclick="__utmTrackEvent(encodeURIComponent('新版首页'),encodeURIComponent('热门游戏'),encodeURIComponent('剑侠情缘Ⅲ'));">剑侠情缘Ⅲ</a></li><li><a href="http://sy.5173.com/BizOffer/GoodsList?gameId=c646190d768f4ab6913ab9d2b8e1ac07" onclick="__utmTrackEvent(encodeURIComponent('新版首页'),encodeURIComponent('热门游戏'),encodeURIComponent('炉石传说'));">炉石传说</a></li><li><a href="http://sy.5173.com/BizOffer/GoodsList?gameId=76bae5aefec047e89bcb6aa4e417f138&amp;gameCateId=91831dc2fe6a42de8fc5cbe16168ae6e" onclick="__utmTrackEvent(encodeURIComponent('新版首页'),encodeURIComponent('热门游戏'),encodeURIComponent('王者荣耀'));">王者荣耀</a></li><li><a href="http://sy.5173.com/bizoffer/goodslist?PageIndex=1&amp;GameId=122db931f309470883948d66766f91c8&amp;GamePlatformId=&amp;GameCateId=5342e2f9499e456ca70538862fa181af&amp;GameAreaId=&amp;Keyword=&amp;Prices=&amp;TradingType=&amp;OrderBy=&amp;GameServerId=" onclick="__utmTrackEvent(encodeURIComponent('新版首页'),encodeURIComponent('热门游戏'),encodeURIComponent('阴阳师'));">阴阳师</a></li><li><a href="http://s.5173.com/wow-0-0-0-0-0-0-0-0-a-a-a-a-a-0-0-0-0.shtml" onclick="__utmTrackEvent(encodeURIComponent('新版首页'),encodeURIComponent('热门游戏'),encodeURIComponent('魔兽世界'));">魔兽世界</a></li><li><a href="http://s.5173.com/search/0ab3b27dc612483cb06dc7cb92c390ad-0-0-0-0-0-0-0-0-a-a-a-a-a-0-0-0-0.shtml" onclick="__utmTrackEvent(encodeURIComponent('新版首页'),encodeURIComponent('热门游戏'),encodeURIComponent('最终幻想14'));">最终幻想14</a></li></ul> -->
        </div>
    </div>
    <!-- <div class="main_nav">
        <ul class="main_nav_list">
            <li><a href="http://www.5173.com" target="_blank">首页</a><s class=""></s></li>
			<li><a href="http://yxb.5173.com" target="_blank">金币交易</a><s class=""></s></li>
			<li><a href="http://gameid.5173.com" target="_blank">帐号交易</a><s class=""></s></li>
			<li><a href="http://zb.5173.com" target="_blank">装备交易</a><s class=""></s></li>
			<li class="current"><a href="http://dlc2c.5173.com/" target="_blank">代练</a><s class=""></s></li>
			<li><a href="http://dkjy.5173.com" target="_blank">点卡交易</a><s class=""></s></li>
                        <li class="last_li"><a href="http://sy.5173.com/" target="_blank">手游交易</a><s class=""></s></li>
		        <li><a href="http://custom.xubei.com/gameList?gameId=1494" target="_blank">帐号租赁</a><s class=""></s></li>

        </ul>
    </div> -->
</div> 
  </div>

  
</template>
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script>
export default {
   data(){
   return{
    seen:false,
    seen1:false,
    seen2:false,
    seen3:false,
   }
  },
   methods:{
   enter(){
    this.seen = true;
   
   },
   leave(){
    this.seen = false;
   },
    enter1(){
    this.seen1 = true;
   
   },
   leave1(){
    this.seen1= false;
   },
    enter2(){
    this.seen2 = true;
   
   },
   leave2(){
    this.seen2 = false;
   },
    enter3(){
    this.seen3 = true;
   
   },
   leave3(){
    this.seen3= false;
   }
  }
}
</script>
<style  scoped>
@import "../static/css/base.css";
@import "../static/css/comm.css";
</style>