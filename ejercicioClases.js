//1. Clase Computadora
class Computadora{

    constructor(ram="4GB DDR3",hdd="1T",cpu="Dell"){
      this.ram=ram;
      this.hdd=hdd;
      this.cpu=cpu;
    }
    encenderComputadora(estado){
      if(estado){
          console.log("Has encendido la computadora");
      }else{
          console.log("Has apagado la computadora");
      }
    }

    setRam(ram){
      this.ram=ram;
    }

    getRam(){
      return this.ram;
    }


    setHdd(hdd){
      this.hdd=hdd;
    }

    getHdd(){
      return this.hdd;
    }

    setCpu(cpu){
      this.cpu=cpu;
    }

    getCpu(){
      return this.cpu;
    }
}
console.log("PUNTO 1");
console.log("-------");
console.log("Computadora por defecto");
let miPC1 = new Computadora();
console.log("Memoria: "+miPC1.getRam()+" Disco duro: "+miPC1.getHdd()+" CPU: "+miPC1.getCpu());
console.log("");
console.log("Computadora personalizada");
let miPC2 = new Computadora("20 GB", "5T", "IBM");
console.log("Memoria: "+miPC2.getRam()+" Disco duro: "+miPC2.getHdd()+" CPU: "+miPC2.getCpu());
miPC2.encenderComputadora(true);

console.log("-------------------------------------------");
//2. Clase Motocileta
class Motocicleta{
  constructor(modelo="Yamaha",cilindraje="125cc",tipo="Enduro"){
    this.modelo=modelo;
    this.cilindraje=cilindraje;
    this.tipo=tipo;
  }

  encenderMoto(estado){
    if(estado){
        console.log("Has encendido la moto");
    }else{
        console.log("Has apagado la moto");
    }
  }

  setModelo(modelo){
    this.modelo=modelo;
  }

  getModelo(){
    return this.modelo;
  }

  setCilindraje(cilindraje){
    this.cilindraje=cilindraje;
  }

  getCilindraje(){
    return this.cilindraje;
  }

  setTipo(tipo){
    this.tipo=tipo;
  }

  getTipo(){
    return this.tipo;
  }

}
console.log("PUNTO 2");
console.log("-------");
console.log("Motocileta por defecto");
let miMoto1 = new Motocicleta();
console.log("Modelo: "+miMoto1.getModelo()+" Cilindraje: "+miMoto1.getCilindraje()+" Tipo: "+miMoto1.getTipo());
console.log("");
console.log("Motocicleta personalizada");
let miMoto2 = new Motocicleta("Ducati", "650cc", "Pista");
console.log("Modelo: "+miMoto2.getModelo()+" Cilindraje: "+miMoto2.getCilindraje()+" Tipo: "+miMoto2.getTipo());
miMoto2.encenderMoto(true);

console.log("-------------------------------------------");
//3. Clase hija Laptop - Computadora
class Laptop extends Computadora {
  constructor(color,tarjeta_inalambrica) {
    super();
    this.color=color;
    this.tarjeta_inalambrica=tarjeta_inalambrica;
  }

  getColor(){
    return this.color;
  }
  setColor(color){
    this.color=color;
  }
  gettarjeta_inalambrica(){
    return this.tarjeta_inalambrica;
  }
  settarjeta_inalambrica(tarjeta_inalambrica){
    this.tarjeta_inalambrica=tarjeta_inalambrica;
  }
}
console.log("PUNTO 3 - HERENCIA");
console.log("------------------");
let mylap=new Laptop("azul","Tp-link");
mylap.setHdd("2T");
mylap.setRam("10GB");
console.log("Disco duro: "+ mylap.getHdd());
console.log("Memoria: "+ mylap.getRam());
console.log("Color: "+ mylap.getColor());
console.log("Tarjeta inalambrica: "+ mylap.gettarjeta_inalambrica());

console.log("-------------------------------------------");
