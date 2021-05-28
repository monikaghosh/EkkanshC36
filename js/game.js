class Game{

    constructor(){

    }

    //to get the value of gameState from the DB
    getGameState(){
        //to go to the location in the DB
        var dbref = database.ref("gameState");
        //get the value
        dbref.on("value",(d)=>{
            gameState = d.val();
        })
    }

    //to update the gameState in the DB
    updateGameState(d){
        var dbref = database.ref("/");
        dbref.update({
            "gameState": d
        })

    }
    start(){
    form = new Form();
    player = new Player();
    form.display();
    }


    play(){

    }

}