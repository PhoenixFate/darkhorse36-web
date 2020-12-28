<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    var_dump($_POST);
}

// $foo[] = 1

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>表单</title>
</head>
<body>
<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">

    username: <input type="text" name="username" id="username"> <br>
    password: <input type="password" name="password" id="password"> <br>
    email: <input type="email" name="email" id="email"> <br>
    number: <input type="number" name="number" id="number"> <br>
    description: <textarea name="description" id="description" cols="30" rows="10"></textarea> <br>

    <!-- 当表单中使用了 radio ，一定要为相同 name 的 radio 设置不同的 value，让服务端可以辨别 -->
    性别
    <label><input type="radio" name="gender" value="male"> 男</label>
    <label><input type="radio" name="gender" value="female"> 女</label>
    <br>
    <!-- checkbox 如果没有选中则不会提交，如果选中提交 on -->
    <label><input type="checkbox" name="agree" value="true"> 同意协议</label>
    <br>

    <!--    在php中，如果需要提交多个相同的，需要在name后面添加[],使之成为一个数组-->
    <label><input type="checkbox" name="interest[]" value="football"> 足球</label>
    <label><input type="checkbox" name="interest[]" value="basketball"> 篮球</label>
    <label><input type="checkbox" name="interest[]" value="earth"> 地球</label>

    <br>

    <select name="status">
        <!--        选择框，有value则提交value，没有提交内部的文本-->
        <option value="0">待激活</option>
        <option value="1">激活</option>
        <option value="2">未激活</option>
    </select>
    <br>

    <input type="file" name="" id="">
    <button>提交</button>
</form>
</body>
</html>
