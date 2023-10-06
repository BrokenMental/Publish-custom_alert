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