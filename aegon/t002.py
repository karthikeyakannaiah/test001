import mysql.connector 
mydb = mysql.connector.connect(host = "localhost", user="root", passwd="Karthik@9", database="auth")
mycursor = mydb.cursor()
mycursor.execute("SELECT * FROM users")
for i in mycursor:
	print(i)


yes = ['yes','Yes']
no = ['no','No']
print('are you a existing user? (yes or no)\n')
con001 = input()
if con001 in no :
	a001 = input('Sign up\nwhats your username:\n')
	a002 = input('whats your password:\n')
	query001 = "INSERT INTO users VALUES (%s,%s)"
	inp001 = [(a001,a002)]
	#print(inp001)
	mycursor.executemany(query001,inp001)
	mydb.commit()
	print('>>>>_>>>>',mycursor.rowcount, "record inserted.")
if con001 in yes :
	a001 = input('Login\nwhats your name:\n>>>Note that your name must match in database\n')
	print('here is your information:')
	query002 = 'SELECT * FROM users WHERE username = %s;'
	inp002 = [a001]
	mycursor.execute(query002,inp002)
	#mydb.commit()
	for i in mycursor:
		print(i)
else:
	print('invalid choice')