<?php

// 接收要删除的数据 ID
if (empty($_GET['id'])) {
  exit('<h1>必须传入指定参数</h1>');
}

$id = $_GET['id']; // => 1,2,3

// 1. 建立连接
$conn = mysqli_connect('114.67.89.253', 'root', 'centos123qwer', 'darkhorse36');

if (!$conn) {
  exit('<h1>连接数据库失败</h1>');
}

// 2. 开始查询
$query = mysqli_query($conn, 'delete from php_users where id in (' . $id . ');');

if (!$query) {
  exit('<h1>查询数据失败</h1>');
}

$affected_rows = mysqli_affected_rows($conn);

if ($affected_rows <= 0) {
  exit('<h1>删除失败</h1>');
}

header('Location: index.php');
