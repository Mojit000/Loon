// 2024-10-12 21:02:25
const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/feed/v5")) {
    if (obj.data && obj.data.list) {
        // 过滤掉动态为彩虹A+会员推荐
        obj.data.list = obj.data.list.filter(item => !(item.hasOwnProperty("postBoostInfo")));
        obj.data.list = obj.data.list.filter(item => item.label !== "特别企划");
    }
}

$done({ body: JSON.stringify(obj) });
