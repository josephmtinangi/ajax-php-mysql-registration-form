CREATE TABLE IF NOT EXISTS users (
  id int(11) not null auto_increment,
  username varchar(25) not null,
  email varchar(60) not null unique,
  password varchar(255) not null,
  primary key (id)
);
