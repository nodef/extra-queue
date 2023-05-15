test("example", () => {
  var x = new Queue();
  x.enqueue("one");
  x.enqueue("two");
  expect(x.size()).to.equal(2);
  expect(x.isEmpty()).to.equal(false);
  expect(x.dequeue()).to.equal("one");
  expect(x.size()).to.equal(1);
  expect(x.dequeue()).to.equal("two");
  expect(x.size()).to.equal(0);
  expect(x.isEmpty()).to.equal(true);
});
// - https://github.com/cschen1205/js-string-compression/blob/master/test/queue-spec.js
