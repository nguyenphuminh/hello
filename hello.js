function hello(code){
	code=code.split('');
	code.forEach(item => {
		if (item == 'h') document.write('Hello World');
	});
}