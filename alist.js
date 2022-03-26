'use strict';

var alist =['2020.09.19_SUWON', '2020.09.22_WOLMIDO', '2020.09.23_DOKSAN', '2020.09.30_SUWON'];
var i =0;
while(i<alist.length){
  document.write(`<li><a href = ${alist[i]}.html>${alist[i]}</a></li>`);
  i = i + 1;
}
