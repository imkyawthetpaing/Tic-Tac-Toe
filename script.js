var True = "true";
var False = "false";
var X = 'x';
var O = 'o';
var Default = "none";
var UserOne = "userone";
var UserTwo = "usertwo";
var AI = 2;

var WhoTurn = UserOne;
var UserOneSymbol = X;
var UserTwoSymbol = O;
var AiSymbol = 'o';

var Neumorphism = '#dde1e7';
var White = "white";
var Black = "black";
var None = "none";
var Block = "block";

var BoardLenght = 360; //360
var BoardColor = White;

var RowHeight = BoardLenght/3; // 120

var IndexLenght = RowHeight - 12; // 108 // 324
var IndexMarginLeftAndRight = (BoardLenght - IndexLenght*3)/4;
var IndexMarginTop = IndexMarginLeftAndRight/2;
var IndexColor = Black;

var gameMode = document.getElementById('gameMode');
var board =       document.getElementById('board');

var rowOne =       document.getElementById('row1');
var rowTwo =       document.getElementById('row2');
var rowThree =     document.getElementById('row3');

var indexOne =   document.getElementById('index1');
var indexTwo =   document.getElementById('index2');
var indexThree = document.getElementById('index3');
var indexFour =  document.getElementById('index4');
var indexFive =  document.getElementById('index5');
var indexSix =   document.getElementById('index6');
var indexSeven = document.getElementById('index7');
var indexEight = document.getElementById('index8');
var indexNine =  document.getElementById('index9');

var xOne =    document.getElementById('x1');
var oOne =    document.getElementById('o1');
var xTwo =    document.getElementById('x2');
var oTwo =    document.getElementById('o2');
var xThree =  document.getElementById('x3');
var oThree =  document.getElementById('o3');
var xFour =   document.getElementById('x4');
var oFour =   document.getElementById('o4');
var xFive =   document.getElementById('x5');
var oFive =   document.getElementById('o5');
var xSix =    document.getElementById('x6');
var oSix =    document.getElementById('o6');
var xSelven = document.getElementById('x7');
var oSelven = document.getElementById('o7');
var xEight =  document.getElementById('x8');
var oEight =  document.getElementById('o8');
var xNine =   document.getElementById('x9');
var oNine =   document.getElementById('o9');

// official
gameMode.style.height = 100 + 'vh';
gameMode.style.backgroundColor = Black;
gameMode.style.display = "flex";
gameMode.style.justifyContent = "center";
gameMode.style.alignItems = "center";

board.style.width = BoardLenght + "px";
board.style.height = BoardLenght + "px";
board.style.backgroundColor = BoardColor;

rowOne.style.width = 100 + '%';
rowOne.style.height = RowHeight + "px";

rowTwo.style.width = 100 + '%';
rowTwo.style.height = RowHeight + "px";

rowThree.style.width = 100 + '%';
rowThree.style.height = RowHeight + "px";

indexOne.style.width = IndexLenght + "px";
indexOne.style.height = IndexLenght + "px";
indexOne.style.backgroundColor = IndexColor;
indexOne.style.float = "left";
indexOne.style.marginTop = IndexMarginLeftAndRight + "px";
indexOne.style.marginLeft = IndexMarginLeftAndRight + "px";
indexOne.style.display = "flex";
indexOne.style.justifyContent = "center";
indexOne.style.alignItems = "center";

indexTwo.style.width = IndexLenght + "px";
indexTwo.style.height = IndexLenght + "px";
indexTwo.style.backgroundColor = IndexColor;
indexTwo.style.float = "left";
indexTwo.style.marginTop = IndexMarginLeftAndRight + "px";
indexTwo.style.marginLeft = IndexMarginLeftAndRight + "px";
indexTwo.style.display = "flex";
indexTwo.style.justifyContent = "center";
indexTwo.style.alignItems = "center";

indexThree.style.width = IndexLenght + "px";
indexThree.style.height = IndexLenght + "px";
indexThree.style.backgroundColor = IndexColor;
indexThree.style.float = "right";
indexThree.style.marginTop = IndexMarginLeftAndRight + "px";
indexThree.style.marginRight = IndexMarginLeftAndRight + "px";
indexThree.style.display = "flex";
indexThree.style.justifyContent = "center";
indexThree.style.alignItems = "center";

indexFour.style.width = IndexLenght + "px";
indexFour.style.height = IndexLenght + "px";
indexFour.style.backgroundColor = IndexColor;
indexFour.style.float = "left";
indexFour.style.marginTop = IndexMarginTop+IndexMarginTop/2 + "px";
indexFour.style.marginLeft = IndexMarginLeftAndRight + "px";
indexFour.style.display = "flex";
indexFour.style.justifyContent = "center";
indexFour.style.alignItems = "center";

