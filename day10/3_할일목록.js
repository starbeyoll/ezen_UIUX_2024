
let 입력데이터배열 = ['자바스크립트 공부하기', '다이어트'];




function 등록함수(){
    let 입력데이터 = document.querySelector('#content').value;

    입력데이터배열.push(입력데이터);

    console.log( 입력데이터배열 );

    let html = ``;
    for( let 인덱스 =0 ; 인덱스 < 입력데이터배열.length ; 인덱스++){
        html += `<div class="todo">
                    <div class="content"> ${입력데이터배열[인덱스]} </div>
                    <div class="btnBox">
                        <button type="button"> 상태변경 </button>
                        <button type="button" onclick="삭제함수(${인덱스})"> 삭제 </button>
                    </div>
                </div>`
    }

    document.querySelector('#todoBottom').innerHTML = html;
    document.querySelector('#content').value=''
}

function 삭제함수(인덱스){

    입력데이터배열.splice(인덱스,1);
}