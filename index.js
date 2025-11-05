// 1. DOM 선택
const chatLog = document.getElementById('chat-log'),
      userInput = document.getElementById('user-input'),
      sendButton = document.getElementById('send-button'),
      buttonIcon = document.getElementById('button-icon'),
      info = document.querySelector('.info');

// 2. 버튼 클릭 이벤트
sendButton.addEventListener('click', sendMessage);

// 엔터 키로도 전송 가능하게
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// 3. 메시지 전송 함수
function sendMessage() {
    const message = userInput.value.trim();

    if (message === '') return;

    appendMessage('user', message);
    userInput.value = ''; // 입력창 비우기

    // 로딩 상태 아이콘 전환
    buttonIcon.classList.remove('fa-paper-plane');
    buttonIcon.classList.add('fa-spinner', 'fa-pulse');

    // 1초 후 봇 응답 (추후 API 연동 가능)
    setTimeout(() => {
        appendMessage('bot', 'Made By dongkyun');
        buttonIcon.classList.add('fa-paper-plane');
        buttonIcon.classList.remove('fa-spinner', 'fa-pulse');
    }, 1000);
}

// 4. 메시지 표시 함수
function appendMessage(sender, message) {
    info.style.display = 'none'; // info 숨기기

    const chatElement = document.createElement('div');
    const messageElement = document.createElement('div');
    const iconElement = document.createElement('div');
    const icon = document.createElement('i');

    chatElement.classList.add('chat-box');
    iconElement.classList.add('icon');
    messageElement.classList.add(sender);
    messageElement.innerText = message;

    if (sender === 'user') {
        icon.classList.add('fa-regular', 'fa-user');
        iconElement.setAttribute('id', 'user-icon');
    } else {
        icon.classList.add('fa-solid', 'fa-robot');
        iconElement.setAttribute('id', 'bot-icon');
    }

    iconElement.appendChild(icon);
    chatElement.appendChild(iconElement);
    chatElement.appendChild(messageElement);
    chatLog.appendChild(chatElement);

    // 스크롤 맨 아래로 자동 이동
    chatLog.scrollTop = chatLog.scrollHeight;
}