indexFive.style.width = IndexLenght + "px";
indexFive.style.height = IndexLenght + "px";
indexFive.style.backgroundColor = IndexColor;
indexFive.style.float = "left";
indexFive.style.marginTop = IndexMarginTop+IndexMarginTop/2 + "px";
indexFive.style.marginLeft = IndexMarginLeftAndRight + "px";
indexFive.style.display = "flex";
indexFive.style.justifyContent = "center";
indexFive.style.alignItems = "center";

indexSix.style.width = IndexLenght + "px";
indexSix.style.height = IndexLenght + "px";
indexSix.style.backgroundColor = IndexColor;
indexSix.style.float = "right";
indexSix.style.marginTop = IndexMarginTop+IndexMarginTop/2 + "px";
indexSix.style.marginRight = IndexMarginLeftAndRight + "px";
indexSix.style.display = "flex";
indexSix.style.justifyContent = "center";
indexSix.style.alignItems = "center";

indexSeven.style.width = IndexLenght + "px";
indexSeven.style.height = IndexLenght + "px";
indexSeven.style.backgroundColor = IndexColor;
indexSeven.style.float = "left";
indexSeven.style.marginTop = IndexMarginTop + "px";
indexSeven.style.marginLeft = IndexMarginLeftAndRight + "px";
indexSeven.style.display = "flex";
indexSeven.style.justifyContent = "center";
indexSeven.style.alignItems = "center";

indexEight.style.width = IndexLenght + "px";
indexEight.style.height = IndexLenght + "px";
indexEight.style.backgroundColor = IndexColor;
indexEight.style.float = "left";
indexEight.style.marginTop = IndexMarginTop + "px";
indexEight.style.marginLeft = IndexMarginLeftAndRight + "px";
indexEight.style.display = "flex";
indexEight.style.justifyContent = "center";
indexEight.style.alignItems = "center";

indexNine.style.width = IndexLenght + "px";
indexNine.style.height = IndexLenght + "px";
indexNine.style.backgroundColor = IndexColor;
indexNine.style.float = "right";
indexNine.style.marginTop = IndexMarginTop + "px";
indexNine.style.marginRight = IndexMarginLeftAndRight + "px";
indexNine.style.display = "flex";
indexNine.style.justifyContent = "center";
indexNine.style.alignItems = "center";

var boardArray;

function init(){
    for (var i = 0; i < 9; i++){
        boardArray[i] = Default;
    }
}

