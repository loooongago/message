SET NAMES UTF8;
DROP DATABASE IF EXISTS jd;
CREATE DATABASE msg CHARSET=UTF8;
USE msg;

/**�û���Ϣ��**/
CREATE TABLE msg_user( 
  uid INT PRIMARY KEY AUTO_INCREMENT,  
  uname VARCHAR(32),    
  upwd VARCHAR(32)
);
INSERT INTO msg_user VALUES
(10, 'qiangdong', '123456'),
(20, 'naicha', '456789');