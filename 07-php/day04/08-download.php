<?php
//让文件下载
header('Content-Type:application/octet-stream');
//设置默认下载文件名
header('Content-Disposition: attachment; filename=demo.txt');
?>

<a href="a.txt">下载</a>
