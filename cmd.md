端口被占用  
        netstat -ano//查看所有进程,拿到pid
![avatar](/mdAssert/cmd1.png)  
    或者netstat -ano|findstr 8080  
![avatar](/mdAssert/cmd2.png)  
        杀死pid是1780  
![avatar](/mdAssert/cmd3.png)  