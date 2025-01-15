// 2024-10-12 21:02:25
const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

const lite_floors = [
  {
    "key": "default_market",
    "market": {
      "hot_act": {
            "title": "热门活动",
            "img_url": "https://img1.guanaitong.com/grus-gfs/product/gat/by-days/2024-06-20/3c5440b8153e7938cec193ec596442d9.jpg",
            "link_url": "https://cms.guanaitong.com/product/49/79.html"
          },
      "title": "热门商城",
      "more_link_title": "查看全部",
      "topic_act": {
            "title": "奈雪の茶",
            "img_url": "https://file.guanaitong.com/grus-gfs/product/app-mgr/by-days/2024-04-18/8ab0055763dea2976ddad207cc1a5687.png",
            "link_url": "gatgive://page.gat/web?url=https%3A%2F%2Ft.guanaitong.com%2F6JETXjGg"
          },
      "more_link_url": "https://m.igeidao.com/home/display_zone?type=2",
      "values": [
        {
          "track_app_id": "20091584",
          "status": 2,
          "title": "永辉超市",
          "app_id": 800135,
          "link_url": "gatgive://page.gat/web?url=https%3A%2F%2Ft.guanaitong.com%2FEOn8oJiA",
          "img_url": "https://file.guanaitong.com/grus-gfs/product/app-mgr/by-days/2024-04-19/32ef5659c11573f32632565ab60a524d.jpg"
        },
        {
          "track_app_id": "10000466",
          "status": 2,
          "title": "关爱商城",
          "app_id": 800045,
          "link_url": "gatgive://page.gat/web?url=https%3A%2F%2Ft.guanaitong.com%2FgmO0LNGd",
          "img_url": "https://file.guanaitong.com/grus-gfs/product/app-mgr/by-days/2022-12-01/538e7601555bf6ab757d9a9a0e39c7e8.png"
        },
        {
          "track_app_id": "10000889",
          "status": 2,
          "title": "唯品会商城",
          "app_id": 800080,
          "link_url": "gatgive://page.gat/web?url=https%3A%2F%2Ft.guanaitong.com%2Fi9qlP7d8",
          "img_url": "https://file.guanaitong.com/grus-gfs/product/app-mgr/by-days/2022-12-01/7bedd80af68effaca53ac730ff95cbf9.png"
        }
      ]
    },
    "e_card": {
      "title": "代金券",
      "more_link_title": "查看全部",
      "more_link_url": "https://m.igeidao.com/home/display_zone?type=1",
      "values": [
        {
          "track_app_id": "15001512",
          "status": 2,
          "title": "美团外卖红包券",
          "app_id": 1811518,
          "link_url": "gatgive://page.gat/web?url=https%3A%2F%2Ft.guanaitong.com%2Fgbnq4PD9",
          "img_url": "https://file.guanaitong.com/grus-gfs/product/app-mgr/by-days/2022-12-08/b379190c4caeaabbcb9c70ee1d466ac0.png"
        },
        {
          "track_app_id": "15001710",
          "status": 2,
          "title": "高德打车代金券",
          "app_id": 15001710,
          "link_url": "gatgive://page.gat/web?url=https%3A%2F%2Ft.guanaitong.com%2FoKExDYl9",
          "img_url": "https://file.guanaitong.com/grus-gfs/product/app-mgr/by-days/2024-09-23/55e3bcf8c2b5217bdadf001b431d1400.png"
        },
        {
          "track_app_id": "15001709",
          "status": 2,
          "title": "滴滴打车代金券",
          "app_id": 15001709,
          "link_url": "gatgive://page.gat/web?url=https%3A%2F%2Ft.guanaitong.com%2FWCpqRhIs",
          "img_url": "https://file.guanaitong.com/grus-gfs/product/app-mgr/by-days/2024-01-16/5fc83db39e98939e71c4301dfe44c6bd.png"
        }
      ]
    }
  }
]

if (url.includes("/api/v8/home/cms")) {
  if (obj.data && obj.data.floors) {
    // 精简首页
    obj.data.floors = lite_floors
    obj.data.default_expand = null
  }
}

$done({ body: JSON.stringify(obj)
});
