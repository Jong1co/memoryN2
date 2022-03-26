'use strict';

function doSomething(){
  alert("돌아가.")
};
var year = ['2021', '2022', '2023'];
var i =0;
while(i<year.length){
  document.write("<li><a href = 'javascript:doSomething();'>"+year[i]+"</a></li>")
  i = i + 1;
};
