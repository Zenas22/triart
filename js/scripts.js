function triart(){
var tri = [];
tri.push(parseFloat(document.getElementById('l1').value));
  if (isNan(tri[0]) === true){
    alert("Please enter a number in l1");
  }else{
  tri.push(parseFloat(document.getElementById('l2').value));
    if(isNan(tri[1]) === true){
      alert("Please enter a number in l2");
    }else{
    tri.push(parseFloat(document.getElementById('l3').value));
      if(isNan(tri[2]) === true){
        alert("Please enter a number in l3");
      }else{
        if((tri[0]+tri[1])<=tri[2] || (tri[1]+tri[2])<=tri[0] || (tri[2]+tri[0])<=tri[1]){
          alert("Triangle not confirmed");
        }
        else if (tri[0]===tri[1] && tri[1]===tri[2] && tri[2]===tri[0]){
          alert("Equilateral triangle confirmed");
        }
        else if (tri[0]===tri[1] || tri[1]===tri[2] || tri[2]===tri[0]){
          alert("Isosceles triangle confirmed");
        }
        else if ((tri[0]+tri[1])>=tri[2] || (tri[1]+tri[2])>=tri[0] || (tri[2]+tri[0])>=tri[1]){
          alert("Scalene triangle confirmed");
        }
        else{
          alert("Please try again");
        }
        }
      }
    }
  }
