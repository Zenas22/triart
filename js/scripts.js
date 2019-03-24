var tri = [];
function triart() {
tri.push(parseInt(document.getElementById('l1').value));
  if ( isNaN(tri[0]) ) {
    alert("Please enter a number in l1");
  }
  else {
  tri.push(parseInt(document.getElementById('l2').value));
    if ( isNaN(tri[1]) ) {
      alert("Please enter a number in l2");
    }
    else {
    tri.push(parseInt(document.getElementById('l3').value));
      if ( isNaN(tri[2]) ) {
        alert("Please enter a number in l3");
      }
      else {
        if ( (tri[0]+tri[1]) <= tri[2] || (tri[1]+tri[2]) <= tri[0] || (tri[2]+tri[0]) <= tri[1] ) {
          alert("Triangle not confirmed");
        }
        else if ( tri[0] === tri[1] && tri[1] === tri[2] && tri[2] === tri[0] ) {
          /* alert("Equilateral triangle confirmed"); */
          document.getElementById('niambie').innerHTML = "<h2>This is an Equilateral triangle</h2> <p>This triangle has same lengths for all sides of the triangle. The sides intersect at angle of 60 degrees to give a total of 180 degrees</p>";
        }
        else if ( tri[0] === tri[1] || tri[1] === tri[2] || tri[2] === tri[0] ) {
          /* alert("Isosceles triangle confirmed"); */
          document.getElementById('niambie').innerHTML = "<h2>This is an Isosceles triangle</h2> <p>This triangle has two sides with the same values for length but one side with a different length</p>";
        }
        else if ( (tri[0]+tri[1]) >= tri[2] || (tri[1]+tri[2]) >= tri[0] || (tri[2]+tri[0]) >= tri[1]){
          /* alert("Scalene triangle confirmed"); */
          document.getElementById('niambie').innerHTML = "<h2>This is a Scalene triangle</h2> <p>The sides of this triangle all have different lengths and the may be further divided into Right angled triangles and obtuse triangles among others</p>";
        }
        else {
          /* alert("Please try again"); */
          document.getElementById('niambie').innerHTML = "<h2>Please try again</h2>";
        }
        }
      }
    }
  };
function triagain() {
  document.getElementById('niambie').innerHTML = "";
  tri = [];
};
