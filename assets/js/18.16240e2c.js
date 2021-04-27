(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{374:function(e,n,t){"use strict";t.r(n);var a=t(45),r=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"网络请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络请求"}},[e._v("#")]),e._v(" 网络请求")]),e._v(" "),t("p",[e._v("webshocket 编程通过套接字协议，通过指定的ip和端口进行网络传递")]),e._v(" "),t("p",[e._v("网络传递协议：tcp udp")]),e._v(" "),t("h2",{attrs:{id:"tcp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[e._v("#")]),e._v(" TCP")]),e._v(" "),t("p",[e._v("MyClien类  客户端")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('public class MyClien extends JFrame {\n    private PrintWriter writer;\n    Socket socket;\n    private  JTextArea textArea =new JTextArea();\n    private  JTextField textField = new JTextField();\n    Container cc;\n\n    //创建传统UI窗口 ，及页面数据写入\n    public  MyClien(String title){\n        super(title);\n        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\n        cc=this.getContentPane();\n        final JScrollPane scrollPane =new JScrollPane();\n        scrollPane.setBorder(new BevelBorder(BevelBorder.RAISED));\n        getContentPane().add(scrollPane,BorderLayout.CENTER);\n        scrollPane.setViewportView(textArea);\n        cc.add(textField,"South");\n        textField.addActionListener(new ActionListener() {\n            @Override\n            public void actionPerformed(ActionEvent e) {\n                writer.println(textField.getText());\n                textArea.append(textField.getText()+\'\\n\');\n                textArea.setSelectionEnd(textArea.getText().length());\n                textField.setText("");\n            }\n        });\n    }\n    //创建socker连接\n    private void connect(){\n        textArea.append("尝试连接\\n");\n        try{\n            socket = new Socket("127.0.0.1",8998);\n            writer=new PrintWriter(socket.getOutputStream(),true);\n            textArea.append("连接成功\\n");\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n\n    public static void main(String[] args) {\n        MyClien clien = new MyClien("开始向服务器发送数据");\n        clien.setSize(200,200);\n        clien.setVisible(true);\n        clien.connect();\n    }\n}\n')])])]),t("p",[e._v("MyTcp 服务端")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('public class MyTcp {\n    private  BufferedReader reader;\n    private  ServerSocket serverSocket;\n    private  Socket socket;\n    void getserver(){\n        try{\n            serverSocket= new ServerSocket(8998);\n            System.out.println("服务器套接字创建成功");\n            while(true){\n                System.out.println("等待客户机的连接");\n                socket=serverSocket.accept();\n                reader= new BufferedReader(new InputStreamReader(socket.getInputStream()));\n                getClientMessage();\n            }\n        } catch (Exception e) {\n            e.printStackTrace();\n\n        }finally {\n            System.out.println("客户机已死亡，启动自毁程序");\n        }\n    }\n\n    private void getClientMessage() {\n        try{\n            while (true){\n                //获得客户端信息\n                System.out.println("客户机说："+reader.readLine());\n            }\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n        try{\n            if(reader != null){\n                reader.close();\n            }\n            if(socket != null){\n                socket.close();\n            }\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n\n\n    public static void main(String[] args) {\n        MyTcp tcp = new MyTcp();  //创建本类方法\n        tcp.getserver();     //调用主方法\n    }\n}\n\n')])])]),t("h2",{attrs:{id:"udp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#udp"}},[e._v("#")]),e._v(" UDP")]),e._v(" "),t("p",[e._v("广播类 Weather")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('import java.io.IOException;\nimport java.net.*;\n\npublic class Weather extends Thread {\n    String weather = "节目预报：八点有大型晚会，请收听！";\n    int port=9898;\n    InetAddress inetAddress =null;\n    MulticastSocket socket =null;\n    Weather(){\n        try {\n            inetAddress =InetAddress.getByName("224.225.10.0");\n            socket =new MulticastSocket(port);\n            socket.setTimeToLive(1);\n            socket.joinGroup(inetAddress);\n        } catch (UnknownHostException e) {\n            e.printStackTrace();\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n    public void run(){\n        while (true) {\n            DatagramPacket packet = null;  //声明DatagramPacket对象\n            byte data[] = weather.getBytes();  //声明字节组\n            packet = new DatagramPacket(data, data.length, inetAddress, port);\n            System.out.println(new String(data));\n            try {\n                socket.send(packet);\n                sleep(3000);\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            } catch (IOException e) {\n                e.printStackTrace();\n            }\n        }\n    }\n\n    public static void main(String[] args) {\n        Weather weather = new Weather();\n        weather.start();\n    }\n}\n')])])]),t("p",[e._v("接收类 Receive")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('import javax.swing.*;\nimport java.awt.*;\nimport java.awt.event.ActionEvent;\nimport java.awt.event.ActionListener;\nimport java.io.IOException;\nimport java.net.DatagramPacket;\nimport java.net.InetAddress;\nimport java.net.MulticastSocket;\n\npublic class Receive extends JFrame implements Runnable, ActionListener {\n    int port; //定义端口变量\n    InetAddress group = null; //声明对象\n    MulticastSocket socket = null;\n    JButton ince = new JButton("开始接收");  //开始接收按钮\n    JButton stop = new JButton("停止接收");  //停止接收按钮\n    JTextArea inceAr = new JTextArea(10,10); //文本域大小\n    JTextArea inced = new JTextArea(10 ,10);\n    Thread thread;\n    boolean b =false;\n\n    public Receive(){\n        super("广播数据报");\n        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);\n        thread = new Thread(this);\n        ince.addActionListener(this);\n        stop.addActionListener(this);\n        inceAr.setForeground(Color.blue);\n        JPanel north = new JPanel();\n        north.add(ince);\n        north.add(stop);\n        add(north,BorderLayout.NORTH);\n        JPanel center = new JPanel();\n        center.setLayout(new GridLayout(1,2));\n        center.add(inceAr);\n        center.add(inced);\n        add(center,BorderLayout.CENTER);\n        validate();\n        port=9898;\n        try{\n            group=InetAddress.getByName("224.225.10.0");\n            socket = new MulticastSocket(port);\n            socket.joinGroup(group);\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n        setBounds(100,50,360,380);\n        setVisible(true);\n    }\n\n    @Override\n    public void actionPerformed(ActionEvent e) {\n        if (e.getSource()==ince){\n            ince.setBackground(Color.red);\n            stop.setBackground(Color.yellow);\n            if(!(thread.isAlive())){\n                thread =new Thread(this);\n            }\n            thread.start();\n            b=false;\n        }\n        if (e.getSource()==stop){\n            ince.setBackground(Color.yellow);\n            stop.setBackground(Color.red);\n            b=true;\n        }\n    }\n\n    @Override\n    public void run() {\n        while (true){\n            byte data[] = new byte[1024];\n            DatagramPacket packet =null;\n            packet = new DatagramPacket(data,data.length,group,port);\n            try{\n                socket.receive(packet);\n                String message =new String (packet.getData(),0,packet.getLength());\n                inceAr.setText("正在接收8点档：\\n"+message);\n                inced.append(message+"\\n");\n            } catch (IOException e) {\n                e.printStackTrace();\n            }\n            if (b==true){\n                break;\n            }\n\n        }\n\n    }\n\n    public static void main(String[] args) {\n        Receive receive =  new Receive();\n        receive.setSize(460,200);\n    }\n}\n\n')])])])])}),[],!1,null,null,null);n.default=r.exports}}]);