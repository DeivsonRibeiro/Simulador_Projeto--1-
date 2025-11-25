async function principal() 
{
// Comece seu programa aqui

var s1=0;
var s2=0;
var s3=0;
var s4=0;


s1 = lerSensor(1);
s2 = lerSensor(2);
s3 = lerSensor(3);
s4 = lerSensor(4);

mostrarMensagem("S1:" + s1 + " S2:" + s2 + " S3:" + s3 + " S4:" + s4) ;

}

/*
Exibe uma mensagem no Display
	mostrarMensagem(mensagem)

Acionamento de válvulas
	abrirValvulaEntrada()
	fecharValvulaEntrada()
	abrirValvulaSaida()
	fecharValvulaSaida()

Leitura dos sensores
	lerSensor(sensor)

Repete a execução do programa
	repetir()
	
Esperar	
	await esperar(2000);
	
	
*/





























/*
var s1=0;
var s2=0;
var s3=0;
var s4=0;
var nivel;

s1 = lerSensor(1);
s2 = lerSensor(2);
s3 = lerSensor(3);
s4 = lerSensor(4);

nivel = s4*5 + s3*30 + s2*30 + s1*30;

mostrarMensagem("Nivel Caixa =" + nivel);
*/