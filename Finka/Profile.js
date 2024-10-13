// 2024-10-12 21:02:25
const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);
const filterDATA = {
  "innerFunction": [
    [
      {
        "url": "finka2020://closeFriend",
        "title": "密友",
        "trackName": "CLOSE_FRIEND",
        "description": "",
        "users": [],
        "icon": {
          "variants": [
            {
              "width": 150,
              "url": "https://pic.finkapp.cn/n62uaexSM8VqRPIj7cLlMQ?x-oss-process=image/resize,m_lfit,w_150/quality,q_70/format,png",
              "height": 168
            }
          ],
          "height": 180,
          "urlPatternWidthHeightMirrors": [
            "https://pic.finkapp.cn/n62uaexSM8VqRPIj7cLlMQ?x-oss-process=image/resize,m_pad,w_%@,h_%@/quality,q_70/format,png"
          ],
          "width": 160,
          "urlPatternWidthMirrors": [
            "https://pic.finkapp.cn/n62uaexSM8VqRPIj7cLlMQ?x-oss-process=image/resize,m_pad,w_%@,h_%@/quality,q_70/format,png"
          ],
          "patterns": [
            "https://pic.finkapp.cn/n62uaexSM8VqRPIj7cLlMQ?x-oss-process=image/resize,m_pad,w_%@,h_%@/quality,q_70/format,png"
          ],
          "imageId": "n62uaexSM8VqRPIj7cLlMQ"
        },
        "entranceType": "closeFriend"
      },
      {
        "users": [],
        "icon": {
          "variants": [
            {
              "width": 150,
              "url": "https://pic.finkapp.cn/Rl6ztWbcThVqRPIj7cLlMQ?x-oss-process=image/resize,m_lfit,w_150/quality,q_70/format,png",
              "height": 165
            }
          ],
          "height": 176,
          "urlPatternWidthHeightMirrors": [
            "https://pic.finkapp.cn/Rl6ztWbcThVqRPIj7cLlMQ?x-oss-process=image/resize,m_pad,w_%@,h_%@/quality,q_70/format,png"
          ],
          "width": 160,
          "urlPatternWidthMirrors": [
            "https://pic.finkapp.cn/Rl6ztWbcThVqRPIj7cLlMQ?x-oss-process=image/resize,m_pad,w_%@,h_%@/quality,q_70/format,png"
          ],
          "patterns": [
            "https://pic.finkapp.cn/Rl6ztWbcThVqRPIj7cLlMQ?x-oss-process=image/resize,m_pad,w_%@,h_%@/quality,q_70/format,png"
          ],
          "imageId": "Rl6ztWbcThVqRPIj7cLlMQ"
        },
        "title": "特别关注",
        "url": "finka2020://focusRelation",
        "entranceType": "focusRelation",
        "trackName": "FOCUS_RELATION"
      },
      {
        "users": [],
        "icon": {
          "variants": [
            {
              "width": 150,
              "url": "https://pic.finkapp.cn/tETVEH5zap9qRPIj7cLlMQ?x-oss-process=image/resize,m_lfit,w_150/quality,q_70/format,png",
              "height": 165
            }
          ],
          "height": 176,
          "urlPatternWidthHeightMirrors": [
            "https://pic.finkapp.cn/tETVEH5zap9qRPIj7cLlMQ?x-oss-process=image/resize,m_pad,w_%@,h_%@/quality,q_70/format,png"
          ],
          "width": 160,
          "urlPatternWidthMirrors": [
            "https://pic.finkapp.cn/tETVEH5zap9qRPIj7cLlMQ?x-oss-process=image/resize,m_pad,w_%@,h_%@/quality,q_70/format,png"
          ],
          "patterns": [
            "https://pic.finkapp.cn/tETVEH5zap9qRPIj7cLlMQ?x-oss-process=image/resize,m_pad,w_%@,h_%@/quality,q_70/format,png"
          ],
          "imageId": "tETVEH5zap9qRPIj7cLlMQ"
        },
        "title": "我赞过的照片",
        "url": "finka2020://likedPhoto",
        "entranceType": "postLike",
        "trackName": "POST_LIKE"
      }
    ]
  ],
  "aiGraphGuideShow": false
}
if (url.includes("/profile/info/v2")) {
    if (obj.data) {
    // 过滤掉资料页面多余的信息
        obj.data = filterDATA;
  }
}

$done({ body: JSON.stringify(obj)
});
