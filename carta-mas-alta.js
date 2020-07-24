var cartaMasAlta={
    
    jugar: function(){
       
 //desarrollo de juego
   //console.log(baraja);
    croupier.mezclar(baraja);
     //console.log(baraja);
    croupier.repartirJugador();
    setTimeout( function () {
        croupier.repartirCroupier()
    },3000);

   
    setTimeout( function () {
        croupier.compararCartas()
    },6000);
}
} 
//invocamos la funcion aqui,luego lo haremos con un bottom
  //jugar();

    document.getElementById('cartaA').onclick=cartaMasAlta.jugar;
