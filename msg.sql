CREATE TABLE t_msg( 
  uid INT PRIMARY KEY AUTO_INCREMENT,  
  msg VARCHAR(200),    
  uname VARCHAR(32),
  time datetime
);
INSERT INTO t_msg VALUES
(1, 'qiangdong','qiangdong','123456',now()),
(2, 'naicha', 'qiangdong','456789',now());