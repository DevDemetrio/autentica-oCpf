class Valida {
  _cpf;

  ValidaCpf(cpf) {
    /*
    return this.validaNumeroCpf(cpf);
    */
  }

  set valor(recebeCpf) {
    this._cpf = recebeCpf;
  }

  get getaCpf() {
    return this._cpf;
  }

  validaNumeroCpf(numeroCpf) {
    let somma = 0;
    const numerosPrimeiroDigito = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    const numerosSegundoDigito = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

    console.log(numeroCpf);
    let array = numeroCpf.split("");

    if (array.length > 11) {
      const cpfModificado = array.map((item, index) => {
        if (isNaN(item)) {
          array.splice(index, 1);
        }
      });
    }
    if (array.length == 0) {
      erro.classList.add("cpf__mensagem__erro");
      erro.textContent = menssageErro(2);
      return;
    }

    for (let i = 0; i < 9; i++) {
      somma += parseInt(array[i]) * numerosPrimeiroDigito[i];
    }

    if (encontraDigito(somma % 11) != parseInt(array[9])) {
      console.log("Numero de cpf errado");
      return;
    }

    somma = 0;
    for (let j = 0; j < 10; j++) {
      somma += parseInt(array[j]) * numerosSegundoDigito[j];
    }

    console.log(somma);
    if (encontraDigito(somma % 11) != parseInt(array[10])) {
      console.log("Numero de cpf errado");
      return;
    }

    console.log("cpf ok");

    const menssageErro = (error) => {
      if (error == 1) {
        return "CPF incorreto";
      }
      if (error == 2) {
        return "Informe o CPF";
      }
    };

    function encontraDigito(numero) {
      if (numero < 2) {
        return 0;
      } else {
        return 11 - numero;
      }
    }
  }
}

const Cpf1 = new Valida();

console.log(Cpf1.ValidaCpf("82886997234"));

/*
const Cpf1 = Valida.ValidaCpf('82886997234');
*/

/*
class cpfNum{

    constructor(numeroCpf){
     
          let somma = 0;
          const numerosPrimeiroDigito = [10, 9, 8, 7, 6, 5, 4, 3, 2];
          const numerosSegundoDigito = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
                  

      
            let array = numeroCpf.split("");

       
         if(array.length > 11){
          const cpfModificado = array.map((item, index) => {
            if(isNaN(item)){
               array.splice(index,1);
            }
          })
         }
            if( array.length == 0){
              erro.classList.add("cpf__mensagem__erro");
              erro.textContent = menssageErro(2)
              return;
            }

            for (let i = 0; i < 9; i++) {
              somma += parseInt(array[i]) * numerosPrimeiroDigito[i];
            }

            if (encontraDigito(somma % 11) != parseInt(array[9])) {
              console.log("Numero de cpf errado");
              return;
            }

            somma = 0;
            for (let j = 0; j < 10; j++) {
              somma += parseInt(array[j]) * numerosSegundoDigito[j];
            }

            console.log(somma);
            if (encontraDigito(somma % 11) != parseInt(array[10])) {
              console.log("Numero de cpf errado");
              return;
            }

            console.log("cpf ok");
            

          const menssageErro = (error) =>{
            if(error == 1){
              return "CPF incorreto";
            }
            if(error == 2){
              return "Informe o CPF";
            }
          }

          function encontraDigito(numero) {
            if (numero < 2) {
              return 0;
            } else {
              return 11 - numero;
            }
          }
                }
          }


const cpf1 = new cpfNum('828.869.972/34');

console.log(cpf1);
*/
