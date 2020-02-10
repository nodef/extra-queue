class Queue extends Array {
  constructor() {
    super();
    this.front = 0;
    this.back = 0;
    this.fixed = false;
    this.consumer = null;
  }

  push(val) {
    console.log('@push');
    this[this.front++] = val;
  }

  pop() {
    return this[this.back++];
  }

  get size() {
    return this.front - this.back;
  }
}
module.exports = Queue;



function main() {
  var q = new Queue();
  q.push(1);
  q.push(2);
  console.log(q.size);
}
main();
