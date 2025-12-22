const SHADOW_BG_URL = "./shadow_bg.png";
let shadowBgImg = new Image();
shadowBgImg.src = SHADOW_BG_URL;
shadowBgImg.crossOrigin = "anonymous"; // 필요시
let shadowBgLoaded = false;
shadowBgImg.onload = () => { shadowBgLoaded = true; };

// -----------------------------------------
// 🔹 모듈 불러오기
// -----------------------------------------
import pokemonStats from "./pokemon-stats.js";
import pokemonSkills from "./pokemon-skills.js";  // skill DB 불러오기

// ---------- SPRITE / CANVAS 유틸 추가 ----------
/*
 * 사용법 요약:
 * - SPRITE_SHEET_URL: 스프라이트 시트 이미지 경로 (상대/절대)
 * - SPRITE_COLS / SPRITE_ROWS: 시트의 가로/세로 셀 수 (정확히 알면 설정)
 * - 기본적으로 pokemonStats의 각 항목에 (선택적으로) Sprite_Index 또는 Sprite_Col / Sprite_Row 필드를 사용.
 *   - Sprite_Index : 0 기반 인덱스 (왼쪽위가 0, 오른쪽으로 증가)
 *   - Sprite_Col / Sprite_Row : 각각 0 기반 좌표
 * - 둘 다 없으면 인덱스 0 위치를 사용(나중에 데이터와 맞추어 설정 필요).
 */

const SPRITE_SHEET_URL = "./Pixel_image.png"; // <-- 네 스프라이트 시트 파일 경로로 바꿔
const SPRITE_COLS = 44; // 시트의 컬럼 수 (네가 언급한 값)
const SPRITE_ROWS = 31; // 시트의 로우 수 (네가 언급한 값)
const SPRITE_PADDING_RATIO = 0.3; // 셀 크기의 몇 % 만큼 확장해서 잘라올지 (0.0 ~ 0.4 권장)
let SPRITE_IMG = new Image();
SPRITE_IMG.src = SPRITE_SHEET_URL;
SPRITE_IMG.crossOrigin = "anonymous"; // CORS 환경이면 적절히 설정

// ---------- TYPE ICON SPRITE ----------
const TYPE_ICON_SHEET_URL = "./Type_Icon.png";
const TYPE_ICON_COLS = 6;
const TYPE_ICON_ROWS = 3;

const TYPE_ICON_ORDER = [
  ["페어리","에스퍼","격투","바위","불꽃","강철"],
  ["물","비행","고스트","풀","벌레","땅"],
  ["얼음","악","드래곤","노말","전기","독"]
];

const TYPE_ICON_POS = {};
TYPE_ICON_ORDER.forEach((row, r) => {
  row.forEach((type, c) => {
    TYPE_ICON_POS[type] = { col: c, row: r };
  });
});

let TYPE_ICON_IMG = new Image();
TYPE_ICON_IMG.src = TYPE_ICON_SHEET_URL;
TYPE_ICON_IMG.crossOrigin = "anonymous";
let typeIconLoaded = false;
TYPE_ICON_IMG.onload = () => { typeIconLoaded = true; };

// 이미지 로드 상태 추적(뭐든지 호출 전에 로드되었으면 바로 그려지고, 아니면 로드 완료 시 자동으로 시도)
let spriteImgLoaded = false;
SPRITE_IMG.onload = () => { spriteImgLoaded = true; };

// drawSpriteFor(pokemonObj) : pokemonObj에서 위치 정보 찾고 캔버스에 그리기
function drawSpriteFor(pokemonObj) {
  if (!pokemonObj) return;
  const canvas = document.getElementById("spriteCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  if (!spriteImgLoaded) {
    SPRITE_IMG.onload = () => { spriteImgLoaded = true; drawSpriteFor(pokemonObj); };
    return;
  }

// --- 위치 찾기 ---
let col = 0, row = 0;
if (typeof pokemonObj.Sprite_Col === "number" && typeof pokemonObj.Sprite_Row === "number") {
  col = pokemonObj.Sprite_Col - 1;
  row = pokemonObj.Sprite_Row - 1;
} else if (typeof pokemonObj.Sprite_Index === "number") {
  let idx = pokemonObj.Sprite_Index;
  // 🔹 원시 포켓몬이면 시트에서 시작 인덱스만큼 보정
  if (pokemonObj.Form === "원시") {
    const primalOffset = 1200; // 시트에서 원시 포켓몬이 시작되는 인덱스로 바꿀 것
    idx += primalOffset;
  }
  col = idx % SPRITE_COLS;
  row = Math.floor(idx / SPRITE_COLS);
} else {
    col = pokemonObj.Sprite_Index % SPRITE_COLS;
    row = Math.floor(pokemonObj.Sprite_Index / SPRITE_COLS);
  }

  const sheetW = SPRITE_IMG.naturalWidth;
  const sheetH = SPRITE_IMG.naturalHeight;
  const cellW = Math.floor(sheetW / SPRITE_COLS);
  const cellH = Math.floor(sheetH / SPRITE_ROWS);

  const padX = Math.floor(cellW * SPRITE_PADDING_RATIO);
  const padY = Math.floor(cellH * SPRITE_PADDING_RATIO);

  const sx = Math.max(0, col * cellW - padX);
  const sy = Math.max(0, row * cellH - padY);
  const sWidth = Math.min(sheetW - sx, cellW + padX * 2);
  const sHeight = Math.min(sheetH - sy, cellH + padY * 2);

  // 오프스크린 캔버스에 잘라오기
  const off = document.createElement("canvas");
  off.width = sWidth;
  off.height = sHeight;
  const offCtx = off.getContext("2d");
  offCtx.drawImage(SPRITE_IMG, sx, sy, sWidth, sHeight, 0, 0, sWidth, sHeight);

  const imgData = offCtx.getImageData(0, 0, sWidth, sHeight);
  const data = imgData.data;
  const width = sWidth, height = sHeight;

  function idx(x, y){ return (y*width + x) * 4; }
  function isOpaque(x, y){ return data[idx(x, y) + 3] > 10; }

  // --- BFS로 연결 영역 찾기 ---
  const visited = new Uint8Array(width * height);
  const stack = [];
  const centerX = Math.floor(width / 2);
  const centerY = Math.floor(height / 2);
  if (isOpaque(centerX, centerY)) {
    stack.push([centerX, centerY]);
    visited[centerY * width + centerX] = 1;
  } else {
    // 주변 탐색
    let found = false;
    for (let r = 0; r <= Math.max(4, Math.floor(Math.min(cellW, cellH)/4)) && !found; r++) {
      for (let dy = -r; dy <= r && !found; dy++) {
        for (let dx = -r; dx <= r && !found; dx++) {
          const x = centerX + dx, y = centerY + dy;
          if (x>=0 && y>=0 && x<width && y<height && isOpaque(x, y)) {
            stack.push([x, y]);
            visited[y*width + x] = 1;
            found = true;
          }
        }
      }
    }
  }

  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
  while(stack.length){
    const [x, y] = stack.pop();
    for (let [dx, dy] of dirs){
      const nx = x + dx, ny = y + dy;
      if (nx<0||ny<0||nx>=width||ny>=height) continue;
      const pos = ny*width + nx;
      if (visited[pos] || !isOpaque(nx,ny)) continue;
      visited[pos] = 1;
      stack.push([nx,ny]);
    }
  }

  // 비투명 영역만 남기고 나머지는 투명화
  for (let y = 0; y < height; y++){
    for (let x = 0; x < width; x++){
      if (!visited[y*width + x]) data[idx(x,y)+3] = 0;
    }
  }
  offCtx.putImageData(imgData, 0, 0);

// 비투명 영역 바운딩 박스 계산
let minX = width, minY = height, maxX = 0, maxY = 0;
for (let y=0; y<height; y++){
  for (let x=0; x<width; x++){
    if (visited[y*width + x]){
      if(x<minX) minX=x;
      if(y<minY) minY=y;
      if(x>maxX) maxX=x;
      if(y>maxY) maxY=y;
    }
  }
}

const boundW = maxX - minX + 1;
const boundH = maxY - minY + 1;

// 오프스크린 캔버스에서 실제 영역만 추출
const boundCanvas = document.createElement("canvas");
boundCanvas.width = boundW;
boundCanvas.height = boundH;
const boundCtx = boundCanvas.getContext("2d");
boundCtx.putImageData(offCtx.getImageData(minX, minY, boundW, boundH), 0, 0);

// container 크기
const container = document.getElementById("spriteContainer");
const maxW = container.clientWidth;
const maxH = container.clientHeight;

// 비율 맞춰 스케일
const scale = Math.min(maxW / boundW, maxH / boundH) * 0.9;
const drawW = boundW * scale;
const drawH = boundH * scale;

// 캔버스 크기: container와 같게
canvas.width = maxW;
canvas.height = maxH;
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.imageSmoothingEnabled = false;

// 중앙 배치 전에 추가
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.imageSmoothingEnabled = false;

// ✅ 그림자 포켓몬이면 배경 깔기
const megaSelectValue = document.getElementById("megaSelect").value;
if (megaSelectValue === "그림자" && shadowBgLoaded) {
  // 캔버스 전체 크기에 맞춰 그림자 배경 그리기
  ctx.drawImage(shadowBgImg, 0, 0, canvas.width, canvas.height);
}
// 중앙 배치
ctx.drawImage(boundCanvas, 0, 0, boundW, boundH, (maxW-drawW)/2, (maxH-drawH)/2, drawW, drawH);
}

