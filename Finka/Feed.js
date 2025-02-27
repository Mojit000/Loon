// 2024-10-12 21:02:25
const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/feed/v5")) {
    if (obj.data && obj.data.list) {
        // 过滤掉动态为彩虹A+会员推荐、官方企划、动态推广
        // obj.data.list = obj.data.list.filter(item => !(item.hasOwnProperty("postBoostInfo")));
        // obj.data.list = obj.data.list.filter(item => item.type !== "PostSpecialExposure");
        // obj.data.list = obj.data.list.filter(item => item.type !== "ShowCase");
        // obj.data.list = obj.data.list.filter(item => item.label !== "特别企划");
        // obj.data.list = obj.data.list.filter(item => item.postId !== "rl-nrAlJyA5PrCYDWVbkEQ");
        // obj.data.list = obj.data.list.filter(item => !item.postId.startsWith("card:"));
        // obj.data.list = obj.data.list.filter(item => item.postId !== "card:c98M_IKDhViVV58ZthqinA");
        officialType = ["PostSpecialExposure", "ShowCase"]
        obj.data.list.forEach((item, index) => {
            if (item.postId.startsWith("card:")) {
                obj.data.list.splice(index, 1);
            }
            if (item.type === "PostSpecialExposure") {
                item.list = null;
                obj.data.list.splice(index, 1);
            }
            if (item.type === "ShowCase") {
                obj.data.list.splice(index, 1);
            }
            if (item.boosting == true) {
                obj.data.list.splice(index, 1);
            }
            if (item.label === "特别企划") {
                obj.data.list.splice(index, 1);
            }
        });
    }
}

$done({ body: JSON.stringify(obj) });
