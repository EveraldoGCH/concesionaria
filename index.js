let autos= require('./autos')

const concesionaria = {
   autos,
   buscarAuto:function(patente){
    return this.autos.find(iterable=>iterable.patente==patente)||null
    },
    venderAuto: function(patente){
    this.buscarAuto(patente)
    if (this.buscarAuto!=null){
        let indexauto = autos.indexOf(this.buscarAuto(patente))
     autos[indexauto].vendido = true
    
}
},
autosParaLaVenta:function(){let autosNoVendidos = this.autos.filter(carros=>carros.vendido==false)
    return autosNoVendidos
},

autos0KM: function(){let auto0=this.autosParaLaVenta().filter(iterable3 => iterable3.km <= 100)
        return auto0
},
listaDeVentas: function(){
   let autosVendidos= autos.filter(carrosv=>carrosv.vendido==true)
   let autosLista=autosVendidos.map(carrosv=>carrosv.precio)
   return autosLista
},
totalDeVentas: function(){let ventasSumadas=this.listaDeVentas().reduce((acumulador=0, valor=0)=>acumulador + valor, 0)
return ventasSumadas
},
puedeComprar: function(auto, persona){
   if(auto.precio/auto.cuotas<=persona.capacidadDePagoEnCuotas&&auto.precio<=persona.capacidadDePagoTotal){
      return true
   }
   else if (auto.precio/auto.cuotas>=persona.capacidadDePagoEnCuotas&&auto.precio>=persona.capacidadDePagoTotal){
      return 
   }
   else return false
}
}
