
// 2024-10-12 21:02:25
const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

const lite_sections_v2 = [
  {
    "items": [
      {
        "id": 494,
        "title": "离线缓存",
        "icon": "http://i0.hdslb.com/bfs/archive/5fc84565ab73e716d20cd2f65e0e1de9495d56f8.png",
        "common_op_item": {},
        "uri": "bilibili://user_center/download"
      },
      {
        "id": 495,
        "title": "历史记录",
        "icon": "http://i0.hdslb.com/bfs/archive/8385323c6acde52e9cd52514ae13c8b9481c1a16.png",
        "common_op_item": {},
        "uri": "bilibili://user_center/history"
      },
      {
        "id": 496,
        "title": "我的收藏",
        "icon": "http://i0.hdslb.com/bfs/archive/d79b19d983067a1b91614e830a7100c05204a821.png",
        "common_op_item": {},
        "uri": "bilibili://user_center/favourite"
      },
      {
        "id": 3084,
        "title": "稍后再看",
        "icon": "http://i0.hdslb.com/bfs/archive/63bb768caa02a68cb566a838f6f2415f0d1d02d6.png",
        "need_login": 1,
        "uri": "bilibili://user_center/watch_later_v2",
        "common_op_item": {}
      },
      {
        "id": 501,
        "title": "设置",
        "icon": "http://i0.hdslb.com/bfs/archive/e932404f2ee62e075a772920019e9fbdb4b5656a.png",
        "common_op_item": {},
        "uri": "bilibili://user_center/setting"
      }
    ],
    "style": 1,
    "button": {}
  }
]


if (url.includes("/account/mine")) {
  if (obj.data && obj.data.sections_v2) {
    // 精简我的页面
    obj.data.sections_v2 = lite_sections_v2
  }
}

$done({ body: JSON.stringify(obj) });