// ===============================
// 타입 아이콘 스마트 렌더링
// ===============================
const TYPE_ICON_PADDING_RATIO = 0.15;

function drawTypeIconSmart(typeName, canvas) {
  if (!typeIconLoaded || !TYPE_ICON_POS[typeName] || !canvas) return;

  const ctx = canvas.getContext("2d");

  const sheetW = TYPE_ICON_IMG.naturalWidth;
  const sheetH = TYPE_ICON_IMG.naturalHeight;
  const cellW = Math.floor(sheetW / TYPE_ICON_COLS);
  const cellH = Math.floor(sheetH / TYPE_ICON_ROWS);

  const { col, row } = TYPE_ICON_POS[typeName];

  const padX = Math.floor(cellW * TYPE_ICON_PADDING_RATIO);
  const padY = Math.floor(cellH * TYPE_ICON_PADDING_RATIO);

  const sx = Math.max(0, col * cellW - padX);
  const sy = Math.max(0, row * cellH - padY);
  const sWidth = Math.min(sheetW - sx, cellW + padX * 2);
  const sHeight = Math.min(sheetH - sy, cellH + padY * 2);

  const off = document.createElement("canvas");
  off.width = sWidth;
  off.height = sHeight;
  const offCtx = off.getContext("2d");
  offCtx.drawImage(TYPE_ICON_IMG, sx, sy, sWidth, sHeight, 0, 0, sWidth, sHeight);

  const imgData = offCtx.getImageData(0, 0, sWidth, sHeight);
  const data = imgData.data;

  function idx(x, y) { return (y * sWidth + x) * 4; }
  function isOpaque(x, y) { return data[idx(x, y) + 3] > 10; }

  const visited = new Uint8Array(sWidth * sHeight);
  const stack = [];
  const cx = Math.floor(sWidth / 2);
  const cy = Math.floor(sHeight / 2);

  if (isOpaque(cx, cy)) {
    stack.push([cx, cy]);
    visited[cy * sWidth + cx] = 1;
  }

  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
  while (stack.length) {
    const [x, y] = stack.pop();
    for (const [dx, dy] of dirs) {
      const nx = x + dx, ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= sWidth || ny >= sHeight) continue;
      const p = ny * sWidth + nx;
      if (visited[p] || !isOpaque(nx, ny)) continue;
      visited[p] = 1;
      stack.push([nx, ny]);
    }
  }

  for (let y = 0; y < sHeight; y++) {
    for (let x = 0; x < sWidth; x++) {
      if (!visited[y * sWidth + x]) data[idx(x, y) + 3] = 0;
    }
  }
  offCtx.putImageData(imgData, 0, 0);

  let minX = sWidth, minY = sHeight, maxX = 0, maxY = 0;
  for (let y = 0; y < sHeight; y++) {
    for (let x = 0; x < sWidth; x++) {
      if (visited[y * sWidth + x]) {
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
    }
  }

  const bw = maxX - minX + 1;
  const bh = maxY - minY + 1;

  const bound = document.createElement("canvas");
  bound.width = bw;
  bound.height = bh;
  bound.getContext("2d").putImageData(
    offCtx.getImageData(minX, minY, bw, bh),
    0, 0
  );

  const rect = canvas.getBoundingClientRect();
  const size = Math.min(rect.width, rect.height) || 20;

  canvas.width = size;
  canvas.height = size;

  const scale = Math.min(size / bw, size / bh) * 0.9;
  const dw = bw * scale;
  const dh = bh * scale;

  ctx.clearRect(0, 0, size, size);
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(bound, (size - dw) / 2, (size - dh) / 2, dw, dh);
}

// ===============================
// 타입 아이콘 캐싱 렌더링
// ===============================
const typeIconCache = {};

function drawTypeIconSmartCached(type, canvas) {
  if (!canvas) return;

  const rect = canvas.getBoundingClientRect();
  const size = Math.min(rect.width, rect.height) || 20;

  const ctx = canvas.getContext("2d");
  canvas.width = size;
  canvas.height = size;

  if (typeIconCache[type]) {
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(typeIconCache[type], 0, 0, size, size);
    return;
  }

  const temp = document.createElement("canvas");
  temp.width = temp.height = 128;
  drawTypeIconSmart(type, temp);

  typeIconCache[type] = temp;

  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(temp, 0, 0, size, size);
}

// -----------------------------
// 추가 기능: 추천표 / DPS 계산 / 팝업 / 캔버스 그리기 보조
// 위치: drawSpriteFor 함수의 끝 바로 다음에 붙여넣기
// -----------------------------