function UserClick(index){
    /*if (boardArray[index - 1] != UserOne && boardArray[index - 1] != UserTwo){
        if (UserTurn == 1){
            boardArray[index - 1] = UserOne;
            UserTurn *= -1;
        }
        else if (UserTurn == -1){
            boardArray[index - 1] = UserTwo;
            UserTurn *= -1;
        }
    }
    DisplaySymbol();*/

    switch (index) {
        case 1:
            if (WhoTurn == UserOne){
                if (UserOneSymbol == X){
                    xOne.style.display = Block;
                }
                else if (UserOneSymbol == O){
                    oOne.style.display = Block;
                }
                WhoTurn = UserTwo;
            }
            else if (WhoTurn == UserTwo){
                if (UserTwoSymbol == X){
                    xOne.style.display = Block;
                }
                else if (UserTwoSymbol == O){
                    oOne.style.display = Block;
                }
                WhoTurn = UserOne;
            }
            break;
        case 2:
            if (WhoTurn == UserOne){
                if (UserOneSymbol == X){
                    xTwo.style.display = Block;
                }
                else if (UserOneSymbol == O){
                    oTwo.style.display = Block;
                }
                WhoTurn = UserTwo;
            }
            else if (WhoTurn == UserTwo){
                if (UserTwoSymbol == X){
                    xTwo.style.display = Block;
                }
                else if (UserTwoSymbol == O){
                    oTwo.style.display = Block;
                }
                WhoTurn = UserOne;
            }
            break;
        case 3:
            if (WhoTurn == UserOne){
                if (UserOneSymbol == X){
                    xThree.style.display = Block;
                }
                else if (UserOneSymbol == O){
                    oThree.style.display = Block;
                }
                WhoTurn = UserTwo;
            }
            else if (WhoTurn == UserTwo){
                if (UserTwoSymbol == X){
                    xThree.style.display = Block;
                }
                else if (UserTwoSymbol == O){
                    oThree.style.display = Block;
                }
                WhoTurn = UserOne;
            }
            break;
        case 4:
            if (WhoTurn == UserOne){
                if (UserOneSymbol == X){
                    xFour.style.display = Block;
                }
                else if (UserOneSymbol == O){
                    oFour.style.display = Block;
                }
                WhoTurn = UserTwo;
            }
            else if (WhoTurn == UserTwo){
                if (UserTwoSymbol == X){
                    xFour.style.display = Block;
                }
                else if (UserTwoSymbol == O){
                    oFour.style.display = Block;
                }
                WhoTurn = UserOne;
            }
            break;
        case 5:
            if (WhoTurn == UserOne){
                if (UserOneSymbol == X){
                    xFive.style.display = Block;
                }
                else if (UserOneSymbol == O){
                    oFive.style.display = Block;
                }
                WhoTurn = UserTwo;
            }
            else if (WhoTurn == UserTwo){
                if (UserTwoSymbol == X){
                    xFive.style.display = Block;
                }
                else if (UserTwoSymbol == O){
                    oFive.style.display = Block;
                }
                WhoTurn = UserOne;
            }
            break;
        case 6:
            if (WhoTurn == UserOne){
                if (UserOneSymbol == X){
                    xSix.style.display = Block;
                }
                else if (UserOneSymbol == O){
                    oSix.style.display = Block;
                }
                WhoTurn = UserTwo;
            }
            else if (WhoTurn == UserTwo){
                if (UserTwoSymbol == X){
                    xSix.style.display = Block;
                }
                else if (UserTwoSymbol == O){
                    oSix.style.display = Block;
                }
                WhoTurn = UserOne;
            }
            break;
        case 7:
            if (WhoTurn == UserOne){
                if (UserOneSymbol == X){
                    xSelven.style.display = Block;
                }
                else if (UserOneSymbol == O){
                    oSelven.style.display = Block;
                }
                WhoTurn = UserTwo;
            }
            else if (WhoTurn == UserTwo){
                if (UserTwoSymbol == X){
                    xSelven.style.display = Block;
                }
                else if (UserTwoSymbol == O){
                    oSelven.style.display = Block;
                }
                WhoTurn = UserOne;
            }
            break;
        case 8:
            if (WhoTurn == UserOne){
                if (UserOneSymbol == X){
                    xEight.style.display = Block;
                }
                else if (UserOneSymbol == O){
                    oEight.style.display = Block;
                }
                WhoTurn = UserTwo;
            }
            else if (WhoTurn == UserTwo){
                if (UserTwoSymbol == X){
                    xEight.style.display = Block;
                }
                else if (UserTwoSymbol == O){
                    oEight.style.display = Block;
                }
                WhoTurn = UserOne;
            }
            break;
        case 9:
            if (WhoTurn == UserOne){
                if (UserOneSymbol == X){
                    xNine.style.display = Block;
                }
                else if (UserOneSymbol == O){
                    oNine.style.display = Block;
                }
                WhoTurn = UserTwo;
            }
            else if (WhoTurn == UserTwo){
                if (UserTwoSymbol == X){
                    xNine.style.display = Block;
                }
                else if (UserTwoSymbol == O){
                    oNine.style.display = Block;
                }
                WhoTurn = UserOne;
            }
            break;
    }
}

function GetRandom(){
    return Math.floor(Math.random() * 10);
}

function DisplaySymbol(){
    for (var i = 0; i < 9; i++){
        switch (i) {
            case 0:
                if (boardArray[0] == UserOne){
                    if (UserOneSymbol == X){
                        xOne.style.display = Block;
                    }
                    else if (UserOneSymbol == O){
                        oOne.style.display = Block;
                    }
                }
                else if (boardArray[0] == UserTwo){
                    if (UserTwoSymbol == X){
                        xOne.style.display = Block;
                    }
                    else if (UserTwoSymbol == O){
                        oOne.style.display = Block;
                    }
                }
                break;
            case 1:
                if (boardArray[1] == UserOne){
                    if (UserOneSymbol == X){
                        xTwo.style.display = Block;
                    }
                    else if (UserOneSymbol == O){
                        oTwo.style.display = Block;
                    }
                }
                else if (boardArray[1] == UserTwo){
                    if (UserTwoSymbol == X){
                        xTwo.style.display = Block;
                    }
                    else if (UserTwoSymbol == O){
                        oTwo.style.display = Block;
                    }
                }
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            case 7:
                break;
            case 8:
                break;
        }
    }
}
DisplaySymbol();
setInterval(()=>{
});