// 2024-10-12 21:02:25
const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/api/v1/my/user_profile")) {
  if (obj.data && obj.data.mine_floating_entry_icon) {
    // 精简“我的”
    obj.data.mine_floating_entry_icon = ""
  }
}

$done({ body: JSON.stringify(obj) });
