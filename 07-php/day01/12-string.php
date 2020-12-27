<?php
//任何编程语言本身并没有太多的能力，具体的能力大多数都来源于 API。
//PHP 的能力来源于它有 1000+ 内置函数，不是每一个函数都默认直接可以使用，有一些需要安装或者启用额外的"插件" 扩展
/*
 * 开启 PHP 扩展
 *  1. 将PHP目录中的 php.ini-development 复制一个 修改为 php.ini
    2. 修改扩展文件所在目录 extension_dir
    3. 修改文件中的部分选项（; 是注释符）
    4. 在 Apache 配置文件中申明一下 php.ini 的所在目录
 */

//字符串截取
//string substr ( string $string , int $offset [, int $length ] )
$full_string = "Hello World";
echo substr($full_string, 4);
echo "<br>";
echo substr($full_string, 4, 4);
echo "<br>";

//字符串长度
//int strlen ( string $string )
echo strlen($full_string);
echo "<br>";

//大小写转换
//string strtolower ( string $string )
//string strtoupper ( string $string )
echo strtolower($full_string);
echo "<br>";
echo strtoupper($full_string);
echo "<br>";

//去除首尾空白字符
//string trim ( string $str [, string $character_mask = " \t\n\r\0\x0B" ] )
//string ltrim ( string $str [, string $character_mask ] )
//string rtrim ( string $str [, string $character_mask ] )
echo trim($full_string);
echo "<br>";

//查找字符串中某些字符首次出现位置
//mixed strpos ( string $haystack , mixed $needle [, int $offset = 0 ] )
//int mb_strpos ( string $haystack , string $needle [, int $offset = 0 [, string $encoding =mb_internal_encoding() ]] )
echo strpos($full_string,"o");
echo "<br>";

//字符串替换
//mixed str_replace ( mixed $search , mixed $replace , mixed $subject [, int &$count ] )
echo str_replace("or","aa",$full_string);
echo "<br>";

//重复字符串
//string str_repeat ( string $input , int $multiplier )
echo str_repeat($full_string,3);
echo "<br>";

//字符串分割
//array explode ($separator, $string)
var_dump(explode(" ",$full_string));

