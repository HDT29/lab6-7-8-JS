

function selectPrice() {
    //truy xuất tới tất cả input số lượng
    var listQuantity = document.querySelectorAll('.quantity');
    //truy xuất tới tất cả các thẻ chứa giá sản phẩm
    var listPrice = document.querySelectorAll('.price');
    // truy xuất tới tất cả các dòng có class là table-row trong bảng
    var tableRow = document.getElementsByClassName("table-row");
    //truy xuất tới tất cả các thẻ chứa giá sản phẩm
    var optPrice = document.getElementsByClassName("optPrice");

    // Nếu phần tử đầu tiên của mảng optPrice được chọn thì thực hiện code bên trong
    if (optPrice[0].selected) {
        //Lặp qua các dòng trong bảng
        for ( i = 0; i < tableRow.length; i++) {
            //Kiểm tra điều kiện xem đơn giá có lớn hơn 300 không
            if (Number(listPrice[i].innerHTML) > 300) {
                //ẩn toàn bộ các dòng có giá lớn hơn 300
                tableRow[i].style.display = "none";
            }
            //hiển thị toàn bộ dòng có giá nhỏ hơn 300
            else {
                tableRow[i].style.display = "";
            }
        }
    }
    //Nếu phần tử thứ 2 của mảng optPrice được chọn thì thực hiện code bên trong
    if (optPrice[1].selected) {
        //Lặp qua các dòng trong bảng
        for ( i = 0; i < tableRow.length; i++) {
            //Kiểm tra điều kiện xem đơn giá có nhỏ hơn 300 hay lớn hơn 600 không
            if (Number(listPrice[i].innerHTML <= 300) || Number(listPrice[i].innerHTML) > 600) {
                //ẩn toàn bộ các dòng có giá nhỏ hơn 300 và lớn hơn 600
                tableRow[i].style.display = "none";
            }
            //hiển thị toàn bộ dòng có giá từ 300 - 600
            else {
                tableRow[i].style.display = "";
            }
        }
    }
    //Nếu phần tử thứ 3 của mảng optPrice được chọn thì thực hiện code bên trong
    if (optPrice[2].selected) {
        //Lặp qua các dòng trong bảng
        for (i = 0; i < tableRow.length; i++) {
            // hiển thị tất cả các dòng
            tableRow[i].style.display = "";
        }
    }
}

//tính toán checkbox
function checkAll(source) {
    checkbox = document.getElementsByName('check');
    for (i = 0, n = checkbox.length; i < n; i++) {
        checkbox[i].checked = source.checked;
        if (source.checked == 1) {
            document.getElementById("quantity1").disabled = false;
            document.getElementById("quantity2").disabled = false;
            document.getElementById("quantity3").disabled = false;
            document.getElementById("quantity4").disabled = false;
            document.getElementById("quantity5").disabled = false;
            document.getElementById("quantity6").disabled = false;
            document.getElementById("quantity7").disabled = false;
        } else {
            document.getElementById("quantity1").disabled = true;
            document.getElementById("quantity2").disabled = true;
            document.getElementById("quantity3").disabled = true;
            document.getElementById("quantity4").disabled = true;
            document.getElementById("quantity5").disabled = true;
            document.getElementById("quantity6").disabled = true;
            document.getElementById("quantity7").disabled = true;
        }


    }

}


function clickcheckbox() {
    var click = document.getElementsByName("check");
    if (click[0].checked) {
        document.getElementById("quantity1").disabled = false;
    } else {
        document.getElementById("quantity1").disabled = true;
    }
    if (click[1].checked) {
        document.getElementById("quantity2").disabled = false;
    } else {
        document.getElementById("quantity2").disabled = true;
    }
    if (click[2].checked) {
        document.getElementById("quantity3").disabled = false;
    } else {
        document.getElementById("quantity3").disabled = true;
    }
    if (click[3].checked) {
        document.getElementById("quantity4").disabled = false;
    } else {
        document.getElementById("quantity4").disabled = true;
    }
    if (click[4].checked) {
        document.getElementById("quantity5").disabled = false;
    } else {
        document.getElementById("quantity5").disabled = true;
    }
    if (click[5].checked) {
        document.getElementById("quantity6").disabled = false;
    } else {
        document.getElementById("quantity6").disabled = true;
    }
    if (click[6].checked) {
        document.getElementById("quantity7").disabled = false;
    } else {
        document.getElementById("quantity7").disabled = true;
    }


}

function show_result() {

    var Nokia = Number(document.getElementById("quantity1").value * 100);
    document.getElementById("toltal").innerHTML = Nokia;
    var SamSung = Number(document.getElementById("quantity2").value * 200);
    document.getElementById("toltal1").innerHTML = SamSung;
    var Iphone = Number(document.getElementById("quantity3").value * 300);
    document.getElementById("toltal2").innerHTML = Iphone;
    var Htc = Number(document.getElementById("quantity4").value * 400);
    document.getElementById("toltal3").innerHTML = Htc;
    var Sony = Number(document.getElementById("quantity5").value * 500);
    document.getElementById("toltal4").innerHTML = Sony;
    var Vsmart = Number(document.getElementById("quantity6").value * 600);
    document.getElementById("toltal5").innerHTML = Vsmart;
    var Xiaomi = Number(document.getElementById("quantity7").value * 700);
    document.getElementById("toltal6").innerHTML = Xiaomi;
    var Tong = Nokia + SamSung + Iphone + Htc + Sony + Vsmart + Xiaomi;
    document.getElementById("total-money").innerHTML = Tong;
}

