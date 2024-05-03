function header() {
	document.write(
		'<a href="/"><img src="/gfx/thronic_header_2.png"></a><br>'+
		'<em>Just another guy, plagued by deep curiosity.</em>'
	);
}

function footer() {
	var d = new Date();
	document.write(
		'<span style="font-weight:bold; cursor:help;" title="Dag J. V. Nedrelid">ժʝ</span>&nbsp;&nbsp;'+
		'<span onclick="mailme()" class="footer-dj-links" cursor:pointer;" title="E-mail">&#128231;</span> '+
		'<a href="https://github.com/djnedrelid" class="footer-dj-links" target="_blank" title="GitHub">&#128008;</a> '+
		'<a href="https://youtube.com/@thr0nic" class="footer-dj-links" target="_blank" title="YouTube">&#128250;</a> '+
		'<br><br>'+
		'&copy;2007-'+ d.getFullYear() +'<br>'+
		'DAG J NEDRELID SOFTWARE ENK.<br>Org.nr. 930295590 - Open for freelancing.'
	);
}

function backlink() {
	document.write(
		'<a href="/" class="back-link" title="Go back to the front page.">&#127968;</a>'
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

//
//	Register over alle notater.
//
function NotatMeny(unntak) {
	var Notater = [
		'<span class="menuheader">Projects</span>',
		'<a href="/Notes/featured_code_projects.html">Featured</a>',
		'<a href="/Notes/tools.html">Online Tools</a>',
		'<br>',
		'<span class="menuheader">GNU/Linux Notes</span>',
		'<a href="/Notes/linux_ddrescue.html">ddrescue (N)</a>',
		'<a href="/Notes/linux_iptables_firewall_and_gateway.html">Iptables Firewall and Gateway</a>',
		'<a href="/Notes/linux_kvm_hypervisor_setup.html">KVM Hypervisor Setup</a>',
		'<br>',
		'<span class="menuheader">HTML &amp; JS Notes</span>',
		'<a href="/Notes/html_skjelett.html">HTML Skjelett (N)</a>',
		'<a href="/Notes/ajax_skjelett.html">AJAX Skjelett (N)</a>',
		'<br>',
		'<span class="menuheader">Microsoft Windows Notes</span>',
		'<a href="/Notes/windows_common_commands.html">Common Run Commands</a>',
		'<a href="/Notes/windows_hyperv_replication.html">Hyper-V Replication</a>',
		'<a href="/Notes/windows_inaccessible_boot.html">INACCESSIBLE_BOOT_DEVICE</a>',
		'<a href="/Notes/windows_batch_norske_tegn.html">Norske tegn i batch (N)</a>',
		'<a href="/Notes/windows_reparere_oppstartspartisjoner.html">Reparere BCD (N)</a>',
		'<a href="/Notes/windows_securing_rdp.html">Securing RDP</a>',
		'<br>',
		'<span class="menuheader">Various Notes</span>',
		'<a href="/Notes/misc_plex_media_server_migration.html">Plex Media Server Migration</a>',
		'<a href="/Notes/electric_silicone_and_circuit_boards.html">Silicone and Circuit Boards</a>',
		'<a href="/Notes/misc_ssh_tunneling.html">SSH Tunneling</a>',
		'<a href="/Notes/misc_the_hexadecimal_system.html">The Hexadecimal System</a>',
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