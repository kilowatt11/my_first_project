var health = 100;

function slap(){
      health -= 1
    update(health);
  /// document.getElementById("Health").innerText = health;
}


function update(health){
    
    document.getElementById("Health").innerText = health;
    
}