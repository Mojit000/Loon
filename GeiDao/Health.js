// 2024-10-12 21:02:25
const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/give-health-api/home")) {
  if (obj.data) {
    // 精简“我的”
    obj.data.aggregations = null
    obj.data.banners = null
  }
}

$done({ body: JSON.stringify(obj) });
