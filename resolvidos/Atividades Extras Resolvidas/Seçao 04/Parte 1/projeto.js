async function principal() 
{
// Comece seu programa aqui


// Programa	
while (true)
{
	abrirValvulaEntrada();
	await esperar(2000);
	fecharValvulaEntrada()
	await esperar(2000);
}








}

/*
Exibe uma mensagem no Display
	

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