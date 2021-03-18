class Player {
  //making the constructor
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank=null;
  }
  //refering to the database
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
  //updating the players info
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
  //waiting for all players to come
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  //making a function for getting cars at end
  getcarsAtEnd(){
    var carsEndRef = database.ref('carsAtEnd');
    carsEndRef.on("value",(data)=>{
      this.rank=data.val();
    })
  }
  //updating the ranks of the car
  static updatecarsAtEnd(rank){
    database.ref('/').update({
      carsAtEnd:rank
    })
  }
}