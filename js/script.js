var flag = true;
var values = [1,0,1,0,1,0,0,1,0];
var players1, players2;
var players1Count=0, players2Count=0;

document.querySelector('.game').addEventListener('click',function(e){
    // alert('hi');
    var index = e.target.id;
    if(values[index] == 1  || values[index] == 0)
    {
        values[index] = setVal();
        e.target.innerHTML = setVal();
        flag = !flag;
        getWinner();
    }
    else
        alert("Not allowed");
    console.log(values);
})

function setVal(){
    return (flag) ? 'X' : 'O';
}

function startGame(){
    players1 = document.querySelector('#player1').value;
    players2 = document.querySelector('#player2').value;

    if(players1 == '' || players2 == '')
        alert("Enter the players name");
    else if(players1 == players2)
        alert("Players name can't be same");
    else
    {
        document.querySelector('.content').style.visibility = 'visible';
        document.querySelector('.players').style.visibility = 'hidden';
        document.getElementsByTagName('span')[0].innerText = players1;
        document.getElementsByTagName('span')[3].innerText = players2;
    }
}

function getWinner(){

    winnerIndexes = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for(let i=0; i<winnerIndexes.length; i++){
        let [a, b, c] = winnerIndexes[i];
        if(values[a] == values[b] && values[b] == values[c]){
            getScore(a, b, c);
            break;
        }
    }
}

function getScore(x, y, z){
    if(flag)
    {
        console.log(players2, " WINNER");
        players2Count++;
        document.querySelector('.winner-player').innerHTML = players2 + "<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>" + "Winner !!";
    }
    else
    {
        console.log(players1, " WINNER");
        players1Count++;
        document.querySelector('.winner-player').innerHTML = players1 + "<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>" + "Winner !!";
    }

    document.getElementsByTagName('span')[2].innerHTML = players1Count;
    document.getElementsByTagName('span')[5].innerHTML = players2Count;
    document.getElementById(x).style.color ="#960018";
    document.getElementById(y).style.color ="#960018";
    document.getElementById(z).style.color ="#960018";
    values = [null, null, null, null, null, null, null, null, null];
}

document.querySelector('.play-again').addEventListener('click',function(){
    var cells = document.querySelectorAll('.cell');
    for(let i=0; i<cells.length;i++){
        cells[i].innerHTML = "";
        cells[i].style.color = "black";
    }
    document.querySelector('.winner-player').innerHTML = "Who will win ?!";
    values = [1,0,1,0,1,0,0,1,0];
    flag = true;
})

