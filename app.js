let petChoice = prompt("Choose your pet : Dog, Cat, Rabbit?");

class Animal {
    constructor() {
        this._type = petChoice;
        this.bored = true;
        this.hunger = 100;
        this.thirst = 100;
        this.boredCount = 0;
    }
    play(){
        this.bored = false;
        this.boredCount--;
        this.thirst += 50;
        this.hunger += 50
        alert(`${this._type} is happy now, but it is thristy${virtualPet.thirst} , and hungry ${virtualPet.hunger}`)
        if (virtualPet.thirst >= 200) {
            alert(`Your ${virtualPet._type} is dead!`)
        } else if (virtualPet.thirst > 100) {
            alert(`Your ${virtualPet._type} is thirsty!`)
        }
        
        if (virtualPet.hunger >= 200) {
            alert(`Your is dead!`)
        } else if (virtualPet.hunger > 100) {
            alert(`your pet is hungry!`)
        
        }
        
    }
    feed(){
        this.hunger -= 70;
        this.bored = true;
        this.boredCount += 1;
        if (this.hunger > 100) {
            alert(`Your is hungry. Hunger level is ${this.hunger}`)
        } else if (this.hunger < 70) {
            alert(`Your pet is  full! Hunger level is ${this.hunger}`)
        }
        if (this.bored == true) {
            alert(`Your pet is bored!`)
        }
    }
    drink() {
        this.bored = true;
        this.thirst -= 80;
        this.boredCount += 1;
        alert(`Your pet thirst level is ${this.thirst}!`)
        if (this.thirst < 80) {
            alert(`Your pet is hydrated`)
        }
        if (this.bored == true) {
            alert(`Your is bored!`)
        }
    }
    
    
}
const virtualPet = new Animal()

function loop() {
    setTimeout(function () {
      if (virtualPet.boredCount  + 4 >= 0) {
    virtualPet.happyLevel -= 4;
        if ((virtualPet.hunger > 50 ||virtualPet.thirsty >= 60 ||virtualPet.boredCount >= 50) && virtualPet.boredCount + 10 >= 0) {
        virtualPet.happyLevel -= 10;
        } else if ((virtualPet.hungery >= 50 ||virtualPet.thirsty >= 50 ) && virtualPet.boredCount + 10 <= 0) {
        virtualPet.boredCount = 0;
        }loop()} 10000;
    }
    )}
