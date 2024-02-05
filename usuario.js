let url = 'https://jsonplaceholder.typicode.com/users/';
fetch(url)
    .then( response => response.json() )
    .then( data => mostrarData(data) )
    .catch( error => console.log(error) )

const mostrarData = (data) => {
    console.log(data)
    let body = ''; // Inicializar el contenido HTML

    for (let i = 0; i < data.length; i++) {
        body += `<div class="card-user">
        <a id="eliminarBtn" class="card-user__button" href="#">x</a>
                    <div class="fila">
                        <div class="celda">Card ${data[i].id}</div>
                        <span class="Usuar">${data[i].name}</span>
                        <img class="card-user__img" src="https://placehold.co/200?text=Perfil"  />
                        <span>TEL:${data[i].phone} </span>
                        <span class="ema">
                        ${data[i].email}
                        </span>
                        <span>
                            WebSite: <a href="http://siempre.net.co" target="_blank">SIEMPRE.NET S.A.S.</a>
                            <h1></h1>
                    </div>
                 </div>`;




   // 'body' ahora contiene el HTML de las cajas generadas dinámicamente
   document.getElementById('data').innerHTML = body
   //console.log(body)

// Botón que abre el modal
var span = document.getElementById("actulizar");
// Hace referencia al elemento <span> que tiene la X que cierra la ventana
var card = document.getElementById("card");

// span.addEventListener("click",function() {
//  card.style.display = "block";
// });
// Si el usuario hace clic en la x, la ventana se cierra
// card.addEventListener("click",function() {
// console.log("entro");
// card.style.display = "none";
 
// });

var a = document.getElementById("eliminarBtn");




    }
    

}
