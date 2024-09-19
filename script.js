//step3 - 세번째 인수로 인터벌값이 있으면 각 반복요소에 누적해서 delay값 적용
//만약 세번째 인수 없으면 그냥 0으로 초기화
function splitText(elem, tag = "span", interval = 0) {
  if (!elem) {
    console.error("첫 번째 인수값은 텍스를 가져올 DOM선택자를 넣어야 됩니다.");
    //필수값인 elem요소가 전달되지 않으면 무조건 return으로 함수를 강제 중지해서
    //불필요한 연산 처리 방지
    return;
  }
  console.log("elem이 없을때 불필요한 연산 시작");
  const el = document.querySelector(elem);
  const el_text = el.innerText;
  el.style.fontSize = "0px";
  let resultText = "";
  let counter = 0;

  for (let letter of el_text) {
    resultText += `<${tag} style='display:inline-block; transition-delay:${
      interval * counter++
    }s'>${letter}</${tag}>`;
  }

  el.innerHTML = resultText;
}
splitText("h1");
