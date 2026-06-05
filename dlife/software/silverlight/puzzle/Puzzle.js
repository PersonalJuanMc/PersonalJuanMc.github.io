//variables
var CurrentTarget;
var ActiveX;
var ActiveY;
var MouseX;
var MouseY;
// puzzle pieces 
var topLeft = 'M 0.500488,46.456055 L 18.237793,46.438477 C 18.237793,46.438477 15.006348,41.879883 15.006348,39.975586 C 15.006348,35.692383 18.405762,32.221680 22.599121,32.221680 C 26.793457,32.221680 30.192871,35.692383 30.192871,39.975586 C 30.192871,41.918945 27.262207,46.463867 27.262207,46.463867 L 45.179199,46.454102 L 45.164551,28.020508 C 45.164551,28.020508 49.708496,30.952148 51.651855,30.952148 C 55.935059,30.952148 59.405762,27.551758 59.405762,23.358398 C 59.405762,19.164063 55.935059,15.764648 51.651855,15.764648 C 49.747559,15.764648 45.188965,18.996094 45.188965,18.996094 L 45.163574,0.500000 L 0.522949,0.500000 L 0.500488,46.456055 Z';
var topMiddle = 'M 0.525391,0.500000 L 0.525391,18.996094 C 0.525391,18.996094 5.082031,15.764648 6.986328,15.764648 C 11.269531,15.764648 14.742188,19.164063 14.742188,23.357422 C 14.742188,27.551758 11.269531,30.951172 6.986328,30.951172 C 5.043945,30.951172 0.500000,28.020508 0.500000,28.020508 L 0.502930,46.455078 L 18.240234,46.437500 C 18.240234,46.437500 15.008789,41.879883 15.008789,39.975586 C 15.008789,35.692383 18.408203,32.220703 22.601563,32.220703 C 26.796387,32.220703 30.195313,35.692383 30.195313,39.975586 C 30.195313,41.918945 27.265137,46.462891 27.265137,46.462891 L 45.181641,46.453125 L 45.167969,28.020508 C 45.167969,28.020508 49.710938,30.951172 51.654297,30.951172 C 55.937500,30.951172 59.408203,27.551758 59.408203,23.357422 C 59.408203,19.164063 55.937500,15.764648 51.654297,15.764648 C 49.750000,15.764648 45.191406,18.996094 45.191406,18.996094 L 45.166016,0.500000 L 0.525391,0.500000 Z';
var topRight = 'M 45.165527,0.500000 L 0.525391,0.500000 L 0.525391,18.996094 C 0.525391,18.996094 5.082031,15.764648 6.986328,15.764648 C 11.269531,15.764648 14.741699,19.164063 14.741699,23.357422 C 14.741699,27.551758 11.269531,30.951172 6.986328,30.951172 C 5.043945,30.951172 0.500000,28.020508 0.500000,28.020508 L 0.502930,46.455078 L 18.239746,46.437500 C 18.239746,46.437500 15.009277,41.879883 15.009277,39.975586 C 15.009277,35.692383 18.407715,32.220703 22.601074,32.220703 C 26.796387,32.220703 30.194824,35.692383 30.194824,39.975586 C 30.194824,41.918945 27.265137,46.462891 27.265137,46.462891 L 45.181152,46.453125 L 45.165527,0.500000 Z';
var middleLeft = 'M 0.500488,60.689453 L 18.237793,60.671875 C 18.237793,60.671875 15.006348,56.114258 15.006348,54.209961 C 15.006348,49.926758 18.405762,46.455078 22.599121,46.455078 C 26.793945,46.455078 30.191895,49.926758 30.191895,54.209961 C 30.191895,56.153320 27.262695,60.697266 27.262695,60.697266 L 45.178223,60.687500 L 45.164551,42.254883 C 45.164551,42.254883 49.707520,45.185547 51.650879,45.185547 C 55.934082,45.185547 59.404785,41.786133 59.404785,37.591797 C 59.404785,33.398438 55.934082,29.999023 51.650879,29.999023 C 49.746582,29.999023 45.187988,33.230469 45.187988,33.230469 L 45.162598,14.734375 L 27.284180,14.742188 C 27.284180,14.742188 30.215332,10.198242 30.215332,8.254883 C 30.215332,3.971680 26.815430,0.500000 22.621582,0.500000 C 18.428223,0.500000 15.028809,3.971680 15.028809,8.254883 C 15.028809,10.159180 18.260254,14.716797 18.260254,14.716797 L 0.522949,14.734375 L 0.500488,60.689453 Z';
var middleMiddle = 'M 45.181641,60.687500 L 45.166992,42.254883 C 45.166992,42.254883 49.710938,45.185547 51.654297,45.185547 C 55.937500,45.185547 59.408203,41.786133 59.408203,37.591797 C 59.408203,33.398438 55.937500,29.999023 51.654297,29.999023 C 49.750000,29.999023 45.191406,33.230469 45.191406,33.230469 L 45.166016,14.734375 L 27.287109,14.742188 C 27.287109,14.742188 30.217773,10.198242 30.217773,8.254883 C 30.217773,3.971680 26.818359,0.500000 22.624023,0.500000 C 18.430664,0.500000 15.031250,3.971680 15.031250,8.254883 C 15.031250,10.159180 18.262695,14.716797 18.262695,14.716797 L 0.525391,14.734375 L 0.525391,33.230469 C 0.525391,33.230469 5.082031,29.999023 6.986328,29.999023 C 11.269531,29.999023 14.742188,33.398438 14.742188,37.591797 C 14.742188,41.786133 11.269531,45.185547 6.986328,45.185547 C 5.043945,45.185547 0.500000,42.254883 0.500000,42.254883 L 0.502930,60.689453 L 18.240234,60.671875 C 18.240234,60.671875 15.008789,56.114258 15.008789,54.209961 C 15.008789,49.926758 18.408203,46.455078 22.601563,46.455078 C 26.795898,46.455078 30.195313,49.926758 30.195313,54.209961 C 30.195313,56.153320 27.264648,60.697266 27.264648,60.697266 L 45.181641,60.687500 Z';
var middleRight = 'M 45.166016,14.734375 L 27.287109,14.742188 C 27.287109,14.742188 30.217773,10.198242 30.217773,8.254883 C 30.217773,3.971680 26.818359,0.500000 22.624023,0.500000 C 18.430664,0.500000 15.031250,3.971680 15.031250,8.254883 C 15.031250,10.159180 18.262695,14.716797 18.262695,14.716797 L 0.525391,14.734375 L 0.525391,33.230469 C 0.525391,33.230469 5.082031,29.999023 6.986328,29.999023 C 11.269531,29.999023 14.742188,33.398438 14.742188,37.591797 C 14.742188,41.786133 11.269531,45.185547 6.986328,45.185547 C 5.043945,45.185547 0.500000,42.254883 0.500000,42.254883 L 0.502930,60.689453 L 18.240234,60.671875 C 18.240234,60.671875 15.008789,56.114258 15.008789,54.209961 C 15.008789,49.926758 18.408203,46.455078 22.601563,46.455078 C 26.795898,46.455078 30.195313,49.926758 30.195313,54.209961 C 30.195313,56.153320 27.264648,60.697266 27.264648,60.697266 L 45.181641,60.687500 L 45.166016,14.734375 Z';
var bottomLeft = 'M 45.179199,60.687500 L 45.164551,42.254883 C 45.164551,42.254883 49.708496,45.185547 51.651855,45.185547 C 55.935059,45.185547 59.405762,41.786133 59.405762,37.591797 C 59.405762,33.398438 55.935059,29.999023 51.651855,29.999023 C 49.747559,29.999023 45.188965,33.230469 45.188965,33.230469 L 45.163574,14.734375 L 27.284668,14.742188 C 27.284668,14.742188 30.215332,10.198242 30.215332,8.254883 C 30.215332,3.971680 26.815918,0.500000 22.621582,0.500000 C 18.428223,0.500000 15.028809,3.971680 15.028809,8.254883 C 15.028809,10.159180 18.260254,14.716797 18.260254,14.716797 L 0.522949,14.734375 L 0.500488,60.689453 L 45.179199,60.687500 Z';
var bottomMiddle = 'M 45.181641,60.687500 L 45.166992,42.254883 C 45.166992,42.254883 49.710938,45.185547 51.654297,45.185547 C 55.937500,45.185547 59.408203,41.786133 59.408203,37.591797 C 59.408203,33.398438 55.937500,29.999023 51.654297,29.999023 C 49.750000,29.999023 45.191406,33.230469 45.191406,33.230469 L 45.166016,14.734375 L 27.287109,14.742188 C 27.287109,14.742188 30.217773,10.198242 30.217773,8.254883 C 30.217773,3.971680 26.818359,0.500000 22.624023,0.500000 C 18.430664,0.500000 15.031250,3.971680 15.031250,8.254883 C 15.031250,10.159180 18.262695,14.716797 18.262695,14.716797 L 0.525391,14.734375 L 0.525391,33.230469 C 0.525391,33.230469 5.082031,29.999023 6.986328,29.999023 C 11.269531,29.999023 14.742188,33.398438 14.742188,37.591797 C 14.742188,41.786133 11.269531,45.185547 6.986328,45.185547 C 5.043945,45.185547 0.500000,42.254883 0.500000,42.254883 L 0.502930,60.689453 L 45.181641,60.687500 Z';
var bottomRight = 'M 45.181641,60.687500 L 45.166016,14.734375 L 27.287109,14.742188 C 27.287109,14.742188 30.217773,10.198242 30.217773,8.254883 C 30.217773,3.971680 26.818359,0.500000 22.624023,0.500000 C 18.430664,0.500000 15.031250,3.971680 15.031250,8.254883 C 15.031250,10.159180 18.262695,14.716797 18.262695,14.716797 L 0.525391,14.734375 L 0.525391,33.230469 C 0.525391,33.230469 5.082031,29.999023 6.986328,29.999023 C 11.269531,29.999023 14.742188,33.398438 14.742188,37.591797 C 14.742188,41.786133 11.269531,45.185547 6.986328,45.185547 C 5.043945,45.185547 0.500000,42.254883 0.500000,42.254883 L 0.502930,60.689453 L 45.181641,60.687500 Z';

