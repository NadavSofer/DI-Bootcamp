-- update film set language_id = 2 where film_id < 10; --1

-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
-- customer_address_id_fkey, it connects the customer and the address and gives us the ability to use ids to reference the address -- 2

-- it worked fine. no issuses... becuase the one sided relations between it and film -- 3

-- select count(*) from rental where return_date is null -- 4

-- select * from rental 
-- join inventory on inventory.inventory_id = rental.inventory_id 
-- join film on film.film_id = inventory.film_id 
-- where return_date is null order by rental_rate desc limit 30 - 5

-- select title, actor, description from film
-- join film_actor on film.film_id = film_actor.film_id
-- join actor on actor.actor_id = film_actor.actor_id
-- where actor.first_name = 'Penelope' and last_name = 'Monroe' and description like '%Sumo%' --6.1

-- select title, rating, length from film
-- join film_category on film.film_id = film_category.film_id
-- join category on category.category_id = film_category.category_id
-- where film.rating = 'R' and category.name = 'Documentary' and length < 60 --6.2

-- select title, customer.first_name from film
-- join inventory on film.film_id = inventory.film_id
-- join rental on inventory.inventory_id = rental.inventory_id
-- join customer on rental.customer_id = customer.customer_id
-- where customer.first_name = 'Matthew' and  customer.last_name = 'Mahan' 
-- and film.rental_rate > 4 and (rental.return_date > '28-07-2005' and rental.return_date < '01-08-2005'); -- 6.3

-- select title, customer.first_name, replacement_cost from film
-- join inventory on film.film_id = inventory.film_id
-- join rental on inventory.inventory_id = rental.inventory_id
-- join customer on rental.customer_id = customer.customer_id
-- where customer.first_name = 'Matthew' and  customer.last_name = 'Mahan'
-- and film.description like '%Boat%' order by film.replacement_cost desc limit 1; -- 6.4