// 2024-10-12 21:02:25
const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/live/tabConfig")) {
    if (obj.data && obj.data.tabList) {
        // 过滤掉tab为"语音房"的tab
        obj.data.tabList = obj.data.tabList.filter(info => info.tab !== "语音房");
        
        // 修改default值
        if (obj.data.tabList[1]) obj.data.tabList[1].default = true;
        if (obj.data.tabList[2]) obj.data.tabList[2].default = false;
    }
}

$done({ body: JSON.stringify(obj) });
