<!-- tools/build.mjs가 meta.json에서 생성한 파일입니다. 수정할 때는 meta.json을 편집하세요. -->

# UI 컴포넌트 이름

24개 용어 · #049–072 · 팩 `ui` · 언어: [English](README.md) / [Español](README.es.md) / [日本語](README.ja.md) / [简体中文](README.zh-Hans.md) / [繁體中文](README.zh-Hant.md)

원하는 이름을 찾은 뒤 AI에게 그대로 전달하세요. 지속 시간, 강도, 움직일 대상을 덧붙이면 원하는 결과에 더 가까워집니다.

## 펼치기와 오버레이

| 번호 | 이름 | 영어 원어 | 뜻 | AI 요청 예시 |
|---|---|---|---|---|
| [#049](https://showheyohtaki.github.io/motion-prompt/#049) | **모달 대화상자** | Modal dialog | 배경이 어두워지며 화면 중앙에 창이 열림 | 삭제 버튼을 누르면 모달 대화상자로 확인 메시지를 보여 줘. 배경을 약 40% 어둡게 하고, 0.3초 동안 살짝 커지며 페이드 인하게 해 줘. |
| [#050](https://showheyohtaki.github.io/motion-prompt/#050) | **드로어(오프캔버스)** | Drawer (Off-canvas) | 화면 옆에서 메뉴 패널이 밀려 들어옴 | 메뉴 버튼을 누르면 왼쪽에서 드로어를 열어 줘. 너비는 화면의 40%로 하고, 0.4초 동안 들어오면서 배경을 살짝 어둡게 해 줘. |
| [#051](https://showheyohtaki.github.io/motion-prompt/#051) | **바텀 시트** | Bottom sheet | 화면 아래에서 패널이 올라옴 | '자세히 보기'를 누르면 화면 높이의 40%인 바텀 시트를 0.4초 동안 올려 줘. 아래로 끌면 닫히게 해 줘. |
| [#052](https://showheyohtaki.github.io/motion-prompt/#052) | **아코디언** | Accordion | 제목을 누르면 내용이 펼쳐지거나 접힘 | FAQ를 아코디언으로 만들어 줘. 누른 항목이 0.35초 동안 펼쳐지고 화살표는 180° 회전하게 해 줘. |
| [#053](https://showheyohtaki.github.io/motion-prompt/#053) | **드롭다운(선택 목록)** | Dropdown (select) | 입력란을 누르면 아래로 선택 목록이 펼쳐짐 | 시·도 선택란을 드롭다운으로 만들어 줘. 0.25초 동안 아래로 목록을 열고, 선택하면 값을 채운 뒤 닫아 줘. |
| [#054](https://showheyohtaki.github.io/motion-prompt/#054) | **툴팁** | Tooltip | 포인터를 올리면 짧은 설명이 나타남 | 물음표 아이콘에 툴팁을 달아 줘. 포인터를 올린 뒤 0.2초 후에 위쪽에 설명을 보여 주고, 벗어나면 숨겨 줘. |
| [#055](https://showheyohtaki.github.io/motion-prompt/#055) | **팝오버** | Popover | 버튼을 누르면 그 버튼을 가리키는 작은 패널이 열림 | '상세 정보' 버튼에 팝오버를 붙여 줘. 클릭하면 오른쪽에 작은 패널이 0.3초 동안 열리고, 확인을 누르면 닫히게 해 줘. |
| [#056](https://showheyohtaki.github.io/motion-prompt/#056) | **토스트 알림** | Toast notification | 화면 구석에 짧은 메시지가 나타났다가 자동으로 사라짐 | 저장 후 오른쪽 아래에 '저장됨' 토스트 알림을 보여 줘. 오른쪽에서 0.35초 동안 들어오고 2초 뒤 자동으로 사라지게 해 줘. |

## 선택과 전환

| 번호 | 이름 | 영어 원어 | 뜻 | AI 요청 예시 |
|---|---|---|---|---|
| [#057](https://showheyohtaki.github.io/motion-prompt/#057) | **탭** | Tabs | 레이블을 누르면 표시하는 패널이 바뀜 | 가격 안내 페이지 위에 탭 세 개를 넣어 줘. 클릭하면 밑줄은 0.25초 동안 이동하고 내용은 0.2초 동안 크로스페이드되게 해 줘. |
| [#058](https://showheyohtaki.github.io/motion-prompt/#058) | **캐러셀** | Carousel | 옆으로 넘기며 항목을 하나씩 보여 줌 | 상단 이미지를 캐러셀로 만들어 줘. 오른쪽 화살표를 누르면 0.4초 동안 한 장씩 이동하고, 아래에 위치 표시 점을 넣어 줘. |
| [#059](https://showheyohtaki.github.io/motion-prompt/#059) | **토글 스위치** | Toggle switch | 설정을 켜거나 끔 | 각 알림 설정에 토글 스위치를 넣어 줘. 손잡이는 0.2초 동안 이동하고, 켜지면 트랙이 파란색이 되게 해 줘. |
| [#060](https://showheyohtaki.github.io/motion-prompt/#060) | **세그먼트 컨트롤** | Segmented control | 이어 붙인 버튼들로 보기를 전환함 | 차트 위에 일 / 주 / 월 세그먼트 컨트롤을 넣어 줘. 선택 배경이 0.25초 동안 이동하고 차트도 함께 바뀌게 해 줘. |
| [#061](https://showheyohtaki.github.io/motion-prompt/#061) | **필터 칩** | Filter chips | 작은 알약 모양 버튼으로 필터를 켜거나 끔 | 목록 위에 필터 칩을 넣어 줘. 클릭한 칩은 체크 표시와 함께 파란색이 되고, 0.15초 안에 목록을 필터링해 줘. |
| [#062](https://showheyohtaki.github.io/motion-prompt/#062) | **범위 슬라이더** | Range slider | 하나의 트랙에서 두 손잡이로 최솟값과 최댓값을 선택함 | 가격 필터를 손잡이 두 개가 있는 범위 슬라이더로 만들어 줘. 끄는 동안 각 값을 말풍선으로 보여 줘. |
| [#063](https://showheyohtaki.github.io/motion-prompt/#063) | **스테퍼(+/−)** | Stepper (+/−) | 더하기와 빼기 버튼으로 숫자를 하나씩 조절함 | 수량 입력란을 스테퍼로 만들어 줘. +와 −로 하나씩 바꾸고, 누를 때마다 숫자가 0.25초 동안 살짝 튀게 해 줘. |
| [#064](https://showheyohtaki.github.io/motion-prompt/#064) | **페이지네이션** | Pagination | 번호 버튼으로 페이지를 이동함 | 검색 결과 아래에 페이지네이션을 넣어 줘. 현재 페이지는 파란 원으로 표시하고, 클릭하면 0.2초 동안 원이 이동하며 목록이 바뀌게 해 줘. |

## 탐색과 상태 표시

| 번호 | 이름 | 영어 원어 | 뜻 | AI 요청 예시 |
|---|---|---|---|---|
| [#065](https://showheyohtaki.github.io/motion-prompt/#065) | **햄버거 메뉴** | Hamburger menu | 가로줄 세 개로 된 아이콘을 누르면 메뉴가 열림 | 모바일 헤더 오른쪽에 햄버거 메뉴를 넣어 줘. 누르면 세 줄이 0.3초 동안 ×로 변하고 메뉴가 위에서 내려오게 해 줘. |
| [#066](https://showheyohtaki.github.io/motion-prompt/#066) | **브레드크럼** | Breadcrumbs | 사이트 안에서 현재 페이지의 위치를 링크 경로로 표시함 | 글 위에 '홈 › 강좌 › 웹 디자인' 브레드크럼을 넣어 줘. 현재 페이지는 굵게 표시하고 링크는 빼 줘. |
| [#067](https://showheyohtaki.github.io/motion-prompt/#067) | **메가 메뉴** | Mega menu | 주 메뉴에서 여러 링크를 묶은 넓은 패널이 펼쳐짐 | 헤더의 '제품'에 메가 메뉴를 넣어 줘. 포인터를 올리면 전체 너비의 패널이 0.25초 동안 내려오고, 링크 세 열과 이미지를 보여 줘. |
| [#068](https://showheyohtaki.github.io/motion-prompt/#068) | **단계 표시기** | Step indicator | 여러 단계 중 현재 위치를 보여 줌 | 가입 양식 위에 정보 입력, 검토, 결제, 완료의 네 단계 표시기를 넣어 줘. 완료한 단계에는 체크를 표시해 줘. |
| [#069](https://showheyohtaki.github.io/motion-prompt/#069) | **스켈레톤 화면** | Skeleton screen | 콘텐츠를 불러오는 동안 회색 도형으로 자리를 표시함 | 목록을 불러오는 동안 스켈레톤 화면을 보여 줘. 콘텐츠 모양의 회색 블록 위로 0.9초마다 빛이 왼쪽에서 오른쪽으로 지나가게 해 줘. |
| [#070](https://showheyohtaki.github.io/motion-prompt/#070) | **스피너** | Spinner | 기다리는 중임을 회전하는 원으로 표시함 | 전송 중에는 양식 위에 스피너를 보여 줘. 초당 한 바퀴보다 조금 빠르게 회전하고, 완료되면 파란 체크로 바꿔 줘. |
| [#071](https://showheyohtaki.github.io/motion-prompt/#071) | **배지** | Badge | 작은 원 안에 개수를 표시함 | 헤더의 종 아이콘에 읽지 않은 개수 배지를 붙여 줘. 개수가 늘 때마다 0.3초 동안 튀고, 알림을 열면 사라지게 해 줘. |
| [#072](https://showheyohtaki.github.io/motion-prompt/#072) | **빈 상태** | Empty state | 목록에 표시할 내용이 없을 때 보여 주는 화면 | 목록이 비면 선으로 그린 아이콘, '아직 내용이 없어요', 추가 버튼으로 빈 상태를 보여 줘. 0.35초 동안 페이드 인하게 해 줘. |

번호를 누르면 갤러리의 움직이는 예제가 열립니다. 각 항목의 시간·이징 값·참고 코드는 영어 문서에서 확인할 수 있습니다: `api/v1/en/e/<id>.txt` ([#049](../../api/v1/en/e/049.txt)).

[전체 팩](../README.ko.md)
