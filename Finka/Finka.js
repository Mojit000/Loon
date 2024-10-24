const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/constants/ios")) {
    if (obj.data && obj.data.splashAdNew && obj.data.activityView && obj.data.matchWebTabInfo) {
        obj.data.splashAdNew = null;
        obj.data.activityView = null;
        obj.data.matchWebTabInfo = null
    }
}

$done({ body: JSON.stringify(obj) });
