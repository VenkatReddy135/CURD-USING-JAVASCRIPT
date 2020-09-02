
var arr=[];
function salary(){  
      if(document.getElementById("num").value=="default"){
          delete arr[0]
      }else{
        var y=document.getElementById("num").value;
           arr.push(y)
      }
      console.log(arr);
      document.getElementById("num").value=null;
      var output=''
      for(i=0;i<arr.length;i++){
      output=output+`<li>${arr[i]}</li><br>`
        }
        document.getElementById("num3").innerHTML=output;    
}
salary()
console.log(arr)

