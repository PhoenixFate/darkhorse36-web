<?php
// 函数名不区分大小写
function foo ($name, $title) {
    echo "$name ($title)";
}
// 调用
foo('zce', 'UFO');
Foo('zgd', 'SBO'); // 大小写不区分
//建议在 PHP 中采用下划线式（snake_case）做命名规则，不管是函数还是变量