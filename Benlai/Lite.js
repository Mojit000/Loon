//https://api.benlai.com/v5/HomePage/Category?

// 2024-10-12 21:02:25
const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/HomePage/Category")) {
  if (obj.data && obj.data.suspension) {
    // 精简首页：悬浮按钮
    obj.data.suspension = null
  }
}

if (url.includes("/HomePage?deviceId")) {
  if (obj.data) {
    // 精简首页：顶部轮播，活动专区，优惠专区
    obj.data = obj.data.filter(item => item.name !== "DominateScreenV2")
    obj.data = obj.data.filter(item => item.name !== "Buyer")
    obj.data = obj.data.filter(item => item.name !== "Preferential")
    obj.data = obj.data.filter(item => item.name !== "Activity")
    
  }
}

if (url.includes("/AppSupport/BusinessConfig?areaId")) {
  if (obj.data && obj.data.bottom) {
    // 精简首页：Tab
    obj.data.keyWorld = ""
    // obj.data.bottom.buttons = obj.data.bottom.buttons.filter(button => button.name !== "C位已登录")
    obj.data.bottom.buttons[2].linkValue = "https://m.benlai.com/userHome/goPaynew"
  }
}

$done({ body: JSON.stringify(obj) });