// keeps track of the overall zip progress
var gProgress = 1;
// keeps track of the greatest zIndex for the puzzle pieces
var currZIndex = 1;

var dimr = 7;       // number of rows in the puzzle   
var dimc = 10;      // number of columns in the puzzle
// Puzzle grid dimensions
var PuzzleGridTop = 0.0;
var PuzzleGridLeft = 0.0;
var origPuzzleGridTop = 0.0;
var origPuzzleGridLeft = 0.0;
var PuzzleGridWidth = 0.0;
var PuzzleGridHeight = 0.0;
// puzzle piece dimensions
var pieceWidth = 44.667;
var pieceHeight = 45.667;
var pieceNubbyHeight = 31.0;
// array for storing the current piece in each grid square
var gridArray = new Array(dimr);

var control;    // wpf/e control
// stores the button down sender name so that button down 
//  and button up can occur only in pairs for clicking buttons
var buttonDownSenderName = "";
var opacityMask;

// Do this stuff when the page loads
function OnLoaded(sender, args)
{
   
    // set some globals
    var mySource = sender.findName("theSource")
    mySource.addEventListener("MediaEnded", "LoopVideo");
      
  	control = document.getElementById("AgControl1");
  	var puzzleGrid = control.content.findName("PuzzleGrid");
  	PuzzleGridTop = puzzleGrid.GetValue("Canvas.Top");
  	PuzzleGridLeft = puzzleGrid.GetValue("Canvas.Left");
  	CurrentTarget = null;
    ActiveX = 0;
    ActiveY = 0;
  	    
  	// Set the event handler functions
    control.content.OnFullScreenChange = onFullScreenChanged;  
    control.content.onResize = OnResize;
        
    // Find the root canvas
    var root = control.content.findName("mainCanvas");
    // Remove the Progress Bar ("fade it out")
    var storyboardProgress = control.content.findName("storyboardProgress");
    storyboardProgress.Begin();
          
    //Show the created puzzle pieces ("fade it in")
    var storyboardPuzzleGrid = control.content.findName("storyboardPuzzleGrid");
    storyboardPuzzleGrid.Begin();

    // Do initial layout of the app based on initial size.
    updateLayout(control.content.ActualWidth, control.content.ActualHeight);
  	
    // Create the puzzle pieces
    CreatePieces(sender, args);
  	PuzzleGridWidth = puzzleGrid.GetValue("Width");
  	PuzzleGridHeight = puzzleGrid.GetValue("Height");

    // Initialize the gridArray
    InitGridArray();
    

}

