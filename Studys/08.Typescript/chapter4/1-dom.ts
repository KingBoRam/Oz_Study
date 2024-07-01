// js에서 제공되는 모든 dom api 그대로 사용 가능 = 슈퍼셋이니까
// ts에서 타입 정의 파일 'lib.dom.d.ts'을 제공해서 이 파일을 기반으로 컴파일러가 정적타입체킹을하고 자동완성등을 제공한다.
// 가장 기본적인 인터페이스는 HTMLElement다. div나 a태그 등을 다루는 여러 속성(스타일, 이벤트)과 메서드가 해당 인터페이스에 포함되어있다.

// <a id="myLink" href="https://google.com">google</a>

const link1 = document.getElementById("myLink");
const link2 = document.querySelector<HTMLAnchorElement>("#myLink");

if (link1 instanceof HTMLAnchorElement) {
  link1.href = "";
}

if (link2) {
  link2.href = "";
}

const a = document.createElement("a");
a.href;

const anchor = document.querySelector("a");
// anchor.href;

const anchors = document.querySelectorAll("a");
anchors.forEach((anchor) => {});

// event
// <div id="myDiv"></div>

const myDiv = document.getElementById("myDiv");
myDiv?.addEventListener("click", (e: Event) => {
  // 로직 구현
  if (e instanceof MouseEvent) {
    const x = e.clientX;
    const y = e.clientY;
  }

  if (e instanceof KeyboardEvent) {
    console.log(e.code);
  }
});
