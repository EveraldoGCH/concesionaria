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
    return autosNoVendidos},

    autos0KM: function(){let auto0=this.autosParaLaVenta().filter(iterable3 => iterable3.km <= 100)
        return auto0
}}
console.log(concesionaria.autosParaLaVenta)

//*console.log(concesionaria.venderAuto('APL123'))
//console.log(autos)

