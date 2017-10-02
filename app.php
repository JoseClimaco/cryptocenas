<?php
$apikey='766da453b28f409780d178cc4beeb66f';
$apisecret='5d235e3d7d1e41348cc62cf0d7c954e7';
$nonce=time();
$uri='https://bittrex.com/api/v1.1/account/getbalances?apikey='.$apikey.'&nonce='.$nonce;
$sign=hash_hmac('sha512',$uri,$apisecret);
$ch = curl_init($uri);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('apisign:'.$sign));
$execResult = curl_exec($ch);
curl_close($ch);
print_r($ch);
print(json_decode($execResult));
print_r($execResult->success);
print_r($obj->success);
?>
