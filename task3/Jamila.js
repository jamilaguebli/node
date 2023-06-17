var fs=require('fs')

  

fs.readFile('welcome.txt', 'utf8', function(err, data){
      
    
    console.log(data);
});
  
console.log('readFile called');