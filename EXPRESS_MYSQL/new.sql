create table users (   
    id int primary key, 
    username varchar(20) unique,
    email varchar(20) unique not null,
    password varchar(20) not null );

