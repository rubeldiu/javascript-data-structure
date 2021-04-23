//to find out element by key

// const dictionary ={};
// dictionary[name]="Kotkoti begum";

class Dictionary {
    constructor(){
        this.dictionary={}
    }
    add(key,value){
        this.dictionary[key]=value;
    }
    get(key){
        return this.dictionary[key];
    }
}

const phoneBook = new Dictionary();
phoneBook.add('Sokal','0123456789')
phoneBook.add('Bikal','0567891234')
phoneBook.add('Sondha','0777891234')
console.log(phoneBook.dictionary);

const sokal =phoneBook.get('Sokal')
console.log(sokal);