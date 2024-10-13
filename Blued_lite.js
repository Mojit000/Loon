// 2024-10-12 21:02:25
const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/ticktocks/users")) {
    if (obj.data) {
        // 体重大于75kg，年龄在28-40岁通讯录的动态
        obj.data.list = obj.data.filter(item => item.weight < 75 && item.age > 28 && item.age < 40);
    }
}

$done({ body: JSON.stringify(obj) });