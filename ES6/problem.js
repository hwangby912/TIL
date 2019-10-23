var arr = [{ x1: 1, x2: 1 }, { x1: 2, x2: 2 }, { x1: 3, x2: 3 }];
var arr2 = null;

arr2 = arr.map(e => {
  return {
    x1: e.x1,
    x2: e.x2,
    result: e.x1 * e.x1
  };
});

console.log(arr2);
