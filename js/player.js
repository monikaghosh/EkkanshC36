class Player{
    constructor(){

    }
    //to get the playerCount from the DB and save it in our variable playerCount
    getPlayerCount(){ 
        //we haveto go to the location in the DB - .ref()
        var dbref = database.ref("playerCount");

        //.on() will fetch the value from the DB
        dbref.on("value",function(data){
            playerCount = data.val();
        })
    }

    //to update the PlayerCpount to the DB
    updateCount(count){
        var dbref = database.ref("/"); // "/" - means the main node of the database
        //update the playerCount
        dbref.update({
            playerCount:count
        })

    }

    //update the details of the player in the DB
    update(n){
        //to create the string for the location
        var location = "players/player"+playerCount;

        //to ref to that string location
        var dbref = database.ref(location);
        //.set() will create the node and save the value there while the update requires the node to be 
        //already created
        dbref.set({
            name:n
        })

    }
}