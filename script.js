import Mochila from "./Mochila.js";
/*
	(nome, 
	volume,	
	cor,
	numBolsos,
	compAlcaEsq,
	compAlcaDir,
	abaEstado,
	dataCompra)
*/

const mochilaActual = new Mochila(
  "Mochila actual",
  30,
  "azul",
  15, 
  26,
  26,
  "Fechada",
  "01/31/2021"
);

const conteudo = `
  <main>
    <article>
      <h1>${mochilaActual.nome}</h1>
      <ul>
        <li>Volume: ${mochilaActual.volume}</li>
        <li>Cor: ${mochilaActual.cor}</li>
        <li>Idade: ${mochilaActual.idadeMochila()} dias</li>
        <li>Num Bolsos: ${mochilaActual.numBolsos}</li>
        <li>Comp alça esq: ${mochilaActual.compAlca.alcaEsq}</li>
        <li>Comp alça dir: ${mochilaActual.compAlca.alcaDir}</li>
        <li>Estado da Aba: ${mochilaActual.abaEstado}</li>
      </ul>
    </article>
  </main>
`;

// const conteudo = "<h1>" +  mochilaActual.nome + "</h1>"  // Exemplo só com strings

document.body.innerHTML = conteudo;

console.log("Mochila Actual:", mochilaActual);
console.log("Número de Bolsos:", mochilaActual.numBolsos);
console.log("Dias desde a compra:", mochilaActual.idadeMochila());
