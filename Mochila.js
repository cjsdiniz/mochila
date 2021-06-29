class Mochila {
	constructor(
	nome,
	volume,
	cor,
	numBolsos,
	compAlcaEsq,
	compAlcaDir,
	abaEstado,
	dataCompra
	)
	{
		this.nome = nome;
		this.volume = volume;
		this.cor = cor;
		this.numBolsos = numBolsos;
		this.compAlca = 
		{
			alcaEsq: compAlcaEsq,
			alcaDir: compAlcaDir,			
		}
		this.abaEstado = abaEstado;
		this.dataCompra = dataCompra;
	}
	
	trocaAba(abaEstado) 
	{
		this.abaEstado=abaEstado;
	}
	
	novoCompAba(alcaEsq, alcaDir) 
	{
		this.compAlca.alcaEsq = alcaEsq;
		this.compAlca.alcaDir = alcaDir;
	}

	idadeMochila()
	{
		let now = new Date();
		let datacompra = new Date(this.dataCompra);
		let interv = now - datacompra;
		let dias = Math.floor(interv / (1000 * 3600 * 24));
		return dias;
	}
}

export default Mochila;

