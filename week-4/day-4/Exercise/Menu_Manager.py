import psycopg2

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'Ns9517530809'
DATABASE = 'Restaurant_Manager'

connection = psycopg2.connect(host = HOSTNAME, user = USERNAME, password = PASSWORD, dbname = DATABASE)

cursor = connection.cursor()

#  part 1 -------------------------------------------------------------------

class MenuItem():

    def save(self, item_name:str, price:int):
        try:
            query = f"insert into menu (name, cost) values ('{item_name.capitalize()}', {price});"
            with connection.cursor() as cursor:
                cursor.execute(query)
                connection.commit()
            print ('item saved successfully')
        except:
            raise ValueError('invalid input')
        

    def delete(self, item_name: str):
        try:
            query = f"delete from menu where name = '{item_name.capitalize()}';"
            with connection.cursor() as cursor:
                cursor.execute(query)
                connection.commit()
            print ('item deleted successfully')
        except:
            raise ValueError('invalid input')
        
    def update(self, item_name:str , item_type:str , value:str|int ):
        try:
            if type(value) == str:
                query = f"update menu set {item_type} = '{value}' where name = '{item_name.capitalize()}';"
            elif type(value) == int:
                query = f"update menu set {item_type} = {value} where name = '{item_name.capitalize()}';"

            with connection.cursor() as cursor:
                cursor.execute(query)
                connection.commit()
            print ('item updated successfully')
        except:
            raise ValueError('invalid input')

    @property
    def all(self):
        query = 'select name, cost from menu'
        with connection.cursor() as cursor:
            cursor.execute(query)
            res = cursor.fetchall()
        return res
    
    def get_by_name (self, item_name:str):
            query = f"select name, cost from menu where name = '{item_name.capitalize()}'"
            with connection.cursor() as cursor:
                cursor.execute(query)
                res = cursor.fetchall()
            
            if len(res) > 0:
                return res
            else:
                return None

menu = MenuItem()

