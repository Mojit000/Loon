// 2024-10-12 21:02:25
const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);
const new_health_app = [
      {
        "sort": 3,
        "link_url": "https://openapi.guanaitong.com/inner/trustLogin?redirectUrl=https://xintan.guanaitong.com/user/gatauth",
        "id": null,
        "child_app_id": null,
        "title": "心理测评",
        "type": null,
        "img_url": "https://img1.guanaitong.com/grus-gfs/product/giveapp-mgr/by-days/2024-04-07/dc3c2479daaa72289d8e546a0b737556.png",
        "desc": null
      },
      {
        "sort": 5,
        "link_url": "https://a.guanaitong.com/daxin/front/psych_list?source=!@8$1234",
        "id": null,
        "child_app_id": null,
        "title": "心理课堂",
        "type": null,
        "img_url": "https://img1.guanaitong.com/grus-gfs/product/giveapp-mgr/by-days/2024-04-07/49b12b7b2203bde9c25bfd11d65079f1.png",
        "desc": null
      }
    ]

if (url.includes("/give-health-api/home")) {
  if (obj.data) {
    // 精简职点标签“健康馆”健康商城
    obj.data.health_app = obj.data.health_app.concat(new_health_app)
    obj.data.health_app = obj.data.health_app.filter(item => item.title !== "每日一答");
    obj.data.goods = null
    obj.data.psy_health = null
  }
}

if (url.includes("/incentive_api/home/education_data")) {
  if (obj.data) {
    obj.data = null
  }
}
if (url.includes("/incentive_api/home/subscribe_apps")) {
  if (obj.data && obj.data.apps) {
    obj.data.apps[0].show = false
    obj.data.show_intro = false
    obj.data.banner_img = ""
  }
}

$done({ body: JSON.stringify(obj) });