/**
 * drawSpriteToCanvas(pokemonObj, canvasEl)
 * - drawSpriteFor의 로직을 재사용(중앙 배치, 바운딩 등)
 * - 가볍게 범용화: popup의 큰 canvas, 테이블의 작은 canvas 등 모두 사용 가능
 * - (최소 수정 원칙으로 drawSpriteFor는 그대로 두고 보조로 추가)
 */
function drawSpriteToCanvas(pokemonObj, canvas) {
  if (!pokemonObj || !canvas) return;
  const ctx = canvas.getContext("2d");

  if (!spriteImgLoaded) {
    SPRITE_IMG.onload = () => { spriteImgLoaded = true; drawSpriteToCanvas(pokemonObj, canvas); };
    return;
  }

  // --- 위치 찾기 (drawSpriteFor와 동일) ---
  let col = 0, row = 0;
  if (typeof pokemonObj.Sprite_Col === "number" && typeof pokemonObj.Sprite_Row === "number") {
    col = pokemonObj.Sprite_Col - 1;
    row = pokemonObj.Sprite_Row - 1;
  } else if (typeof pokemonObj.Sprite_Index === "number") {
    let idx = pokemonObj.Sprite_Index;
    if (pokemonObj.Form === "원시") {
      const primalOffset = 1200; // 필요시 조정
      idx += primalOffset;
    }
    col = idx % SPRITE_COLS;
    row = Math.floor(idx / SPRITE_COLS);
  } else {
    col = (pokemonObj.Sprite_Index || 0) % SPRITE_COLS;
    row = Math.floor((pokemonObj.Sprite_Index || 0) / SPRITE_COLS);
  }

  const sheetW = SPRITE_IMG.naturalWidth;
  const sheetH = SPRITE_IMG.naturalHeight;
  const cellW = Math.floor(sheetW / SPRITE_COLS);
  const cellH = Math.floor(sheetH / SPRITE_ROWS);

  const padX = Math.floor(cellW * SPRITE_PADDING_RATIO);
  const padY = Math.floor(cellH * SPRITE_PADDING_RATIO);

  const sx = Math.max(0, col * cellW - padX);
  const sy = Math.max(0, row * cellH - padY);
  const sWidth = Math.min(sheetW - sx, cellW + padX * 2);
  const sHeight = Math.min(sheetH - sy, cellH + padY * 2);

  const off = document.createElement("canvas");
  off.width = sWidth; off.height = sHeight;
  const offCtx = off.getContext("2d");
  offCtx.drawImage(SPRITE_IMG, sx, sy, sWidth, sHeight, 0, 0, sWidth, sHeight);

  // (간단화) — 투명도 기반 바운딩을 동일하게 수행
  const imgData = offCtx.getImageData(0, 0, sWidth, sHeight);
  const data = imgData.data;
  const width = sWidth, height = sHeight;
  function idx2(x, y){ return (y*width + x) * 4; }
  function isOpaque2(x, y){ return data[idx2(x, y) + 3] > 10; }

  const visited = new Uint8Array(width * height);
  const stack = [];
  const centerX = Math.floor(width / 2);
  const centerY = Math.floor(height / 2);
  if (isOpaque2(centerX, centerY)) {
    stack.push([centerX, centerY]);
    visited[centerY * width + centerX] = 1;
  } else {
    let found = false;
    for (let r = 0; r <= Math.max(4, Math.floor(Math.min(cellW, cellH)/4)) && !found; r++) {
      for (let dy = -r; dy <= r && !found; dy++) {
        for (let dx = -r; dx <= r && !found; dx++) {
          const x = centerX + dx, y = centerY + dy;
          if (x>=0 && y>=0 && x<width && y<height && isOpaque2(x, y)) {
            stack.push([x, y]);
            visited[y*width + x] = 1;
            found = true;
          }
        }
      }
    }
  }
  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
  while(stack.length){
    const [x, y] = stack.pop();
    for (let [dx, dy] of dirs){
      const nx = x + dx, ny = y + dy;
      if (nx<0||ny<0||nx>=width||ny>=height) continue;
      const pos = ny*width + nx;
      if (visited[pos] || !isOpaque2(nx,ny)) continue;
      visited[pos] = 1;
      stack.push([nx,ny]);
    }
  }
  for (let y = 0; y < height; y++){
    for (let x = 0; x < width; x++){
      if (!visited[y*width + x]) data[idx2(x,y)+3] = 0;
    }
  }
  offCtx.putImageData(imgData, 0, 0);

  let minX = width, minY = height, maxX = 0, maxY = 0;
  for (let y=0; y<height; y++){
    for (let x=0; x<width; x++){
      if (visited[y*width + x]){
        if(x<minX) minX=x;
        if(y<minY) minY=y;
        if(x>maxX) maxX=x;
        if(y>maxY) maxY=y;
      }
    }
  }
  const boundW = Math.max(1, maxX - minX + 1);
  const boundH = Math.max(1, maxY - minY + 1);

  const boundCanvas = document.createElement("canvas");
  boundCanvas.width = boundW; boundCanvas.height = boundH;
  const boundCtx = boundCanvas.getContext("2d");
  boundCtx.putImageData(offCtx.getImageData(minX, minY, boundW, boundH), 0, 0);

  // 캔버스 크기 조정
  const maxW = canvas.clientWidth || canvas.width || 160;
  const maxH = canvas.clientHeight || canvas.height || 160;
  const scale = Math.min(maxW / boundW, maxH / boundH) * 0.9;
  const drawW = boundW * scale, drawH = boundH * scale;

  canvas.width = maxW; canvas.height = maxH;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.imageSmoothingEnabled = false;

  // 🔹 추천 포켓몬 표 캔버스 그림자 표시 (행의 포켓몬 기준)
if (pokemonObj.Form === "그림자" && shadowBgLoaded) {
  ctx.drawImage(shadowBgImg, 0, 0, canvas.width, canvas.height);
}

  ctx.drawImage(boundCanvas, 0, 0, boundW, boundH, (canvas.width-drawW)/2, (canvas.height-drawH)/2, drawW, drawH);
}

/**
 * calculateFinalDPS(attacker, defender, normalSkillObj, specialSkillObj, selectedWeather, megaSelectValue)
 * - 구현한 공식 기준으로 Final DPS 계산 (너가 준 수식 따라서)
 * - 불완전한 데이터 필드(방어력, 에너지 등)는 안전하게 대체값을 사용
 */
