//v1

//def user imputs
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const rock_ig = document.getElementById('rockimg');
const paper_ig = document.getElementById('paperimg');
const scissor_ig = document.getElementById('scissorimg');
//c = computer
const c_rock = document.getElementById('C-rock');
const c_paper = document.getElementById('C-paper');
const c_scissor = document.getElementById('C-scissor');
const c_rock_ig = document.getElementById('C-rockimg');
const c_paper_ig = document.getElementById('C-paperimg');
const c_scissor_ig = document.getElementById('C-scissorimg');

//other game obj
const game = document.getElementById('content');
const scoretxt = document.getElementById('score')

//global var
let player_score = 0;
let comp_score = 0;

//random func
const random = () =>{
    let random = Math.floor(Math.random()*3)
    switch (random) {
        case 0:
            return "rockimg"
        case 1:
            return "paperimg"
        case 2:
            return "scissorimg"
    }
}

//ref func
const ref = () =>{
    scoretxt.innerHTML = `${player_score} Te || Számitógép ${comp_score}`
}

//coloring and design
const isWin = (win_id, l_id) =>{
    document.getElementById(win_id).style.borderColor = "green"
    document.getElementById(l_id).style.borderColor = "red"
}

const gameDesign = (comp, user) =>{
    let compR = "C-" + comp;
    if(user != "content"){
        document.getElementById(compR).style.left = "50%";
        document.getElementById(compR).style.top = "25%";
        document.getElementById(user).style.left = "30%";
        document.getElementById(user).style.top = "25%";
        if(user == comp){
            document.getElementById(compR).style.borderColor = "yellow";
            document.getElementById(user).style.borderColor = "yellow";
        }
        scoretxt.style.color = "yellow";
    }else{}
}

//clear func
const clearUp = () =>{
    //user
    rock_ig.style.top = "26%";
    rock_ig.style.left = "3%";
    rock_ig.style.borderColor = "rgb(32, 94, 122)";
    //
    paper_ig.style.top = "46%";
    paper_ig.style.left = "3%";
    paper_ig.style.borderColor = "rgb(32, 94, 122)";
    //
    scissor_ig.style.top = "66%";
    scissor_ig.style.left = "3%";
    scissor_ig.style.borderColor = "rgb(32, 94, 122)";
    //
    c_rock_ig.style.top = "26%";
    c_rock_ig.style.left = "77%";
    c_rock_ig.style.borderColor = "black";
    //
    c_paper_ig.style.top = "46%";
    c_paper_ig.style.left = "77%";
    c_paper_ig.style.borderColor = "black";
    //
    c_scissor_ig.style.top = "66%"
    c_scissor_ig.style.left = "77%";
    c_scissor_ig.style.borderColor = "black";
    //
    scoretxt.style.color = "rgb(32, 94, 122)";
    console.log('cleard up');
}

//game func 
const gameFunc = (compCh,userimput) =>{
    if(compCh == userimput){}
    else{
        switch (userimput) {
            case 'rockimg':
                if(compCh == "paperimg"){comp_score++; isWin("C-paperimg", "rockimg")}else{player_score++; isWin("rockimg", "C-scissorimg")}
                ref();
                break;
            case 'paperimg':
                if(compCh == "scissorimg"){comp_score++; isWin("C-scissorimg", "paperimg")}else{player_score++; isWin("paperimg", "C-rockimg")}
                ref();
                break;
            case 'scissorimg':
                if(compCh == "rockimg"){comp_score++; isWin("C-rockimg", "scissorimg")}else{player_score++; isWin("scissorimg", "C-paperimg")}
                ref();
                break;
             default:
                console.log('error');
                break;
        }
    }    
}


//game
game.addEventListener("click", e=>{
    let comp_imput = random()
    gameDesign(comp_imput, e.target.id);
    gameFunc(comp_imput, e.target.id)
    setTimeout(clearUp, 1000);
})

