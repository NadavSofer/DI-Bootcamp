from Menu_Manager import MenuItem

menu = MenuItem()

def add_item_to_menu(name, price):
    return menu.save(name, int(price))

def update_item_in_menu(name, item_type, value):
    return menu.update(name, item_type, value)

def remove_item_from_menu(name):
    return menu.delete(name)

def show_restaurant_menu():
    print(menu.all)

def show_user_item(name):
    print(menu.get_by_name(name))



while True:
    user_in = input(f"""WELCOME TO THE MENU MANAGEMENT SYSTEM WHAT WOULD LIKE to DO? :
    (a) ADD AN ITEM TO THE MENU
    (u) UPDATE AN ITEM ON THE MENU
    (d) DELETE AN ITEM ON THE MENU
    (v) VIEW THE MENU
    (g) GET AN ITEM BY NAME
    (x) EXIT
    : """)


    if user_in == 'a':
        item_to_add = input('type the name of the item to add: ')
        price_to_add = input('type the price of the item to add: ')
        add_item_to_menu(item_to_add, price_to_add)

    if user_in == 'u':
        item_to_update = input('type the name of the item to update: ')
        item_type_update = input('type what to update in the item (name/cost): ')

        if item_type_update == 'name':
            price_to_update = input('type the new name: ')
        elif item_type_update == 'cost':
            price_to_update = input('type the new price: ')

        update_item_in_menu(item_to_update, item_type_update, price_to_update)

    if user_in == 'd':
        item_to_remove = input('type the name of the item to delete: ')
        remove_item_from_menu(show_item)

    if user_in == 'v':
        show_restaurant_menu()

    if user_in == 'g':
        show_item = input('g/ type item name: ')
        show_user_item(show_item)

    if user_in == 'x':
        break