function OnResize()
{
    // Do layout resizing of the app whenever the FullScreen property changes.
    if(gProgress == 1)
    {
        // only do layout if the zip downloader is completed because it contains XAML
        updateLayout(control.content.actualWidth, control.content.actualHeight);
    }
    else
    {
        //center the progress bar
        var progressbar = control.content.findName("progressBar");
        progressbar.setValue("Canvas.Top", control.content.actualHeight/2);
        progressbar.setValue("Canvas.Left", control.content.actualHeight/2);
    }
}

// Resize and reposition application elements.
function updateLayout(width, height)
{
    // update background so it is always filling the entire browser
    var backgroundimg = control.content.findName("backgroundimg");
    backgroundimg.width = width;
    backgroundimg.height = height
        
    
    // update the puzzle grid so that it is 'centered'
    var puzzlegrid = control.content.findName("PuzzleGrid");
    puzzlegrid.SetValue("Canvas.Top", height*.32);
    puzzlegrid.SetValue("Canvas.Left", width*.40);
    PuzzleGridTop = puzzlegrid.GetValue("Canvas.Top");
  	PuzzleGridLeft = puzzlegrid.GetValue("Canvas.Left");
  	
  	
  	// update flower design so it is 100% of the Height and 60% of the width of the browser
    var flowers = control.content.findName("Flowers");
    var controls = control.content.findName("controls");
    controls.setValue("Canvas.Top", PuzzleGridTop + PuzzleGridHeight - controls.height);
  	controls.setValue("Canvas.Left", PuzzleGridLeft - controls.width);
  	
    
}

