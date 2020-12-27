<!--这是html的注释-->
<!--这里面的内容最后依然会在html中-->
<?php
//这是php的注释，最后不会在html中
//php中每个语句的最后面必须要加;
//php中都是全局函数
echo "abc";
echo "<br>";
echo "bcd";
/*
 * php中多行注释
 */
$foo='hello'; //变量没有类型，变量名为foo, $foo强调为一个变量
$Foo="world";  //变量区分呢大小写
echo $foo;
echo $Foo;

//php中"" ''作用不一样，单引号就是纯粹字符串，""类似于js中反引号
/*
 *PHP 有多种创建字符串的方式：单引号、双引号等。
  单引号字符串
    不支持特殊的转义符号，例如 \n
    如果要表示一个单引号字符内容，可以通过 \' 表达
    如果要表示一个反斜线字符内容，可以通过 \\ 表达
  双引号字符串
    支持转义符号
    支持变量解析
 *
 */
echo 'OS path: C:\\Windows';
// => `OS path: C:\Windows`
$name = 'zce';
echo "hello $name";
// => `hello zce`
?>