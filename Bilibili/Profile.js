// 2024-10-12 21:02:25
const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/account/mine")) {
    if (obj.data && obj.data.sections_v2) {
        // 精简我的页面
        obj.data.sections_v2 = [obj.data.sections_v2[0]]
    }
}

$done({ body: JSON.stringify(obj) });
