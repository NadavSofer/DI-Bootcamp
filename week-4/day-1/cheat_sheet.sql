-- create table house_expenses (
-- id serial primary key,
-- paid_date date,
-- electricity float,
-- water float,
-- paid_by varchar(10)
-- );

-- insert into house_expenses(paid_date, electricity, water, paid_by)
-- values('2023-02-01', 44.4, 15.3, 'person1'),
-- ('2023-03-01', 50.0, 17.1, 'person2'),
-- ('2023-04-01', 55.7, 12.5, 'person2'),
-- ('2023-05-01', 49.3, 17.9, 'person1'),
-- ('2023-06-01', 47.1, 10.9, 'person2');

-- select * from house_expenses; --all data
-- select paid_by from house_expenses; --spesific column
-- select water, electricity from house_expenses; -- multiple columns


-- select * from house_expenses where id <= 2; --spesific rows
-- select paid_by from house_expenses where id <= 2; --spesific rows and columns
-- select * from house_expenses where id= 1 or id = 2; --multiple conditions

-- select max(water) as max_water, min(electricity) as min_electricity from house_expenses;
-- select avg(electricity) as avg_electricity from house_expenses where paid_by != 'person1';


-- select paid_by ,sum(electricity) as sum_electricity, avg(electricity) as avg_electricity from house_expenses group by paid_by
-- select paid_by, sum(electricity + water) as total_paid, max(electricity + water) as max_paid from house_expenses group by paid_by

-- update house_expenses set electricity = 43.8, water = 16.1 where id = 2 -- how to update data
-- update house_expenses set electricity = 0.0 where paid_by = 'person1';

-- delete from house_expenses where id = 1
-- delete from house_expenses where electricity < 50;
-- delete from house_expenses where paid_date < '2023-04-01';

