// 2024-10-12 21:02:25
const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

// https://japi.233.com/ess-ucs-api/doz/members/userInfo?platform=3&userId=62228486
if (url.includes("/ess-ucs-api/doz/members/userInfo?platform=3&userId=62228486")) {
  if (obj.data) {
    // 修改用户名显示
    obj.data.userName = "Mojit0"
    obj.data.appData.userName = "Mojit0"
  }
}
// https://japi.233.com/ess-ecms-api/advert/do/advlist?classId=198&money=2980&seatIdstr=623
if (url.includes("/ess-ecms-api/advert/do/advlist?") && !url.includes("seatIdstr=77")) {
  if (obj.data) {
    // 去广告
    obj.status = false
    obj.code = 404
    obj.data = null
  }
}
// https://japi.233.com/ess-ecms-api/newsInfo/do/homepage-hot?domain=aq
if (url.includes("/ss-ecms-api/newsInfo/do/homepage-hot?domain=aq")) {
  if (obj.data) {
    // 删除考试热点
    obj.data = null
  }
}
$done({ body: JSON.stringify(obj)
});
