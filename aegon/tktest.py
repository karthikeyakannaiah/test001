from t002 import mydb
from t002 import mycursor
import tkinter
from tkinter import *
from tkinter import messagebox
window = tkinter.Tk()
window.title("Calculator")
def calculate():
	plus=["+"]
	minus=["-"]
	multi=["*"]
	divi=["/"]
	var1=int(e1.get())
	var2=int(e2.get())
	option=w.get()
	if option in plus:
		res = var1+var2
	if option in minus:
		res = var1-var2
	if option in multi:
		res = var1*var2
	if option in divi:
		res = var1/var2
	myText.set(res)
	query001 = "INSERT INTO test1 VALUES (%s,%s,%s,%s)"
	inp001 = [res,var1,option,var2]
	mycursor.execute(query001,inp001)
	mydb.commit()
myText=StringVar()
label = tkinter.Label(window, text = "Calculator").grid(row=0,sticky=W)
Label(window, text="first number:").grid(row=1,sticky=W)
Label(window, text="Option:").grid(row=2,sticky=W)
Label(window, text="Second number:").grid(row=3,sticky=W)
e1 = Entry(window)
e2 = Entry(window)
e1.grid(row=1,column=1)
e2.grid(row=3,column=1)
bt = Button(window,text="calculate",command=calculate, padx=5, pady=5,activebackground="light green")
bt.grid(row=2,column=3,sticky=W)
w = Spinbox(window,values=("+","-","*","/"))
w.grid(row=2,column=1)
result=Label(window, text="", textvariable=myText).grid(row=4,column=1, sticky=W)

window.mainloop()