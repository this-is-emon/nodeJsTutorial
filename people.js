//IIFE stands for Immediately Invoked Function Expression. It is a design pattern in JavaScript 
//where a function is defined and executed immediately after being created. 
// 'IIFE' function structure:
/*
(function() {
  // This code will be executed immediately
  var localVar = "Hello, IIFE!";
  console.log(localVar);
})();

*/

//It is said that all codes in  is wrapped by a “Module Wrapper Function(IIFE function)” in nod.Js
//But this IIFE function remains invisible in the code like below:

//(function (exports, require, module, __filename, __dirname) {
    
    const name = ['Sakib','Tamim','Himu','Misir Ali']
    const a = 5;
    function test() {
        console.log('test');
    }

    //module.exports= {name, a , test}
    //return module.exports;

//})();