// Initialized the gridArray, which is a two dimensional array representing the puzzlegrid
// each array element stores which puzzle piece is currently occupying the space, if its empty
// it stores "-1, -1"
function InitGridArray()
{
    var i, j;
    for(i = 0; i < dimr; i++)
    {
        gridArray[i] = new Array(dimc);
        for(j = 0; j < dimc; j++)
        {
            gridArray[i][j] = "-1,-1";
        }
    }
}

// Scales the objects in the control when it goes full screen
function onFullScreenChanged( sender, args )
{
    var mainCanvas = control.content.findName("mainCanvas");
    
    if(!control.content.fullScreen)
    {
        // find all the scaleTransforms for the objects
        var scaleMC = control.content.findName("scaleMC");
        var scaleFlowers = control.content.findName("scaleFlowers");
        var scaleBackground = control.content.findName("scaleBackground");
    
        // not fullscreen so keep the transform at 1
        scaleMC.ScaleX = 1;
        scaleMC.ScaleY = 1;
        scaleBackground.ScaleX = 1;
        scaleBackground.Scaley = 1;
        scaleFlowers.ScaleX = 1;
        scaleFlowers.ScaleY = 1;
    }
    else
    {
        // fullscreen so update the layout
        updateLayout(control.content.ActualWidth, control.content.ActualHeight);   
    }
     mainCanvas.SetValue("Width", control.content.ActualWidth);
     mainCanvas.SetValue("Height", control.content.ActualHeight);
}


// Toggles full screen
function FullScreen(sender, args)
{
   
    control.content.fullScreen = !control.content.fullScreen;
}

