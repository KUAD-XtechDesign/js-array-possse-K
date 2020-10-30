$(function(){

  let students = ["田中","山田","松本","山本","沢田"]

  $("#button00").on("click",function(){
    console.log(students)
  })

  $("#button01").on("click",function(){
    $("#content").text("最初のメンバーは" + students[0] + "/人数は" + students.length);
  })

  $("#button02").on("click",function(){
    $("#content").text(students[2]);
  })


  $("#button03").on("click",function(){
    //$("#content").text(students[4]);
    $("#content").text(students[students.length-1]);
  })
  
  $("#button04").on("click",function(){
    console.log(students)
    if(students[students.length-1] !="山下"){//6の場合
      students[students.length] = "山下"
    }
  })

  $("#button05").on("click",function(){
    students.reverse()
  })

})