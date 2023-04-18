-- one to one 
-- user <-> profile

-- create table script (
-- movie_id int primary key,
-- title varchar(50),
-- author varchar(50),
-- story text,
-- constraint dk_movie_id foreign key (movie_id) references movies(id)
-- );


-- insert into script (movie_id ,title, author, story)
-- values ((select id from movies where title = 'Pulp fiction'), 'thingy test', 'thing thing', 'big thing thing')

-- insert into script (movie_id ,title, author, story)
-- values ((select id from movies where title = 'oceans eleven'), 'thingy test2', 'thing thing2', 'big thing thing2')
-- ,((select id from movies where title = 'good will hunting'), 'thingy test3', 'thing thing3', 'big thing thing3')

--------------------------------------------------------------------^^^^
-- insert into script (movie_id ,title, author, story)
-- values ((select id from movies where title = 'cheesy sky'), 'thingy test4', 'thing thing4', 'big thing thing4')

--    ^ this won't work because there is no movie by that name 
-- 	    so no id to take

-- insert into script (movie_id ,title, author, story)
-- values ((select id from movies where title = 'Pulp fiction'), 'thingy test', 'thing thing', 'big thing thing')

--    ^ this won't work because the id is already in the table 
--      and since it is a primary key it can't be repeated

--functions ---------------------------------------------------------------


-- create or replace function full_name (first_name varchar(50), last_name varchar(50))
-- returns varchar(100) as $$
-- 	begin 
-- 		return first_name || ' ' || last_name;
-- 	end
-- $$ language plpgsql;

-- select full_name(first_name, last_name), number_oscars from actors

---------------------------------------------------------------------------
-- create table person (
-- id serial primary key,
-- name varchar(50) not null
-- );

-- create table passport (
-- passport_id int primary key,
-- constraint fk_person_id foreign key (passport_id) references person(id) on delete cascade
-- );

-- insert into person (name)
-- values ('ben'), ('jon')

-- insert into passport (passport_id)
-- values ((select id from person where name = 'ben')), 
-- ((select id from person where name = 'jon'))

-- delete from person where name = 'jon'
