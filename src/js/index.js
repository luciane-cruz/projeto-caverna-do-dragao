const listaSelecaoDesenhos = document.querySelectorAll(".desenho");

listaSelecaoDesenhos.forEach(desenho => {
	desenho .addEventListener("click", () => {
		esconderCartaodesenho();

		const idDesenhoSelecionado = mostrarCartaoDesenhoSelecionado(desenho);


         desativarDesenhoNaListagem()
		ativarDesenhoSelecionadoNaListagem(idDesenhoSelecionado);

	})
 })



function ativarDesenhoSelecionadoNaListagem(idDesenhoSelecionado) {
	const DesenhoSelecionadoNaListagem = document.getElementById(idDesenhoSelecionado);
	DesenhoSelecionadoNaListagem.classList.add("ativo");
}

function desativarDesenhoNaListagem() {
	const desenhoAtivoNaListagem = document.querySelector(".ativo");
	desenhoAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoDesenhoSelecionado(desenho) {
	const idDesenhoSelecionado = desenho .attributes.id.value;
	const idCartaoDesenhoParaAbrir = "cartao-" + idDesenhoSelecionado;
	const 	desenhoParaAbrir = document.getElementById(idCartaoDesenhoParaAbrir);

	if(desenhoParaAbrir)
		{desenhoParaAbrir.classList.add("aberto")
	}
	return idDesenhoSelecionado;
}

function esconderCartaodesenho() {
	const desenhoAberto = document.querySelector(".aberto");
    if   ( desenhoAberto)
		{desenhoAberto.classList.remove("aberto") }
}