function calculateFinalDPS(attacker, defender, normalSkillObj, specialSkillObj, selectedWeather, megaSelectValue) {
  // 안전한 값 추출 (데이터 키가 다르면 여길 수정)
  const attackerAtk = attacker.ATK ?? attacker.atk ?? 1;
  const defenderDef = defender.DEF ?? defender.def ?? 1;

  // skill fields (PWR, Duration, Energy/ENG 등) — 여러 후보 체크
  const normalPWR = normalSkillObj?.PWR ?? normalSkillObj?.Power ?? 0;
  const normalDuration = normalSkillObj?.Duration ?? normalSkillObj?.duration ?? 1;
  const normalENG = normalSkillObj?.ENG ?? normalSkillObj?.Energy ?? normalSkillObj?.EnergyGain ?? normalSkillObj?.EnergyPerUse ?? 0;

  const specialPWR = specialSkillObj?.PWR ?? specialSkillObj?.Power ?? 0;
  const specialDuration = specialSkillObj?.Duration ?? specialSkillObj?.duration ?? 1;
  const specialENG = specialSkillObj?.ENG ?? specialSkillObj?.Energy ?? specialSkillObj?.EnergyCost ?? specialSkillObj?.EnergyRequired ?? 0;

// MS = 포켓몬의 형태 보정만 담당
const attackerForm = attacker.Form ?? "";

// --- 변경: 노말/스페셜 타입 분리 ---
const normalType = normalSkillObj?.Skill_Type ?? normalSkillObj?.SkillType ?? "";
const specialType = specialSkillObj?.Skill_Type ?? specialSkillObj?.SkillType ?? "";
const attackerTypes = [attacker.Pokemon_Type1, attacker.Pokemon_Type2].filter(Boolean);

// --- 형태 보정 MS : 그림자만 적용 ---
let MS = 1;
if (attackerForm === "그림자") {
  MS = 1.2;
}

// --- 변경: O (STAB) 노말/스페셜 분리 ---
const O_normal = attackerTypes.includes(normalType) ? 1.2 : 1;
const O_special = attackerTypes.includes(specialType) ? 1.2 : 1;

// --- 변경: typeMult (상성 × 날씨 × 방어 그림자) 노말/스페셜 분리 ---
const calcTypeMult = (moveType) => {
  let mult = 1;
  if (moveType && defender) {
    const defTypes = [defender.Pokemon_Type1, defender.Pokemon_Type2].filter(Boolean);
    defTypes.forEach(dt => {
      if (typeChart[moveType] && typeChart[moveType][dt] !== undefined) {
        mult *= typeChart[moveType][dt];
      }
    });
  }
  // 날씨 보정 (moveType 기준)
  if ((weatherBoosts[selectedWeather] || []).includes(moveType)) mult *= 1.2;
  // 방어 포켓몬이 그림자면 추가 적용 (요구사항)
  if (defender.Form === "그림자") mult *= 1.2;
  return mult;
};

const typeMult_normal = calcTypeMult(normalType);
const typeMult_special = calcTypeMult(specialType);

// ENS = 초당 획득 에너지 (normal) — 기존 유지
const ENS = normalENG / normalDuration || 0.0000001; // 0으로 나누는 것 방지

const normalDPS =
  0.5 * normalPWR * attackerAtk * MS * O_normal * typeMult_normal
  / (defenderDef * normalDuration);

const specialDamage =
  0.5 * specialPWR * attackerAtk * MS * O_special * typeMult_special
  / defenderDef;

  // FET (초) = specialENG / ENS
  const FET = specialENG / ENS || 0;

  // Final DPS = (NormalDPS * FET + SpecialDamage) / (FET + specialDuration)
  const finalDPS = ((normalDPS * FET) + specialDamage) / (FET + specialDuration);

  // 안전 장치: 유한값으로 내보냄
  return Number.isFinite(finalDPS) ? finalDPS : 0;
}

/**
 * buildRecommendationList(selectedDefender, weather, megaSelectValue)
 * - 전체 pokemonStats를 순회하면서 (각 포켓몬의) 모든 노말/스페셜 조합의 Final DPS 최대값을 구함
 * - 리턴: [{ id, name, types, bestNormal, bestSpecial, bestDPS, spriteRef }, ...]
 */
function buildRecommendationList(selectedDefender, weather, megaSelectValue) {
  if (!selectedDefender) return [];

  const list = [];

  // helper: find skill obj by name
  const getSkillObj = (name) => pokemonSkills.find(s => s.Skill_Name === name) || pokemonSkills.find(s => s.SkillName === name);

  for (let p of pokemonStats) {
    const fastMoves = [...(p.Fast_Moves || []), ...(p.Elite_Fast_Moves || [])];
    const chargedMoves = [...(p.Charged_Moves || []), ...(p.Elite_Charged_Moves || [])];

    let bestDPS = 0;
    let bestPair = { normal: null, special: null };

    for (let fmName of fastMoves) {
      const fm = getSkillObj(fmName);
      if (!fm) continue;
      for (let cmName of chargedMoves) {
        const cm = getSkillObj(cmName);
        if (!cm) continue;
        const dps = calculateFinalDPS(p, selectedDefender, fm, cm, weather, megaSelectValue);
        if (dps > bestDPS) {
          bestDPS = dps;
          bestPair = { normal: fm, special: cm };
        }
      }
    }

    // 기본값 처리: 만약 기술 목록이 비어있으면 skip
    if (!bestPair.normal || !bestPair.special) continue;

    list.push({
      id: p.Pokemon_Name + (p.Form ? ("|" + p.Form) : ""),
      name: p.Pokemon_Name,
      form: p.Form || "일반",
      types: [p.Pokemon_Type1].concat(p.Pokemon_Type2 ? [p.Pokemon_Type2] : []),
      bestNormal: bestPair.normal.Skill_Name || bestPair.normal.SkillName,
      bestSpecial: bestPair.special.Skill_Name || bestPair.special.SkillName,
      bestDPS,
      spriteRef: p // 전달해서 drawSpriteToCanvas에 바로 사용
    });
  }

  // DPS 내림차순 정렬, 상위 30개만 (성능 이유)
  list.sort((a,b) => b.bestDPS - a.bestDPS);
  return list.slice(0, 30);
}

/**
 * renderRecommendationTable(list)
 * - recommendationTable DIV에 표 렌더링
 * - 각 행의 작은 canvas에 drawSpriteToCanvas로 이미지 그리기
 * - 행 클릭시 showPokemonDetail 호출
 */
function renderRecommendationTable(list) {
  const container = document.getElementById("recommendationTable");
  if (!container) return;

  let html = `<h3>추천 포켓몬</h3>
              <table>
                <thead><tr><th>이미지</th><th>이름</th><th>타입</th><th>노말</th><th>스페셜</th><th>DPS</th></tr></thead><tbody>`;

list.forEach((it, idx) => {
  // 🔹 엘리트 여부 판단
  const fmIsElite = (it.spriteRef.Elite_Fast_Moves || []).includes(it.bestNormal);
  const cmIsElite = (it.spriteRef.Elite_Charged_Moves || []).includes(it.bestSpecial);

  html += `<tr class="rec-row" data-idx="${idx}">
    <td><canvas id="rec-canvas-${idx}" width="48" height="48"></canvas></td>
    <td>${it.name} ${it.form === "일반" ? "" : `(${it.form})`}</td>
    <td>
      ${it.types.map(t =>
        `<canvas class="type-icon" data-type="${t}"></canvas>`
      ).join("")}
    </td>
    <td class="${fmIsElite ? 'elite' : ''}">${it.bestNormal}</td>
    <td class="${cmIsElite ? 'elite' : ''}">${it.bestSpecial}</td>
    <td>${it.bestDPS.toFixed(2)}</td>
  </tr>`;
});

  html += `</tbody></table>`;
  container.innerHTML = html;

  // ✅ 추천 포켓몬 표 타입 아이콘 그리기 (이게 빠져있었음)
  container.querySelectorAll("canvas.type-icon").forEach(c => {
    drawTypeIconSmartCached(c.dataset.type, c);
  });

  // 캔버스에 스프라이트 그리기 & 클릭 이벤트 바인딩
  list.forEach((it, idx) => {
    const canvas = document.getElementById(`rec-canvas-${idx}`);
    if (canvas) drawSpriteToCanvas(it.spriteRef, canvas);
    const row = container.querySelector(`tr[data-idx="${idx}"]`);
    if (row) {
      row.addEventListener("click", () => showPokemonDetail(it));
    }
  });
}

