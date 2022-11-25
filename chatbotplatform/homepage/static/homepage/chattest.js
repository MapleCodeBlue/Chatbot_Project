const chatbox = jQuery.noConflict();

chatbox(() => {
  chatbox(".chatbox-open").click(() =>
    chatbox(".chatbox-popup, .chatbox-close").fadeIn()
  );

  chatbox(".chatbox-close").click(() =>
    chatbox(".chatbox-popup, .chatbox-close").fadeOut()
  );

  chatbox(".chatbox-maximize").click(() => {
    chatbox(".chatbox-popup, .chatbox-open, .chatbox-close").fadeOut();
    chatbox(".chatbox-panel").fadeIn();
    chatbox(".chatbox-panel").css({ display: "flex" });
  });

  chatbox(".chatbox-minimize").click(() => {
    chatbox(".chatbox-panel").fadeOut();
    chatbox(".chatbox-popup, .chatbox-open, .chatbox-close").fadeIn();
  });

  chatbox(".chatbox-panel-close").click(() => {
    chatbox(".chatbox-panel").fadeOut();
    chatbox(".chatbox-open").fadeIn();
  });
});

$(function(){

  // SEND 버튼을 누르거나
  $("#sendbtn").click(function(){
      send_message();
  });

  // ENTER key 가 눌리면
  $("#chattext").keyup(function(event){
      if(event.keyCode == 13){
          send_message();
      }
  });

});

function send_message(){
  const chattext = $("#chattext").val().trim();

  // 입력한 메세지가 없으면 리턴
  if(chattext == ""){
      $("#chattext").focus();
      return;
  }

  // 입력한 채팅 출력
  addtext = "<div style='margin:15px 0;text-align:right;'> <span style='padding:3px 10px; background-color:lightblue; border:0.5px solid; border-radius:3px;'>" + chattext + "</span></div>";
  $("#chatbox").append(addtext);    

  // API 서버에 보낼 데이터 준비
  const jsonData = {
      query: chattext,
      bottype: "webclient",
  };

  $.ajax({
      url: 'http://127.0.0.10:5000/query/TEST',
      type: "POST",
      data: JSON.stringify(jsonData),
      dataType: "JSON",  // 응답받을 데이터 타입
      contentType: "application/json; charset=utf-8",  
      crossDomain: true,
      success: function(response){
          // response.Answer 에 챗봇의 응답메세지가 담겨 있다
          $chatbox = $("#chatbox");

          // 답변 출력
          bottext = "<div style='margin:15px 20px; padding: 0px 20px; border:0.5px solid;  border-radius: 5px; text-align:left;'><span style='padding:8px 10px; border-radius:3px;'>" + response.Answer + "</span></div>";
          $chatbox.append(bottext);

          // 스크롤 조정하기
          $chatbox.animate({scrollTop: $chatbox.prop('scrollHeight')});

          // 먼저 입력했던 내용은 지우기
          $("#chattext").val("");
          $("#chattext").focus();
          $("#chattext").scrollIntoView();
      },
  });

} // end 




