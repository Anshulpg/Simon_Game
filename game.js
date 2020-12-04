var answer=[];
var level=0
var colors=["blue","green","red","yellow"]
userAnswer=[]
function levelAdder() {
    level+=1
    newColor=colors[Math.floor(Math.random()*4)]
    $("h1").text("Level "+level)
    answer.push(newColor)
    // $("#"+newColor).click()
    clickSimulator(newColor)
    userAnswer=[]

    if(level<5){
        hint=""
        for(var i=0;i<answer.length;i++){
            hint+=answer[i]+"  "
        }


        $(".hint").text(hint.toUpperCase())
    }

    else{
        $(".hint").text("")
    }

// this is easy mode
if(level<7){
    var green_count=0
    var red_count=0
    var blue_count=0
    var yellow_count=0
    for( var i=0 ; i<answer.length ; i++){
        if(answer[i]==="red"){
            red_count+=1
        }
        if(answer[i]==="blue"){
            blue_count+=1
        }if(answer[i]==="green"){
            green_count+=1
        }if(answer[i]==="yellow"){
            yellow_count+=1
        }
}
$("#toBePressedGreen").text(green_count)
$("#toBePressedRed").text(red_count)
$("#toBePressedYellow").text(yellow_count)
$("#toBePressedBlue").text(blue_count)

}
else{
    $("#toBePressedGreen").text("")
$("#toBePressedRed").text("")
$("#toBePressedYellow").text("")
$("#toBePressedBlue").text("")
}
}



function clickSimulator(colorToCLick) {
    $("#"+colorToCLick).addClass("pressed");
    var audio_x = new Audio("sounds/"+colorToCLick+".mp3")
    audio_x.play()
    setTimeout(function () {
        $("#"+colorToCLick).removeClass("pressed")
    },100);
}



function answerChecker() {
    console.log(userAnswer,answer)
    if (userAnswer.length===answer.length){
        t=0
        for(var i=0 ; i<userAnswer.length;i++){
            if( userAnswer[i]===answer[i]){
                continue
            }
            else{
                t=1
                break
            }}
        if(t===1){
            endGame()
            return false

        }
        else{
            setTimeout(levelAdder,1000)
            return true
        }
        
    }
    else{
        t=0
        for(var i=0 ;  i<userAnswer.length;i++){
            if( userAnswer[i]===answer[i]){
                continue
            }
            else{
                t=1
                break
            }}
        if(t==1){
            endGame()
            return false

        }
        else{
            return true
        }
    }

}

function endGame() {
    count=0
    level=0
    answer=[]
    userAnswer=[]
    $("body").addClass("game-over")
    $("h1").text("Press A Key to Start")
    var audio_over= new Audio("sounds/wrong.mp3")
    audio_over.play()
    setTimeout(function(){ $("body").removeClass("game-over")},500)
    
}


var count=0
$(document).keypress(function () {
    if (count===0){
        count++
        setTimeout(levelAdder,200)
    }
})

$("#green").click(function() {
    if(level>0){
    userAnswer.push("green")
    if (answerChecker()===true){
        $("#green").addClass("pressed");
    var audio_g = new Audio("sounds/green.mp3")
    audio_g.play()
    setTimeout(function () {
        $("#green").removeClass("pressed")
    },100);
    }
    else{
        endGame()
    }
    
    }    
})


$("#red").click(function() {
    if(level>0){
    userAnswer.push("red")
    if (answerChecker()===true){
        $("#red").addClass("pressed");
    var audio_r = new Audio("sounds/red.mp3")
    audio_r.play()
    setTimeout(function () {
        $("#red").removeClass("pressed")
    },100);
    }
    else{
        endGame()
    }}
    
})

$("#blue").click(function() {
    if (level>0){
    userAnswer.push("blue")
    if (answerChecker()===true){
        $("#blue").addClass("pressed");
    var audio_b = new Audio("sounds/blue.mp3")
    audio_b.play()
    setTimeout(function () {
        $("#blue").removeClass("pressed")
    },100);
    }
    else{
        endGame()
    }}
    
})

$("#yellow").click(function() {
    if(level>0){
    userAnswer.push("yellow")
    if (answerChecker()===true){
        $("#yellow").addClass("pressed");
    var audio_g = new Audio("sounds/yellow.mp3")
    audio_g.play()
    setTimeout(function () {
        $("#yellow").removeClass("pressed")
    },100);
    }
    else{
        endGame()
    }}
    
})

var green_count=0
var red_count=0
var blue_count=0
var yellow_count=0

$(document).click(function(){
    


})