/**
 * showPokemonDetail(item)
 * - item: { id, name, form, types, bestNormal, bestSpecial, bestDPS, spriteRef }
 * - 팝업에 큰 이미지 + 상세정보(노말/스페셜 리스트 등) 표시
 */
function showPokemonDetail(item) {
  const popup = document.getElementById("pokemonDetailPopup");
  if (!popup) return;

  // 원본 데이터에서 모든 기술 가져오기
  const pObj = item.spriteRef;
  const fastMoves = [...(pObj.Fast_Moves || []), ...(pObj.Elite_Fast_Moves || [])];
  const chargedMoves = [...(pObj.Charged_Moves || []), ...(pObj.Elite_Charged_Moves || [])];

  // 팝업 HTML: 좌측 원형 이미지, 우측 3행 구조
  const html = `
    <div class="popup-box" role="document">
      <div class="popup-grid">
        <!-- 좌측 원형 이미지 -->
        <div class="popup-image-wrapper">
          <canvas id="popupSpriteCanvas" width="160" height="160"></canvas>
        </div>

<div class="popup-info">
  <!-- 1️⃣ 이름 + 타입 첫 행 (표) -->
  <table class="popup-info-table">
    <tr>
      <th>포켓몬 이름</th>
      <td>${item.name} ${item.form === "일반" ? "" : `(${item.form})`}</td>
      <th>타입</th>
      <td>
        ${item.types.map(t =>
          `<canvas class="type-icon" data-type="${t}"></canvas>`
        ).join("")}
      </td>
    </tr>
  </table>

  <!-- 2️⃣ 기존 노말+스페셜 기술 표 유지 -->
  <div class="popup-skills" style="margin-top:8px;">
    <table style="width:100%; border-collapse: collapse;">
      <tr>
        <th style="border:1px solid #ccc; padding:4px;">노말 기술</th>
        <th style="border:1px solid #ccc; padding:4px;">스페셜 기술</th>
      </tr>
      ${(() => {
        const maxRows = Math.max(fastMoves.length, chargedMoves.length);
        let rowsHTML = "";
        for (let i = 0; i < maxRows; i++) {
  const fm = fastMoves[i] || "";
  const cm = chargedMoves[i] || "";

  // 엘리트 여부 판단
  const fmIsElite = (pObj.Elite_Fast_Moves || []).includes(fm);
  const cmIsElite = (pObj.Elite_Charged_Moves || []).includes(cm);

const fmObj = pokemonSkills.find(s => s.Skill_Name === fm);
const cmObj = pokemonSkills.find(s => s.Skill_Name === cm);

rowsHTML += `<tr>
  <td class="${fmIsElite ? 'elite' : ''}">
    ${fmObj ? `<canvas class="type-icon" data-type="${fmObj.Skill_Type}"></canvas>` : ""}
    ${fm || ""}
  </td>
  <td class="${cmIsElite ? 'elite' : ''}">
    ${cmObj ? `<canvas class="type-icon" data-type="${cmObj.Skill_Type}"></canvas>` : ""}
    ${cm || ""}
  </td>
</tr>`;
}
        return rowsHTML;
      })()}
    </table>
  </div>
</div>
      </div>
    </div>
  `;

  popup.innerHTML = html;
  popup.classList.remove("hidden");
  popup.setAttribute("aria-hidden", "false");

  // 캔버스에 스프라이트 렌더링
  const canvas = document.getElementById("popupSpriteCanvas");
  if (canvas) drawSpriteToCanvas(pObj, canvas);
  popup.querySelectorAll("canvas.type-icon").forEach(c => {
    drawTypeIconSmartCached(c.dataset.type, c);
  });

  // 팝업 바깥 클릭 시 닫기
function closePopup() {
  popup.classList.add("hidden");
  popup.setAttribute("aria-hidden", "true");
  popup.innerHTML = "";
}

popup.addEventListener("click", (ev) => {
  if (ev.target === popup) closePopup();
});
}

// -----------------------------
// 끝: 추가 기능
// -----------------------------

// -----------------------------------------
// 🔹 포켓몬 데이터 변환 처리
// -----------------------------------------
const pokemonData = {};

pokemonStats.forEach(p => {
  const typeArr = [p.Pokemon_Type1];
  if (p.Pokemon_Type2 && p.Pokemon_Type2 !== "") typeArr.push(p.Pokemon_Type2);

  const key = (p.Form === "메가" || p.Form === "원시") ? "메가" + p.Pokemon_Name :
          (p.Form === "그림자" ? "그림자" + p.Pokemon_Name : p.Pokemon_Name);

  pokemonData[key] = {
    types: typeArr,
    dps: p.ATK // 임시 DPS 기준
  };
});

console.log("변환된 포켓몬 데이터 확인:", pokemonData);

// 🔹 추천 검색어 datalist 초기화
const datalist = document.getElementById("pokemonList");

// 페이지 로딩 시 전체 포켓몬 리스트로 datalist 채우기
Object.keys(pokemonData).forEach(name => {
  const option = document.createElement("option");
  option.value = name;
  datalist.appendChild(option);
});

// 🔹 megaSelect 선택 변경 시 datalist 갱신
const megaSelect = document.getElementById("megaSelect");

megaSelect.addEventListener("change", () => {
  const megaValue = megaSelect.value;
  datalist.innerHTML = ""; // 기존 옵션 초기화

Object.keys(pokemonData).forEach(key => {
  let displayName = key.replace(/^메가|^원시|^그림자/, ""); // 접두사 제거
  if (megaValue === "메가" && key.startsWith("메가")) {
    datalist.appendChild(new Option(displayName));
  } else if (megaValue === "그림자" && key.startsWith("그림자")) {
    datalist.appendChild(new Option(displayName));
  } else if (megaValue === "일반" && !key.startsWith("메가") && !key.startsWith("원시") && !key.startsWith("그림자")) {
    datalist.appendChild(new Option(displayName));
  }
});
});

