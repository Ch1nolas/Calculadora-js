masa=int(input('ingrese la masa: '));
fuerza=int(input('ingrese la fuerza: '));
friccionsn=input('ingrese s si hay friccion o ingrese n si no hay: ');
planoincl=input('es plano inclinado? si/no: ');
gravedad=10;
ue=0;
ud=0;
peso=masa*gravedad;
var math = require('math');
if (planoincl=='si') {
	angulo=int(input('ingrese el angulo que no supere los 90°: '));
	pesoy=angulo*180/3.14;
	math.sin(pesoy);
if (friccionsn=='s') {
    console.log('TABLA DE MATERIALES');
    console.log('1-madera sobre madera');
    console.log('2-Acero sobre hielo');
    console.log('3-caucho sobre teflon');
    console.log('4-teflon sobre teflon');
    console.log('5-vidreo sobre vidreo');
    console.log('6-esqui(encerrado) sobre nieve (0°C)');
    console.log('7-madera sobre cuero');
    console.log('8-aluminiio sobre acero');
    console.log('9-articulaciones humanas');
    opcion=input('ingrese el numero de el material que quieras: ');
    if (opcion=='1') {
        ue=0.5;
        ud=0.3;
    } else if (opcion=='2') {
        ue=0.02;
        ud=0.02;
    } else if (opcion=='3') {
        ue=0.04;
        ud=0.04;
    } else if (opcion=='4') {
        ue=1;
        ud=0.8;
    } else if (opcion=='5') {
        ue=0.9;
        ud=0.4;
    } else if (opcion=='6') {
        ue=0.1;
        ud=0.05;
    } else if (opcion=='7') {
        ue=0.5;
        ud=0.4
    } else if (opcion=='8') {
        ue=0.61;
        ud=0.47;
    } else if (opcion=='9') {
        ue=0.02;
        ud=0.003;
    } else {
        console.log('error');

N=masa*gravedad;
fre=ue*N;
if (fuerza>fre) {
    console.log('se mueve');
    frd=ud*N;
    a=(fuerza-frd)/masa;
    console.log('La aceleracion es', a, 'm/s2');
} else {
    console.log('No se vence la friccion');
    console.log('La aceleracion es 0');


}
    }

}

}
