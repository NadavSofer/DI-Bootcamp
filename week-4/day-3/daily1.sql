--part 1

-- create table Customer (
-- id serial primary key,
-- first_name varchar(15),
-- last_name varchar(15) not null
-- );

-- create table Customer_profile (
-- id serial primary key,
-- isLoggedIn bool default false,
-- customer_id int references Customer(id)
-- );

-- insert into Customer(first_name, last_name)
-- values('john','doe'),('jerome', 'lalu'), ('lea', 'rive')

-- insert into Customer_profile(isLoggedIn, customer_id)
-- values(true, (select id from Customer where first_name = 'john')),(false ,(select id from Customer where first_name = 'jerome'))

-- select * from Customer join Customer_profile on Customer.id = Customer_profile.customer_id where isLoggedIn = true -- 4.1

-- select Customer.first_name, Customer_profile.isLoggedIn from Customer 
-- join Customer_profile on Customer.id = Customer_profile.customer_id where isLoggedIn = true -- 4.2

-- select count(*) from Customer 
-- join Customer_profile on Customer.id = Customer_profile.customer_id where isLoggedIn = false -- 4.3

--part 2 ----------------------------------------------------------------------------

-----------  1
-- create table book(
-- book_id SERIAL PRIMARY KEY, 
-- title varchar(50) NOT NULL, 
-- author varchar(50) NOT NULL
-- );

-----------  2
-- insert into book (title, author)
-- values('Alice In Wonderland','Lewis Carroll'),
-- ('Harry Potter','J.K Rowling'),
-- ('To kill a mockingbird', 'Harper Lee')

-----------  3
-- create table student(
-- student_id SERIAL PRIMARY KEY, 
-- name varchar(15) NOT NULL UNIQUE, 
-- age int check(age <= 15) 
-- );

-----------  4
-- insert into student (name, age)
-- values('john',12),('lera',11),('patrick',10),('bob',14);

-----------  5
-- create table library(
-- book_id int,
-- student_id int,
-- borrowed_date date,
	
-- constraint 
-- book_fk_id foreign key(book_id) references book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- constraint
-- student_fk_id foreign key(student_id) references student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
-- );

-----------  6
-- insert into library (book_id, student_id, borrowed_date)
-- values((select book_id from book where title = 'Alice In Wonderland'),(select student_id from student where name = 'john'), '15-02-2022'),
-- ((select book_id from book where title = 'To kill a mockingbird'), (select student_id from student where name = 'bob'), '15-02-2022'),
-- ((select book_id from book where title = 'Alice In Wonderland'), (select student_id from student where name = 'lera'), '15-02-2022'),
-- ((select book_id from book where title = 'Harry Potter'), (select student_id from student where name = 'bob'), '15-02-2022');

-----------  7
-- select * from library -- 7.1

-- select name, title from student 
-- join library on student.student_id = library.student_id
-- join book on library.book_id = book.book_id --7.2

-- select avg(age) from student 
-- join library on student.student_id = library.student_id
-- join book on library.book_id = book.book_id
-- where book.title = 'Alice In Wonderland' --7.3


-- delete from student where name = 'lera'
-- select * from library
-- deleted the library entry as well --7.4


