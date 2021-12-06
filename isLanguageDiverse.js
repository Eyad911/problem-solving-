
let list1 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
    { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
  ];
  
  let list2 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
    { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
  ];
  
  let list3 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
    { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
  ];
  
  let list4 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
    { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
  ];
  

function isLanguageDiverse(list) {
 
    let python = []
    let ruby = []
    let javascript = []
    
    for (i=0; i<list.length; i++) {
     if (list[i].language == 'Python') {
       python.push(list[i]);
       }
     else if (list[i].language == 'Ruby') {
       ruby.push(list[i]);
       }
      if (list[i].language == 'JavaScript') {
       javascript.push(list[i]);
       } 
    }
   console.log(python);
   console.log(ruby);
   console.log(javascript);
   
   let nPython = python.length
   let nRuby = ruby.length
   let nJavaScript = javascript.length
   
   console.log(nPython);
   console.log(nRuby);
   console.log(nJavaScript);
    
   let answer = 0
   
   if (nPython > 2*nRuby || nPython > 2*nJavaScript) {
     console.log(false);
     answer = false;}
   else if (nRuby > 2*nPython || nRuby > 2*nJavaScript) {
     console.log(false);
     answer = false;}
   else if (nJavaScript > 2*nPython || nJavaScript > 2*nRuby) {
     console.log(false);
     answer = false;}
   else {console.log(true);
   answer = true;}
   
   return answer;
  
    
   }

   


   isLanguageDiverse(list1)