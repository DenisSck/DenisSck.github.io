//initial pacman position + initial score
$(document).ready(function() {
    $("#pacman").css({marginTop: "-=-50px"});
    $("#pacman").css({marginLeft: "-=-50px"});
    pacposX = 1;
    pacposY = 1;
    console.log("X: " + pacposX + " Y: " + pacposY);
    scorecount = 0;
    inputnumber = 0;
    timerseconds = 0;
    $("#endcard").hide();
});



//console.log(mapArray[2][4]);


//player movement
$(document).keydown(function(e9) {

    //W Up
    if (e9.keyCode == 87 || e9.keyCode == 38 ) {
        //console.log("W Key pressed");

        $("#pacman").css('transform', 'rotate(-90deg)');

        if (inputnumber == "0"){
            inputnumber++
            console.log("First Input");
            starttimer(); 
        }

        if (parseInt(mapArray[pacposY-1][pacposX]) == 0){

            $("#pacman").css({marginTop: "-=50px"});
            pacposY--;
            //console.log("X: " + pacposX + " Y: " + pacposY);

        } else if (parseInt(mapArray[pacposY-1][pacposX]) == 3){

            $("#pacman").css({marginTop: "-=50px"});
            pacposY--;
            //console.log("X: " + pacposX + " Y: " + pacposY);

            scorefunc();

        } else if (parseInt(mapArray[pacposY-1][pacposX]) == 4 || 
                   parseInt(mapArray[pacposY-1][pacposX]) == 5 || 
                   parseInt(mapArray[pacposY-1][pacposX]) == 6 || 
                   parseInt(mapArray[pacposY-1][pacposX]) == 7){

            $("#pacman").css({marginTop: "-=50px"});
            pacposY--;
            //console.log("X: " + pacposX + " Y: " + pacposY);

            gameover();

        } else {

            //console.log("Not possible");

        }


    //A Left
    } else if (e9.keyCode == 65 || e9.keyCode == 37 ) {
        //console.log("A Key pressed");

        $("#pacman").css('transform', 'rotate(-180deg)');

        if (inputnumber == "0"){
            inputnumber++
            console.log("First Input");
            starttimer(); 
        }

        if (parseInt(mapArray[pacposY][pacposX-1]) == 0){

            $("#pacman").css({marginLeft: "-=50px"});
            pacposX--;
            //console.log("X: " + pacposX + " Y: " + pacposY);

        } else if (parseInt(mapArray[pacposY][pacposX-1]) == 3){

            $("#pacman").css({marginLeft: "-=50px"});
            pacposX--;
            //console.log("X: " + pacposX + " Y: " + pacposY);

            scorefunc();

        } else if (parseInt(mapArray[pacposY][pacposX-1]) == 4 || 
                   parseInt(mapArray[pacposY][pacposX-1]) == 5 || 
                   parseInt(mapArray[pacposY][pacposX-1]) == 6 || 
                   parseInt(mapArray[pacposY][pacposX-1]) == 7){

            $("#pacman").css({marginLeft: "-=50px"});
            pacposX--;
            //console.log("X: " + pacposX + " Y: " + pacposY);

            gameover();

        } else {

            //console.log("Not possible");

        }


    //S Down
    } else if (e9.keyCode == 83 || e9.keyCode == 40 ) {
        //console.log("S Key pressed");

        $("#pacman").css('transform', 'rotate(90deg)');

        if (inputnumber == "0"){
            inputnumber++
            console.log("First Input");
            starttimer(); 
        }

        if (parseInt(mapArray[pacposY+1][pacposX]) == 0){

            $("#pacman").css({marginTop: "-=-50px"});
            pacposY++;
            //console.log("X: " + pacposX + " Y: " + pacposY);

        } else if (parseInt(mapArray[pacposY+1][pacposX]) == 3){
            
            $("#pacman").css({marginTop: "-=-50px"});
            pacposY++;
            //console.log("X: " + pacposX + " Y: " + pacposY);

            scorefunc();

        } else if (parseInt(mapArray[pacposY+1][pacposX]) == 4 || 
                   parseInt(mapArray[pacposY+1][pacposX]) == 5 || 
                   parseInt(mapArray[pacposY+1][pacposX]) == 6 || 
                   parseInt(mapArray[pacposY+1][pacposX]) == 7){
            
            $("#pacman").css({marginTop: "-=-50px"});
            pacposY++;
            //console.log("X: " + pacposX + " Y: " + pacposY);

            gameover();

        } else {

            //console.log("Not possible");

        }


    //D Right
    } else if (e9.keyCode == 68 || e9.keyCode == 39 ) {
        //console.log("D Key pressed");

        $("#pacman").css('transform', 'rotate(0deg)');

        if (inputnumber == "0"){
            inputnumber++
            console.log("First Input");
            starttimer(); 
        }

        if (parseInt(mapArray[pacposY][pacposX+1]) == 0){

            $("#pacman").css({marginLeft: "-=-50px"});
            pacposX++;
            //console.log("X: " + pacposX + " Y: " + pacposY);

        } else if (parseInt(mapArray[pacposY][pacposX+1]) == 3){

            $("#pacman").css({marginLeft: "-=-50px"});
            pacposX++;
            //console.log("X: " + pacposX + " Y: " + pacposY);

            scorefunc();

        } else if (parseInt(mapArray[pacposY][pacposX+1]) == 4 || 
                   parseInt(mapArray[pacposY][pacposX+1]) == 5 || 
                   parseInt(mapArray[pacposY][pacposX+1]) == 6 || 
                   parseInt(mapArray[pacposY][pacposX+1]) == 7){

            $("#pacman").css({marginLeft: "-=-50px"});
            pacposX++;
            //console.log("X: " + pacposX + " Y: " + pacposY);

            gameover();

        } else {

            //console.log("Not possible");

        }
        
  
    } else if (e9.keyCode == 76) {
        console.log("X: " + pacposX + " Y: " + pacposY);
        $("#endcard").show();
    }
})

