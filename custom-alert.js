/*
* 알림 화면 출력
* 화면을 전체 덮으며 확인 버튼 클릭 시 사라짐
* 
* @param
* - msg
* 출력될 메시지, 모바일 기준 약 75자를 한 화면에서 보여주고 그 이상 넘어갈 경우 스크롤 추가
* 메시지가 없을 경우 화면 닫기
*/

const show_custom_alert = (msg) => {
    const scaCustomAlertView = document.getElementById("sca_custom_alert_view");
    const scaMsgPrint = document.getElementById("sca_msg-print");

    if (msg) {
        scaMsgPrint.innerText = msg;
        scaCustomAlertView.style.display = 'block';
    } else {
        scaMsgPrint.innerText = "";
        scaCustomAlertView.style.display = "none";
    }
}


/*
* 알림창 생성
* 페이지 시작 시 알림창을 body 태그 아래에 생성
*/
const make_custom_alert = () => {
    const backArea = document.createElement("div");
    backArea.className = "sca_back-area";
    backArea.id = 'sca_custom_alert_view';

    const msgArea = document.createElement("div");
    msgArea.className = "sca_msg-area";
    msgArea.id = "sca_msg-area";
    backArea.appendChild(msgArea);
    
    const msgPrint = document.createElement("div");
    msgPrint.className = "sca_msg-print";
    msgPrint.id = "sca_msg-print";
    msgArea.appendChild(msgPrint);

    const BtnArea = document.createElement("div");
    BtnArea.className = 'sca_btn-area';
    msgArea.appendChild(BtnArea);

    const BtnClose = document.createElement('input');
    BtnClose.className = 'btn sca_btn-close';
    BtnClose.id = 'sca_btn-close';
    BtnClose.type = 'button';
    BtnClose.value = '확인';
    BtnClose.onclick = e => {
        show_custom_alert();
    }

    BtnArea.appendChild(BtnClose);
    document.body.appendChild(backArea);
}

make_custom_alert();