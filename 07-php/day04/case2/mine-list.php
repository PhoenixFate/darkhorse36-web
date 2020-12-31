<?php
//读取文件、并展示到表格中
$music_list_str=file_get_contents("storage.json");
//把json格式的字符串转换成对象 （这个过程叫反序列化）
// json_decode 默认反序列化时 将 JSON 中的对象转换为 PHP 中 stdClass 类型的对象

$music_list=json_decode($music_list_str,true);//true把数组中的每个对象转换为关联对象
//var_dump($music_list);
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>音乐列表</title>
  <link rel="stylesheet" href="bootstrap.css">
</head>
<body>
  <div class="container py-5">
    <h1 class="display-4">音乐列表</h1>
    <hr>
    <div class="mb-3">
      <a href="add.php" class="btn btn-secondary btn-sm">添加</a>
    </div>
    <table class="table table-bordered table-striped table-hover">
      <thead class="thead-dark">
        <tr>
          <th class="text-center">标题</th>
          <th class="text-center">歌手</th>
          <th class="text-center">海报</th>
          <th class="text-center">音乐</th>
          <th class="text-center">操作</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <?php
            foreach ($music_list as $music_item):
        ?>
        <tr>
            <!--如果是对象的话，使用->访问属性-->
            <!--$music_item->title-->
            <td><?php echo $music_item['title']?></td>
            <td><?php echo $music_item['artist']?></td>
            <td><img src="<?php echo $music_item['images'][0]?>" alt="" style="width: 200px;height: 200px"></td>
            <td><audio src="<?php echo $music_item['source']?>" controls></audio></td>
            <td><button class="btn btn-danger btn-sm">删除</button></td>
        </tr>
        <?php endforeach;?>
      </tbody>
    </table>
  </div>
</body>
</html>
