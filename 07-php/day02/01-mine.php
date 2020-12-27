<?php
//1.读取文件
$content = file_get_contents("./names.txt");
//echo $content;

// 2. 按照一个特定的规则解析文件内容   // => 数组
// 2.1. 按照换行拆分
$data = array();
$lines = explode("\n", $content);
//var_dump($lines);
// 2.2 遍历每一行，解析数据
foreach ($lines as $item) {
    if (!$item) continue;
    // $item :1 | 朱芳 | 18 | b.unyrl@tpwpqt.st | http://XEP.VC
    $columns = explode('|', $item);//$columns:数组[]
    //将一个或者多个元素添加到数组中
    $data[] = $columns; //$date=>[[],[]]
//    var_dump($data);
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<table>
    <thead>
    <tr>
        <th>编号</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>游戏</th>
        <th>网址</th>
    </tr>
    </thead>
    <tbody>
    <!--数据结构：-->
    <!--<tr>-->
    <!--    <td>1</td>-->
    <!--    <td>朱芳</td>-->
    <!--    <td>18</td>-->
    <!--    <td>sdfdsf</td>-->
    <!--    <td><a href="http://xep.vc">XEP.VC</a></td>-->
    <!--</tr>-->
    <?php foreach ($data as $i => $line): ?>
        <tr>
            <?php foreach ($line as $j => $column):
                if ($j == 4):?>
                    <td><a href="<?php echo $column ?>"><?php echo strtolower($column) ?></a></td>
                <?php else: ?>
                    <td><?php echo trim($column); ?></td>
                <?php endif ?>
            <?php endforeach; ?>
        </tr>
    <?php endforeach ?>
    </tbody>
</table>
</body>
</html>

