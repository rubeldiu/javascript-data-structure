//FIFO
class Queue {
  constructor(){
        this.queue=[]
  }
  enqueue(item){
      this.queue.push(item)
  }
  dequeue(){
      if(this.queue.length){
          return this.queue.shift();
      }
  }

}

const guest = new Queue();
guest.enqueue('Sokal')
guest.enqueue('Bikal')
guest.enqueue('Sondha')
guest.enqueue('Ratri')

console.log(guest.queue);
guest.dequeue();
console.log(guest.queue);

