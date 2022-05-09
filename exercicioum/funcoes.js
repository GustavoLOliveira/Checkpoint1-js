function receber()
{
    var nome1 = prompt ("Digite seu nome: ");
    var idade1 = prompt("Digite sua idade: ");
    var nome2 = prompt ("Digite seu nome: ");
    var idade2 = prompt("Digite sua idade: ");

    if (idade1 >= 18){
        alert(nome1 + " é maior de idade")
    }
    else{
        alert(nome2 + " é maior de idade")
    }

}