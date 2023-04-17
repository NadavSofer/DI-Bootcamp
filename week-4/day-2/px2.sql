-- select * from customer -- 1

-- select CONCAT(first_name, ' ' ,last_name) as full_name from customer -- 2

-- select distinct create_date from customer -- 3

-- select * from customer order by first_name asc -- 4

-- select film_id, title, description, rental_rate from film order by rental_rate asc -- 5

-- select first_name, address,phone from customer join address 
-- on customer.address_id = address.city_id where address.district = 'Texas' --6

-- select * from film where film_id = 15 or film_id = 150; --7

-- select film_id, title, description, length, rental_rate from film where title = 'Scott pilgram vs. the world' -- 8

-- select film_id, title, description, length, rental_rate from film where title like 'Sc%' -- 9

-- select * from film order by rental_rate asc limit 10 -- 10

-- select * from film order by rental_rate asc offset 10 fetch next 10 rows only -- 11

-- select first_name, last_name, amount, payment_date from customer
-- join payment on customer.customer_id = payment.customer_id --12

-- select * from film where film_id not in (select film_id from inventory); -- 13

-- select city, country from city join country on city.country_id = country.country_id -- 14

-- select customer.customer_id, first_name, last_name, amount, payment_date, staff_id from customer 
-- join payment on customer.customer_id = payment.customer_id --15