// Scrambles the puzzle pieces in a region around the PuzzleGrid    
function ScramblePieces(sender, args)
{
    var puzzlegrid = control.content.findName("PuzzleGrid");
    puzzlegridCanvasTop = puzzlegrid.GetValue("Canvas.Top");
    puzzlegridCanvasLeft = puzzlegrid.GetValue("Canvas.Left");
    
    for(r=0; r<dimr; r++)
    {
        for(c=0; c<dimc; c++)
        {           
            var curr = sender.findName("pathR"+r+"C"+c);
            curr.SetValue("Stroke", "Black");
            gridArray[r][c] = "-1,-1";
            var rand = Math.random();
            if(rand < .22) // scramble piece above the puzzle
            {
                var test = (Math.random()* -(puzzlegridCanvasTop));
                curr.SetValue("Canvas.Left", (Math.random() * (control.content.ActualWidth-pieceWidth-puzzlegridCanvasLeft-(PuzzleGridWidth*.65))+((PuzzleGridWidth*.65))));
                curr.SetValue("Canvas.Top",  (Math.random()*(-puzzlegridCanvasTop+pieceHeight+pieceNubbyHeight)-(pieceHeight+pieceNubbyHeight)));
            }
            else if (rand >=.22 && rand <.56)// scramble piece to the right the puzzle
            {
                 curr.SetValue("Canvas.Left", (Math.random() * (control.content.ActualWidth-PuzzleGridWidth-puzzlegridCanvasLeft-pieceWidth) + (PuzzleGridWidth)));
                 curr.SetValue("Canvas.Top",  (Math.random() * (PuzzleGridHeight+pieceHeight)));
            }
            else if (rand >= .56)// scramble piece below the puzzle
            {
                 curr.SetValue("Canvas.Left", (Math.random() * (control.content.ActualWidth-pieceWidth-puzzlegridCanvasLeft-(PuzzleGridWidth*.5))+((PuzzleGridWidth*.5))));
                 curr.SetValue("Canvas.Top",  (Math.random() * (control.content.ActualHeight-PuzzleGridHeight-pieceHeight-puzzlegridCanvasTop)) + PuzzleGridHeight);
            }
        }
    }
}

// Loops the video when the MediaEnded event is recieved
function LoopVideo(sender, args)
{
     	var mediaelem = control.content.findName("theSource");
     	mediaelem.Stop();
     	mediaelem.Play();
}



function hideProgressBar(sender, args)
{
    var myControl = sender.getHost()
    var myProgressBar = myControl.content.findName("progressBar")
    myProgressBar.Visibility = "Collapsed"
}


// if the mouse enters a button change the cursor to a hand
function Highlight(sender, args)
{
    sender.SetValue("Cursor", "Hand");
}

// Do the button action if the mouse clicks the button
function PuzzleAction(sender, args)
{   
    if(sender.Name=="FullScreenButton"){
        FullScreen(sender, args);
    }
    else if(sender.Name=="ScrambleButton"){
        ScramblePieces(sender, args);
    }
    else if(sender.Name=="HintButton"){
        GiveHint(sender,args);
    }
    else if(sender.Name=="SolveButton"){
        SolveIt(sender,args);
    }
}

// Update the progress bar as the zip file get downloaded
function zipProgress(sender,args)
{

  	var progress = sender.downloadProgress;
  	gProgress = progress;

    // Calculate the downloaded percentage.
    var percentage = Math.floor(sender.downloadProgress * 100);

    // Update the Rectangle and TextBlock objects of the visual progress indicator.
    var progressText = control.content.findName("progressText");
    progressText.text = percentage + "%";
    var progressRectangle = control.content.findName("progressRectangle");
    progressRectangle.width = percentage * 3; 

}

// debug function
function debug(msg){
    var wpfe = document.getElementById("AgControl1");    
    var debug = wpfe.content.findName("Debug");
    debug.Text += msg +"\n";
}

