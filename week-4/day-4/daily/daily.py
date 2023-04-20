import random
import json
import requests
import psycopg2

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = ''
DATABASE = 'REST_COUNTRIES'

connection = psycopg2.connect(host = HOSTNAME, user = USERNAME, password = PASSWORD, dbname = DATABASE)

cursor = connection.cursor()

x = requests.get('https://restcountries.com/v3.1/all')

country_list = x.json()

for country in range(10):
    random_num = random.randint(0, len(country_list)-1)
    query = f"insert into countries (name, capital, flag, subregion, population) values ('{country_list[random_num]['name']['common']}', '{country_list[random_num]['capital'][0]}', '{country_list[random_num]['flag']}', '{country_list[random_num]['subregion']}', {country_list[random_num]['population']});"
    with connection.cursor() as cursor:
        cursor.execute(query)
        connection.commit()
    print ('item saved successfully')