// -----------------------------------------
// 🔹 타입 상성표
// -----------------------------------------
const typeChart = {
  "노말":{"노말":1,"불꽃":1,"물":1,"풀":1,"전기":1,"얼음":1,"격투":1,"독":1,"땅":1,"비행":1,"에스퍼":1,"벌레":1,"바위":0.625,"고스트":0.39,"드래곤":1,"악":1,"강철":0.625,"페어리":1},
  "불꽃":{"노말":1,"불꽃":0.625,"물":0.625,"풀":1.6,"전기":1,"얼음":1.6,"격투":1,"독":1,"땅":1,"비행":1,"에스퍼":1,"벌레":1.6,"바위":0.625,"고스트":1,"드래곤":0.625,"악":1,"강철":1.6,"페어리":1},
  "물":{"노말":1,"불꽃":1.6,"물":0.625,"풀":0.625,"전기":1,"얼음":1,"격투":1,"독":1,"땅":1.6,"비행":1,"에스퍼":1,"벌레":1,"바위":1.6,"고스트":1,"드래곤":0.625,"악":1,"강철":1,"페어리":1},
  "풀":{"노말":1,"불꽃":0.625,"물":1.6,"풀":0.625,"전기":1,"얼음":1,"격투":1,"독":0.625,"땅":1.6,"비행":0.625,"에스퍼":1,"벌레":0.625,"바위":1.6,"고스트":1,"드래곤":0.625,"악":1,"강철":0.625,"페어리":1},
  "전기":{"노말":1,"불꽃":1,"물":1.6,"풀":0.625,"전기":0.625,"얼음":1,"격투":1,"독":1,"땅":0.39,"비행":1.6,"에스퍼":1,"벌레":1,"바위":1,"고스트":1,"드래곤":0.625,"악":1,"강철":1,"페어리":1},
  "얼음":{"노말":1,"불꽃":0.625,"물":0.625,"풀":1.6,"전기":1,"얼음":0.625,"격투":1,"독":1,"땅":1.6,"비행":1.6,"에스퍼":1,"벌레":1,"바위":1,"고스트":1,"드래곤":1.6,"악":1,"강철":0.625,"페어리":1},
  "격투":{"노말":1.6,"불꽃":1,"물":1,"풀":1,"전기":1,"얼음":1.6,"격투":1,"독":0.625,"땅":1,"비행":0.625,"에스퍼":0.625,"벌레":0.625,"바위":1.6,"고스트":0.39,"드래곤":1,"악":1.6,"강철":1.6,"페어리":0.625},
  "독":{"노말":1,"불꽃":1,"물":1,"풀":1.6,"전기":1,"얼음":1,"격투":1,"독":0.625,"땅":0.625,"비행":1,"에스퍼":1,"벌레":1,"바위":0.625,"고스트":0.625,"드래곤":1,"악":1,"강철":0.39,"페어리":1.6},
  "땅":{"노말":1,"불꽃":1.6,"물":1,"풀":0.625,"전기":1.6,"얼음":1,"격투":1,"독":1.6,"땅":1,"비행":0.39,"에스퍼":1,"벌레":0.625,"바위":1.6,"고스트":1,"드래곤":1,"악":1,"강철":1.6,"페어리":1},
  "비행":{"노말":1,"불꽃":1,"물":1,"풀":1.6,"전기":0.625,"얼음":1,"격투":1.6,"독":1,"땅":1,"비행":1,"에스퍼":1,"벌레":1.6,"바위":0.625,"고스트":1,"드래곤":1,"악":1,"강철":0.625,"페어리":1},
  "에스퍼":{"노말":1,"불꽃":1,"물":1,"풀":1,"전기":1,"얼음":1,"격투":1.6,"독":1.6,"땅":1,"비행":1,"에스퍼":0.625,"벌레":1,"바위":1,"고스트":1,"드래곤":1,"악":0.39,"강철":0.625,"페어리":1},
  "벌레":{"노말":1,"불꽃":0.625,"물":1,"풀":1.6,"전기":1,"얼음":1,"격투":0.625,"독":0.625,"땅":1,"비행":0.625,"에스퍼":1.6,"벌레":1,"바위":1,"고스트":0.625,"드래곤":1,"악":1.6,"강철":0.625,"페어리":0.625},
  "바위":{"노말":1,"불꽃":1.6,"물":1,"풀":1,"전기":1,"얼음":1.6,"격투":0.625,"독":1,"땅":0.625,"비행":1.6,"에스퍼":1,"벌레":1.6,"바위":1,"고스트":1,"드래곤":1,"악":1,"강철":0.625,"페어리":1},
  "고스트":{"노말":0.39,"불꽃":1,"물":1,"풀":1,"전기":1,"얼음":1,"격투":1,"독":1,"땅":1,"비행":1,"에스퍼":1.6,"벌레":1,"바위":1,"고스트":1.6,"드래곤":1,"악":0.625,"강철":1,"페어리":1},
  "드래곤":{"노말":1,"불꽃":1,"물":1,"풀":1,"전기":1,"얼음":1,"격투":1,"독":1,"땅":1,"비행":1,"에스퍼":1,"벌레":1,"바위":1,"고스트":1,"드래곤":1.6,"악":1,"강철":0.625,"페어리":0.39},
  "악":{"노말":1,"불꽃":1,"물":1,"풀":1,"전기":1,"얼음":1,"격투":0.625,"독":1,"땅":1,"비행":1,"에스퍼":1.6,"벌레":1,"바위":1,"고스트":1.6,"드래곤":1,"악":0.625,"강철":1,"페어리":0.625},
  "강철":{"노말":1,"불꽃":0.625,"물":0.625,"풀":1,"전기":0.625,"얼음":1.6,"격투":1,"독":1,"땅":1,"비행":1,"에스퍼":1,"벌레":1,"바위":1.6,"고스트":1,"드래곤":1,"악":1,"강철":0.625,"페어리":1.6},
  "페어리":{"노말":1,"불꽃":0.625,"물":1,"풀":1,"전기":1,"얼음":1,"격투":1.6,"독":0.625,"땅":1,"비행":1,"에스퍼":1,"벌레":1,"바위":1,"고스트":1,"드래곤":1.6,"악":1.6,"강철":0.625,"페어리":1}
};

// -----------------------------------------
// 🔹 날씨 보정
// -----------------------------------------
const weatherBoosts = {
  sunny: ["불꽃", "풀", "땅"],
  partlyCloudy: ["바위", "노말"],
  cloudy: ["격투", "독", "페어리"],
  rainy: ["물", "전기", "벌레"],
  snow: ["얼음", "강철"],
  windy: ["드래곤", "비행", "에스퍼"],
  fog: ["고스트", "악"]
};

// -----------------------------------------
// 🔹 UI 색상 규칙
// -----------------------------------------
function getMultiplierColor(multiplier) {
  if (multiplier >= 2) return "#16a34a";
  if (multiplier > 1) return "#86efac";
  if (multiplier === 1) return "#ffffff";
  if (multiplier > 0.5) return "#fecaca";
  return "#b91c1c";
}

