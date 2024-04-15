function header() {
	document.write(
		'<h1><a href="/">thronic.com</a></h1>'+
		'<em>Keeping it simple.</em>'
	);
}

function footer() {
	var d = new Date();
	document.write(
		'<span style="font-weight:bold; cursor:help;" title="&copy; 2007-'+ d.getFullYear() +' Dag J. V. Nedrelid">ժʝ</span>&nbsp;&nbsp;'+
		'<span onclick="mailme()" class="footer-dj-links" cursor:pointer;" title="E-mail">&#128231;</span> '+
		'<a href="https://github.com/djnedrelid" class="footer-dj-links" target="_blank" title="GitHub">&#128008;</a> '+
		'<a href="https://youtube.com/@thr0nic" class="footer-dj-links" target="_blank" title="YouTube">&#128250;</a> '
	);
}

function backlink() {
	document.write(
		'<a href="/" class="back-link" title="Go back to the front page.">&larr; &#127968;</a>'
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
	
	location.href = e;
}

//
//	Register over alle notater.
//
function NotatMeny(unntak) {
	var Notater = [
		'<span class="menuheader">ELECTRIC</span>',
		'<a href="/Notes/electric_silicone_and_circuit_boards.html">Silicone and Circuit Boards</a>',
		'<br>',
		'<span class="menuheader">GNU/LINUX</span>',
		'<a href="/Notes/linux_ddrescue.html">ddrescue (N)</a>',
		'<a href="/Notes/linux_iptables_firewall_and_gateway.html">Iptables Firewall and Gateway</a>',
		'<br>',
		'<span class="menuheader">HTML &amp; Client side</span>',
		'<a href="/Notes/html_skjelett.html">HTML Skjelett (N)</a>',
		'<a href="/Notes/ajax_skjelett.html">AJAX Skjelett (N)</a>',
		'<br>',
		'<span class="menuheader">MISC</span>',
		'<a href="/Notes/misc_plex_media_server_migration.html">Plex Media Server Migration</a>',
		'<a href="/Notes/misc_the_hexadecimal_system.html">The Hexadecimal System</a>',
		'<br>',
		'<span class="menuheader">WINDOWS</span>',
		'<a href="/Notes/windows_common_commands.html">Common Run Commands</a>',
		'<a href="/Notes/windows_inaccessible_boot.html">INACCESSIBLE_BOOT_DEVICE</a>',
		'<a href="/Notes/windows_batch_norske_tegn.html">Norske tegn i batch (N)</a>',
		'<a href="/Notes/windows_reparere_oppstartspartisjoner.html">Reparere BCD (N)</a>',
		'<a href="/Notes/windows_securing_rdp.html">Securing RDP</a>'
	];
	
	for (let a=0; a<Notater.length; a++) {
		
		//
		// Eksluder visning av argumentert unntak.
		// unntak bør være dokumenttittel, for best unikhet.
		//
		let vis_element = true;
		for (let b=0; b<Notater[a].length; b++) {
			
			// Ikke gjør noe med tomme kall.
			if (unntak == '')
				break;
			
			// Reset per ny innlesning fra ny lokasjon i strengen.
			let unntaksfunn = true;
			
			// Sammenlign strenger fra ny indeks.
			for (let c=0; c<unntak.length; c++) {
				if (unntak[c] != Notater[a][b+c])
					unntaksfunn = false;
			}
			
			// Deaktiver visining hvis unntak ble funnet.
			if (unntaksfunn)
				vis_element = false;
		}
		
		if (vis_element)
			document.write(Notater[a] +'\n');
		else
			document.write(Notater[a].replace('">','" style="text-decoration:underline">'));
	}
}