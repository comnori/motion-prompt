<!-- tools/build.mjs가 meta.json에서 생성한 파일입니다. 수정할 때는 meta.json을 편집하세요. -->

# 랜딩 페이지와 웹 효과 2

24개 용어 · #145–168 · 팩 `lp2` · 언어: [English](README.md) / [Español](README.es.md) / [日本語](README.ja.md) / [简体中文](README.zh-Hans.md) / [繁體中文](README.zh-Hant.md)

원하는 이름을 찾은 뒤 AI에게 그대로 전달하세요. 지속 시간, 강도, 움직일 대상을 덧붙이면 원하는 결과에 더 가까워집니다.

![랜딩 페이지와 웹 효과 2 — 미리보기](../../assets/preview-lp2.gif)

## 스크롤 효과

| 번호 | 이름 | 영어 원어 | 뜻 | AI 요청 예시 |
|---|---|---|---|---|
| [#145](https://showheyohtaki.github.io/motion-prompt/#145) | **스크롤 타임라인** | Timeline on scroll | 스크롤에 따라 타임라인의 선이 길어짐 | 회사 연혁을 스크롤 타임라인으로 만들어 줘. 스크롤에 맞춰 세로선을 늘리고, 선이 각 연도에 도달하면 해당 내용을 보여 줘. |
| [#146](https://showheyohtaki.github.io/motion-prompt/#146) | **스크롤 텍스트 리빌** | Scroll text reveal | 스크롤에 따라 글자가 하나씩 진해짐 | 콘셉트 소개 문구에 스크롤 텍스트 리빌을 넣어 줘. 밝은 회색으로 시작해 스크롤할수록 한 글자씩 진해지게 해 줘. |
| [#147](https://showheyohtaki.github.io/motion-prompt/#147) | **카드 쌓기** | Stacking cards | 스크롤할수록 카드가 차례로 겹쳐 쌓임 | 서비스의 세 단계를 카드 쌓기로 보여 줘. 스크롤할 때 카드가 올라와 이전 카드 상단보다 12px 아래에 겹쳐 쌓이게 해 줘. |
| [#148](https://showheyohtaki.github.io/motion-prompt/#148) | **스크롤 배경색 전환** | Background color change on scroll | 섹션에 따라 페이지 배경색이 바뀜 | 스크롤 배경색 전환을 넣어 줘. 아침 섹션의 크림색에서 밤의 네이비, 휴일의 하늘색으로 부드럽게 바꿔 줘. |
| [#149](https://showheyohtaki.github.io/motion-prompt/#149) | **스크롤 시 숨기는 헤더** | Hide-on-scroll header | 아래로 스크롤하면 숨고 위로 스크롤하면 돌아옴 | 스크롤 시 숨기는 헤더를 만들어 줘. 아래로 스크롤하면 0.3초 동안 위로 숨고, 위로 스크롤하면 바로 돌아오게 해 줘. |
| [#150](https://showheyohtaki.github.io/motion-prompt/#150) | **스크롤스파이** | Scrollspy | 현재 보고 있는 섹션을 메뉴에서 강조함 | 글의 목차에 스크롤스파이를 넣어 줘. 읽고 있는 섹션의 항목을 주황색으로 강조하고 0.25초 동안 전환해 줘. |
| [#151](https://showheyohtaki.github.io/motion-prompt/#151) | **맨 위로 버튼** | Back-to-top button | 아래로 내려가면 나타나 페이지 맨 위로 이동시켜 줌 | 글 페이지에 맨 위로 버튼을 넣어 줘. 조금 스크롤하면 오른쪽 아래에 나타나고, 클릭하면 0.6초 동안 맨 위로 이동하게 해 줘. |
| [#152](https://showheyohtaki.github.io/motion-prompt/#152) | **스크롤 확대** | Zoom on scroll | 스크롤에 따라 이미지가 화면을 채울 만큼 커짐 | 히어로 이미지에 스크롤 확대를 넣어 줘. 중앙의 작은 사진이 스크롤에 따라 뷰포트를 채우게 키운 다음 그 위에 헤드라인을 페이드 인해 줘. |

## 마우스와 입력 상호작용

| 번호 | 이름 | 영어 원어 | 뜻 | AI 요청 예시 |
|---|---|---|---|---|
| [#153](https://showheyohtaki.github.io/motion-prompt/#153) | **호버 3D 틸트** | 3D tilt on hover | 커서를 따라 카드가 입체적으로 기울어짐 | 멤버 카드에 호버 3D 틸트를 넣어 줘. 커서를 따라 최대 18° 기울고, 반사광도 함께 움직이게 해 줘. |
| [#154](https://showheyohtaki.github.io/motion-prompt/#154) | **Spotlight hover** | Spotlight hover | 커서 주변만 조명을 비춘 듯 밝아짐 | 기능 카드에 Spotlight hover 효과를 넣어 줘. 어두운 카드에서 커서 주변 약 120px의 원형 영역만 밝히고 테두리도 빛나게 해 줘. |
| [#155](https://showheyohtaki.github.io/motion-prompt/#155) | **호버 이미지 교체** | Image swap on hover | 포인터를 올리면 다른 사진으로 바뀜 | 제품 그리드에 호버 이미지 교체를 넣어 줘. 카드에 포인터를 올리면 0.3초 동안 뒷면 사진으로 크로스페이드해 줘. |
| [#156](https://showheyohtaki.github.io/motion-prompt/#156) | **Text roll on hover** | Text roll on hover | 포인터를 올리면 글자가 위로 말려 올라가며 바뀜 | 주 메뉴에 Text roll on hover 효과를 넣어 줘. 글자를 0.035초 간격으로 하나씩 올리고, 아래에서 같은 단어가 주황색으로 나타나게 해 줘. |
| [#157](https://showheyohtaki.github.io/motion-prompt/#157) | **Hover image reveal** | Hover image reveal | 목록 항목에 포인터를 올리면 사진이 나타남 | 매물 목록에 Hover image reveal 효과를 넣어 줘. 행에 포인터를 올리면 사진이 커서 옆에 0.25초 동안 나타나고 커서를 따라가게 해 줘. |
| [#158](https://showheyohtaki.github.io/motion-prompt/#158) | **플로팅 레이블** | Floating label | 입력을 시작하면 레이블이 위로 올라감 | 양식에 플로팅 레이블을 써 줘. 포커스를 받으면 레이블이 작아지면서 0.24초 동안 입력란 위쪽 테두리로 이동하게 해 줘. |
| [#159](https://showheyohtaki.github.io/motion-prompt/#159) | **인라인 유효성 검사** | Inline validation | 입력하는 동안 올바른 값인지 바로 보여 줌 | 문의 양식에 인라인 유효성 검사를 넣어 줘. 이메일 주소가 불완전하면 빨간 '형식이 올바르지 않습니다' 메시지를, 올바르면 초록 체크를 보여 줘. |
| [#160](https://showheyohtaki.github.io/motion-prompt/#160) | **로딩 버튼** | Loading button | 버튼 안에 로딩 중과 완료 상태를 표시함 | 제출 버튼을 로딩 버튼으로 만들어 줘. 클릭하면 0.3초 동안 스피너가 있는 원으로 줄어들고, 완료되면 초록색으로 바뀌며 체크와 '완료'를 보여 줘. |

## 콘텐츠를 돋보이게 하는 효과

| 번호 | 이름 | 영어 원어 | 뜻 | AI 요청 예시 |
|---|---|---|---|---|
| [#161](https://showheyohtaki.github.io/motion-prompt/#161) | **뷰 전환(공유 요소)** | View transition (shared element) | 목록의 사진이 확대되며 상세 페이지로 이어짐 | 작업물 목록에서 상세 페이지로 뷰 전환을 넣어 줘. 클릭한 사진이 0.6초 동안 커져 상세 페이지 상단 이미지가 되게 해 줘. |
| [#162](https://showheyohtaki.github.io/motion-prompt/#162) | **라이트박스** | Lightbox | 배경을 어둡게 하고 이미지를 크게 띄움 | 사례 사진을 라이트박스로 볼 수 있게 해 줘. 클릭하면 배경을 어둡게 하고 사진을 중앙에 확대해 줘. 이전·다음 사진 화살표도 넣어 줘. |
| [#163](https://showheyohtaki.github.io/motion-prompt/#163) | **핫스폿** | Hotspots | 이미지 위의 점을 누르면 설명이 열림 | 제품 사진에 핫스폿을 넣어 줘. 주요 기능 위치에 맥동하는 점을 표시하고, 누르면 0.25초 동안 툴팁이 열리게 해 줘. |
| [#164](https://showheyohtaki.github.io/motion-prompt/#164) | **카운트다운 타이머** | Countdown timer | 마감까지 남은 시간을 줄여 가며 표시함 | 캠페인 마감 카운트다운 타이머를 넣어 줘. 시·분·초를 표시하고, 바뀌는 숫자는 0.3초 동안 아래에서 굴러 올라오게 해 줘. |
| [#165](https://showheyohtaki.github.io/motion-prompt/#165) | **Animated shape divider** | Animated shape divider | 물결 모양의 섹션 경계가 계속 움직임 | 히어로와 다음 섹션 사이에 Animated shape divider를 넣어 줘. 흰 물결 레이어 두 개가 서로 반대 방향으로 천천히 흐르게 해 줘. |
| [#166](https://showheyohtaki.github.io/motion-prompt/#166) | **좋아요 버튼 애니메이션** | Like button animation | 좋아요를 누르면 하트가 튀고 주변으로 조각이 퍼짐 | 게시물에 좋아요 버튼 애니메이션을 넣어 줘. 하트를 빨간색으로 채우고 1.45배까지 튀게 해 줘. 작은 파티클을 흩뿌리고 숫자를 하나 올려 줘. |
| [#167](https://showheyohtaki.github.io/motion-prompt/#167) | **아래로 스크롤 안내** | Scroll-down cue | 아래로 스크롤하도록 유도하는 동작을 반복함 | 히어로 아래에 아래로 스크롤 안내를 넣어 줘. 마우스 윤곽 안의 점이 약 1.5초마다 아래로 이동하며 사라지는 동작을 반복해 줘. |
| [#168](https://showheyohtaki.github.io/motion-prompt/#168) | **배경 동영상** | Background video | 히어로 섹션 뒤에서 영상이 재생됨 | 히어로에 배경 동영상을 넣어 줘. 무음으로 반복하고, 헤드라인이 잘 읽히도록 왼쪽에 어두운 그라디언트를 깔아 줘. |

번호를 누르면 갤러리의 움직이는 예제가 열립니다. 각 항목의 시간·이징 값·참고 코드는 영어 문서에서 확인할 수 있습니다: `api/v1/en/e/<id>.txt` ([#145](../../api/v1/en/e/145.txt)).

[전체 팩](../README.md)