//collect coin function / score
function scorefunc(){

    if (scorecount < 29){

        scorecount++;
        $("#scorecount").text(scorecount);
        //console.log("Score: " + scorecount);

        mapArray[pacposY][pacposX] = "0";

        ghostgen();
        ghostgen2();
        ghostgen3();
        ghostgen4();

    } else {
        console.log("All coins collected");
        gamewon();
    }
    
}


//gameover function / called when ghost collide
function gameover(){
        $("#scorecount").text(scorecount);
        console.log("Score: " + scorecount);
        console.log("Gameover");
        mapArray[pacposY][pacposX] = "0";
        $("#canvas").empty();
        endtime = timerseconds;
        $("#endcardtime").text(endtime);

        mapArray=[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1],
            [1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1],
            [1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1],
            [1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1],
            [1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1],
            [1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1],
            [1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1],
            [1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1],
            [1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1],
            [1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        
            
        ];

        drawMap(); 
}

//function when game is won
function gamewon(){
    scorecount++;
    $("#scorecount").text(scorecount);
    console.log("Score: " + scorecount);
    console.log("Gameover");
    mapArray[pacposY][pacposX] = "0";
    $("#canvas").empty();
    endtime = timerseconds;
    $("#endcardtime").text(endtime);
    $("#endcardscore").text(scorecount);
    $("#endcard").show();
    $("#scoretitle").hide();
    $("#reset").text("start new game");

    mapArray=[
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1],
        [1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1],
        [1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1],
        [1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
        [1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1],
        [0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0],
        [0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0],
        [1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1],
        [1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1],
        [1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1],
        [1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    
        
    ];

    drawMap(); 
}

//initial array for ghost gen to eliminate overlap with coin or pacman
mapArrayFinal=[
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,3,0,0,0,0,0,0,3,0,0,0,0,0,3,1],
    [1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,3,0,0,0,1,4,1,3,0,1,0,1,0,0,3,0,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1],
    [1,0,1,3,1,0,1,3,0,0,0,0,3,1,0,1,3,1,7,1],
    [1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1],
    [1,3,0,1,1,0,0,0,0,0,3,0,0,0,0,1,1,0,3,1],
    [1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1],
    [1,1,1,3,1,0,1,0,1,1,1,1,3,1,0,1,0,1,1,1],
    [1,1,1,0,1,0,1,3,1,1,1,1,0,1,0,1,0,1,1,1],
    [1,1,1,0,0,0,1,0,1,1,1,1,0,1,3,0,0,1,1,1],
    [1,3,0,1,1,3,0,0,0,3,0,0,0,0,0,1,1,0,3,1],
    [1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1],
    [1,0,1,3,1,0,1,3,0,0,0,0,3,1,0,1,3,1,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1],
    [1,0,3,0,0,5,1,0,1,0,3,1,0,1,0,3,6,0,0,1],
    [1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

    
];

//random ghost generation after score change for all 4 ghosts
function ghostgen(){

    let randomX = Math.floor(Math.random() * 20);
    let randomY = Math.floor(Math.random() * 20);
    if (mapArrayFinal[randomX][randomY] == "0") {

        for (var i=0; i < mapArray.length; i++){
            for (var j=0; j < mapArray[i].length; j++){
    
                if (parseInt(mapArray[i][j]) == 4){
                    mapArray[i][j] = "0";
            }
        }}

        for (var i=0; i < mapArrayFinal.length; i++){
            for (var j=0; j < mapArrayFinal[i].length; j++){
    
                if (parseInt(mapArrayFinal[i][j]) == 4){
                    mapArrayFinal[i][j] = "0";
            }
        }}

        mapArray[randomX][randomY] = "4";
        mapArrayFinal[randomX][randomY] = "4";

        $("#canvas").find('*').not("#pacman").not("#pacmanMouth").remove();
        drawMap();  
    } else {
        ghostgen();
    }
}

function ghostgen2(){

    let randomX = Math.floor(Math.random() * 20);
    let randomY = Math.floor(Math.random() * 20);
    if (mapArrayFinal[randomX][randomY] == "0") {

        for (var i=0; i < mapArray.length; i++){
            for (var j=0; j < mapArray[i].length; j++){
    
                if (parseInt(mapArray[i][j]) == 5){
                    mapArray[i][j] = "0";
            }
        }}

        for (var i=0; i < mapArrayFinal.length; i++){
            for (var j=0; j < mapArrayFinal[i].length; j++){
    
                if (parseInt(mapArrayFinal[i][j]) == 5){
                    mapArrayFinal[i][j] = "0";
            }
        }}

        mapArray[randomX][randomY] = "5";
        mapArrayFinal[randomX][randomY] = "5";

        $("#canvas").find('*').not("#pacman").not("#pacmanMouth").remove();
        drawMap();  
    } else {
        ghostgen2();
    }
}

function ghostgen3(){

    let randomX = Math.floor(Math.random() * 20);
    let randomY = Math.floor(Math.random() * 20);
    if (mapArrayFinal[randomX][randomY] == "0") {

        for (var i=0; i < mapArray.length; i++){
            for (var j=0; j < mapArray[i].length; j++){
    
                if (parseInt(mapArray[i][j]) == 6){
                    mapArray[i][j] = "0";
            }
        }}

        for (var i=0; i < mapArrayFinal.length; i++){
            for (var j=0; j < mapArrayFinal[i].length; j++){
    
                if (parseInt(mapArrayFinal[i][j]) == 6){
                    mapArrayFinal[i][j] = "0";
            }
        }}

        mapArray[randomX][randomY] = "6";
        mapArrayFinal[randomX][randomY] = "6";

        $("#canvas").find('*').not("#pacman").not("#pacmanMouth").remove();
        drawMap();  
    } else {
        ghostgen2();
    }
}

function ghostgen4(){

    let randomX = Math.floor(Math.random() * 20);
    let randomY = Math.floor(Math.random() * 20);
    if (mapArrayFinal[randomX][randomY] == "0") {

        for (var i=0; i < mapArray.length; i++){
            for (var j=0; j < mapArray[i].length; j++){
    
                if (parseInt(mapArray[i][j]) == 7){
                    mapArray[i][j] = "0";
            }
        }}

        for (var i=0; i < mapArrayFinal.length; i++){
            for (var j=0; j < mapArrayFinal[i].length; j++){
    
                if (parseInt(mapArrayFinal[i][j]) == 7){
                    mapArrayFinal[i][j] = "0";
            }
        }}

        mapArray[randomX][randomY] = "7";
        mapArrayFinal[randomX][randomY] = "7";

        $("#canvas").find('*').not("#pacman").not("#pacmanMouth").remove();
        drawMap();  
    } else {
        ghostgen2();
    }
}

//tilemap generation
var mapArray=[
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,3,0,0,0,0,0,0,3,0,0,0,0,0,3,1],
    [1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,3,0,0,0,1,4,1,3,0,1,0,1,0,0,3,0,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1],
    [1,0,1,3,1,0,1,3,0,0,0,0,3,1,0,1,3,1,7,1],
    [1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1],
    [1,3,0,0,1,0,0,0,0,0,3,0,0,0,0,1,0,0,3,1],
    [1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1],
    [0,0,1,3,1,0,1,0,1,0,0,1,3,1,0,1,0,1,0,0],
    [0,0,1,0,1,0,1,3,1,0,0,1,0,1,0,1,0,1,0,0],
    [1,1,1,0,0,0,1,0,1,1,1,1,0,1,3,0,0,1,1,1],
    [1,3,0,0,1,3,0,0,0,3,0,0,0,0,0,1,0,0,3,1],
    [1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1],
    [1,0,1,3,1,0,1,3,0,0,0,0,3,1,0,1,3,1,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1],
    [1,0,3,0,0,5,1,0,1,0,3,1,0,1,0,3,6,0,0,1],
    [1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

    
];

//draw tilemap
function drawMap(){

    for (var i=0; i < mapArray.length; i++){
        for (var j=0; j < mapArray[i].length; j++){

            if (parseInt(mapArray[i][j]) == 0){
                $("#canvas").append('<div class="field"></div>');
            } else if (parseInt(mapArray[i][j]) == 1){
                $("#canvas").append('<div class="wall"></div>');
            } else if (parseInt(mapArray[i][j]) == 3){
                $("#canvas").append('<div class="coin"></div>');
            } else if (parseInt(mapArray[i][j]) == 4){
                $("#canvas").append('<div class="enemy">9</div>');
            } else if (parseInt(mapArray[i][j]) == 5){
                $("#canvas").append('<div class="enemy2">9</div>');
            } else if (parseInt(mapArray[i][j]) == 6){
                $("#canvas").append('<div class="enemy3">9</div>');
            } else if (parseInt(mapArray[i][j]) == 7){
                $("#canvas").append('<div class="enemy4">9</div>');
            }
        }
    }
}

window.onload=function(){
    drawMap();
}

//reset game to start
$(document).ready(function() {
    $("#reset").on("click", function(){
        location.reload();
    });
});

//starting timer function
function starttimer(){
    setInterval(function() {
        timerseconds++;
        console.log(timerseconds);
    }, 1000);
}