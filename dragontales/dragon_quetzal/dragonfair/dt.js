//// begin browser sniffer

function its() {
  var n = navigator;
  var ua = ' ' + n.userAgent.toLowerCase();
  var pl = n.platform.toLowerCase();
  var an = n.appName.toLowerCase();

  // browser version
  this.version = n.appVersion;
	
  this.nn = ua.indexOf('mozilla') > 0;

  // 'compatible' versions of mozilla
  // aren't navigator
  if(ua.indexOf('compatible') > 0) {
    this.nn = false;
  }

  this.opera = ua.indexOf('opera') > 0;
  this.webtv = ua.indexOf('webtv') > 0;
  this.ie = ua.indexOf('msie') > 0;
  this.aol = ua.indexOf('aol') > 0;
	
  this.major = parseInt( this.version );
  this.minor = parseFloat( this.version );

  // platform
  this.mac = ua.indexOf('mac') > 0;
  this.mac68k = (ua.indexOf('68k') > 0
    || ua.indexOf('68000') > 0);
  this.macppc = (ua.indexOf('ppc') > 0
    || ua.indexOf('powerpc') > 0);

  this.win = ua.indexOf('win') > 0;
  this.win16 = (ua.indexOf('16') > 0
    && ua.indexOf('win') > 0);
  this.win31 = this.win16;
  this.win95 = (ua.indexOf('95') > 0
    && ua.indexOf('win') > 0);
  this.win98 = (ua.indexOf('98') > 0
    && ua.indexOf('win') > 0);
  this.winnt = (ua.indexOf('nt') > 0
    && ua.indexOf('win') > 0);

  this.os2 = ua.indexOf('os/2') > 0;

  this.sun = ua.indexOf('sunos') > 0;
  this.irix = ua.indexOf('irix') > 0;
  this.hpux = ua.indexOf('hpux') > 0;
  this.aix = ua.indexOf('aix') > 0;
  this.dec = (ua.indexOf('dec') > 0
    || ua.indexOf('alpha') > 0
    || ua.indexOf('osf1') > 0
    || ua.indexOf('ultrix') > 0);
  this.sco = (ua.indexOf('sco') > 0
    || ua.indexOf('unix_sv') > 0);
  this.vms = (ua.indexOf('vax') > 0
    || ua.indexOf('openvms') > 0);
  this.linux = ua.indexOf('linux') > 0;
  this.sinix = ua.indexOf('sinix') > 0;
  this.freebsd = ua.indexOf('freebsd') > 0;
  this.openbsd = ua.indexOf('openbsd') > 0;
  this.netbsd = ua.indexOf('netbsd') > 0;
  this.bsd = ua.indexOf('bsd') > 0;
  this.unixware
    = ua.indexOf('unix_system_v') > 0;
  this.mpras = ua.indexOf('ncr') > 0;
  this.reliant = ua.indexOf('reliantunix') > 0;
	
	return this;
}

//// end browser sniffer


function newImage(arg) {
	if (document.images) {
		rslt = new Image();
		rslt.src = arg;
		return rslt;
	}
}

function changeImages() {
	if (document.images && (preloadFlag == true)) {
		for (var i=0; i<changeImages.arguments.length; i+=2) {
			document[changeImages.arguments[i]].src = changeImages.arguments[i+1];
		}
	}
}

var preloadFlag = false;
function preloadImages() {
	if (document.images) {
		menu_03_over = newImage("images/menu_03-over.gif");
		menu_06_over = newImage("images/menu_06-over.gif");
		preloadFlag = true;
	}
}



function mapClick(num) {
	if (num == current) {
		current++;

		if (current != 5) {
			document.images["game"].src = "images/s_" + dragon + "_02-" + current + ".gif";
			playSound(document.applets.right);
		} else {
			document.images["game"].src = "images/s_" + dragon + "_02-" + current + ".jpg";
			document.images["goodjob"].src = "images/head_goodjob.gif";
			playSound(document.applets.payoff);
		}

		if (current != 4)
			document.images["dragon"].src = "images/s_" + dragon + "_01-" + current + ".gif";
		else
			setTimeout("mapClick(4);", 1500);
	}
	else
		playSound(document.applets.wrong);

	return false;
}

