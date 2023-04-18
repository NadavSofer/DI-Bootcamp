-- select distinct name from film join language on language.language_id = film.language_id; -- 1

-- select title, description, name from film left join language on language.language_id = film.language_id; --2.1

-- select title, description, name from film right join language on language.language_id = film.language_id; --2.2

-- create table new_film (
-- id serial primary key,
-- name varchar(50)
-- )

-- insert into new_film (name) values('cheesy sky'), ('scott pilgram'), ('face the face') -- 3

-- create table customer_review(
-- review_id serial primary key,
-- film_id int references film(film_id) on delete cascade,
-- language_id int references language(language_id),
-- title varchar(15),
-- score int,
-- review_text text,
-- last_update date
-- );

-- insert into customer_review(film_id, language_id, title, score, review_text, last_update)
-- values(56, 1, 'review_title2', 7, 'review_text2', now()) -- 5

