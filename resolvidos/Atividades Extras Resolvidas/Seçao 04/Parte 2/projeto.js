async function principal() 
{
// Comece seu programa aqui
var contador=0;
var nivel=0; 

// Programa	
while (contador<5)
{
	abrirValvulaEntrada();
	await esperar(2000);
	fecharValvulaEntrada()
	await esperar(2000);
	
	contador = contador + 1;
	nivel = nivel + 12;
	mostrarMensagem("Num. Ciclo: " + contador + " -  Nível: " + nivel + "%");
	
}

mostrarMensagem("Programa Finalizado");






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