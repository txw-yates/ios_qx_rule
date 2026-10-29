if ($request.method === "POST") {
    var body = $request.body;
    if (body && body.indexOf('"operationName":"PdpCommentsAds"') !== -1) {
        $done({
            status: 200,
            headers: { "Content-Type": "application/json; charset=utf-8" },
            body: "{\data\:{\postInfoById\:{\"pdpCommentsAds\":{\adPosts\:[]}}}}"
        });
        return;
    }
}
$done({});
