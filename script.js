// Init documents
var Main = document.getElementById('main');
var PlayMode = document.getElementById('playMode');

var Info = document.getElementById('info');
var WinInfo = document.getElementById('winInfo');
var WinInfoContainer = document.getElementById('winInfoContainer');
var Score = document.getElementById('score');

var board = document.getElementById('board');

var icon0 = document.getElementById('icon0');
var icon1 = document.getElementById('icon1');
var icon2 = document.getElementById('icon2');
var icon3 = document.getElementById('icon3');
var icon4 = document.getElementById('icon4');
var icon5 = document.getElementById('icon5');
var icon6 = document.getElementById('icon6');
var icon7 = document.getElementById('icon7');
var icon8 = document.getElementById('icon8');

// Variables
var Black = "black";
var White = "white";
var Block = "block";
var None = "none";
var Red = "red";
var Green = "green";

var Default = "default";
var Player = "player";
var Other = "other";

var X = 'X';
var O = 'O';

var randIndex

var Mutiplayer = "mutiplayer";
var Computer = "computer";

var GameMode = Computer;
var IsPLaying = true;
var Turn = Player;
var PlayerSymbol = X;
var OtherSymbol = O;
var PlayerSymbolColor = Green;
var OtherSymbolColor = Red;
var PlayerScore = 0;
var OtherScore = 0;

var symbolArray = [
    icon0, icon1, icon2,
    icon3, icon4, icon5,
    icon6, icon7, icon8
];

var boardArray = [
    Default, Default, Default,
    Default, Default, Default,
    Default, Default, Default
];

function Sleep(ms){
    var date = Date.now();
    for (var current = null; current - date < ms; current = Date.now()) {}
}

function DisplaySymbol(){
    for (var i = 0; i < 9; i++){
        if (boardArray[i] == Player){
            symbolArray[i].textContent = PlayerSymbol;
            symbolArray[i].style.color = PlayerSymbolColor;
            symbolArray[i].style.display = Block;
        }
        else if (boardArray[i] == Other){
            symbolArray[i].textContent = OtherSymbol;
            symbolArray[i].style.color = OtherSymbolColor;
            symbolArray[i].style.display = Block;
        }
        else {
            symbolArray[i].textContent = null;
            symbolArray[i].style.color = null;
            symbolArray[i].style.display = None;
        }
    }
}

// Get User Input
function UserClick(index){
    if (IsPLaying && GameMode == Mutiplayer && boardArray[index] != Player && boardArray[index] != Other){
        if (Turn == Player){
            boardArray[index] = Player;
            Turn = Other;
        }
        else if (Turn == Other){
            boardArray[index] = Other;
            Turn = Player;
        }
    }
    else if (IsPLaying && GameMode == Computer && Turn == Player && boardArray[index] != Player && boardArray[index] != Other){
        boardArray[index] = Player;
        Turn = Other;
    }
    DisplaySymbol();
}

function NextButtonClick(){
    WinInfoContainer.style.display = None;
    if (IsWin(Player)){
        PlayerScore++;
    }
    else if (IsWin(Other)){
        OtherScore++;
    }
    boardArray = [
        Default, Default, Default,
        Default, Default, Default,
        Default, Default, Default
    ];
    IsPLaying = true;
}

function IsWin(symbol){
    if (
		(boardArray[0] == symbol && boardArray[1] == symbol && boardArray[2] == symbol) ||
		(boardArray[3] == symbol && boardArray[4] == symbol && boardArray[5] == symbol) ||
		(boardArray[6] == symbol && boardArray[7] == symbol && boardArray[8] == symbol) ||

		(boardArray[0] == symbol && boardArray[3] == symbol && boardArray[6] == symbol) ||
		(boardArray[1] == symbol && boardArray[4] == symbol && boardArray[7] == symbol) ||
		(boardArray[2] == symbol && boardArray[5] == symbol && boardArray[8] == symbol) ||

		(boardArray[0] == symbol && boardArray[4] == symbol && boardArray[8] == symbol) ||
		(boardArray[2] == symbol && boardArray[4] == symbol && boardArray[6] == symbol)
		) {
		return true;
	}
	else
	{
		return false;
	}
}

function IsTie(){
    if (boardArray[0] == Default || boardArray[1] == Default || boardArray[2] == Default ||
        boardArray[3] == Default || boardArray[4] == Default || boardArray[5] == Default ||
		boardArray[6] == Default || boardArray[7] == Default || boardArray[8] == Default
		) {
		return false;
	}
	else
	{
		return true;
	}
}

function DisplayMatchInfo(){
    Info.style.display = None;
    WinInfoContainer.style.display = "flex";
    DisplaySymbol();
}

setInterval(()=>{
    if (IsPLaying && GameMode == Computer && Turn == Other && !IsWin(Player) && !IsWin(Other) && !IsTie()) {
        randIndex = Math.floor(Math.random() * 9);
        if (boardArray[randIndex] != Player && boardArray[randIndex] != Other) {
            boardArray[randIndex] = Other;
            Sleep(1000);
            Turn = Player;
        }
    }

    if (IsWin(Player)){
        IsPLaying = false;
        WinInfo.textContent = "YOU WIN";
        DisplayMatchInfo();
        Turn = Other;
    }
    else if (IsWin(Other)){
        IsPLaying = false;
        WinInfo.textContent = "YOU LOSE";
        DisplayMatchInfo();
        Turn = Player;
    }
    else if (IsTie()){
        IsPLaying = false;
        WinInfo.textContent = "TIE";
        DisplayMatchInfo();
    }
    else{
        Info.style.display = Block;
    }
    DisplaySymbol();
    Score.textContent = PlayerScore + " : " + OtherScore;
});
