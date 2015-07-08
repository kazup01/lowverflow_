create table users (
    name varchar(255) primary key,
    email text not null
);

create table customer (
	id int auto_increment primary key,
	name varchar(255),
	address varchar(255),
	email varchar(255),
	phone varchar(20)
);