<?php
//类型转换
$str = '132';
// 将一个内容为数字的字符串强制转换为一个整形的数字
$num = (int)$str;
// 将一个数字强制转换为布尔值
$flag = (bool)$num;

//运算符
//数学运算符，逻辑运算符与 JavaScript 基本一致，无额外特殊情况。
//字符串连接（拼接）采用的是比较特殊的 .
$name = 'zce';
// 拼接 `hey ` 和 `zce`
$message = 'hey ' . $name;
// 相当于 +=
$foo =null;
$foo.= $message;
echo $foo;
