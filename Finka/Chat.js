// 2024-10-12 21:02:25
const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/group/session")) {
    if (obj.data && obj.data.list) {
        // 过滤掉官方推送的信息
        // visitors = obj.data.list.filter(visitor => visitor.sender.nickname == "附近的人" || visitor.sender.nickname == "翻咔直播小助手" || visitor.sender.nickname == "聊天推荐" || visitor.sender.nickname == "官方团队" || visitor.sender.nickname == "社区小助手")
        // obj.data.list = obj.data.list.filter(visitor => visitor.sender.nickname !== "附近的人");
        // obj.data.list = obj.data.list.filter(visitor => visitor.sender.nickname !== "聊天推荐");
        // obj.data.list = obj.data.list.filter(visitor => visitor.sender.nickname !== "官方团队");
        // obj.data.list = obj.data.list.filter(visitor => visitor.sender.nickname !== "社区小助手");
        // obj.data.list = obj.data.list.filter(visitor => visitor.sender.nickname !== "翻咔直播小助手");
        const filteredNicknames = [
            "附近的人", 
            "翻咔直播小助手", 
            "聊天推荐", 
            "官方团队", 
            "社区小助手"
        ];
        // 过滤掉官方推送的信息
        obj.data.list = obj.data.list.filter(
            visitor => !filteredNicknames.includes(visitor.sender.nickname)
        );
    }
    
}

$done({ body: JSON.stringify(obj) });
