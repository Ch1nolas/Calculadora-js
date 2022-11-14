masa=int(input("ingrese la masa: "))
fuerza=int(input("ingrese la fuerza: "))
friccionsn=input("ingrese s si hay friccion o ingrese n si no hay: ")
planoincl=input("es plano inclinado? si/no: ")
gravedad=10
ue=0
ud=0
peso=masa*gravedad
import math 
if planoincl=="si":
	angulo=int(input("ingrese el angulo que no supere los 90°: "))
	pesoy=angulo*180/3.14
	math.sin(pesoy)
if friccionsn=="s":
    print("TABLA DE MATERIALES")
    print("1-madera sobre madera")
    print("2-Acero sobre hielo")
    print("3-caucho sobre teflon")
    print("4-teflon sobre teflon")
    print("5-vidreo sobre vidreo")
    print("6-esqui(encerrado) sobre nieve (0°C)")
    print("7-madera sobre cuero")
    print("8-aluminiio sobre acero")
    print("9-articulaciones humanas")
    opcion=input("ingrese el numero de el material que quieras: ")
    if opcion=="1":
        ue=0.5
        ud=0.3
    elif opcion=="2":
        ue=0.02
        ud=0.02
    elif opcion=="3":
        ue=0.04
        ud=0.04
    elif opcion=="4":
        ue=1
        ud=0.8
    elif opcion=="5":
        ue=0.9
        ud=0.4
    elif opcion=="6":
        ue=0.1
        ud=0.05
    elif opcion=="7":
        ue=0.5
        ud=0.4      
    elif opcion=="8":
        ue=0.61
        ud=0.47
    elif opcion=="9":
        ue=0.02
        ud=0.003
    else:
        print("error")
    
N=masa*gravedad
fre=ue*N
if fuerza>fre:
    print("se mueve")
    frd=ud*N
    a=(fuerza-frd)/masa
    print("La aceleracion es", a, "m/s2")
else:
    print("No se vence la friccion")
    print("La aceleracion es 0")