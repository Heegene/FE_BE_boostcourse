
function printName(firstname) {
    var myname = "jisu";
    return "name is" + " " +  firstname;
}
// 선언되어있지 않고 할당되지 않은 변수는 undefined라고 나옴
// undefined도 타입의 하나 
console.log(printName("jisu"));
// name is 지수 출력

console.log(printName("jisu", "crong"));
// 똑같이 name is 지수라고 뜸 틀렸는데도 에러발생 안시킴



function test() {  
    
    console.log (printName());
        var printName = function() {
            return 'anonymous';
        }

}


function printName(firstname) {
    var myname = "jisu";
    return myname + " ," + firstname;

}

function run(firstname) {
    var firstname = firstname || "youn";
    var result = printName(firstname);
    console.log(result);
}


run(); // 이렇게하면 지수 윤
run('Kim'); // 이렇게하면 지수 킴 


// 실행간격을 조정하는 setTimeout
setTimeout(function() {
    console.log("2초 뒤에 실행돼라!!")
},2000);
