function lib(selektor)
{
    this.selektor = selektor,
    this.el = document.querySelectorAll(selektor)
}

function element(naziv,klasa,id,tekst)
{
	this.naziv=naziv;
	this.klasa=klasa;
	this.id=id;
	this.tekst=tekst;
	/*
	if (klasa!=NULL) { this.klasa = klasa; }
	else {this.klasa = NULL; }
	if (id!=NULL) { this.id = id; }
	else {this.id = NULL; }
	if (tekst!=NULL) { this.tekst = tekst; }
	else {this.tekst = NULL; }*/
}

lib.prototype.ubaciElement = function(naziv,klasa,id,tekst) {
	var novi = document.createElement(naziv);
	if(klasa != "")
	{
		novi.setAttribute('class',klasa);
	}
	if(id != "")
	{
		novi.setAttribute('id',id);
	}
	if(tekst != "")
	{
		novi.innerHTML=tekst;
	}

	this.el.forEach(function(element)
	{
		element.appendChild(novi);
		//console.log("a");
	});
};
lib.prototype.dodajKlasu = function(klasa)
{
	this.el.forEach(function(element)
	{
		element.setAttribute('class',klasa);
		//console.log("a");
	});
}
lib.prototype.dodajAtribut = function(ime,vrijednost)
{
	this.el.forEach(function(element)
	{
		element.setAttribute(ime,vrijednost);
		//console.log("a");
	});
}
lib.prototype.sakrij = function()
{
	this.el.forEach(function(element)
	{
		element.style.visibility = "hidden";
	});

}
lib.prototype.prikazi = function()
{
	this.el.forEach(function(element)
	{
		element.style.visibility = "visible";
	});

}