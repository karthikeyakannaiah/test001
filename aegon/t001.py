print('karthik\n')
import mysql.connector 
mydb = mysql.connector.connect(host = "localhost", user="root", passwd="Karthik@9", database="hitlist")
mycursor = mydb.cursor()
'''sql = "INSERT INTO double_agents (code_name, real_name) VALUES (%s, %s)"
val = ('Johnny Engish', 'Rowan Atkinson')
mycursor.execute(sql, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")
mycursor.execute("SELECT * FROM double_agents")
for i in mycursor:
	print(i)'''
'''sql = "INSERT INTO friends (name) VALUES (%s)"
val = [
	('vinay vura'),
	('vikas ranjan'),
	('bhargav avinash'),
	('akshay'),
	('rishi abhinav'),
	('jayachandra'),
	('suraj'),
	('pavana narasimha'),
	('murari'),
	('sai surya')
]
mycursor.executemany(sql, val)

mydb.commit()

print(mycursor.rowcount, "records inserted.")
mycursor.execute("SELECT * FROM friends")
for i in mycursor:
	print(i)'''