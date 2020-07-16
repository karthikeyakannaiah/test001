yes =['yes']
no =['no']
import datetime
d = datetime.date.today()
print("||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n\nDate>>>>>",d,"\n")
#print(d.day,d.year,d.weekday,d,isoweekday)
#weekday monday 0 sunday 6
#isoweekday mon 1 sun 7
#tdelta = datetime.timedelta(days=7)
#print(d+tdelta)
#print("\ninteresting fact is",tilbd.seconds(),"seconds until your Birthday")
#
def calculator():
    print('\nyour first number=')
    a0001 = int(input())
    print('\nyour operation (+-*/) :')
    a0002 = input()
    print('\nyour second number=')
    a0003 = int(input())
    add =['+']
    sub=['-']
    mul=['*']
    div = ['/']
    if a0002 in add:
        print('\nyou result is', a0001+a0003)
        rep011 = input('do you calculate again yes or no:')
        if rep011 in yes:
            calculator()
        else:
            print('ok then bye')
    elif a0002 in sub:
        print('\nyou result is', a0001-a0003)
        rep011 = input('do you calculate again yes or no:')
        if rep011 in yes:
            calculator()
        else:
            print('ok then bye')
    elif a0002 in mul:
        print('\nyou result is', a0001*a0003)
        rep011 = input('do you calculate again yes or no:')
        if rep011 in yes:
            calculator()
        else:
            print('ok then bye')
    elif a0002 in div:
        print('\nyou result is', a0001%a0003)
        rep011 = input('do you calculate again yes or no:')
        if rep011 in yes:
            calculator()
        else:
            print('ok then bye')
    else:
        print('invalid operator')
matrix01 = ['matrix']
def matrix():
    print("welcome matrix solver")
    print("|a b c|\n|d e f|\n|g h i|")
    amat = int(input("\n\nput a="))
    bmat = int(input("\n\nput b="))
    cmat = int(input("\n\nput c="))
    dmat = int(input("\n\nput d="))
    emat = int(input("\n\nput e="))
    fmat = int(input("\n\nput f="))
    gmat = int(input("\n\nput g="))
    hmat = int(input("\n\nput h="))
    imat = int(input("\n\nput i="))
    ans = amat*(emat*imat - hmat*fmat) - bmat*(dmat*imat - gmat*fmat) + cmat*(dmat*hmat - emat*gmat)
    print('your answer for matrix is',ans)
print('hello I am your assistant\n')
in001=input('type hello to start\n')
hello = ['hello','hi','h','hola','wassup']
if in001 in hello:
    name = input('welcome your name please:')
    print('can i know your birthday\n')
    bdate01 = int(input('date='))
    bmonth01 = int(input('\nmonth='))
    byear01 = int(input('\nyear='))
    bday = datetime.date(byear01,bmonth01,bdate01)
    bdayc = datetime.date(d.year, bmonth01, bdate01)
    bdayn = datetime.date(d.year+1, bmonth01, bdate01)
    tilbd = bdayc - d
    ageb = d.year-byear01
    #if tilbd <= 0:
    tilbd = bdayc - d
    print("\ndays until your Birthday", tilbd,'\nyour gonna hit',ageb,' years')
    print("what can i do for you ",name,'\n')
    rep01 = input()
    calc = ['calculator','calculate','add','subtract','multiply','divide']
    swear = ['fuckoff','fuck','asshole']
    if rep01 in calc:
        calculator()
    if rep01 in matrix01:
        matrix()
    if rep01 in swear:
        print('Ok Boomer')
else:
    print('invalid order')
