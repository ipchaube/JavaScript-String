/**
 * Created by ichaube on 10/17/2016.
 */

// String Constructor
function stringconstructor(){
    "use strict";
    var str = new String("This is my test string");
    return "String="+str+", Constructor="+ str.constructor;
}

// String Lenght
function stringLength(){
    "use strict";
    var str = new String("This is my test string");
    return "String Length="+str.length;
}

// String charAt
function stringcharAt(){
    "use strict";
    var str = new String("This is my test string");
    return "String Char at index 1 ="+str.charAt(1);
}

// String charAt
function stringcharCodeAt(){
    "use strict";
    var str = new String("This is my test string");
    var ressult= "String Char ASCII code, at index 0 ="+str.charCodeAt(0);
        ressult += "at index 1 ="+str.charCodeAt(1);
    return ressult;
}

// String concat
function stringconcat(){
    "use strict";
    var str1 = "Indu";
    var str2 = " P Chaube";
    var str3 = " , India";
    return "concat of str1, str2, str3="+str1.concat(str2, str3);
}


/*
    This method will be use to print the result in the element ID
 */
function printResult(elmID, result){
    "use strict";
    document.getElementById(elmID).innerHTML=result;
}
