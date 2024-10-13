// 2024-10-12 21:02:25
const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/api/v1/home/display_zone?type=2")) {
    if (obj.data && obj.data.sections) {
        // 过滤掉热门商场顶部的轮播
        obj.data.sections = obj.data.sections.filter(item => item.biz_type !== "banners");
    }
}

if (url.includes("/api/v2/common/cms_custom_data?page_name=privilege")) {
    if (obj.data && obj.data.floors) {
        // 过滤掉热门商场顶部的轮播
        obj.data.floors = obj.data.floors.filter(item => item.resource_module_name !== "顶部轮播");
    }
}

$done({ body: JSON.stringify(obj) });

