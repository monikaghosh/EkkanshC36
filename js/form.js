class Form{
    constructor(){
        this.title = createElement("h2");
        this.input = createInput("Name");
        this.greeting = createElement("h3");
        this.button = createButton("Start");

    }
    display(){
        //var title = createElement("h2");
        this.title.html("Car Racing Game");
        this.title.position(width/2-200, 100);
        this.input.position(width/2-200, 200);
        
        //position will be fixed when mouse pressed happens
       
        this.button.position(width/2-200, 250);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.title.hide();
            this.button.hide();
            var name = this.input.value();
        
            //we have to increase playerCount in the DB
            playerCount+=1;
            player.updateCount(playerCount);

            //we also have to store the name in DB
            player.update(name);
        
            this.greeting.html("Hello "+ name+"\n Please wait for Others");
            this.greeting.position(width/2-200, 300);
            
        
        
        })

    }
}