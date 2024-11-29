## 📌 프로젝트 실행 방법
```bash
git clone https://github.com/dingunote/triple-homework.git
cd triple-homework
npm i
npm start
```


## 📌 사용 기술
* JavaScript
* TypeScript
* React(CRA)
* Styled-components(+Styled-reset) - 별도의 CSS 파일을 생성하지 않고, 각 컴포넌트 내부에서 스타일을 관리하고 싶었고, 현재 트리플 프론트엔드 팀이 사용 중인 기술 스택이었기 때문에 선택했습니다. 이번 과제를 계기로 처음 사용해보았는데 SCSS와 비슷하게 & 연산자를 사용해서 중첩 문법없이 사용 가능한 것이 좋았습니다.
* titicacadev/eslint-config-triple - 트리플 개발 팀의 린팅 / 포맷팅 환경에서 작업을 해보고 싶었습니다.


## 📌 폴더 구조
```bash
├── public                     정적인 파일(HTML, favicon)
│   ├── images                 이미지
└── src
    ├── components             개별 동작을 위한 컴포넌트들
    │   ├── Awards.tsx
    │   ├── ContentLogo.tsx
    │   └── Metrics.tsx
    ├── utils
    │   └── Animation.tsx      기능 구현을 위한 컴포넌트
    ├── views                  Layout을 위한 컴포넌트
    ├── App.tsx
    ├── index.tsx
    └── GlobalStyle.ts         전역 스타일 컴포넌트
```