function cMapClick(num) {
	if (num == current) {
		document.images["game"].src = "images/c_" + dragon + "_02-" + current + ".gif";

		current++;
		
		if (current != 12)
			playSound(document.applets.right);
		else {
			for (i = 1; i <= numEndImg; i++) {
				document.images["end" + i].src = "images/" + eval("endImg" + i);
			}
			document.images["goodjob"].src = "images/head_goodjob.gif";
			playSound(document.applets.payoff);
		}

		if (current == 11)
			setTimeout("cMapClick(11);", 1500);
	}
	else
		playSound(document.applets.wrong);

	return false;
}

function awardSubmit() {
	awardurl = "printaward.html"
	awardname = myescape(document.forms[0].awardname.value);
	
	if (awardname != 0)
		awardurl = awardurl + "?awardname=" + awardname;
	
	document.location.href = awardurl; 

	return false;
}

var its = new its();

function playSound(obj) {
	if (!its.ie || !its.mac) {
		if(obj.test()) {
			obj.playsound();
		}
	}
}

function stopSound(obj) {
	if (!its.ie || !its.mac) {
		if(obj.test()) {
			obj.stop();
		}
	}
}


function printAwards() {
	r++;
	r = (r < 7) ? r : 6;

	document.write("<td><a href='index.html?r=" + r + "'><img src='images/foot_01.gif' width=108 height=61 border='0' alt='Fair menu'></a></td>");

	if (r == 0)
		document.write("<td><img src='images/bg_green_CCFF99.gif' width=230 height=61></td>");
	else
		document.write("<td><img src='images/foot_02-" + r + ".gif' width=230 height=61></td>");
		
	if (r < 3)
		document.write("<td><img src='images/bg_green_CCFF99.gif' width=148 height=61 border='0'></td>");
	else {
		document.write("<td><img src='images/foot_03.gif' width=148 height=61 alt='Awards Ceremony' usemap='#awards' border='0'>");
		document.write('<map name="awards"><area shape="rect" coords="3,6,100,58" href="awards.html?r=' + r + '"></map></td>');
	}

	document.write("<td><a href='" + nextpage + "?r=" + r + "'><img src='images/foot_04.gif' width=87 height=61 border='0' alt='More'></a></td>");

}

function printIndexA() {
	r = (r < 7) ? r : 6

	document.write('<td colspan=3><a href="index.html?r=' + r + '"><img src="images/award_08.gif" width=79 height=61 border="0" alt="Dragon Fair menu"></a></td>');
}

function printIndexC() {
	r = (r < 7) ? r : 6
	
        document.write("<td rowspan=2>");
        
	if (r == 0)
		document.write("<a href=\"" + cpage + "\"");
	else
		document.write("<a href=\"" + cpage + "?r=" + r + "\"");

	document.write("onMouseOver=\"changeImages('menu_03', 'images/menu_03-over.gif'); return true;\"");
	document.write("onMouseOut=\"changeImages('menu_03', 'images/menu_03.gif'); return true;\">");
	document.write("<img name=\"menu_03\" src=\"images/menu_03.gif\" width=125 height=236 border=0 alt='Connect the dots'></a></td>");
	
}

function printIndexS() {
	r = (r < 7) ? r : 6
	
        document.write("<td rowspan=2>");
        
	if (r == 0)
		document.write("<a href=\"" + spage + "\"");
	else
		document.write("<a href=\"" + spage + "?r=" + r + "\"");

	document.write("onMouseOver=\"changeImages('menu_06', 'images/menu_06-over.gif'); return true;\"");
	document.write("onMouseOut=\"changeImages('menu_06', 'images/menu_06.gif'); return true;\">");
	document.write("<img name=\"menu_06\" src=\"images/menu_06.gif\" width=140 height=236 border=0 alt='Find the shapes'></a></td>");
	
}