// creates the puzzle pieces and grid squares
function CreatePieces(sender, args)
{
    var pathData;
    var xTransform = 0;
    var yTransform = 0;
    var yTransformGrid = 0;
    var pathData = topLeft;
    var r=0, c=0;

    var puzzlePieceXaml = '<Canvas x:Name="$1" xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" >\n<Path x:Name="$7" Canvas.ZIndex="1" Canvas.Top="$2" Canvas.Left="$3"  MouseLeftButtonDown="OnLBD"  MouseLeftButtonUp="OnLBU"  MouseMove="OnMM" Stroke="Black" StrokeThickness="1.5" Data="F1 $4">\n<Path.Fill>\n<VideoBrush SourceName="theSource" Stretch="None" AlignmentX="Left" AlignmentY="Top" >\n<VideoBrush.Transform>\n<TransformGroup>\n<TranslateTransform X="$5" Y ="$6" />\n<ScaleTransform CenterX="0" CenterY="0" ScaleX=".7" ScaleY=".7" />\n</TransformGroup>\n</VideoBrush.Transform>\n</VideoBrush>\n</Path.Fill>\n</Path>\n</Canvas>'; 
    var gridXaml = '<Canvas x:Name="$1" xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" Canvas.ZIndex="-1">';
    var gridSquareXaml = '<Rectangle x:Name="$1" Width="$4" Height="$5" Canvas.Top="$2" Canvas.Left="$3" Stroke = "#ffaeaeaf" Fill="#00000000"/>';
    
    var puzzleGrid = control.content.findName("PuzzleGrid");
    puzzleGrid.SetValue("Width", pieceWidth*dimc);
    puzzleGrid.SetValue("Height", pieceHeight*dimr);
    var allGrids = "";
    for(r=0; r<dimr; r++)
    {
        c=0;
        xTransform = 0;
        for(c=0; c<dimc; c++)
        {
            var str1 = puzzlePieceXaml.replace('$1', "canvasR"+r+"C"+c);

            if(r==0) // first row of the puzzle
            {
                if(c==0) // topLeft corner
                    pathData = topLeft;
                else if(c==dimc-1) // topRight corner
                    pathData = topRight;
                else // topMiddle piece
                    pathData = topMiddle;
            }
            else if(r==dimr-1) // bottom row of the puzzle
            {
                if(c==0) // bottomLeft corner
                    pathData = bottomLeft;
                else if(c==dimc-1) // bottomRight corner
                    pathData = bottomRight;
                else // bottomMiddle piece
                    pathData = bottomMiddle;
            }
            else // one of the middle rows of the puzzle
            {
                if(c==0) // middleLeft corner
                    pathData = middleLeft;
                else if(c==dimc-1) // middleRight corner
                    pathData = middleRight;
                else // middleMiddle piece
                    pathData = middleMiddle;
            }
                                    
            str1 = str1.replace('$4', pathData);
            str1 = str1.replace('$2', Math.abs(yTransform));
            str1 = str1.replace('$3', Math.abs(xTransform));
            str1 = str1.replace('$5', xTransform*(10/7));
            str1 = str1.replace('$6', yTransform*(10/7));
            str1 = str1.replace('$7', "pathR"+r+"C"+c);

           
	        var puzzlePiece = control.content.createFromXaml(str1);
	        puzzleGrid.children.add(puzzlePiece);
	
	        allGrids += gridSquareXaml.replace('$1', "gridR"+r+"C"+c);
	        allGrids = allGrids.replace('$2', Math.abs(yTransformGrid));
	        allGrids = allGrids.replace('$3', Math.abs(xTransform));
	        allGrids = allGrids.replace('$4', pieceWidth);
	        allGrids = allGrids.replace('$5', pieceHeight);
	        
	        
            xTransform= xTransform - pieceWidth; 

        }
        if(r==0)// first row of tiles is smaller in height
            yTransform = yTransform - pieceNubbyHeight;
        else    
            yTransform = yTransform - pieceHeight;
        
        yTransformGrid = yTransformGrid - pieceHeight;
    }   
    var wholeGrid = control.content.createFromXaml(gridXaml+allGrids+'</Canvas>');
    puzzleGrid.children.add(wholeGrid);
}


// grabs puzzle pieces on left button down  
function OnLBD(sender, args)
{
    CurrentTarget = sender.Name;
    var rowcol= CurrentTarget.replace("pathR", "");
    var indexOfC = rowcol.indexOf("C");
    var row = rowcol.substring(0,indexOfC);
    var col = rowcol.substring(indexOfC+1, rowcol.length);
    
    if(gridArray[row][col] != row+","+col)
    {
        if((args.getPosition(null).x >= PuzzleGridLeft && args.getPosition(null).x <= PuzzleGridLeft+(pieceWidth*dimc))
            && args.getPosition(null).y >= PuzzleGridTop && args.getPosition(null).y <= PuzzleGridTop+(pieceHeight*dimr)) // inside the puzzlegrid
        {
            // determine the row, column of the gridsquare 
            var column = Math.floor((args.getPosition(null).x-PuzzleGridLeft)/pieceWidth);
            var row = Math.floor((args.getPosition(null).y-PuzzleGridTop)/pieceHeight);
            gridArray[row][column] = "-1,-1";
        }
            
        var CurrentCanvas = control.content.findName(sender.Name.replace("path", "canvas"));
        CurrentCanvas.SetValue("Canvas.ZIndex", currZIndex++);
        
        
        ActiveX = sender.GetValue("Canvas.Left");
        ActiveY = sender.GetValue("Canvas.Top");
        MouseX = args.getPosition(null).x;
        MouseY = args.getPosition(null).y;
        buttonDownSenderName = sender.Name;
        sender.captureMouse();
   }
   else
   {
        CurrentTarget = "";
   }

}

