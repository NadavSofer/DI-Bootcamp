-- create table product_orders (
-- id serial primary key,
-- quantity int not null,
-- "date" timestamp not null default current_timestamp,
-- item_id int references items(id) on delete no action
-- );

-- insert into product_orders (quantity, item_id)
-- values 
-- (2, (select id from items where item_name = 'Small Desk')),
-- (1, (select id from items where item_name = 'Large Desk')),
-- (3, (select id from items where item_name = 'Fan'))

-- insert into product_orders (quantity, item_id)
-- values (3, (select id from items where item_name = 'Fan'))

-- create or replace function total_price (order_id int)
-- returns money as $$

-- 	declare 
-- 		total_sum money;
		
-- 	begin 
-- 		 total_sum := (select sum(quantity * price) from product_orders
-- 			join items 
-- 			on product_orders.item_id = items.id
-- 			where product_orders.id = order_id);
-- 		return total_sum;
		
-- 	end;
-- $$ language plpgsql;

-- select total_price(2)