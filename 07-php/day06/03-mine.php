<?php
// 增删改数据的查询语句
//建立连接
$connection =mysqli_connect('114.67.89.253','root','centos123qwer','darkhorse36','3306');

// 1. 必须在查询数据之前
// 2. 必须传入连接对象和编码
mysqli_set_charset($connection, 'utf8');

if(!$connection){
    exit("<h1>连接数据库失败！</h1>");
}else {
    echo "<h3>连接数据库成功！</h3>";
}

// 基于刚刚创建的连接对象执行一次查询操作
// 得到的是一个查询对象，这个查询对象可以用来再到数据一行一行拿数据
$query = mysqli_query($connection, 'delete from users where id = 5;');
//var_dump($query);
if (!$query) {
    exit('<h1>查询失败</h1>');
}

// 如何拿到受影响行
// 传入的一定是连接对象
$rows = mysqli_affected_rows($connection);
var_dump($rows);


// 炸桥 关闭连接
mysqli_close($connection);



































