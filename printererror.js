function printerError(s) {
  let a = s.split("");
  let start = a.length;
  let find = s.replace(/[n,o,p,q,r,s,t,u,v,w,x,y,z]/g, "");

  let arr = find.split("");
  let end = arr.length;
  let sum = start - end;
  return `${sum}/${start}`;
}

// Test.describe("printerError",function() {
//   Test.it("Basic tests",function() {
//       var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
//       Test.assertEquals(printerError(s), "3/56")
//   })})
