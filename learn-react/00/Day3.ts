// 1. 리액트의 스타일링 방법

// 전통적인 스타일링 방법
// - 인라인 스타일
// - 외부 스타일(글로벌 스타일)

// CSS Module (*.module.css)
// - ClassNames 패키지
//  'classnames', 'classnames/bind'

// Tailwind CSS
// - 오늘날 가장 떠오르는 CSS 라이브러리
// - 유틸리티 퍼스트(Utility-First) 방식으로 설계된 CSS 프레임워크
// - BootStrap처럼 미리 만들어진 컴포넌트를 제공하는 대신, 테일윈드는 아주 작은 유틸리티 클래스를 제공합니다.
// - 이전까지는 BootStrap CSS 라이브러리를 사용했었다.
// - 유틸리티 퍼스트란?
//  아주 작고 단일한 역할만 하는 CSS 클래스를 조합해서 UI로 만드는 방식.

// .btn-primary{ background-color:blue; color: white; padding: 10px;};
// <button class = "btn-primary"></button>
// -> <botton class = "bg-blue-500 text-white p-2.5"></botton>

// CSS-IN-JS
// - CSSfmf 자바스크립트 코드 안에서 작성하고 사용하는 방식
// - 컴포넌트 js 파일에 바로 CSS 코드를 작성할 수 있음. 해당 컴포넌트에만 적용.
// - 유명한 CSS-IN-JS
//  styled-components(개발 종료), emotion, Vanila-extract

// (1) styled-components 개발 공식 종료 -> 유지보수 모드

// (2) emotion

// CSS-IN-JS의 본질적인 문제
// : CSS를 자바스크립트가 생성한다 -> 자바스크립트 런타임에 CSS가 생성
// -> CSS-IN-JS 스타일링을 많이하면 할 수록, 자바스크립트가 런타임에 처리해야하는 코드 양이 많아짐. -> 퍼포먼스 떨어짐

// (3) Vanila-extract ()
// 제로-런-타임 (zero-run-time), 빌드 과정에서 CSS 생성.
// 빌드 과정에서 css.ts파일에 작성된 CSS코드가 CSS파일로 만들어짐.

// 폰트 라이센스를 피하기 위해서는... 구글 폰트
// @import보다 link 방법이 성능 측면에서 좋지만 차이는 미비하다.
// (1) index.html에 link문 복붙.
// (2) fonts.css 생성하여 해당 폰트 CSS 복붙
// (3) import 연결하고 사용할 태그 클래스 이름 바꾸기

// image리소스는 어디에 저장해야 할까?
// - public에 넣으면 가공되지 않음.
// - asset은 가공됨.
// 즉, 빌드 프로세스에 의해 처리되지 않는 이미지는 public, 컴포넌트 내 이미지는 asset
// 파피콘같은 이미지를 제외하고 asset에 저장하는 것이 좋음.

//연습문제: 1번, 1번, 4번, 2번

// 1. 정답
// 2. 직접 사용 가능
// 3. src 폴더의 파일은 웹 브라우저에서 직접 접근할 수 없다.
// 4. src 폴더 파일은 번들링 되기 때문에 정적파일로 유지되지 못함

// 1. 절대경로로 접근

// 1. 절대 경로를 사용하지 않아도 가능
// 2. 아니어도 됨
// 3. 엉뚱
// 4. 정답

// 1. public 폴더만 절대경로
// 2. 정답
// 3.
// 4. 뭐든 background로 적용 가능

// 컴포넌트에 데이터를 전달하는 방법
// 컴포넌트에 데이터를 전달할 때는 properties(속성)을 사용합니다.
// 컴포넌트의 props
