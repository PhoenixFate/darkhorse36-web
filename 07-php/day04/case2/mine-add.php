<?php

/**
 * 只是在表单提交时执行
 */
function add_music()
{
    // 目标
    //  将用户提交过来的数据保存到 storage.json 中
    // 步骤
    //  1. 接收并校验
    //  2. 持久化
    //  3. 响应

    // 文本框校验
    // =====================================================
    if(empty($_POST['title'])){
        $GLOBALS['error_message']="请输入标题内容";
        return;
    }

    if(empty($_POST['artist'])){
        $GLOBALS['error_message']="请输入歌手";
        return;
    }

    //校验文件
    //音乐是否存在
    if(empty($_FILES['source'])){
        //form表单中没有source字段
        $GLOBALS['error_message']="请选择音乐文件";
        return;
    }
    $source=$_FILES['source'];
    //校验音乐文件的类型与大小
    if($source['size']> 10*1024*1024){
        $GLOBALS['error_message']='音乐文件不能大于10M';
        return;
    }
    //校验音乐类型
    $allowed_music_types = array('audio/mp3','audio/mpeg', 'audio/wma');
    if (!in_array($source['type'], $allowed_music_types)) {
        $GLOBALS['error_message'] = '这是不支持的音乐格式';
        return;
    }
    //判断source音乐是否正确
    if($source['error']!==UPLOAD_ERR_OK){
        $GLOBALS['error_message']='请选择音乐文件';
        return;
    }

    //音乐已经上传成功，但还在临时目录中
    //一般情况，会将上传的文件重命名
    $source_upload_destination="./uploads/mp3/".uniqid().'-'.$source['name'];
    if(!move_uploaded_file($source['tmp_name'],$source_upload_destination)){
        //移动失败
        $GLOBALS['error_message']='上传音乐文件失败';
        return;
    }
    //上传音乐文件成功！
    echo "上传音乐文件成功！<br>";


    //校验图片文件
    //图片是否存在
    if(empty($_FILES['images'])){
        //form表单中没有images字段
        $GLOBALS['error_message']="请选择图片";
        return;
    }
    $images=$_FILES['images'];
    var_dump($images);
    //校验图片类型
    $allowed_images_types = array('image/png', 'image/gif','image/jpeg','image/jpg');
    if (!in_array($images['type'], $allowed_images_types)) {
        $GLOBALS['error_message'] = '这是不支持的图片格式';
        return;
    }

    //判断图片是否正确
    if($images['error']!==UPLOAD_ERR_OK){
        $GLOBALS['error_message']='请选择图片';
        return;
    }

    //音乐已经上传成功，但还在临时目录中
    //一般情况，会将上传的文件重命名
    $images_upload_destination="./uploads/img/".uniqid().'-'.$images['name'];
    if(!move_uploaded_file($images['tmp_name'],$images_upload_destination)){
        //移动失败
        $GLOBALS['error_message']='上传图片失败';
        return;
    }
    //上传图片成功！
    echo "上传图片成功！<br>";




    //所有的有成功了，将数据持久化
    $origin=json_decode(file_get_contents('storage.json'),true);
    $origin[]=array(
            'id'=>uniqid(),
        'title'=>$_POST['title'],
        'artist'=>$_POST['artist'],
        'images'=>'123',
        'source'=>'1231'
    );
    $json=json_encode($origin);
    file_put_contents('storage.json',$json);

}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    add_music();
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>添加新音乐</title>
    <link rel="stylesheet" href="bootstrap.css">
</head>
<body>
<div class="container py-5">
    <h1 class="display-4">添加新音乐</h1>
    <hr>
    <?php if (isset($error_message)): ?>
        <div class="alert alert-danger" role="alert">
            <?php echo $error_message; ?>
        </div>
    <?php endif ?>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" enctype="multipart/form-data" autocomplete="off">
        <div class="form-group">
            <label for="title">标题</label>
            <input type="text" class="form-control" id="title" name="title" value="<?php echo isset($_POST['title'])?$_POST['title']:''?>">
        </div>
        <div class="form-group">
            <label for="artist">歌手</label>
            <input type="text" class="form-control" id="artist" name="artist" value="<?php echo isset($_POST['artist'])?$_POST['artist']:''?>">
        </div>
        <div class="form-group">
            <label for="images">海报</label>
            <input type="file" class="form-control" id="images" name="images" accept="image/*">
        </div>
        <div class="form-group">
            <label for="source">音乐</label>
            <!-- accept 可以限制文件域能够选择的文件种类，值是 MIME Type -->
            <input type="file" class="form-control" id="source" name="source" accept="audio/*">
        </div>
        <button class="btn btn-primary btn-block">保存</button>
    </form>
</div>
</body>
</html>
))