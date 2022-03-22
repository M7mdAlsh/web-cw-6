// هنا سوف تنشئ دالة calculate
function calculate() {
<<<<<<< HEAD
    let weight = document.getElementById(weight).value;
    let height = document.getElementById(height).value;
  

    let BMI = weight / (height*height);


    let status = " ";
    if (BMI < 18.5) 
    {
          status = "تعاني من نقص في الوزن";
      
    }else if (BMI < 25) {
          status = "وزنك صحي";
    }else if (BMI < 30){
         status = 'انت تعاني من زياده في الوزن'
    }else {
         status = 'تعاني من السمنه المفرطه'
    }

  BMI = BMI.toFixed(0);
    document.getElementById("result").innerHTML = BMI;
    document.getElementsByClassName("comment")[0].innerHTML = status;
  }
  
=======
  let weight = document.getElementById(weight).value;
  let height = document.getElementById(height).value;

  let BMI = height / (height * height);
  let status = " ";

  if (BMI < 18.5) {
    status = "تعاني من نقص في الوزن";
  } else if (BMI < 25) {
    status = "وزنك صحي";
  }

  document.getElementById("result").innerHTML = BMI;
  document.getElementsByClassName("comment")[0].innerHTML = status;
}
>>>>>>> 038dcf4932814b22fe0c2ede87184de7374fb4a2
