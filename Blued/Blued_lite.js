// 2024-10-12 21:02:25
const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/ticktocks/users")) {
    if (obj.data) {
        // 仅保留体重小于75kg通讯录的动态
        obj.data = obj.data.filter(item => item.weight < 75);
    }
}

$done({ body: JSON.stringify(obj) });
