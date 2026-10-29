<!-- tools/build.mjs가 meta.json에서 생성한 파일입니다. 수정할 때는 meta.json을 편집하세요. -->

# 카메라 움직임과 장면 전환

24개 용어 · #025–048 · 팩 `camera` · 언어: [English](README.md) / [Español](README.es.md) / [日本語](README.ja.md) / [简体中文](README.zh-Hans.md) / [繁體中文](README.zh-Hant.md)

원하는 이름을 찾은 뒤 AI에게 그대로 전달하세요. 지속 시간, 강도, 움직일 대상을 덧붙이면 원하는 결과에 더 가까워집니다.

![카메라 움직임과 장면 전환 — 미리보기](../../assets/preview-camera.gif)

## 카메라 움직임

| 번호 | 이름 | 영어 원어 | 뜻 | AI 요청 예시 |
|---|---|---|---|---|
| [#025](https://showheyohtaki.github.io/motion-prompt/#025) | **팬** | Pan | 제자리에서 카메라를 좌우로 돌림 | 카메라 위치를 고정하고 스카이라인을 따라 왼쪽에서 오른쪽으로 5초 동안 천천히 팬해 줘. |
| [#026](https://showheyohtaki.github.io/motion-prompt/#026) | **틸트** | Tilt | 제자리에서 카메라를 위아래로 돌림 | 인물의 발에서 탑 꼭대기까지 천천히 틸트 업해 줘. |
| [#027](https://showheyohtaki.github.io/motion-prompt/#027) | **돌리 인** | Dolly in | 카메라가 피사체 쪽으로 이동함 | 그녀의 얼굴을 향해 천천히 돌리 인으로 촬영해 줘. 줌을 쓰지 말고 카메라를 이동해 줘. |
| [#028](https://showheyohtaki.github.io/motion-prompt/#028) | **줌 인** | Zoom in | 카메라는 고정한 채 렌즈로 확대함 | 카메라는 고정하고 창가의 인물을 향해 3초 동안 줌 인해 줘. |
| [#029](https://showheyohtaki.github.io/motion-prompt/#029) | **트래킹 샷** | Tracking shot | 피사체의 움직임에 맞춰 카메라도 이동함 | 걷는 인물의 옆에서 같은 속도로 이동하는 트래킹 샷으로 촬영해 줘. |
| [#030](https://showheyohtaki.github.io/motion-prompt/#030) | **오빗 샷(아크 샷)** | Orbit (Arc shot) | 피사체 주위를 원호를 그리며 돎 | 서 있는 인물을 화면 중앙에 유지하면서 반 바퀴 도는 오빗 샷으로 촬영해 줘. |
| [#031](https://showheyohtaki.github.io/motion-prompt/#031) | **크레인 업** | Crane up | 카메라를 위로 들어 올림 | 눈높이에서 시작해 마을 전체가 보일 때까지 크레인 업해 줘. |
| [#032](https://showheyohtaki.github.io/motion-prompt/#032) | **돌리 줌(버티고 효과)** | Dolly zoom (Vertigo) | 피사체 크기는 그대로인 채 배경의 원근감이 변함 | 그가 무언가를 깨닫는 순간 얼굴에 돌리 줌을 써 줘. 인물 크기는 유지하고 배경만 뒤로 늘어나게 해 줘. |

## 촬영 방식과 시간 연출

| 번호 | 이름 | 영어 원어 | 뜻 | AI 요청 예시 |
|---|---|---|---|---|
| [#033](https://showheyohtaki.github.io/motion-prompt/#033) | **랙 포커스** | Rack focus | 가까운 대상과 먼 대상 사이로 초점을 옮김 | 앞쪽 컵에서 뒤에 있는 인물로 1초 동안 랙 포커스를 해 줘. |
| [#034](https://showheyohtaki.github.io/motion-prompt/#034) | **핸드헬드** | Handheld | 손으로 들고 찍는 듯 약하게 흔들림 | 걷는 인물을 뒤에서 따라가는 핸드헬드 샷으로 촬영해 줘. 흔들림은 약하게 해 줘. |
| [#035](https://showheyohtaki.github.io/motion-prompt/#035) | **FPV 드론 샷** | FPV drone shot | 비행하는 시점으로 빠르고 몰입감 있게 공간을 통과함 | 나무 사이를 누비다가 강 위로 빠져나오는 FPV 드론 샷으로 촬영해 줘. |
| [#036](https://showheyohtaki.github.io/motion-prompt/#036) | **더치 앵글** | Dutch angle | 화면을 대각선으로 기울임 | 이 불안한 장면에는 약 15도 기울어진 더치 앵글을 써 줘. |
| [#037](https://showheyohtaki.github.io/motion-prompt/#037) | **슬로 모션** | Slow motion | 동작을 느리게 재생함 | 물이 튀는 순간을 슬로 모션으로 보여 줘. |
| [#038](https://showheyohtaki.github.io/motion-prompt/#038) | **스피드 램프** | Speed ramp | 한 샷 안에서 재생 속도를 바꿈 | 스피드 램프를 넣어 줘. 정상 속도로 시작해 점프의 정점에서 느려졌다가 다시 정상 속도로 돌아오게 해 줘. |
| [#039](https://showheyohtaki.github.io/motion-prompt/#039) | **타임랩스** | Time-lapse | 몇 시간의 변화를 몇 초로 압축함 | 해 질 무렵부터 밤까지 도시의 불이 켜지는 모습을 타임랩스로 보여 줘. |
| [#040](https://showheyohtaki.github.io/motion-prompt/#040) | **프리즈 프레임** | Freeze frame | 동작을 잠시 정지 화면으로 보여 줌 | 그녀가 돌아보는 순간 프리즈 프레임으로 1초간 멈추고 이름을 표시해 줘. |

## 장면 전환

| 번호 | 이름 | 영어 원어 | 뜻 | AI 요청 예시 |
|---|---|---|---|---|
| [#041](https://showheyohtaki.github.io/motion-prompt/#041) | **점프 컷** | Jump cut | 같은 구도에서 중간 시간을 건너뜀 | 같은 구도의 점프 컷으로 준비 과정을 빠르게 보여 줘. |
| [#042](https://showheyohtaki.github.io/motion-prompt/#042) | **매치 컷** | Match cut | 비슷한 모양이나 움직임을 연결해 장면을 바꿈 | 둥근 커피잔에서 같은 위치의 보름달로 매치 컷해 줘. |
| [#043](https://showheyohtaki.github.io/motion-prompt/#043) | **휩 팬** | Whip pan | 빠른 팬으로 생기는 흐림을 이용해 다음 샷으로 넘어감 | 오른쪽으로 휩 팬해서 다음 장소로 넘어가 줘. |
| [#044](https://showheyohtaki.github.io/motion-prompt/#044) | **크로스 디졸브** | Cross dissolve | 앞 장면이 사라지는 동안 다음 장면이 겹쳐 나타남 | 아침의 방에서 같은 방의 밤 모습으로 1초 동안 크로스 디졸브해 줘. |
| [#045](https://showheyohtaki.github.io/motion-prompt/#045) | **와이프** | Wipe | 움직이는 경계가 화면을 쓸며 장면을 바꿈 | 왼쪽에서 오른쪽으로 와이프해서 다음 장면으로 넘어가 줘. |
| [#046](https://showheyohtaki.github.io/motion-prompt/#046) | **스매시 컷** | Smash cut | 대조적인 장면으로 갑자기 전환함 | 조용한 침실에서 시끄러운 교차로로 스매시 컷해 줘. |
| [#047](https://showheyohtaki.github.io/motion-prompt/#047) | **J컷** | J-cut | 다음 장면의 소리가 화면보다 먼저 시작됨 | J컷으로 다음 장면의 파도 소리를 먼저 들려준 뒤 바다 화면으로 전환해 줘. |
| [#048](https://showheyohtaki.github.io/motion-prompt/#048) | **L컷** | L-cut | 화면이 바뀐 뒤에도 이전 장면의 소리가 이어짐 | L컷으로 그녀의 목소리를 유지하면서 듣는 사람의 얼굴로 화면을 전환해 줘. |

번호를 누르면 갤러리의 움직이는 예제가 열립니다. 각 항목의 시간·이징 값·참고 코드는 영어 문서에서 확인할 수 있습니다: `api/v1/en/e/<id>.txt` ([#025](../../api/v1/en/e/025.txt)).

[전체 팩](../README.ko.md)
