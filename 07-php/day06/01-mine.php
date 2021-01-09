<?php
// 如果想要使用这个扩展提供的函数，必须开启扩展
// extension_dir
// 解除注释 extension=php_mysqli.dll
//建立连接
$connection =mysqli_connect('114.67.89.253','root','centos123qwer','darkhorse36','3306');
if(!$connection){
    exit("<h1>连接数据库失败！</h1>");
}else {
    echo "<h3>连接数据库成功！</h3>";
}

// 基于刚刚创建的连接对象执行一次查询操作
// 得到的是一个查询对象，这个查询对象可以用来再到数据一行一行拿数据
$query = mysqli_query($connection, 'select * from users;');
//var_dump($query);

while ($row = mysqli_fetch_assoc($query)) {
    var_dump($row);
    echo "<br>";
}





































