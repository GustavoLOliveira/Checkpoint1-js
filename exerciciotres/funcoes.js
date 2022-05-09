function receberNumero()
{
	var cont=1;
	var num=0; 
	var soma=0;
	
	var apoio = prompt("Digite a quantidade de números que deseja enviar: ");
	
	do{
		num = prompt ("Digite o " + cont + "º número:");
		soma = parseInt(soma) + parseInt(num);
		cont++;
	}while(cont <= apoio);
	
	media = parseInt(soma) / apoio;
	
	alert("A soma dos números é " + soma);
}