'use strict';
  var list2020 =['2020.09.19_SUWON', '2020.09.22_WOLMIDO', '2020.09.23_DOKSAN', '2020.09.30_SUWON'];
  function repeatFinish(listName){
    let i =0;
    while(i<listName.length){
      document.write(`<a href = '${listName[i]}.html'><img src='2020.09/${listName[i]}.jpg'></a>`);
      i= i+1;
    }
  };

  repeatFinish(list2020);
