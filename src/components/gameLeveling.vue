<template>
  <div class="app1">
    <div class="xn_content">
      <div class="xn_content-two">
        <img class="xn_us" src="../static/img/connexions.png" />
      </div>
    </div>
    <!-- 热门游戏代练 -->
    <div style="display: flex;">
      <div class="sidebar">
        <h3>热门游戏代练</h3>
        <ul id="f_leftgame">
          <li>
            <span>
              <img width="16px" height="16px" src="../static/img/mlid160.jpg" />
              <a
                class="a1"
                target="_blank"
                href="http://dlc2c.5173.com/main/defaultsale.aspx?ordertype=6&amp;gm=858f058e63e74156a1d4dcf3239df20c"
              >魔兽世界经典怀旧服(国服)</a>
            </span>
          </li>

          <li>
            <span>
              <img width="16px" height="16px" src="../static/img/RQKowF0-kpcAAAAAAADaWj6CNlY1..jpg" />
              <a
                class="a1"
                target="_blank"
                href="http://dlc2c.5173.com/main/defaultsale.aspx?ordertype=6&amp;gm=858f058e63e74156a1d4dcf3239df20c"
              >英雄联盟</a>
            </span>
          </li>
          <li>
            <span>
              <img width="16px" height="16px" src="../static/img/RQKowF0-hQgAAAAAAABT7h3abL40..jpg" />
              <a
                class="a1"
                target="_blank"
                href="http://dlc2c.5173.com/main/defaultsale.aspx?ordertype=6&amp;gm=858f058e63e74156a1d4dcf3239df20c"
              >魔兽世界(国服)</a>
            </span>
          </li>
          <li>
            <span>
              <img width="16px" height="16px" src="../static/img/RQKowF0-hOAAAAAAAACdSzTC5XI6..jpg" />
              <a
                class="a1"
                target="_blank"
                href="http://dlc2c.5173.com/main/defaultsale.aspx?ordertype=6&amp;gm=858f058e63e74156a1d4dcf3239df20c"
              >地下城与勇士</a>
            </span>
          </li>
          <li>
            <span>
              <img width="16px" height="16px" src="../static/img/RQKowF0_lCEAAAAAAAAirxTmyeQ6..jpg" />
              <a
                class="a1"
                target="_blank"
                href="http://dlc2c.5173.com/main/defaultsale.aspx?ordertype=6&amp;gm=858f058e63e74156a1d4dcf3239df20c"
              >王者荣耀</a>
            </span>
          </li>
        </ul>

        <p>
          <a href="http://dlc2c.5173.com/gm.aspx" target="_blank">更多游戏&gt;&gt;</a>
        </p>
      </div>
      <!-- 轮播 -->
      <div class="slider">
        <swiper :options="swiperOption">
          <swiper-slide>
            <img src="../static/img/RQKowF0mjFQAAAAAAAIN7wNOT5E5. (1).jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="../static/img/RQKowF1RA9oAAAAAAAGrI05FCik2..jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="../static/img/RAKowFs0VwsAAAAAAAG6SyxHs0Y0..jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="../static/img/RAKowF0UHRYAAAAAAAIPAVzC7P08..jpg" />
          </swiper-slide>
          <div class="swiper-pagination"></div>
        </swiper>
      </div>

      <!-- 右边 -->
      <div class="wantdl">
        <div class="stonc">
          <img src="../static/img/wzrylogo.png" />
        </div>
        <p class="quick-buy">快捷购买</p>
        <div style="display: flex;justify-content: center; align-items: center">
          <p class="p1">系统</p>
          <i-select
            :model.sync="model1"
            style="width:150px;margin-bottom: 10px;"
            placeholder="安卓-QQ"
          >
            <i-option v-for="(item, index) in cityList" :value="item.value" :key="index">{{item.label}}</i-option>
          </i-select>
        </div>
        <div style="display: flex;justify-content: center; align-items: center">
          <p class="p2">从</p>
          <i-select
           :model.sync="model1" 
           style="width:150px;margin-bottom: 10px;"
            placeholder="青铜">
            <i-option v-for="(item, index) in cityList1" :value="item.value" :key="index">{{item.label}}</i-option>
          </i-select>
        </div>
        <div style="display: flex;justify-content: center; align-items: center">
          <p class="p2">至</p>
          <i-select
           :model.sync="model1"
            style="width:150px;margin-bottom: 10px;"
             placeholder="王者">
            <i-option v-for="(item, index) in cityList1" :value="item.value" :key="index">{{item.label}}</i-option>
          </i-select>
        </div>
        <p class="fw dl_fr mt-20">
          代练费用
          <em class="price_ul dlbmoney">1.00</em>元
        </p>
        <p class="fw dl_fr mt-10">
          完成时间
          <em class="price_ul dlbhour">1.00</em>小时
        </p>
        <a class="goto_dl fl" style="margin-top:10px;" id="goNow1">立即下单</a>
      </div>
    </div>
    <!--代练商城  -->
    <div class="tuan">
      <div class="title">
        <h3>代练商城</h3>
        <span>
          <a href="#" class="left-j">
            <div class="swiper-button-prev">
              <em></em>
            </div>
          </a>

          <a href="#" class="right-j">
            <div class="swiper-button-next">
              <em></em>
            </div>
          </a>
        </span>
      </div>

      <div class="tuan-wrap no-bg">
        <div class="tuan-trund">
          <swiper :options="swiperOption1">
            <swiper-slide>
              <div class="tuan-detail">
                <dl>
                  <dt>
                    <a
                      target="_blank"
                      href="http://dlc2c.5173.com/sale/applyorder.aspx?id=DS190827-079582239"
                      class="tuan-img"
                    >
                      <img src="../static/img/RQKowF0-hQgAAAAAAABT7h3abL40..jpg" alt />
                    </a>
                    <a
                      target="_blank"
                      href="http://dlc2c.5173.com/sale/applyorder.aspx?id=DS190827-079582239"
                    >【魔兽商城★全能代练】怀旧服1-60级/装备飞行/大秘/1-120级35元</a>
                  </dt>
                  <dd>
                    <span>承诺完成时间：</span>
                    <em>999</em>天
                    <em>0</em>小时
                  </dd>
                  <dd>
                    <span>安全保证金：</span>0元
                  </dd>
                  <dd>
                    <span>商品价格：</span>
                    <strong>¥1</strong>
                  </dd>
                </dl>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="tuan-detail">
                <dl>
                  <dt>
                    <a
                      target="_blank"
                      href="http://dlc2c.5173.com/sale/applyorder.aspx?id=DS190827-079453710"
                      class="tuan-img"
                    >
                      <img src="../static/img/mlid160.jpg" alt />
                    </a>
                    <a
                      target="_blank"
                      href="http://dlc2c.5173.com/sale/applyorder.aspx?id=DS190827-079453710"
                    >110-120主线全清 开启世界任务</a>
                  </dt>
                  <dd>
                    <span>承诺完成时间：</span>
                    <em>999</em>天
                    <em>0</em>小时
                  </dd>
                  <dd>
                    <span>安全保证金：</span>0元
                  </dd>
                  <dd>
                    <span>商品价格：</span>
                    <strong>¥1</strong>
                  </dd>
                </dl>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="tuan-detail">
                <dl>
                  <dt>
                    <a
                      target="_blank"
                      href="http://dlc2c.5173.com/sale/applyorder.aspx?id=DS190827-180331449"
                      class="tuan-img"
                    >
                      <img src="../static/img/mlid160.jpg" alt />
                    </a>
                    <a
                      target="_blank"
                      href="http://dlc2c.5173.com/sale/applyorder.aspx?id=DS190827-180331449"
                    >【魔兽商城★全能代练】怀旧服1-60级/装备飞行/大秘/1-120级35元</a>
                  </dt>
                  <dd>
                    <span>承诺完成时间：</span>
                    <em>999</em>天
                    <em>0</em>小时
                  </dd>
                  <dd>
                    <span>安全保证金：</span>0元
                  </dd>
                  <dd>
                    <span>商品价格：</span>
                    <strong>¥1</strong>
                  </dd>
                </dl>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="tuan-detail">
                <dl>
                  <dt>
                    <a
                      target="_blank"
                      href="http://dlc2c.5173.com/sale/applyorder.aspx?id=DS190826-170766871"
                      class="tuan-img"
                    >
                      <img src="../static/img/RQKowF0-hZUAAAAAAAAg2DfFps84..jpg" alt />
                    </a>
                    <a
                      target="_blank"
                      href="http://dlc2c.5173.com/sale/applyorder.aspx?id=DS190826-170766871"
                    >-HK100商城 客户定制</a>
                  </dt>
                  <dd>
                    <span>承诺完成时间：</span>
                    <em>2</em>天
                    <em>0</em>小时
                  </dd>
                  <dd>
                    <span>安全保证金：</span>50元
                  </dd>
                  <dd>
                    <span>商品价格：</span>
                    <strong>¥300</strong>
                  </dd>
                </dl>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="tuan-detail">
                <dl>
                  <dt>
                    <a
                      target="_blank"
                      href="http://dlc2c.5173.com/sale/applyorder.aspx?id=DS190826-079338506"
                      class="tuan-img"
                    >
                      <img src="../static/img/RQKowF0-hQgAAAAAAABT7h3abL40..jpg" alt />
                    </a>
                    <a
                      target="_blank"
                      href="http://dlc2c.5173.com/sale/applyorder.aspx?id=DS190826-079338506"
                    >【魔兽商城★全能代练】怀旧服1-60级/装备飞行/大秘/1-120级35元</a>
                  </dt>
                  <dd>
                    <span>承诺完成时间：</span>
                    <em>999</em>天
                    <em>0</em>小时
                  </dd>
                  <dd>
                    <span>安全保证金：</span>0元
                  </dd>
                  <dd>
                    <span>商品价格：</span>
                    <strong>¥1</strong>
                  </dd>
                </dl>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <!-- 最新成交价 -->
    <div class="dl-room">
      <div class="title remen_tit">
        <h3 class="remen_zi">最新成交价</h3>
        <a
          href="http://dlc2c.5173.com/main/default.aspx?ordertype=5&amp;page=1&amp;pagesize=10"
          class="finalprice"
        >更多&gt;&gt;</a>
      </div>
      <div id="freeGoldCenter" class="dealmoney" >
        <!--freeGoldCenter-->

        <ul style="top: -345px;" class="inner-container" @mouseenter=" changeActive($event)" @mouseleave="removeActive($event)">
          <li>
            <a
              target="_blank"
              href="main/default.aspx?ordertype=5&amp;gm=858f058e63e74156a1d4dcf3239df20c"
            >
              <span class="sp">[魔兽世界经典怀旧服(国服)]</span>&nbsp;&nbsp;1-60级15天完成 法师
            </a>
            <em>3,000元</em>
          </li>

          <li>
            <a
              target="_blank"
              href="main/default.aspx?ordertype=5&amp;gm=858f058e63e74156a1d4dcf3239df20c"
            >
              <span class="sp">[魔兽世界经典怀旧服(国服)]</span>&nbsp;&nbsp;特价中：1-60级800元起！橙锤/风剑/安琪拉/R14大元帅/高阶督军
            </a>
            <em>300元</em>
          </li>

          <li>
            <a target="_blank" href="main/default.aspx?ordertype=5&amp;gm=880">
              <span class="sp">[魔兽世界(国服)]</span>&nbsp;&nbsp;【↓新客首单特惠★王宫↓】1-120★飞行★考古鹿☺PVP★灵魂兽
            </a>
            <em>155元</em>
          </li>

          <li>
            <a target="_blank" href="main/default.aspx?ordertype=5&amp;gm=880">
              <span class="sp">[魔兽世界(国服)]</span>&nbsp;&nbsp;手工特卖场：【AA000商城★全能代练】等级/飞行/王宫/大秘/PVP
            </a>
            <em>1,260元</em>
          </li>

          <li>
            <a
              target="_blank"
              href="main/default.aspx?ordertype=5&amp;gm=bb1f14dcc13548fc99e1dbc614b72a36"
            >
              <span class="sp">[跑跑卡丁车（手游版）]</span>&nbsp;&nbsp;【3天活动特价】排位丨等级丨日常丨驾照丨棉花糖丨超低价！
            </a>
            <em>400元</em>
          </li>

          <li>
            <a
              target="_blank"
              href="main/default.aspx?ordertype=5&amp;gm=858f058e63e74156a1d4dcf3239df20c"
            >
              <span class="sp">[魔兽世界经典怀旧服(国服)]</span>&nbsp;&nbsp;特价中：1-60级800元起！橙锤/风剑/安琪拉/R14大元帅/高阶督军
            </a>
            <em>4,600元</em>
          </li>

          <li>
            <a
              target="_blank"
              href="main/default.aspx?ordertype=5&amp;gm=858f058e63e74156a1d4dcf3239df20c"
            >
              <span class="sp">[魔兽世界经典怀旧服(国服)]</span>&nbsp;&nbsp;1-20级猎人接单开始
            </a>
            <em>200元</em>
          </li>

          <li>
            <a
              target="_blank"
              href="main/default.aspx?ordertype=5&amp;gm=858f058e63e74156a1d4dcf3239df20c"
            >
              <span class="sp">[魔兽世界经典怀旧服(国服)]</span>&nbsp;&nbsp;【↓新客首单特惠↓】1-60级★风剑★大元帅★高督★猎人宠物
            </a>
            <em>480元</em>
          </li>

          <li>
            <a
              target="_blank"
              href="main/default.aspx?ordertype=5&amp;gm=858f058e63e74156a1d4dcf3239df20c"
            >
              <span class="sp">[魔兽世界经典怀旧服(国服)]</span>&nbsp;&nbsp;怀旧服特卖场：【AA000商城★万元押金】手工1-60/风剑/橙锤/R14
            </a>
            <em>4,500元</em>
          </li>

          <li>
            <a
              target="_blank"
              href="main/default.aspx?ordertype=5&amp;gm=858f058e63e74156a1d4dcf3239df20c"
            >
              <span class="sp">[魔兽世界经典怀旧服(国服)]</span>&nbsp;&nbsp;特价中：1-60级800元起！橙锤/风剑/安琪拉/R14大元帅/高阶督军
            </a>
            <em>280元</em>
          </li>

          <li>
            <a
              target="_blank"
              href="main/default.aspx?ordertype=5&amp;gm=858f058e63e74156a1d4dcf3239df20c"
            >
              <span class="sp">[魔兽世界经典怀旧服(国服)]</span>&nbsp;&nbsp;怀旧服特价区：1-60级急速5天/橙锤/风剑/安琪拉/R14大元帅
            </a>
            <em>3,280元</em>
          </li>

          <li>
            <a
              target="_blank"
              href="main/default.aspx?ordertype=5&amp;gm=858f058e63e74156a1d4dcf3239df20c"
            >
              <span class="sp">[魔兽世界经典怀旧服(国服)]</span>&nbsp;&nbsp;36-60级 法师 30天 法师好刷
            </a>
            <em>666元</em>
          </li>

          <li>
            <a
              target="_blank"
              href="main/default.aspx?ordertype=5&amp;gm=858f058e63e74156a1d4dcf3239df20c"
            >
              <span class="sp">[魔兽世界经典怀旧服(国服)]</span>&nbsp;&nbsp;代练潜行者18到60级看要求接
            </a>
            <em>3,000元</em>
          </li>

          <li>
            <a
              target="_blank"
              href="main/default.aspx?ordertype=5&amp;gm=d2665a7bb03645bfb16fb999891258ea"
            >
              <span class="sp">[英雄联盟]</span>&nbsp;&nbsp;S9赛季lol代练★陪玩★排位★陪练★匹配★等级★
            </a>
            <em>61元</em>
          </li>

          <li>
            <a
              target="_blank"
              href="main/default.aspx?ordertype=5&amp;gm=858f058e63e74156a1d4dcf3239df20c"
            >
              <span class="sp">[魔兽世界经典怀旧服(国服)]</span>&nbsp;&nbsp;20-30
            </a>
            <em>300元</em>
          </li>

          <li>
            <a
              target="_blank"
              href="main/default.aspx?ordertype=5&amp;gm=858f058e63e74156a1d4dcf3239df20c"
            >
              <span class="sp">[魔兽世界经典怀旧服(国服)]</span>&nbsp;&nbsp;【↓新客首单特惠↓】1-60级★风剑★大元帅★高督★猎人宠物
            </a>
            <em>240元</em>
          </li>

          <li>
            <a
              target="_blank"
              href="main/default.aspx?ordertype=5&amp;gm=76bae5aefec047e89bcb6aa4e417f138"
            >
              <span class="sp">[王者荣耀]</span>&nbsp;&nbsp;星耀二1星到最强王者1星铭文等级：150无*代练时间：28.00小时
            </a>
            <em>63元</em>
          </li>

          <li>
            <a
              target="_blank"
              href="main/default.aspx?ordertype=5&amp;gm=858f058e63e74156a1d4dcf3239df20c"
            >
              <span class="sp">[魔兽世界经典怀旧服(国服)]</span>&nbsp;&nbsp;27.7到31级不排队不抢怪身上5蓝装
            </a>
            <em>150元</em>
          </li>

          <li>
            <a
              target="_blank"
              href="main/default.aspx?ordertype=5&amp;gm=858f058e63e74156a1d4dcf3239df20c"
            >
              <span class="sp">[魔兽世界经典怀旧服(国服)]</span>&nbsp;&nbsp;17-30级 好练 不排队
            </a>
            <em>400元</em>
          </li>

          <li>
            <a target="_blank" href="main/default.aspx?ordertype=5&amp;gm=880">
              <span class="sp">[魔兽世界(国服)]</span>&nbsp;&nbsp;【↓新客首单特惠★王宫↓】1-120★飞行★考古鹿☺PVP★灵魂兽
            </a>
            <em>398元</em>
          </li>
        </ul>
      </div>
    </div>
    <!-- 商家入驻 -->
    <div class="right-mod vs_type">
      <div class="vs_type1">
        <a target="_blank" href="http://dlc2c.5173.com/main/defaultsale.aspx?gm" alt="我要买套餐">
          <em class="s1"></em>
        </a>
        <a target="_blank" href="http://dlc2c.5173.com/main/neworder_step.aspx?gm=" alt="商家发布">
          <em class="s2"></em>
        </a>
      </div>
      <div class="vs_type2">
        <a target="_blank" href="http://dlc2c.5173.com/main/default.aspx" alt="我来接单">
          <em class="s3"></em>
          <span>我来接单</span>
        </a>
        <a target="_blank" href="http://dlc2c.5173.com/main/certifiedlistNew.aspx" alt="商家入驻">
          <em class="s4"></em>
          <span>商家入驻</span>
        </a>
      </div>
    </div>

    <!-- 热门工作室 -->
    <div class="recomm">
      <div class="dl-roo">
        <div class="title remen_tit">
          <h3 class="remen_zi">热门工作室</h3>
          <a id="blink" href="http://dlc2c.5173.com/sale/ad_bid_1.aspx" class="re_c_x">我要出现在这里</a>
        </div>
        <div class="dl-pal">
          <div class="remen_lun">
            <div class="trunder" id="trunder" style="position: absolute; width: 1420px; left: 0px;">
              <ul>
                <li>
                  <a
                    target="_blank"
                    href="http://dlc2c.5173.com/main/defaultsale.aspx?ordertype=6&amp;gm=858f058e63e74156a1d4dcf3239df20c"
                  >
                    <img src="../static/img/mlid160.jpg" />
                  </a>
                  <a
                    target="_blank"
                    href="http://dlc2c.5173.com/main/defaultsale.aspx?ordertype=6&amp;gm=858f058e63e74156a1d4dcf3239df20c"
                  >AA000</a>
                </li>

                <li>
                  <a
                    target="_blank"
                    href="http://dlc2c.5173.com/main/defaultsale.aspx?ordertype=6&amp;gm=1900"
                  >
                    <img src="../static/img/mhxy_01.jpg" />
                  </a>
                  <a
                    target="_blank"
                    href="http://dlc2c.5173.com/main/defaultsale.aspx?ordertype=6&amp;gm=1900"
                  >MH666</a>
                </li>

                <li>
                  <a
                    target="_blank"
                    href="http://dlc2c.5173.com/main/defaultsale.aspx?ordertype=6&amp;gm=1a0d128d66b24896bf7dcf7430083cf0"
                  >
                    <img src="../static/img/0011.jpg" />
                  </a>
                  <a
                    target="_blank"
                    href="http://dlc2c.5173.com/main/defaultsale.aspx?ordertype=6&amp;gm=1a0d128d66b24896bf7dcf7430083cf0"
                  >HY138</a>
                </li>

                <li>
                  <a
                    target="_blank"
                    href="http://dlc2c.5173.com/main/defaultsale.aspx?ordertype=6&amp;gm=7a7ca82cf6c043b9a57d816eac7bc7c1"
                  >
                    <img src="../static/img/ah3-4.jpg" />
                  </a>
                  <a
                    target="_blank"
                    href="http://dlc2c.5173.com/main/defaultsale.aspx?ordertype=6&amp;gm=7a7ca82cf6c043b9a57d816eac7bc7c1"
                  >AA947</a>
                </li>

                <li>
                  <a
                    target="_blank"
                    href="http://dlc2c.5173.com/main/defaultsale.aspx?ordertype=6&amp;gm=5dc78ec3580b419b9e1da50def40f678"
                  >
                    <img src="../static/img/qqfc0011.jpg" />
                  </a>
                  <a
                    target="_blank"
                    href="http://dlc2c.5173.com/main/defaultsale.aspx?ordertype=6&amp;gm=5dc78ec3580b419b9e1da50def40f678"
                  >HY138</a>
                </li>

                <li>
                  <a
                    target="_blank"
                    href="http://dlc2c.5173.com/main/defaultsale.aspx?ordertype=6&amp;gm=2fdfb7d3fcd84b97b1e702d02c9ee7a7"
                  >
                    <img src="../static/img/0708dl10 (1).jpg" />
                  </a>
                  <a
                    target="_blank"
                    href="http://dlc2c.5173.com/main/defaultsale.aspx?ordertype=6&amp;gm=2fdfb7d3fcd84b97b1e702d02c9ee7a7"
                  >HY138</a>
                </li>

                <li>
                  <a
                    target="_blank"
                    href="http://dlc2c.5173.com/main/defaultsale.aspx?ordertype=6&amp;gm=20c8bbc1b9794fc98bd96859624d4769"
                  >
                    <img src="../static/img/0012.jpg" />
                  </a>
                  <a
                    target="_blank"
                    href="http://dlc2c.5173.com/main/defaultsale.aspx?ordertype=6&amp;gm=20c8bbc1b9794fc98bd96859624d4769"
                  >HY138</a>
                </li>

                <li>
                  <a
                    target="_blank"
                    href="http://dlc2c.5173.com/main/defaultsale.aspx?ordertype=6&amp;gm=b7fc03af88ec46ac89e67f93817a94c2"
                  >
                    <img src="../static/img/012 (1).jpg" />
                  </a>
                  <a
                    target="_blank"
                    href="http://dlc2c.5173.com/main/defaultsale.aspx?ordertype=6&amp;gm=b7fc03af88ec46ac89e67f93817a94c2"
                  >HY138</a>
                </li>

                <li>
                  <a
                    target="_blank"
                    href="http://dlc2c.5173.com/main/defaultsale.aspx?ordertype=6&amp;gm=cc91276c877f46ceb2f98000cce03a02"
                  >
                    <img src="../static/img/qqzyhx0022.jpg" />
                  </a>
                  <a
                    target="_blank"
                    href="http://dlc2c.5173.com/main/defaultsale.aspx?ordertype=6&amp;gm=cc91276c877f46ceb2f98000cce03a02"
                  >HY138</a>
                </li>

                <li>
                  <a
                    target="_blank"
                    href="http://dlc2c.5173.com/main/defaultsale.aspx?ordertype=6&amp;gm=c646190d768f4ab6913ab9d2b8e1ac07"
                  >
                    <img src="../static/img/lscsd.jpg" />
                  </a>
                  <a
                    target="_blank"
                    href="http://dlc2c.5173.com/main/defaultsale.aspx?ordertype=6&amp;gm=c646190d768f4ab6913ab9d2b8e1ac07"
                  >HY138</a>
                </li>

                <li>
                  <a
                    target="_blank"
                    href="http://dlc2c.5173.com/main/defaultsale.aspx?ordertype=6&amp;gm=a0f93027884b4a1089650c1ba9fa9e69"
                  >
                    <img src="../static/img/10821.jpg" />
                  </a>
                  <a
                    target="_blank"
                    href="http://dlc2c.5173.com/main/defaultsale.aspx?ordertype=6&amp;gm=a0f93027884b4a1089650c1ba9fa9e69"
                  >HY138</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="rtw">
      <el-tabs value="fist1" type="card">
        <el-tab-pane label="代练公告" name="fist1">
          <div id="rtw1" class="right-tab-con" style="display: block;">
            <ul>
              <li>
                <a
                  target="_blank"
                  href="http://dlc2c.5173.com/main/Proclamation.aspx?id=50d2b8eab17842acb33be96dfd6ec7bb"
                >【公告】魔兽世界经典怀旧服</a>
                <span>[08/30]</span>
              </li>

              <li>
                <a
                  target="_blank"
                  href="http://dlc2c.5173.com/main/Proclamation.aspx?id=24c82198d54f46108b39583b94448d12"
                >【公告】关于王者荣耀S13赛</a>
                <span>[01/16]</span>
              </li>

              <li>
                <a
                  target="_blank"
                  href="http://dlc2c.5173.com/main/Proclamation.aspx?id=82b9e02d91c54e3fa5a8c1baf441cde2"
                >【公告】关于修改DNF需求单</a>
                <span>[07/23]</span>
              </li>

              <li>
                <a
                  target="_blank"
                  href="http://dlc2c.5173.com/main/Proclamation.aspx?id=945179e95366470c9f34fc499d67ae17"
                >【公告】关于部分游戏验收时</a>
                <span>[04/27]</span>
              </li>

              <li>
                <a
                  target="_blank"
                  href="http://dlc2c.5173.com/main/Proclamation.aspx?id=026b3686644d48b4bac6ad3396d1329c"
                >【公告】关于王者荣耀赛季末</a>
                <span>[04/18]</span>
              </li>
            </ul>
            <p>
              <a
                href="http://dlc2c.5173.com/main/gonggao_list.aspx?systype=1"
                target="_blank"
              >查看更多&gt;&gt;</a>
            </p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="代练协议" name="second">
          <div id="rtw2" class="right-tab-con" style="display: block;">
            <ul>
              <li>
                <a
                  target="_blank"
                  href="http://dlc2c.5173.com/main/Proclamation.aspx?id=44299612e5a7448ca33ace8781e95139"
                >【王者荣耀快捷购买协议】</a>
                <span>[12/27]</span>
              </li>

              <li>
                <a
                  target="_blank"
                  href="http://dlc2c.5173.com/main/Proclamation.aspx?id=75629c63042f491f9bf1c818757a4306"
                >【英雄联盟申诉处理规则】</a>
                <span>[03/15]</span>
              </li>

              <li>
                <a
                  target="_blank"
                  href="http://dlc2c.5173.com/main/Proclamation.aspx?id=65ea779bdd7b499e8322bbd1803f001f"
                >【玩家协议】</a>
                <span>[03/15]</span>
              </li>

              <li>
                <a
                  target="_blank"
                  href="http://dlc2c.5173.com/main/Proclamation.aspx?id=53e02e85729a41608d35287345d92868"
                >【工作室协议】</a>
                <span>[03/15]</span>
              </li>
            </ul>
            <p>
              <a
                href="http://dlc2c.5173.com/main/gonggao_list.aspx?systype=6"
                target="_blank"
              >查看更多&gt;&gt;</a>
            </p>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>

    <div class="right">
      <div class="q-a-con right-mod">
        <a href="http://redtrading.5173.com/DLWebUI/Client/DLSetup.exe" class="download_dl"></a>
        <p>
          <a
            target="_blank"
            href="http://dlc2c.5173.com/main/helplist.aspx?id=c95ceef57ef4439eba63611e16661286"
          >【代练订单管理软件】使用帮助</a>
        </p>
      </div>
    </div>
    <!--  -->
    <div class="recomm-set">
      <div class="title1">
        <h3>最新代练需求</h3>
        <span>
          <a href="http://dlc2c.5173.com/gm.aspx" target="_blank">更多游戏&gt;&gt;</a>
        </span>
      </div>
      <div>
        <el-tabs value="fist">
          <el-tab-pane label="英雄联盟" name="fist">
            <div id="mid-tab3-1" class="recom-tab-con" style="display: block;">
              <dl class="fl">
                <dt>
                  <span>商品名称</span>
                  <em>商品价格</em>
                </dt>

                <dd>
                  <span>
                    <a
                      title="单双人排位青铜2到黑铁2"
                      href="http://dlc2c.5173.com/main/applyorder.aspx?order_id=DL190903-170545418"
                      target="_blank"
                    >单双人排位青铜2到黑铁2</a>
                  </span>
                  <em>¥20</em>
                </dd>

                <dd>
                  <span>
                    <a
                      title="5v5匹配奇亚娜4级3分之1到5级成就"
                      href="http://dlc2c.5173.com/main/applyorder.aspx?order_id=DL190902-180803090"
                      target="_blank"
                    >5v5匹配奇亚娜4级3分之1到5级成就</a>
                  </span>
                  <em>¥25</em>
                </dd>

                <dd>
                  <span>
                    <a
                      title="无段位匹配净胜6场 肥单"
                      href="http://dlc2c.5173.com/main/applyorder.aspx?order_id=DL190903-180276602"
                      target="_blank"
                    >无段位匹配净胜6场 肥单</a>
                  </span>
                  <em>¥30</em>
                </dd>

                <dd>
                  <span>
                    <a
                      title="白银3到黄金3 来有实力的"
                      href="http://dlc2c.5173.com/main/applyorder.aspx?order_id=DL190830-180863565"
                      target="_blank"
                    >白银3到黄金3 来有实力的</a>
                  </span>
                  <em>¥70</em>
                </dd>

                <div style="clear: both; height: 0; width: 0; visibility: hidden;"></div>
              </dl>
            </div>
          </el-tab-pane>
          <el-tab-pane label="魔兽世界（国服）" name="second">
            <div id="mid-tab3-2" class="recom-tab-con" style="display: block;">
              <dl class="fl">
                <dt>
                  <span>商品名称</span>
                  <em>商品价格</em>
                </dt>

                <dd>
                  <span>
                    <a
                      title="到满级，主线清，fs，dh，2天"
                      href="http://dlc2c.5173.com/main/applyorder.aspx?order_id=DL190903-170761229"
                      target="_blank"
                    >到满级，主线清，fs，dh，2天</a>
                  </span>
                  <em>¥120</em>
                </dd>

                <dd>
                  <span>
                    <a
                      title="接单内详！看清楚再接!12小时内完成"
                      href="http://dlc2c.5173.com/main/applyorder.aspx?order_id=DL190903-079753725"
                      target="_blank"
                    >接单内详！看清楚再接!12小时内完成</a>
                  </span>
                  <em>¥40</em>
                </dd>

                <dd>
                  <span>
                    <a
                      title="飞行二章，声望很多了"
                      href="http://dlc2c.5173.com/main/applyorder.aspx?order_id=DL190903-170749616"
                      target="_blank"
                    >飞行二章，声望很多了</a>
                  </span>
                  <em>¥150</em>
                </dd>

                <dd>
                  <span>
                    <a
                      title="装等内详"
                      href="http://dlc2c.5173.com/main/applyorder.aspx?order_id=DL190903-079608131"
                      target="_blank"
                    >装等内详</a>
                  </span>
                  <em>¥200</em>
                </dd>

                <dd>
                  <span>
                    <a
                      title="争霸第二章飞行解锁，大秘低保2次"
                      href="http://dlc2c.5173.com/main/applyorder.aspx?order_id=DL190901-170618502"
                      target="_blank"
                    >争霸第二章飞行解锁，大秘低保2次</a>
                  </span>
                  <em>¥150</em>
                </dd>
              </dl>
              <dl class="fr">
                <dt>
                  <span>商品名称</span>
                  <em>商品价格</em>
                </dt>

                <dd>
                  <span>
                    <a
                      title="晚上9点到10点刷人"
                      href="http://dlc2c.5173.com/main/applyorder.aspx?order_id=DL190828-180595713"
                      target="_blank"
                    >晚上9点到10点刷人</a>
                  </span>
                  <em>¥10</em>
                </dd>

                <div style="clear: both; height: 0; width: 0; visibility: hidden;"></div>
              </dl>
            </div>
          </el-tab-pane>

          <el-tab-pane label="地下城与勇士" name="third">
            <div id="mid-tab3-3" class="recom-tab-con" style="display: block;">
              <dl class="fl">
                <dt>
                  <span>商品名称</span>
                  <em>商品价格</em>
                </dt>

                <dd>
                  <span>
                    <a
                      title="招代练稳定一单一结q3203307517"
                      href="http://dlc2c.5173.com/main/applyorder.aspx?order_id=DL190830-180818192"
                      target="_blank"
                    >招代练稳定一单一结q3203307517</a>
                  </span>
                  <em>¥5</em>
                </dd>

                <dd>
                  <span>
                    <a
                      title="代打肥单信誉接单 扣：312262827"
                      href="http://dlc2c.5173.com/main/applyorder.aspx?order_id=DL190902-170487287"
                      target="_blank"
                    >代打肥单信誉接单 扣：312262827</a>
                  </span>
                  <em>¥5</em>
                </dd>

                <dd>
                  <span>
                    <a
                      title="大诚打单群219339510招人"
                      href="http://dlc2c.5173.com/main/applyorder.aspx?order_id=DL190904-180622706"
                      target="_blank"
                    >大诚打单群219339510招人</a>
                  </span>
                  <em>¥5</em>
                </dd>

                <dd>
                  <span>
                    <a
                      title="无押金刷哈林企鹅裙910818117"
                      href="http://dlc2c.5173.com/main/applyorder.aspx?order_id=DL190904-170566689"
                      target="_blank"
                    >无押金刷哈林企鹅裙910818117</a>
                  </span>
                  <em>¥5</em>
                </dd>

                <dd>
                  <span>
                    <a
                      title="四叔90-95"
                      href="http://dlc2c.5173.com/main/applyorder.aspx?order_id=DL190904-180440944"
                      target="_blank"
                    >四叔90-95</a>
                  </span>
                  <em>¥20</em>
                </dd>
              </dl>
              <dl class="fr">
                <dt>
                  <span>商品名称</span>
                  <em>商品价格</em>
                </dt>

                <dd>
                  <span>
                    <a
                      title="1-95级，看要求接单"
                      href="http://dlc2c.5173.com/main/applyorder.aspx?order_id=DL190831-180798948"
                      target="_blank"
                    >1-95级，看要求接单</a>
                  </span>
                  <em>¥35</em>
                </dd>

                <div style="clear: both; height: 0; width: 0; visibility: hidden;"></div>
              </dl>
            </div>
          </el-tab-pane>

          <el-tab-pane label="逆战" name="fourth">
            <div id="mid-tab3-4" class="recom-tab-con" style="display: block;">
              <dl class="fl">
                <dt>
                  <span>商品名称</span>
                  <em>商品价格</em>
                </dt>

                <dd>
                  <span>
                    <a
                      title="包出冥王剑"
                      href="http://dlc2c.5173.com/main/applyorder.aspx?order_id=DL190903-180569278"
                      target="_blank"
                    >包出冥王剑</a>
                  </span>
                  <em>¥200</em>
                </dd>

                <dd>
                  <span>
                    <a
                      title="长白山炼狱100局 分数 世代 纪元之辰"
                      href="http://dlc2c.5173.com/main/applyorder.aspx?order_id=DL190903-170793895"
                      target="_blank"
                    >长白山炼狱100局 分数 世代 纪元之辰</a>
                  </span>
                  <em>¥200</em>
                </dd>

                <dd>
                  <span>
                    <a
                      title="包出炎阳弯弓,魔鲲套秒结"
                      href="http://dlc2c.5173.com/main/applyorder.aspx?order_id=DL190902-079707010"
                      target="_blank"
                    >包出炎阳弯弓,魔鲲套秒结</a>
                  </span>
                  <em>¥230</em>
                </dd>

                <dd>
                  <span>
                    <a
                      title="30局银河战舰英雄通关"
                      href="http://dlc2c.5173.com/main/applyorder.aspx?order_id=DL190903-170726578"
                      target="_blank"
                    >30局银河战舰英雄通关</a>
                  </span>
                  <em>¥35</em>
                </dd>

                <dd>
                  <span>
                    <a
                      title="能量剑  每天最低10局   魔鲲套"
                      href="http://dlc2c.5173.com/main/applyorder.aspx?order_id=DL190903-170509765"
                      target="_blank"
                    >能量剑 每天最低10局 魔鲲套</a>
                  </span>
                  <em>¥160</em>
                </dd>
              </dl>
              <dl class="fr">
                <dt>
                  <span>商品名称</span>
                  <em>商品价格</em>
                </dt>

                <dd>
                  <span>
                    <a
                      title="包出98分支皮肤，效率秒结"
                      href="http://dlc2c.5173.com/main/applyorder.aspx?order_id=DL190902-079792815"
                      target="_blank"
                    >包出98分支皮肤，效率秒结</a>
                  </span>
                  <em>¥60</em>
                </dd>

                <div style="clear: both; height: 0; width: 0; visibility: hidden;"></div>
              </dl>
            </div>
          </el-tab-pane>

          <el-tab-pane label="梦幻西游2" name="fourt">
            <div id="mid-tab3-5" class="recom-tab-con" style="display: block;">
              <dl class="fl">
                <dt>
                  <span>商品名称</span>
                  <em>商品价格</em>
                </dt>

                <dd>
                  <span>
                    <a
                      title="鼓浪屿两个号各跑200票商"
                      href="http://dlc2c.5173.com/main/applyorder.aspx?order_id=DL190901-079624991"
                      target="_blank"
                    >鼓浪屿两个号各跑200票商</a>
                  </span>
                  <em>¥240</em>
                </dd>

                <div style="clear: both; height: 0; width: 0; visibility: hidden;"></div>
              </dl>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <div class="right-mod q-a-con diwei">
      <div class="title">
        <h3>常见问题</h3>
        <span>
          <a href="http://dlc2c.5173.com/main/helplist.aspx" target="_blank">更多问题&gt;&gt;</a>
        </span>
      </div>

      <dl>
        <dt>
          <a
            target="_blank"
            href="http://dlc2c.5173.com/main/helplist.aspx?id=02960006800b491cba1741311d2864e3"
          >如何竞拍广告位</a>
        </dt>
        <dd>
          <a
            target="_blank"
            href="http://dlc2c.5173.com/main/helplist.aspx?id=02960006800b491cba1741311d2864e3"
          >竞价广告位仅面向商城工作室、认证工作室和信用等级达到3星及以上并</a>
        </dd>
      </dl>

      <dl>
        <dt>
          <a
            target="_blank"
            href="http://dlc2c.5173.com/main/helplist.aspx?id=515702a6fb184bf68f3600db3cea8cdf"
          >哪些信息会进行审核</a>
        </dt>
        <dd>
          <a
            target="_blank"
            href="http://dlc2c.5173.com/main/helplist.aspx?id=515702a6fb184bf68f3600db3cea8cdf"
          >1、工作室发布的套餐信息内容。2、玩家和工作室的双方留言内容。</a>
        </dd>
      </dl>

      <dl>
        <dt>
          <a
            target="_blank"
            href="http://dlc2c.5173.com/main/helplist.aspx?id=54817902774f4d5e878329d6ec21c45d"
          >如何联系工作室</a>
        </dt>
        <dd>
          <a
            target="_blank"
            href="http://dlc2c.5173.com/main/helplist.aspx?id=54817902774f4d5e878329d6ec21c45d"
          >联系工作室的入口有两个：1、我的5173→我的代练→我的代练信息</a>
        </dd>
      </dl>

      <dl>
        <dt>
          <a
            target="_blank"
            href="http://dlc2c.5173.com/main/helplist.aspx?id=86f58adb1fcb4e9095e92b23204facc0"
          >如何申请5173代练的QQ聊天功能</a>
        </dt>
        <dd>
          <a
            target="_blank"
            href="http://dlc2c.5173.com/main/helplist.aspx?id=86f58adb1fcb4e9095e92b23204facc0"
          >入驻工作室用户登录“我的5173”→选择“我是工作室”→点击“我</a>
        </dd>
      </dl>
    </div>

    <div class="footer">
      <ul class="footer_nav">
        <li>
          <a href="http://www.5173.com/About" target="_blank" rel="nofollow">关于我们</a>|
        </li>
        <li>
          <a href="http://www.5173.com/About/Partners" target="_blank" rel="nofollow">合作伙伴</a>|
        </li>
        <li>
          <a href="http://www.5173.com/About/Cooperation" target="_blank" rel="nofollow">合作联系</a>|
        </li>
        <li>
          <a href="http://www.5173.com/About/Protection" target="_blank" rel="nofollow">隐私保护</a>|
        </li>
        <li>
          <a href="http://sc.5173.com/" target="_blank" rel="nofollow">投诉建议</a>|
        </li>
        <li>
          <a href="http://www.5173.com/About/Copyright" target="_blank" rel="nofollow">免责声明</a>|
        </li>
        <li>
          <a href="http://www.5173.com/about/job" target="_blank" rel="nofollow">诚聘英才</a>
        </li>
      </ul>
      <p class="copyright" style="font-family:Arial">
        Copyright © 2002-2019 5173.com 版权所有
        <a
          href="http://beian.miit.gov.cn/"
          target="_blank"
          rel="nofollow"
        >ICP证：浙B2-20090127 （金华比奇网络技术有限公司）</a>
        <a
          href="http://images001.5173cdn.com/html/license/license.html"
          target="_blank"
          rel="nofollow"
        >【网络文化经营许可证】浙网文（2019）2614-264号</a>
      </p>
      <ul class="honor_list">
        <li class="item1">
          <a
            href="http://help.5173.com/winner100/winner100.html"
            target="_blank"
            rel="nofollow"
          >亚洲中小私营企业100强</a>
        </li>
        <li class="item4">
          <a href="http://help.5173.com/cxlm/01.html" target="_blank" rel="nofollow">反盗号绿色联盟</a>
        </li>
      </ul>
      <ul class="honor_list honor_list_2">
        <li class="item6">
          <a href="http://beian.miit.gov.cn/" target="_blank" rel="nofollow">工信部域名备案管理系统</a>
        </li>
        <li class="item3">
          <a
            href="http://www.315online.com.cn/member/315090077.html"
            target="_blank"
            rel="nofollow"
          >网上交易保障中心</a>
        </li>
        <li class="item7">
          <a
            href="http://images001.5173cdn.com/html/admin/v1/temporary.html"
            target="_blank"
            rel="nofollow"
          >企业法人营业执照</a>
        </li>
        <li class="item11">
          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33071802100279"
            target="_blank"
            rel="nofollow"
          >浙公网安备 33071802100279号</a>
        </li>
        <li class="item12">
          <a
            href="http://si.trustutn.org/info?sn=790161021024982138747&amp;certType=1"
            target="_blank"
            rel="nofollow"
          >品牌官网</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cityList: [
        {
          value: "beijing",
          label: "安卓-QQ"
        },
        {
          value: "shanghai",
          label: "安卓-微信"
        },
        {
          value: "shenzhen",
          label: "苹果-QQ"
        },
        {
          value: "hangzhou",
          label: "苹果-微信"
        }
      ],
      cityList1: [
        {
          value: "beijing",
          label: "青铜"
        },
        {
          value: "shanghai",
          label: "白银"
        },
        {
          value: "shenzhen",
          label: "钻石"
        },
        {
          value: "hangzhou",
          label: "星耀"
        },
        {
          value: "hangzhou",
          label: "王者"
        }
      ],
      model1: "",
      value1: 0,
      seen: false,
      swiperOption: {
        //swiper3
        autoplay: {
          downIcon: true,
          stopOnLastSlide: false,
          /* 触摸滑动后是否继续轮播 */
          disableOnInteraction: false
        },
        speed: 1000,
        effect: "fade"
      },
      swiperOption1: {
        //swiper3
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      
    };
  },
  methods: {
        changeActive($event) {
          $event.currentTarget.className = "";
        },
        removeActive($event) {
          $event.currentTarget.className = "inner-container";
        }
      },
};
</script>


<style  scoped>
@import "../static/css/base.css";
@import "../static/css/gameLeve.css";
</style>