// allows you to drag puzzle pieces around using mouse
function OnMM(sender, args)
{
    if ( CurrentTarget == sender.Name )
    {    
        sender.SetValue("Canvas.Left", ActiveX + args.getPosition(null).x - MouseX);
        sender.SetValue("Canvas.Top", ActiveY + args.getPosition(null).y - MouseY);
    }
}

// snaps the puzzle piece to the grid if it is within the grid canvas, otherwise just drops 
// the puzzle piece
function OnLBU(sender, args)
{
    if(buttonDownSenderName == sender.Name)
    {
        buttonDownSenderName =""; 
        var piece = control.content.findName(CurrentTarget);
        if((args.getPosition(null).x >= PuzzleGridLeft && args.getPosition(null).x <= PuzzleGridLeft+(pieceWidth*dimc))
            && args.getPosition(null).y >= PuzzleGridTop && args.getPosition(null).y <= PuzzleGridTop+(pieceHeight*dimr)) // inside the puzzlegrid
        {
            // determine the row, column of the gridsquare the piece was dropped on
            var column = Math.floor((args.getPosition(null).x-PuzzleGridLeft)/pieceWidth);
            var row = Math.floor((args.getPosition(null).y-PuzzleGridTop)/pieceHeight);
            
            // check that the right piece isn't already there
            if(gridArray[row][column] == row + "," + column) // the correct piece is in the grid you are trying to drop into
            {
                // move the piece you are trying to drop into back out into the scramble zone and mark its outline red
                piece.SetValue("Canvas.Left", (Math.random() * (control.content.ActualWidth-PuzzleGridWidth-PuzzleGridLeft-pieceWidth) + (PuzzleGridWidth)));
                piece.SetValue("Canvas.Top",  (Math.random() * (PuzzleGridHeight+pieceHeight)));
                piece.SetValue("Stroke", "Red");                
            }
            else if (gridArray[row][column] == "-1,-1") // grid is empty
            {                
                // snap the piece into the grid square
                piece.SetValue("Canvas.Left", (column*pieceWidth));
                if(CurrentTarget.indexOf('R0') != -1) // a piece from the first row
                    piece.SetValue("Canvas.Top", (row*pieceHeight));
                else
                piece.SetValue("Canvas.Top", (row*pieceHeight)+pieceNubbyHeight-pieceHeight);
                    
                // if the piece is in the correct spot turn its outline green
                if("pathR"+row+"C"+column == CurrentTarget)
                {                    
                    piece.SetValue("Stroke", "Green");
                    gridArray[row][column] = row + "," + column;
                }
                else // if the piece is incorrectly placed it will have a black outline
                {
                    piece.SetValue("Stroke", "Black");
                    var rowcol= CurrentTarget.replace("pathR", "");
                    rowcol = rowcol.replace("C", ",");
                    gridArray[row][column] = rowcol;
                }
            }
            else  // if there is a wrong piece in the spot pop it out
            {                      
                //pop out the wrong piece and turn its stroke red
                if (gridArray[row][column] != row+","+column)
                {
                    var rowcol = gridArray[row][column].replace(',', 'C');
                    var wrongPieceName = "pathR"+rowcol;
                    var wrongPiece = control.content.findName(wrongPieceName);
                    wrongPiece.SetValue("Canvas.Left", (Math.random() * (control.content.ActualWidth-PuzzleGridWidth-PuzzleGridLeft-pieceWidth) + (PuzzleGridWidth)));
                    wrongPiece.SetValue("Canvas.Top",  (Math.random() * (PuzzleGridHeight+pieceHeight)));
                    wrongPiece.SetValue("Stroke", "Red");
                }
                // snap the new piece into the grid square
                piece.SetValue("Canvas.Left", (column*pieceWidth));
                if(CurrentTarget.indexOf('R0') != -1) // a piece from the first row
                {
                    piece.SetValue("Canvas.Top", (row*pieceHeight));
                }
                else
                piece.SetValue("Canvas.Top", (row*pieceHeight)+pieceNubbyHeight-pieceHeight);
                
                // if the piece is in the correct spot turn its outline green
                if("pathR"+row+"C"+column == CurrentTarget)
                {                    
                    piece.SetValue("Stroke", "Green");
                    gridArray[row][column] = row + "," + column;
                }
                else // if the piece is incorrectly placed it will have a black outline
                {
                    piece.SetValue("Stroke", "Black");
                    var rowcol= CurrentTarget.replace("pathR", "");
                    rowcol = rowcol.replace("C", ",");
                    gridArray[row][column] = rowcol;
                }
            }

        }
        else
        {
            piece.SetValue("Stroke", "Black");
            var rowcol= CurrentTarget.replace("pathR", "");
            var indexOfC = rowcol.indexOf("C");
            var row = rowcol.substring(0,indexOfC);
            var col = rowcol.substring(indexOfC+1, rowcol.length);
            gridArray[row][col] = "-1,-1";
        }
        
        CurrentTarget = null;
        sender.releaseMouseCapture();
    }

}

