class Automovil{
  //Propiedades(caracteristicas)

  constructor(color, modelo, puertas){
    this.color=color;
    this.modelo=modelo;
    this.puertas=puertas;
  }
  //Metodos (Acciones del objeto)
  setColor(color){
    this.color=color;
  }

  encender(estado){
    if(estado){
        console.log("Prendiste el auto");
    }else{
          console.log("Apagaste el auto");
    }
  }

  getColor(){
    return this.color;
  }
}

let toyota=new Automovil("azul","2020",5);
console.log(toyota);

class Camioneta extends Automovil{
  constructor(){
    super();
  }
}

let camioneta=new Camioneta();
camioneta.setColor("Roja");
console.log(camioneta.getColor());
