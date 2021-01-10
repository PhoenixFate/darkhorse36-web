<?php
// 设置响应头中的 Set-Cookie 可以下发小票（给客户端发）
// Cookie 在客户端存储的是键值结构
// header('Set-Cookie: foo=bar');

// header 在设置相同的键时 会出现覆盖的情况
// header('Foo: 123');
// header('Foo: 456');

// setcookie 是专门用于设置 cookie 的函数
// setcookie('key', 'value');

// 只传递一个参数是删除
// 原理：设置过期时间为一个过去时间
setcookie('key');

// 传递两个参数是设置 cookie
// 默认过期时间：session
setcookie("key1","value1");


//第三个参数是过期时间：一个时间戳（整型类 秒）
setcookie('key2', 'value2', time() + 1 * 24 * 60 * 60);

//第四个参数设置path
setcookie('key3', 'value3', time() + 1 * 24 * 60 * 60, '/users');