<?php
//关于变量作用域这一点，PHP 与绝大多数语言也都不同：默认函数内不能访问函数所在作用域的成员。
$top = 'top variable';
function foo () {
    $sub = 'sub variable';
//    echo $top;// => 无法拿到
    function bar () {
//        echo $top// => 无法拿到
//        echo $sub;// => 无法拿到
    }
    bar();
}
foo();