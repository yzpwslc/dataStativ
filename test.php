<?php
$url = "http://q.stock.sohu.com/hisHq?code=zs_000001&start=20150504&end=20151215&stat=1&period=d&callback=historySearchHandler&rt=jsonp&r=0.8391495715053367&0.9677250558488026";
$str = file_get_contents($url);
$jArr = preg_split("/\(|\)/",$str);
print_r(substr($jArr[1],1,-1));
$sArr = json_decode(substr($jArr[1],1,-1),true);
echo $json_last_error_msg;
print_r($sArr['hq']);
?>