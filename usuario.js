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
                        <div class="usuario">usuario ${data[i].id}</div>
                        <span class="Usuar">${data[i].name}</span>
                        <img class="card-user__img" src="https://placehold.co/200?text=Perfil"  />
                        <span>TEL:${data[i].phone} </span>
                        <span class="ema">
                        ${data[i].email}
                        </span>
                        <span>

                    </div>
                 </div>`;


              
                }
            
                // 'body' ahora contiene el HTML de las cajas generadas dinámicamente
                console.log(body);
                document.getElementById('data').innerHTML = body
                //console.log(body)
            }
                             

