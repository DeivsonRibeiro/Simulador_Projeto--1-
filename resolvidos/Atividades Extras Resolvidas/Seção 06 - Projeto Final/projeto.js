async function principal() 
{
//Comece seu programa aqui
    var s1,s2,s3,s4;
	var nivel;
	
	while(true)
	{
		s1= lerSensor(1);
		s2= lerSensor(2);
		s3= lerSensor(3);
		s4= lerSensor(4);
		
		nivel = s4*5 + s3*30 + s2*30 + s1*30;
		
		
			//Controle da Válvula 
			if (s4==0)
			{
				abrirValvulaEntrada();
				mostrarMensagem("Tanque Vazio!!! <br /> Nivel: " + nivel + "%" );
			}
		    else
			{
				if (s1==1)
				{
					fecharValvulaEntrada();
					mostrarMensagem("Tanque Cheio!!! <br /> Nivel: " + nivel + "%" );
				}
				else
				{
					mostrarMensagem("Tanque pela metade!! <br /> Nivel: " + nivel + "%" );
				}
			}
		 await esperar(1000);
		 
		 
		 
		 
		 
	
	}



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
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
