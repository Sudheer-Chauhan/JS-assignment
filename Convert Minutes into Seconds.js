
// Write a function that takes an integer minutes and converts it to seconds.


 function time_convert(num)
  { 
   let hours = Math.floor(num / 60);  
   let minutes = num % 60;
   return hours + ":" + minutes;         
 }

 console.log(time_convert(71));
 console.log(time_convert(450));
 console.log(time_convert(1441));


