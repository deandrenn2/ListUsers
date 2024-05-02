let url = "https://jsonplaceholder.typicode.com/users/";

const getUsuarios = () => {
	return JSON.parse(localStorage.getItem("usuarios"));
};

const agregarUsuario = (e) => {
	e.preventDefault();
	const data = new FormData(e.target);
	const dataObject = Object.fromEntries(data.entries());
	const users = getUsuarios();

	const newUser = {
		id: 1,
		name: dataObject.name,
		username: "Bret",
		email: dataObject.email,
		address: {
			street: "Kulas Light",
			suite: "Apt. 556",
			city: "Gwenborough",
			zipcode: "92998-3874",
			geo: {
				lat: "-37.3159",
				lng: "81.1496",
			},
		},
		phone: dataObject.phone,
		website: dataObject.website,
		company: {
			name: "Romaguera-Crona",
			catchPhrase: "Multi-layered client-server neural-net",
			bs: "harness real-time e-markets",
		},
	};

	users.push(newUser);
	localStorage.setItem("usuarios", JSON.stringify(users));
	mostrarData(users);
	e.target.reset();
};

var agregarForm = document.getElementById("agregarForm");

agregarForm.addEventListener("submit", (e) => agregarUsuario(e));

window.addEventListener("load", () => {
	asignarEventoEliminar();
});

const asignarEventoEliminar = () => {
	const btnsDelete = document.querySelectorAll(".card-user__button");

	btnsDelete.forEach((x) => {
		x.addEventListener("click", (e) => {
			var id = e.target.id;
			var idUsuario = id.split("_")[1];
			var users = getUsuarios();

			users = users.filter((x) => x.id != idUsuario);
			localStorage.setItem("usuarios", JSON.stringify(users));
			mostrarData(users);
		});
	});
};

const mostrarData = (data) => {
	localStorage.setItem("usuarios", JSON.stringify(data));
    let body = "";
	for (let i = 0; i < data.length; i++) {
		body += `<div class="card-user">
        <a id="eliminarBtn_${data[i].id}" class="card-user__button" href="#">X</a>
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
	document.getElementById("data").innerHTML = body;
	asignarEventoEliminar();
	//console.log(body)
};

let dataUsuarios = getUsuarios();

if (!dataUsuarios) {
	fetch(url)
		.then((response) => response.json())
		.then((data) => mostrarData(data))
		.catch((error) => console.log(error));
} else {
	mostrarData(dataUsuarios);
}
