import sqlite3

connection = sqlite3.connect('database.db')
print('Opened successfully')

connection.execute('CREATE TABLE posts (author TEXT, title TEXT, body TEXT, likes INTEGER, id INTEGER)')
print('Table successfully created')
connection.close()