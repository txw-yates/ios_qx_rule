function modifyMain(url, data) {
	if(url.indexOf('/product/list') > -1) { // 相关过滤，红宝书广告
    data = JSON.parse(data);
		data["data"] = "[]"
    return JSON.stringify(data);
	} else if(url.indexOf('/w1/api/index.php') > -1) { // 开盘啦，首页广告位置
		data = JSON.parse(data);
		data["List"] = "[]";
    data["IndexAd"] = "[]";
    data["Advert"] = "[]";
		return JSON.stringify(data);
	}
	return data;
}

var body = $response.body;
var url = $request.url;
body = modifyMain(url, body);

$done({ body });
