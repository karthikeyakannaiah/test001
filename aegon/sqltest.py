import mysql.connector

mydb = mysql.connector.connect(
	host = "localhost",
	user = "root",
	passwd = "Karthik@9",
	database ="testdb1"
	)
'''print(mydb)'''

mcsr = mydb.cursor()
'''mcsr.execute("CREATE DATABASE testdb1")'''
#mcsr.execute("CREATE TABLE clients (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))")
mcsr.execute("SHOW TABLES")
for x in mcsr:
	print(x)