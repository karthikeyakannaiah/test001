n = int(input())
list=[]
for i in range(0,n):
    list.append(int(input()))
#print(list)
for i in range(0,n):
    listvar=list[i]//10
    var0=listvar*10
    var5=(listvar*10)+5
    var10 = (listvar * 10) + 10
    diff1=var5-list[i]
    diff2 = var10-list[i]
    if list[i]<38:
        list[i]=list[i]
    if list[i]>=38:
        if list[i]%5==0 :
            list[i]=list[i]
        if list[i]%10==0 :
            list[i]=list[i]
        if list[i]<var5 and list[i]>var0 :
            if diff1<3:
                list[i]=(var5)
            if diff1==3:
                list[i]=list[i]
            else:
                list[i]=list[i]
        if list[i]>var5 and list[i]<var10 :
            if diff2<3:
                list[i]=(var10)
            if diff1==3:
                list[i]=list[i]
            else:
                list[i]=list[i]
for i in range(0,n):
    print(list[i])
