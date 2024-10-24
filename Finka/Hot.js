// 2024-10-12 21:02:25
const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/post/rcmd/list")) {
    if (obj.data && obj.data.list && obj.data.tagList) {
        // 过滤热门：官方推荐，顶部Tab
        obj.data.list = obj.data.list.filter(item => !(item.hasOwnProperty("tabList")));
        obj.data.tagList = null
    }
}

$done({ body: JSON.stringify(obj) });
