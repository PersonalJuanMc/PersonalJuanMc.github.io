
function createSilverlight()
{
    var nag = Silverlight.createObject("Puzzle.xaml",       //source
                                 myID,  // parent element
                                 "AgControl1",        // control ID
                                 {width:'100%', height:'100%', inplaceInstallPrompt:false, background:'#00000000', isWindowless:'false', framerate:'30', version:'0.9'},
                                 {onError:null, onLoad:null},
                                 null);
}