#BIANQUE

基于Django,Neo4j与图谱问答技术的的中医药知识科普平台。


## 编写环境

PyCharm 2023.1.1

## 安装说明

1. 请确保您的电脑有以下环境：python3，neo4j
2. 在想要安装的文件夹下解压djangoProject.rar，双击进入djangoProject文件夹
3. 在该目录下进入cmd，输入指令“pip install -r requirement.txt”,安装需要的python库
4.
打开medicine/qs/buidmedicalgraph.py，在第20行将password修改为您的neo4j数据库密码；打开medicine/qs/answer_search.py，在第11行将password修改为您的neo4j数据库密码。
5. 运行目录下的medicine/qs/build_medicalgraph.py，导入知识图谱
6. 在根目录下打开cmd界面，输入指令“python manage.py runserver”
7. 打开浏览器，进入https://127.0.0.1:8000/index，即可使用

注：由于数据量较大，步骤5的运行时间较长。请在进行步骤5前确保neo4j数据库在运行状态，否则无法导入数据。




