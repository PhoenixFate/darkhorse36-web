<?php
$top = 'top variable';
function foo()
{
// 声明在当前作用域中获取全局作用域中的 `$top`
    global $top;
    $sub = 'sub variable';
    echo $top;
// => `top variable`
    function bar()
    {
// 声明在当前作用域中获取全局作用域中的 `$top` 和 `$bar`
        global $top, $sub;
        echo $top; // => `top variable`
        echo $sub; // => 任然无法拿到，因为 `$sub` 不再全局范围，而是在 `foo` 函数中定义
    }

    bar();
}

foo();