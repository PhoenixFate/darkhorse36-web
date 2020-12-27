<?php
// php5.4之前，数组需要用array()来声明
$arr2=array(1,2,3,4);
foreach ($arr2 as $item) {
    echo $item;
    echo "<br>";
}

// php 5.4 +
$arr = [1, 2, 3, 4]; //线性数组
foreach ($arr as $value) {
    # code...
    echo $value;
    echo "<br>";
}

//关联数组 有点类似于 JavaScript 中的对象
// 注意：键只能是`integer`或者`string`
$arr3 = array('key1' => 'value1', 'key2' => 'value2');
var_dump($arr3);
echo "<br>";

$map = ['key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3'];//关联数组
foreach ($map as $key => $value) {
    # code...
    echo $key."->".$value."; ";
}
echo "<br>";

//数组处理
//获取关联数组中全部的键 / 值
//array_keys() / array_values()
var_dump(array_keys($map));
echo "<br>";
var_dump(array_values($map));
echo "<br>";

//判断关联数组中是否存在某个键
//array_key_exists()

//去除重复的元素
//array_unique()

//将一个或多个元素追加到数组中
//array_push()
//$arr[] = 'new value'
array_push($arr,200); //无法给关联数组以key->value的形式添加数据
$arr[]=145;
var_dump($arr);
echo "<br>";
$map["new"]='new value';
var_dump($map);
echo "<br>";

//删除数组中最后一个元素
//array_pop()
array_pop($arr);
var_dump($arr);
echo "<br>";

//数组长度
//count()
echo count($arr);
echo "<br>";

//检测存在
//in_array()
$people = array("Bill", "Steve", "Mark", "David");
if (in_array("Mark", $people)){
    echo "mark is existed<br>";
}

//搜索键值，返回键名
//array_search()
$a=array("a"=>"red","b"=>"green","c"=>"blue");
echo array_search("red",$a);