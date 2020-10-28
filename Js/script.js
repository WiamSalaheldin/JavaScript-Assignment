function userForm() {
    var myForm = document.mainform;
    //  console.log(myForm);

    var firstname = myForm.firstName.value;
    var lastname = myForm.lastName.value;
    var email = myForm.email.value;
    var address = myForm.address.value;
    var city = myForm.city.value;
    var province = myForm.province.value;
    var membership = myForm.membership.value;

    document.getElementById("fullName").innerHTML = firstname + " " + lastname;
    document.getElementById("email").innerHTML = email;
    document.getElementById("address-in").innerHTML = address + " " + city + " " + province;

    if (myForm.membership.value == "p") {

        document.getElementById("membershiplabel").innerHTML = "Premium Membership";

    } else if (myForm.membership.value == "s") {
        document.getElementById("membershiplabel").innerHTML = "Standard Membership";
    } else {
        document.getElementById("membershiplabel").innerHTML = "Basic membership";
    }

}

function myExcelFuns() {
    var numberStr = document.getElementById("numbers").value;
    numberStr = numberStr.trim(); // to remove all the white spaces we use (trim)
    var numberArr = numberStr.split(" "); //to split a string into an array we use (split)
    var result = 0;


    if (document.getElementById("sum").checked) {


        for (var i = 0; i < numberArr.length; i++)
            if (numberArr[i] != "") {
                result = result + parseFloat(numberArr[i]);

            }

    } else if (document.getElementById("avg").checked) {
        var count = 0;
        for (var i = 0; i < numberArr.length; i++)
            if (numberArr[i] != "") {
                result = result + parseFloat(numberArr[i]);
                count++;
            }
        result = result / count;


    }
    else if (document.getElementById("max").checked) {
        {
            result = Math.max(...numberArr);

        }

    }
    else {
        console.log(numberArr); //    result = Math.min(...numberArr);
        var newArr = [];
        numberArr.map(function (item) {
            if (item != "")
                newArr.push(Number(item));
        });
        console.log(newArr);
        result = Math.min(...newArr);
    }
    //if (numberArr[i] !="") {


    document.getElementById("result").innerText = result;
    return false;
}

