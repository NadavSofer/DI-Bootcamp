-- create table students(
-- id serial primary key,
-- first_name varchar(15),
-- last_name varchar(15),
-- birth_date date
-- );

-- insert into students(first_name, last_name, birth_date)
-- values ('Marc','Benichou','02-11-1998'),
-- ('Yoan','Cohen','03-12-2010'),
-- ('Lea','Benichou','27-07-1987'),
-- ('Amelia','Dux','07-04-1996'),
-- ('David','Grez','14-06-2003'),
-- ('Omer','Simpson','03-10-1980');

-- insert into students(first_name, last_name, birth_date)
-- values ('Nadav','Sofer','30-08-1998');

-- select * from students
-- select first_name as first_name, last_name as last_name from students
-- select * from students where first_name = 'Marc' and last_name = 'Benichou'
-- select * from students where first_name = 'Marc' or last_name = 'Benichou'
-- select * from students where first_name like '%a%'
-- select * from students where first_name like 'A%'
-- select * from students where first_name like '%a'
-- select * from students where first_name like '%a_'
-- select * from students where id = 1 and id = 3
-- select * from students where birth_date > ' 1/01/2000';