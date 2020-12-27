<?php
/*
 * PHP 中的许多预定义变量都是“超全局的”，这意味着它们在一个脚本的全部作用域中都可用。在函数或方法中无需
执行 global $variable; 就可以访问它们。
 *  $GLOBALS — 引用全局作用域中可用的全部变量
    $_SERVER — 获取服务端相关信息
    $_REQUEST — 获取提交参数
    $_POST — 获取 POST 提交参数
    $_GET — 获取 GET 提交参数
    $_FILES — 获取上传文件
    $_ENV — 操作环境变量
    $_COOKIE — 操作 Cookie
    $_SESSION — 操作 Session
 *
 */
$x = 75;
$y = 25;
$z=null;
function foo () {
    $GLOBALS['z'] = $GLOBALS['x'] + $GLOBALS['y'];
}
foo();
echo $z; //100