// -----------------------------------------
// 🔹 포켓몬 계산 함수
// -----------------------------------------
window.calculate = function () {
  const name = document.getElementById("pokemonInput").value.trim();
  const mega = document.getElementById("megaSelect").value;
  const selectedWeather = document.getElementById("weatherSelect").value;

  // 🔹 Form 체크 로직
  const pokemonObj = pokemonStats.find(p =>
    p.Pokemon_Name === name &&
    ((mega === "메가" && (p.Form === "메가" || p.Form === "원시")) ||
      (mega === "그림자" && p.Form === "그림자") ||
      (mega === "일반" && p.Form === "일반"))
  );

  if (!pokemonObj) return alert("포켓몬을 찾을 수 없습니다.");

  const types = [pokemonObj.Pokemon_Type1];
  if (pokemonObj.Pokemon_Type2) types.push(pokemonObj.Pokemon_Type2);

  const boostedTypes = weatherBoosts[selectedWeather] || [];
  let resultArr = [];

  for (let atkType in typeChart) {
    let multiplierBeforeWeather = 1;
    for (let defType of types) {
      if (typeChart[atkType] && typeChart[atkType][defType] !== undefined)
        multiplierBeforeWeather *= typeChart[atkType][defType];
    }
// D(방어 포켓몬)가 그림자라면 상성 배율 *1.2
if (pokemonObj.Form === "그림자") {
    multiplierBeforeWeather *= 1.2;
}
    if (multiplierBeforeWeather === 1) continue;

    let multiplier = multiplierBeforeWeather;
    if (boostedTypes.includes(atkType)) multiplier *= 1.2;

    resultArr.push({ type: atkType, multiplier });
  }

  resultArr.sort((a, b) => b.multiplier - a.multiplier);

  // 🔹 포켓몬 기본 정보 테이블
  let pokemonInfoHTML = `
    <h3>포켓몬 정보</h3>
    <table style="width:100%; text-align:center; border:1px solid #ccc; margin-bottom:15px; table-layout:fixed; border-collapse:collapse; font-size:15px;">
      <tr>
        <td colspan="4" style="height:0; padding-bottom:70%; background:#f7f7f7; position:relative;">
          <div id="spriteContainer" style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); width:70%; height:70%; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.04); border:1px dashed #b5b5b5; border-radius:10px; image-rendering:pixelated;">
            <canvas id="spriteCanvas" style="image-rendering:pixelated; max-width:100%; max-height:100%;"></canvas>
          </div>
        </td>
      </tr>
      <tr>
        <th style="width:20%; padding:8px;">이름</th>
        <td style="width:30%; padding:8px; font-weight:600;">${name}</td>
        <th style="width:20%; padding:8px;">타입</th>
        <td style="width:30%; padding:8px;">
          ${types.map(t =>
            `<canvas class="type-icon" data-type="${t}"></canvas>`
          ).join("")}
        </td>
      </tr>
    </table>
  `;

  // 🔹 공격 유리 타입
  let html = `<h3>공격 유리 타입</h3>
              <table>
                <tr><th>타입</th><th>배율</th></tr>`;
  resultArr.forEach(r => {
    const color = getMultiplierColor(r.multiplier);
    html += `<tr style="background-color:${color};">
      <td><canvas class="type-icon" data-type="${r.type}"></canvas></td>
      <td>${r.multiplier.toFixed(2)}</td>
    </tr>`;
  });
  html += `</table>`;

  // 🔹 방어 유리 표
  const fastMoves = [...pokemonObj.Fast_Moves, ...pokemonObj.Elite_Fast_Moves];
  const chargedMoves = [...pokemonObj.Charged_Moves, ...pokemonObj.Elite_Charged_Moves];
  const maxRows = Math.max(fastMoves.length, chargedMoves.length);

  html += `<h3>방어 유리</h3>
           <table style="width:100%; text-align:center; border:1px solid #ccc; margin-top:15px;">
           <tr><th colspan="2">방어 상성</th></tr>
           <tr><th>노말 기술</th><th>스페셜 기술</th></tr>`;

  for (let i = 0; i < maxRows; i++) {
    const fastMove = fastMoves[i] || "";
    const chargedMove = chargedMoves[i] || "";

    let fastType = "", chargedType = "";
    let fastMoveDisplay = fastMove, chargedMoveDisplay = chargedMove;

    if (fastMove) {
      const skillObj = pokemonSkills.find(s => s.Skill_Name === fastMove);
      if (skillObj) fastType = skillObj.Skill_Type;
      fastMoveDisplay = fastMove
  ? `
    <span class="${pokemonObj.Elite_Fast_Moves.includes(fastMove) ? 'elite' : ''}">
      <canvas class="type-icon" data-type="${fastType}"></canvas>
      ${fastMove}
    </span>`
  : "";
    }

    if (chargedMove) {
      const skillObj = pokemonSkills.find(s => s.Skill_Name === chargedMove);
      if (skillObj) chargedType = skillObj.Skill_Type;
      chargedMoveDisplay = chargedMove
  ? `
    <span class="${pokemonObj.Elite_Charged_Moves.includes(chargedMove) ? 'elite' : ''}">
      <canvas class="type-icon" data-type="${chargedType}"></canvas>
      ${chargedMove}
    </span>`
  : "";
    }

    html += `<tr>
               <td ${fastMove ? `class="skill-item" data-name="${fastMove}" data-types="${types.join(",")}" data-weather="${selectedWeather}"` : ''}>${fastMoveDisplay}</td>
               <td ${chargedMove ? `class="skill-item" data-name="${chargedMove}" data-types="${types.join(",")}" data-weather="${selectedWeather}"` : ''}>${chargedMoveDisplay}</td>
             </tr>
             <tr class="skill-detail" style="display:none;"><td colspan="2"></td></tr>`;
  }
  html += `</table>`;

  // 🔹 위험 기술 계산
  let fastMoveDamages = [];
  let chargedMoveDamages = [];

  for (let move of fastMoves) {
    if (!move) continue;
    const skillObj = pokemonSkills.find(s => s.Skill_Name === move);
    if (!skillObj) continue;
    let multiplier = 1;
    if (types.includes(skillObj.Skill_Type)) multiplier *= 1.2;
    if ((weatherBoosts[selectedWeather] || []).includes(skillObj.Skill_Type)) multiplier *= 1.2;
    if (mega === "그림자") multiplier *= 1.2;
    if (mega === "메가" || name.includes("원시")) multiplier *= types.includes(skillObj.Skill_Type) ? 1.3 : 1.1;
    fastMoveDamages.push({ name: move, damage: (skillObj.PWR * multiplier / skillObj.Duration) });
  }

  for (let move of chargedMoves) {
    if (!move) continue;
    const skillObj = pokemonSkills.find(s => s.Skill_Name === move);
    if (!skillObj) continue;
    let multiplier = 1;
    if (types.includes(skillObj.Skill_Type)) multiplier *= 1.2;
    if ((weatherBoosts[selectedWeather] || []).includes(skillObj.Skill_Type)) multiplier *= 1.2;
    if (mega === "그림자") multiplier *= 1.2;
    if (mega === "메가" || name.includes("원시")) multiplier *= types.includes(skillObj.Skill_Type) ? 1.3 : 1.1;
    chargedMoveDamages.push({ name: move, damage: skillObj.PWR * multiplier });
  }

  const maxFast = fastMoveDamages.reduce((prev, curr) => (curr.damage > prev.damage ? curr : prev), { name: "없음", damage: 0 });
  const maxCharged = chargedMoveDamages.reduce((prev, curr) => (curr.damage > prev.damage ? curr : prev), { name: "없음", damage: 0 });

  html += `<div style="margin-top:15px; font-weight:600;">
             ⚠️ 위험 기술: 
             노말 - ${maxFast.name} (${maxFast.damage.toFixed(2)}), 
             스페셜 - ${maxCharged.name} (${maxCharged.damage.toFixed(2)})
           </div>`;

// ----------------- 추천 타입 -----------------
const atkTypesOver1 = resultArr.filter(r => r.multiplier > 1); // 기존 공격 유리 타입 유지

// 방어 기술 타입 및 상성값 수집
const allDefenseMoves = [...fastMoves, ...chargedMoves];

// 방어 1미만 타입별 카운트 초기화
let defenseTypeStats = {}; // {타입: 1미만 값 개수}

// 🟢 수정된 부분: 각 기술의 하위 폼까지 포함해서 타입별 1미만 개수 집계
allDefenseMoves.forEach(move => {
  if (!move) return;
  const skillObj = pokemonSkills.find(s => s.Skill_Name === move);
  if (!skillObj) return;

  const moveType = skillObj.Skill_Type;

  for (let defType in typeChart[moveType]) {
    const val = typeChart[moveType][defType];
    if (val < 1) {
      defenseTypeStats[defType] = (defenseTypeStats[defType] || 0) + 1;
    }
  }
});

// 추천 타입 배열 생성 (방어 1미만 개수만 반영)
const recommendation = atkTypesOver1.map(a => ({
  type: a.type,
  multiplier: a.multiplier,
  under1Count: defenseTypeStats[a.type] || 0 // 공격 타입이 방어 1미만 카운트에 포함
}));

// 정렬: 1순위 배율 내림차순, 2순위 under1Count 내림차순
recommendation.sort((a, b) => {
  if (b.multiplier !== a.multiplier) return b.multiplier - a.multiplier;
  return b.under1Count - a.under1Count;
});

// HTML 생성
let recHTML = `<h3>추천 타입</h3>
               <table>
                 <tr><th>타입</th><th>효과가 굉장한 공격 타입</th><th>효과가 별로인 기술</th></tr>`;

recommendation.forEach(r => {
  const color = getMultiplierColor(r.multiplier);
  recHTML += `<tr style="background-color:${color};">
                <td><canvas class="type-icon" data-type="${r.type}"></canvas></td>
                <td>${r.multiplier.toFixed(2)}</td>
                <td>${r.under1Count}</td>
              </tr>`;
});
recHTML += `</table>`;

// 기존 resultHTML 뒤에 추가
document.getElementById("result").innerHTML = pokemonInfoHTML + html + recHTML;
document.querySelectorAll("canvas.type-icon").forEach(c => {
  drawTypeIconSmartCached(c.dataset.type, c);
});

if (pokemonObj) drawSpriteFor(pokemonObj);
  // 추천 포켓몬 목록 생성 + 렌더링 (최소 변경)
  const recommendationList = buildRecommendationList(pokemonObj, selectedWeather, mega);
  renderRecommendationTable(recommendationList);
};

