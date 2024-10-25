// 2024-10-12 21:02:25
const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/live/tabConfig")) {
    if (obj.data && obj.data.tabList) {
        // 保留“热门”
        obj.data.tabList = obj.data.tabList.filter(info => info.tab == "热门");
        // 修改default值
        // if (obj.data.tabList[1]) obj.data.tabList[1].default = true;
        // if (obj.data.tabList[2) obj.data.tabList[2].default = false;
    }
}

if (url.includes("/recommend/live")) {
    if (obj.data && obj.data.moduleList) {
        obj.data.moduleList = obj.data.moduleList.filter(module => module.h == "热门");;
    }
}

if (url.includes("/live/view/v3")) {
    if (obj.data) {
        obj.data.activity2  = null;
        obj.data.activities  = null;
    }
}

$done({ body: JSON.stringify(obj) });
