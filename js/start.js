	document.querySelector('.ho').classList.add('disen')
	document.querySelector('.menu').classList.add('disen')
	document.querySelector('.item_knife_only').classList.add('disen')
	document.querySelector('.placeCard_container').classList.add('disen')
//gb первой загрузке браузера возвращает всё на место
	window.onbeforeunload =()=> {
		window.scroll(0,0)
	};

//================================================>
//самая первая загрузка
let start=async()=>{
	await getComment('home','0000',document.querySelector('.items_coment_home'))
	await getProduct('all',null,document.querySelector('.items_knife'))
	await eventADDKnife( document.querySelectorAll('.desc_knife') )
	await getAction()
	await getMenu()
}
start()
//===============================================================Ю
//подключение екшена послезагруки страницы


	// setTimeout(()=>{getAction()})

