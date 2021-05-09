

var Gamecontroller =   (function(){
class Player {
constructor(health,attack_damage,armor,bank, Jarl_level_count) {
            this.health = health;
            this.attack_damage = attack_damage;
            this.armor = armor;
            this.bank = bank;
       
            this.Jarl_level_count =Jarl_level_count;
}


getPlayer(player){
   if (player == null) player = new Player();

     return player;
}

 Getname() {

      return this.name;

 }
setName(Playername){
name = Playername;
}

getpotions(){
return numhealthptoion;
}

addpotions(){
 numhealthptoion++;
}

subtractpotions(){
 numhealthptoion--;
}

gethealth() {
return this.health;
}

sethealth( healtheffect) {

this.health =  healtheffect;
return this.health;
}


addhealth(healtheffect) {
this.health = this.health + healtheffect;
}

subtracthealth(healtheffect) {

this.health = this.health - healtheffect;
 }

  getArmor() {
return this.armor;
}
subtractarmor(armoreffect) {
if (this.armor - armoreffect < 0){
this.armor = 0;
}
 else {
this.armor = this.armor - armoreffect;
}
 }

addactarmor(armoreffect) {
this.armor = this.armor + armoreffect;
 }

setarmor(armoreffect){
this.armor= armoreffect;
 return this.armor;
}

getBank() {
return this.bank;
 }

subtractbank(bankeffect) {
 this.bank = this.bank - bankeffect;
 return this.bank;
}



setbank(bankeffect){
this.bank = bankeffect;
 return this.bank;
 }  



addbank(bankeffect) {
this.bank = this.bank + bankeffect;
return this.bank;
}


getJarllevelcount () {

return this.Jarl_level_count;

}

setlevel(level) {
this.Jarl_level_count = level;
return  this.Jarl_level_count;
}
Jarl_level_count() {
this.Jarl_level_count++;
// this.Jarl_level_count = Jarl_level_count;
}

getAttackdamage () {
return this.attack_damage;
}

addattackdamage( damage ) {
this.attack_damage = this.attack_damage + damage;
 }

setATTACKDAMAGE(damage) {
this.attackdamage =  damage;
 return this.attackdamage;
 }

}
let Weapons = [
  {
    "Weapon_ID": 0,
    "Name": "Sword",
    "Description": "Basic cilvian sword",
    "attack_damage": 50,
    "cost": 50
  },
 {
    "Weapon_ID": 1,
    "Name": "Axe",
    "Description": "Basic cilvian Axe",
    "attack_damage": 60,
    "cost": 60
  },
 {
    "Weapon_ID": 2,
    "Name": "Knife",
    "Description": "Basic cilvian Knife",
    "attack_damage": 30,
    "cost": 25
  },

];

let Items = [
  {
    "Item_ID": 0,
    "Name": "Ring",
    "Description": "Basic Davenrun ring",
    "Health_value": 50,
    "cost": 50
  },
 {
    "Item_ID": 1,
    "Name": "Torch",
    "Description": "Basic cilvian Torch",
    "Health_value": 0,
    "cost": 60
  },
 {
    "Item_ID": 2,
    "Name": "Book",
    "Description": "Basic cilvian book",
    "Health_value": 10,
    "cost": 25
  },

];
let Armors = [
  {
    "Armor_ID": 0,
    "Name": "Light",
    "Description": "Basic light armor",
    "Armor": 40,
    "cost": 40
  },
 {
    "Armor_ID": 1,
    "Name": "Axe",
    "Description": "Basic heavy armor",
    "Armor": 60,
    "cost": 60
  },
 {
    "Armor_ID": 2,
    "Name": "Sheild",
    "Description": "Basic civilian sheild",
    "Armor": 30,
    "cost": 25
  },

];
var Item = function() {
          let outputString =  " ";
    const divs = document.getElementsByClassName("good_items");
Items.forEach(function (arrayItem, index) {
  
    var a = arrayItem.Item_ID;
    var b = arrayItem.Name;
    var c = arrayItem.Description;
    var d = arrayItem.Health_value;
    var e = arrayItem.cost;
    outputString  += "\n Item ID: " + a + " \n Name: " + b + "\n Description: " + c  + "\n Health_value: " + d + "\n cost: " + e + "\n";
 console.log('Output string:',outputString);
});
    document.getElementById("results").innerHTML = outputString;
}
var Weapon = function() {
     //Weapons.forEach((Weapon)=>console.log(Weapon.Weapon_ID,Weapon.Name,Weapon.Description,Weapon.attack_damage,Weapon.cost));
     
  let outputString =  " ";
    const divs = document.getElementsByClassName("weapon_items");
Weapons.forEach(function (arrayItem, index) {
  
    var a = arrayItem.Weapon_ID;
    var b = arrayItem.Name;
    var c = arrayItem.Description;
    var d = arrayItem.attack_damage;
    var e = arrayItem.cost;
    outputString  += "\n Weapon ID: " + a + " \n Name: " + b + "\n Description: " + c  + "\n attack_damage: " + d + "\n cost: " + e + "\n";
 console.log('Output string:',outputString);
});
    document.getElementById("results").innerHTML = outputString;
}
    
var Armor = function() {
         let outputString =  " ";
    const divs = document.getElementsByClassName("armor_items");
Armors.forEach(function (arrayItem, index) {
  
    var a = arrayItem.Armor_ID;
    var b = arrayItem.Name;
    var c = arrayItem.Description;
    var d = arrayItem.Armor;
    var e = arrayItem.cost;
    outputString  += "\n Armor ID: " + a + " \n Name: " + b + "\n Description: " + c  + "\n Armor: " + d + "\n cost: " + e + "\n";
 console.log('Output string:',outputString);
});
    document.getElementById("results").innerHTML = outputString;
}

    return {
    
getPlayerstat: function() {
var test = new Player(100,100,100,100,0);
let outputString = "Your player stats are: " + "\n Health: " + test.gethealth() + "\n Attack Damage: " + test.getAttackdamage() 
+"\n Armor:"  + test.getArmor() 
 + "\n Bank: " + test.getBank() +
"\n Game level: " +test.getJarllevelcount();
 document.getElementById("results").innerHTML = outputString;
},
Inventory_prompts: function() {
console.log('Test');
 let inventory = document.getElementById("inventory").value;
             console.log('inventory: ',inventory);
 switch (inventory) {

  case "good_items":
      console.log('SUCESS!!!!!');
      Item();  
   break;
  case "weapon_items":
    console.log('VICTORY!!!!!');
    Weapon();
   break;
case "armor_items":
    console.log('SWAGGGG!!!!!');
    Armor();
break;
  
default:
    character = 'Invalid input';
               
     
        }
      },

};
})();
// UI CONTROLLER
var UIController =  (function(){
 //private object
   
        var steveHelderhan = function() {

          document.getElementById("interactions").style.visibility = "visible"; 
		let character = "Steve Helderhan: Hello laddy, \n how are you today? \n 1) I'm good how are you? \n 2) I’m busy right now. \n 3) Exit";
          document.getElementById("results").innerHTML = character; 
      
 const Submit_character = document.getElementById("interactionSubmit");
      Submit_character.addEventListener('click', function(){
             let character = document.getElementById("interaction").value;
             console.log('Character: ',character);
 switch (character) {

  case '1':
           character = 'Steve Helderhan: Ah the land here is great! \n My name is Steve Helderhan. \n In my youth, I was an adventure like you. \n I traveled here to this great land and \n spend my entire life here. \n I am growing old now. \n My time here is short. \n I hope you have a good day. ';
           document.getElementById("results").innerHTML = character; 
          
                     document.getElementById("interactions").style.visibility = "hidden"; 
          
   break;
  case '2':
      character = 'Steve Helderhan: Suit yourself then!';
     document.getElementById("results").innerHTML = character; 
      document.getElementById("interactions").style.visibility = "hidden"; 
   break;
  case '3':
          character = 'Steve Helderhan: Well alright then!';
          document.getElementById("results").innerHTML = character; 
          document.getElementById("interactions").style.visibility = "hidden";  
break;
default:
                character = 'Invalid input';
                document.getElementById("results").innerHTML = character; 
               document.getElementById("interactions").style.visibility = "hidden";  
}

})
             
          
};
    var unknown_person = function() {

          document.getElementById("interactions").style.visibility = "visible"; 
		let character = "Unknown person: Stares at you immensely \n 1) Why are you staring at me? \n 2) Walk away. \n 3) Exit";
          document.getElementById("results").innerHTML = character; 
      
 const Submit_character = document.getElementById("interactionSubmit");
      Submit_character.addEventListener('click', function(){
             let character = document.getElementById("interaction").value;
             console.log('Character: ',character);
 switch (character) {

  case '1':
           character = 'To be continuied...';
           document.getElementById("results").innerHTML = character; 
          
                     document.getElementById("interactions").style.visibility = "hidden"; 
          
   break;
  case '2':
     // character = 'Steve Helderhan: Suit yourself then!';
     document.getElementById("results").innerHTML = ''; 
      document.getElementById("interactions").style.visibility = "hidden"; 
   break;
  case '3':
         // character = 'Steve Helderhan: Well alright then!';
          document.getElementById("results").innerHTML = ''; 
          document.getElementById("interactions").style.visibility = "hidden";  
break;
default:
                character = 'Invalid input';
                document.getElementById("results").innerHTML = character; 
               document.getElementById("interactions").style.visibility = "hidden";  
}

})
             
          
};
       var Adrian_holderson = function() {

         // document.getElementById("interactions").style.visibility = "visible"; 
		let character = "Adrian Holderson: I'm busy right now. Go away.";
          document.getElementById("results").innerHTML = character; 
      
 
};
       var Joel_Orion = function() {

          document.getElementById("interactions").style.visibility = "visible"; 
		let character = "Joel Orion: Hello laddy, \n how are you today? \n 1) What can you tell me about Davenrun? \n 2) Where are you from? \n 3) Exit";
          document.getElementById("results").innerHTML = character; 
      
 const Submit_character = document.getElementById("interactionSubmit");
      Submit_character.addEventListener('click', function(){
             let character = document.getElementById("interaction").value;
             console.log('Character: ',character);
 switch (character) {

  case '1':
           character = 'Joel Orion: What can I not tell you about Davenrun? \n This town is the heart and blood of taledone. \n This is the town where lost souls \n looking for adventure go to die. The greed from the casino makes the Jarl and \n the town leaders rich and leaves the rest of us to die. \n You are unbearably niave if you think this is an \n Island of oppritnity and adventure. \n The casino owns half the wealth in the town and \n they use it on booze while the rest of us are left to starve. \n The lucky ones who work stores and Davenrun Inn barley have enough to feed thier famlies, the arena is dangerous \n and kills people everyday and they take creatures from \n the island to get rich. This town is greedy. \n It’s the arse of the Irish sea. I wish you luck if god can give it to you.  ';
           document.getElementById("results").innerHTML = character; 
          
                     document.getElementById("interactions").style.visibility = "hidden"; 
          
   break;
  case '2':
     character = 'Joel Orion: I am from Scotland far away. \n At least the people in the north are hornable. \n I owned a store in the far away land for many years. \n It wasn’t anything like Boldsmans Areana or the Casino, but it put food on the table \n Unfourtanly, times got hard and I sold the store. \n My wife left me and took my daughter and son with her. \n With nothing left, I came to Taladone and roamed here \n for several years, fighting great monsters, \n but time takes its toll on an adventure. \n I stopped adventuring 10 years ago. \n My days are now limited and I retire here till I lay on my death bed. ';
     document.getElementById("results").innerHTML = character; 
      document.getElementById("interactions").style.visibility = "hidden"; 
   break;
  case '3':
          character = 'Joel Orion: Well alright then!';
          document.getElementById("results").innerHTML = character; 
          document.getElementById("interactions").style.visibility = "hidden";  
break;
default:
                character = 'Invalid input';
                document.getElementById("results").innerHTML = character; 
               document.getElementById("interactions").style.visibility = "hidden";  
}

})
             
          
};
       var Nigel_Williams = function() {

          document.getElementById("interactions").style.visibility = "visible"; 
		let character = "Nigel Williams: Oh dear. That is unfouratute. I seemed to have misplaced my book. It’s a book I need to my experments. Is it all possible for you to get it for me? \n It's a spell book in a cave not to far outside of town. Just a short walk! There are also... some... creatures... so be warned traveler \n Y/N";
          document.getElementById("results").innerHTML = character; 
      
 const Submit_character = document.getElementById("interactionSubmit");
      Submit_character.addEventListener('click', function(){
             let character = document.getElementById("interaction").value;
             console.log('Character: ',character);
 switch (character) {

  case 'YES':
  case 'Y':
  case 'Yes':
  case 'yes':
           character = 'To be continuied...';
           document.getElementById("results").innerHTML = character; 
          
                     document.getElementById("interactions").style.visibility = "hidden"; 
          
   break;
 case 'NO':
  case 'N':
  case 'No':
  case 'no':
      character = 'Nigel Williams: I am here if you change your mind...';
     document.getElementById("results").innerHTML = ''; 
      document.getElementById("interactions").style.visibility = "hidden"; 
   break;
  case '3':
         character = 'Nigel Williams: Well alright then!';
          document.getElementById("results").innerHTML = character; 
          document.getElementById("interactions").style.visibility = "hidden";  
break;
default:
                character = 'Invalid input';
                document.getElementById("results").innerHTML = character; 
               document.getElementById("interactions").style.visibility = "hidden";  
}

})
             
          
};
    
   
    //returned public functions
    return {
      Character_prompts: function() {
console.log('Test');
 let character = document.getElementById("character").value;
             console.log('Character: ',character);
 switch (character) {

  case "Steve_Helderhan":
      console.log('SUCESS!!!!!');
              steveHelderhan();  
   break;
  case "unknown_person":
    console.log('VICTORY!!!!!');
    unknown_person();
   break;
    case "Adrian_holderson":
    console.log('SWAGGGG!!!!!');
    Adrian_holderson();
   break;
    case "Joel_Orion":
    console.log('BOO YEAH!!!!!');
    Joel_Orion();
   break;
    case "Nigel_Williams":
    console.log('OH YEAH!!!!!');
    Nigel_Williams();
   break;
  
default:
    character = 'Invalid input';
               
     
        }
      },
        
Minimap: function (){
          let arr = [[1, 1,1],[1, 1,1],[1, 1,1],[1, 1,1]];
          let result = '\t Davenrun: \n O represents your current location.' + 
          ' \n ^ represents a location that is reachable.' +
          '\n X represents a location is that unreachable. \n\n';
          for (let i = 0; i < 4; i++){
                result += ' \t';
               for (let j = 0; j < 3; j++){
                  if (i === 3 & (j === 0 || j === 1)){
                       arr[i][j] = 'X';
                       result +=  arr[i][j] + '\t';
                  }  
                   else if (i === 0 & j === 1){
                       arr[i][j] = 'O';
                         result +=  arr[i][j] + '\t';
                  }  else {
                        arr[i][j] = '^';
                          result += '' + arr[i][j] + '\t';
                  }  
                 
               }
              result += '\n';
          }
      
     
      
        document.getElementById("minimap").innerHTML = result;                  
    },
      getDOMstrings: function() {
            return DOMstrings;
        }
    };
     })();

     var controller = (function(GameCtrl, UICtrl) {
            var setupEventListeners = function() {
      
        const go_inside = document.getElementById("go_inside");
         const go_south = document.getElementById("go_south");
          const go_west = document.getElementById("go_west");
           const go_east = document.getElementById("go_east");
             // var player = GameCtrl.player_stats();
       const Submit_character = document.getElementById("Submit_character");
      //document.querySelector(DOM.Inventory_submit).addEventListener('click', ctrlAddItem);
	       const Submit_playerstats = document.getElementById("player_stats");

       const Submit_inventory = document.getElementById("Submit_inventory");
        Submit_character.addEventListener('click', function(){
    console.log("hey you clicked p"); 
     UICtrl.Character_prompts();
})
      Submit_inventory.addEventListener('click', function(){
    console.log("hey you clicked p"); 
     GameCtrl.Inventory_prompts();
})
Submit_playerstats.addEventListener('click', function(){
    console.log("hey you clicked submit"); 
     GameCtrl.getPlayerstat();
})
go_south.addEventListener('click', function(){
      alert("To be continued...."); 
   
})
go_inside.addEventListener('click', function(){
    alert("To be continued...."); 
   
})
go_west.addEventListener('click', function(){
    alert("To be continued...."); 
})
go_east.addEventListener('click', function(){
      alert("To be continued...."); 
})
    
     };
        //document.querySelector(DOM.expensesContainer).addEventListener('click', ctrlDeleteItem);
       
        //document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);   
		//document.querySelector('.button').addEventListener('click', GetResult);		
    
           return {
 init: function() {
            console.log('Application has started.');
           // UICtrl.displayMonth();
          UICtrl.Minimap();
            setupEventListeners();
        }
    };

              //Passing the controllers via atrguments.
})(Gamecontroller, UIController);

controller.init();




