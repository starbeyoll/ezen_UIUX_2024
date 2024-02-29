function test1(){
   alert('함수가 실행되었습니다')
}

test1();


function test2(매개변수1, 매개변수2){
    let 더하기 = 매개변수1+매개변수2;
    alert( 더하기 );
}

function test3(){
    alert('test3함수 실행')
}

function test4(){
    return;
    alert('test4함수 실행')
}

function 추가함수(){
    
    let 메세지 = document.querySelector('input').value;

    

    document.querySelector('div').innerHTML+=메세지;


}