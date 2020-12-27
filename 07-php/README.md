# PHP
## Apache基本用法
```
1.检查配置文件
httpd -t
 
2.安装apache主服务
httpd -k install -n Apache (-n 自定义windows服务名称)
 
3.启动服务
httpd -k start
httpd -k start -n Apache
httpd -k restart -n Apache
net start apache
or 打开Apache Service Monitor，点击里面的apache启动服务
 
4.关闭服务
httpd -k stop
 
5.删除service服务
httpd -k uninstall -n Apache
```

### Apache 单服务配置
> 修改端口:
- Listen 8090
> 指定域名
- ServerName localhost
> 指定静态文件地址
```
DocumentRoot "${SRVROOT}/htdocs"
<Directory "${SRVROOT}/htdocs">
```


> 去掉目录浏览功能（默认是打开的）
```
删除<Directory>中的Indexes
DocumentRoot "${SRVROOT}/htdocs"
<Directory "${SRVROOT}/htdocs">
	Options Indexes FollowSymLinks
</Directory>
```

### Apache 多个虚拟主机配置
> 1.httpd.conf里面打开
- Include conf/extra/httpd-vhosts.conf

> 2.httpd-vhost.conf里面配置多个虚拟主机
```
<VirtualHost _default_:80>
    DocumentRoot "${SRVROOT}/htdocs"
</VirtualHost>
# *:80 监听绑定在当前电脑上的任意IP的80端口
# 由于多个虚拟主机一同工作，每个虚拟主机必须配置ServerName
<VirtualHost *:80>
    ServerAdmin sm516116978@outlook.com
    DocumentRoot "${SRVROOT}/docs/shop1"
	<Directory "${SRVROOT}/docs/shop1">
		Options Indexes FollowSymLinks
		AllowOverride FileInfo
		Require all granted
	</Directory>
    ServerName www.shop1.com
    ServerAlias www.shop1.com
    ErrorLog "logs/www.shop1.com-error.log"
    CustomLog "logs/www.shop1.com-access.log" common
</VirtualHost>

<VirtualHost *:80>
    ServerAdmin sm516116978@outlook.com
    DocumentRoot "${SRVROOT}/docs/shop2"
	<Directory "${SRVROOT}/docs/shop2">
		Options Indexes FollowSymLinks
		AllowOverride FileInfo
		Require all granted
	</Directory>
    ServerName www.shop2.com
    ServerAlias www.shop2.com
    ErrorLog "logs/www.shop2.com-error.log"
    CustomLog "logs/www.shop2.com-access.log" common
</VirtualHost>

```

### Apache 添加支持PHP
> 1.httpd.conf <IfModule unixd_module>中添加php处理模块
- LoadModule php_module "D:\Program Files\php-8.0.0-Win32-vs16-x64\php8apache2_4.dll"
	
> 2.添加.php后缀的处理模块的关联
```
httpd.conf <IfModule mime_module>中添加：
AddType application/x-httpd-php .php
```

## PHP
### 开启 PHP 扩展
```
1. 将PHP目录中的 php.ini-development 复制一个 修改为 php.ini
2. 修改扩展文件所在目录 extension_dir "xxxPath"
3. 修改文件中的部分选项（; 是注释符）例如 extension=php_mbstring.dll
4. 在 Apache 配置文件中申明一下 php.ini 的所在目录
```
### apache配置php.ini位置
- apache->httpd.conf->添加 PHPIniDir="xxx"