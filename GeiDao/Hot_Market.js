// 2024-10-12 21:02:25
const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/api/v1/home/display_zone?type=2")) {
    if (obj.data && obj.data.sections) {
        // 过滤掉tab为"语音房"的tab
        obj.data.sections = obj.data.sections.filter(item => item.biz_type !== "banners");
    }
}

$done({ body: JSON.stringify(obj) });

