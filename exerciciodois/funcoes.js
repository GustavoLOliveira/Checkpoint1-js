function receberNumero()
{
	var cont=1;
	var num=0;
	var soma=0; 
	
	var apoio = prompt("Digite a quantidade de números que deseja enviar:");
	
	while(cont <= apoio){
		num = prompt ("Digite o " + cont + "º número");
		soma = parseInt(soma) + parseInt(num);
		cont++;
	}
	media = parseInt(soma) / apoio;
	alert("A soma dos números é " + soma);
}