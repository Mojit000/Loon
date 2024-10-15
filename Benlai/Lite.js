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
    // 精简首页：轮播
    obj.data = obj.data.filter(item => item.title !== "霸屏区域2.0")
  }
}

//https://api.benlai.com/v5/AppSupport/BusinessConfig?
if (url.includes("/v5/AppSupport/BusinessConfig?")) {
  if (obj.data && obj.data.bottom) {
    // 精简首页：Tab
    obj.data.keyWorld = ""
    obj.data.bottom = obj.data.bottom.filter(item => item.siteNo !== 3)
  }
}
$done({ body: JSON.stringify(obj) });