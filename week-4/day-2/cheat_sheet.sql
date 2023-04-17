-- alter table actors rename column birth_date to birth_day --big changes
-- alter table actors alter column number_oscars set data type int -- change data type

-- create table apartment (
-- id serial primary key,
-- loction varchar(50),
-- actor_id int references actors(id)
-- );

-- fkey = foregin key

-- insert into apartment (loction, actor_id) values ('beverly hills', 1)
-- insert into apartment (loction, actor_id)
-- values ('california', (select id from actors where first_name = 'Matt'))

-- select first_name, last_name, loction
-- from actors 
-- join apartment
-- on actors.id = apartment.actor_id;

-- create table producers (
-- id serial primary key,
-- first_name varchar (15),
-- last_name varchar (15)
-- );


-- insert into producers (first_name, last_name)
-- values ('Jerry', 'Bruckheimer'),
-- ('Kevin', 'Feige'),
-- ('Avi', 'Arad');

-- alter table apartment rename column actor_id to resident_id

-- insert into apartment (loction, resident_id)
-- values ('florida', (select id from producers where first_name = 'Avi'))

-- insert into apartment (loction, resident_id)
-- values ('new-york', (select id from producers where first_name = 'Kevin'))

-- alter table apartment add column producer_id int;
-- alter table apartment add constraint fk_producers
-- foreign key (producer_id) references producers(id);

-- alter table apartment rename column resident_id to actor_id;

-- select first_name, last_name, loction
-- from actors as ac
-- left join apartment as ap
-- on ac.id = ap.actor_id;

-- insert into apartment (loction, actor_id)
-- values ('alaska', (select id from actors where first_name = 'Matt'))

-- many to many

-- actors -> actors_movies <- movies

-- create table movies (
-- id serial primary key,
-- title varchar(50)
-- ); 


-- create table actors_movies (
-- actor_id int references actors(id),
-- movie_id int references movies(id)
-- ); 


-- insert into movies (title) values 
-- ('oceans eleven'), ('good will hunting');


-- insert into actors_movies (actor_id, movie_id) values
-- ((select id from actors where first_name = 'Matt'), (select id from movies where title = 'oceans eleven')),
-- ((select id from actors where first_name = 'Matt'), (select id from movies where title = 'good will hunting')),
-- ((select id from actors where first_name = 'Matt'), (select id from movies where title = 'Pulp fiction'));


-- insert multiple movies for same actor 
