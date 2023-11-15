function modifyMain(url, str) {
  if(url.indexOf('/product/list') > -1) { // 相关过滤，红宝书广告
    try {
      let data = JSON.parse(str);
      data["data"] = []
      return JSON.stringify(data);
    } catch (error) {
      console.log(`红宝书广告, 出现异常: ` + error);
    }
    return str
  } else if(url.indexOf('/w1/api/index.php') > -1) { // 开盘啦，首页广告位置
    try {
      let data = JSON.parse(str);
      if data["IndexAd"] != undefined {
	data["List"] = [];
        data["IndexAd"] = [];
	data["Ad_1"] = [];
	data["Ad_2] = [];
      }
      data["Advert"] = [];
      return JSON.stringify(data);
    } catch (error) {
      console.log(`开盘啦，首页广告位置, 出现异常: ` + error);
    }
    return str
  }
	return str;
}

var body = $response.body;
var url = $request.url;
body = modifyMain(url, body);

$done({ body });
