
 # git命令

 - git pull  ------拉取远程代码
 - git add -A ------合并代码
 - git commit -m '备注' ------添加备注信息
 - git push -u origin 分支 ------将本地代码推到远程分支
 - git remote -v 查看当前关联的库
 - git remote rm origin 移除当前关联的库
 # vue环境搭建打包部署
 - 1.首先准备的东西
 - a.安装node js（下载安装node 一路回车就可以）
 - b.安装npm（因为国内使用npm很慢所以需要安装cnpm）
 - c.安装cnpm（npm install -g cnpm --registry=https://registry.npm.taobao.org）
 - d.安装webpack（npm install webpack -g）如果安装失败（cnpm install webpack-cli -g）
说明：检测自己是否安装node npm cnpm使用node -v， npm -v，cnpm -v， webpack -v
 - 2.搭建环境
 - a.安装vue（cnpm install vue -g）
 - b.安装vue-cli脚手架（cnpm install vue-cli -g）
 - c.新建一个文件夹存放自己的项目 例：F:\vueapp 点击导航栏输入cmd进入命令窗口
 - d.执行命令vue init webpack firstapp，创建自己的vue项目
 - e.到这一步项目就创建成功了只需要执行cnpm(npm) run dev 启动项目
  3.项目部署和打包 cnpm run build
 # 从github建立仓库到本地关联到库再到本地项目上传到库
 -1.首先登陆github点击右上角加号---New repository---填写项目名称（这里有需要
 设置权限的地方就是控制所有人可见还是隐私）---点击Create repository---记住这
 个ssh的地址（关联的时候会用到）
 -2.这里就需要找到你本地项目的根目录（首次关联还没有开发项目直接新建文件夹）
 右击选择 git bash here(这里打开后如果不是根目录则需要cd到根目录)---执行
 git init --- 执行git add . --- 执行git commit -m '备注' --- 执行
 git remote add origin ssh地址 --- git push origin -u master
