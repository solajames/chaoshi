// 当前这个模块：API进行统一管理
import request from './request';
import mockRequest from './mockAjax';

// 三级联动接口
// api/product/getBaseCategoryList   get    无参数
// 发请求:axios发请求返回结果Promise对象

export const reqCategoryList = ()=>request({url:'/product/getBaseCategoryList',method:'get'});
// 切记：当前函数执行需要把服务器返回结果返回

// 获取banner（Home首页轮播图接口）
export const reqGetBannerList = ()=>mockRequest.get('/banner')


// 获取floor数据
export const reqFloorList = ()=>mockRequest.get('/floor')

// 获取搜索模块数据  地址:/api/list  请求方式:post  参数:需要带参数
// 当前的函数需要接收外部传递参数(当前这个接口,给服务器传递参数params,至少是一个空对象)
export const reqGetSearchInfo = (params)=>request({url:"/list",method:"post",data:params});


// 获取产品详情信息的接口  URL:/api/item/{ skuId }   请求方式：GET
export const reqGoodsInfo = (skuId) => request({url:`/item/${skuId}`, method:'get'});

// 将产品添加到购物车中（获取更新某一个产品的个数）
// /api/cart/addToCart/{ skuId }/{ skuNum }      POST
export const reqAddOrUpdateShopCart = (skuId,skuNum)=>request({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'POST'})

// 获取购物车列表数据接口
// URL:/api/cart/cartList   method:get
export const reqCartList = ()=>request({url:'/cart/cartList',method:'get'});

// 删除购物产品的接口
// URL:/api/cart/deleteCart/{skuId}    method:DELETE
export const reqDeletCartById = (skuId)=>request({url:`/cart/deleteCart/${skuId}`,method:'DELETE'});

// 修改商品的选中状态
// URL:/api/cart/checkCart/{skuId}/{isChecked}   method:GET
export const reqUpDateCheckedById = (skuId,isChecked)=>request({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'GET'});

// 获取验证码
// URL:/api/user/passport/sendCode/{phone}     method:GET
export const reqGetCode = (phone)=>request({url:`/user/passport/sendCode/${phone}`,method:'GET'});

// 注册
// URL:/api/user/passport/register     method:POST    phone code password
export const reqUserRegister = (data)=>request({url:'/user/passport/register',data,method:'POST'});

// 登录
// URL:/api/user/passport/login     method:POST    phone passsword
export const reqUserLogin = (data)=>request({url:'/user/passport/login',data,method:'POST'});

// 获取用户信息【需要带着用户的token向服务器要用户信息】
// URL:/api/user/passport/auth/getUserInfo     method:GET
export const reqUserInfo = ()=>request({url:'/user/passport/auth/getUserInfo',method:"GET"});

// 退出登录
// URL:/api/user/passport/logout       method:GET
export const reqLogout = ()=> request({url:'/user/passport/logout',method:'GET'});


// 获取用户地址信息
// URL:/api/user/userAddress/auth/findUserAddressList             method:GET
export const reqAddressInfo = ()=>request({url:'/user/userAddress/auth/findUserAddressList',method:'GET'})

// 获取商品清单
// URL:/api/order/auth/trade            method:get
export const reqOrderInfo = ()=>request({url:'/order/auth/trade',method:'GET'})

// 提交订单的结果
// URL:/api/order/auth/submitOrder?tradeNo={tradeNo}               method:POST
export const reqSubmitOrder = (tradeNo,data)=>request({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'POST'})

// 获取支付信息
// URL:/api/payment/weixin/createNative/{orderId}         method:GET
export const reqPayInfo = (orderId)=>request({url:`/payment/weixin/createNative/${orderId}`,method:'GET'})

// 获取支付订单状态
// URL:/api/payment/weixin/queryPayStatus/{orderId}              method:GET
export const reqPayStaus = (orderId)=>request({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'GET'})

// 获取个人中心的数据
// URL:/api/order/auth/{page}/{limit}           method:GET
export const reqMyOrderList = (page,limit)=>request({url:`/order/auth/${page}/${limit}`,method:"GET"})