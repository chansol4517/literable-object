//step2 - 반복적인 스타일 정보를 css가 아닌 js에서 동적 적용
function splitText(elem, tag) {
  const el = document.querySelector(elem);
  const el_text = el.innerText;
  //아래와 같이 DOM.style.fontSize='0px'은
  //실제 html태그상에 <h1 style='font-size:0px'></h1>
  //와 같이 인라인 스타일 형태로 적용
  el.style.fontSize = "0px";
  let resultText = "";
  for (let letter of el_text) {
    // 동적으로 생성되는 문자열 자체적으로 style=''형식으로 스타일 값 연결가능
    resultText += `<${tag} style='display:inline-block'>${letter}</${tag}>`;
  }

  el.innerHTML = resultText;
}

splitText("h1", "span");
