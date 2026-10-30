<!-- tools/build.mjs가 meta.json에서 생성한 파일입니다. 수정할 때는 meta.json을 편집하세요. -->

# 모션 그래픽 움직임 2

24개 용어 · #121–144 · 팩 `motion2` · 언어: [English](README.md) / [Español](README.es.md) / [日本語](README.ja.md) / [简体中文](README.zh-Hans.md) / [繁體中文](README.zh-Hant.md)

원하는 이름을 찾은 뒤 AI에게 그대로 전달하세요. 지속 시간, 강도, 움직일 대상을 덧붙이면 원하는 결과에 더 가까워집니다.

![모션 그래픽 움직임 2 — 미리보기](../../assets/preview-motion2.gif)

## 움직임 기법

| 번호 | 이름 | 영어 원어 | 뜻 | AI 요청 예시 |
|---|---|---|---|---|
| [#121](https://showheyohtaki.github.io/motion-prompt/?lang=ko#121) | **예비 동작** | Anticipation | 본동작 전에 잠깐 반대 방향으로 움직임 | 버튼이 오른쪽으로 날아가기 전에 예비 동작을 넣어 줘. 0.3초 동안 살짝 뒤로 당기고 눌렀다가 출발하게 해 줘. |
| [#122](https://showheyohtaki.github.io/motion-prompt/?lang=ko#122) | **팔로우 스루(후속 동작)** | Follow-through | 몸체가 멈춘 뒤에도 일부가 계속 흔들림 | 캐릭터가 멈춘 뒤 머리카락과 깃발에 팔로우 스루를 넣어 줘. 약 0.5초 더 흔들린 뒤 멈추게 해 줘. |
| [#123](https://showheyohtaki.github.io/motion-prompt/?lang=ko#123) | **바운스** | Bounce | 떨어진 뒤 점점 낮게 튀다가 멈춤 | 공이 위에서 떨어져 바운스하게 해 줘. 세 번 튀되 매번 높이가 낮아지게 해 줘. |
| [#124](https://showheyohtaki.github.io/motion-prompt/?lang=ko#124) | **위글** | Wiggle | 작고 불규칙한 떨림이 이어짐 | 알림 종에 약한 위글을 넣어 줘. 울리는 동안 최대 약 10° 범위에서 흔들리게 해 줘. |
| [#125](https://showheyohtaki.github.io/motion-prompt/?lang=ko#125) | **펄스** | Pulse | 심장박동처럼 크기가 커졌다 작아짐 | 하트 아이콘에 펄스를 넣어 줘. 1.2초마다 약 10% 커졌다가 돌아오게 해 줘. |
| [#126](https://showheyohtaki.github.io/motion-prompt/?lang=ko#126) | **모션 패스** | Motion path | 지정한 곡선을 따라 움직임 | 이 곡선을 모션 패스로 삼아 종이비행기가 4초 동안 날아가게 해 줘. 진행 방향을 향하도록 회전도 시켜 줘. |
| [#127](https://showheyohtaki.github.io/motion-prompt/?lang=ko#127) | **핑퐁 루프** | Ping-pong loop | 정방향과 역방향 재생을 번갈아 반복함 | 로딩 점을 핑퐁 루프로 왕복시켜 줘. 가는 데 1초, 돌아오는 데 1초로 해 줘. |
| [#128](https://showheyohtaki.github.io/motion-prompt/?lang=ko#128) | **스톱 모션 스타일** | Stop-motion style | 프레임을 줄여 끊기는 듯한 움직임을 만듦 | 이 움직임을 스톱 모션 스타일로 만들어 줘. 초당 8프레임으로 하고 프레임마다 약간씩 흔들리게 해 줘. |

## 텍스트와 도형

| 번호 | 이름 | 영어 원어 | 뜻 | AI 요청 예시 |
|---|---|---|---|---|
| [#129](https://showheyohtaki.github.io/motion-prompt/?lang=ko#129) | **텍스트 스크램블** | Text scramble | 글자가 무작위로 바뀌다가 최종 문구로 정리됨 | 헤드라인을 텍스트 스크램블로 등장시켜 줘. 약 1초 동안 무작위 문자를 보여 준 뒤 왼쪽부터 정리해 줘. |
| [#130](https://showheyohtaki.github.io/motion-prompt/?lang=ko#130) | **웨이브 텍스트** | Wave text | 글자들이 차례로 오르내리며 물결을 만듦 | 로고 글자에 웨이브 텍스트를 적용해 줘. 각 글자에 조금씩 시간차를 주고 약 20px 위아래로 움직이게 해 줘. |
| [#131](https://showheyohtaki.github.io/motion-prompt/?lang=ko#131) | **패스 위의 텍스트** | Text on a path | 글자가 선이나 곡선을 따라 흐름 | 슬로건을 패스 위의 텍스트로 만들어 줘. 물결 선을 따라 왼쪽에서 오른쪽으로 흐르고 5초마다 한 번 완주하게 해 줘. |
| [#132](https://showheyohtaki.github.io/motion-prompt/?lang=ko#132) | **가변 글꼴 애니메이션** | Variable font animation | 글자의 굵기가 부드럽게 바뀜 | 제목에 가변 글꼴 애니메이션을 넣어 줘. 1초 동안 Thin에서 Black으로, 굵기 100에서 900으로 바꿔 줘. |
| [#133](https://showheyohtaki.github.io/motion-prompt/?lang=ko#133) | **텍스트 마스크** | Text mask | 글자 모양 안으로 사진이나 영상이 보임 | OCEAN이라는 단어를 텍스트 마스크로 써서 안에 바다 영상을 보여 줘. 마지막 1초에는 영상 전체를 드러내 줘. |
| [#134](https://showheyohtaki.github.io/motion-prompt/?lang=ko#134) | **리피터** | Repeater | 도형을 복제하고 복제본들을 회전시킴 | 리피터로 이 꽃잎을 원형으로 12개 복제해 줘. 4초마다 한 바퀴 회전하게 해 줘. |
| [#135](https://showheyohtaki.github.io/motion-prompt/?lang=ko#135) | **만화경** | Kaleidoscope | 거울처럼 반사된 무늬가 대칭으로 펼쳐짐 | 로고 뒤에 만화경 효과를 넣어 줘. 8방향 거울 대칭으로 천천히 회전하며 퍼지게 해 줘. |
| [#136](https://showheyohtaki.github.io/motion-prompt/?lang=ko#136) | **Line boil** | Line boil | 손으로 그린 선이 프레임마다 조금씩 흔들림 | 손그림 일러스트에 Line boil 효과를 넣어 줘. 초당 10프레임으로 하고 선은 2~3px만 움직이게 해 줘. |

## 전환과 강조

| 번호 | 이름 | 영어 원어 | 뜻 | AI 요청 예시 |
|---|---|---|---|---|
| [#137](https://showheyohtaki.github.io/motion-prompt/?lang=ko#137) | **밀어내기 전환** | Push transition | 다음 장면이 현재 장면을 밀어내며 들어옴 | 오른쪽에서 0.8초 동안 밀어내기 전환으로 다음 슬라이드로 넘어가 줘. |
| [#138](https://showheyohtaki.github.io/motion-prompt/?lang=ko#138) | **블라인드 전환** | Blinds transition | 가느다란 띠들이 열리며 다음 장면을 드러냄 | 블라인드 전환으로 장면을 바꿔 줘. 가로 띠 일곱 개가 1초 동안 열리게 해 줘. |
| [#139](https://showheyohtaki.github.io/motion-prompt/?lang=ko#139) | **큐브 전환** | Cube transition | 정육면체가 돌아가듯 장면이 바뀜 | 제품 사진을 큐브 전환으로 바꿔 줘. 0.8초 동안 왼쪽으로 90° 회전하게 해 줘. |
| [#140](https://showheyohtaki.github.io/motion-prompt/?lang=ko#140) | **페이지 말림** | Page curl | 종이 모서리가 말려 넘어가며 다음 페이지를 드러냄 | 오른쪽 아래 모서리에서 1.2초 동안 페이지 말림으로 다음 장으로 넘어가 줘. |
| [#141](https://showheyohtaki.github.io/motion-prompt/?lang=ko#141) | **픽셀화** | Pixelate | 이미지가 거친 사각 블록으로 바뀐 뒤 장면이 전환됨 | 픽셀화 전환을 넣어 줘. 0.6초 동안 모자이크를 점점 크게 하고 가장 거칠어진 순간 장면을 바꿔 줘. |
| [#142](https://showheyohtaki.github.io/motion-prompt/?lang=ko#142) | **산산조각** | Shatter | 유리처럼 깨져 조각들이 흩어짐 | 제목이 나오기 전에 이전 장면을 산산조각 내 줘. 먼저 균열이 생기고 약 1초 동안 파편이 떨어지게 해 줘. |
| [#143](https://showheyohtaki.github.io/motion-prompt/?lang=ko#143) | **분해도** | Exploded view | 부품들이 떨어져 나가 내부 구조를 보여 줌 | 제품을 분해도로 보여 줘. 부품 네 개가 1초 동안 벌어지고 각 부품에 이름표를 달아 줘. |
| [#144](https://showheyohtaki.github.io/motion-prompt/?lang=ko#144) | **분할 화면** | Split screen | 화면을 나눠 여러 장면을 나란히 보여 줌 | 분할 화면으로 세 장면을 동시에 보여 줘. 한 칸에서 두 칸, 세 칸으로 각각 0.5초씩 늘려 줘. |

번호를 누르면 갤러리의 움직이는 예제가 열립니다. 각 항목의 시간·이징 값·참고 코드: `api/v1/ko/e/<id>.txt` ([#121](../../api/v1/ko/e/121.txt)).

[전체 팩](../README.md)
