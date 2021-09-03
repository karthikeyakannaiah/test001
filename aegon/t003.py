import tkinter
from tkinter import *
from tkinter import messagebox
window = tkinter.Tk()
window.geometry("300x200")
window.title("Xyeko")
label = tkinter.Label(window, text = "well #### you").pack()
def clicked():
	messagebox.showinfo( "Xyeko", "#### you")
	
	window.mainloop()
bt = tkinter.Button(window,text="enter",bg = "green",fg  = "red",command = clicked)
L1 = Label(window, text = "User Name")
L1.pack( side = LEFT)
E1 = Entry(window, bd = 5)
E1.pack(side = RIGHT)
bt.pack()
window.mainloop()