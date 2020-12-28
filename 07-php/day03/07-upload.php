<?php

function upload()
{
    if (!isset($_FILES['uploadFile'])) {
        $GLOBALS['message'] = '别玩我了';
        // 客户端提交的表单内容中根本没有文件域
        return;
    }

    $uploaded_file = $_FILES['uploadFile'];
    // $avatar => array(5) {
    //   ["name"]=>
    //   string(11) "icon-02.png"
    //   ["type"]=>
    //   string(9) "image/png"
    //   ["tmp_name"]=>
    //   string(27) "C:\Windows\Temp\php1138.tmp"
    //   ["error"]=>
    //   int(0)
    //   ["size"]=>
    //   int(4398)
    // }
    //  echo $avatar['error'];

    //$avatar['error']!==0 上传失败
    if ($uploaded_file['error'] !== UPLOAD_ERR_OK) {
        // 服务端没有接收到上传的文件
        $GLOBALS['message'] = '上传失败';
        return;
    }

    // 接收到了文件
    // 将文件从临时目录移动到网站范围之内
    $source = $uploaded_file['tmp_name']; // 源文件在哪
    // => 'C:\Windows\Temp\php1138.tmp'
    $target = './uploads/' . $uploaded_file['name']; // 目标放在哪
    // => './uploads/icon-02.png'
    // 移动的目标路径中文件夹一定是一个已经存在的目录
    $moved = move_uploaded_file($source, $target);

    //$moved:true 成功
    if (!$moved) {
        $GLOBALS['message'] = '上传失败';
        return;
    }

    // 移动成功（上传整个过程OK）
    $GLOBALS['message'] = '上传成功!';

    //默认会显示上传文件的大小
    //Warning: POST Content-Length of 17971880 bytes exceeds the limit of 8388608 bytes in Unknown on line 0
    //可以在php.ini中修改上传文件的大小
    //upload_max_filesize  用于限制用户上传单文件的大小
    //post_max_size        用于限制 POST 请求 body 的大小

}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // 接收文件 使用一个 叫做 $_FILES 超全局成员
    // var_dump($_FILES);
    upload();
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>文件上传</title>
</head>
<body>
<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" enctype="multipart/form-data">
    <input type="file" name="uploadFile">
    <button>上传</button>
    <?php if (isset($message)): ?>
        <p style="color: hotpink"><?php echo $message; ?></p>
    <?php endif ?>
</form>
</body>
</html>