// will give the user a hint by placing the correct piece in the next available grid position
// moving from top left to bottom right
function GiveHint(sender, args)
{   
    var i, j;
    var pieceNotPlaced = true;
    for(i=0; i<dimr; i++){
        for(j=0; j<dimc && pieceNotPlaced; j++)
        {
            if(gridArray[i][j] != i+","+j) // don't move correctly placed pieces
            {
                if(gridArray[i][j] == "-1,-1") // the grid square is empty
                {   
                    var pieceName = "pathR"+i+"C"+j;
                    var piece = control.content.findName(pieceName);
                    piece.SetValue("Canvas.Left", (j*pieceWidth));
                    if(pieceName.indexOf('R0') != -1) // a piece from the first row
                        piece.SetValue("Canvas.Top", (i*pieceHeight));
                    else
                        piece.SetValue("Canvas.Top", (i*pieceHeight)+pieceNubbyHeight-pieceHeight);
                    
                    piece.SetValue("Stroke", "Green");
                    gridArray[i][j] = i+","+j;
                    pieceNotPlaced = false;
                }
                else // the grid square is occupied
                {
                    //move the current piece out of the grid
                    var rowcol = gridArray[i][j].replace(',', 'C');
                    var wrongPieceName = "pathR"+rowcol;
                    var wrongPiece = control.content.findName(wrongPieceName);
                    wrongPiece.SetValue("Canvas.Left", (Math.random() * (control.content.ActualWidth-PuzzleGridWidth-PuzzleGridLeft-pieceWidth) + (PuzzleGridWidth)));
                    wrongPiece.SetValue("Canvas.Top",  (Math.random() * (PuzzleGridHeight+pieceHeight)));
                    wrongPiece.SetValue("Stroke", "Red");
                    gridArray[i][j] = "-1,-1";
                    
                    //move the correct piece into the grid square
                    var pieceName = "pathR"+i+"C"+j;
                    var piece = control.content.findName(pieceName);
                    piece.SetValue("Canvas.Left", (j*pieceWidth));
                    if(pieceName.indexOf('R0') != -1) // a piece from the first row
                    {
                        piece.SetValue("Canvas.Top", (i*pieceHeight));
                    }
                    else
                    {
                        piece.SetValue("Canvas.Top", (i*pieceHeight)+pieceNubbyHeight-pieceHeight);
                    }
                    
                    piece.SetValue("Stroke", "Green");
                    gridArray[i][j] = i+","+j;
                    pieceNotPlaced = false;
                }       
            }
            
        }
    }
}

// solves the puzzle for the user by moving all the pieces into their correct places
function SolveIt(sender, args)
{
    var i, j;
    for(i=0; i<dimr; i++)
    {
        for(j=0; j<dimc; j++)
        {
            var pieceName = "pathR"+i+"C"+j;
            var piece = control.content.findName(pieceName);
            piece.SetValue("Canvas.Left", (j*pieceWidth));
            if(pieceName.indexOf('R0') != -1) // a piece from the first row
            {
                piece.SetValue("Canvas.Top", (i*pieceHeight));
            }
            else
            {
                piece.SetValue("Canvas.Top", (i*pieceHeight)+pieceNubbyHeight-pieceHeight);
            }

            piece.SetValue("Stroke", "Black");
            gridArray[i][j] = i+","+j;
        }
    }
}

// Error Handler
function ErrorHandler(line, col, hr, string)
{
    var str1 = "("+line+","+col+"): "+string;
    var str2 = "HRESULT: "+hr;
    alert(str1+str2);
}