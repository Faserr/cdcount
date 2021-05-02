//alert("测试");



/*
  var text = document.getElementsByClassName("edit")[0].value;
  alert(text);
*/

function count_onClick(){
  var text = $(".edit").val();
  var arrText = text.split("\n");

  var sum = 0
  arrText.forEach(function(v){
    //var mNum = v.replace("元", '');
    var num = parseFloat(v)
    if(num){
      sum = sum + num;
     // console.log("oks " + num);
    }else{
     // console.log("not " + num);
    }
  });

  alert("共计&#10;" + sum + " 元");

}

function clear_onClick(){
  $(".edit").val("");
}
