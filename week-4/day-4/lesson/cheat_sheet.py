import psycopg2
import datetime

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'Ns9517530809'
DATABASE = 'hollywood'

connection = psycopg2.connect(host = HOSTNAME, user = USERNAME, password = PASSWORD, dbname = DATABASE)

cursor = connection.cursor()

query = 'select * from actors'

def select_column(column_name: str, table_name: str):
    query = f'select {column_name} from {table_name}'
    return query


def select_columns(columns: list[str], table_name: str):
    str_columns = ', '.join(columns)
    query = f'select {str_columns} from {table_name}'
    return query


def run_query(query: str):
    with connection.cursor() as cursor:
        cursor.execute(query)
        res = cursor.fetchall()
    return res


list1 = ['first_name', 'last_name']
query1 = select_columns(list1, 'actors')
res1 = run_query(query1)

# print(res1)
# for item in res1:
#     print(item)


f_name = 'Brad'
l_name = 'Pitt'
birthday = datetime.date(1970, 1, 1)
num_oscars = 4
q = f"insert into actors (first_name, last_name, birth_day, number_oscars) values ('{f_name}', '{l_name}', '{birthday}', {num_oscars});"

def change(query):
    with connection.cursor() as cursor:
        cursor.execute(query)
        connection.commit()

# change(q)

