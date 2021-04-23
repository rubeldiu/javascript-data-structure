// const friends =[]
// friends.push(45)
// friends.push(85)
// friends.push(123)
// console.log(friends);
// const getOne =friends.pop();
// console.log(friends);
//Stack follow LIFO
class Stack{
    constructor(){
        this.stack=[]
    }
    add(item){
        this.stack.push(item)
    }
    remove(item){
        if(this.stack.length){
            return this.stack.pop();
        }
    }
}

const guest = new Stack();
guest.add('Sokal')
guest.add('Bikal')
guest.add('Sondha')
guest.add('Ratri')

console.log(guest.stack);

const speaker =guest.remove();
console.log(speaker);
console.log(guest.stack);
