

function validate() {

    var msv =document.getElementById("MSV").value;
    var input1 =document.getElementById("MSV");

    var name =document.getElementById("full-name").value;
    var input2 =document.getElementById("full-name");

    var email =document.getElementById("email").value;
    var input3 =document.getElementById("email");
    var Email =document.getElementById("email");
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


    var gt = document.getElementsByName("gioitinh");

    var st = document.getElementsByName("interest");


    var qt = document.getElementById("nationality");

    var gchu = document.getElementById("gchu");
    if (msv==""){
        document.getElementById("error1").innerHTML = "Mã sinh viên không được để trống";
        input1.style.backgroundColor ="yellow";
        return false;
    }else if(name==""){
        document.getElementById("error2").innerHTML ="Họ tên không được để trống";
        input2.style.backgroundColor ="yellow";
        return false;
    }else if (email=="") {
        document.getElementById("error3").innerHTML = "Email không được để trống";
        input3.style.backgroundColor = "yellow";
        return false;
    }else if (!filter.test(Email.value)){
        document.getElementById("error3").innerHTML = "Email phải nhập đúng định dạng";
         return false;
    }else if (gt[0].checked  == false && gt[1].checked  == false){
        document.getElementById("error4").innerHTML ="Giới tính không được để trống";
        return false;
    }else if (st[0].checked  == false && st[1].checked  == false && st[2].checked  == false && st[3].checked  == false && st[4].checked  == false ){
        document.getElementById("error5").innerHTML ="Sở thích không được để trống";
        return false;
    }else if (qt.value ===""){
        document.getElementById("error6").innerHTML ="Quốc tịch không được để trống";
        return false;
    }else if (gchu.value.length >200) {
        document.getElementById("error7").innerHTML ="Ghi chú không được vượt quá 200 ký tự";
        return false;
    }else {
        return true;
    }

}
