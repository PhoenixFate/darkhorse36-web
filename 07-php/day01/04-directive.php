<?php

// 指令式的语句

if (true) {
    echo "hello ";
}else {
    echo "world";
}
//指令式就是将开始 { 换成 : 结束 } 换成 endif;
if (true) :
    echo "hello ";
else :
    echo "world ";
endif;


// for foreach while 也是一样
for ($i = 0; $i < 10; $i++) :
echo $i;
endfor;
