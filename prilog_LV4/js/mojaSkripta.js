/*var _lib=new lib('strong');
//console.log(_lib);

_lib.el.forEach(function(element)
{
	console.log(element.innerHTML);
});*/

//_lib.ubaciElement('li','klasa','id','Nekakav tekst');

/*_lib.el.forEach(function(element)
{
	console.log(element.innerHTML);
});*/

/*
_lib.dodajKlasu('nova_klasa');
_lib.dodajAtribut('broj','8');
_lib.sakrij();
_lib.prikazi();
*/

localStorage.setItem('racunarstvo', 'https://racunarstvo.vuv.hr/');
localStorage.setItem('loomen', 'http://loomen.vuv.hr');
localStorage.setItem('imagine', ' http://e5.onthehub.com/d.ashx?s=ui4qkso06k');
localStorage.setItem('studentski_dom', 'http://studom.vsmti.hr');
localStorage.setItem('office365', 'https://outlook.office365.com/owa/?realm=vsmti.hr#path=/mail');

/*
var footer_nav = new lib('.footer-navigation');

for (var i = 0; i < localStorage.length; i++){

    footer_nav.ubaciElement('li','item','','');
}
var foot_lista = new lib('.item');
foot_lista.ubaciElement('a','',localStorage.key(i),localStorage.key(i))
*/

//localStorage.clear();

var footer_nav = new lib('.footer-navigation');

footer_nav.ubaciElement('li','item','racunarstvo_li','');
var racunarstvo_li = new lib('#racunarstvo_li');
racunarstvo_li.ubaciElement('a','item','racunarstvo','racunarstvo');
var racunarstvo = new lib('#racunarstvo');
racunarstvo.dodajAtribut('href',localStorage.getItem('racunarstvo'));

footer_nav.ubaciElement('li','item','loomen_li','');
var loomen_li = new lib('#loomen_li');
loomen_li.ubaciElement('a','item','loomen','loomen');
var loomen = new lib('#loomen');
loomen.dodajAtribut('href',localStorage.getItem('loomen'));

footer_nav.ubaciElement('li','item','imagine_li','');
var imagine_li = new lib('#imagine_li');
imagine_li.ubaciElement('a','item','imagine','imagine');
var imagine = new lib('#imagine');
imagine.dodajAtribut('href',localStorage.getItem('imagine'));

footer_nav.ubaciElement('li','item','studentski_dom_li','');
var studentski_dom_li = new lib('#studentski_dom_li');
studentski_dom_li.ubaciElement('a','item','studentski_dom','studentski_dom');
var studentski_dom = new lib('#studentski_dom');
studentski_dom.dodajAtribut('href',localStorage.getItem('studentski_dom'));

footer_nav.ubaciElement('li','item','office365_li','');
var office365_li = new lib('#office365_li');
office365_li.ubaciElement('a','item','office365','office365');
var office365 = new lib('#office365');
office365.dodajAtribut('href',localStorage.getItem('office365'));