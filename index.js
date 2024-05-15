function header() {
	document.write(
		'<img src="/gfx/thronic_header_2.png">'
	);
}

function footer() {
	var d = new Date();
	document.write(
		'<span onclick="mailme()" class="footer-dj-links" cursor:pointer;" title="E-mail"><img src="/gfx/mail.png"></span> '+
		'<a href="https://github.com/djnedrelid" class="footer-dj-links" target="_blank" title="GitHub"><img src="/gfx/github.png"></a> '+
		'<a href="https://youtube.com/@thr0nic" class="footer-dj-links" target="_blank" title="YouTube"><img src="/gfx/youtube.png"></a> '+
		'<a href="https://www.paypal.com/donate/?hosted_button_id=LDZPJ2ZXC9K8A" class="footer-dj-links" target="_blank"><img src="/gfx/donate1.png"></a> '+
		'<br><br>'+
		'&copy;2007-'+ d.getFullYear() +' <span style="font-weight:bold; cursor:help;" title="Dag J. V. Nedrelid">ժʝ</span>'
	);
}

function mailme() {
	var m = [
		't','i','o','i','c','.',
		'l','o','o','a','s','t',
		'r','h','t','o','n','m',
		'm',':','c','@','p'
	];
	var c = [
		17,9,1,6,14,15,19,22,
		8,10,11,21,0,13,12,2,
		16,3,4,5,20,7,18
	];
	
	var e = '';
	for (let a=0; a<m.length; a++)
		e += m[c[a]];
	
	window.open(e, '_blank');
}