// -----------------------------------------
// 🔹 기술 상세 정보 아코디언 기능 (calculate 밖)
// -----------------------------------------
let openedSkill = null;

function renderSkillDetails(skillName, pokemonTypes, weather, megaSelectValue, pokemonName) {
  const skillObj = pokemonSkills.find(s => s.Skill_Name === skillName);
  if (!skillObj) return `<p>데이터 없음</p>`;

  const atkType = skillObj.Skill_Type;
  const pwr = skillObj.PWR;

  let multiplier = 1;
  if (pokemonTypes.includes(atkType)) multiplier *= 1.2;
  if ((weatherBoosts[weather] || []).includes(atkType)) multiplier *= 1.2;
// 검색 포켓몬이 그림자일 경우
if (megaSelectValue === "그림자") multiplier *= 1.2;

// 검색 포켓몬이 메가 또는 원시일 경우
if (megaSelectValue === "메가" || pokemonName.includes("원시")) {
  if (pokemonTypes.includes(atkType)) {
    multiplier *= 1.3; // 타입이 같을 경우
  } else {
    multiplier *= 1.1; // 타입이 다를 경우
  }
}

  let finalDamage;
if (skillObj.Slot === "노말") {
  finalDamage = ((pwr * multiplier) / skillObj.Duration).toFixed(2);  // 기존 DPS
} else {
  finalDamage = (pwr * multiplier).toFixed(2);  // Duration 없이 실제 데미지
}

const damageLabel = skillObj.Slot === "노말" ? "⚡ DPS" : "⚡ 실제 데미지";

  let defenseArr = [];
  for (let defType in typeChart[atkType]) {
    let value = typeChart[atkType][defType];
    if (value !== 1) defenseArr.push({ type: defType, value });
  }

  defenseArr.sort((a, b) => a.value - b.value);

  let table = `<table style="margin-top:10px;">
                <tr><th>타입</th><th>배율</th></tr>`;

  defenseArr.forEach(d => {
    const color = d.value > 1 ? "#fecaca" : "#bfdbfe";
    table += `<tr style="background:${color};"><td><canvas class="type-icon" data-type="${d.type}"></canvas></td><td>${d.value}</td></tr>`;
  });

  table += `</table>`;

  return `
<div>
  <p><strong>💥 기본 데미지:</strong> ${pwr}</p>
  <p><strong>${damageLabel}:</strong> ${finalDamage}</p>
  <h4>🛡 방어 상성</h4>
  ${table}
</div>

  `;
}

window.addEventListener("pointerup", e => {
  const clicked = e.target.closest(".skill-item"); // 자식 요소 클릭도 잡기
  if (!clicked) return;

  if (openedSkill === clicked) {
    const nextEl = clicked.parentElement.nextElementSibling;
    if (nextEl && nextEl.classList.contains("skill-detail")) nextEl.style.display = "none";
    openedSkill = null;
    return;
  }

  if (openedSkill) {
    const oldDetail = openedSkill.parentElement.nextElementSibling;
    if (oldDetail && oldDetail.classList.contains("skill-detail"))
      oldDetail.style.display = "none";
  }

  const skillName = clicked.dataset.name;
  const types = clicked.dataset.types.split(",");
  const weather = clicked.dataset.weather;
const megaSelectValue = document.getElementById("megaSelect").value;
const pokemonName = document.getElementById("pokemonInput").value.trim();

const detailRow = clicked.parentElement.nextElementSibling;
detailRow.querySelector("td").innerHTML = renderSkillDetails(skillName, types, weather, megaSelectValue, pokemonName);
detailRow.querySelectorAll("canvas.type-icon").forEach(c => {
  drawTypeIconSmartCached(c.dataset.type, c);
});
  detailRow.style.display = "table-row";

  openedSkill = clicked;
});
