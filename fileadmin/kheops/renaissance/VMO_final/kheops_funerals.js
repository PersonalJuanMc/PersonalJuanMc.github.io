
allowFullScreen = false;
allowPause = false;

/*
function SwitchFullScreen()
{
	if(document.Virtools.DoCommand("IsFullScreen") == 0)
	{
		var bpp32 = 1; // Set to : 1 for 32 bits, 0 for 16 bits
		cmd = "FullScreen '" + screen.width + "' '" + screen.height + "' '" + bpp32 + "'";
		//cmd = "FullScreen";
		document.Virtools.DoCommand(cmd);
	}
	else
	{
		document.Virtools.DoCommand("StopFullScreen");	
	}
}
*/

function SwitchFullScreen()  // sent by Virtools
{
	if ( document.Virtools.DoCommand("IsFullScreen") == 0) {
		fullsc = 1;
		bool = true;
	}
	else
	{
		fullsc = 0;
		bool = false;		
	}
	inFullScreen(bool);
}		

function inFullScreen(bool)
{
	var cmd;
	if(document.Virtools){
		if ( bool && document.Virtools.DoCommand("IsFullScreen") == 0) {
			var bpp32 = 1; // Set to : 1 for 32 bits, 0 for 16 bits
			cmd = "FullScreen '" + screen.width + "' '" + screen.height + "' '" + bpp32 + "'";
			// cmd = "FullScreen"; // Command using the player current settings;
		}
		else
		{
			cmd = "StopFullScreen";
		}
		var res = document.Virtools.DoCommand(cmd);
	}
}