<?php
// echo 可以输出多个内容, 多个内容以逗号分割
echo 'value1', 'value2';
print '<br>';
// print 只能打印一个数据
print 'value3';

// var_dump: 一般用于输出数据以及数据类型
var_dump('value1');
echo false;//echo false会什么都不输出
var_dump(false);
//array(): 以函数的形似创建数组
var_dump(array(
    '1', '2'
));

// php5.4之前，数组需要用array()来声明
$arr2=array(1,2,3,4);
foreach ($arr2 as $item) {
    echo $item;
}

// php 5.4 +
$arr = [1, 2, 3, 4]; //线性数组
foreach ($arr as $value) {
    # code...
    echo $value;
}
//关联数组
//有点类似于 JavaScript 中的对象
// 注意：键只能是`integer`或者`string`
$arr3 = array('key1' => 'value1', 'key2' => 'value2');
var_dump($arr3);


$map = ['key1' => 'value', 'key2' => 'value', 'key3' => 'value'];//关联数组
foreach ($map as $key => $value) {
    # code...
    echo $key."->".$value;
}

