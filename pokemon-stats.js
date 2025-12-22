console.log("pokemonStats.js loaded");

const pokemonStats = [
  {
    "Pokemon_ID": 1,
    "Form": "일반",
    "Pokemon_Name": "이상해씨",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "독",
    "Max_CP": 1260,
    "ATK": 118.0,
    "DEF": 111.0,
    "HP": 128,
    "Fast_Moves": [
      "덩굴채찍",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오물폭탄",
      "씨폭탄",
      "파워휩"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": "1-S",
    "Form": "그림자",
    "Pokemon_Name": "이상해씨",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "독",
    "Max_CP": 1260,
    "ATK": 118.0,
    "DEF": 111.0,
    "HP": 128,
    "Fast_Moves": [
      "덩굴채찍",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오물폭탄",
      "씨폭탄",
      "파워휩"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": 2,
    "Form": "일반",
    "Pokemon_Name": "이상해풀",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "독",
    "Max_CP": 1921,
    "ATK": 151.0,
    "DEF": 143.0,
    "HP": 155,
    "Fast_Moves": [
      "잎날가르기",
      "덩굴채찍"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오물폭탄",
      "솔라빔",
      "파워휩"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 2,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": "2-S",
    "Form": "그림자",
    "Pokemon_Name": "이상해풀",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "독",
    "Max_CP": 1921,
    "ATK": 151.0,
    "DEF": 143.0,
    "HP": 155,
    "Fast_Moves": [
      "잎날가르기",
      "덩굴채찍"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오물폭탄",
      "솔라빔",
      "파워휩"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 2,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": 3,
    "Form": "일반",
    "Pokemon_Name": "이상해꽃",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "독",
    "Max_CP": 3075,
    "ATK": 198.0,
    "DEF": 189.0,
    "HP": 190,
    "Fast_Moves": [
      "잎날가르기",
      "덩굴채찍"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오물폭탄",
      "꽃보라",
      "솔라빔",
      "오물공격"
    ],
    "Elite_Charged_Moves": [
      "하드플랜트"
    ],
    "Sprite_Col": 3,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": "3-M1",
    "Form": "메가",
    "Pokemon_Name": "이상해꽃",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "독",
    "Max_CP": 4181,
    "ATK": 241.0,
    "DEF": 246.0,
    "HP": 190,
    "Fast_Moves": [
      "잎날가르기",
      "덩굴채찍"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오물폭탄",
      "꽃보라",
      "솔라빔",
      "오물공격"
    ],
    "Elite_Charged_Moves": [
      "하드플랜트"
    ],
    "Sprite_Col": 4,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": "3-S",
    "Form": "그림자",
    "Pokemon_Name": "이상해꽃",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "독",
    "Max_CP": 3075,
    "ATK": 198.0,
    "DEF": 189.00000000000003,
    "HP": 190,
    "Fast_Moves": [
      "잎날가르기",
      "덩굴채찍"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오물폭탄",
      "꽃보라",
      "솔라빔",
      "오물공격"
    ],
    "Elite_Charged_Moves": [
      "하드플랜트"
    ],
    "Sprite_Col": 3,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": 4,
    "Form": "일반",
    "Pokemon_Name": "파이리",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 1108,
    "ATK": 116.0,
    "DEF": 93.0,
    "HP": 118,
    "Fast_Moves": [
      "불꽃세례",
      "할퀴기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "니트로차지",
      "불꽃튀기기",
      "화염방사"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 6,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": "4-S",
    "Form": "그림자",
    "Pokemon_Name": "파이리",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 1108,
    "ATK": 116.0,
    "DEF": 93.0,
    "HP": 118,
    "Fast_Moves": [
      "불꽃세례",
      "할퀴기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "니트로차지",
      "불꽃튀기기",
      "화염방사"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 6,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": 5,
    "Form": "일반",
    "Pokemon_Name": "리자드",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 1868,
    "ATK": 158.0,
    "DEF": 126.0,
    "HP": 151,
    "Fast_Moves": [
      "불꽃세례",
      "불꽃엄니"
    ],
    "Elite_Fast_Moves": [
      "할퀴기"
    ],
    "Charged_Moves": [
      "불꽃펀치",
      "불꽃튀기기",
      "화염방사"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": "5-S",
    "Form": "그림자",
    "Pokemon_Name": "리자드",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 1868,
    "ATK": 158.0,
    "DEF": 126.0,
    "HP": 151,
    "Fast_Moves": [
      "불꽃세례",
      "불꽃엄니"
    ],
    "Elite_Fast_Moves": [
      "할퀴기"
    ],
    "Charged_Moves": [
      "불꽃펀치",
      "불꽃튀기기",
      "화염방사"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": 6,
    "Form": "일반",
    "Pokemon_Name": "리자몽",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "비행",
    "Max_CP": 3266,
    "ATK": 223.0,
    "DEF": 173.0,
    "HP": 186,
    "Fast_Moves": [
      "회오리불꽃",
      "에어슬래시"
    ],
    "Elite_Fast_Moves": [
      "불꽃세례",
      "날개치기",
      "용의숨결"
    ],
    "Charged_Moves": [
      "불대문자",
      "드래곤클로",
      "오버히트",
      "에어커터"
    ],
    "Elite_Charged_Moves": [
      "블라스트번",
      "화염방사"
    ],
    "Sprite_Col": 8,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": "6-M1",
    "Form": "메가",
    "Pokemon_Name": "리자몽X",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 4353,
    "ATK": 273.0,
    "DEF": 213.0,
    "HP": 186,
    "Fast_Moves": [
      "회오리불꽃",
      "에어슬래시"
    ],
    "Elite_Fast_Moves": [
      "불꽃세례",
      "날개치기",
      "용의숨결"
    ],
    "Charged_Moves": [
      "불대문자",
      "드래곤클로",
      "오버히트",
      "에어커터"
    ],
    "Elite_Charged_Moves": [
      "블라스트번",
      "화염방사"
    ],
    "Sprite_Col": 9,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": "6-M2",
    "Form": "메가",
    "Pokemon_Name": "리자몽Y",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "비행",
    "Max_CP": 5037,
    "ATK": 319.0,
    "DEF": 212.0,
    "HP": 186,
    "Fast_Moves": [
      "회오리불꽃",
      "에어슬래시"
    ],
    "Elite_Fast_Moves": [
      "불꽃세례",
      "날개치기",
      "용의숨결"
    ],
    "Charged_Moves": [
      "불대문자",
      "드래곤클로",
      "오버히트",
      "에어커터"
    ],
    "Elite_Charged_Moves": [
      "블라스트번",
      "화염방사"
    ],
    "Sprite_Col": 10,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": "6-S",
    "Form": "그림자",
    "Pokemon_Name": "리자몽",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "비행",
    "Max_CP": 3266,
    "ATK": 222.99999999999997,
    "DEF": 173.0,
    "HP": 186,
    "Fast_Moves": [
      "회오리불꽃",
      "에어슬래시"
    ],
    "Elite_Fast_Moves": [
      "불꽃세례",
      "날개치기",
      "용의숨결"
    ],
    "Charged_Moves": [
      "불대문자",
      "드래곤클로",
      "오버히트",
      "에어커터"
    ],
    "Elite_Charged_Moves": [
      "블라스트번",
      "화염방사"
    ],
    "Sprite_Col": 8,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": 7,
    "Form": "일반",
    "Pokemon_Name": "꼬부기",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1069,
    "ATK": 94.0,
    "DEF": 121.0,
    "HP": 127,
    "Fast_Moves": [
      "거품",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아제트",
      "아쿠아테일",
      "물의파동"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 12,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": "7-S",
    "Form": "그림자",
    "Pokemon_Name": "꼬부기",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1069,
    "ATK": 94.0,
    "DEF": 121.0,
    "HP": 127,
    "Fast_Moves": [
      "거품",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아제트",
      "아쿠아테일",
      "물의파동"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 12,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": 8,
    "Form": "일반",
    "Pokemon_Name": "어니부기",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1682,
    "ATK": 126.0,
    "DEF": 155.0,
    "HP": 153,
    "Fast_Moves": [
      "물대포",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아제트",
      "냉동빔",
      "하이드로펌프"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": "8-S",
    "Form": "그림자",
    "Pokemon_Name": "어니부기",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1682,
    "ATK": 126.0,
    "DEF": 155.00000000000003,
    "HP": 153,
    "Fast_Moves": [
      "물대포",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아제트",
      "냉동빔",
      "하이드로펌프"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": 9,
    "Form": "일반",
    "Pokemon_Name": "거북왕",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 2788,
    "ATK": 171.0,
    "DEF": 207.0,
    "HP": 188,
    "Fast_Moves": [
      "물대포",
      "물기",
      "구르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "러스터캐논",
      "냉동빔",
      "하이드로펌프",
      "로케트박치기"
    ],
    "Elite_Charged_Moves": [
      "하이드로캐논"
    ],
    "Sprite_Col": 14,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": "9-M1",
    "Form": "메가",
    "Pokemon_Name": "거북왕",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 4455,
    "ATK": 264.0,
    "DEF": 237.0,
    "HP": 188,
    "Fast_Moves": [
      "물대포",
      "물기",
      "구르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "러스터캐논",
      "냉동빔",
      "하이드로펌프",
      "로케트박치기"
    ],
    "Elite_Charged_Moves": [
      "하이드로캐논"
    ],
    "Sprite_Col": 15,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": "9-S",
    "Form": "그림자",
    "Pokemon_Name": "거북왕",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 2788,
    "ATK": 171.0,
    "DEF": 207.0,
    "HP": 188,
    "Fast_Moves": [
      "물대포",
      "물기",
      "구르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "러스터캐논",
      "냉동빔",
      "하이드로펌프",
      "로케트박치기"
    ],
    "Elite_Charged_Moves": [
      "하이드로캐논"
    ],
    "Sprite_Col": 14,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": 10,
    "Form": "일반",
    "Pokemon_Name": "캐터피",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 494,
    "ATK": 55.0,
    "DEF": 55.0,
    "HP": 128,
    "Fast_Moves": [
      "벌레먹기",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 17,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": "10-S",
    "Form": "그림자",
    "Pokemon_Name": "캐터피",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 494,
    "ATK": 55.0,
    "DEF": 55.0,
    "HP": 128,
    "Fast_Moves": [
      "벌레먹기",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 17,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": 11,
    "Form": "일반",
    "Pokemon_Name": "단데기",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 509,
    "ATK": 45.0,
    "DEF": 80.0,
    "HP": 137,
    "Fast_Moves": [
      "벌레먹기",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 18,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": "11-S",
    "Form": "그림자",
    "Pokemon_Name": "단데기",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 509,
    "ATK": 45.0,
    "DEF": 80.0,
    "HP": 137,
    "Fast_Moves": [
      "벌레먹기",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 18,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": 12,
    "Form": "일반",
    "Pokemon_Name": "버터플",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "비행",
    "Max_CP": 2065,
    "ATK": 167.0,
    "DEF": 137.0,
    "HP": 155,
    "Fast_Moves": [
      "벌레의저항",
      "염동력"
    ],
    "Elite_Fast_Moves": [
      "벌레먹기"
    ],
    "Charged_Moves": [
      "벌레의야단법석",
      "사이코키네시스",
      "시그널빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 19,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": "12-S",
    "Form": "그림자",
    "Pokemon_Name": "버터플",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "비행",
    "Max_CP": 2065,
    "ATK": 167.0,
    "DEF": 137.0,
    "HP": 155,
    "Fast_Moves": [
      "벌레의저항",
      "염동력"
    ],
    "Elite_Fast_Moves": [
      "벌레먹기"
    ],
    "Charged_Moves": [
      "벌레의야단법석",
      "사이코키네시스",
      "시그널빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 19,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": 13,
    "Form": "일반",
    "Pokemon_Name": "뿔충이",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "독",
    "Max_CP": 515,
    "ATK": 63.0,
    "DEF": 50.0,
    "HP": 120,
    "Fast_Moves": [
      "벌레먹기",
      "독침"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 21,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": "13-S",
    "Form": "그림자",
    "Pokemon_Name": "뿔충이",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "독",
    "Max_CP": 515,
    "ATK": 63.0,
    "DEF": 50.0,
    "HP": 120,
    "Fast_Moves": [
      "벌레먹기",
      "독침"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 21,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": 14,
    "Form": "일반",
    "Pokemon_Name": "딱충이",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "독",
    "Max_CP": 488,
    "ATK": 46.0,
    "DEF": 75.0,
    "HP": 128,
    "Fast_Moves": [
      "벌레먹기",
      "독침"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 22,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": "14-S",
    "Form": "그림자",
    "Pokemon_Name": "딱충이",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "독",
    "Max_CP": 488,
    "ATK": 46.0,
    "DEF": 75.0,
    "HP": 128,
    "Fast_Moves": [
      "벌레먹기",
      "독침"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 22,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": 15,
    "Form": "일반",
    "Pokemon_Name": "독침붕",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "독",
    "Max_CP": 2087,
    "ATK": 169.0,
    "DEF": 130.0,
    "HP": 163,
    "Fast_Moves": [
      "엉겨붙기",
      "독찌르기",
      "독침"
    ],
    "Elite_Fast_Moves": [
      "벌레먹기"
    ],
    "Charged_Moves": [
      "오물폭탄",
      "제비반환",
      "시저크로스",
      "마지막일침"
    ],
    "Elite_Charged_Moves": [
      "드릴라이너"
    ],
    "Sprite_Col": 23,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": "15-M1",
    "Form": "메가",
    "Pokemon_Name": "독침붕",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "독",
    "Max_CP": 3824,
    "ATK": 303.0,
    "DEF": 148.0,
    "HP": 163,
    "Fast_Moves": [
      "엉겨붙기",
      "독찌르기",
      "독침"
    ],
    "Elite_Fast_Moves": [
      "벌레먹기"
    ],
    "Charged_Moves": [
      "오물폭탄",
      "제비반환",
      "시저크로스",
      "마지막일침"
    ],
    "Elite_Charged_Moves": [
      "드릴라이너"
    ],
    "Sprite_Col": 24,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": "15-S",
    "Form": "그림자",
    "Pokemon_Name": "독침붕",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "독",
    "Max_CP": 2087,
    "ATK": 169.0,
    "DEF": 130.0,
    "HP": 163,
    "Fast_Moves": [
      "엉겨붙기",
      "독찌르기",
      "독침"
    ],
    "Elite_Fast_Moves": [
      "벌레먹기"
    ],
    "Charged_Moves": [
      "오물폭탄",
      "제비반환",
      "시저크로스",
      "마지막일침"
    ],
    "Elite_Charged_Moves": [
      "드릴라이너"
    ],
    "Sprite_Col": 23,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": 16,
    "Form": "일반",
    "Pokemon_Name": "구구",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 769,
    "ATK": 85.0,
    "DEF": 73.0,
    "HP": 120,
    "Fast_Moves": [
      "전광석화",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "회오리",
      "제비반환",
      "에어커터"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 25,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": "16-S",
    "Form": "그림자",
    "Pokemon_Name": "구구",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 769,
    "ATK": 85.0,
    "DEF": 73.0,
    "HP": 120,
    "Fast_Moves": [
      "전광석화",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "회오리",
      "제비반환",
      "에어커터"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 25,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": 17,
    "Form": "일반",
    "Pokemon_Name": "피죤",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 1350,
    "ATK": 117.0,
    "DEF": 105.0,
    "HP": 160,
    "Fast_Moves": [
      "날개치기",
      "강철날개"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "회오리",
      "제비반환",
      "에어커터"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 26,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": "17-S",
    "Form": "그림자",
    "Pokemon_Name": "피죤",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 1350,
    "ATK": 117.00000000000001,
    "DEF": 105.0,
    "HP": 160,
    "Fast_Moves": [
      "날개치기",
      "강철날개"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "회오리",
      "제비반환",
      "에어커터"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 26,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": 18,
    "Form": "일반",
    "Pokemon_Name": "피죤투",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 2407,
    "ATK": 166.0,
    "DEF": 154.0,
    "HP": 195,
    "Fast_Moves": [
      "에어슬래시",
      "강철날개"
    ],
    "Elite_Fast_Moves": [
      "날개치기",
      "바람일으키기"
    ],
    "Charged_Moves": [
      "폭풍",
      "제비반환",
      "브레이브버드",
      "깃털댄스"
    ],
    "Elite_Charged_Moves": [
      "에어커터"
    ],
    "Sprite_Col": 27,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": "18-M1",
    "Form": "메가",
    "Pokemon_Name": "피죤투",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 4160,
    "ATK": 280.0,
    "DEF": 175.0,
    "HP": 195,
    "Fast_Moves": [
      "에어슬래시",
      "강철날개"
    ],
    "Elite_Fast_Moves": [
      "날개치기",
      "바람일으키기"
    ],
    "Charged_Moves": [
      "폭풍",
      "제비반환",
      "브레이브버드",
      "깃털댄스"
    ],
    "Elite_Charged_Moves": [
      "에어커터"
    ],
    "Sprite_Col": 28,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": "18-S",
    "Form": "그림자",
    "Pokemon_Name": "피죤투",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 2407,
    "ATK": 166.0,
    "DEF": 154.0,
    "HP": 195,
    "Fast_Moves": [
      "에어슬래시",
      "강철날개"
    ],
    "Elite_Fast_Moves": [
      "날개치기",
      "바람일으키기"
    ],
    "Charged_Moves": [
      "폭풍",
      "제비반환",
      "브레이브버드",
      "깃털댄스"
    ],
    "Elite_Charged_Moves": [
      "에어커터"
    ],
    "Sprite_Col": 27,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": 19,
    "Form": "일반",
    "Pokemon_Name": "꼬렛",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 830,
    "ATK": 103.0,
    "DEF": 70.0,
    "HP": 102,
    "Fast_Moves": [
      "몸통박치기",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "필살앞니",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 29,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": "19-2",
    "Form": "일반",
    "Pokemon_Name": "알로라꼬렛",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "노말",
    "Max_CP": 830,
    "ATK": 103.0,
    "DEF": 70.0,
    "HP": 102,
    "Fast_Moves": [
      "몸통박치기",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "필살앞니",
      "섀도볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": "19-S",
    "Form": "그림자",
    "Pokemon_Name": "꼬렛",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 830,
    "ATK": 103.0,
    "DEF": 70.0,
    "HP": 102,
    "Fast_Moves": [
      "몸통박치기",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "필살앞니",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 29,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": "19-S-2",
    "Form": "그림자",
    "Pokemon_Name": "알로라꼬렛",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "노말",
    "Max_CP": 830,
    "ATK": 103.0,
    "DEF": 70.0,
    "HP": 102,
    "Fast_Moves": [
      "몸통박치기",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "필살앞니",
      "섀도볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": 20,
    "Form": "일반",
    "Pokemon_Name": "레트라",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 1956,
    "ATK": 161.0,
    "DEF": 139.0,
    "HP": 146,
    "Fast_Moves": [
      "물기",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "필살앞니",
      "파괴광선"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": "20-2",
    "Form": "일반",
    "Pokemon_Name": "알로라레트라",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "노말",
    "Max_CP": 1927,
    "ATK": 135.0,
    "DEF": 154.0,
    "HP": 181,
    "Fast_Moves": [
      "물기",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "필살앞니",
      "파괴광선"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": "20-S",
    "Form": "그림자",
    "Pokemon_Name": "레트라",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 1956,
    "ATK": 161.0,
    "DEF": 139.0,
    "HP": 146,
    "Fast_Moves": [
      "물기",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "필살앞니",
      "파괴광선"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": "20-S-2",
    "Form": "그림자",
    "Pokemon_Name": "알로라레트라",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "노말",
    "Max_CP": 1927,
    "ATK": 135.0,
    "DEF": 154.0,
    "HP": 181,
    "Fast_Moves": [
      "물기",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "필살앞니",
      "파괴광선"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": 21,
    "Form": "일반",
    "Pokemon_Name": "깨비참",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 902,
    "ATK": 112.0,
    "DEF": 60.0,
    "HP": 120,
    "Fast_Moves": [
      "쪼기",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "제비반환",
      "회전부리",
      "불새"
    ],
    "Elite_Charged_Moves": [
      "회오리"
    ],
    "Sprite_Col": 33,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": 22,
    "Form": "일반",
    "Pokemon_Name": "깨비드릴조",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 2257,
    "ATK": 182.0,
    "DEF": 133.0,
    "HP": 163,
    "Fast_Moves": [
      "쪼기",
      "강철날개"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "제비반환",
      "드릴라이너",
      "불새",
      "공중날기",
      "회전부리"
    ],
    "Elite_Charged_Moves": [
      "회오리"
    ],
    "Sprite_Col": 34,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": 23,
    "Form": "일반",
    "Pokemon_Name": "아보",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "-",
    "Max_CP": 1048,
    "ATK": 110.0,
    "DEF": 97.0,
    "HP": 111,
    "Fast_Moves": [
      "독침",
      "용해액"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "김밥말이",
      "맹독엄니",
      "오물폭탄"
    ],
    "Elite_Charged_Moves": [
      "더스트슈트"
    ],
    "Sprite_Col": 35,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": "23-S",
    "Form": "그림자",
    "Pokemon_Name": "아보",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "-",
    "Max_CP": 1048,
    "ATK": 110.0,
    "DEF": 97.0,
    "HP": 111,
    "Fast_Moves": [
      "독침",
      "용해액"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "김밥말이",
      "맹독엄니",
      "오물폭탄"
    ],
    "Elite_Charged_Moves": [
      "더스트슈트"
    ],
    "Sprite_Col": 35,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": 24,
    "Form": "일반",
    "Pokemon_Name": "아보크",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "-",
    "Max_CP": 2171,
    "ATK": 167.0,
    "DEF": 153.0,
    "HP": 155,
    "Fast_Moves": [
      "물기",
      "용해액",
      "드래곤테일",
      "독침"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "악의파동",
      "오물웨이브",
      "더스트슈트",
      "애시드봄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": "24-S",
    "Form": "그림자",
    "Pokemon_Name": "아보크",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "-",
    "Max_CP": 2171,
    "ATK": 167.0,
    "DEF": 153.0,
    "HP": 155,
    "Fast_Moves": [
      "물기",
      "용해액",
      "드래곤테일",
      "독침"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "악의파동",
      "오물웨이브",
      "더스트슈트",
      "애시드봄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": 25,
    "Form": "일반",
    "Pokemon_Name": "피카츄",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 1060,
    "ATK": 112.0,
    "DEF": 96.0,
    "HP": 111,
    "Fast_Moves": [
      "전기쇼크",
      "전광석화"
    ],
    "Elite_Fast_Moves": [
      "프레젠트"
    ],
    "Charged_Moves": [
      "방전",
      "10만볼트",
      "와일드볼트"
    ],
    "Elite_Charged_Moves": [
      "파도타기",
      "번개"
    ],
    "Sprite_Col": 37,
    "Sprite_Row": 1
  },
  {
    "Pokemon_ID": 26,
    "Form": "일반",
    "Pokemon_Name": "라이츄",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 2467,
    "ATK": 193.0,
    "DEF": 151.0,
    "HP": 155,
    "Fast_Moves": [
      "볼트체인지",
      "스파크",
      "애교부리기",
      "전기쇼크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨트리기",
      "번개펀치",
      "와일드볼트",
      "로케트박치기",
      "개척하기",
      "파도타기"
    ],
    "Elite_Charged_Moves": [
      "번개"
    ],
    "Sprite_Col": 8,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "26-2",
    "Form": "일반",
    "Pokemon_Name": "알로라라이츄",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 2585,
    "ATK": 201.0,
    "DEF": 154.0,
    "HP": 155,
    "Fast_Moves": [
      "볼트체인지",
      "스파크",
      "전기쇼크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "번개펀치",
      "와일드볼트",
      "풀묶기",
      "개척하기",
      "파도타기",
      "사이코쇼크"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 9,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": 27,
    "Form": "일반",
    "Pokemon_Name": "모래두지",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "-",
    "Max_CP": 1426,
    "ATK": 126.0,
    "DEF": 120.0,
    "HP": 137,
    "Fast_Moves": [
      "할퀴기",
      "머드샷",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "스톤샤워",
      "모래지옥"
    ],
    "Elite_Charged_Moves": [
      "암석봉인"
    ],
    "Sprite_Col": 10,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "27-2",
    "Form": "일반",
    "Pokemon_Name": "알로라모래두지",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "강철",
    "Max_CP": 1462,
    "ATK": 125.0,
    "DEF": 129.0,
    "HP": 137,
    "Fast_Moves": [
      "메탈클로",
      "눈싸라기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "눈보라",
      "자이로볼",
      "깜짝베기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "27-S",
    "Form": "그림자",
    "Pokemon_Name": "모래두지",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "-",
    "Max_CP": 1426,
    "ATK": 126.0,
    "DEF": 120.0,
    "HP": 137,
    "Fast_Moves": [
      "할퀴기",
      "머드샷",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "스톤샤워",
      "모래지옥"
    ],
    "Elite_Charged_Moves": [
      "암석봉인"
    ],
    "Sprite_Col": 10,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "27-S-2",
    "Form": "그림자",
    "Pokemon_Name": "알로라모래두지",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "강철",
    "Max_CP": 1462,
    "ATK": 125.0,
    "DEF": 129.0,
    "HP": 137,
    "Fast_Moves": [
      "메탈클로",
      "눈싸라기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "눈보라",
      "자이로볼",
      "깜짝베기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": 28,
    "Form": "일반",
    "Pokemon_Name": "고지",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "-",
    "Max_CP": 2684,
    "ATK": 182.0,
    "DEF": 175.0,
    "HP": 181,
    "Fast_Moves": [
      "메탈클로",
      "머드샷",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지진",
      "암석봉인",
      "땅고르기",
      "열사의대지"
    ],
    "Elite_Charged_Moves": [
      "깜짝베기"
    ],
    "Sprite_Col": 12,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "28-2",
    "Form": "일반",
    "Pokemon_Name": "알로라고지",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "강철",
    "Max_CP": 2750,
    "ATK": 177.0,
    "DEF": 195.0,
    "HP": 181,
    "Fast_Moves": [
      "메탈클로",
      "눈싸라기"
    ],
    "Elite_Fast_Moves": [
      "섀도클로"
    ],
    "Charged_Moves": [
      "눈보라",
      "자이로볼",
      "땅고르기",
      "냉동펀치",
      "드릴라이너",
      "제비반환"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "28-S",
    "Form": "그림자",
    "Pokemon_Name": "고지",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "-",
    "Max_CP": 2684,
    "ATK": 182.0,
    "DEF": 175.0,
    "HP": 181,
    "Fast_Moves": [
      "메탈클로",
      "머드샷",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지진",
      "암석봉인",
      "땅고르기",
      "열사의대지"
    ],
    "Elite_Charged_Moves": [
      "깜짝베기"
    ],
    "Sprite_Col": 12,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "28-S-2",
    "Form": "그림자",
    "Pokemon_Name": "알로라고지",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "강철",
    "Max_CP": 2750,
    "ATK": 177.0,
    "DEF": 195.0,
    "HP": 181,
    "Fast_Moves": [
      "메탈클로",
      "눈싸라기"
    ],
    "Elite_Fast_Moves": [
      "섀도클로"
    ],
    "Charged_Moves": [
      "눈보라",
      "자이로볼",
      "땅고르기",
      "냉동펀치",
      "드릴라이너",
      "제비반환"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": 29,
    "Form": "일반",
    "Pokemon_Name": "니드런♀",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "-",
    "Max_CP": 922,
    "ATK": 86.0,
    "DEF": 89.0,
    "HP": 146,
    "Fast_Moves": [
      "물기",
      "독침"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "맹독엄니",
      "누르기",
      "오물폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 14,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "29-S",
    "Form": "그림자",
    "Pokemon_Name": "니드런♀",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "-",
    "Max_CP": 922,
    "ATK": 86.0,
    "DEF": 88.99999999999999,
    "HP": 146,
    "Fast_Moves": [
      "물기",
      "독침"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "맹독엄니",
      "누르기",
      "오물폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 14,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": 30,
    "Form": "일반",
    "Pokemon_Name": "니드리나",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "-",
    "Max_CP": 1480,
    "ATK": 117.0,
    "DEF": 120.0,
    "HP": 172,
    "Fast_Moves": [
      "물기",
      "독침"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "맹독엄니",
      "구멍파기",
      "오물폭탄",
      "10만볼트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 15,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "30-S",
    "Form": "그림자",
    "Pokemon_Name": "니드리나",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "-",
    "Max_CP": 1480,
    "ATK": 117.00000000000001,
    "DEF": 120.0,
    "HP": 172,
    "Fast_Moves": [
      "물기",
      "독침"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "맹독엄니",
      "구멍파기",
      "오물폭탄",
      "10만볼트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 15,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": 31,
    "Form": "일반",
    "Pokemon_Name": "니드퀸",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "땅",
    "Max_CP": 2812,
    "ATK": 180.0,
    "DEF": 173.0,
    "HP": 207,
    "Fast_Moves": [
      "독찌르기",
      "물기",
      "독침",
      "진흙뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지진",
      "오물웨이브",
      "스톤에지",
      "대지의힘",
      "맹독엄니"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 16,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "31-S",
    "Form": "그림자",
    "Pokemon_Name": "니드퀸",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "땅",
    "Max_CP": 2812,
    "ATK": 180.0,
    "DEF": 173.0,
    "HP": 207,
    "Fast_Moves": [
      "독찌르기",
      "물기",
      "독침",
      "진흙뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지진",
      "오물웨이브",
      "스톤에지",
      "대지의힘",
      "맹독엄니"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 16,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": 32,
    "Form": "일반",
    "Pokemon_Name": "니드런♂",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "-",
    "Max_CP": 973,
    "ATK": 105.0,
    "DEF": 76.0,
    "HP": 130,
    "Fast_Moves": [
      "쪼기",
      "독침"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "뿔찌르기",
      "누르기",
      "오물폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 17,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "32-S",
    "Form": "그림자",
    "Pokemon_Name": "니드런♂",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "-",
    "Max_CP": 973,
    "ATK": 105.0,
    "DEF": 76.0,
    "HP": 130,
    "Fast_Moves": [
      "쪼기",
      "독침"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "뿔찌르기",
      "누르기",
      "오물폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 17,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": 33,
    "Form": "일반",
    "Pokemon_Name": "니드리노",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "-",
    "Max_CP": 1575,
    "ATK": 137.0,
    "DEF": 111.0,
    "HP": 156,
    "Fast_Moves": [
      "독찌르기",
      "독침"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "뿔찌르기",
      "구멍파기",
      "오물폭탄",
      "냉동빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 18,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "33-S",
    "Form": "그림자",
    "Pokemon_Name": "니드리노",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "-",
    "Max_CP": 1575,
    "ATK": 137.0,
    "DEF": 111.0,
    "HP": 156,
    "Fast_Moves": [
      "독찌르기",
      "독침"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "뿔찌르기",
      "구멍파기",
      "오물폭탄",
      "냉동빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 18,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": 34,
    "Form": "일반",
    "Pokemon_Name": "니드킹",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "땅",
    "Max_CP": 2902,
    "ATK": 204.0,
    "DEF": 156.0,
    "HP": 191,
    "Fast_Moves": [
      "독찌르기",
      "아이언테일",
      "두번차기",
      "독침"
    ],
    "Elite_Fast_Moves": [
      "연속자르기"
    ],
    "Charged_Moves": [
      "지진",
      "오물웨이브",
      "메가혼",
      "대지의힘",
      "모래지옥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 19,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "34-S",
    "Form": "그림자",
    "Pokemon_Name": "니드킹",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "땅",
    "Max_CP": 2902,
    "ATK": 204.0,
    "DEF": 156.0,
    "HP": 191,
    "Fast_Moves": [
      "독찌르기",
      "아이언테일",
      "두번차기",
      "독침"
    ],
    "Elite_Fast_Moves": [
      "연속자르기"
    ],
    "Charged_Moves": [
      "지진",
      "오물웨이브",
      "메가혼",
      "대지의힘",
      "모래지옥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 19,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": 35,
    "Form": "일반",
    "Pokemon_Name": "삐삐",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "-",
    "Max_CP": 1306,
    "ATK": 107.0,
    "DEF": 108.0,
    "HP": 172,
    "Fast_Moves": [
      "막치기",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "차밍보이스",
      "누르기",
      "문포스",
      "스피드스타"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 20,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": 36,
    "Form": "일반",
    "Pokemon_Name": "픽시",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "-",
    "Max_CP": 2755,
    "ATK": 178.0,
    "DEF": 162.0,
    "HP": 216,
    "Fast_Moves": [
      "차지빔",
      "사념의박치기",
      "애교부리기",
      "요정의바람"
    ],
    "Elite_Fast_Moves": [
      "막치기"
    ],
    "Charged_Moves": [
      "매지컬샤인",
      "사이코키네시스",
      "문포스",
      "코멧펀치",
      "스피드스타",
      "드레인키스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 21,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": 37,
    "Form": "일반",
    "Pokemon_Name": "식스테일",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 998,
    "ATK": 96.0,
    "DEF": 109.0,
    "HP": 116,
    "Fast_Moves": [
      "전광석화",
      "불꽃세례"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "누르기",
      "화염방사",
      "니트로차지",
      "웨더볼(불꽃)"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 22,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "37-2",
    "Form": "일반",
    "Pokemon_Name": "알로라식스테일",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "-",
    "Max_CP": 998,
    "ATK": 96.0,
    "DEF": 109.0,
    "HP": 116,
    "Fast_Moves": [
      "사념의박치기",
      "눈싸라기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "악의파동",
      "냉동빔",
      "눈보라",
      "웨더볼(얼음)"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 23,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "37-S",
    "Form": "그림자",
    "Pokemon_Name": "식스테일",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 998,
    "ATK": 96.0,
    "DEF": 109.0,
    "HP": 116,
    "Fast_Moves": [
      "전광석화",
      "불꽃세례"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "누르기",
      "화염방사",
      "니트로차지",
      "웨더볼(불꽃)"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 22,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "37-S-2",
    "Form": "그림자",
    "Pokemon_Name": "알로라식스테일",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "-",
    "Max_CP": 998,
    "ATK": 96.0,
    "DEF": 109.0,
    "HP": 116,
    "Fast_Moves": [
      "사념의박치기",
      "눈싸라기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "악의파동",
      "냉동빔",
      "눈보라",
      "웨더볼(얼음)"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 23,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": 38,
    "Form": "일반",
    "Pokemon_Name": "나인테일",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 2577,
    "ATK": 169.0,
    "DEF": 190.0,
    "HP": 177,
    "Fast_Moves": [
      "속여때리기",
      "회오리불꽃"
    ],
    "Elite_Fast_Moves": [
      "불꽃세례"
    ],
    "Charged_Moves": [
      "열풍",
      "오버히트",
      "솔라빔",
      "사이코쇼크",
      "웨더볼(불꽃)",
      "열사의대지"
    ],
    "Elite_Charged_Moves": [
      "불대문자",
      "화염방사"
    ],
    "Sprite_Col": 24,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "38-2",
    "Form": "일반",
    "Pokemon_Name": "알로라나인테일",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "페어리",
    "Max_CP": 2610,
    "ATK": 170.0,
    "DEF": 193.0,
    "HP": 177,
    "Fast_Moves": [
      "속여때리기",
      "눈싸라기",
      "애교부리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "매지컬샤인",
      "냉동빔",
      "눈보라",
      "사이코쇼크",
      "웨더볼(얼음)"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 25,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "38-S",
    "Form": "그림자",
    "Pokemon_Name": "나인테일",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 2577,
    "ATK": 169.0,
    "DEF": 190.0,
    "HP": 177,
    "Fast_Moves": [
      "속여때리기",
      "회오리불꽃"
    ],
    "Elite_Fast_Moves": [
      "불꽃세례"
    ],
    "Charged_Moves": [
      "열풍",
      "오버히트",
      "솔라빔",
      "사이코쇼크",
      "웨더볼(불꽃)",
      "열사의대지"
    ],
    "Elite_Charged_Moves": [
      "불대문자",
      "화염방사"
    ],
    "Sprite_Col": 24,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "38-S-2",
    "Form": "그림자",
    "Pokemon_Name": "알로라나인테일",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "페어리",
    "Max_CP": 2610,
    "ATK": 170.0,
    "DEF": 193.0,
    "HP": 177,
    "Fast_Moves": [
      "속여때리기",
      "눈싸라기",
      "애교부리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "매지컬샤인",
      "냉동빔",
      "눈보라",
      "사이코쇼크",
      "웨더볼(얼음)"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 25,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": 39,
    "Form": "일반",
    "Pokemon_Name": "푸린",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "페어리",
    "Max_CP": 818,
    "ATK": 80.0,
    "DEF": 41.0,
    "HP": 251,
    "Fast_Moves": [
      "막치기",
      "속여때리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "차밍보이스",
      "자이로볼",
      "매지컬샤인",
      "스피드스타"
    ],
    "Elite_Charged_Moves": [
      "치근거리기",
      "누르기"
    ],
    "Sprite_Col": 26,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": 40,
    "Form": "일반",
    "Pokemon_Name": "푸크린",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "페어리",
    "Max_CP": 2178,
    "ATK": 156.0,
    "DEF": 90.0,
    "HP": 295,
    "Fast_Moves": [
      "막치기",
      "속여때리기",
      "애교부리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "매지컬샤인",
      "파괴광선",
      "치근거리기",
      "냉동빔",
      "차밍보이스",
      "얼어붙은바람",
      "스피드스타"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 27,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": 41,
    "Form": "일반",
    "Pokemon_Name": "주뱃",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "비행",
    "Max_CP": 754,
    "ATK": 83.0,
    "DEF": 73.0,
    "HP": 120,
    "Fast_Moves": [
      "전광석화",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "맹독엄니",
      "에어커터",
      "스피드스타"
    ],
    "Elite_Charged_Moves": [
      "오물폭탄"
    ],
    "Sprite_Col": 28,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "41-S",
    "Form": "그림자",
    "Pokemon_Name": "주뱃",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "비행",
    "Max_CP": 754,
    "ATK": 83.0,
    "DEF": 73.0,
    "HP": 120,
    "Fast_Moves": [
      "전광석화",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "맹독엄니",
      "에어커터",
      "스피드스타"
    ],
    "Elite_Charged_Moves": [
      "오물폭탄"
    ],
    "Sprite_Col": 28,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": 42,
    "Form": "일반",
    "Pokemon_Name": "골뱃",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "비행",
    "Max_CP": 2234,
    "ATK": 161.0,
    "DEF": 150.0,
    "HP": 181,
    "Fast_Moves": [
      "날개치기",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도볼",
      "에어커터",
      "맹독엄니"
    ],
    "Elite_Charged_Moves": [
      "괴상한바람"
    ],
    "Sprite_Col": 29,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "42-S",
    "Form": "그림자",
    "Pokemon_Name": "골뱃",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "비행",
    "Max_CP": 2234,
    "ATK": 161.0,
    "DEF": 150.0,
    "HP": 181,
    "Fast_Moves": [
      "날개치기",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도볼",
      "에어커터",
      "맹독엄니"
    ],
    "Elite_Charged_Moves": [
      "괴상한바람"
    ],
    "Sprite_Col": 29,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": 43,
    "Form": "일반",
    "Pokemon_Name": "뚜벅쵸",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "독",
    "Max_CP": 1389,
    "ATK": 131.0,
    "DEF": 112.0,
    "HP": 128,
    "Fast_Moves": [
      "잎날가르기",
      "용해액"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "씨폭탄",
      "오물폭탄",
      "문포스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "43-S",
    "Form": "그림자",
    "Pokemon_Name": "뚜벅쵸",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "독",
    "Max_CP": 1389,
    "ATK": 131.0,
    "DEF": 112.0,
    "HP": 128,
    "Fast_Moves": [
      "잎날가르기",
      "용해액"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "씨폭탄",
      "오물폭탄",
      "문포스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": 44,
    "Form": "일반",
    "Pokemon_Name": "냄새꼬",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "독",
    "Max_CP": 1900,
    "ATK": 153.0,
    "DEF": 136.0,
    "HP": 155,
    "Fast_Moves": [
      "잎날가르기",
      "용해액"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "꽃보라",
      "오물폭탄",
      "문포스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "44-S",
    "Form": "그림자",
    "Pokemon_Name": "냄새꼬",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "독",
    "Max_CP": 1900,
    "ATK": 153.0,
    "DEF": 136.0,
    "HP": 155,
    "Fast_Moves": [
      "잎날가르기",
      "용해액"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "꽃보라",
      "오물폭탄",
      "문포스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": 45,
    "Form": "일반",
    "Pokemon_Name": "라플레시아",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "독",
    "Max_CP": 2893,
    "ATK": 202.0,
    "DEF": 167.0,
    "HP": 181,
    "Fast_Moves": [
      "잎날가르기",
      "용해액"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "꽃보라",
      "솔라빔",
      "문포스",
      "오물폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "45-S",
    "Form": "그림자",
    "Pokemon_Name": "라플레시아",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "독",
    "Max_CP": 2893,
    "ATK": 202.0,
    "DEF": 167.0,
    "HP": 181,
    "Fast_Moves": [
      "잎날가르기",
      "용해액"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "꽃보라",
      "솔라빔",
      "문포스",
      "오물폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": 46,
    "Form": "일반",
    "Pokemon_Name": "파라스",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "풀",
    "Max_CP": 1150,
    "ATK": 121.0,
    "DEF": 99.0,
    "HP": 111,
    "Fast_Moves": [
      "할퀴기",
      "벌레먹기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "크로스포이즌",
      "시저크로스",
      "씨폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 33,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": 47,
    "Form": "일반",
    "Pokemon_Name": "파라섹트",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "풀",
    "Max_CP": 2102,
    "ATK": 165.0,
    "DEF": 146.0,
    "HP": 155,
    "Fast_Moves": [
      "벌레의저항",
      "연속자르기"
    ],
    "Elite_Fast_Moves": [
      "벌레먹기"
    ],
    "Charged_Moves": [
      "크로스포이즌",
      "시저크로스",
      "솔라빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 34,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": 48,
    "Form": "일반",
    "Pokemon_Name": "콘팡",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "독",
    "Max_CP": 1135,
    "ATK": 100.0,
    "DEF": 100.0,
    "HP": 155,
    "Fast_Moves": [
      "벌레먹기",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "맹독엄니",
      "환상빔",
      "시그널빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 35,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "48-S",
    "Form": "그림자",
    "Pokemon_Name": "콘팡",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "독",
    "Max_CP": 1135,
    "ATK": 100.0,
    "DEF": 100.0,
    "HP": 155,
    "Fast_Moves": [
      "벌레먹기",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "맹독엄니",
      "환상빔",
      "시그널빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 35,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": 49,
    "Form": "일반",
    "Pokemon_Name": "도나리",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "독",
    "Max_CP": 2354,
    "ATK": 179.0,
    "DEF": 143.0,
    "HP": 172,
    "Fast_Moves": [
      "엉겨붙기",
      "염동력",
      "사이코웨이브"
    ],
    "Elite_Fast_Moves": [
      "벌레먹기"
    ],
    "Charged_Moves": [
      "은빛바람",
      "사이코키네시스",
      "벌레의야단법석",
      "맹독엄니"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "49-S",
    "Form": "그림자",
    "Pokemon_Name": "도나리",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "독",
    "Max_CP": 2354,
    "ATK": 179.0,
    "DEF": 143.0,
    "HP": 172,
    "Fast_Moves": [
      "엉겨붙기",
      "염동력",
      "사이코웨이브"
    ],
    "Elite_Fast_Moves": [
      "벌레먹기"
    ],
    "Charged_Moves": [
      "은빛바람",
      "사이코키네시스",
      "벌레의야단법석",
      "맹독엄니"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": 50,
    "Form": "일반",
    "Pokemon_Name": "디그다",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "-",
    "Max_CP": 764,
    "ATK": 109.0,
    "DEF": 78.0,
    "HP": 67,
    "Fast_Moves": [
      "진흙뿌리기",
      "할퀴기",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "진흙폭탄",
      "암석봉인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "50-2",
    "Form": "일반",
    "Pokemon_Name": "알로라디그다",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "강철",
    "Max_CP": 770,
    "ATK": 108.0,
    "DEF": 81.0,
    "HP": 67,
    "Fast_Moves": [
      "진흙뿌리기",
      "메탈클로",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "진흙폭탄",
      "암석봉인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 38,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "50-S",
    "Form": "그림자",
    "Pokemon_Name": "디그다",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "-",
    "Max_CP": 764,
    "ATK": 108.99999999999999,
    "DEF": 78.0,
    "HP": 67,
    "Fast_Moves": [
      "진흙뿌리기",
      "할퀴기",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "진흙폭탄",
      "암석봉인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "50-S-2",
    "Form": "그림자",
    "Pokemon_Name": "알로라디그다",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "강철",
    "Max_CP": 770,
    "ATK": 108.0,
    "DEF": 80.99999999999999,
    "HP": 67,
    "Fast_Moves": [
      "진흙뿌리기",
      "메탈클로",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "진흙폭탄",
      "암석봉인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 38,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": 51,
    "Form": "일반",
    "Pokemon_Name": "닥트리오",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "-",
    "Max_CP": 1760,
    "ATK": 167.0,
    "DEF": 134.0,
    "HP": 111,
    "Fast_Moves": [
      "기습",
      "진흙뿌리기",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지진",
      "진흙폭탄",
      "스톤에지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 39,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "51-2",
    "Form": "일반",
    "Pokemon_Name": "알로라닥트리오",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "강철",
    "Max_CP": 2145,
    "ATK": 201.0,
    "DEF": 142.0,
    "HP": 111,
    "Fast_Moves": [
      "메탈클로",
      "진흙뿌리기",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지진",
      "진흙폭탄",
      "아이언헤드"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 40,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "51-S",
    "Form": "그림자",
    "Pokemon_Name": "닥트리오",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "-",
    "Max_CP": 1760,
    "ATK": 167.0,
    "DEF": 134.0,
    "HP": 111,
    "Fast_Moves": [
      "기습",
      "진흙뿌리기",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지진",
      "진흙폭탄",
      "스톤에지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 39,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "51-S-2",
    "Form": "그림자",
    "Pokemon_Name": "알로라닥트리오",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "강철",
    "Max_CP": 2145,
    "ATK": 201.0,
    "DEF": 142.0,
    "HP": 111,
    "Fast_Moves": [
      "메탈클로",
      "진흙뿌리기",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지진",
      "진흙폭탄",
      "아이언헤드"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 40,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": 52,
    "Form": "일반",
    "Pokemon_Name": "나옹",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 846,
    "ATK": 92.0,
    "DEF": 78.0,
    "HP": 120,
    "Fast_Moves": [
      "할퀴기",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깜짝베기",
      "악의파동",
      "속임수"
    ],
    "Elite_Charged_Moves": [
      "누르기"
    ],
    "Sprite_Col": 41,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "52-2",
    "Form": "일반",
    "Pokemon_Name": "알로라나옹",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "-",
    "Max_CP": 901,
    "ATK": 99.0,
    "DEF": 78.0,
    "HP": 120,
    "Fast_Moves": [
      "할퀴기",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깜짝베기",
      "악의파동",
      "속임수",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 43,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "52-3",
    "Form": "일반",
    "Pokemon_Name": "가라르나옹",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "-",
    "Max_CP": 1170,
    "ATK": 115.0,
    "DEF": 92.0,
    "HP": 137,
    "Fast_Moves": [
      "할퀴기",
      "메탈클로",
      "금속음"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깜짝베기",
      "자이로볼",
      "구멍파기",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 44,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": "52-S",
    "Form": "그림자",
    "Pokemon_Name": "나옹",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 846,
    "ATK": 92.0,
    "DEF": 78.0,
    "HP": 120,
    "Fast_Moves": [
      "할퀴기",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깜짝베기",
      "악의파동",
      "속임수"
    ],
    "Elite_Charged_Moves": [
      "누르기"
    ],
    "Sprite_Col": 41,
    "Sprite_Row": 2
  },
  {
    "Pokemon_ID": 53,
    "Form": "일반",
    "Pokemon_Name": "페르시온",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 1910,
    "ATK": 150.0,
    "DEF": 136.0,
    "HP": 163,
    "Fast_Moves": [
      "할퀴기",
      "속여때리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "속임수",
      "파워젬",
      "치근거리기",
      "보복"
    ],
    "Elite_Charged_Moves": [
      "깜짝베기"
    ],
    "Sprite_Col": 1,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "53-2",
    "Form": "일반",
    "Pokemon_Name": "알로라페르시온",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "-",
    "Max_CP": 2002,
    "ATK": 158.0,
    "DEF": 136.0,
    "HP": 163,
    "Fast_Moves": [
      "할퀴기",
      "속여때리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "속임수",
      "악의파동",
      "치근거리기",
      "보복",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 2,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "53-S",
    "Form": "그림자",
    "Pokemon_Name": "페르시온",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 1910,
    "ATK": 150.0,
    "DEF": 136.0,
    "HP": 163,
    "Fast_Moves": [
      "할퀴기",
      "속여때리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "속임수",
      "파워젬",
      "치근거리기",
      "보복"
    ],
    "Elite_Charged_Moves": [
      "깜짝베기"
    ],
    "Sprite_Col": 1,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": 54,
    "Form": "일반",
    "Pokemon_Name": "고라파덕",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1250,
    "ATK": 122.0,
    "DEF": 95.0,
    "HP": 137,
    "Fast_Moves": [
      "물대포",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "환상빔",
      "아쿠아테일",
      "크로스촙"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 3,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "54-S",
    "Form": "그림자",
    "Pokemon_Name": "고라파덕",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1250,
    "ATK": 122.00000000000001,
    "DEF": 95.0,
    "HP": 137,
    "Fast_Moves": [
      "물대포",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "환상빔",
      "아쿠아테일",
      "크로스촙"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 3,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": 55,
    "Form": "일반",
    "Pokemon_Name": "골덕",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 2770,
    "ATK": 191.0,
    "DEF": 162.0,
    "HP": 190,
    "Fast_Moves": [
      "물대포",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "하이드로펌프",
      "냉동빔",
      "거품광선",
      "싱크로노이즈",
      "크로스촙",
      "아쿠아브레이크"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "55-S",
    "Form": "그림자",
    "Pokemon_Name": "골덕",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 2770,
    "ATK": 191.0,
    "DEF": 161.99999999999997,
    "HP": 190,
    "Fast_Moves": [
      "물대포",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "하이드로펌프",
      "냉동빔",
      "거품광선",
      "싱크로노이즈",
      "크로스촙",
      "아쿠아브레이크"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": 56,
    "Form": "일반",
    "Pokemon_Name": "망키",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 1317,
    "ATK": 148.0,
    "DEF": 82.0,
    "HP": 120,
    "Fast_Moves": [
      "태권당수",
      "할퀴기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "크로스촙",
      "로킥",
      "깨트리기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 5,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "56-S",
    "Form": "그림자",
    "Pokemon_Name": "망키",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 1317,
    "ATK": 148.0,
    "DEF": 82.0,
    "HP": 120,
    "Fast_Moves": [
      "태권당수",
      "할퀴기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "크로스촙",
      "로킥",
      "깨트리기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 5,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": 57,
    "Form": "일반",
    "Pokemon_Name": "성원숭",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 2586,
    "ATK": 207.0,
    "DEF": 138.0,
    "HP": 163,
    "Fast_Moves": [
      "안다리걸기",
      "카운터"
    ],
    "Elite_Fast_Moves": [
      "태권당수"
    ],
    "Charged_Moves": [
      "인파이트",
      "로킥",
      "깜짝베기",
      "냉동펀치"
    ],
    "Elite_Charged_Moves": [
      "크로스촙",
      "분노의주먹"
    ],
    "Sprite_Col": 6,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "57-S",
    "Form": "그림자",
    "Pokemon_Name": "성원숭",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 2586,
    "ATK": 207.0,
    "DEF": 138.0,
    "HP": 163,
    "Fast_Moves": [
      "안다리걸기",
      "카운터"
    ],
    "Elite_Fast_Moves": [
      "태권당수"
    ],
    "Charged_Moves": [
      "인파이트",
      "로킥",
      "깜짝베기",
      "냉동펀치"
    ],
    "Elite_Charged_Moves": [
      "크로스촙",
      "분노의주먹"
    ],
    "Sprite_Col": 6,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": 58,
    "Form": "일반",
    "Pokemon_Name": "가디",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 1405,
    "ATK": 136.0,
    "DEF": 93.0,
    "HP": 146,
    "Fast_Moves": [
      "불꽃세례",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "화염바퀴",
      "누르기",
      "화염방사"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "58-4",
    "Form": "일반",
    "Pokemon_Name": "히스이가디",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "바위",
    "Max_CP": 1495,
    "ATK": 142.0,
    "DEF": 92.0,
    "HP": 155,
    "Fast_Moves": [
      "불꽃세례",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤샤워",
      "깨물어부수기",
      "화염방사"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 9,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "58-S",
    "Form": "그림자",
    "Pokemon_Name": "가디",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 1405,
    "ATK": 136.0,
    "DEF": 93.0,
    "HP": 146,
    "Fast_Moves": [
      "불꽃세례",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "화염바퀴",
      "누르기",
      "화염방사"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": 59,
    "Form": "일반",
    "Pokemon_Name": "윈디",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 3425,
    "ATK": 227.0,
    "DEF": 166.0,
    "HP": 207,
    "Fast_Moves": [
      "불꽃엄니",
      "바크아웃",
      "번개엄니"
    ],
    "Elite_Fast_Moves": [
      "물기"
    ],
    "Charged_Moves": [
      "불대문자",
      "와일드볼트",
      "깨물어부수기",
      "화염방사",
      "사이코팽",
      "열사의대지"
    ],
    "Elite_Charged_Moves": [
      "땅고르기"
    ],
    "Sprite_Col": 8,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "59-4",
    "Form": "일반",
    "Pokemon_Name": "히스이윈디",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "바위",
    "Max_CP": 3556,
    "ATK": 232.0,
    "DEF": 165.0,
    "HP": 216,
    "Fast_Moves": [
      "불꽃엄니",
      "바크아웃",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤샤워",
      "와일드볼트",
      "깨물어부수기",
      "화염방사"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 10,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "59-S",
    "Form": "그림자",
    "Pokemon_Name": "윈디",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 3425,
    "ATK": 227.0,
    "DEF": 166.0,
    "HP": 207,
    "Fast_Moves": [
      "불꽃엄니",
      "바크아웃",
      "번개엄니"
    ],
    "Elite_Fast_Moves": [
      "물기"
    ],
    "Charged_Moves": [
      "불대문자",
      "와일드볼트",
      "깨물어부수기",
      "화염방사",
      "사이코팽",
      "열사의대지"
    ],
    "Elite_Charged_Moves": [
      "땅고르기"
    ],
    "Sprite_Col": 8,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": 60,
    "Form": "일반",
    "Pokemon_Name": "발챙이",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 937,
    "ATK": 101.0,
    "DEF": 82.0,
    "HP": 120,
    "Fast_Moves": [
      "거품",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "거품광선",
      "진흙폭탄",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "60-S",
    "Form": "그림자",
    "Pokemon_Name": "발챙이",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 937,
    "ATK": 101.0,
    "DEF": 82.0,
    "HP": 120,
    "Fast_Moves": [
      "거품",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "거품광선",
      "진흙폭탄",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": 61,
    "Form": "일반",
    "Pokemon_Name": "슈륙챙이",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1604,
    "ATK": 130.0,
    "DEF": 123.0,
    "HP": 163,
    "Fast_Moves": [
      "거품",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "물의파동",
      "진흙폭탄",
      "거품광선"
    ],
    "Elite_Charged_Moves": [
      "열탕"
    ],
    "Sprite_Col": 12,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "61-S",
    "Form": "그림자",
    "Pokemon_Name": "슈륙챙이",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1604,
    "ATK": 130.0,
    "DEF": 123.0,
    "HP": 163,
    "Fast_Moves": [
      "거품",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "물의파동",
      "진흙폭탄",
      "거품광선"
    ],
    "Elite_Charged_Moves": [
      "열탕"
    ],
    "Sprite_Col": 12,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": 62,
    "Form": "일반",
    "Pokemon_Name": "강챙이",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "격투",
    "Max_CP": 2923,
    "ATK": 182.0,
    "DEF": 184.0,
    "HP": 207,
    "Fast_Moves": [
      "거품",
      "바위깨기",
      "머드샷"
    ],
    "Elite_Fast_Moves": [
      "카운터"
    ],
    "Charged_Moves": [
      "하이드로펌프",
      "폭발펀치",
      "냉동펀치",
      "그로우펀치",
      "열탕",
      "얼어붙은바람"
    ],
    "Elite_Charged_Moves": [
      "지옥의바퀴"
    ],
    "Sprite_Col": 13,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "62-S",
    "Form": "그림자",
    "Pokemon_Name": "강챙이",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "격투",
    "Max_CP": 2923,
    "ATK": 182.0,
    "DEF": 184.0,
    "HP": 207,
    "Fast_Moves": [
      "거품",
      "바위깨기",
      "머드샷"
    ],
    "Elite_Fast_Moves": [
      "카운터"
    ],
    "Charged_Moves": [
      "하이드로펌프",
      "폭발펀치",
      "냉동펀치",
      "그로우펀치",
      "열탕",
      "얼어붙은바람"
    ],
    "Elite_Charged_Moves": [
      "지옥의바퀴"
    ],
    "Sprite_Col": 13,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": 63,
    "Form": "일반",
    "Pokemon_Name": "캐이시",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 1517,
    "ATK": 195.0,
    "DEF": 82.0,
    "HP": 93,
    "Fast_Moves": [
      "사념의박치기",
      "차지빔"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코쇼크",
      "시그널빔",
      "섀도볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 14,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "63-S",
    "Form": "그림자",
    "Pokemon_Name": "캐이시",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 1517,
    "ATK": 195.0,
    "DEF": 82.0,
    "HP": 93,
    "Fast_Moves": [
      "사념의박치기",
      "차지빔"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코쇼크",
      "시그널빔",
      "섀도볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 14,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": 64,
    "Form": "일반",
    "Pokemon_Name": "윤겔라",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 2328,
    "ATK": 232.0,
    "DEF": 117.0,
    "HP": 120,
    "Fast_Moves": [
      "사이코커터",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "환상빔",
      "매지컬샤인",
      "섀도볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 15,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "64-S",
    "Form": "그림자",
    "Pokemon_Name": "윤겔라",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 2328,
    "ATK": 232.0,
    "DEF": 117.0,
    "HP": 120,
    "Fast_Moves": [
      "사이코커터",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "환상빔",
      "매지컬샤인",
      "섀도볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 15,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": 65,
    "Form": "일반",
    "Pokemon_Name": "후딘",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 3456,
    "ATK": 271.0,
    "DEF": 167.0,
    "HP": 146,
    "Fast_Moves": [
      "사이코커터",
      "염동력"
    ],
    "Elite_Fast_Moves": [
      "카운터"
    ],
    "Charged_Moves": [
      "미래예지",
      "기합구슬",
      "섀도볼",
      "불꽃펀치"
    ],
    "Elite_Charged_Moves": [
      "매지컬샤인",
      "사이코키네시스"
    ],
    "Sprite_Col": 16,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "65-M1",
    "Form": "메가",
    "Pokemon_Name": "후딘",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 5099,
    "ATK": 367.0,
    "DEF": 207.0,
    "HP": 146,
    "Fast_Moves": [
      "사이코커터",
      "염동력"
    ],
    "Elite_Fast_Moves": [
      "카운터"
    ],
    "Charged_Moves": [
      "미래예지",
      "기합구슬",
      "섀도볼",
      "불꽃펀치"
    ],
    "Elite_Charged_Moves": [
      "매지컬샤인",
      "사이코키네시스"
    ],
    "Sprite_Col": 17,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "65-S",
    "Form": "그림자",
    "Pokemon_Name": "후딘",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 3456,
    "ATK": 271.0,
    "DEF": 167.0,
    "HP": 146,
    "Fast_Moves": [
      "사이코커터",
      "염동력"
    ],
    "Elite_Fast_Moves": [
      "카운터"
    ],
    "Charged_Moves": [
      "미래예지",
      "기합구슬",
      "섀도볼",
      "불꽃펀치"
    ],
    "Elite_Charged_Moves": [
      "매지컬샤인",
      "사이코키네시스"
    ],
    "Sprite_Col": 16,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": 66,
    "Form": "일반",
    "Pokemon_Name": "알통몬",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 1445,
    "ATK": 137.0,
    "DEF": 82.0,
    "HP": 172,
    "Fast_Moves": [
      "바위깨기",
      "태권당수"
    ],
    "Elite_Fast_Moves": [
      "안다리걸기"
    ],
    "Charged_Moves": [
      "로킥",
      "깨트리기",
      "크로스촙"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 18,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "66-S",
    "Form": "그림자",
    "Pokemon_Name": "알통몬",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 1445,
    "ATK": 137.0,
    "DEF": 82.0,
    "HP": 172,
    "Fast_Moves": [
      "바위깨기",
      "태권당수"
    ],
    "Elite_Fast_Moves": [
      "안다리걸기"
    ],
    "Charged_Moves": [
      "로킥",
      "깨트리기",
      "크로스촙"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 18,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": 67,
    "Form": "일반",
    "Pokemon_Name": "근육몬",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 2296,
    "ATK": 177.0,
    "DEF": 125.0,
    "HP": 190,
    "Fast_Moves": [
      "안다리걸기",
      "태권당수"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지옥의바퀴",
      "깨트리기",
      "폭발펀치"
    ],
    "Elite_Charged_Moves": [
      "크로스촙"
    ],
    "Sprite_Col": 19,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "67-S",
    "Form": "그림자",
    "Pokemon_Name": "근육몬",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 2296,
    "ATK": 177.0,
    "DEF": 125.0,
    "HP": 190,
    "Fast_Moves": [
      "안다리걸기",
      "태권당수"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지옥의바퀴",
      "깨트리기",
      "폭발펀치"
    ],
    "Elite_Charged_Moves": [
      "크로스촙"
    ],
    "Sprite_Col": 19,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": 68,
    "Form": "일반",
    "Pokemon_Name": "괴력몬",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 3455,
    "ATK": 234.0,
    "DEF": 159.0,
    "HP": 207,
    "Fast_Moves": [
      "불릿펀치",
      "카운터"
    ],
    "Elite_Fast_Moves": [
      "태권당수"
    ],
    "Charged_Moves": [
      "헤비봄버",
      "폭발펀치",
      "인파이트",
      "스톤샤워",
      "크로스촙"
    ],
    "Elite_Charged_Moves": [
      "스톤에지",
      "지옥의바퀴",
      "보복"
    ],
    "Sprite_Col": 20,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "68-S",
    "Form": "그림자",
    "Pokemon_Name": "괴력몬",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 3455,
    "ATK": 234.00000000000003,
    "DEF": 159.0,
    "HP": 207,
    "Fast_Moves": [
      "불릿펀치",
      "카운터"
    ],
    "Elite_Fast_Moves": [
      "태권당수"
    ],
    "Charged_Moves": [
      "헤비봄버",
      "폭발펀치",
      "인파이트",
      "스톤샤워",
      "크로스촙"
    ],
    "Elite_Charged_Moves": [
      "스톤에지",
      "지옥의바퀴",
      "보복"
    ],
    "Sprite_Col": 20,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": 69,
    "Form": "일반",
    "Pokemon_Name": "모다피",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "독",
    "Max_CP": 1168,
    "ATK": 139.0,
    "DEF": 61.0,
    "HP": 137,
    "Fast_Moves": [
      "덩굴채찍",
      "용해액"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파워휩",
      "오물폭탄",
      "김밥말이"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 22,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "69-S",
    "Form": "그림자",
    "Pokemon_Name": "모다피",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "독",
    "Max_CP": 1168,
    "ATK": 139.0,
    "DEF": 61.0,
    "HP": 137,
    "Fast_Moves": [
      "덩굴채찍",
      "용해액"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파워휩",
      "오물폭탄",
      "김밥말이"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 22,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": 70,
    "Form": "일반",
    "Pokemon_Name": "우츠동",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "독",
    "Max_CP": 1822,
    "ATK": 172.0,
    "DEF": 92.0,
    "HP": 163,
    "Fast_Moves": [
      "씨기관총",
      "용해액"
    ],
    "Elite_Fast_Moves": [
      "잎날가르기"
    ],
    "Charged_Moves": [
      "파워휩",
      "오물폭탄",
      "씨폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 23,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "70-S",
    "Form": "그림자",
    "Pokemon_Name": "우츠동",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "독",
    "Max_CP": 1822,
    "ATK": 172.0,
    "DEF": 92.0,
    "HP": 163,
    "Fast_Moves": [
      "씨기관총",
      "용해액"
    ],
    "Elite_Fast_Moves": [
      "잎날가르기"
    ],
    "Charged_Moves": [
      "파워휩",
      "오물폭탄",
      "씨폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 23,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": 71,
    "Form": "일반",
    "Pokemon_Name": "우츠보트",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "독",
    "Max_CP": 2748,
    "ATK": 207.0,
    "DEF": 135.0,
    "HP": 190,
    "Fast_Moves": [
      "잎날가르기",
      "용해액"
    ],
    "Elite_Fast_Moves": [
      "메지컬리프"
    ],
    "Charged_Moves": [
      "리프블레이드",
      "오물폭탄",
      "솔라빔",
      "그래스믹서",
      "애시드봄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "71-S",
    "Form": "그림자",
    "Pokemon_Name": "우츠보트",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "독",
    "Max_CP": 2748,
    "ATK": 207.0,
    "DEF": 135.0,
    "HP": 190,
    "Fast_Moves": [
      "잎날가르기",
      "용해액"
    ],
    "Elite_Fast_Moves": [
      "메지컬리프"
    ],
    "Charged_Moves": [
      "리프블레이드",
      "오물폭탄",
      "솔라빔",
      "그래스믹서",
      "애시드봄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": 72,
    "Form": "일반",
    "Pokemon_Name": "왕눈해",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "독",
    "Max_CP": 1176,
    "ATK": 97.0,
    "DEF": 149.0,
    "HP": 120,
    "Fast_Moves": [
      "거품",
      "독침"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "거품광선",
      "물의파동",
      "김밥말이"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 25,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "72-S",
    "Form": "그림자",
    "Pokemon_Name": "왕눈해",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "독",
    "Max_CP": 1176,
    "ATK": 97.0,
    "DEF": 149.0,
    "HP": 120,
    "Fast_Moves": [
      "거품",
      "독침"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "거품광선",
      "물의파동",
      "김밥말이"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 25,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": 73,
    "Form": "일반",
    "Pokemon_Name": "독파리",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "독",
    "Max_CP": 2738,
    "ATK": 166.0,
    "DEF": 209.0,
    "HP": 190,
    "Fast_Moves": [
      "용해액",
      "독찌르기",
      "독침"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "하이드로펌프",
      "오물웨이브",
      "눈보라",
      "애시드봄",
      "열탕"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 26,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "73-S",
    "Form": "그림자",
    "Pokemon_Name": "독파리",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "독",
    "Max_CP": 2738,
    "ATK": 166.0,
    "DEF": 209.0,
    "HP": 190,
    "Fast_Moves": [
      "용해액",
      "독찌르기",
      "독침"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "하이드로펌프",
      "오물웨이브",
      "눈보라",
      "애시드봄",
      "열탕"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 26,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": 74,
    "Form": "일반",
    "Pokemon_Name": "꼬마돌",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "땅",
    "Max_CP": 1462,
    "ATK": 132.0,
    "DEF": 132.0,
    "HP": 120,
    "Fast_Moves": [
      "돌떨구기",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤샤워",
      "암석봉인",
      "구멍파기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 27,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "74-2",
    "Form": "일반",
    "Pokemon_Name": "알로라꼬마돌",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "전기",
    "Max_CP": 1462,
    "ATK": 132.0,
    "DEF": 132.0,
    "HP": 120,
    "Fast_Moves": [
      "돌떨구기",
      "볼트체인지"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤샤워",
      "암석봉인",
      "10만볼트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 28,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "74-S",
    "Form": "그림자",
    "Pokemon_Name": "꼬마돌",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "땅",
    "Max_CP": 1462,
    "ATK": 132.0,
    "DEF": 132.0,
    "HP": 120,
    "Fast_Moves": [
      "돌떨구기",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤샤워",
      "암석봉인",
      "구멍파기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 27,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "74-S-2",
    "Form": "그림자",
    "Pokemon_Name": "알로라꼬마돌",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "전기",
    "Max_CP": 1462,
    "ATK": 132.0,
    "DEF": 132.0,
    "HP": 120,
    "Fast_Moves": [
      "돌떨구기",
      "볼트체인지"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤샤워",
      "암석봉인",
      "10만볼트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 28,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": 75,
    "Form": "일반",
    "Pokemon_Name": "데구리",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "땅",
    "Max_CP": 2145,
    "ATK": 164.0,
    "DEF": 164.0,
    "HP": 146,
    "Fast_Moves": [
      "돌떨구기",
      "진흙뿌리기",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "스톤에지",
      "록블라스트"
    ],
    "Elite_Charged_Moves": [
      "스톤샤워"
    ],
    "Sprite_Col": 29,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "75-2",
    "Form": "일반",
    "Pokemon_Name": "알로라데구리",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "전기",
    "Max_CP": 2145,
    "ATK": 164.0,
    "DEF": 164.0,
    "HP": 146,
    "Fast_Moves": [
      "돌떨구기",
      "볼트체인지"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "10만볼트",
      "스톤에지",
      "록블라스트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "75-S",
    "Form": "그림자",
    "Pokemon_Name": "데구리",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "땅",
    "Max_CP": 2145,
    "ATK": 164.0,
    "DEF": 164.0,
    "HP": 146,
    "Fast_Moves": [
      "돌떨구기",
      "진흙뿌리기",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "스톤에지",
      "록블라스트"
    ],
    "Elite_Charged_Moves": [
      "스톤샤워"
    ],
    "Sprite_Col": 29,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "75-S-2",
    "Form": "그림자",
    "Pokemon_Name": "알로라데구리",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "전기",
    "Max_CP": 2145,
    "ATK": 164.0,
    "DEF": 164.0,
    "HP": 146,
    "Fast_Moves": [
      "돌떨구기",
      "볼트체인지"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "10만볼트",
      "스톤에지",
      "록블라스트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": 76,
    "Form": "일반",
    "Pokemon_Name": "딱구리",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "땅",
    "Max_CP": 3334,
    "ATK": 211.0,
    "DEF": 198.0,
    "HP": 190,
    "Fast_Moves": [
      "돌떨구기",
      "진흙뿌리기",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤에지",
      "록블라스트",
      "지진",
      "원시의힘"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "76-2",
    "Form": "일반",
    "Pokemon_Name": "알로라딱구리",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "전기",
    "Max_CP": 3334,
    "ATK": 211.0,
    "DEF": 198.0,
    "HP": 190,
    "Fast_Moves": [
      "돌떨구기",
      "볼트체인지"
    ],
    "Elite_Fast_Moves": [
      "구르기"
    ],
    "Charged_Moves": [
      "스톤에지",
      "록블라스트",
      "와일드볼트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "76-S",
    "Form": "그림자",
    "Pokemon_Name": "딱구리",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "땅",
    "Max_CP": 3334,
    "ATK": 211.0,
    "DEF": 198.0,
    "HP": 190,
    "Fast_Moves": [
      "돌떨구기",
      "진흙뿌리기",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤에지",
      "록블라스트",
      "지진",
      "원시의힘"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "76-S-2",
    "Form": "그림자",
    "Pokemon_Name": "알로라딱구리",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "전기",
    "Max_CP": 3334,
    "ATK": 211.0,
    "DEF": 198.0,
    "HP": 190,
    "Fast_Moves": [
      "돌떨구기",
      "볼트체인지"
    ],
    "Elite_Fast_Moves": [
      "구르기"
    ],
    "Charged_Moves": [
      "스톤에지",
      "록블라스트",
      "와일드볼트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": 77,
    "Form": "일반",
    "Pokemon_Name": "포니타",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 1919,
    "ATK": 170.0,
    "DEF": 127.0,
    "HP": 137,
    "Fast_Moves": [
      "몸통박치기",
      "불꽃세례"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "니트로차지",
      "화염바퀴",
      "짓밟기"
    ],
    "Elite_Charged_Moves": [
      "불대문자"
    ],
    "Sprite_Col": 33,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "77-3",
    "Form": "일반",
    "Pokemon_Name": "가라르포니타",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 1919,
    "ATK": 170.0,
    "DEF": 127.0,
    "HP": 137,
    "Fast_Moves": [
      "안다리걸기",
      "사이코커터"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "치근거리기",
      "환상빔",
      "스피드스타"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 34,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": 78,
    "Form": "일반",
    "Pokemon_Name": "날쌩마",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 2782,
    "ATK": 207.0,
    "DEF": 162.0,
    "HP": 163,
    "Fast_Moves": [
      "안다리걸기",
      "회오리불꽃",
      "불태우기"
    ],
    "Elite_Fast_Moves": [
      "불꽃세례"
    ],
    "Charged_Moves": [
      "불대문자",
      "드릴라이너",
      "열풍",
      "니트로차지",
      "열사의대지"
    ],
    "Elite_Charged_Moves": [
      "와일드볼트"
    ],
    "Sprite_Col": 35,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "78-3",
    "Form": "일반",
    "Pokemon_Name": "가라르날쌩마",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "페어리",
    "Max_CP": 2782,
    "ATK": 207.0,
    "DEF": 162.0,
    "HP": 163,
    "Fast_Moves": [
      "안다리걸기",
      "사이코커터",
      "요정의바람"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "치근거리기",
      "사이코키네시스",
      "누르기",
      "메가혼",
      "10만마력"
    ],
    "Elite_Charged_Moves": [
      "와일드볼트"
    ],
    "Sprite_Col": 36,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": 79,
    "Form": "일반",
    "Pokemon_Name": "야돈",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 1386,
    "ATK": 109.0,
    "DEF": 98.0,
    "HP": 207,
    "Fast_Moves": [
      "물대포",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "물의파동",
      "사이코쇼크",
      "사이코키네시스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "79-3",
    "Form": "일반",
    "Pokemon_Name": "가라르야돈",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 1386,
    "ATK": 109.0,
    "DEF": 98.0,
    "HP": 207,
    "Fast_Moves": [
      "염동력",
      "아이언테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파도타기",
      "사이코쇼크",
      "사이코키네시스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 38,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "79-S",
    "Form": "그림자",
    "Pokemon_Name": "야돈",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 1386,
    "ATK": 108.99999999999999,
    "DEF": 97.99999999999999,
    "HP": 207,
    "Fast_Moves": [
      "물대포",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "물의파동",
      "사이코쇼크",
      "사이코키네시스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": 80,
    "Form": "일반",
    "Pokemon_Name": "야도란",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 2877,
    "ATK": 177.0,
    "DEF": 180.0,
    "HP": 216,
    "Fast_Moves": [
      "물대포",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "물의파동",
      "사이코키네시스",
      "냉동빔",
      "열탕",
      "드레인펀치"
    ],
    "Elite_Charged_Moves": [
      "파도타기"
    ],
    "Sprite_Col": 39,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "80-3",
    "Form": "일반",
    "Pokemon_Name": "가라르야도란",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 2764,
    "ATK": 182.0,
    "DEF": 156.0,
    "HP": 216,
    "Fast_Moves": [
      "염동력",
      "독찌르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "기합구슬",
      "사이코키네시스",
      "오물폭탄",
      "열탕",
      "세차게휘두르기",
      "드레인펀치"
    ],
    "Elite_Charged_Moves": [
      "파도타기"
    ],
    "Sprite_Col": 40,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "80-M1",
    "Form": "메가",
    "Pokemon_Name": "야도란",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 4245,
    "ATK": 224.0,
    "DEF": 259.0,
    "HP": 216,
    "Fast_Moves": [
      "물대포",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "물의파동",
      "사이코키네시스",
      "냉동빔",
      "열탕",
      "드레인펀치"
    ],
    "Elite_Charged_Moves": [
      "파도타기"
    ],
    "Sprite_Col": 41,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "80-S",
    "Form": "그림자",
    "Pokemon_Name": "야도란",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 2877,
    "ATK": 177.0,
    "DEF": 180.00000000000003,
    "HP": 216,
    "Fast_Moves": [
      "물대포",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "물의파동",
      "사이코키네시스",
      "냉동빔",
      "열탕",
      "드레인펀치"
    ],
    "Elite_Charged_Moves": [
      "파도타기"
    ],
    "Sprite_Col": 39,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": 81,
    "Form": "일반",
    "Pokemon_Name": "코일",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "강철",
    "Max_CP": 1540,
    "ATK": 165.0,
    "DEF": 121.0,
    "HP": 93,
    "Fast_Moves": [
      "스파크",
      "전기쇼크",
      "볼트체인지",
      "금속음"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "방전",
      "마그넷봄",
      "10만볼트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 42,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "81-S",
    "Form": "그림자",
    "Pokemon_Name": "코일",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "강철",
    "Max_CP": 1540,
    "ATK": 165.0,
    "DEF": 121.0,
    "HP": 93,
    "Fast_Moves": [
      "스파크",
      "전기쇼크",
      "볼트체인지",
      "금속음"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "방전",
      "마그넷봄",
      "10만볼트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 42,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": 82,
    "Form": "일반",
    "Pokemon_Name": "레어코일",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "강철",
    "Max_CP": 2810,
    "ATK": 223.0,
    "DEF": 169.0,
    "HP": 137,
    "Fast_Moves": [
      "스파크",
      "차지빔",
      "전기쇼크",
      "볼트체인지",
      "금속음"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "전자포",
      "마그넷봄",
      "러스터캐논",
      "방전"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 43,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "82-S",
    "Form": "그림자",
    "Pokemon_Name": "레어코일",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "강철",
    "Max_CP": 2810,
    "ATK": 222.99999999999997,
    "DEF": 169.0,
    "HP": 137,
    "Fast_Moves": [
      "스파크",
      "차지빔",
      "전기쇼크",
      "볼트체인지",
      "금속음"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "전자포",
      "마그넷봄",
      "러스터캐논",
      "방전"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 43,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": 83,
    "Form": "일반",
    "Pokemon_Name": "파오리",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 1397,
    "ATK": 124.0,
    "DEF": 115.0,
    "HP": 141,
    "Fast_Moves": [
      "에어슬래시",
      "연속자르기"
    ],
    "Elite_Fast_Moves": [
      "풀베기"
    ],
    "Charged_Moves": [
      "제비반환",
      "에어커터",
      "리프블레이드"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 44,
    "Sprite_Row": 3
  },
  {
    "Pokemon_ID": "83-3",
    "Form": "일반",
    "Pokemon_Name": "가라르파오리",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 1893,
    "ATK": 174.0,
    "DEF": 114.0,
    "HP": 141,
    "Fast_Moves": [
      "바위깨기",
      "연속자르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨트리기",
      "브레이브버드",
      "리프블레이드"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 84,
    "Form": "일반",
    "Pokemon_Name": "두두",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 1357,
    "ATK": 158.0,
    "DEF": 83.0,
    "HP": 111,
    "Fast_Moves": [
      "쪼기",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "회전부리",
      "제비반환",
      "브레이브버드"
    ],
    "Elite_Charged_Moves": [
      "스피드스타"
    ],
    "Sprite_Col": 2,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 85,
    "Form": "일반",
    "Pokemon_Name": "두트리오",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 2670,
    "ATK": 218.0,
    "DEF": 140.0,
    "HP": 155,
    "Fast_Moves": [
      "속여때리기",
      "강철날개",
      "쪼기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "회전부리",
      "제비반환",
      "브레이브버드",
      "개척하기"
    ],
    "Elite_Charged_Moves": [
      "에어커터"
    ],
    "Sprite_Col": 3,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 86,
    "Form": "일반",
    "Pokemon_Name": "쥬쥬",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1098,
    "ATK": 85.0,
    "DEF": 121.0,
    "HP": 163,
    "Fast_Moves": [
      "얼음뭉치",
      "핥기"
    ],
    "Elite_Fast_Moves": [
      "물대포"
    ],
    "Charged_Moves": [
      "오로라빔",
      "얼어붙은바람",
      "아쿠아테일"
    ],
    "Elite_Charged_Moves": [
      "아쿠아제트"
    ],
    "Sprite_Col": 4,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 87,
    "Form": "일반",
    "Pokemon_Name": "쥬레곤",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "얼음",
    "Max_CP": 2245,
    "ATK": 139.0,
    "DEF": 177.0,
    "HP": 207,
    "Fast_Moves": [
      "얼음숨결",
      "아이언테일"
    ],
    "Elite_Fast_Moves": [
      "얼음뭉치"
    ],
    "Charged_Moves": [
      "오로라빔",
      "물의파동",
      "눈보라",
      "드릴라이너",
      "아쿠아브레이크"
    ],
    "Elite_Charged_Moves": [
      "아쿠아제트",
      "얼어붙은바람"
    ],
    "Sprite_Col": 5,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 88,
    "Form": "일반",
    "Pokemon_Name": "질퍽이",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "-",
    "Max_CP": 1553,
    "ATK": 135.0,
    "DEF": 90.0,
    "HP": 190,
    "Fast_Moves": [
      "독찌르기",
      "진흙뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오물공격",
      "진흙폭탄",
      "오물폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 6,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "88-2",
    "Form": "일반",
    "Pokemon_Name": "알로라질퍽이",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "악",
    "Max_CP": 1553,
    "ATK": 135.0,
    "DEF": 90.0,
    "HP": 190,
    "Fast_Moves": [
      "독찌르기",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "더스트슈트",
      "오물폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "88-S",
    "Form": "그림자",
    "Pokemon_Name": "질퍽이",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "-",
    "Max_CP": 1553,
    "ATK": 135.0,
    "DEF": 90.00000000000001,
    "HP": 190,
    "Fast_Moves": [
      "독찌르기",
      "진흙뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오물공격",
      "진흙폭탄",
      "오물폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 6,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "88-S-2",
    "Form": "그림자",
    "Pokemon_Name": "알로라질퍽이",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "악",
    "Max_CP": 1553,
    "ATK": 135.0,
    "DEF": 90.00000000000001,
    "HP": 190,
    "Fast_Moves": [
      "독찌르기",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "더스트슈트",
      "오물폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 89,
    "Form": "일반",
    "Pokemon_Name": "질뻐기",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "-",
    "Max_CP": 3117,
    "ATK": 190.0,
    "DEF": 172.0,
    "HP": 233,
    "Fast_Moves": [
      "엉겨붙기",
      "독찌르기"
    ],
    "Elite_Fast_Moves": [
      "핥기"
    ],
    "Charged_Moves": [
      "악의파동",
      "더스트슈트",
      "오물웨이브",
      "번개펀치",
      "애시드봄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 8,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "89-2",
    "Form": "일반",
    "Pokemon_Name": "알로라질뻐기",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "악",
    "Max_CP": 3117,
    "ATK": 190.0,
    "DEF": 172.0,
    "HP": 233,
    "Fast_Moves": [
      "물기",
      "독찌르기",
      "바크아웃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "악의파동",
      "더스트슈트",
      "오물웨이브",
      "애시드봄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 9,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "89-S",
    "Form": "그림자",
    "Pokemon_Name": "질뻐기",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "-",
    "Max_CP": 3117,
    "ATK": 190.0,
    "DEF": 172.0,
    "HP": 233,
    "Fast_Moves": [
      "엉겨붙기",
      "독찌르기"
    ],
    "Elite_Fast_Moves": [
      "핥기"
    ],
    "Charged_Moves": [
      "악의파동",
      "더스트슈트",
      "오물웨이브",
      "번개펀치",
      "애시드봄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 8,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "89-S-2",
    "Form": "그림자",
    "Pokemon_Name": "알로라질뻐기",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "악",
    "Max_CP": 3117,
    "ATK": 190.0,
    "DEF": 172.0,
    "HP": 233,
    "Fast_Moves": [
      "물기",
      "독찌르기",
      "바크아웃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "악의파동",
      "더스트슈트",
      "오물웨이브",
      "애시드봄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 9,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 90,
    "Form": "일반",
    "Pokemon_Name": "셀러",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1221,
    "ATK": 116.0,
    "DEF": 134.0,
    "HP": 102,
    "Fast_Moves": [
      "얼음뭉치",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "거품광선",
      "물의파동",
      "얼어붙은바람",
      "셸블레이드"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 10,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "90-S",
    "Form": "그림자",
    "Pokemon_Name": "셀러",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1221,
    "ATK": 116.0,
    "DEF": 134.0,
    "HP": 102,
    "Fast_Moves": [
      "얼음뭉치",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "거품광선",
      "물의파동",
      "얼어붙은바람",
      "셸블레이드"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 10,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 91,
    "Form": "일반",
    "Pokemon_Name": "파르셀",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "얼음",
    "Max_CP": 2880,
    "ATK": 186.0,
    "DEF": 256.0,
    "HP": 137,
    "Fast_Moves": [
      "얼음숨결",
      "얼음뭉치"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오로라빔",
      "하이드로펌프",
      "눈사태",
      "얼어붙은바람",
      "아쿠아브레이크",
      "셸블레이드"
    ],
    "Elite_Charged_Moves": [
      "눈보라"
    ],
    "Sprite_Col": 11,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "91-S",
    "Form": "그림자",
    "Pokemon_Name": "파르셀",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "얼음",
    "Max_CP": 2880,
    "ATK": 186.0,
    "DEF": 256.0,
    "HP": 137,
    "Fast_Moves": [
      "얼음숨결",
      "얼음뭉치"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오로라빔",
      "하이드로펌프",
      "눈사태",
      "얼어붙은바람",
      "아쿠아브레이크",
      "셸블레이드"
    ],
    "Elite_Charged_Moves": [
      "눈보라"
    ],
    "Sprite_Col": 11,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 92,
    "Form": "일반",
    "Pokemon_Name": "고오스",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "독",
    "Max_CP": 1390,
    "ATK": 186.0,
    "DEF": 67.0,
    "HP": 102,
    "Fast_Moves": [
      "핥기",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [
      "기습"
    ],
    "Charged_Moves": [
      "나이트헤드",
      "악의파동",
      "오물폭탄"
    ],
    "Elite_Charged_Moves": [
      "괴상한바람"
    ],
    "Sprite_Col": 12,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "92-S",
    "Form": "그림자",
    "Pokemon_Name": "고오스",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "독",
    "Max_CP": 1390,
    "ATK": 186.0,
    "DEF": 67.0,
    "HP": 102,
    "Fast_Moves": [
      "핥기",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [
      "기습"
    ],
    "Charged_Moves": [
      "나이트헤드",
      "악의파동",
      "오물폭탄"
    ],
    "Elite_Charged_Moves": [
      "괴상한바람"
    ],
    "Sprite_Col": 12,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 93,
    "Form": "일반",
    "Pokemon_Name": "고우스트",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "독",
    "Max_CP": 2219,
    "ATK": 223.0,
    "DEF": 107.0,
    "HP": 128,
    "Fast_Moves": [
      "섀도클로",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [
      "핥기"
    ],
    "Charged_Moves": [
      "섀도펀치",
      "악의파동",
      "오물폭탄",
      "섀도볼",
      "냉동펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "93-S",
    "Form": "그림자",
    "Pokemon_Name": "고우스트",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "독",
    "Max_CP": 2219,
    "ATK": 222.99999999999997,
    "DEF": 107.00000000000001,
    "HP": 128,
    "Fast_Moves": [
      "섀도클로",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [
      "핥기"
    ],
    "Charged_Moves": [
      "섀도펀치",
      "악의파동",
      "오물폭탄",
      "섀도볼",
      "냉동펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 94,
    "Form": "일반",
    "Pokemon_Name": "팬텀",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "독",
    "Max_CP": 3254,
    "ATK": 261.0,
    "DEF": 149.0,
    "HP": 155,
    "Fast_Moves": [
      "기습",
      "병상첨병",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [
      "핥기"
    ],
    "Charged_Moves": [
      "섀도볼",
      "기합구슬",
      "오물폭탄",
      "드레인펀치"
    ],
    "Elite_Charged_Moves": [
      "오물웨이브",
      "악의파동",
      "사이코키네시스",
      "섀도펀치"
    ],
    "Sprite_Col": 14,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "94-M1",
    "Form": "메가",
    "Pokemon_Name": "팬텀",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "독",
    "Max_CP": 4902,
    "ATK": 349.0,
    "DEF": 199.0,
    "HP": 155,
    "Fast_Moves": [
      "기습",
      "병상첨병",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [
      "핥기"
    ],
    "Charged_Moves": [
      "섀도볼",
      "기합구슬",
      "오물폭탄",
      "드레인펀치"
    ],
    "Elite_Charged_Moves": [
      "오물웨이브",
      "악의파동",
      "사이코키네시스",
      "섀도펀치"
    ],
    "Sprite_Col": 15,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "94-S",
    "Form": "그림자",
    "Pokemon_Name": "팬텀",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "독",
    "Max_CP": 3254,
    "ATK": 261.0,
    "DEF": 149.0,
    "HP": 155,
    "Fast_Moves": [
      "기습",
      "병상첨병",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [
      "핥기"
    ],
    "Charged_Moves": [
      "섀도볼",
      "기합구슬",
      "오물폭탄",
      "드레인펀치"
    ],
    "Elite_Charged_Moves": [
      "오물웨이브",
      "악의파동",
      "사이코키네시스",
      "섀도펀치"
    ],
    "Sprite_Col": 14,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 95,
    "Form": "일반",
    "Pokemon_Name": "롱스톤",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "땅",
    "Max_CP": 1245,
    "ATK": 85.0,
    "DEF": 232.0,
    "HP": 111,
    "Fast_Moves": [
      "돌떨구기",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "모래지옥",
      "스톤에지",
      "헤비봄버",
      "와이드브레이커"
    ],
    "Elite_Charged_Moves": [
      "아이언헤드",
      "스톤샤워"
    ],
    "Sprite_Col": 17,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "95-S",
    "Form": "그림자",
    "Pokemon_Name": "롱스톤",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "땅",
    "Max_CP": 1245,
    "ATK": 85.0,
    "DEF": 232.0,
    "HP": 111,
    "Fast_Moves": [
      "돌떨구기",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "모래지옥",
      "스톤에지",
      "헤비봄버",
      "와이드브레이커"
    ],
    "Elite_Charged_Moves": [
      "아이언헤드",
      "스톤샤워"
    ],
    "Sprite_Col": 17,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 96,
    "Form": "일반",
    "Pokemon_Name": "슬리프",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 1176,
    "ATK": 89.0,
    "DEF": 136.0,
    "HP": 155,
    "Fast_Moves": [
      "막치기",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "환상빔",
      "사이코쇼크",
      "사이코키네시스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 18,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "96-S",
    "Form": "그림자",
    "Pokemon_Name": "슬리프",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 1176,
    "ATK": 89.0,
    "DEF": 136.0,
    "HP": 155,
    "Fast_Moves": [
      "막치기",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "환상빔",
      "사이코쇼크",
      "사이코키네시스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 18,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 97,
    "Form": "일반",
    "Pokemon_Name": "슬리퍼",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 2363,
    "ATK": 144.0,
    "DEF": 193.0,
    "HP": 198,
    "Fast_Moves": [
      "사념의박치기",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미래예지",
      "사이코키네시스",
      "기합구슬",
      "불꽃펀치",
      "냉동펀치",
      "번개펀치",
      "섀도볼"
    ],
    "Elite_Charged_Moves": [
      "사이코쇼크"
    ],
    "Sprite_Col": 19,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "97-S",
    "Form": "그림자",
    "Pokemon_Name": "슬리퍼",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 2363,
    "ATK": 144.0,
    "DEF": 193.0,
    "HP": 198,
    "Fast_Moves": [
      "사념의박치기",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미래예지",
      "사이코키네시스",
      "기합구슬",
      "불꽃펀치",
      "냉동펀치",
      "번개펀치",
      "섀도볼"
    ],
    "Elite_Charged_Moves": [
      "사이코쇼크"
    ],
    "Sprite_Col": 19,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 98,
    "Form": "일반",
    "Pokemon_Name": "크랩",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1764,
    "ATK": 181.0,
    "DEF": 124.0,
    "HP": 102,
    "Fast_Moves": [
      "거품",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "찝기",
      "거품광선",
      "물의파동",
      "셸블레이드"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 20,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 99,
    "Form": "일반",
    "Pokemon_Name": "킹크랩",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 3198,
    "ATK": 240.0,
    "DEF": 181.0,
    "HP": 146,
    "Fast_Moves": [
      "거품",
      "메탈클로"
    ],
    "Elite_Fast_Moves": [
      "머드샷"
    ],
    "Charged_Moves": [
      "찝기",
      "시저크로스",
      "물의파동",
      "집게해머",
      "셸블레이드"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 21,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 100,
    "Form": "일반",
    "Pokemon_Name": "찌리리공",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 1141,
    "ATK": 109.0,
    "DEF": 111.0,
    "HP": 120,
    "Fast_Moves": [
      "스파크",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "방전",
      "10만볼트",
      "자이로볼"
    ],
    "Elite_Charged_Moves": [
      "시그널빔"
    ],
    "Sprite_Col": 23,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "100-4",
    "Form": "일반",
    "Pokemon_Name": "히스이찌리리공",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "풀",
    "Max_CP": 1141,
    "ATK": 109.0,
    "DEF": 111.0,
    "HP": 120,
    "Fast_Moves": [
      "차지빔",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스피드스타",
      "10만볼트",
      "에너지볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "100-S",
    "Form": "그림자",
    "Pokemon_Name": "찌리리공",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 1141,
    "ATK": 108.99999999999999,
    "DEF": 111.0,
    "HP": 120,
    "Fast_Moves": [
      "스파크",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "방전",
      "10만볼트",
      "자이로볼"
    ],
    "Elite_Charged_Moves": [
      "시그널빔"
    ],
    "Sprite_Col": 23,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 101,
    "Form": "일반",
    "Pokemon_Name": "붐볼",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 2373,
    "ATK": 173.0,
    "DEF": 173.0,
    "HP": 155,
    "Fast_Moves": [
      "스파크",
      "볼트체인지"
    ],
    "Elite_Fast_Moves": [
      "몸통박치기"
    ],
    "Charged_Moves": [
      "방전",
      "10만볼트",
      "파괴광선",
      "속임수"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 25,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "101-4",
    "Form": "일반",
    "Pokemon_Name": "히스이붐볼",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "풀",
    "Max_CP": 2430,
    "ATK": 176.0,
    "DEF": 176.0,
    "HP": 155,
    "Fast_Moves": [
      "전기쇼크",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스피드스타",
      "와일드볼트",
      "에너지볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 26,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "101-S",
    "Form": "그림자",
    "Pokemon_Name": "붐볼",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 2373,
    "ATK": 173.0,
    "DEF": 173.0,
    "HP": 155,
    "Fast_Moves": [
      "스파크",
      "볼트체인지"
    ],
    "Elite_Fast_Moves": [
      "몸통박치기"
    ],
    "Charged_Moves": [
      "방전",
      "10만볼트",
      "파괴광선",
      "속임수"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 25,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 102,
    "Form": "일반",
    "Pokemon_Name": "아라리",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 1328,
    "ATK": 107.0,
    "DEF": 125.0,
    "HP": 155,
    "Fast_Moves": [
      "염동력",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "씨폭탄",
      "사이코키네시스",
      "원시의힘"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 27,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "102-S",
    "Form": "그림자",
    "Pokemon_Name": "아라리",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 1328,
    "ATK": 107.00000000000001,
    "DEF": 125.0,
    "HP": 155,
    "Fast_Moves": [
      "염동력",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "씨폭탄",
      "사이코키네시스",
      "원시의힘"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 27,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 103,
    "Form": "일반",
    "Pokemon_Name": "나시",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 3408,
    "ATK": 233.0,
    "DEF": 149.0,
    "HP": 216,
    "Fast_Moves": [
      "씨기관총",
      "신통력",
      "염동력"
    ],
    "Elite_Fast_Moves": [
      "사념의박치기"
    ],
    "Charged_Moves": [
      "씨폭탄",
      "사이코키네시스",
      "솔라빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 28,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "103-2",
    "Form": "일반",
    "Pokemon_Name": "알로라나시",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 3407,
    "ATK": 230.0,
    "DEF": 153.0,
    "HP": 216,
    "Fast_Moves": [
      "씨기관총",
      "드래곤테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "씨폭탄",
      "용의파동",
      "솔라빔"
    ],
    "Elite_Charged_Moves": [
      "용성군"
    ],
    "Sprite_Col": 29,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "103-S",
    "Form": "그림자",
    "Pokemon_Name": "나시",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 3408,
    "ATK": 232.99999999999997,
    "DEF": 149.0,
    "HP": 216,
    "Fast_Moves": [
      "씨기관총",
      "신통력",
      "염동력"
    ],
    "Elite_Fast_Moves": [
      "사념의박치기"
    ],
    "Charged_Moves": [
      "씨폭탄",
      "사이코키네시스",
      "솔라빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 28,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "103-S-2",
    "Form": "그림자",
    "Pokemon_Name": "알로라나시",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 3407,
    "ATK": 230.0,
    "DEF": 153.0,
    "HP": 216,
    "Fast_Moves": [
      "씨기관총",
      "드래곤테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "씨폭탄",
      "용의파동",
      "솔라빔"
    ],
    "Elite_Charged_Moves": [
      "용성군"
    ],
    "Sprite_Col": 29,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 104,
    "Form": "일반",
    "Pokemon_Name": "탕구리",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "-",
    "Max_CP": 1152,
    "ATK": 90.0,
    "DEF": 144.0,
    "HP": 137,
    "Fast_Moves": [
      "진흙뿌리기",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "뼈다귀치기",
      "구멍파기",
      "땅고르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "104-S",
    "Form": "그림자",
    "Pokemon_Name": "탕구리",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "-",
    "Max_CP": 1152,
    "ATK": 90.0,
    "DEF": 144.0,
    "HP": 137,
    "Fast_Moves": [
      "진흙뿌리기",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "뼈다귀치기",
      "구멍파기",
      "땅고르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 105,
    "Form": "일반",
    "Pokemon_Name": "텅구리",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "-",
    "Max_CP": 2075,
    "ATK": 144.0,
    "DEF": 186.0,
    "HP": 155,
    "Fast_Moves": [
      "진흙뿌리기",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "뼈다귀치기",
      "구멍파기",
      "지진",
      "스톤샤워"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "105-2",
    "Form": "일반",
    "Pokemon_Name": "알로라텅구리",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "고스트",
    "Max_CP": 2075,
    "ATK": 144.0,
    "DEF": 186.0,
    "HP": 155,
    "Fast_Moves": [
      "병상첨병",
      "바위깨기",
      "회오리불꽃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "뼈다귀치기",
      "섀도볼",
      "불대문자",
      "화염바퀴"
    ],
    "Elite_Charged_Moves": [
      "섀도본"
    ],
    "Sprite_Col": 32,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "105-S",
    "Form": "그림자",
    "Pokemon_Name": "텅구리",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "-",
    "Max_CP": 2075,
    "ATK": 144.0,
    "DEF": 186.0,
    "HP": 155,
    "Fast_Moves": [
      "진흙뿌리기",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "뼈다귀치기",
      "구멍파기",
      "지진",
      "스톤샤워"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "105-S-2",
    "Form": "그림자",
    "Pokemon_Name": "알로라텅구리",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "고스트",
    "Max_CP": 2075,
    "ATK": 144.0,
    "DEF": 186.0,
    "HP": 155,
    "Fast_Moves": [
      "병상첨병",
      "바위깨기",
      "회오리불꽃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "뼈다귀치기",
      "섀도볼",
      "불대문자",
      "화염바퀴"
    ],
    "Elite_Charged_Moves": [
      "섀도본"
    ],
    "Sprite_Col": 32,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 106,
    "Form": "일반",
    "Pokemon_Name": "시라소몬",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 2912,
    "ATK": 224.0,
    "DEF": 181.0,
    "HP": 137,
    "Fast_Moves": [
      "안다리걸기",
      "바위깨기",
      "두번차기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "인파이트",
      "로킥",
      "스톤에지",
      "블레이즈킥"
    ],
    "Elite_Charged_Moves": [
      "짓밟기",
      "깨트리기"
    ],
    "Sprite_Col": 33,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "106-S",
    "Form": "그림자",
    "Pokemon_Name": "시라소몬",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 2912,
    "ATK": 224.00000000000003,
    "DEF": 181.0,
    "HP": 137,
    "Fast_Moves": [
      "안다리걸기",
      "바위깨기",
      "두번차기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "인파이트",
      "로킥",
      "스톤에지",
      "블레이즈킥"
    ],
    "Elite_Charged_Moves": [
      "짓밟기",
      "깨트리기"
    ],
    "Sprite_Col": 33,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 107,
    "Form": "일반",
    "Pokemon_Name": "홍수몬",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 2636,
    "ATK": 193.0,
    "DEF": 197.0,
    "HP": 137,
    "Fast_Moves": [
      "불릿펀치",
      "카운터"
    ],
    "Elite_Fast_Moves": [
      "바위깨기"
    ],
    "Charged_Moves": [
      "불꽃펀치",
      "냉동펀치",
      "번개펀치",
      "인파이트",
      "그로우펀치"
    ],
    "Elite_Charged_Moves": [
      "깨트리기"
    ],
    "Sprite_Col": 34,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "107-S",
    "Form": "그림자",
    "Pokemon_Name": "홍수몬",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 2636,
    "ATK": 193.0,
    "DEF": 197.0,
    "HP": 137,
    "Fast_Moves": [
      "불릿펀치",
      "카운터"
    ],
    "Elite_Fast_Moves": [
      "바위깨기"
    ],
    "Charged_Moves": [
      "불꽃펀치",
      "냉동펀치",
      "번개펀치",
      "인파이트",
      "그로우펀치"
    ],
    "Elite_Charged_Moves": [
      "깨트리기"
    ],
    "Sprite_Col": 34,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 108,
    "Form": "일반",
    "Pokemon_Name": "내루미",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 1595,
    "ATK": 108.0,
    "DEF": 137.0,
    "HP": 207,
    "Fast_Moves": [
      "핥기",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파괴광선",
      "짓밟기",
      "파워휩",
      "김밥말이"
    ],
    "Elite_Charged_Moves": [
      "누르기"
    ],
    "Sprite_Col": 35,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 109,
    "Form": "일반",
    "Pokemon_Name": "또가스",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "-",
    "Max_CP": 1373,
    "ATK": 119.0,
    "DEF": 141.0,
    "HP": 120,
    "Fast_Moves": [
      "몸통박치기",
      "엉겨붙기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오물공격",
      "오물폭탄",
      "악의파동"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "109-S",
    "Form": "그림자",
    "Pokemon_Name": "또가스",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "-",
    "Max_CP": 1373,
    "ATK": 118.99999999999999,
    "DEF": 141.0,
    "HP": 120,
    "Fast_Moves": [
      "몸통박치기",
      "엉겨붙기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오물공격",
      "오물폭탄",
      "악의파동"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 110,
    "Form": "일반",
    "Pokemon_Name": "또도가스",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "-",
    "Max_CP": 2592,
    "ATK": 174.0,
    "DEF": 197.0,
    "HP": 163,
    "Fast_Moves": [
      "몸통박치기",
      "엉겨붙기",
      "구르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오물폭탄",
      "섀도볼",
      "악의파동",
      "10만볼트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "110-3",
    "Form": "일반",
    "Pokemon_Name": "가라르또도가스",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "페어리",
    "Max_CP": 2592,
    "ATK": 174.0,
    "DEF": 197.0,
    "HP": 163,
    "Fast_Moves": [
      "몸통박치기",
      "요정의바람"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오물공격",
      "파괴광선",
      "치근거리기",
      "오버히트",
      "세차게휘두르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 38,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "110-S",
    "Form": "그림자",
    "Pokemon_Name": "또도가스",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "-",
    "Max_CP": 2592,
    "ATK": 174.0,
    "DEF": 197.0,
    "HP": 163,
    "Fast_Moves": [
      "몸통박치기",
      "엉겨붙기",
      "구르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오물폭탄",
      "섀도볼",
      "악의파동",
      "10만볼트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "110-S-3",
    "Form": "그림자",
    "Pokemon_Name": "가라르또도가스",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "페어리",
    "Max_CP": 2592,
    "ATK": 174.0,
    "DEF": 197.0,
    "HP": 163,
    "Fast_Moves": [
      "몸통박치기",
      "요정의바람"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오물공격",
      "파괴광선",
      "치근거리기",
      "오버히트",
      "세차게휘두르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 38,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 111,
    "Form": "일반",
    "Pokemon_Name": "뿔카노",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "바위",
    "Max_CP": 1867,
    "ATK": 140.0,
    "DEF": 127.0,
    "HP": 190,
    "Fast_Moves": [
      "진흙뿌리기",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "땅고르기",
      "뿔찌르기",
      "짓밟기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 39,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "111-S",
    "Form": "그림자",
    "Pokemon_Name": "뿔카노",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "바위",
    "Max_CP": 1867,
    "ATK": 140.0,
    "DEF": 127.0,
    "HP": 190,
    "Fast_Moves": [
      "진흙뿌리기",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "땅고르기",
      "뿔찌르기",
      "짓밟기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 39,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 112,
    "Form": "일반",
    "Pokemon_Name": "코뿌리",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "바위",
    "Max_CP": 3594,
    "ATK": 222.0,
    "DEF": 171.0,
    "HP": 233,
    "Fast_Moves": [
      "진흙뿌리기",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파도타기",
      "지진",
      "스톤에지",
      "와이드브레이커"
    ],
    "Elite_Charged_Moves": [
      "메가혼"
    ],
    "Sprite_Col": 40,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "112-S",
    "Form": "그림자",
    "Pokemon_Name": "코뿌리",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "바위",
    "Max_CP": 3594,
    "ATK": 222.0,
    "DEF": 171.00000000000003,
    "HP": 233,
    "Fast_Moves": [
      "진흙뿌리기",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파도타기",
      "지진",
      "스톤에지",
      "와이드브레이커"
    ],
    "Elite_Charged_Moves": [
      "메가혼"
    ],
    "Sprite_Col": 40,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 113,
    "Form": "일반",
    "Pokemon_Name": "럭키",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 1418,
    "ATK": 60.0,
    "DEF": 128.0,
    "HP": 487,
    "Fast_Moves": [
      "막치기",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "파괴광선",
      "매지컬샤인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 41,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 114,
    "Form": "일반",
    "Pokemon_Name": "덩쿠리",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 2530,
    "ATK": 183.0,
    "DEF": 169.0,
    "HP": 163,
    "Fast_Moves": [
      "덩굴채찍",
      "엉겨붙기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "풀묶기",
      "오물폭탄",
      "솔라빔"
    ],
    "Elite_Charged_Moves": [
      "파워휩"
    ],
    "Sprite_Col": 42,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "114-S",
    "Form": "그림자",
    "Pokemon_Name": "덩쿠리",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 2530,
    "ATK": 183.0,
    "DEF": 169.0,
    "HP": 163,
    "Fast_Moves": [
      "덩굴채찍",
      "엉겨붙기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "풀묶기",
      "오물폭탄",
      "솔라빔"
    ],
    "Elite_Charged_Moves": [
      "파워휩"
    ],
    "Sprite_Col": 42,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 115,
    "Form": "일반",
    "Pokemon_Name": "캥카",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 2924,
    "ATK": 181.0,
    "DEF": 165.0,
    "HP": 233,
    "Fast_Moves": [
      "진흙뿌리기",
      "안다리걸기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "지진",
      "역린",
      "그로우펀치"
    ],
    "Elite_Charged_Moves": [
      "깨트리기",
      "짓밟기"
    ],
    "Sprite_Col": 43,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": "115-M1",
    "Form": "메가",
    "Pokemon_Name": "캥카",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 4353,
    "ATK": 246.0,
    "DEF": 210.0,
    "HP": 233,
    "Fast_Moves": [
      "진흙뿌리기",
      "안다리걸기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "지진",
      "역린",
      "그로우펀치"
    ],
    "Elite_Charged_Moves": [
      "깨트리기",
      "짓밟기"
    ],
    "Sprite_Col": 44,
    "Sprite_Row": 4
  },
  {
    "Pokemon_ID": 116,
    "Form": "일반",
    "Pokemon_Name": "쏘드라",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1194,
    "ATK": 129.0,
    "DEF": 103.0,
    "HP": 102,
    "Fast_Moves": [
      "물대포",
      "거품"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "거품광선",
      "용의파동",
      "러스터캐논"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": "116-S",
    "Form": "그림자",
    "Pokemon_Name": "쏘드라",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1194,
    "ATK": 129.0,
    "DEF": 103.0,
    "HP": 102,
    "Fast_Moves": [
      "물대포",
      "거품"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "거품광선",
      "용의파동",
      "러스터캐논"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": 117,
    "Form": "일반",
    "Pokemon_Name": "시드라",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 2366,
    "ATK": 187.0,
    "DEF": 156.0,
    "HP": 146,
    "Fast_Moves": [
      "물대포",
      "용의숨결"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오로라빔",
      "용의파동",
      "하이드로펌프"
    ],
    "Elite_Charged_Moves": [
      "눈보라"
    ],
    "Sprite_Col": 2,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": "117-S",
    "Form": "그림자",
    "Pokemon_Name": "시드라",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 2366,
    "ATK": 187.0,
    "DEF": 156.0,
    "HP": 146,
    "Fast_Moves": [
      "물대포",
      "용의숨결"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오로라빔",
      "용의파동",
      "하이드로펌프"
    ],
    "Elite_Charged_Moves": [
      "눈보라"
    ],
    "Sprite_Col": 2,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": 118,
    "Form": "일반",
    "Pokemon_Name": "콘치",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1302,
    "ATK": 123.0,
    "DEF": 110.0,
    "HP": 128,
    "Fast_Moves": [
      "쪼기",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "물의파동",
      "뿔찌르기",
      "아쿠아테일"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 3,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": 119,
    "Form": "일반",
    "Pokemon_Name": "왕콘치",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 2444,
    "ATK": 175.0,
    "DEF": 147.0,
    "HP": 190,
    "Fast_Moves": [
      "쪼기",
      "폭포오르기"
    ],
    "Elite_Fast_Moves": [
      "독찌르기"
    ],
    "Charged_Moves": [
      "냉동빔",
      "물의파동",
      "메가혼"
    ],
    "Elite_Charged_Moves": [
      "얼어붙은바람",
      "드릴라이너"
    ],
    "Sprite_Col": 4,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": 120,
    "Form": "일반",
    "Pokemon_Name": "별가사리",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1308,
    "ATK": 137.0,
    "DEF": 112.0,
    "HP": 102,
    "Fast_Moves": [
      "몸통박치기",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스피드스타",
      "거품광선",
      "파워젬"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 5,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": "120-S",
    "Form": "그림자",
    "Pokemon_Name": "별가사리",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1308,
    "ATK": 137.0,
    "DEF": 112.0,
    "HP": 102,
    "Fast_Moves": [
      "몸통박치기",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스피드스타",
      "거품광선",
      "파워젬"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 5,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": 121,
    "Form": "일반",
    "Pokemon_Name": "아쿠스타",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 2922,
    "ATK": 210.0,
    "DEF": 184.0,
    "HP": 155,
    "Fast_Moves": [
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)",
      "물대포",
      "사이코웨이브"
    ],
    "Elite_Fast_Moves": [
      "몸통박치기"
    ],
    "Charged_Moves": [
      "하이드로펌프",
      "파워젬",
      "사이코키네시스",
      "번개",
      "냉동빔",
      "환상빔",
      "파도타기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 6,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": "121-S",
    "Form": "그림자",
    "Pokemon_Name": "아쿠스타",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 2922,
    "ATK": 210.0,
    "DEF": 184.0,
    "HP": 155,
    "Fast_Moves": [
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)",
      "물대포",
      "사이코웨이브"
    ],
    "Elite_Fast_Moves": [
      "몸통박치기"
    ],
    "Charged_Moves": [
      "하이드로펌프",
      "파워젬",
      "사이코키네시스",
      "번개",
      "냉동빔",
      "환상빔",
      "파도타기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 6,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": 122,
    "Form": "일반",
    "Pokemon_Name": "마임맨",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "페어리",
    "Max_CP": 2518,
    "ATK": 192.0,
    "DEF": 205.0,
    "HP": 120,
    "Fast_Moves": [
      "염동력",
      "사념의박치기",
      "메지컬리프",
      "사이코웨이브"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "환상빔",
      "사이코키네시스",
      "섀도볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": "122-3",
    "Form": "일반",
    "Pokemon_Name": "가라르마임맨",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 2338,
    "ATK": 183.0,
    "DEF": 169.0,
    "HP": 137,
    "Fast_Moves": [
      "염동력",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "환상빔",
      "사이코키네시스",
      "냉동펀치",
      "트리플악셀"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 8,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": 123,
    "Form": "일반",
    "Pokemon_Name": "스라크",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "비행",
    "Max_CP": 3060,
    "ATK": 218.0,
    "DEF": 170.0,
    "HP": 172,
    "Fast_Moves": [
      "연속자르기",
      "에어슬래시"
    ],
    "Elite_Fast_Moves": [
      "강철날개"
    ],
    "Charged_Moves": [
      "깜짝베기",
      "시저크로스",
      "제비반환",
      "개척하기"
    ],
    "Elite_Charged_Moves": [
      "벌레의야단법석"
    ],
    "Sprite_Col": 9,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": "123-S",
    "Form": "그림자",
    "Pokemon_Name": "스라크",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "비행",
    "Max_CP": 3060,
    "ATK": 217.99999999999997,
    "DEF": 170.0,
    "HP": 172,
    "Fast_Moves": [
      "연속자르기",
      "에어슬래시"
    ],
    "Elite_Fast_Moves": [
      "강철날개"
    ],
    "Charged_Moves": [
      "깜짝베기",
      "시저크로스",
      "제비반환",
      "개척하기"
    ],
    "Elite_Charged_Moves": [
      "벌레의야단법석"
    ],
    "Sprite_Col": 9,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": 124,
    "Form": "일반",
    "Pokemon_Name": "루주라",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 2888,
    "ATK": 223.0,
    "DEF": 151.0,
    "HP": 163,
    "Fast_Moves": [
      "얼음숨결",
      "염동력"
    ],
    "Elite_Fast_Moves": [
      "막치기"
    ],
    "Charged_Moves": [
      "드레인키스",
      "눈사태",
      "사이코쇼크",
      "기합구슬"
    ],
    "Elite_Charged_Moves": [
      "냉동펀치"
    ],
    "Sprite_Col": 10,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": 125,
    "Form": "일반",
    "Pokemon_Name": "에레브",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 2639,
    "ATK": 198.0,
    "DEF": 158.0,
    "HP": 163,
    "Fast_Moves": [
      "전기쇼크",
      "안다리걸기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "번개펀치",
      "10만볼트",
      "번개"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": "125-S",
    "Form": "그림자",
    "Pokemon_Name": "에레브",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 2639,
    "ATK": 198.0,
    "DEF": 158.0,
    "HP": 163,
    "Fast_Moves": [
      "전기쇼크",
      "안다리걸기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "번개펀치",
      "10만볼트",
      "번개"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": 126,
    "Form": "일반",
    "Pokemon_Name": "마그마",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 2706,
    "ATK": 206.0,
    "DEF": 154.0,
    "HP": 163,
    "Fast_Moves": [
      "불꽃세례",
      "태권당수"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "불대문자",
      "불꽃펀치",
      "화염방사",
      "열사의대지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 12,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": "126-S",
    "Form": "그림자",
    "Pokemon_Name": "마그마",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 2706,
    "ATK": 206.0,
    "DEF": 154.0,
    "HP": 163,
    "Fast_Moves": [
      "불꽃세례",
      "태권당수"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "불대문자",
      "불꽃펀치",
      "화염방사",
      "열사의대지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 12,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": 127,
    "Form": "일반",
    "Pokemon_Name": "쁘사이저",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 3345,
    "ATK": 238.0,
    "DEF": 182.0,
    "HP": 163,
    "Fast_Moves": [
      "바위깨기",
      "벌레먹기",
      "연속자르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "찝기",
      "시저크로스",
      "인파이트",
      "엄청난힘"
    ],
    "Elite_Charged_Moves": [
      "지옥의바퀴"
    ],
    "Sprite_Col": 13,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": "127-M1",
    "Form": "메가",
    "Pokemon_Name": "쁘사이저",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "비행",
    "Max_CP": 4728,
    "ATK": 305.0,
    "DEF": 231.0,
    "HP": 163,
    "Fast_Moves": [
      "바위깨기",
      "벌레먹기",
      "연속자르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "찝기",
      "시저크로스",
      "인파이트",
      "엄청난힘"
    ],
    "Elite_Charged_Moves": [
      "지옥의바퀴"
    ],
    "Sprite_Col": 14,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": "127-S",
    "Form": "그림자",
    "Pokemon_Name": "쁘사이저",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 3345,
    "ATK": 237.99999999999997,
    "DEF": 182.0,
    "HP": 163,
    "Fast_Moves": [
      "바위깨기",
      "벌레먹기",
      "연속자르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "찝기",
      "시저크로스",
      "인파이트",
      "엄청난힘"
    ],
    "Elite_Charged_Moves": [
      "지옥의바퀴"
    ],
    "Sprite_Col": 13,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": 128,
    "Form": "일반",
    "Pokemon_Name": "켄타로스",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 2962,
    "ATK": 198.0,
    "DEF": 183.0,
    "HP": 181,
    "Fast_Moves": [
      "몸통박치기",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "뿔찌르기",
      "아이언헤드",
      "지진",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 15,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": "128-5",
    "Form": "일반",
    "Pokemon_Name": "팔데아켄타로스(컴뱃)",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 3207,
    "ATK": 210.0,
    "DEF": 193.0,
    "HP": 181,
    "Fast_Moves": [
      "몸통박치기",
      "사념의박치기",
      "두번차기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아이언헤드",
      "지진",
      "개척하기",
      "인파이트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 16,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": "128-5",
    "Form": "일반",
    "Pokemon_Name": "팔데아켄타로스(블레이즈)",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "불꽃",
    "Max_CP": 3207,
    "ATK": 210.0,
    "DEF": 193.0,
    "HP": 181,
    "Fast_Moves": [
      "몸통박치기",
      "사념의박치기",
      "두번차기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아이언헤드",
      "지진",
      "개척하기",
      "니트로차지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 17,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": "128-5",
    "Form": "일반",
    "Pokemon_Name": "팔데아켄타로스(아쿠아)",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "물",
    "Max_CP": 3207,
    "ATK": 210.0,
    "DEF": 193.0,
    "HP": 181,
    "Fast_Moves": [
      "몸통박치기",
      "사념의박치기",
      "두번차기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아이언헤드",
      "지진",
      "개척하기",
      "아쿠아제트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 18,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": 129,
    "Form": "일반",
    "Pokemon_Name": "잉어킹",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 310,
    "ATK": 29.0,
    "DEF": 85.0,
    "HP": 85,
    "Fast_Moves": [
      "튀어오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 19,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": "129-S",
    "Form": "그림자",
    "Pokemon_Name": "잉어킹",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 310,
    "ATK": 29.0,
    "DEF": 85.0,
    "HP": 85,
    "Fast_Moves": [
      "튀어오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 19,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": 130,
    "Form": "일반",
    "Pokemon_Name": "갸라도스",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "비행",
    "Max_CP": 3834,
    "ATK": 237.0,
    "DEF": 186.0,
    "HP": 216,
    "Fast_Moves": [
      "물기",
      "폭포오르기",
      "용의숨결"
    ],
    "Elite_Fast_Moves": [
      "드래곤테일"
    ],
    "Charged_Moves": [
      "하이드로펌프",
      "깨물어부수기",
      "역린",
      "회오리"
    ],
    "Elite_Charged_Moves": [
      "용의파동",
      "아쿠아테일"
    ],
    "Sprite_Col": 20,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": "130-M1",
    "Form": "메가",
    "Pokemon_Name": "갸라도스",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "악",
    "Max_CP": 5332,
    "ATK": 292.0,
    "DEF": 247.0,
    "HP": 216,
    "Fast_Moves": [
      "물기",
      "폭포오르기",
      "용의숨결"
    ],
    "Elite_Fast_Moves": [
      "드래곤테일"
    ],
    "Charged_Moves": [
      "하이드로펌프",
      "깨물어부수기",
      "역린",
      "회오리"
    ],
    "Elite_Charged_Moves": [
      "용의파동",
      "아쿠아테일"
    ],
    "Sprite_Col": 21,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": "130-S",
    "Form": "그림자",
    "Pokemon_Name": "갸라도스",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "비행",
    "Max_CP": 3834,
    "ATK": 237.0,
    "DEF": 186.0,
    "HP": 216,
    "Fast_Moves": [
      "물기",
      "폭포오르기",
      "용의숨결"
    ],
    "Elite_Fast_Moves": [
      "드래곤테일"
    ],
    "Charged_Moves": [
      "하이드로펌프",
      "깨물어부수기",
      "역린",
      "회오리"
    ],
    "Elite_Charged_Moves": [
      "용의파동",
      "아쿠아테일"
    ],
    "Sprite_Col": 20,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": 131,
    "Form": "일반",
    "Pokemon_Name": "라프라스",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "얼음",
    "Max_CP": 2985,
    "ATK": 165.0,
    "DEF": 174.0,
    "HP": 277,
    "Fast_Moves": [
      "얼음숨결",
      "물대포",
      "사이코웨이브"
    ],
    "Elite_Fast_Moves": [
      "얼음뭉치"
    ],
    "Charged_Moves": [
      "하이드로펌프",
      "파도타기",
      "눈보라",
      "로케트박치기",
      "물거품아리아"
    ],
    "Elite_Charged_Moves": [
      "용의파동",
      "냉동빔"
    ],
    "Sprite_Col": 22,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": "131-S",
    "Form": "그림자",
    "Pokemon_Name": "라프라스",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "얼음",
    "Max_CP": 2985,
    "ATK": 165.0,
    "DEF": 174.0,
    "HP": 277,
    "Fast_Moves": [
      "얼음숨결",
      "물대포",
      "사이코웨이브"
    ],
    "Elite_Fast_Moves": [
      "얼음뭉치"
    ],
    "Charged_Moves": [
      "하이드로펌프",
      "파도타기",
      "눈보라",
      "로케트박치기",
      "물거품아리아"
    ],
    "Elite_Charged_Moves": [
      "용의파동",
      "냉동빔"
    ],
    "Sprite_Col": 22,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": 132,
    "Form": "일반",
    "Pokemon_Name": "메타몽",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 940,
    "ATK": 91.0,
    "DEF": 91.0,
    "HP": 134,
    "Fast_Moves": [
      "변신"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": 133,
    "Form": "일반",
    "Pokemon_Name": "이브이",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 1210,
    "ATK": 104.0,
    "DEF": 114.0,
    "HP": 146,
    "Fast_Moves": [
      "전광석화",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "스피드스타"
    ],
    "Elite_Charged_Moves": [
      "비장의무기",
      "누르기"
    ],
    "Sprite_Col": 25,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": 134,
    "Form": "일반",
    "Pokemon_Name": "샤미드",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 3521,
    "ATK": 205.0,
    "DEF": 161.0,
    "HP": 277,
    "Fast_Moves": [
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "물의파동",
      "하이드로펌프",
      "아쿠아테일",
      "아쿠아브레이크"
    ],
    "Elite_Charged_Moves": [
      "비장의무기",
      "열탕"
    ],
    "Sprite_Col": 27,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": 135,
    "Form": "일반",
    "Pokemon_Name": "쥬피썬더",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 3265,
    "ATK": 232.0,
    "DEF": 182.0,
    "HP": 163,
    "Fast_Moves": [
      "전기쇼크",
      "볼트체인지"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "방전",
      "10만볼트",
      "번개"
    ],
    "Elite_Charged_Moves": [
      "비장의무기",
      "전자포"
    ],
    "Sprite_Col": 28,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": 136,
    "Form": "일반",
    "Pokemon_Name": "부스터",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 3424,
    "ATK": 246.0,
    "DEF": 179.0,
    "HP": 163,
    "Fast_Moves": [
      "불꽃세례",
      "회오리불꽃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "불대문자",
      "화염방사",
      "오버히트"
    ],
    "Elite_Charged_Moves": [
      "비장의무기",
      "열풍",
      "엄청난힘"
    ],
    "Sprite_Col": 29,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": 137,
    "Form": "일반",
    "Pokemon_Name": "폴리곤",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 1944,
    "ATK": 153.0,
    "DEF": 136.0,
    "HP": 163,
    "Fast_Moves": [
      "차지빔",
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)"
    ],
    "Elite_Fast_Moves": [
      "몸통박치기",
      "사념의박치기"
    ],
    "Charged_Moves": [
      "솔라빔",
      "파괴광선",
      "전자포"
    ],
    "Elite_Charged_Moves": [
      "시그널빔",
      "환상빔",
      "방전"
    ],
    "Sprite_Col": 30,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": "137-S",
    "Form": "그림자",
    "Pokemon_Name": "폴리곤",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 1944,
    "ATK": 153.0,
    "DEF": 136.0,
    "HP": 163,
    "Fast_Moves": [
      "차지빔",
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)"
    ],
    "Elite_Fast_Moves": [
      "몸통박치기",
      "사념의박치기"
    ],
    "Charged_Moves": [
      "솔라빔",
      "파괴광선",
      "전자포"
    ],
    "Elite_Charged_Moves": [
      "시그널빔",
      "환상빔",
      "방전"
    ],
    "Sprite_Col": 30,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": 138,
    "Form": "일반",
    "Pokemon_Name": "암나이트",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "물",
    "Max_CP": 1746,
    "ATK": 155.0,
    "DEF": 153.0,
    "HP": 111,
    "Fast_Moves": [
      "물대포",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "원시의힘",
      "거품광선",
      "록블라스트"
    ],
    "Elite_Charged_Moves": [
      "암석봉인",
      "소금물"
    ],
    "Sprite_Col": 31,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": "138-S",
    "Form": "그림자",
    "Pokemon_Name": "암나이트",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "물",
    "Max_CP": 1746,
    "ATK": 155.0,
    "DEF": 153.0,
    "HP": 111,
    "Fast_Moves": [
      "물대포",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "원시의힘",
      "거품광선",
      "록블라스트"
    ],
    "Elite_Charged_Moves": [
      "암석봉인",
      "소금물"
    ],
    "Sprite_Col": 31,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": 139,
    "Form": "일반",
    "Pokemon_Name": "암스타",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "물",
    "Max_CP": 3150,
    "ATK": 207.0,
    "DEF": 201.0,
    "HP": 172,
    "Fast_Moves": [
      "머드샷",
      "물대포"
    ],
    "Elite_Fast_Moves": [
      "돌떨구기"
    ],
    "Charged_Moves": [
      "원시의힘",
      "하이드로펌프",
      "록블라스트"
    ],
    "Elite_Charged_Moves": [
      "스톤샤워"
    ],
    "Sprite_Col": 32,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": "139-S",
    "Form": "그림자",
    "Pokemon_Name": "암스타",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "물",
    "Max_CP": 3150,
    "ATK": 207.0,
    "DEF": 201.0,
    "HP": 172,
    "Fast_Moves": [
      "머드샷",
      "물대포"
    ],
    "Elite_Fast_Moves": [
      "돌떨구기"
    ],
    "Charged_Moves": [
      "원시의힘",
      "하이드로펌프",
      "록블라스트"
    ],
    "Elite_Charged_Moves": [
      "스톤샤워"
    ],
    "Sprite_Col": 32,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": 140,
    "Form": "일반",
    "Pokemon_Name": "투구",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "물",
    "Max_CP": 1549,
    "ATK": 148.0,
    "DEF": 140.0,
    "HP": 102,
    "Fast_Moves": [
      "할퀴기",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "원시의힘",
      "아쿠아제트",
      "암석봉인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 33,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": 141,
    "Form": "일반",
    "Pokemon_Name": "투구푸스",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "물",
    "Max_CP": 3067,
    "ATK": 220.0,
    "DEF": 186.0,
    "HP": 155,
    "Fast_Moves": [
      "머드샷",
      "바위깨기",
      "폭포오르기"
    ],
    "Elite_Fast_Moves": [
      "연속자르기"
    ],
    "Charged_Moves": [
      "원시의힘",
      "물의파동",
      "스톤에지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 34,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": 142,
    "Form": "일반",
    "Pokemon_Name": "프테라",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "비행",
    "Max_CP": 3147,
    "ATK": 221.0,
    "DEF": 159.0,
    "HP": 190,
    "Fast_Moves": [
      "강철날개",
      "물기",
      "돌떨구기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "원시의힘",
      "아이언헤드",
      "파괴광선",
      "스톤샤워",
      "대지의힘"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 35,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": "142-M1",
    "Form": "메가",
    "Pokemon_Name": "프테라",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "비행",
    "Max_CP": 4655,
    "ATK": 292.0,
    "DEF": 210.0,
    "HP": 190,
    "Fast_Moves": [
      "강철날개",
      "물기",
      "돌떨구기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "원시의힘",
      "아이언헤드",
      "파괴광선",
      "스톤샤워",
      "대지의힘"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": "142-S",
    "Form": "그림자",
    "Pokemon_Name": "프테라",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "비행",
    "Max_CP": 3147,
    "ATK": 221.0,
    "DEF": 159.0,
    "HP": 190,
    "Fast_Moves": [
      "강철날개",
      "물기",
      "돌떨구기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "원시의힘",
      "아이언헤드",
      "파괴광선",
      "스톤샤워",
      "대지의힘"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 35,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": 143,
    "Form": "일반",
    "Pokemon_Name": "잠만보",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 3647,
    "ATK": 190.0,
    "DEF": 169.0,
    "HP": 330,
    "Fast_Moves": [
      "사념의박치기",
      "핥기"
    ],
    "Elite_Fast_Moves": [
      "하품"
    ],
    "Charged_Moves": [
      "헤비봄버",
      "파괴광선",
      "지진",
      "역린",
      "로케트박치기",
      "누르기",
      "엄청난힘"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": "143-S",
    "Form": "그림자",
    "Pokemon_Name": "잠만보",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 3647,
    "ATK": 190.0,
    "DEF": 169.0,
    "HP": 330,
    "Fast_Moves": [
      "사념의박치기",
      "핥기"
    ],
    "Elite_Fast_Moves": [
      "하품"
    ],
    "Charged_Moves": [
      "헤비봄버",
      "파괴광선",
      "지진",
      "역린",
      "로케트박치기",
      "누르기",
      "엄청난힘"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": 144,
    "Form": "일반",
    "Pokemon_Name": "프리져",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "비행",
    "Max_CP": 3450,
    "ATK": 192.0,
    "DEF": 236.0,
    "HP": 207,
    "Fast_Moves": [
      "얼음숨결",
      "얼음뭉치"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "냉동빔",
      "얼어붙은바람",
      "눈보라",
      "원시의힘",
      "트리플악셀"
    ],
    "Elite_Charged_Moves": [
      "폭풍"
    ],
    "Sprite_Col": 39,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": "144-3",
    "Form": "일반",
    "Pokemon_Name": "가라르프리져",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "비행",
    "Max_CP": 4059,
    "ATK": 250.0,
    "DEF": 197.0,
    "HP": 207,
    "Fast_Moves": [
      "염동력",
      "사이코커터"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미래예지",
      "원시의힘",
      "브레이브버드",
      "공중날기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 40,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": "144-S",
    "Form": "그림자",
    "Pokemon_Name": "프리져",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "비행",
    "Max_CP": 3450,
    "ATK": 192.0,
    "DEF": 236.0,
    "HP": 207,
    "Fast_Moves": [
      "얼음숨결",
      "얼음뭉치"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "냉동빔",
      "얼어붙은바람",
      "눈보라",
      "원시의힘",
      "트리플악셀"
    ],
    "Elite_Charged_Moves": [
      "폭풍"
    ],
    "Sprite_Col": 39,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": 145,
    "Form": "일반",
    "Pokemon_Name": "썬더",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "비행",
    "Max_CP": 3987,
    "ATK": 253.0,
    "DEF": 185.0,
    "HP": 207,
    "Fast_Moves": [
      "차지빔"
    ],
    "Elite_Fast_Moves": [
      "전기쇼크"
    ],
    "Charged_Moves": [
      "전자포",
      "10만볼트",
      "번개",
      "원시의힘",
      "회전부리"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 41,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": "145-3",
    "Form": "일반",
    "Pokemon_Name": "가라르썬더",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "비행",
    "Max_CP": 4012,
    "ATK": 252.0,
    "DEF": 189.0,
    "HP": 207,
    "Fast_Moves": [
      "카운터"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "인파이트",
      "원시의힘",
      "브레이브버드",
      "공중날기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 42,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": "145-S",
    "Form": "그림자",
    "Pokemon_Name": "썬더",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "비행",
    "Max_CP": 3987,
    "ATK": 252.99999999999997,
    "DEF": 185.0,
    "HP": 207,
    "Fast_Moves": [
      "차지빔"
    ],
    "Elite_Fast_Moves": [
      "전기쇼크"
    ],
    "Charged_Moves": [
      "전자포",
      "10만볼트",
      "번개",
      "원시의힘",
      "회전부리"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 41,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": 146,
    "Form": "일반",
    "Pokemon_Name": "파이어",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "비행",
    "Max_CP": 3917,
    "ATK": 251.0,
    "DEF": 181.0,
    "HP": 207,
    "Fast_Moves": [
      "회오리불꽃",
      "날개치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "불대문자",
      "열풍",
      "오버히트",
      "원시의힘"
    ],
    "Elite_Charged_Moves": [
      "불새"
    ],
    "Sprite_Col": 43,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": "146-3",
    "Form": "일반",
    "Pokemon_Name": "가라르파이어",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "비행",
    "Max_CP": 3580,
    "ATK": 202.0,
    "DEF": 231.0,
    "HP": 207,
    "Fast_Moves": [
      "기습",
      "날개치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "보복",
      "원시의힘",
      "브레이브버드",
      "공중날기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 44,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": "146-S",
    "Form": "그림자",
    "Pokemon_Name": "파이어",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "비행",
    "Max_CP": 3917,
    "ATK": 251.0,
    "DEF": 181.0,
    "HP": 207,
    "Fast_Moves": [
      "회오리불꽃",
      "날개치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "불대문자",
      "열풍",
      "오버히트",
      "원시의힘"
    ],
    "Elite_Charged_Moves": [
      "불새"
    ],
    "Sprite_Col": 43,
    "Sprite_Row": 5
  },
  {
    "Pokemon_ID": 147,
    "Form": "일반",
    "Pokemon_Name": "미뇽",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "-",
    "Max_CP": 1136,
    "ATK": 119.0,
    "DEF": 91.0,
    "HP": 121,
    "Fast_Moves": [
      "용의숨결",
      "아이언테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "김밥말이",
      "회오리",
      "아쿠아테일"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": "147-S",
    "Form": "그림자",
    "Pokemon_Name": "미뇽",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "-",
    "Max_CP": 1136,
    "ATK": 118.99999999999999,
    "DEF": 91.0,
    "HP": 121,
    "Fast_Moves": [
      "용의숨결",
      "아이언테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "김밥말이",
      "회오리",
      "아쿠아테일"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 148,
    "Form": "일반",
    "Pokemon_Name": "신뇽",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "-",
    "Max_CP": 2012,
    "ATK": 163.0,
    "DEF": 135.0,
    "HP": 156,
    "Fast_Moves": [
      "용의숨결",
      "아이언테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "김밥말이",
      "아쿠아테일",
      "용의파동",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 2,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": "148-S",
    "Form": "그림자",
    "Pokemon_Name": "신뇽",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "-",
    "Max_CP": 2012,
    "ATK": 163.0,
    "DEF": 135.0,
    "HP": 156,
    "Fast_Moves": [
      "용의숨결",
      "아이언테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "김밥말이",
      "아쿠아테일",
      "용의파동",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 2,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 149,
    "Form": "일반",
    "Pokemon_Name": "망나뇽",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "비행",
    "Max_CP": 4287,
    "ATK": 263.0,
    "DEF": 198.0,
    "HP": 209,
    "Fast_Moves": [
      "드래곤테일",
      "강철날개",
      "용의숨결"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "폭풍",
      "파괴광선",
      "역린",
      "드래곤클로",
      "엄청난힘",
      "번개펀치"
    ],
    "Elite_Charged_Moves": [
      "용성군",
      "용의파동"
    ],
    "Sprite_Col": 3,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": "149-S",
    "Form": "그림자",
    "Pokemon_Name": "망나뇽",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "비행",
    "Max_CP": 4287,
    "ATK": 263.0,
    "DEF": 198.0,
    "HP": 209,
    "Fast_Moves": [
      "드래곤테일",
      "강철날개",
      "용의숨결"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "폭풍",
      "파괴광선",
      "역린",
      "드래곤클로",
      "엄청난힘",
      "번개펀치"
    ],
    "Elite_Charged_Moves": [
      "용성군",
      "용의파동"
    ],
    "Sprite_Col": 3,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 150,
    "Form": "일반",
    "Pokemon_Name": "뮤츠",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 4724,
    "ATK": 300.0,
    "DEF": 182.0,
    "HP": 214,
    "Fast_Moves": [
      "사이코커터",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "10만볼트",
      "냉동빔",
      "기합구슬",
      "화염방사"
    ],
    "Elite_Charged_Moves": [
      "사이코브레이크",
      "섀도볼",
      "파괴광선"
    ],
    "Sprite_Col": 4,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 150,
    "Form": "일반",
    "Pokemon_Name": "아머드뮤츠",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 3603,
    "ATK": 182.0,
    "DEF": 278.0,
    "HP": 214,
    "Fast_Moves": [
      "사이코커터",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "10만볼트",
      "냉동빔",
      "기합구슬",
      "화염방사"
    ],
    "Elite_Charged_Moves": [
      "사이코브레이크",
      "섀도볼",
      "파괴광선"
    ],
    "Sprite_Col": 40,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": "150-M1",
    "Form": "메가",
    "Pokemon_Name": "뮤츠X",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "격투",
    "Max_CP": 7339,
    "ATK": 412.0,
    "DEF": 222.0,
    "HP": 235,
    "Fast_Moves": [
      "사이코커터",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "10만볼트",
      "냉동빔",
      "기합구슬",
      "화염방사"
    ],
    "Elite_Charged_Moves": [
      "사이코브레이크",
      "섀도볼",
      "파괴광선"
    ],
    "Sprite_Col": 5,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": "150-M2",
    "Form": "메가",
    "Pokemon_Name": "뮤츠Y",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 7690,
    "ATK": 426.0,
    "DEF": 229.0,
    "HP": 235,
    "Fast_Moves": [
      "사이코커터",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "10만볼트",
      "냉동빔",
      "기합구슬",
      "화염방사"
    ],
    "Elite_Charged_Moves": [
      "사이코브레이크",
      "섀도볼",
      "파괴광선"
    ],
    "Sprite_Col": 6,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": "150-S",
    "Form": "그림자",
    "Pokemon_Name": "뮤츠",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 4724,
    "ATK": 300.0,
    "DEF": 182.0,
    "HP": 214,
    "Fast_Moves": [
      "사이코커터",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "10만볼트",
      "냉동빔",
      "기합구슬",
      "화염방사"
    ],
    "Elite_Charged_Moves": [
      "사이코브레이크",
      "섀도볼",
      "파괴광선"
    ],
    "Sprite_Col": 4,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 151,
    "Form": "일반",
    "Pokemon_Name": "뮤",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 3691,
    "ATK": 210.0,
    "DEF": 210.0,
    "HP": 225,
    "Fast_Moves": [
      "막치기",
      "강철날개",
      "차지빔",
      "섀도클로",
      "볼트체인지",
      "벌레의저항",
      "얼음숨결",
      "드래곤테일",
      "엉겨붙기",
      "독찌르기",
      "바위깨기",
      "바크아웃",
      "풀베기",
      "폭포오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "원시의힘",
      "드래곤클로",
      "사이코쇼크",
      "냉동빔",
      "눈보라",
      "파괴광선",
      "솔라빔",
      "10만볼트",
      "번개",
      "니트로차지",
      "로킥",
      "오버히트",
      "기합구슬",
      "에너지볼",
      "스톤에지",
      "자이로볼",
      "땅고르기",
      "스톤샤워",
      "풀묶기",
      "러스터캐논",
      "와일드볼트",
      "악의파동",
      "매지컬샤인",
      "파도타기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 152,
    "Form": "일반",
    "Pokemon_Name": "치코리타",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 1057,
    "ATK": 92.0,
    "DEF": 122.0,
    "HP": 128,
    "Fast_Moves": [
      "덩굴채찍",
      "몸통박치기",
      "메지컬리프"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "풀묶기",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 8,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": "152-S",
    "Form": "그림자",
    "Pokemon_Name": "치코리타",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 1057,
    "ATK": 92.0,
    "DEF": 122.0,
    "HP": 128,
    "Fast_Moves": [
      "덩굴채찍",
      "몸통박치기",
      "메지컬리프"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "풀묶기",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 8,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 153,
    "Form": "일반",
    "Pokemon_Name": "베이리프",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 1644,
    "ATK": 122.0,
    "DEF": 155.0,
    "HP": 155,
    "Fast_Moves": [
      "잎날가르기",
      "몸통박치기",
      "메지컬리프"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "풀묶기",
      "원시의힘"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 9,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": "153-S",
    "Form": "그림자",
    "Pokemon_Name": "베이리프",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 1644,
    "ATK": 122.00000000000001,
    "DEF": 155.00000000000003,
    "HP": 155,
    "Fast_Moves": [
      "잎날가르기",
      "몸통박치기",
      "메지컬리프"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "풀묶기",
      "원시의힘"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 9,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 154,
    "Form": "일반",
    "Pokemon_Name": "메가니움",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 2725,
    "ATK": 168.0,
    "DEF": 202.0,
    "HP": 190,
    "Fast_Moves": [
      "잎날가르기",
      "덩굴채찍",
      "메지컬리프"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "꽃보라",
      "솔라빔",
      "지진"
    ],
    "Elite_Charged_Moves": [
      "하드플랜트"
    ],
    "Sprite_Col": 10,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": "154-S",
    "Form": "그림자",
    "Pokemon_Name": "메가니움",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 2725,
    "ATK": 168.0,
    "DEF": 202.0,
    "HP": 190,
    "Fast_Moves": [
      "잎날가르기",
      "덩굴채찍",
      "메지컬리프"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "꽃보라",
      "솔라빔",
      "지진"
    ],
    "Elite_Charged_Moves": [
      "하드플랜트"
    ],
    "Sprite_Col": 10,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 155,
    "Form": "일반",
    "Pokemon_Name": "브케인",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 1108,
    "ATK": 116.0,
    "DEF": 93.0,
    "HP": 118,
    "Fast_Moves": [
      "불꽃세례",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "니트로차지",
      "스피드스타",
      "화염방사"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": "155-S",
    "Form": "그림자",
    "Pokemon_Name": "브케인",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 1108,
    "ATK": 116.0,
    "DEF": 93.0,
    "HP": 118,
    "Fast_Moves": [
      "불꽃세례",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "니트로차지",
      "스피드스타",
      "화염방사"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 156,
    "Form": "일반",
    "Pokemon_Name": "마그케인",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 1868,
    "ATK": 158.0,
    "DEF": 126.0,
    "HP": 151,
    "Fast_Moves": [
      "불꽃세례",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "니트로차지",
      "구멍파기",
      "화염방사"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 12,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": "156-S",
    "Form": "그림자",
    "Pokemon_Name": "마그케인",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 1868,
    "ATK": 158.0,
    "DEF": 126.0,
    "HP": 151,
    "Fast_Moves": [
      "불꽃세례",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "니트로차지",
      "구멍파기",
      "화염방사"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 12,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 157,
    "Form": "일반",
    "Pokemon_Name": "블레이범",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 3266,
    "ATK": 223.0,
    "DEF": 173.0,
    "HP": 186,
    "Fast_Moves": [
      "불꽃세례",
      "섀도클로",
      "불태우기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "불대문자",
      "오버히트",
      "솔라빔",
      "번개펀치"
    ],
    "Elite_Charged_Moves": [
      "블라스트번"
    ],
    "Sprite_Col": 13,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": "157-4",
    "Form": "일반",
    "Pokemon_Name": "히스이블레이범",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "고스트",
    "Max_CP": 3385,
    "ATK": 238.0,
    "DEF": 172.0,
    "HP": 177,
    "Fast_Moves": [
      "병상첨병",
      "불꽃세례"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "불꽃펀치",
      "와일드볼트",
      "섀도볼",
      "오버히트",
      "나이트헤드"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 14,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": "157-S",
    "Form": "그림자",
    "Pokemon_Name": "블레이범",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 3266,
    "ATK": 222.99999999999997,
    "DEF": 173.0,
    "HP": 186,
    "Fast_Moves": [
      "불꽃세례",
      "섀도클로",
      "불태우기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "불대문자",
      "오버히트",
      "솔라빔",
      "번개펀치"
    ],
    "Elite_Charged_Moves": [
      "블라스트번"
    ],
    "Sprite_Col": 13,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 158,
    "Form": "일반",
    "Pokemon_Name": "리아코",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1279,
    "ATK": 117.0,
    "DEF": 109.0,
    "HP": 137,
    "Fast_Moves": [
      "물대포",
      "할퀴기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "아쿠아제트",
      "물의파동"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 15,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": "158-S",
    "Form": "그림자",
    "Pokemon_Name": "리아코",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1279,
    "ATK": 117.00000000000001,
    "DEF": 109.0,
    "HP": 137,
    "Fast_Moves": [
      "물대포",
      "할퀴기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "아쿠아제트",
      "물의파동"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 15,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 159,
    "Form": "일반",
    "Pokemon_Name": "엘리게이",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1947,
    "ATK": 150.0,
    "DEF": 142.0,
    "HP": 163,
    "Fast_Moves": [
      "물대포",
      "할퀴기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "냉동펀치",
      "물의파동"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 16,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": "159-S",
    "Form": "그림자",
    "Pokemon_Name": "엘리게이",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1947,
    "ATK": 150.0,
    "DEF": 142.0,
    "HP": 163,
    "Fast_Moves": [
      "물대포",
      "할퀴기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "냉동펀치",
      "물의파동"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 16,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 160,
    "Form": "일반",
    "Pokemon_Name": "장크로다일",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 3230,
    "ATK": 205.0,
    "DEF": 188.0,
    "HP": 198,
    "Fast_Moves": [
      "폭포오르기",
      "물기",
      "얼음엄니",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [
      "물대포"
    ],
    "Charged_Moves": [
      "깨물어부수기",
      "하이드로펌프",
      "냉동빔"
    ],
    "Elite_Charged_Moves": [
      "하이드로캐논"
    ],
    "Sprite_Col": 17,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": "160-S",
    "Form": "그림자",
    "Pokemon_Name": "장크로다일",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 3230,
    "ATK": 205.0,
    "DEF": 188.0,
    "HP": 198,
    "Fast_Moves": [
      "폭포오르기",
      "물기",
      "얼음엄니",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [
      "물대포"
    ],
    "Charged_Moves": [
      "깨물어부수기",
      "하이드로펌프",
      "냉동빔"
    ],
    "Elite_Charged_Moves": [
      "하이드로캐논"
    ],
    "Sprite_Col": 17,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 161,
    "Form": "일반",
    "Pokemon_Name": "꼬리선",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 698,
    "ATK": 79.0,
    "DEF": 73.0,
    "HP": 111,
    "Fast_Moves": [
      "할퀴기",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "깨트리기",
      "풀묶기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 18,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 162,
    "Form": "일반",
    "Pokemon_Name": "다꼬리",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 1987,
    "ATK": 148.0,
    "DEF": 125.0,
    "HP": 198,
    "Fast_Moves": [
      "전광석화",
      "기습"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "깨트리기",
      "파괴광선",
      "스피드스타",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 19,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 163,
    "Form": "일반",
    "Pokemon_Name": "부우부",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 766,
    "ATK": 67.0,
    "DEF": 88.0,
    "HP": 155,
    "Fast_Moves": [
      "속여때리기",
      "쪼기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "제비반환",
      "불새",
      "나이트헤드"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 20,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 164,
    "Form": "일반",
    "Pokemon_Name": "야부엉",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 2288,
    "ATK": 145.0,
    "DEF": 156.0,
    "HP": 225,
    "Fast_Moves": [
      "날개치기",
      "신통력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "불새",
      "나이트헤드",
      "섀도볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 21,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 165,
    "Form": "일반",
    "Pokemon_Name": "레디바",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "비행",
    "Max_CP": 823,
    "ATK": 72.0,
    "DEF": 118.0,
    "HP": 120,
    "Fast_Moves": [
      "몸통박치기",
      "벌레먹기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "은빛바람",
      "스피드스타",
      "제비반환"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 22,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": "165-S",
    "Form": "그림자",
    "Pokemon_Name": "레디바",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "비행",
    "Max_CP": 823,
    "ATK": 72.0,
    "DEF": 118.0,
    "HP": 120,
    "Fast_Moves": [
      "몸통박치기",
      "벌레먹기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "은빛바람",
      "스피드스타",
      "제비반환"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 22,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 166,
    "Form": "일반",
    "Pokemon_Name": "레디안",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "비행",
    "Max_CP": 1522,
    "ATK": 107.0,
    "DEF": 179.0,
    "HP": 146,
    "Fast_Moves": [
      "벌레의저항",
      "벌레먹기",
      "카운터"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "벌레의야단법석",
      "은빛바람",
      "제비반환",
      "폭발펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 23,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": "166-S",
    "Form": "그림자",
    "Pokemon_Name": "레디안",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "비행",
    "Max_CP": 1522,
    "ATK": 107.00000000000001,
    "DEF": 179.0,
    "HP": 146,
    "Fast_Moves": [
      "벌레의저항",
      "벌레먹기",
      "카운터"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "벌레의야단법석",
      "은빛바람",
      "제비반환",
      "폭발펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 23,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 167,
    "Form": "일반",
    "Pokemon_Name": "페이검",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "독",
    "Max_CP": 923,
    "ATK": 105.0,
    "DEF": 73.0,
    "HP": 120,
    "Fast_Moves": [
      "독침",
      "벌레먹기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깜짝베기",
      "시그널빔",
      "크로스포이즌"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 168,
    "Form": "일반",
    "Pokemon_Name": "아리아도스",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "독",
    "Max_CP": 2003,
    "ATK": 161.0,
    "DEF": 124.0,
    "HP": 172,
    "Fast_Moves": [
      "독침",
      "엉겨붙기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "야습",
      "메가혼",
      "크로스포이즌",
      "덤벼들기",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 25,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 169,
    "Form": "일반",
    "Pokemon_Name": "크로뱃",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "비행",
    "Max_CP": 2992,
    "ATK": 194.0,
    "DEF": 178.0,
    "HP": 198,
    "Fast_Moves": [
      "에어슬래시",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도볼",
      "에어커터",
      "오물폭탄",
      "맹독엄니",
      "크로스포이즌"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 26,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": "169-S",
    "Form": "그림자",
    "Pokemon_Name": "크로뱃",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "비행",
    "Max_CP": 2992,
    "ATK": 194.0,
    "DEF": 177.99999999999997,
    "HP": 198,
    "Fast_Moves": [
      "에어슬래시",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도볼",
      "에어커터",
      "오물폭탄",
      "맹독엄니",
      "크로스포이즌"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 26,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 170,
    "Form": "일반",
    "Pokemon_Name": "초라기",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "전기",
    "Max_CP": 1265,
    "ATK": 106.0,
    "DEF": 97.0,
    "HP": 181,
    "Fast_Moves": [
      "거품",
      "스파크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "물의파동",
      "10만볼트",
      "거품광선"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 27,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 171,
    "Form": "일반",
    "Pokemon_Name": "랜턴",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "전기",
    "Max_CP": 2357,
    "ATK": 146.0,
    "DEF": 137.0,
    "HP": 268,
    "Fast_Moves": [
      "물대포",
      "차지빔",
      "스파크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "하이드로펌프",
      "10만볼트",
      "번개",
      "파도타기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 28,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 172,
    "Form": "일반",
    "Pokemon_Name": "피츄",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 535,
    "ATK": 77.0,
    "DEF": 53.0,
    "HP": 85,
    "Fast_Moves": [
      "전기쇼크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "10만볼트",
      "차밍보이스",
      "번개펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 29,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 173,
    "Form": "일반",
    "Pokemon_Name": "삐",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "-",
    "Max_CP": 759,
    "ATK": 75.0,
    "DEF": 79.0,
    "HP": 137,
    "Fast_Moves": [
      "막치기",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "풀묶기",
      "사이코쇼크",
      "시그널빔",
      "스피드스타"
    ],
    "Elite_Charged_Moves": [
      "사이코키네시스",
      "누르기"
    ],
    "Sprite_Col": 30,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 174,
    "Form": "일반",
    "Pokemon_Name": "푸푸린",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "페어리",
    "Max_CP": 605,
    "ATK": 69.0,
    "DEF": 32.0,
    "HP": 207,
    "Fast_Moves": [
      "막치기",
      "속여때리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "와일드볼트",
      "섀도볼",
      "사이코키네시스",
      "스피드스타"
    ],
    "Elite_Charged_Moves": [
      "누르기"
    ],
    "Sprite_Col": 31,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 175,
    "Form": "일반",
    "Pokemon_Name": "토게피",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "-",
    "Max_CP": 743,
    "ATK": 67.0,
    "DEF": 116.0,
    "HP": 111,
    "Fast_Moves": [
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)",
      "쪼기"
    ],
    "Elite_Fast_Moves": [
      "사념의박치기"
    ],
    "Charged_Moves": [
      "원시의힘",
      "사이코쇼크",
      "매지컬샤인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 176,
    "Form": "일반",
    "Pokemon_Name": "토게틱",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "비행",
    "Max_CP": 1931,
    "ATK": 139.0,
    "DEF": 181.0,
    "HP": 146,
    "Fast_Moves": [
      "신통력",
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)",
      "요정의바람"
    ],
    "Elite_Fast_Moves": [
      "강철날개",
      "사념의박치기"
    ],
    "Charged_Moves": [
      "원시의힘",
      "매지컬샤인",
      "제비반환",
      "드레인키스",
      "사이코쇼크"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 33,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 177,
    "Form": "일반",
    "Pokemon_Name": "네이티",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "비행",
    "Max_CP": 1246,
    "ATK": 134.0,
    "DEF": 89.0,
    "HP": 120,
    "Fast_Moves": [
      "쪼기",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "나이트헤드",
      "사이코쇼크",
      "회전부리"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 34,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": "177-S",
    "Form": "그림자",
    "Pokemon_Name": "네이티",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "비행",
    "Max_CP": 1246,
    "ATK": 134.0,
    "DEF": 88.99999999999999,
    "HP": 120,
    "Fast_Moves": [
      "쪼기",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "나이트헤드",
      "사이코쇼크",
      "회전부리"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 34,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 178,
    "Form": "일반",
    "Pokemon_Name": "네이티오",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "비행",
    "Max_CP": 2474,
    "ATK": 192.0,
    "DEF": 146.0,
    "HP": 163,
    "Fast_Moves": [
      "에어슬래시",
      "속여때리기",
      "쪼기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "괴상한바람",
      "미래예지",
      "제비반환",
      "사이코쇼크"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 35,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": "178-S",
    "Form": "그림자",
    "Pokemon_Name": "네이티오",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "비행",
    "Max_CP": 2474,
    "ATK": 192.0,
    "DEF": 146.0,
    "HP": 163,
    "Fast_Moves": [
      "에어슬래시",
      "속여때리기",
      "쪼기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "괴상한바람",
      "미래예지",
      "제비반환",
      "사이코쇼크"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 35,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 179,
    "Form": "일반",
    "Pokemon_Name": "메리프",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 1120,
    "ATK": 114.0,
    "DEF": 79.0,
    "HP": 146,
    "Fast_Moves": [
      "몸통박치기",
      "전기쇼크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "누르기",
      "10만볼트",
      "방전",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": "179-S",
    "Form": "그림자",
    "Pokemon_Name": "메리프",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 1120,
    "ATK": 113.99999999999999,
    "DEF": 79.0,
    "HP": 146,
    "Fast_Moves": [
      "몸통박치기",
      "전기쇼크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "누르기",
      "10만볼트",
      "방전",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 180,
    "Form": "일반",
    "Pokemon_Name": "보송송",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 1720,
    "ATK": 145.0,
    "DEF": 109.0,
    "HP": 172,
    "Fast_Moves": [
      "몸통박치기",
      "차지빔"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파워젬",
      "10만볼트",
      "방전",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": "180-S",
    "Form": "그림자",
    "Pokemon_Name": "보송송",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 1720,
    "ATK": 145.0,
    "DEF": 109.0,
    "HP": 172,
    "Fast_Moves": [
      "몸통박치기",
      "차지빔"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파워젬",
      "10만볼트",
      "방전",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 181,
    "Form": "일반",
    "Pokemon_Name": "전룡",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 3225,
    "ATK": 211.0,
    "DEF": 169.0,
    "HP": 207,
    "Fast_Moves": [
      "차지빔",
      "볼트체인지"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "전자포",
      "기합구슬",
      "번개",
      "파워젬",
      "번개펀치",
      "세차게휘두르기",
      "개척하기"
    ],
    "Elite_Charged_Moves": [
      "용의파동"
    ],
    "Sprite_Col": 38,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": "181-M1",
    "Form": "메가",
    "Pokemon_Name": "전룡",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 4799,
    "ATK": 294.0,
    "DEF": 203.0,
    "HP": 207,
    "Fast_Moves": [
      "차지빔",
      "볼트체인지"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "전자포",
      "기합구슬",
      "번개",
      "파워젬",
      "번개펀치",
      "세차게휘두르기",
      "개척하기"
    ],
    "Elite_Charged_Moves": [
      "용의파동"
    ],
    "Sprite_Col": 39,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": "181-S",
    "Form": "그림자",
    "Pokemon_Name": "전룡",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 3225,
    "ATK": 211.0,
    "DEF": 169.0,
    "HP": 207,
    "Fast_Moves": [
      "차지빔",
      "볼트체인지"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "전자포",
      "기합구슬",
      "번개",
      "파워젬",
      "번개펀치",
      "세차게휘두르기",
      "개척하기"
    ],
    "Elite_Charged_Moves": [
      "용의파동"
    ],
    "Sprite_Col": 38,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 182,
    "Form": "일반",
    "Pokemon_Name": "아르코",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 2578,
    "ATK": 169.0,
    "DEF": 186.0,
    "HP": 181,
    "Fast_Moves": [
      "잎날가르기",
      "용해액",
      "씨기관총",
      "메지컬리프"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "리프블레이드",
      "꽃보라",
      "매지컬샤인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 40,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": "182-S",
    "Form": "그림자",
    "Pokemon_Name": "아르코",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 2578,
    "ATK": 169.0,
    "DEF": 186.0,
    "HP": 181,
    "Fast_Moves": [
      "잎날가르기",
      "용해액",
      "씨기관총",
      "메지컬리프"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "리프블레이드",
      "꽃보라",
      "매지컬샤인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 40,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 183,
    "Form": "일반",
    "Pokemon_Name": "마릴",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "페어리",
    "Max_CP": 521,
    "ATK": 37.0,
    "DEF": 93.0,
    "HP": 172,
    "Fast_Moves": [
      "몸통박치기",
      "거품"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "거품광선",
      "아쿠아테일",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 41,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 184,
    "Form": "일반",
    "Pokemon_Name": "마릴리",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "페어리",
    "Max_CP": 1795,
    "ATK": 112.0,
    "DEF": 152.0,
    "HP": 225,
    "Fast_Moves": [
      "바위깨기",
      "거품"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "치근거리기",
      "하이드로펌프",
      "냉동빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 42,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 185,
    "Form": "일반",
    "Pokemon_Name": "꼬지모",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "-",
    "Max_CP": 2428,
    "ATK": 167.0,
    "DEF": 176.0,
    "HP": 172,
    "Fast_Moves": [
      "돌떨구기",
      "카운터"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤에지",
      "지진",
      "스톤샤워",
      "암석봉인",
      "메테오빔",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 43,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": "185-S",
    "Form": "그림자",
    "Pokemon_Name": "꼬지모",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "-",
    "Max_CP": 2428,
    "ATK": 167.0,
    "DEF": 176.0,
    "HP": 172,
    "Fast_Moves": [
      "돌떨구기",
      "카운터"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤에지",
      "지진",
      "스톤샤워",
      "암석봉인",
      "메테오빔",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 43,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 186,
    "Form": "일반",
    "Pokemon_Name": "왕구리",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 2769,
    "ATK": 174.0,
    "DEF": 179.0,
    "HP": 207,
    "Fast_Moves": [
      "머드샷",
      "거품"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "하이드로펌프",
      "눈보라",
      "파도타기",
      "웨더볼(물)",
      "열탕"
    ],
    "Elite_Charged_Moves": [
      "지진",
      "냉동빔"
    ],
    "Sprite_Col": 44,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": "186-S",
    "Form": "그림자",
    "Pokemon_Name": "왕구리",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 2769,
    "ATK": 174.0,
    "DEF": 179.0,
    "HP": 207,
    "Fast_Moves": [
      "머드샷",
      "거품"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "하이드로펌프",
      "눈보라",
      "파도타기",
      "웨더볼(물)",
      "열탕"
    ],
    "Elite_Charged_Moves": [
      "지진",
      "냉동빔"
    ],
    "Sprite_Col": 44,
    "Sprite_Row": 6
  },
  {
    "Pokemon_ID": 187,
    "Form": "일반",
    "Pokemon_Name": "통통코",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "비행",
    "Max_CP": 678,
    "ATK": 67.0,
    "DEF": 94.0,
    "HP": 111,
    "Fast_Moves": [
      "몸통박치기",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "풀묶기",
      "매지컬샤인",
      "씨폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 7
  },
  {
    "Pokemon_ID": "187-S",
    "Form": "그림자",
    "Pokemon_Name": "통통코",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "비행",
    "Max_CP": 678,
    "ATK": 67.0,
    "DEF": 94.0,
    "HP": 111,
    "Fast_Moves": [
      "몸통박치기",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "풀묶기",
      "매지컬샤인",
      "씨폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 7
  },
  {
    "Pokemon_ID": 188,
    "Form": "일반",
    "Pokemon_Name": "두코",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "비행",
    "Max_CP": 1103,
    "ATK": 91.0,
    "DEF": 120.0,
    "HP": 146,
    "Fast_Moves": [
      "몸통박치기",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "풀묶기",
      "매지컬샤인",
      "에너지볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 2,
    "Sprite_Row": 7
  },
  {
    "Pokemon_ID": "188-S",
    "Form": "그림자",
    "Pokemon_Name": "두코",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "비행",
    "Max_CP": 1103,
    "ATK": 91.0,
    "DEF": 120.0,
    "HP": 146,
    "Fast_Moves": [
      "몸통박치기",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "풀묶기",
      "매지컬샤인",
      "에너지볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 2,
    "Sprite_Row": 7
  },
  {
    "Pokemon_ID": 189,
    "Form": "일반",
    "Pokemon_Name": "솜솜코",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "비행",
    "Max_CP": 1850,
    "ATK": 118.0,
    "DEF": 183.0,
    "HP": 181,
    "Fast_Moves": [
      "엉겨붙기",
      "씨기관총",
      "요정의바람"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "매지컬샤인",
      "솔라빔",
      "제비반환"
    ],
    "Elite_Charged_Moves": [
      "애크러뱃"
    ],
    "Sprite_Col": 3,
    "Sprite_Row": 7
  },
  {
    "Pokemon_ID": "189-S",
    "Form": "그림자",
    "Pokemon_Name": "솜솜코",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "비행",
    "Max_CP": 1850,
    "ATK": 118.0,
    "DEF": 183.0,
    "HP": 181,
    "Fast_Moves": [
      "엉겨붙기",
      "씨기관총",
      "요정의바람"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "매지컬샤인",
      "솔라빔",
      "제비반환"
    ],
    "Elite_Charged_Moves": [
      "애크러뱃"
    ],
    "Sprite_Col": 3,
    "Sprite_Row": 7
  },
  {
    "Pokemon_ID": 190,
    "Form": "일반",
    "Pokemon_Name": "에이팜",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 1524,
    "ATK": 136.0,
    "DEF": 112.0,
    "HP": 146,
    "Fast_Moves": [
      "할퀴기",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "로킥",
      "스피드스타",
      "제비반환"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 7
  },
  {
    "Pokemon_ID": "190-S",
    "Form": "그림자",
    "Pokemon_Name": "에이팜",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 1524,
    "ATK": 136.0,
    "DEF": 112.0,
    "HP": 146,
    "Fast_Moves": [
      "할퀴기",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "로킥",
      "스피드스타",
      "제비반환"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 7
  },
  {
    "Pokemon_ID": 191,
    "Form": "일반",
    "Pokemon_Name": "해너츠",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 447,
    "ATK": 55.0,
    "DEF": 55.0,
    "HP": 102,
    "Fast_Moves": [
      "잎날가르기",
      "풀베기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "풀묶기",
      "씨폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 5,
    "Sprite_Row": 7
  },
  {
    "Pokemon_ID": 192,
    "Form": "일반",
    "Pokemon_Name": "해루미",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 2421,
    "ATK": 185.0,
    "DEF": 135.0,
    "HP": 181,
    "Fast_Moves": [
      "잎날가르기",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "솔라빔",
      "꽃보라",
      "오물폭탄",
      "리프스톰"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 6,
    "Sprite_Row": 7
  },
  {
    "Pokemon_ID": 193,
    "Form": "일반",
    "Pokemon_Name": "왕자리",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "비행",
    "Max_CP": 1662,
    "ATK": 154.0,
    "DEF": 94.0,
    "HP": 163,
    "Fast_Moves": [
      "전광석화",
      "날개치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "원시의힘",
      "제비반환",
      "은빛바람"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 7
  },
  {
    "Pokemon_ID": 194,
    "Form": "일반",
    "Pokemon_Name": "우파",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "땅",
    "Max_CP": 725,
    "ATK": 75.0,
    "DEF": 66.0,
    "HP": 146,
    "Fast_Moves": [
      "물대포",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "진흙폭탄",
      "구멍파기",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 8,
    "Sprite_Row": 7
  },
  {
    "Pokemon_ID": "194-5",
    "Form": "일반",
    "Pokemon_Name": "팔데아우파",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "땅",
    "Max_CP": 725,
    "ATK": 75.0,
    "DEF": 66.0,
    "HP": 146,
    "Fast_Moves": [
      "독찌르기",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오물웨이브",
      "구멍파기",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 9,
    "Sprite_Row": 7
  },
  {
    "Pokemon_ID": "194-S",
    "Form": "그림자",
    "Pokemon_Name": "우파",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "땅",
    "Max_CP": 725,
    "ATK": 75.0,
    "DEF": 66.0,
    "HP": 146,
    "Fast_Moves": [
      "물대포",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "진흙폭탄",
      "구멍파기",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 8,
    "Sprite_Row": 7
  },
  {
    "Pokemon_ID": 195,
    "Form": "일반",
    "Pokemon_Name": "누오",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "땅",
    "Max_CP": 2252,
    "ATK": 152.0,
    "DEF": 143.0,
    "HP": 216,
    "Fast_Moves": [
      "물대포",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오물폭탄",
      "지진",
      "스톤에지",
      "애시드봄",
      "진흙폭탄",
      "드레인펀치"
    ],
    "Elite_Charged_Moves": [
      "아쿠아테일"
    ],
    "Sprite_Col": 10,
    "Sprite_Row": 7
  },
  {
    "Pokemon_ID": "195-S",
    "Form": "그림자",
    "Pokemon_Name": "누오",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "땅",
    "Max_CP": 2252,
    "ATK": 152.0,
    "DEF": 143.0,
    "HP": 216,
    "Fast_Moves": [
      "물대포",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오물폭탄",
      "지진",
      "스톤에지",
      "애시드봄",
      "진흙폭탄",
      "드레인펀치"
    ],
    "Elite_Charged_Moves": [
      "아쿠아테일"
    ],
    "Sprite_Col": 10,
    "Sprite_Row": 7
  },
  {
    "Pokemon_ID": 196,
    "Form": "일반",
    "Pokemon_Name": "에브이",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 3583,
    "ATK": 261.0,
    "DEF": 175.0,
    "HP": 163,
    "Fast_Moves": [
      "염동력",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "환상빔",
      "사이코키네시스",
      "미래예지",
      "사이코팽"
    ],
    "Elite_Charged_Moves": [
      "비장의무기",
      "섀도볼"
    ],
    "Sprite_Col": 11,
    "Sprite_Row": 7
  },
  {
    "Pokemon_ID": 197,
    "Form": "일반",
    "Pokemon_Name": "블래키",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "-",
    "Max_CP": 2416,
    "ATK": 126.0,
    "DEF": 240.0,
    "HP": 216,
    "Fast_Moves": [
      "속여때리기",
      "바크아웃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "악의파동",
      "속임수"
    ],
    "Elite_Charged_Moves": [
      "비장의무기",
      "사이코키네시스"
    ],
    "Sprite_Col": 12,
    "Sprite_Row": 7
  },
  {
    "Pokemon_ID": 198,
    "Form": "일반",
    "Pokemon_Name": "니로우",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "비행",
    "Max_CP": 1766,
    "ATK": 175.0,
    "DEF": 87.0,
    "HP": 155,
    "Fast_Moves": [
      "쪼기",
      "속여때리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "회전부리",
      "속임수",
      "악의파동"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 7
  },
  {
    "Pokemon_ID": "198-S",
    "Form": "그림자",
    "Pokemon_Name": "니로우",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "비행",
    "Max_CP": 1766,
    "ATK": 175.0,
    "DEF": 87.0,
    "HP": 155,
    "Fast_Moves": [
      "쪼기",
      "속여때리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "회전부리",
      "속임수",
      "악의파동"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 7
  },
  {
    "Pokemon_ID": 199,
    "Form": "일반",
    "Pokemon_Name": "야도킹",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 2877,
    "ATK": 177.0,
    "DEF": 180.0,
    "HP": 216,
    "Fast_Moves": [
      "물대포",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "눈보라",
      "사이코키네시스",
      "불대문자",
      "열탕"
    ],
    "Elite_Charged_Moves": [
      "파도타기"
    ],
    "Sprite_Col": 14,
    "Sprite_Row": 7
  },
  {
    "Pokemon_ID": "199-3",
    "Form": "일반",
    "Pokemon_Name": "가라르야도킹",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 3072,
    "ATK": 190.0,
    "DEF": 180.0,
    "HP": 216,
    "Fast_Moves": [
      "병상첨병",
      "염동력",
      "용해액"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미래예지",
      "섀도볼",
      "오물웨이브",
      "열탕",
      "사이코쇼크"
    ],
    "Elite_Charged_Moves": [
      "파도타기"
    ],
    "Sprite_Col": 15,
    "Sprite_Row": 7
  },
  {
    "Pokemon_ID": "199-S",
    "Form": "그림자",
    "Pokemon_Name": "야도킹",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 2877,
    "ATK": 177.0,
    "DEF": 180.00000000000003,
    "HP": 216,
    "Fast_Moves": [
      "물대포",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "눈보라",
      "사이코키네시스",
      "불대문자",
      "열탕"
    ],
    "Elite_Charged_Moves": [
      "파도타기"
    ],
    "Sprite_Col": 14,
    "Sprite_Row": 7
  },
  {
    "Pokemon_ID": 200,
    "Form": "일반",
    "Pokemon_Name": "무우마",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "-",
    "Max_CP": 2178,
    "ATK": 167.0,
    "DEF": 154.0,
    "HP": 155,
    "Fast_Moves": [
      "놀래키기",
      "병상첨병",
      "사이코웨이브"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "야습",
      "악의파동",
      "괴상한바람"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 16,
    "Sprite_Row": 7
  },
  {
    "Pokemon_ID": "200-S",
    "Form": "그림자",
    "Pokemon_Name": "무우마",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "-",
    "Max_CP": 2178,
    "ATK": 167.0,
    "DEF": 154.0,
    "HP": 155,
    "Fast_Moves": [
      "놀래키기",
      "병상첨병",
      "사이코웨이브"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "야습",
      "악의파동",
      "괴상한바람"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 16,
    "Sprite_Row": 7
  },
  {
    "Pokemon_ID": 201,
    "Form": "일반",
    "Pokemon_Name": "안농",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 1339,
    "ATK": 136.0,
    "DEF": 91.0,
    "HP": 134,
    "Fast_Moves": [
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 17,
    "Sprite_Row": 7
  },
  {
    "Pokemon_ID": 202,
    "Form": "일반",
    "Pokemon_Name": "마자용",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 1160,
    "ATK": 60.0,
    "DEF": 106.0,
    "HP": 382,
    "Fast_Moves": [
      "카운터",
      "튀어오르기",
      "애교부리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미러코트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "202-S",
    "Form": "그림자",
    "Pokemon_Name": "마자용",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 1160,
    "ATK": 60.0,
    "DEF": 105.99999999999999,
    "HP": 382,
    "Fast_Moves": [
      "카운터",
      "튀어오르기",
      "애교부리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미러코트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 203,
    "Form": "일반",
    "Pokemon_Name": "키링키",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 2314,
    "ATK": 182.0,
    "DEF": 133.0,
    "HP": 172,
    "Fast_Moves": [
      "몸통박치기",
      "염동력",
      "두번차기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "10만볼트",
      "미러코트",
      "사이코팽",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 2,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "203-S",
    "Form": "그림자",
    "Pokemon_Name": "키링키",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 2314,
    "ATK": 182.0,
    "DEF": 133.0,
    "HP": 172,
    "Fast_Moves": [
      "몸통박치기",
      "염동력",
      "두번차기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "10만볼트",
      "미러코트",
      "사이코팽",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 2,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 204,
    "Form": "일반",
    "Pokemon_Name": "피콘",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 1253,
    "ATK": 108.0,
    "DEF": 122.0,
    "HP": 137,
    "Fast_Moves": [
      "몸통박치기",
      "벌레먹기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "자이로볼",
      "암석봉인",
      "모래지옥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 3,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "204-S",
    "Form": "그림자",
    "Pokemon_Name": "피콘",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 1253,
    "ATK": 108.0,
    "DEF": 122.0,
    "HP": 137,
    "Fast_Moves": [
      "몸통박치기",
      "벌레먹기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "자이로볼",
      "암석봉인",
      "모래지옥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 3,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 205,
    "Form": "일반",
    "Pokemon_Name": "쏘콘",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "강철",
    "Max_CP": 2580,
    "ATK": 161.0,
    "DEF": 205.0,
    "HP": 181,
    "Fast_Moves": [
      "벌레먹기",
      "벌레의저항",
      "볼트체인지"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "헤비봄버",
      "지진",
      "암석봉인",
      "모래지옥",
      "미러샷"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "205-S",
    "Form": "그림자",
    "Pokemon_Name": "쏘콘",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "강철",
    "Max_CP": 2580,
    "ATK": 161.0,
    "DEF": 205.00000000000003,
    "HP": 181,
    "Fast_Moves": [
      "벌레먹기",
      "벌레의저항",
      "볼트체인지"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "헤비봄버",
      "지진",
      "암석봉인",
      "모래지옥",
      "미러샷"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 206,
    "Form": "일반",
    "Pokemon_Name": "노고치",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 1909,
    "ATK": 131.0,
    "DEF": 128.0,
    "HP": 225,
    "Fast_Moves": [
      "물기",
      "놀래키기",
      "구르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "스톤샤워",
      "드릴라이너"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 5,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 207,
    "Form": "일반",
    "Pokemon_Name": "글라이거",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "비행",
    "Max_CP": 2099,
    "ATK": 143.0,
    "DEF": 184.0,
    "HP": 163,
    "Fast_Moves": [
      "연속자르기",
      "날개치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "제비반환",
      "깜짝베기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 6,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "207-S",
    "Form": "그림자",
    "Pokemon_Name": "글라이거",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "비행",
    "Max_CP": 2099,
    "ATK": 143.0,
    "DEF": 184.0,
    "HP": 163,
    "Fast_Moves": [
      "연속자르기",
      "날개치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "제비반환",
      "깜짝베기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 6,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 208,
    "Form": "일반",
    "Pokemon_Name": "강철톤",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "땅",
    "Max_CP": 2729,
    "ATK": 148.0,
    "DEF": 272.0,
    "HP": 181,
    "Fast_Moves": [
      "아이언테일",
      "드래곤테일",
      "번개엄니"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지진",
      "헤비봄버",
      "깨물어부수기",
      "사이코팽",
      "와이드브레이커"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "208-M1",
    "Form": "메가",
    "Pokemon_Name": "강철톤",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "땅",
    "Max_CP": 4149,
    "ATK": 212.0,
    "DEF": 327.0,
    "HP": 181,
    "Fast_Moves": [
      "아이언테일",
      "드래곤테일",
      "번개엄니"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지진",
      "헤비봄버",
      "깨물어부수기",
      "사이코팽",
      "와이드브레이커"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 8,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "208-S",
    "Form": "그림자",
    "Pokemon_Name": "강철톤",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "땅",
    "Max_CP": 2729,
    "ATK": 148.0,
    "DEF": 272.0,
    "HP": 181,
    "Fast_Moves": [
      "아이언테일",
      "드래곤테일",
      "번개엄니"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지진",
      "헤비봄버",
      "깨물어부수기",
      "사이코팽",
      "와이드브레이커"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 209,
    "Form": "일반",
    "Pokemon_Name": "블루",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "-",
    "Max_CP": 1399,
    "ATK": 137.0,
    "DEF": 85.0,
    "HP": 155,
    "Fast_Moves": [
      "몸통박치기",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "매지컬샤인",
      "깨트리기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 9,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "209-S",
    "Form": "그림자",
    "Pokemon_Name": "블루",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "-",
    "Max_CP": 1399,
    "ATK": 137.0,
    "DEF": 85.0,
    "HP": 155,
    "Fast_Moves": [
      "몸통박치기",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "매지컬샤인",
      "깨트리기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 9,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 210,
    "Form": "일반",
    "Pokemon_Name": "그랑블루",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "-",
    "Max_CP": 2885,
    "ATK": 212.0,
    "DEF": 131.0,
    "HP": 207,
    "Fast_Moves": [
      "물기",
      "바크아웃",
      "애교부리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "치근거리기",
      "인파이트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 10,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "210-S",
    "Form": "그림자",
    "Pokemon_Name": "그랑블루",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "-",
    "Max_CP": 2885,
    "ATK": 212.0,
    "DEF": 131.0,
    "HP": 207,
    "Fast_Moves": [
      "물기",
      "바크아웃",
      "애교부리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "치근거리기",
      "인파이트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 10,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 211,
    "Form": "일반",
    "Pokemon_Name": "침바루",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "독",
    "Max_CP": 2318,
    "ATK": 184.0,
    "DEF": 138.0,
    "HP": 163,
    "Fast_Moves": [
      "독침",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아테일",
      "냉동빔",
      "오물웨이브",
      "애시드봄",
      "마지막일침",
      "열탕"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "211-4",
    "Form": "일반",
    "Pokemon_Name": "히스이침바루",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "독",
    "Max_CP": 2415,
    "ATK": 184.0,
    "DEF": 151.0,
    "HP": 163,
    "Fast_Moves": [
      "독침",
      "독찌르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아테일",
      "냉동빔",
      "오물폭탄",
      "악의파동",
      "섀도볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 12,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "211-S",
    "Form": "그림자",
    "Pokemon_Name": "침바루",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "독",
    "Max_CP": 2318,
    "ATK": 184.0,
    "DEF": 138.0,
    "HP": 163,
    "Fast_Moves": [
      "독침",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아테일",
      "냉동빔",
      "오물웨이브",
      "애시드봄",
      "마지막일침",
      "열탕"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 212,
    "Form": "일반",
    "Pokemon_Name": "핫삼",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "강철",
    "Max_CP": 3393,
    "ATK": 236.0,
    "DEF": 181.0,
    "HP": 172,
    "Fast_Moves": [
      "불릿펀치",
      "연속자르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "시저크로스",
      "아이언헤드",
      "깜짝베기",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "212-M1",
    "Form": "메가",
    "Pokemon_Name": "핫삼",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "강철",
    "Max_CP": 4621,
    "ATK": 279.0,
    "DEF": 250.0,
    "HP": 172,
    "Fast_Moves": [
      "불릿펀치",
      "연속자르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "시저크로스",
      "아이언헤드",
      "깜짝베기",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 14,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "212-S",
    "Form": "그림자",
    "Pokemon_Name": "핫삼",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "강철",
    "Max_CP": 3393,
    "ATK": 236.0,
    "DEF": 181.0,
    "HP": 172,
    "Fast_Moves": [
      "불릿펀치",
      "연속자르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "시저크로스",
      "아이언헤드",
      "깜짝베기",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 213,
    "Form": "일반",
    "Pokemon_Name": "단단지",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "바위",
    "Max_CP": 458,
    "ATK": 17.0,
    "DEF": 396.0,
    "HP": 85,
    "Fast_Moves": [
      "벌레의저항",
      "돌떨구기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "록블라스트",
      "스톤에지",
      "자이로볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 15,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "213-S",
    "Form": "그림자",
    "Pokemon_Name": "단단지",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "바위",
    "Max_CP": 458,
    "ATK": 17.0,
    "DEF": 396.0,
    "HP": 85,
    "Fast_Moves": [
      "벌레의저항",
      "돌떨구기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "록블라스트",
      "스톤에지",
      "자이로볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 15,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 214,
    "Form": "일반",
    "Pokemon_Name": "헤라크로스",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "격투",
    "Max_CP": 3506,
    "ATK": 234.0,
    "DEF": 179.0,
    "HP": 190,
    "Fast_Moves": [
      "카운터",
      "벌레의저항"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "메가혼",
      "인파이트",
      "지진",
      "록블라스트",
      "기선제압"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 16,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "214-M1",
    "Form": "메가",
    "Pokemon_Name": "헤라크로스",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "격투",
    "Max_CP": 5443,
    "ATK": 334.0,
    "DEF": 223.0,
    "HP": 190,
    "Fast_Moves": [
      "카운터",
      "벌레의저항"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "메가혼",
      "인파이트",
      "지진",
      "록블라스트",
      "기선제압"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 17,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 215,
    "Form": "일반",
    "Pokemon_Name": "포푸니",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "얼음",
    "Max_CP": 2319,
    "ATK": 189.0,
    "DEF": 146.0,
    "HP": 146,
    "Fast_Moves": [
      "얼음뭉치",
      "속여때리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "눈사태",
      "냉동펀치",
      "속임수",
      "트리플악셀"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 18,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "215-4",
    "Form": "일반",
    "Pokemon_Name": "히스이포푸니",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "독",
    "Max_CP": 2319,
    "ATK": 189.0,
    "DEF": 146.0,
    "HP": 146,
    "Fast_Moves": [
      "바위깨기",
      "독찌르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "제비반환",
      "인파이트",
      "시저크로스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 19,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "215-S",
    "Form": "그림자",
    "Pokemon_Name": "포푸니",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "얼음",
    "Max_CP": 2319,
    "ATK": 189.0,
    "DEF": 146.0,
    "HP": 146,
    "Fast_Moves": [
      "얼음뭉치",
      "속여때리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "눈사태",
      "냉동펀치",
      "속임수",
      "트리플악셀"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 18,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "215-S-4",
    "Form": "그림자",
    "Pokemon_Name": "히스이포푸니",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "독",
    "Max_CP": 2319,
    "ATK": 189.0,
    "DEF": 146.0,
    "HP": 146,
    "Fast_Moves": [
      "바위깨기",
      "독찌르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "제비반환",
      "인파이트",
      "시저크로스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 19,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 216,
    "Form": "일반",
    "Pokemon_Name": "깜지곰",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 1502,
    "ATK": 142.0,
    "DEF": 93.0,
    "HP": 155,
    "Fast_Moves": [
      "할퀴기",
      "핥기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "크로스촙",
      "깨물어부수기",
      "치근거리기",
      "개척하기",
      "스피드스타"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 20,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "216-S",
    "Form": "그림자",
    "Pokemon_Name": "깜지곰",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 1502,
    "ATK": 142.0,
    "DEF": 93.0,
    "HP": 155,
    "Fast_Moves": [
      "할퀴기",
      "핥기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "크로스촙",
      "깨물어부수기",
      "치근거리기",
      "개척하기",
      "스피드스타"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 20,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 217,
    "Form": "일반",
    "Pokemon_Name": "링곰",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 3329,
    "ATK": 236.0,
    "DEF": 144.0,
    "HP": 207,
    "Fast_Moves": [
      "메탈클로",
      "카운터",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "인파이트",
      "파괴광선",
      "치근거리기",
      "개척하기",
      "스피드스타"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 21,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "217-S",
    "Form": "그림자",
    "Pokemon_Name": "링곰",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 3329,
    "ATK": 236.0,
    "DEF": 144.0,
    "HP": 207,
    "Fast_Moves": [
      "메탈클로",
      "카운터",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "인파이트",
      "파괴광선",
      "치근거리기",
      "개척하기",
      "스피드스타"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 21,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 218,
    "Form": "일반",
    "Pokemon_Name": "마그마그",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 1011,
    "ATK": 118.0,
    "DEF": 71.0,
    "HP": 120,
    "Fast_Moves": [
      "불꽃세례",
      "돌떨구기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "불꽃튀기기",
      "니트로차지",
      "스톤샤워"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 22,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 219,
    "Form": "일반",
    "Pokemon_Name": "마그카르고",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "바위",
    "Max_CP": 1924,
    "ATK": 139.0,
    "DEF": 191.0,
    "HP": 137,
    "Fast_Moves": [
      "불꽃세례",
      "돌떨구기",
      "불태우기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "열풍",
      "오버히트",
      "스톤에지",
      "암석봉인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 23,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 220,
    "Form": "일반",
    "Pokemon_Name": "꾸꾸리",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "땅",
    "Max_CP": 837,
    "ATK": 90.0,
    "DEF": 69.0,
    "HP": 137,
    "Fast_Moves": [
      "몸통박치기",
      "눈싸라기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "얼어붙은바람",
      "누르기",
      "스톤샤워"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "220-S",
    "Form": "그림자",
    "Pokemon_Name": "꾸꾸리",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "땅",
    "Max_CP": 837,
    "ATK": 90.0,
    "DEF": 69.0,
    "HP": 137,
    "Fast_Moves": [
      "몸통박치기",
      "눈싸라기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "얼어붙은바람",
      "누르기",
      "스톤샤워"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 221,
    "Form": "일반",
    "Pokemon_Name": "메꾸리",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "땅",
    "Max_CP": 2652,
    "ATK": 181.0,
    "DEF": 138.0,
    "HP": 225,
    "Fast_Moves": [
      "얼음뭉치",
      "눈싸라기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "눈사태",
      "땅고르기",
      "스톤에지",
      "10만마력",
      "고드름침"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 25,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "221-S",
    "Form": "그림자",
    "Pokemon_Name": "메꾸리",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "땅",
    "Max_CP": 2652,
    "ATK": 181.0,
    "DEF": 138.0,
    "HP": 225,
    "Fast_Moves": [
      "얼음뭉치",
      "눈싸라기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "눈사태",
      "땅고르기",
      "스톤에지",
      "10만마력",
      "고드름침"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 25,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 222,
    "Form": "일반",
    "Pokemon_Name": "코산호",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "바위",
    "Max_CP": 1558,
    "ATK": 118.0,
    "DEF": 156.0,
    "HP": 146,
    "Fast_Moves": [
      "몸통박치기",
      "거품"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "록블라스트",
      "파워젬",
      "거품광선"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 26,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "222-3",
    "Form": "일반",
    "Pokemon_Name": "가라르코산호",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "-",
    "Max_CP": 1692,
    "ATK": 116.0,
    "DEF": 182.0,
    "HP": 155,
    "Fast_Moves": [
      "몸통박치기",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "록블라스트",
      "파워젬",
      "나이트헤드"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 27,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 223,
    "Form": "일반",
    "Pokemon_Name": "총어",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1031,
    "ATK": 127.0,
    "DEF": 69.0,
    "HP": 111,
    "Fast_Moves": [
      "물대포",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오로라빔",
      "물의파동",
      "록블라스트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 28,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 224,
    "Form": "일반",
    "Pokemon_Name": "대포무노",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 2617,
    "ATK": 197.0,
    "DEF": 141.0,
    "HP": 181,
    "Fast_Moves": [
      "물대포",
      "머드샷",
      "록온"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "더스트슈트",
      "물의파동",
      "오로라빔",
      "애시드봄",
      "대포무노포"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 29,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 225,
    "Form": "일반",
    "Pokemon_Name": "딜리버드",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "비행",
    "Max_CP": 1237,
    "ATK": 128.0,
    "DEF": 90.0,
    "HP": 128,
    "Fast_Moves": [
      "프레젠트"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "냉동펀치",
      "얼어붙은바람",
      "제비반환",
      "공중날기",
      "트리플악셀"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "225-S",
    "Form": "그림자",
    "Pokemon_Name": "딜리버드",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "비행",
    "Max_CP": 1237,
    "ATK": 128.0,
    "DEF": 90.00000000000001,
    "HP": 128,
    "Fast_Moves": [
      "프레젠트"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "냉동펀치",
      "얼어붙은바람",
      "제비반환",
      "공중날기",
      "트리플악셀"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 226,
    "Form": "일반",
    "Pokemon_Name": "만타인",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "비행",
    "Max_CP": 2383,
    "ATK": 148.0,
    "DEF": 226.0,
    "HP": 163,
    "Fast_Moves": [
      "거품",
      "날개치기",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "물의파동",
      "냉동빔",
      "제비반환",
      "거품광선"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 227,
    "Form": "일반",
    "Pokemon_Name": "무장조",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "비행",
    "Max_CP": 2383,
    "ATK": 148.0,
    "DEF": 226.0,
    "HP": 163,
    "Fast_Moves": [
      "강철날개",
      "에어슬래시"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "브레이브버드",
      "불새",
      "러스터캐논"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "227-S",
    "Form": "그림자",
    "Pokemon_Name": "무장조",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "비행",
    "Max_CP": 2383,
    "ATK": 148.0,
    "DEF": 226.0,
    "HP": 163,
    "Fast_Moves": [
      "강철날개",
      "에어슬래시"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "브레이브버드",
      "불새",
      "러스터캐논"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 228,
    "Form": "일반",
    "Pokemon_Name": "델빌",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "불꽃",
    "Max_CP": 1395,
    "ATK": 152.0,
    "DEF": 83.0,
    "HP": 128,
    "Fast_Moves": [
      "속여때리기",
      "불꽃세례"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "화염방사",
      "악의파동"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 33,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "228-S",
    "Form": "그림자",
    "Pokemon_Name": "델빌",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "불꽃",
    "Max_CP": 1395,
    "ATK": 152.0,
    "DEF": 83.0,
    "HP": 128,
    "Fast_Moves": [
      "속여때리기",
      "불꽃세례"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "화염방사",
      "악의파동"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 33,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 229,
    "Form": "일반",
    "Pokemon_Name": "헬가",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "불꽃",
    "Max_CP": 2979,
    "ATK": 224.0,
    "DEF": 144.0,
    "HP": 181,
    "Fast_Moves": [
      "바크아웃",
      "불꽃엄니"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "불대문자",
      "속임수",
      "화염방사"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 34,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "229-M1",
    "Form": "메가",
    "Pokemon_Name": "헬가",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "불꽃",
    "Max_CP": 4344,
    "ATK": 289.0,
    "DEF": 194.0,
    "HP": 181,
    "Fast_Moves": [
      "바크아웃",
      "불꽃엄니"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "불대문자",
      "속임수",
      "화염방사"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 35,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "229-S",
    "Form": "그림자",
    "Pokemon_Name": "헬가",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "불꽃",
    "Max_CP": 2979,
    "ATK": 224.00000000000003,
    "DEF": 144.0,
    "HP": 181,
    "Fast_Moves": [
      "바크아웃",
      "불꽃엄니"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "불대문자",
      "속임수",
      "화염방사"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 34,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 230,
    "Form": "일반",
    "Pokemon_Name": "킹드라",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 2986,
    "ATK": 194.0,
    "DEF": 194.0,
    "HP": 181,
    "Fast_Moves": [
      "폭포오르기",
      "용의숨결"
    ],
    "Elite_Fast_Moves": [
      "물대포"
    ],
    "Charged_Moves": [
      "하이드로펌프",
      "눈보라",
      "역린",
      "대포무노포",
      "스피드스타"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "230-S",
    "Form": "그림자",
    "Pokemon_Name": "킹드라",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 2986,
    "ATK": 194.0,
    "DEF": 194.0,
    "HP": 181,
    "Fast_Moves": [
      "폭포오르기",
      "용의숨결"
    ],
    "Elite_Fast_Moves": [
      "물대포"
    ],
    "Charged_Moves": [
      "하이드로펌프",
      "눈보라",
      "역린",
      "대포무노포",
      "스피드스타"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 231,
    "Form": "일반",
    "Pokemon_Name": "코코리",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "-",
    "Max_CP": 1364,
    "ATK": 107.0,
    "DEF": 98.0,
    "HP": 207,
    "Fast_Moves": [
      "몸통박치기",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "땅고르기",
      "스톤샤워",
      "누르기",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "231-S",
    "Form": "그림자",
    "Pokemon_Name": "코코리",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "-",
    "Max_CP": 1364,
    "ATK": 107.00000000000001,
    "DEF": 97.99999999999999,
    "HP": 207,
    "Fast_Moves": [
      "몸통박치기",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "땅고르기",
      "스톤샤워",
      "누르기",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 232,
    "Form": "일반",
    "Pokemon_Name": "코리갑",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "-",
    "Max_CP": 3407,
    "ATK": 214.0,
    "DEF": 185.0,
    "HP": 207,
    "Fast_Moves": [
      "몸통박치기",
      "카운터",
      "진흙뿌리기",
      "애교부리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지진",
      "헤비봄버",
      "치근거리기",
      "누르기",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 38,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "232-S",
    "Form": "그림자",
    "Pokemon_Name": "코리갑",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "-",
    "Max_CP": 3407,
    "ATK": 214.00000000000003,
    "DEF": 185.0,
    "HP": 207,
    "Fast_Moves": [
      "몸통박치기",
      "카운터",
      "진흙뿌리기",
      "애교부리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지진",
      "헤비봄버",
      "치근거리기",
      "누르기",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 38,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 233,
    "Form": "일반",
    "Pokemon_Name": "폴리곤2",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 3065,
    "ATK": 198.0,
    "DEF": 180.0,
    "HP": 198,
    "Fast_Moves": [
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)",
      "차지빔",
      "록온"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "솔라빔",
      "파괴광선",
      "전자포",
      "트라이어택"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 39,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "233-S",
    "Form": "그림자",
    "Pokemon_Name": "폴리곤2",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 3065,
    "ATK": 198.0,
    "DEF": 180.00000000000003,
    "HP": 198,
    "Fast_Moves": [
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)",
      "차지빔",
      "록온"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "솔라빔",
      "파괴광선",
      "전자포",
      "트라이어택"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 39,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 234,
    "Form": "일반",
    "Pokemon_Name": "노라키",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 2447,
    "ATK": 192.0,
    "DEF": 131.0,
    "HP": 177,
    "Fast_Moves": [
      "몸통박치기",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "짓밟기",
      "와일드볼트",
      "메가혼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 40,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "234-S",
    "Form": "그림자",
    "Pokemon_Name": "노라키",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 2447,
    "ATK": 192.0,
    "DEF": 131.0,
    "HP": 177,
    "Fast_Moves": [
      "몸통박치기",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "짓밟기",
      "와일드볼트",
      "메가혼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 40,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 235,
    "Form": "일반",
    "Pokemon_Name": "루브도",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 487,
    "ATK": 40.0,
    "DEF": 83.0,
    "HP": 146,
    "Fast_Moves": [],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 41,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 236,
    "Form": "일반",
    "Pokemon_Name": "배루키",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 556,
    "ATK": 64.0,
    "DEF": 64.0,
    "HP": 111,
    "Fast_Moves": [
      "바위깨기",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨트리기",
      "스톤샤워",
      "로킥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 42,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 237,
    "Form": "일반",
    "Pokemon_Name": "카포에라",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 2438,
    "ATK": 173.0,
    "DEF": 207.0,
    "HP": 137,
    "Fast_Moves": [
      "바위깨기",
      "카운터"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "인파이트",
      "자이로볼",
      "스톤에지",
      "트리플악셀"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 43,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": "237-S",
    "Form": "그림자",
    "Pokemon_Name": "카포에라",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 2438,
    "ATK": 173.0,
    "DEF": 207.0,
    "HP": 137,
    "Fast_Moves": [
      "바위깨기",
      "카운터"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "인파이트",
      "자이로볼",
      "스톤에지",
      "트리플악셀"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 43,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 238,
    "Form": "일반",
    "Pokemon_Name": "뽀뽀라",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 1460,
    "ATK": 153.0,
    "DEF": 91.0,
    "HP": 128,
    "Fast_Moves": [
      "눈싸라기",
      "막치기"
    ],
    "Elite_Fast_Moves": [
      "얼음숨결"
    ],
    "Charged_Moves": [
      "냉동빔",
      "냉동펀치",
      "사이코쇼크"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 44,
    "Sprite_Row": 8
  },
  {
    "Pokemon_ID": 239,
    "Form": "일반",
    "Pokemon_Name": "에레키드",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 1364,
    "ATK": 135.0,
    "DEF": 101.0,
    "HP": 128,
    "Fast_Moves": [
      "전기쇼크",
      "안다리걸기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "번개펀치",
      "깨트리기",
      "방전"
    ],
    "Elite_Charged_Moves": [
      "10만볼트"
    ],
    "Sprite_Col": 1,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 240,
    "Form": "일반",
    "Pokemon_Name": "마그비",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 1496,
    "ATK": 151.0,
    "DEF": 99.0,
    "HP": 128,
    "Fast_Moves": [
      "불꽃세례",
      "태권당수"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨트리기",
      "불꽃펀치",
      "불꽃튀기기"
    ],
    "Elite_Charged_Moves": [
      "화염방사"
    ],
    "Sprite_Col": 2,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 241,
    "Form": "일반",
    "Pokemon_Name": "밀탱크",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 2662,
    "ATK": 157.0,
    "DEF": 193.0,
    "HP": 216,
    "Fast_Moves": [
      "몸통박치기",
      "사념의박치기",
      "구르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "짓밟기",
      "누르기",
      "자이로볼",
      "10만볼트",
      "냉동빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 3,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 242,
    "Form": "일반",
    "Pokemon_Name": "해피너스",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 3117,
    "ATK": 129.0,
    "DEF": 169.0,
    "HP": 496,
    "Fast_Moves": [
      "막치기",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "파괴광선",
      "매지컬샤인"
    ],
    "Elite_Charged_Moves": [
      "와일드볼트"
    ],
    "Sprite_Col": 4,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 243,
    "Form": "일반",
    "Pokemon_Name": "라이코",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 3902,
    "ATK": 241.0,
    "DEF": 195.0,
    "HP": 207,
    "Fast_Moves": [
      "전기쇼크",
      "볼트체인지"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "번개",
      "10만볼트",
      "와일드볼트",
      "섀도볼",
      "파동탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 5,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": "243-S",
    "Form": "그림자",
    "Pokemon_Name": "라이코",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 3902,
    "ATK": 241.0,
    "DEF": 195.0,
    "HP": 207,
    "Fast_Moves": [
      "전기쇼크",
      "볼트체인지"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "번개",
      "10만볼트",
      "와일드볼트",
      "섀도볼",
      "파동탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 5,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 244,
    "Form": "일반",
    "Pokemon_Name": "앤테이",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 3926,
    "ATK": 235.0,
    "DEF": 171.0,
    "HP": 251,
    "Fast_Moves": [
      "회오리불꽃",
      "불꽃엄니"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "화염방사",
      "불대문자",
      "오버히트",
      "아이언헤드",
      "니트로차지",
      "열사의대지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 6,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": "244-S",
    "Form": "그림자",
    "Pokemon_Name": "앤테이",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 3926,
    "ATK": 235.0,
    "DEF": 171.00000000000003,
    "HP": 251,
    "Fast_Moves": [
      "회오리불꽃",
      "불꽃엄니"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "화염방사",
      "불대문자",
      "오버히트",
      "아이언헤드",
      "니트로차지",
      "열사의대지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 6,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 245,
    "Form": "일반",
    "Pokemon_Name": "스이쿤",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 3372,
    "ATK": 180.0,
    "DEF": 235.0,
    "HP": 225,
    "Fast_Moves": [
      "신통력",
      "바크아웃",
      "얼음엄니"
    ],
    "Elite_Fast_Moves": [
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)"
    ],
    "Charged_Moves": [
      "하이드로펌프",
      "거품광선",
      "물의파동",
      "냉동빔",
      "열탕"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": "245-S",
    "Form": "그림자",
    "Pokemon_Name": "스이쿤",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 3372,
    "ATK": 180.0,
    "DEF": 235.0,
    "HP": 225,
    "Fast_Moves": [
      "신통력",
      "바크아웃",
      "얼음엄니"
    ],
    "Elite_Fast_Moves": [
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)"
    ],
    "Charged_Moves": [
      "하이드로펌프",
      "거품광선",
      "물의파동",
      "냉동빔",
      "열탕"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 246,
    "Form": "일반",
    "Pokemon_Name": "애버라스",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "땅",
    "Max_CP": 1176,
    "ATK": 115.0,
    "DEF": 93.0,
    "HP": 137,
    "Fast_Moves": [
      "물기",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "짓밟기",
      "깨물어부수기",
      "원시의힘"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 8,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": "246-S",
    "Form": "그림자",
    "Pokemon_Name": "애버라스",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "땅",
    "Max_CP": 1176,
    "ATK": 115.0,
    "DEF": 93.0,
    "HP": 137,
    "Fast_Moves": [
      "물기",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "짓밟기",
      "깨물어부수기",
      "원시의힘"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 8,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 247,
    "Form": "일반",
    "Pokemon_Name": "데기라스",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "땅",
    "Max_CP": 1996,
    "ATK": 155.0,
    "DEF": 133.0,
    "HP": 172,
    "Fast_Moves": [
      "물기",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "깨물어부수기",
      "원시의힘"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 9,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": "247-S",
    "Form": "그림자",
    "Pokemon_Name": "데기라스",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "땅",
    "Max_CP": 1996,
    "ATK": 155.0,
    "DEF": 133.0,
    "HP": 172,
    "Fast_Moves": [
      "물기",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "깨물어부수기",
      "원시의힘"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 9,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 248,
    "Form": "일반",
    "Pokemon_Name": "마기라스",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "악",
    "Max_CP": 4335,
    "ATK": 251.0,
    "DEF": 207.0,
    "HP": 225,
    "Fast_Moves": [
      "물기",
      "아이언테일"
    ],
    "Elite_Fast_Moves": [
      "떨어뜨리기"
    ],
    "Charged_Moves": [
      "불대문자",
      "깨물어부수기",
      "스톤에지",
      "세차게휘두르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 10,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": "248-M1",
    "Form": "메가",
    "Pokemon_Name": "마기라스",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "악",
    "Max_CP": 6045,
    "ATK": 309.0,
    "DEF": 276.0,
    "HP": 225,
    "Fast_Moves": [
      "물기",
      "아이언테일"
    ],
    "Elite_Fast_Moves": [
      "떨어뜨리기"
    ],
    "Charged_Moves": [
      "불대문자",
      "깨물어부수기",
      "스톤에지",
      "세차게휘두르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": "248-S",
    "Form": "그림자",
    "Pokemon_Name": "마기라스",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "악",
    "Max_CP": 4335,
    "ATK": 251.0,
    "DEF": 207.0,
    "HP": 225,
    "Fast_Moves": [
      "물기",
      "아이언테일"
    ],
    "Elite_Fast_Moves": [
      "떨어뜨리기"
    ],
    "Charged_Moves": [
      "불대문자",
      "깨물어부수기",
      "스톤에지",
      "세차게휘두르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 10,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 249,
    "Form": "일반",
    "Pokemon_Name": "루기아",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "비행",
    "Max_CP": 4186,
    "ATK": 193.0,
    "DEF": 310.0,
    "HP": 235,
    "Fast_Moves": [
      "신통력",
      "드래곤테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "불새",
      "하이드로펌프",
      "미래예지",
      "공중날기"
    ],
    "Elite_Charged_Moves": [
      "에어로블라스트++"
    ],
    "Sprite_Col": 12,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": "249-S",
    "Form": "그림자",
    "Pokemon_Name": "루기아",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "비행",
    "Max_CP": 4186,
    "ATK": 193.0,
    "DEF": 310.00000000000006,
    "HP": 235,
    "Fast_Moves": [
      "신통력",
      "드래곤테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "불새",
      "하이드로펌프",
      "미래예지",
      "공중날기"
    ],
    "Elite_Charged_Moves": [
      "에어로블라스트++"
    ],
    "Sprite_Col": 12,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 250,
    "Form": "일반",
    "Pokemon_Name": "칠색조",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "비행",
    "Max_CP": 4367,
    "ATK": 239.0,
    "DEF": 244.0,
    "HP": 214,
    "Fast_Moves": [
      "신통력",
      "강철날개",
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)",
      "불태우기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "브레이브버드",
      "불대문자",
      "솔라빔"
    ],
    "Elite_Charged_Moves": [
      "지진",
      "성스러운불꽃++"
    ],
    "Sprite_Col": 13,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": "250-S",
    "Form": "그림자",
    "Pokemon_Name": "칠색조",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "비행",
    "Max_CP": 4367,
    "ATK": 239.00000000000003,
    "DEF": 244.0,
    "HP": 214,
    "Fast_Moves": [
      "신통력",
      "강철날개",
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)",
      "불태우기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "브레이브버드",
      "불대문자",
      "솔라빔"
    ],
    "Elite_Charged_Moves": [
      "지진",
      "성스러운불꽃++"
    ],
    "Sprite_Col": 13,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 251,
    "Form": "일반",
    "Pokemon_Name": "세레비",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "풀",
    "Max_CP": 3691,
    "ATK": 210.0,
    "DEF": 210.0,
    "HP": 225,
    "Fast_Moves": [
      "염동력",
      "차지빔"
    ],
    "Elite_Fast_Moves": [
      "메지컬리프"
    ],
    "Charged_Moves": [
      "파괴광선",
      "사이코키네시스",
      "매지컬샤인",
      "씨폭탄",
      "리프스톰",
      "파동탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 14,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 252,
    "Form": "일반",
    "Pokemon_Name": "나무지기",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 1190,
    "ATK": 124.0,
    "DEF": 94.0,
    "HP": 120,
    "Fast_Moves": [
      "막치기",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "제비반환",
      "풀묶기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 15,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": "252-S",
    "Form": "그림자",
    "Pokemon_Name": "나무지기",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 1190,
    "ATK": 123.99999999999999,
    "DEF": 94.0,
    "HP": 120,
    "Fast_Moves": [
      "막치기",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "제비반환",
      "풀묶기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 15,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 253,
    "Form": "일반",
    "Pokemon_Name": "나무돌이",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 1891,
    "ATK": 172.0,
    "DEF": 120.0,
    "HP": 137,
    "Fast_Moves": [
      "전광석화",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "리프블레이드",
      "제비반환",
      "풀묶기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 16,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": "253-S",
    "Form": "그림자",
    "Pokemon_Name": "나무돌이",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 1891,
    "ATK": 172.0,
    "DEF": 120.0,
    "HP": 137,
    "Fast_Moves": [
      "전광석화",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "리프블레이드",
      "제비반환",
      "풀묶기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 16,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 254,
    "Form": "일반",
    "Pokemon_Name": "나무킹",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 3117,
    "ATK": 223.0,
    "DEF": 169.0,
    "HP": 172,
    "Fast_Moves": [
      "연속자르기",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "리프블레이드",
      "제비반환",
      "지진",
      "드래곤클로",
      "와이드브레이커"
    ],
    "Elite_Charged_Moves": [
      "하드플랜트"
    ],
    "Sprite_Col": 17,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": "254-M1",
    "Form": "메가",
    "Pokemon_Name": "나무킹",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 4585,
    "ATK": 320.0,
    "DEF": 186.0,
    "HP": 172,
    "Fast_Moves": [
      "연속자르기",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "리프블레이드",
      "제비반환",
      "지진",
      "드래곤클로",
      "와이드브레이커"
    ],
    "Elite_Charged_Moves": [
      "하드플랜트"
    ],
    "Sprite_Col": 18,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": "254-S",
    "Form": "그림자",
    "Pokemon_Name": "나무킹",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 3117,
    "ATK": 222.99999999999997,
    "DEF": 169.0,
    "HP": 172,
    "Fast_Moves": [
      "연속자르기",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "리프블레이드",
      "제비반환",
      "지진",
      "드래곤클로",
      "와이드브레이커"
    ],
    "Elite_Charged_Moves": [
      "하드플랜트"
    ],
    "Sprite_Col": 17,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 255,
    "Form": "일반",
    "Pokemon_Name": "아차모",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 1236,
    "ATK": 130.0,
    "DEF": 87.0,
    "HP": 128,
    "Fast_Moves": [
      "할퀴기",
      "불꽃세례"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "니트로차지",
      "화염방사",
      "암석봉인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 19,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": "255-S",
    "Form": "그림자",
    "Pokemon_Name": "아차모",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 1236,
    "ATK": 130.0,
    "DEF": 87.0,
    "HP": 128,
    "Fast_Moves": [
      "할퀴기",
      "불꽃세례"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "니트로차지",
      "화염방사",
      "암석봉인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 19,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 256,
    "Form": "일반",
    "Pokemon_Name": "영치코",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "격투",
    "Max_CP": 1868,
    "ATK": 163.0,
    "DEF": 115.0,
    "HP": 155,
    "Fast_Moves": [
      "쪼기",
      "불꽃세례"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "니트로차지",
      "화염방사",
      "스톤샤워"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 20,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": "256-S",
    "Form": "그림자",
    "Pokemon_Name": "영치코",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "격투",
    "Max_CP": 1868,
    "ATK": 163.0,
    "DEF": 114.99999999999999,
    "HP": 155,
    "Fast_Moves": [
      "쪼기",
      "불꽃세례"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "니트로차지",
      "화염방사",
      "스톤샤워"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 20,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 257,
    "Form": "일반",
    "Pokemon_Name": "번치코",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "격투",
    "Max_CP": 3219,
    "ATK": 240.0,
    "DEF": 141.0,
    "HP": 190,
    "Fast_Moves": [
      "카운터",
      "회오리불꽃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "기합구슬",
      "오버히트",
      "브레이브버드",
      "블레이즈킥"
    ],
    "Elite_Charged_Moves": [
      "블라스트번",
      "스톤에지"
    ],
    "Sprite_Col": 21,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": "257-M1",
    "Form": "메가",
    "Pokemon_Name": "번치코",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "격투",
    "Max_CP": 4704,
    "ATK": 329.0,
    "DEF": 168.0,
    "HP": 190,
    "Fast_Moves": [
      "카운터",
      "회오리불꽃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "기합구슬",
      "오버히트",
      "브레이브버드",
      "블레이즈킥"
    ],
    "Elite_Charged_Moves": [
      "블라스트번",
      "스톤에지"
    ],
    "Sprite_Col": 22,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": "257-S",
    "Form": "그림자",
    "Pokemon_Name": "번치코",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "격투",
    "Max_CP": 3219,
    "ATK": 240.0,
    "DEF": 141.0,
    "HP": 190,
    "Fast_Moves": [
      "카운터",
      "회오리불꽃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "기합구슬",
      "오버히트",
      "브레이브버드",
      "블레이즈킥"
    ],
    "Elite_Charged_Moves": [
      "블라스트번",
      "스톤에지"
    ],
    "Sprite_Col": 21,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 258,
    "Form": "일반",
    "Pokemon_Name": "물짱이",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1275,
    "ATK": 126.0,
    "DEF": 93.0,
    "HP": 137,
    "Fast_Moves": [
      "몸통박치기",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "오물공격",
      "짓밟기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 23,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": "258-S",
    "Form": "그림자",
    "Pokemon_Name": "물짱이",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1275,
    "ATK": 126.0,
    "DEF": 93.0,
    "HP": 137,
    "Fast_Moves": [
      "몸통박치기",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "오물공격",
      "짓밟기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 23,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 259,
    "Form": "일반",
    "Pokemon_Name": "늪짱이",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "땅",
    "Max_CP": 2008,
    "ATK": 156.0,
    "DEF": 133.0,
    "HP": 172,
    "Fast_Moves": [
      "머드샷",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "진흙폭탄",
      "오물공격",
      "파도타기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": "259-S",
    "Form": "그림자",
    "Pokemon_Name": "늪짱이",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "땅",
    "Max_CP": 2008,
    "ATK": 156.0,
    "DEF": 133.0,
    "HP": 172,
    "Fast_Moves": [
      "머드샷",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "진흙폭탄",
      "오물공격",
      "파도타기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 260,
    "Form": "일반",
    "Pokemon_Name": "대짱이",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "땅",
    "Max_CP": 3362,
    "ATK": 208.0,
    "DEF": 175.0,
    "HP": 225,
    "Fast_Moves": [
      "머드샷",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지진",
      "오물웨이브",
      "파도타기",
      "탁류",
      "오물공격"
    ],
    "Elite_Charged_Moves": [
      "하이드로캐논"
    ],
    "Sprite_Col": 25,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": "260-M1",
    "Form": "메가",
    "Pokemon_Name": "대짱이",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "땅",
    "Max_CP": 4975,
    "ATK": 283.0,
    "DEF": 218.0,
    "HP": 225,
    "Fast_Moves": [
      "머드샷",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지진",
      "오물웨이브",
      "파도타기",
      "탁류",
      "오물공격"
    ],
    "Elite_Charged_Moves": [
      "하이드로캐논"
    ],
    "Sprite_Col": 26,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": "260-S",
    "Form": "그림자",
    "Pokemon_Name": "대짱이",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "땅",
    "Max_CP": 3362,
    "ATK": 208.0,
    "DEF": 175.0,
    "HP": 225,
    "Fast_Moves": [
      "머드샷",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지진",
      "오물웨이브",
      "파도타기",
      "탁류",
      "오물공격"
    ],
    "Elite_Charged_Moves": [
      "하이드로캐논"
    ],
    "Sprite_Col": 25,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 261,
    "Form": "일반",
    "Pokemon_Name": "포챠나",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "-",
    "Max_CP": 766,
    "ATK": 96.0,
    "DEF": 61.0,
    "HP": 111,
    "Fast_Moves": [
      "몸통박치기",
      "바크아웃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "구멍파기",
      "맹독엄니"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 27,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": "261-S",
    "Form": "그림자",
    "Pokemon_Name": "포챠나",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "-",
    "Max_CP": 766,
    "ATK": 96.0,
    "DEF": 61.0,
    "HP": 111,
    "Fast_Moves": [
      "몸통박치기",
      "바크아웃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "구멍파기",
      "맹독엄니"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 27,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 262,
    "Form": "일반",
    "Pokemon_Name": "그라에나",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "-",
    "Max_CP": 2177,
    "ATK": 171.0,
    "DEF": 132.0,
    "HP": 172,
    "Fast_Moves": [
      "물기",
      "불꽃엄니",
      "번개엄니",
      "얼음엄니",
      "기습"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "치근거리기",
      "맹독엄니"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 28,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": "262-S",
    "Form": "그림자",
    "Pokemon_Name": "그라에나",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "-",
    "Max_CP": 2177,
    "ATK": 171.0,
    "DEF": 132.0,
    "HP": 172,
    "Fast_Moves": [
      "물기",
      "불꽃엄니",
      "번개엄니",
      "얼음엄니",
      "기습"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "치근거리기",
      "맹독엄니"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 28,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 263,
    "Form": "일반",
    "Pokemon_Name": "지그제구리",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 575,
    "ATK": 58.0,
    "DEF": 80.0,
    "HP": 116,
    "Fast_Moves": [
      "몸통박치기",
      "바위깨기",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "풀묶기",
      "10만볼트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 29,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": "263-3",
    "Form": "일반",
    "Pokemon_Name": "가라르지그제구리",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "노말",
    "Max_CP": 575,
    "ATK": 58.0,
    "DEF": 80.0,
    "HP": 116,
    "Fast_Moves": [
      "몸통박치기",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "누르기",
      "스피드스타"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": "263-S-3",
    "Form": "그림자",
    "Pokemon_Name": "가라르지그제구리",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "노말",
    "Max_CP": 575,
    "ATK": 58.0,
    "DEF": 80.0,
    "HP": 116,
    "Fast_Moves": [
      "몸통박치기",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "누르기",
      "스피드스타"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 264,
    "Form": "일반",
    "Pokemon_Name": "직구리",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 1879,
    "ATK": 142.0,
    "DEF": 128.0,
    "HP": 186,
    "Fast_Moves": [
      "섀도클로",
      "몸통박치기",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "풀묶기",
      "번개",
      "스피드스타"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": "264-3",
    "Form": "일반",
    "Pokemon_Name": "가라르직구리",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "노말",
    "Max_CP": 1879,
    "ATK": 142.0,
    "DEF": 128.0,
    "HP": 186,
    "Fast_Moves": [
      "바크아웃",
      "핥기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "누르기",
      "더스트슈트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": "264-S-3",
    "Form": "그림자",
    "Pokemon_Name": "가라르직구리",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "노말",
    "Max_CP": 1879,
    "ATK": 142.0,
    "DEF": 128.0,
    "HP": 186,
    "Fast_Moves": [
      "바크아웃",
      "핥기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "누르기",
      "더스트슈트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 265,
    "Form": "일반",
    "Pokemon_Name": "개무소",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 653,
    "ATK": 75.0,
    "DEF": 59.0,
    "HP": 128,
    "Fast_Moves": [
      "몸통박치기",
      "벌레먹기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 33,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 266,
    "Form": "일반",
    "Pokemon_Name": "실쿤",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 626,
    "ATK": 60.0,
    "DEF": 77.0,
    "HP": 137,
    "Fast_Moves": [
      "독침",
      "벌레먹기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 34,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 267,
    "Form": "일반",
    "Pokemon_Name": "뷰티플라이",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "비행",
    "Max_CP": 1996,
    "ATK": 189.0,
    "DEF": 98.0,
    "HP": 155,
    "Fast_Moves": [
      "벌레의저항",
      "엉겨붙기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "은빛바람",
      "에어커터",
      "벌레의야단법석"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 35,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 268,
    "Form": "일반",
    "Pokemon_Name": "카스쿤",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 626,
    "ATK": 60.0,
    "DEF": 77.0,
    "HP": 137,
    "Fast_Moves": [
      "독침",
      "벌레먹기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 269,
    "Form": "일반",
    "Pokemon_Name": "독케일",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "독",
    "Max_CP": 1384,
    "ATK": 98.0,
    "DEF": 162.0,
    "HP": 155,
    "Fast_Moves": [
      "벌레의저항",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "은빛바람",
      "오물폭탄",
      "벌레의야단법석"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 270,
    "Form": "일반",
    "Pokemon_Name": "연꽃몬",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "풀",
    "Max_CP": 676,
    "ATK": 71.0,
    "DEF": 77.0,
    "HP": 120,
    "Fast_Moves": [
      "물대포",
      "잎날가르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "거품광선",
      "에너지볼",
      "열탕"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 38,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 271,
    "Form": "일반",
    "Pokemon_Name": "로토스",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "풀",
    "Max_CP": 1353,
    "ATK": 112.0,
    "DEF": 119.0,
    "HP": 155,
    "Fast_Moves": [
      "거품",
      "잎날가르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "거품광선",
      "냉동빔",
      "풀묶기",
      "열탕"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 39,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 272,
    "Form": "일반",
    "Pokemon_Name": "로파파",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "풀",
    "Max_CP": 2626,
    "ATK": 173.0,
    "DEF": 176.0,
    "HP": 190,
    "Fast_Moves": [
      "거품",
      "잎날가르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "하이드로펌프",
      "눈보라",
      "솔라빔",
      "냉동빔",
      "에너지볼",
      "리프스톰",
      "열탕"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 40,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 273,
    "Form": "일반",
    "Pokemon_Name": "도토링",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 676,
    "ATK": 71.0,
    "DEF": 77.0,
    "HP": 120,
    "Fast_Moves": [
      "씨기관총",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "풀묶기",
      "속임수"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 41,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": "273-S",
    "Form": "그림자",
    "Pokemon_Name": "도토링",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 676,
    "ATK": 71.0,
    "DEF": 77.0,
    "HP": 120,
    "Fast_Moves": [
      "씨기관총",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "풀묶기",
      "속임수"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 41,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 274,
    "Form": "일반",
    "Pokemon_Name": "잎새코",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "악",
    "Max_CP": 1387,
    "ATK": 134.0,
    "DEF": 78.0,
    "HP": 172,
    "Fast_Moves": [
      "잎날가르기",
      "속여때리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "리프블레이드",
      "풀묶기",
      "속임수"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 42,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": "274-S",
    "Form": "그림자",
    "Pokemon_Name": "잎새코",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "악",
    "Max_CP": 1387,
    "ATK": 134.0,
    "DEF": 78.0,
    "HP": 172,
    "Fast_Moves": [
      "잎날가르기",
      "속여때리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "리프블레이드",
      "풀묶기",
      "속임수"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 42,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 275,
    "Form": "일반",
    "Pokemon_Name": "다탱구",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "악",
    "Max_CP": 2637,
    "ATK": 200.0,
    "DEF": 121.0,
    "HP": 207,
    "Fast_Moves": [
      "잎날가르기",
      "속여때리기",
      "바크아웃"
    ],
    "Elite_Fast_Moves": [
      "씨기관총"
    ],
    "Charged_Moves": [
      "리프블레이드",
      "폭풍",
      "속임수",
      "그래스믹서"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 43,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": "275-S",
    "Form": "그림자",
    "Pokemon_Name": "다탱구",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "악",
    "Max_CP": 2637,
    "ATK": 200.0,
    "DEF": 121.0,
    "HP": 207,
    "Fast_Moves": [
      "잎날가르기",
      "속여때리기",
      "바크아웃"
    ],
    "Elite_Fast_Moves": [
      "씨기관총"
    ],
    "Charged_Moves": [
      "리프블레이드",
      "폭풍",
      "속임수",
      "그래스믹서"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 43,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 276,
    "Form": "일반",
    "Pokemon_Name": "테일로",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 865,
    "ATK": 106.0,
    "DEF": 61.0,
    "HP": 120,
    "Fast_Moves": [
      "쪼기",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "제비반환"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 44,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": "276-S",
    "Form": "그림자",
    "Pokemon_Name": "테일로",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 865,
    "ATK": 106.0,
    "DEF": 61.0,
    "HP": 120,
    "Fast_Moves": [
      "쪼기",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "제비반환"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 44,
    "Sprite_Row": 9
  },
  {
    "Pokemon_ID": 277,
    "Form": "일반",
    "Pokemon_Name": "스왈로",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 2170,
    "ATK": 185.0,
    "DEF": 124.0,
    "HP": 155,
    "Fast_Moves": [
      "날개치기",
      "강철날개"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "제비반환",
      "브레이브버드",
      "불새"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": "277-S",
    "Form": "그림자",
    "Pokemon_Name": "스왈로",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 2170,
    "ATK": 185.0,
    "DEF": 124.00000000000001,
    "HP": 155,
    "Fast_Moves": [
      "날개치기",
      "강철날개"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "제비반환",
      "브레이브버드",
      "불새"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 278,
    "Form": "일반",
    "Pokemon_Name": "갈모매",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "비행",
    "Max_CP": 865,
    "ATK": 106.0,
    "DEF": 61.0,
    "HP": 120,
    "Fast_Moves": [
      "물대포",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "물의파동",
      "에어커터",
      "냉동빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 2,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 279,
    "Form": "일반",
    "Pokemon_Name": "패리퍼",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "비행",
    "Max_CP": 2404,
    "ATK": 175.0,
    "DEF": 174.0,
    "HP": 155,
    "Fast_Moves": [
      "물대포",
      "날개치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "하이드로펌프",
      "폭풍",
      "눈보라",
      "웨더볼(물)"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 3,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 280,
    "Form": "일반",
    "Pokemon_Name": "랄토스",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "페어리",
    "Max_CP": 609,
    "ATK": 79.0,
    "DEF": 59.0,
    "HP": 99,
    "Fast_Moves": [
      "염동력",
      "차지빔"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코쇼크",
      "차밍보이스",
      "야습"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": "280-S",
    "Form": "그림자",
    "Pokemon_Name": "랄토스",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "페어리",
    "Max_CP": 609,
    "ATK": 79.0,
    "DEF": 59.0,
    "HP": 99,
    "Fast_Moves": [
      "염동력",
      "차지빔"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코쇼크",
      "차밍보이스",
      "야습"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 281,
    "Form": "일반",
    "Pokemon_Name": "킬리아",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "페어리",
    "Max_CP": 1093,
    "ATK": 117.0,
    "DEF": 90.0,
    "HP": 116,
    "Fast_Moves": [
      "염동력",
      "차지빔",
      "메지컬리프"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "차밍보이스",
      "야습",
      "트리플악셀",
      "드레인키스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 5,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": "281-S",
    "Form": "그림자",
    "Pokemon_Name": "킬리아",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "페어리",
    "Max_CP": 1093,
    "ATK": 117.00000000000001,
    "DEF": 90.00000000000001,
    "HP": 116,
    "Fast_Moves": [
      "염동력",
      "차지빔",
      "메지컬리프"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "차밍보이스",
      "야습",
      "트리플악셀",
      "드레인키스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 5,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 282,
    "Form": "일반",
    "Pokemon_Name": "가디안",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "페어리",
    "Max_CP": 3497,
    "ATK": 237.0,
    "DEF": 195.0,
    "HP": 169,
    "Fast_Moves": [
      "염동력",
      "차지빔",
      "애교부리기",
      "메지컬리프"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "매지컬샤인",
      "섀도볼",
      "트리플악셀"
    ],
    "Elite_Charged_Moves": [
      "싱크로노이즈"
    ],
    "Sprite_Col": 6,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": "282-M1",
    "Form": "메가",
    "Pokemon_Name": "가디안",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "페어리",
    "Max_CP": 5101,
    "ATK": 326.0,
    "DEF": 229.0,
    "HP": 169,
    "Fast_Moves": [
      "염동력",
      "차지빔",
      "애교부리기",
      "메지컬리프"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "매지컬샤인",
      "섀도볼",
      "트리플악셀"
    ],
    "Elite_Charged_Moves": [
      "싱크로노이즈"
    ],
    "Sprite_Col": 7,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": "282-S",
    "Form": "그림자",
    "Pokemon_Name": "가디안",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "페어리",
    "Max_CP": 3497,
    "ATK": 237.0,
    "DEF": 195.0,
    "HP": 169,
    "Fast_Moves": [
      "염동력",
      "차지빔",
      "애교부리기",
      "메지컬리프"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "매지컬샤인",
      "섀도볼",
      "트리플악셀"
    ],
    "Elite_Charged_Moves": [
      "싱크로노이즈"
    ],
    "Sprite_Col": 6,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 283,
    "Form": "일반",
    "Pokemon_Name": "비구술",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "물",
    "Max_CP": 894,
    "ATK": 93.0,
    "DEF": 87.0,
    "HP": 120,
    "Fast_Moves": [
      "거품",
      "벌레먹기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아제트",
      "거품광선",
      "시그널빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 8,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 284,
    "Form": "일반",
    "Pokemon_Name": "비나방",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "비행",
    "Max_CP": 2567,
    "ATK": 192.0,
    "DEF": 150.0,
    "HP": 172,
    "Fast_Moves": [
      "엉겨붙기",
      "에어슬래시"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에어커터",
      "괴상한바람",
      "은빛바람",
      "거품광선",
      "덤벼들기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 9,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 285,
    "Form": "일반",
    "Pokemon_Name": "버섯꼬",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 916,
    "ATK": 74.0,
    "DEF": 110.0,
    "HP": 155,
    "Fast_Moves": [
      "몸통박치기",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "씨폭탄",
      "풀묶기",
      "에너지볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 10,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 286,
    "Form": "일반",
    "Pokemon_Name": "버섯모",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "격투",
    "Max_CP": 2971,
    "ATK": 241.0,
    "DEF": 144.0,
    "HP": 155,
    "Fast_Moves": [
      "카운터",
      "씨기관총",
      "발경"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "폭발펀치",
      "씨폭탄",
      "오물폭탄"
    ],
    "Elite_Charged_Moves": [
      "풀묶기"
    ],
    "Sprite_Col": 11,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 287,
    "Form": "일반",
    "Pokemon_Name": "게을로",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 1133,
    "ATK": 104.0,
    "DEF": 92.0,
    "HP": 155,
    "Fast_Moves": [
      "하품"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "누르기",
      "깜짝베기",
      "깨트리기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 12,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": "287-S",
    "Form": "그림자",
    "Pokemon_Name": "게을로",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 1133,
    "ATK": 104.0,
    "DEF": 92.0,
    "HP": 155,
    "Fast_Moves": [
      "하품"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "누르기",
      "깜짝베기",
      "깨트리기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 12,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 288,
    "Form": "일반",
    "Pokemon_Name": "발바로",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 2225,
    "ATK": 159.0,
    "DEF": 145.0,
    "HP": 190,
    "Fast_Moves": [
      "할퀴기",
      "카운터"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "누르기",
      "땅고르기",
      "깨트리기",
      "스톤샤워"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": "288-S",
    "Form": "그림자",
    "Pokemon_Name": "발바로",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 2225,
    "ATK": 159.0,
    "DEF": 145.0,
    "HP": 190,
    "Fast_Moves": [
      "할퀴기",
      "카운터"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "누르기",
      "땅고르기",
      "깨트리기",
      "스톤샤워"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 289,
    "Form": "일반",
    "Pokemon_Name": "게을킹",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 5010,
    "ATK": 290.0,
    "DEF": 166.0,
    "HP": 284,
    "Fast_Moves": [
      "하품"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파괴광선",
      "치근거리기",
      "지진"
    ],
    "Elite_Charged_Moves": [
      "누르기"
    ],
    "Sprite_Col": 14,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": "289-S",
    "Form": "그림자",
    "Pokemon_Name": "게을킹",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 5010,
    "ATK": 290.0,
    "DEF": 166.0,
    "HP": 284,
    "Fast_Moves": [
      "하품"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파괴광선",
      "치근거리기",
      "지진"
    ],
    "Elite_Charged_Moves": [
      "누르기"
    ],
    "Sprite_Col": 14,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 290,
    "Form": "일반",
    "Pokemon_Name": "토중몬",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "땅",
    "Max_CP": 868,
    "ATK": 80.0,
    "DEF": 126.0,
    "HP": 104,
    "Fast_Moves": [
      "할퀴기",
      "벌레먹기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깜짝베기",
      "벌레의야단법석",
      "제비반환"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 15,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 291,
    "Form": "일반",
    "Pokemon_Name": "아이스크",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "비행",
    "Max_CP": 2226,
    "ATK": 199.0,
    "DEF": 112.0,
    "HP": 156,
    "Fast_Moves": [
      "연속자르기",
      "메탈클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도볼",
      "벌레의야단법석",
      "제비반환"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 16,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 292,
    "Form": "일반",
    "Pokemon_Name": "껍질몬",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "고스트",
    "Max_CP": 445,
    "ATK": 153.0,
    "DEF": 73.0,
    "HP": 1,
    "Fast_Moves": [
      "벌레먹기",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [
      "벌레의저항"
    ],
    "Charged_Moves": [
      "야습",
      "제비반환",
      "구멍파기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 17,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 293,
    "Form": "일반",
    "Pokemon_Name": "소곤룡",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 758,
    "ATK": 92.0,
    "DEF": 42.0,
    "HP": 162,
    "Fast_Moves": [
      "막치기",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "짓밟기",
      "차밍보이스",
      "화염방사"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 18,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": "293-S",
    "Form": "그림자",
    "Pokemon_Name": "소곤룡",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 758,
    "ATK": 92.0,
    "DEF": 42.0,
    "HP": 162,
    "Fast_Moves": [
      "막치기",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "짓밟기",
      "차밍보이스",
      "화염방사"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 18,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 294,
    "Form": "일반",
    "Pokemon_Name": "노공룡",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 1500,
    "ATK": 134.0,
    "DEF": 81.0,
    "HP": 197,
    "Fast_Moves": [
      "물기",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "짓밟기",
      "차밍보이스",
      "화염방사"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 19,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": "294-S",
    "Form": "그림자",
    "Pokemon_Name": "노공룡",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 1500,
    "ATK": 134.0,
    "DEF": 80.99999999999999,
    "HP": 197,
    "Fast_Moves": [
      "물기",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "짓밟기",
      "차밍보이스",
      "화염방사"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 19,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 295,
    "Form": "일반",
    "Pokemon_Name": "폭음룡",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 2654,
    "ATK": 179.0,
    "DEF": 137.0,
    "HP": 232,
    "Fast_Moves": [
      "물기",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "차밍보이스",
      "불대문자",
      "폭음파"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 20,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": "295-S",
    "Form": "그림자",
    "Pokemon_Name": "폭음룡",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 2654,
    "ATK": 179.0,
    "DEF": 137.0,
    "HP": 232,
    "Fast_Moves": [
      "물기",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "차밍보이스",
      "불대문자",
      "폭음파"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 20,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 296,
    "Form": "일반",
    "Pokemon_Name": "마크탕",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 924,
    "ATK": 99.0,
    "DEF": 54.0,
    "HP": 176,
    "Fast_Moves": [
      "바위깨기",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "헤비봄버",
      "로킥",
      "크로스촙",
      "기선제압"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 21,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": "296-S",
    "Form": "그림자",
    "Pokemon_Name": "마크탕",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 924,
    "ATK": 99.0,
    "DEF": 54.0,
    "HP": 176,
    "Fast_Moves": [
      "바위깨기",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "헤비봄버",
      "로킥",
      "크로스촙",
      "기선제압"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 21,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 297,
    "Form": "일반",
    "Pokemon_Name": "하리뭉",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 3198,
    "ATK": 209.0,
    "DEF": 114.0,
    "HP": 302,
    "Fast_Moves": [
      "카운터",
      "불릿펀치",
      "발경"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "헤비봄버",
      "인파이트",
      "폭발펀치",
      "엄청난힘",
      "기선제압"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 22,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": "297-S",
    "Form": "그림자",
    "Pokemon_Name": "하리뭉",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 3198,
    "ATK": 209.0,
    "DEF": 114.0,
    "HP": 302,
    "Fast_Moves": [
      "카운터",
      "불릿펀치",
      "발경"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "헤비봄버",
      "인파이트",
      "폭발펀치",
      "엄청난힘",
      "기선제압"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 22,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 298,
    "Form": "일반",
    "Pokemon_Name": "루리리",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "페어리",
    "Max_CP": 411,
    "ATK": 36.0,
    "DEF": 71.0,
    "HP": 137,
    "Fast_Moves": [
      "튀어오르기",
      "거품"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "거품광선",
      "냉동빔",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 23,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 299,
    "Form": "일반",
    "Pokemon_Name": "코코파스",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "-",
    "Max_CP": 1123,
    "ATK": 82.0,
    "DEF": 215.0,
    "HP": 102,
    "Fast_Moves": [
      "돌떨구기",
      "스파크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "록블라스트",
      "스톤샤워",
      "10만볼트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": "299-S",
    "Form": "그림자",
    "Pokemon_Name": "코코파스",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "-",
    "Max_CP": 1123,
    "ATK": 82.0,
    "DEF": 215.0,
    "HP": 102,
    "Fast_Moves": [
      "돌떨구기",
      "스파크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "록블라스트",
      "스톤샤워",
      "10만볼트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 300,
    "Form": "일반",
    "Pokemon_Name": "에나비",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 835,
    "ATK": 84.0,
    "DEF": 79.0,
    "HP": 137,
    "Fast_Moves": [
      "속여때리기",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "차밍보이스",
      "와일드볼트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 25,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 301,
    "Form": "일반",
    "Pokemon_Name": "델케티",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 1691,
    "ATK": 132.0,
    "DEF": 127.0,
    "HP": 172,
    "Fast_Moves": [
      "속여때리기",
      "사념의박치기",
      "애교부리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "치근거리기",
      "차밍보이스",
      "와일드볼트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 26,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 302,
    "Form": "일반",
    "Pokemon_Name": "깜까미",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "고스트",
    "Max_CP": 1668,
    "ATK": 141.0,
    "DEF": 136.0,
    "HP": 137,
    "Fast_Moves": [
      "섀도클로",
      "속여때리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파워젬",
      "속임수",
      "야습",
      "매지컬샤인",
      "드레인펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 27,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": "302-M1",
    "Form": "메가",
    "Pokemon_Name": "깜까미",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "고스트",
    "Max_CP": 2196,
    "ATK": 151.0,
    "DEF": 216.0,
    "HP": 137,
    "Fast_Moves": [
      "섀도클로",
      "속여때리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파워젬",
      "속임수",
      "야습",
      "매지컬샤인",
      "드레인펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 28,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": "302-S",
    "Form": "그림자",
    "Pokemon_Name": "깜까미",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "고스트",
    "Max_CP": 1668,
    "ATK": 141.0,
    "DEF": 136.0,
    "HP": 137,
    "Fast_Moves": [
      "섀도클로",
      "속여때리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파워젬",
      "속임수",
      "야습",
      "매지컬샤인",
      "드레인펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 27,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 303,
    "Form": "일반",
    "Pokemon_Name": "입치트",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "페어리",
    "Max_CP": 1848,
    "ATK": 155.0,
    "DEF": 141.0,
    "HP": 137,
    "Fast_Moves": [
      "물기",
      "놀래키기",
      "얼음엄니",
      "불꽃엄니",
      "요정의바람"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "치근거리기",
      "찝기",
      "아이언헤드",
      "그로우펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 29,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": "303-M1",
    "Form": "메가",
    "Pokemon_Name": "입치트",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "페어리",
    "Max_CP": 2691,
    "ATK": 188.0,
    "DEF": 217.0,
    "HP": 137,
    "Fast_Moves": [
      "물기",
      "놀래키기",
      "얼음엄니",
      "불꽃엄니",
      "요정의바람"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "치근거리기",
      "찝기",
      "아이언헤드",
      "그로우펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": "303-S",
    "Form": "그림자",
    "Pokemon_Name": "입치트",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "페어리",
    "Max_CP": 1848,
    "ATK": 155.0,
    "DEF": 141.0,
    "HP": 137,
    "Fast_Moves": [
      "물기",
      "놀래키기",
      "얼음엄니",
      "불꽃엄니",
      "요정의바람"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "치근거리기",
      "찝기",
      "아이언헤드",
      "그로우펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 29,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 304,
    "Form": "일반",
    "Pokemon_Name": "가보리",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "바위",
    "Max_CP": 1478,
    "ATK": 121.0,
    "DEF": 141.0,
    "HP": 137,
    "Fast_Moves": [
      "몸통박치기",
      "메탈클로",
      "금속음"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아이언헤드",
      "암석봉인",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": "304-S",
    "Form": "그림자",
    "Pokemon_Name": "가보리",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "바위",
    "Max_CP": 1478,
    "ATK": 121.0,
    "DEF": 141.0,
    "HP": 137,
    "Fast_Moves": [
      "몸통박치기",
      "메탈클로",
      "금속음"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아이언헤드",
      "암석봉인",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 305,
    "Form": "일반",
    "Pokemon_Name": "갱도라",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "바위",
    "Max_CP": 2324,
    "ATK": 158.0,
    "DEF": 198.0,
    "HP": 155,
    "Fast_Moves": [
      "메탈클로",
      "아이언테일",
      "금속음"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "누르기",
      "스톤샤워",
      "헤비봄버",
      "암석봉인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": "305-S",
    "Form": "그림자",
    "Pokemon_Name": "갱도라",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "바위",
    "Max_CP": 2324,
    "ATK": 158.0,
    "DEF": 198.0,
    "HP": 155,
    "Fast_Moves": [
      "메탈클로",
      "아이언테일",
      "금속음"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "누르기",
      "스톤샤워",
      "헤비봄버",
      "암석봉인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 306,
    "Form": "일반",
    "Pokemon_Name": "보스로라",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "바위",
    "Max_CP": 3391,
    "ATK": 198.0,
    "DEF": 257.0,
    "HP": 172,
    "Fast_Moves": [
      "드래곤테일",
      "아이언테일",
      "떨어뜨리기",
      "금속음"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "번개",
      "스톤에지",
      "헤비봄버",
      "암석봉인",
      "메테오빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 33,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": "306-M1",
    "Form": "메가",
    "Pokemon_Name": "보스로라",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "-",
    "Max_CP": 4705,
    "ATK": 247.0,
    "DEF": 331.0,
    "HP": 172,
    "Fast_Moves": [
      "드래곤테일",
      "아이언테일",
      "떨어뜨리기",
      "금속음"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "번개",
      "스톤에지",
      "헤비봄버",
      "암석봉인",
      "메테오빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 34,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": "306-S",
    "Form": "그림자",
    "Pokemon_Name": "보스로라",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "바위",
    "Max_CP": 3391,
    "ATK": 198.0,
    "DEF": 257.0,
    "HP": 172,
    "Fast_Moves": [
      "드래곤테일",
      "아이언테일",
      "떨어뜨리기",
      "금속음"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "번개",
      "스톤에지",
      "헤비봄버",
      "암석봉인",
      "메테오빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 33,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 307,
    "Form": "일반",
    "Pokemon_Name": "요가랑",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 784,
    "ATK": 78.0,
    "DEF": 107.0,
    "HP": 102,
    "Fast_Moves": [
      "염동력",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "냉동펀치",
      "사이코쇼크",
      "로킥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 35,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 308,
    "Form": "일반",
    "Pokemon_Name": "요가램",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 1618,
    "ATK": 121.0,
    "DEF": 152.0,
    "HP": 155,
    "Fast_Moves": [
      "사이코커터",
      "카운터"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "냉동펀치",
      "사이코키네시스",
      "폭발펀치",
      "그로우펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": "308-M1",
    "Form": "메가",
    "Pokemon_Name": "요가램",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 2821,
    "ATK": 205.0,
    "DEF": 179.0,
    "HP": 155,
    "Fast_Moves": [
      "사이코커터",
      "카운터"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "냉동펀치",
      "사이코키네시스",
      "폭발펀치",
      "그로우펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 309,
    "Form": "일반",
    "Pokemon_Name": "썬더라이",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 1091,
    "ATK": 123.0,
    "DEF": 78.0,
    "HP": 120,
    "Fast_Moves": [
      "전광석화",
      "스파크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "10만볼트",
      "방전",
      "스피드스타"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 38,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": "309-S",
    "Form": "그림자",
    "Pokemon_Name": "썬더라이",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 1091,
    "ATK": 123.0,
    "DEF": 78.0,
    "HP": 120,
    "Fast_Moves": [
      "전광석화",
      "스파크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "10만볼트",
      "방전",
      "스피드스타"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 38,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 310,
    "Form": "일반",
    "Pokemon_Name": "썬더볼트",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 2646,
    "ATK": 215.0,
    "DEF": 127.0,
    "HP": 172,
    "Fast_Moves": [
      "바크아웃",
      "차지빔",
      "번개엄니"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "번개",
      "와일드볼트",
      "불꽃튀기기",
      "오버히트",
      "사이코팽"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 39,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": "310-M1",
    "Form": "메가",
    "Pokemon_Name": "썬더볼트",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 4048,
    "ATK": 286.0,
    "DEF": 179.0,
    "HP": 172,
    "Fast_Moves": [
      "바크아웃",
      "차지빔",
      "번개엄니"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "번개",
      "와일드볼트",
      "불꽃튀기기",
      "오버히트",
      "사이코팽"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 40,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": "310-S",
    "Form": "그림자",
    "Pokemon_Name": "썬더볼트",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 2646,
    "ATK": 215.0,
    "DEF": 127.0,
    "HP": 172,
    "Fast_Moves": [
      "바크아웃",
      "차지빔",
      "번개엄니"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "번개",
      "와일드볼트",
      "불꽃튀기기",
      "오버히트",
      "사이코팽"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 39,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 311,
    "Form": "일반",
    "Pokemon_Name": "플러시",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 2010,
    "ATK": 167.0,
    "DEF": 129.0,
    "HP": 155,
    "Fast_Moves": [
      "스파크",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "10만볼트",
      "방전",
      "스피드스타",
      "풀묶기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 41,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 312,
    "Form": "일반",
    "Pokemon_Name": "마이농",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 1915,
    "ATK": 147.0,
    "DEF": 150.0,
    "HP": 155,
    "Fast_Moves": [
      "스파크",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "10만볼트",
      "방전",
      "스피드스타",
      "풀묶기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 42,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 313,
    "Form": "일반",
    "Pokemon_Name": "볼비트",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 2002,
    "ATK": 143.0,
    "DEF": 166.0,
    "HP": 163,
    "Fast_Moves": [
      "벌레의저항",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "시그널빔",
      "벌레의야단법석",
      "10만볼트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 43,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 314,
    "Form": "일반",
    "Pokemon_Name": "네오비트",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 2002,
    "ATK": 143.0,
    "DEF": 166.0,
    "HP": 163,
    "Fast_Moves": [
      "벌레의저항",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "은빛바람",
      "벌레의야단법석",
      "매지컬샤인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 44,
    "Sprite_Row": 10
  },
  {
    "Pokemon_ID": 315,
    "Form": "일반",
    "Pokemon_Name": "로젤리아",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "독",
    "Max_CP": 2114,
    "ATK": 186.0,
    "DEF": 131.0,
    "HP": 137,
    "Fast_Moves": [
      "독찌르기",
      "잎날가르기",
      "메지컬리프"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "꽃보라",
      "오물폭탄",
      "매지컬샤인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 316,
    "Form": "일반",
    "Pokemon_Name": "꼴깍몬",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "-",
    "Max_CP": 979,
    "ATK": 80.0,
    "DEF": 99.0,
    "HP": 172,
    "Fast_Moves": [
      "막치기",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오물공격",
      "더스트슈트",
      "냉동빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 2,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 317,
    "Form": "일반",
    "Pokemon_Name": "꿀꺽몬",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "-",
    "Max_CP": 2236,
    "ATK": 140.0,
    "DEF": 159.0,
    "HP": 225,
    "Fast_Moves": [
      "바위깨기",
      "엉겨붙기",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "더스트슈트",
      "오물폭탄",
      "냉동빔",
      "애시드봄",
      "오물공격"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 3,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 318,
    "Form": "일반",
    "Pokemon_Name": "샤프니아",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "악",
    "Max_CP": 1154,
    "ATK": 171.0,
    "DEF": 39.0,
    "HP": 128,
    "Fast_Moves": [
      "물기",
      "바크아웃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아제트",
      "깨물어부수기",
      "맹독엄니"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": "318-S",
    "Form": "그림자",
    "Pokemon_Name": "샤프니아",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "악",
    "Max_CP": 1154,
    "ATK": 171.0,
    "DEF": 39.0,
    "HP": 128,
    "Fast_Moves": [
      "물기",
      "바크아웃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아제트",
      "깨물어부수기",
      "맹독엄니"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 319,
    "Form": "일반",
    "Pokemon_Name": "샤크니아",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "악",
    "Max_CP": 2466,
    "ATK": 243.0,
    "DEF": 83.0,
    "HP": 172,
    "Fast_Moves": [
      "물기",
      "폭포오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "하이드로펌프",
      "깨물어부수기",
      "맹독엄니"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 5,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": "319-M1",
    "Form": "메가",
    "Pokemon_Name": "샤크니아",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "악",
    "Max_CP": 3701,
    "ATK": 289.0,
    "DEF": 144.0,
    "HP": 172,
    "Fast_Moves": [
      "물기",
      "폭포오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "하이드로펌프",
      "깨물어부수기",
      "맹독엄니"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 6,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": "319-S",
    "Form": "그림자",
    "Pokemon_Name": "샤크니아",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "악",
    "Max_CP": 2466,
    "ATK": 242.99999999999997,
    "DEF": 83.0,
    "HP": 172,
    "Fast_Moves": [
      "물기",
      "폭포오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "하이드로펌프",
      "깨물어부수기",
      "맹독엄니"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 5,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 320,
    "Form": "일반",
    "Pokemon_Name": "고래왕자",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1659,
    "ATK": 136.0,
    "DEF": 68.0,
    "HP": 277,
    "Fast_Moves": [
      "튀어오르기",
      "물대포",
      "구르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "헤비봄버",
      "물의파동",
      "누르기",
      "열탕"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": "320-S",
    "Form": "그림자",
    "Pokemon_Name": "고래왕자",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1659,
    "ATK": 136.0,
    "DEF": 68.0,
    "HP": 277,
    "Fast_Moves": [
      "튀어오르기",
      "물대포",
      "구르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "헤비봄버",
      "물의파동",
      "누르기",
      "열탕"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 321,
    "Form": "일반",
    "Pokemon_Name": "고래왕",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 2577,
    "ATK": 175.0,
    "DEF": 87.0,
    "HP": 347,
    "Fast_Moves": [
      "사념의박치기",
      "물대포",
      "구르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파도타기",
      "눈보라",
      "파괴광선",
      "열탕"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 8,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": "321-S",
    "Form": "그림자",
    "Pokemon_Name": "고래왕",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 2577,
    "ATK": 175.0,
    "DEF": 87.0,
    "HP": 347,
    "Fast_Moves": [
      "사념의박치기",
      "물대포",
      "구르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파도타기",
      "눈보라",
      "파괴광선",
      "열탕"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 8,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 322,
    "Form": "일반",
    "Pokemon_Name": "둔타",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "땅",
    "Max_CP": 1196,
    "ATK": 119.0,
    "DEF": 79.0,
    "HP": 155,
    "Fast_Moves": [
      "불꽃세례",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "땅고르기",
      "열풍",
      "짓밟기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 9,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": "322-S",
    "Form": "그림자",
    "Pokemon_Name": "둔타",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "땅",
    "Max_CP": 1196,
    "ATK": 118.99999999999999,
    "DEF": 79.0,
    "HP": 155,
    "Fast_Moves": [
      "불꽃세례",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "땅고르기",
      "열풍",
      "짓밟기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 9,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 323,
    "Form": "일반",
    "Pokemon_Name": "폭타",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "땅",
    "Max_CP": 2479,
    "ATK": 194.0,
    "DEF": 136.0,
    "HP": 172,
    "Fast_Moves": [
      "불꽃세례",
      "바위깨기",
      "불태우기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지진",
      "오버히트",
      "솔라빔",
      "대지의힘"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 10,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": "323-M1",
    "Form": "메가",
    "Pokemon_Name": "폭타",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "땅",
    "Max_CP": 3641,
    "ATK": 253.0,
    "DEF": 183.0,
    "HP": 172,
    "Fast_Moves": [
      "불꽃세례",
      "바위깨기",
      "불태우기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지진",
      "오버히트",
      "솔라빔",
      "대지의힘"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": "323-S",
    "Form": "그림자",
    "Pokemon_Name": "폭타",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "땅",
    "Max_CP": 2479,
    "ATK": 194.0,
    "DEF": 136.0,
    "HP": 172,
    "Fast_Moves": [
      "불꽃세례",
      "바위깨기",
      "불태우기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지진",
      "오버히트",
      "솔라빔",
      "대지의힘"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 10,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 324,
    "Form": "일반",
    "Pokemon_Name": "코터스",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 2366,
    "ATK": 151.0,
    "DEF": 203.0,
    "HP": 172,
    "Fast_Moves": [
      "회오리불꽃",
      "불꽃세례"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오버히트",
      "솔라빔",
      "지진",
      "화염바퀴"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 12,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 325,
    "Form": "일반",
    "Pokemon_Name": "피그점프",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 1508,
    "ATK": 125.0,
    "DEF": 122.0,
    "HP": 155,
    "Fast_Moves": [
      "튀어오르기",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "환상빔",
      "섀도볼",
      "미러코트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": "325-S",
    "Form": "그림자",
    "Pokemon_Name": "피그점프",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 1508,
    "ATK": 125.0,
    "DEF": 122.0,
    "HP": 155,
    "Fast_Moves": [
      "튀어오르기",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "환상빔",
      "섀도볼",
      "미러코트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 326,
    "Form": "일반",
    "Pokemon_Name": "피그킹",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 2679,
    "ATK": 171.0,
    "DEF": 188.0,
    "HP": 190,
    "Fast_Moves": [
      "차지빔",
      "신통력",
      "사이코웨이브"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "섀도볼",
      "미러코트",
      "폭발펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 14,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": "326-S",
    "Form": "그림자",
    "Pokemon_Name": "피그킹",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 2679,
    "ATK": 171.0,
    "DEF": 188.0,
    "HP": 190,
    "Fast_Moves": [
      "차지빔",
      "신통력",
      "사이코웨이브"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "섀도볼",
      "미러코트",
      "폭발펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 14,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 327,
    "Form": "일반",
    "Pokemon_Name": "얼루기",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 1380,
    "ATK": 116.0,
    "DEF": 116.0,
    "HP": 155,
    "Fast_Moves": [
      "기습",
      "사이코커터"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "암석봉인",
      "얼어붙은바람"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 15,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 328,
    "Form": "일반",
    "Pokemon_Name": "톱치",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "-",
    "Max_CP": 1441,
    "ATK": 162.0,
    "DEF": 78.0,
    "HP": 128,
    "Fast_Moves": [
      "머드샷",
      "벌레의저항",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "모래지옥",
      "구멍파기",
      "깨물어부수기",
      "열사의대지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 16,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": "328-S",
    "Form": "그림자",
    "Pokemon_Name": "톱치",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "-",
    "Max_CP": 1441,
    "ATK": 162.0,
    "DEF": 78.0,
    "HP": 128,
    "Fast_Moves": [
      "머드샷",
      "벌레의저항",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "모래지옥",
      "구멍파기",
      "깨물어부수기",
      "열사의대지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 16,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 329,
    "Form": "일반",
    "Pokemon_Name": "비브라바",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 1384,
    "ATK": 134.0,
    "DEF": 99.0,
    "HP": 137,
    "Fast_Moves": [
      "머드샷",
      "용의숨결",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "모래지옥",
      "땅고르기",
      "벌레의야단법석",
      "열사의대지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 17,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": "329-S",
    "Form": "그림자",
    "Pokemon_Name": "비브라바",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 1384,
    "ATK": 134.0,
    "DEF": 99.0,
    "HP": 137,
    "Fast_Moves": [
      "머드샷",
      "용의숨결",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "모래지옥",
      "땅고르기",
      "벌레의야단법석",
      "열사의대지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 17,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 330,
    "Form": "일반",
    "Pokemon_Name": "플라이곤",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 3008,
    "ATK": 205.0,
    "DEF": 168.0,
    "HP": 190,
    "Fast_Moves": [
      "머드샷",
      "드래곤테일",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지진",
      "드래곤클로",
      "스톤에지",
      "폭음파",
      "열사의대지",
      "모래지옥"
    ],
    "Elite_Charged_Moves": [
      "대지의힘"
    ],
    "Sprite_Col": 18,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": "330-S",
    "Form": "그림자",
    "Pokemon_Name": "플라이곤",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 3008,
    "ATK": 205.0,
    "DEF": 168.0,
    "HP": 190,
    "Fast_Moves": [
      "머드샷",
      "드래곤테일",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지진",
      "드래곤클로",
      "스톤에지",
      "폭음파",
      "열사의대지",
      "모래지옥"
    ],
    "Elite_Charged_Moves": [
      "대지의힘"
    ],
    "Sprite_Col": 18,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 331,
    "Form": "일반",
    "Pokemon_Name": "선인왕",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 1404,
    "ATK": 156.0,
    "DEF": 74.0,
    "HP": 137,
    "Fast_Moves": [
      "독침",
      "기습",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "풀묶기",
      "깨트리기",
      "씨폭탄",
      "보복",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 19,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": "331-S",
    "Form": "그림자",
    "Pokemon_Name": "선인왕",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 1404,
    "ATK": 156.0,
    "DEF": 74.0,
    "HP": 137,
    "Fast_Moves": [
      "독침",
      "기습",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "풀묶기",
      "깨트리기",
      "씨폭탄",
      "보복",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 19,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 332,
    "Form": "일반",
    "Pokemon_Name": "밤선인",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "악",
    "Max_CP": 2598,
    "ATK": 221.0,
    "DEF": 115.0,
    "HP": 172,
    "Fast_Moves": [
      "독찌르기",
      "기습",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "악의파동",
      "폭발펀치",
      "풀묶기",
      "보복",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 20,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": "332-S",
    "Form": "그림자",
    "Pokemon_Name": "밤선인",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "악",
    "Max_CP": 2598,
    "ATK": 221.0,
    "DEF": 114.99999999999999,
    "HP": 172,
    "Fast_Moves": [
      "독찌르기",
      "기습",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "악의파동",
      "폭발펀치",
      "풀묶기",
      "보복",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 20,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 333,
    "Form": "일반",
    "Pokemon_Name": "파비코",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 931,
    "ATK": 76.0,
    "DEF": 132.0,
    "HP": 128,
    "Fast_Moves": [
      "쪼기",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "차밍보이스",
      "제비반환",
      "냉동빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 21,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": "333-S",
    "Form": "그림자",
    "Pokemon_Name": "파비코",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 931,
    "ATK": 76.0,
    "DEF": 132.0,
    "HP": 128,
    "Fast_Moves": [
      "쪼기",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "차밍보이스",
      "제비반환",
      "냉동빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 21,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 334,
    "Form": "일반",
    "Pokemon_Name": "파비코리",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "비행",
    "Max_CP": 2266,
    "ATK": 141.0,
    "DEF": 201.0,
    "HP": 181,
    "Fast_Moves": [
      "쪼기",
      "용의숨결"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "불새",
      "매지컬샤인",
      "용의파동",
      "화염방사"
    ],
    "Elite_Charged_Moves": [
      "문포스"
    ],
    "Sprite_Col": 22,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": "334-M1",
    "Form": "메가",
    "Pokemon_Name": "파비코리",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "페어리",
    "Max_CP": 3576,
    "ATK": 222.0,
    "DEF": 218.0,
    "HP": 181,
    "Fast_Moves": [
      "쪼기",
      "용의숨결"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "불새",
      "매지컬샤인",
      "용의파동",
      "화염방사"
    ],
    "Elite_Charged_Moves": [
      "문포스"
    ],
    "Sprite_Col": 23,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": "334-S",
    "Form": "그림자",
    "Pokemon_Name": "파비코리",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "비행",
    "Max_CP": 2266,
    "ATK": 141.0,
    "DEF": 201.0,
    "HP": 181,
    "Fast_Moves": [
      "쪼기",
      "용의숨결"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "불새",
      "매지컬샤인",
      "용의파동",
      "화염방사"
    ],
    "Elite_Charged_Moves": [
      "문포스"
    ],
    "Sprite_Col": 22,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 335,
    "Form": "일반",
    "Pokemon_Name": "쟝고",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 2733,
    "ATK": 222.0,
    "DEF": 124.0,
    "HP": 177,
    "Fast_Moves": [
      "연속자르기",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "인파이트",
      "깜짝베기",
      "구멍파기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 336,
    "Form": "일반",
    "Pokemon_Name": "세비퍼",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "-",
    "Max_CP": 2380,
    "ATK": 196.0,
    "DEF": 118.0,
    "HP": 177,
    "Fast_Moves": [
      "독찌르기",
      "아이언테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "맹독엄니",
      "깨물어부수기",
      "김밥말이"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 25,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 337,
    "Form": "일반",
    "Pokemon_Name": "루나톤",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 2631,
    "ATK": 178.0,
    "DEF": 153.0,
    "HP": 207,
    "Fast_Moves": [
      "돌떨구기",
      "염동력",
      "사이코웨이브"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "스톤샤워",
      "문포스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 26,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 338,
    "Form": "일반",
    "Pokemon_Name": "솔록",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 2631,
    "ATK": 178.0,
    "DEF": 153.0,
    "HP": 207,
    "Fast_Moves": [
      "돌떨구기",
      "염동력",
      "사이코웨이브"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "스톤샤워",
      "솔라빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 27,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 339,
    "Form": "일반",
    "Pokemon_Name": "미꾸리",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "땅",
    "Max_CP": 925,
    "ATK": 93.0,
    "DEF": 82.0,
    "HP": 137,
    "Fast_Moves": [
      "물대포",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아테일",
      "냉동빔",
      "진흙폭탄",
      "열탕"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 28,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": "339-S",
    "Form": "그림자",
    "Pokemon_Name": "미꾸리",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "땅",
    "Max_CP": 925,
    "ATK": 93.0,
    "DEF": 82.0,
    "HP": 137,
    "Fast_Moves": [
      "물대포",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아테일",
      "냉동빔",
      "진흙폭탄",
      "열탕"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 28,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 340,
    "Form": "일반",
    "Pokemon_Name": "메깅",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "땅",
    "Max_CP": 2346,
    "ATK": 151.0,
    "DEF": 141.0,
    "HP": 242,
    "Fast_Moves": [
      "물대포",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "물의파동",
      "눈보라",
      "진흙폭탄",
      "열탕"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 29,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": "340-S",
    "Form": "그림자",
    "Pokemon_Name": "메깅",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "땅",
    "Max_CP": 2346,
    "ATK": 151.0,
    "DEF": 141.0,
    "HP": 242,
    "Fast_Moves": [
      "물대포",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "물의파동",
      "눈보라",
      "진흙폭탄",
      "열탕"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 29,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 341,
    "Form": "일반",
    "Pokemon_Name": "가재군",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1391,
    "ATK": 141.0,
    "DEF": 99.0,
    "HP": 125,
    "Fast_Moves": [
      "거품",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "찝기",
      "거품광선",
      "아쿠아제트",
      "셸블레이드",
      "열탕"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": "341-S",
    "Form": "그림자",
    "Pokemon_Name": "가재군",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1391,
    "ATK": 141.0,
    "DEF": 99.0,
    "HP": 125,
    "Fast_Moves": [
      "거품",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "찝기",
      "거품광선",
      "아쿠아제트",
      "셸블레이드",
      "열탕"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 342,
    "Form": "일반",
    "Pokemon_Name": "가재장군",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "악",
    "Max_CP": 2797,
    "ATK": 224.0,
    "DEF": 142.0,
    "HP": 160,
    "Fast_Moves": [
      "폭포오르기",
      "바크아웃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "찝기",
      "거품광선",
      "깜짝베기",
      "집게해머",
      "셸블레이드",
      "열탕"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": "342-S",
    "Form": "그림자",
    "Pokemon_Name": "가재장군",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "악",
    "Max_CP": 2797,
    "ATK": 224.00000000000003,
    "DEF": 142.0,
    "HP": 160,
    "Fast_Moves": [
      "폭포오르기",
      "바크아웃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "찝기",
      "거품광선",
      "깜짝베기",
      "집게해머",
      "셸블레이드",
      "열탕"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 343,
    "Form": "일반",
    "Pokemon_Name": "오뚝군",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 889,
    "ATK": 77.0,
    "DEF": 124.0,
    "HP": 120,
    "Fast_Moves": [
      "염동력",
      "신통력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "자이로볼",
      "환상빔",
      "구멍파기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": "343-S",
    "Form": "그림자",
    "Pokemon_Name": "오뚝군",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 889,
    "ATK": 77.0,
    "DEF": 124.00000000000001,
    "HP": 120,
    "Fast_Moves": [
      "염동력",
      "신통력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "자이로볼",
      "환상빔",
      "구멍파기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 344,
    "Form": "일반",
    "Pokemon_Name": "점토도리",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 2229,
    "ATK": 140.0,
    "DEF": 229.0,
    "HP": 155,
    "Fast_Moves": [
      "신통력",
      "염동력",
      "진흙뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "자이로볼",
      "사이코키네시스",
      "지진",
      "대지의힘",
      "냉동빔",
      "섀도볼",
      "암석봉인",
      "열사의대지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 33,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": "344-S",
    "Form": "그림자",
    "Pokemon_Name": "점토도리",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 2229,
    "ATK": 140.0,
    "DEF": 229.0,
    "HP": 155,
    "Fast_Moves": [
      "신통력",
      "염동력",
      "진흙뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "자이로볼",
      "사이코키네시스",
      "지진",
      "대지의힘",
      "냉동빔",
      "섀도볼",
      "암석봉인",
      "열사의대지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 33,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 345,
    "Form": "일반",
    "Pokemon_Name": "릴링",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "풀",
    "Max_CP": 1460,
    "ATK": 105.0,
    "DEF": 150.0,
    "HP": 165,
    "Fast_Moves": [
      "용해액",
      "엉겨붙기",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "풀묶기",
      "미러코트",
      "원시의힘"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 34,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": "345-S",
    "Form": "그림자",
    "Pokemon_Name": "릴링",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "풀",
    "Max_CP": 1460,
    "ATK": 105.0,
    "DEF": 150.0,
    "HP": 165,
    "Fast_Moves": [
      "용해액",
      "엉겨붙기",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "풀묶기",
      "미러코트",
      "원시의힘"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 34,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 346,
    "Form": "일반",
    "Pokemon_Name": "릴리요",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "풀",
    "Max_CP": 2499,
    "ATK": 152.0,
    "DEF": 194.0,
    "HP": 200,
    "Fast_Moves": [
      "용해액",
      "엉겨붙기",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "풀묶기",
      "땅고르기",
      "스톤에지",
      "스톤샤워",
      "암석봉인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 35,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": "346-S",
    "Form": "그림자",
    "Pokemon_Name": "릴리요",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "풀",
    "Max_CP": 2499,
    "ATK": 152.0,
    "DEF": 194.0,
    "HP": 200,
    "Fast_Moves": [
      "용해액",
      "엉겨붙기",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "풀묶기",
      "땅고르기",
      "스톤에지",
      "스톤샤워",
      "암석봉인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 35,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 347,
    "Form": "일반",
    "Pokemon_Name": "아노딥스",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "벌레",
    "Max_CP": 1729,
    "ATK": 176.0,
    "DEF": 100.0,
    "HP": 128,
    "Fast_Moves": [
      "벌레의저항",
      "할퀴기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "크로스포이즌",
      "아쿠아제트",
      "원시의힘"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": "347-S",
    "Form": "그림자",
    "Pokemon_Name": "아노딥스",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "벌레",
    "Max_CP": 1729,
    "ATK": 176.0,
    "DEF": 100.0,
    "HP": 128,
    "Fast_Moves": [
      "벌레의저항",
      "할퀴기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "크로스포이즌",
      "아쿠아제트",
      "원시의힘"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 348,
    "Form": "일반",
    "Pokemon_Name": "아말도",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "벌레",
    "Max_CP": 3220,
    "ATK": 222.0,
    "DEF": 174.0,
    "HP": 181,
    "Fast_Moves": [
      "연속자르기",
      "벌레의저항"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "크로스포이즌",
      "물의파동",
      "록블라스트",
      "아쿠아브레이크"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": "348-S",
    "Form": "그림자",
    "Pokemon_Name": "아말도",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "벌레",
    "Max_CP": 3220,
    "ATK": 222.0,
    "DEF": 174.0,
    "HP": 181,
    "Fast_Moves": [
      "연속자르기",
      "벌레의저항"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "크로스포이즌",
      "물의파동",
      "록블라스트",
      "아쿠아브레이크"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 349,
    "Form": "일반",
    "Pokemon_Name": "빈티나",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 310,
    "ATK": 29.0,
    "DEF": 85.0,
    "HP": 85,
    "Fast_Moves": [
      "튀어오르기",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미러코트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 38,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": "349-S",
    "Form": "그림자",
    "Pokemon_Name": "빈티나",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 310,
    "ATK": 29.0,
    "DEF": 85.0,
    "HP": 85,
    "Fast_Moves": [
      "튀어오르기",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미러코트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 38,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 350,
    "Form": "일반",
    "Pokemon_Name": "밀로틱",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 3398,
    "ATK": 192.0,
    "DEF": 219.0,
    "HP": 216,
    "Fast_Moves": [
      "폭포오르기",
      "드래곤테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파도타기",
      "눈보라",
      "파괴광선",
      "김밥말이"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 39,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": "350-S",
    "Form": "그림자",
    "Pokemon_Name": "밀로틱",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 3398,
    "ATK": 192.0,
    "DEF": 219.0,
    "HP": 216,
    "Fast_Moves": [
      "폭포오르기",
      "드래곤테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파도타기",
      "눈보라",
      "파괴광선",
      "김밥말이"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 39,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 351,
    "Form": "일반",
    "Pokemon_Name": "캐스퐁(노말)",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 1845,
    "ATK": 139.0,
    "DEF": 139.0,
    "HP": 172,
    "Fast_Moves": [
      "몸통박치기",
      "병상첨병"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "폭풍",
      "에너지볼",
      "웨더볼(바위)",
      "웨더볼(노말)"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 40,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 351,
    "Form": "일반",
    "Pokemon_Name": "캐스퐁(태양)",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 1845,
    "ATK": 139.0,
    "DEF": 139.0,
    "HP": 172,
    "Fast_Moves": [
      "불꽃세례",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "불대문자",
      "솔라빔",
      "웨더볼(불꽃)"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 43,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 351,
    "Form": "일반",
    "Pokemon_Name": "캐스퐁(빗방울)",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1845,
    "ATK": 139.0,
    "DEF": 139.0,
    "HP": 172,
    "Fast_Moves": [
      "물대포",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "하이드로펌프",
      "번개",
      "웨더볼(물)"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 41,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 351,
    "Form": "일반",
    "Pokemon_Name": "캐스퐁(얼음)",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "-",
    "Max_CP": 1845,
    "ATK": 139.0,
    "DEF": 139.0,
    "HP": 172,
    "Fast_Moves": [
      "눈싸라기",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "눈보라",
      "냉동빔",
      "웨더볼(얼음)"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 42,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 352,
    "Form": "일반",
    "Pokemon_Name": "켈리몬",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 2314,
    "ATK": 161.0,
    "DEF": 189.0,
    "HP": 155,
    "Fast_Moves": [
      "핥기",
      "기습"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "속임수",
      "화염방사",
      "번개",
      "냉동빔",
      "제비반환",
      "야습"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 44,
    "Sprite_Row": 11
  },
  {
    "Pokemon_ID": 353,
    "Form": "일반",
    "Pokemon_Name": "어둠대신",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "-",
    "Max_CP": 1151,
    "ATK": 138.0,
    "DEF": 65.0,
    "HP": 127,
    "Fast_Moves": [
      "속여때리기",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "괴상한바람",
      "나이트헤드",
      "야습"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "353-S",
    "Form": "그림자",
    "Pokemon_Name": "어둠대신",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "-",
    "Max_CP": 1151,
    "ATK": 138.0,
    "DEF": 65.0,
    "HP": 127,
    "Fast_Moves": [
      "속여때리기",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "괴상한바람",
      "나이트헤드",
      "야습"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 354,
    "Form": "일반",
    "Pokemon_Name": "다크펫",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "-",
    "Max_CP": 2599,
    "ATK": 218.0,
    "DEF": 126.0,
    "HP": 162,
    "Fast_Moves": [
      "병상첨병",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도볼",
      "매지컬샤인",
      "번개"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 2,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "354-M1",
    "Form": "메가",
    "Pokemon_Name": "다크펫",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "-",
    "Max_CP": 4063,
    "ATK": 312.0,
    "DEF": 160.0,
    "HP": 162,
    "Fast_Moves": [
      "병상첨병",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도볼",
      "매지컬샤인",
      "번개"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 3,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "354-S",
    "Form": "그림자",
    "Pokemon_Name": "다크펫",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "-",
    "Max_CP": 2599,
    "ATK": 217.99999999999997,
    "DEF": 126.0,
    "HP": 162,
    "Fast_Moves": [
      "병상첨병",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도볼",
      "매지컬샤인",
      "번개"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 2,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 355,
    "Form": "일반",
    "Pokemon_Name": "해골몽",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "-",
    "Max_CP": 798,
    "ATK": 70.0,
    "DEF": 162.0,
    "HP": 85,
    "Fast_Moves": [
      "병상첨병",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "괴상한바람",
      "나이트헤드",
      "야습"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "355-S",
    "Form": "그림자",
    "Pokemon_Name": "해골몽",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "-",
    "Max_CP": 798,
    "ATK": 70.0,
    "DEF": 161.99999999999997,
    "HP": 85,
    "Fast_Moves": [
      "병상첨병",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "괴상한바람",
      "나이트헤드",
      "야습"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 356,
    "Form": "일반",
    "Pokemon_Name": "미라몽",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "-",
    "Max_CP": 1799,
    "ATK": 124.0,
    "DEF": 234.0,
    "HP": 120,
    "Fast_Moves": [
      "병상첨병",
      "속여때리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도펀치",
      "냉동펀치",
      "불꽃펀치",
      "폴터가이스트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 5,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "356-S",
    "Form": "그림자",
    "Pokemon_Name": "미라몽",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "-",
    "Max_CP": 1799,
    "ATK": 123.99999999999999,
    "DEF": 234.0,
    "HP": 120,
    "Fast_Moves": [
      "병상첨병",
      "속여때리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도펀치",
      "냉동펀치",
      "불꽃펀치",
      "폴터가이스트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 5,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 357,
    "Form": "일반",
    "Pokemon_Name": "트로피우스",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "비행",
    "Max_CP": 2194,
    "ATK": 136.0,
    "DEF": 163.0,
    "HP": 223,
    "Fast_Moves": [
      "에어슬래시",
      "잎날가르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "짓밟기",
      "제비반환",
      "리프블레이드",
      "세차게휘두르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 6,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 358,
    "Form": "일반",
    "Pokemon_Name": "치렁",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 2554,
    "ATK": 175.0,
    "DEF": 170.0,
    "HP": 181,
    "Fast_Moves": [
      "신통력",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "섀도볼",
      "사이코쇼크"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 359,
    "Form": "일반",
    "Pokemon_Name": "앱솔",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "-",
    "Max_CP": 2856,
    "ATK": 246.0,
    "DEF": 120.0,
    "HP": 163,
    "Fast_Moves": [
      "사이코커터",
      "바크아웃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "악의파동",
      "번개",
      "메가혼",
      "보복"
    ],
    "Elite_Charged_Moves": [
      "세차게휘두르기"
    ],
    "Sprite_Col": 8,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "359-M1",
    "Form": "메가",
    "Pokemon_Name": "앱솔",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "-",
    "Max_CP": 3732,
    "ATK": 314.0,
    "DEF": 130.0,
    "HP": 163,
    "Fast_Moves": [
      "사이코커터",
      "바크아웃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "악의파동",
      "번개",
      "메가혼",
      "보복"
    ],
    "Elite_Charged_Moves": [
      "세차게휘두르기"
    ],
    "Sprite_Col": 9,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "359-S",
    "Form": "그림자",
    "Pokemon_Name": "앱솔",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "-",
    "Max_CP": 2856,
    "ATK": 246.0,
    "DEF": 120.0,
    "HP": 163,
    "Fast_Moves": [
      "사이코커터",
      "바크아웃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "악의파동",
      "번개",
      "메가혼",
      "보복"
    ],
    "Elite_Charged_Moves": [
      "세차게휘두르기"
    ],
    "Sprite_Col": 8,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 360,
    "Form": "일반",
    "Pokemon_Name": "마자",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 603,
    "ATK": 41.0,
    "DEF": 86.0,
    "HP": 216,
    "Fast_Moves": [
      "튀어오르기",
      "카운터"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미러코트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 10,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 361,
    "Form": "일반",
    "Pokemon_Name": "눈꼬마",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "-",
    "Max_CP": 1004,
    "ATK": 95.0,
    "DEF": 95.0,
    "HP": 137,
    "Fast_Moves": [
      "눈싸라기",
      "병상첨병"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "눈사태",
      "얼어붙은바람",
      "섀도볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "361-S",
    "Form": "그림자",
    "Pokemon_Name": "눈꼬마",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "-",
    "Max_CP": 1004,
    "ATK": 95.0,
    "DEF": 95.0,
    "HP": 137,
    "Fast_Moves": [
      "눈싸라기",
      "병상첨병"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "눈사태",
      "얼어붙은바람",
      "섀도볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 362,
    "Form": "일반",
    "Pokemon_Name": "얼음귀신",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "-",
    "Max_CP": 2380,
    "ATK": 162.0,
    "DEF": 162.0,
    "HP": 190,
    "Fast_Moves": [
      "얼음뭉치",
      "얼음숨결",
      "구르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "눈사태",
      "자이로볼",
      "섀도볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 12,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "362-M1",
    "Form": "메가",
    "Pokemon_Name": "얼음귀신",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "-",
    "Max_CP": 3651,
    "ATK": 252.0,
    "DEF": 168.0,
    "HP": 190,
    "Fast_Moves": [
      "얼음뭉치",
      "얼음숨결",
      "구르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "눈사태",
      "자이로볼",
      "섀도볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "362-S",
    "Form": "그림자",
    "Pokemon_Name": "얼음귀신",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "-",
    "Max_CP": 2380,
    "ATK": 162.0,
    "DEF": 161.99999999999997,
    "HP": 190,
    "Fast_Moves": [
      "얼음뭉치",
      "얼음숨결",
      "구르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "눈사태",
      "자이로볼",
      "섀도볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 12,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 363,
    "Form": "일반",
    "Pokemon_Name": "대굴레오",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "물",
    "Max_CP": 1088,
    "ATK": 95.0,
    "DEF": 90.0,
    "HP": 172,
    "Fast_Moves": [
      "물대포",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오로라빔",
      "누르기",
      "물의파동"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 14,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "363-S",
    "Form": "그림자",
    "Pokemon_Name": "대굴레오",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "물",
    "Max_CP": 1088,
    "ATK": 95.0,
    "DEF": 90.00000000000001,
    "HP": 172,
    "Fast_Moves": [
      "물대포",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오로라빔",
      "누르기",
      "물의파동"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 14,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 364,
    "Form": "일반",
    "Pokemon_Name": "씨레오",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "물",
    "Max_CP": 1938,
    "ATK": 137.0,
    "DEF": 132.0,
    "HP": 207,
    "Fast_Moves": [
      "물대포",
      "눈싸라기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오로라빔",
      "누르기",
      "물의파동",
      "파도타기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 15,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "364-S",
    "Form": "그림자",
    "Pokemon_Name": "씨레오",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "물",
    "Max_CP": 1938,
    "ATK": 137.0,
    "DEF": 132.0,
    "HP": 207,
    "Fast_Moves": [
      "물대포",
      "눈싸라기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오로라빔",
      "누르기",
      "물의파동",
      "파도타기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 15,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 365,
    "Form": "일반",
    "Pokemon_Name": "씨카이저",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "물",
    "Max_CP": 3081,
    "ATK": 182.0,
    "DEF": 176.0,
    "HP": 242,
    "Fast_Moves": [
      "폭포오르기",
      "얼음숨결"
    ],
    "Elite_Fast_Moves": [
      "눈싸라기"
    ],
    "Charged_Moves": [
      "눈보라",
      "지진",
      "물의파동"
    ],
    "Elite_Charged_Moves": [
      "고드름침"
    ],
    "Sprite_Col": 16,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "365-S",
    "Form": "그림자",
    "Pokemon_Name": "씨카이저",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "물",
    "Max_CP": 3081,
    "ATK": 182.0,
    "DEF": 176.0,
    "HP": 242,
    "Fast_Moves": [
      "폭포오르기",
      "얼음숨결"
    ],
    "Elite_Fast_Moves": [
      "눈싸라기"
    ],
    "Charged_Moves": [
      "눈보라",
      "지진",
      "물의파동"
    ],
    "Elite_Charged_Moves": [
      "고드름침"
    ],
    "Sprite_Col": 16,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 366,
    "Form": "일반",
    "Pokemon_Name": "진주몽",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1436,
    "ATK": 133.0,
    "DEF": 135.0,
    "HP": 111,
    "Fast_Moves": [
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "누르기",
      "냉동빔",
      "물의파동"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 17,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 367,
    "Form": "일반",
    "Pokemon_Name": "헌테일",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 2645,
    "ATK": 197.0,
    "DEF": 179.0,
    "HP": 146,
    "Fast_Moves": [
      "물대포",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "냉동빔",
      "아쿠아테일"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 18,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 368,
    "Form": "일반",
    "Pokemon_Name": "분홍장이",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 2820,
    "ATK": 211.0,
    "DEF": 179.0,
    "HP": 146,
    "Fast_Moves": [
      "물대포",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "드레인키스",
      "사이코키네시스",
      "물의파동"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 19,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 369,
    "Form": "일반",
    "Pokemon_Name": "시라칸",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "바위",
    "Max_CP": 2858,
    "ATK": 162.0,
    "DEF": 203.0,
    "HP": 225,
    "Fast_Moves": [
      "물대포",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "원시의힘",
      "아쿠아테일",
      "하이드로펌프"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 20,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 370,
    "Form": "일반",
    "Pokemon_Name": "사랑동이",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 959,
    "ATK": 81.0,
    "DEF": 128.0,
    "HP": 125,
    "Fast_Moves": [
      "물대포",
      "튀어오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "드레인키스",
      "물의파동",
      "아쿠아제트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 21,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 371,
    "Form": "일반",
    "Pokemon_Name": "아공이",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "-",
    "Max_CP": 1307,
    "ATK": 134.0,
    "DEF": 93.0,
    "HP": 128,
    "Fast_Moves": [
      "물기",
      "불꽃세례"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "화염방사",
      "회오리",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 22,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "371-S",
    "Form": "그림자",
    "Pokemon_Name": "아공이",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "-",
    "Max_CP": 1307,
    "ATK": 134.0,
    "DEF": 93.0,
    "HP": 128,
    "Fast_Moves": [
      "물기",
      "불꽃세례"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "화염방사",
      "회오리",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 22,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 372,
    "Form": "일반",
    "Pokemon_Name": "쉘곤",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "-",
    "Max_CP": 2296,
    "ATK": 172.0,
    "DEF": 155.0,
    "HP": 163,
    "Fast_Moves": [
      "불꽃세례",
      "용의숨결"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "화염방사",
      "용의파동",
      "회오리",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 23,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "372-S",
    "Form": "그림자",
    "Pokemon_Name": "쉘곤",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "-",
    "Max_CP": 2296,
    "ATK": 172.0,
    "DEF": 155.00000000000003,
    "HP": 163,
    "Fast_Moves": [
      "불꽃세례",
      "용의숨결"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "화염방사",
      "용의파동",
      "회오리",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 23,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 373,
    "Form": "일반",
    "Pokemon_Name": "보만다",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "비행",
    "Max_CP": 4239,
    "ATK": 277.0,
    "DEF": 168.0,
    "HP": 216,
    "Fast_Moves": [
      "드래곤테일",
      "불꽃엄니",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "불대문자",
      "하이드로펌프",
      "용성군",
      "공중날기",
      "세차게휘두르기",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [
      "역린"
    ],
    "Sprite_Col": 24,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "373-M1",
    "Form": "메가",
    "Pokemon_Name": "보만다",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "비행",
    "Max_CP": 5688,
    "ATK": 310.0,
    "DEF": 251.0,
    "HP": 216,
    "Fast_Moves": [
      "드래곤테일",
      "불꽃엄니",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "불대문자",
      "하이드로펌프",
      "용성군",
      "공중날기",
      "세차게휘두르기",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [
      "역린"
    ],
    "Sprite_Col": 25,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "373-S",
    "Form": "그림자",
    "Pokemon_Name": "보만다",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "비행",
    "Max_CP": 4239,
    "ATK": 277.0,
    "DEF": 168.0,
    "HP": 216,
    "Fast_Moves": [
      "드래곤테일",
      "불꽃엄니",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "불대문자",
      "하이드로펌프",
      "용성군",
      "공중날기",
      "세차게휘두르기",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [
      "역린"
    ],
    "Sprite_Col": 24,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 374,
    "Form": "일반",
    "Pokemon_Name": "메탕",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 1104,
    "ATK": 96.0,
    "DEF": 132.0,
    "HP": 120,
    "Fast_Moves": [
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아이언헤드"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 26,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "374-S",
    "Form": "그림자",
    "Pokemon_Name": "메탕",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 1104,
    "ATK": 96.0,
    "DEF": 132.0,
    "HP": 120,
    "Fast_Moves": [
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아이언헤드"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 26,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 375,
    "Form": "일반",
    "Pokemon_Name": "메탕구",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 1946,
    "ATK": 138.0,
    "DEF": 176.0,
    "HP": 155,
    "Fast_Moves": [
      "사념의박치기",
      "메탈클로",
      "연속자르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "자이로볼",
      "사이코쇼크"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 27,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "375-S",
    "Form": "그림자",
    "Pokemon_Name": "메탕구",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 1946,
    "ATK": 138.0,
    "DEF": 176.0,
    "HP": 155,
    "Fast_Moves": [
      "사념의박치기",
      "메탈클로",
      "연속자르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "자이로볼",
      "사이코쇼크"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 27,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 376,
    "Form": "일반",
    "Pokemon_Name": "메타그로스",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 4286,
    "ATK": 257.0,
    "DEF": 228.0,
    "HP": 190,
    "Fast_Moves": [
      "불릿펀치",
      "사념의박치기",
      "연속자르기"
    ],
    "Elite_Fast_Moves": [
      "섀도클로"
    ],
    "Charged_Moves": [
      "사이코키네시스",
      "러스터캐논",
      "지진"
    ],
    "Elite_Charged_Moves": [
      "코멧펀치"
    ],
    "Sprite_Col": 28,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "376-M1",
    "Form": "메가",
    "Pokemon_Name": "메타그로스",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 5552,
    "ATK": 300.0,
    "DEF": 289.0,
    "HP": 190,
    "Fast_Moves": [
      "불릿펀치",
      "사념의박치기",
      "연속자르기"
    ],
    "Elite_Fast_Moves": [
      "섀도클로"
    ],
    "Charged_Moves": [
      "사이코키네시스",
      "러스터캐논",
      "지진"
    ],
    "Elite_Charged_Moves": [
      "코멧펀치"
    ],
    "Sprite_Col": 29,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "376-S",
    "Form": "그림자",
    "Pokemon_Name": "메타그로스",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 4286,
    "ATK": 257.0,
    "DEF": 228.0,
    "HP": 190,
    "Fast_Moves": [
      "불릿펀치",
      "사념의박치기",
      "연속자르기"
    ],
    "Elite_Fast_Moves": [
      "섀도클로"
    ],
    "Charged_Moves": [
      "사이코키네시스",
      "러스터캐논",
      "지진"
    ],
    "Elite_Charged_Moves": [
      "코멧펀치"
    ],
    "Sprite_Col": 28,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 377,
    "Form": "일반",
    "Pokemon_Name": "레지락",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "-",
    "Max_CP": 3530,
    "ATK": 179.0,
    "DEF": 309.0,
    "HP": 190,
    "Fast_Moves": [
      "돌떨구기",
      "바위깨기",
      "록온"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤에지",
      "전자포",
      "기합구슬"
    ],
    "Elite_Charged_Moves": [
      "지진"
    ],
    "Sprite_Col": 30,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "377-S",
    "Form": "그림자",
    "Pokemon_Name": "레지락",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "-",
    "Max_CP": 3530,
    "ATK": 179.0,
    "DEF": 309.0,
    "HP": 190,
    "Fast_Moves": [
      "돌떨구기",
      "바위깨기",
      "록온"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤에지",
      "전자포",
      "기합구슬"
    ],
    "Elite_Charged_Moves": [
      "지진"
    ],
    "Sprite_Col": 30,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 378,
    "Form": "일반",
    "Pokemon_Name": "레지아이스",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "-",
    "Max_CP": 3530,
    "ATK": 179.0,
    "DEF": 309.0,
    "HP": 190,
    "Fast_Moves": [
      "얼음숨결",
      "바위깨기",
      "록온"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "눈보라",
      "지진",
      "기합구슬"
    ],
    "Elite_Charged_Moves": [
      "번개"
    ],
    "Sprite_Col": 31,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "378-S",
    "Form": "그림자",
    "Pokemon_Name": "레지아이스",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "-",
    "Max_CP": 3530,
    "ATK": 179.0,
    "DEF": 309.0,
    "HP": 190,
    "Fast_Moves": [
      "얼음숨결",
      "바위깨기",
      "록온"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "눈보라",
      "지진",
      "기합구슬"
    ],
    "Elite_Charged_Moves": [
      "번개"
    ],
    "Sprite_Col": 31,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 379,
    "Form": "일반",
    "Pokemon_Name": "레지스틸",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "-",
    "Max_CP": 2766,
    "ATK": 143.0,
    "DEF": 285.0,
    "HP": 190,
    "Fast_Moves": [
      "메탈클로",
      "바위깨기",
      "록온"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "러스터캐논",
      "파괴광선",
      "기합구슬"
    ],
    "Elite_Charged_Moves": [
      "전자포"
    ],
    "Sprite_Col": 32,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "379-S",
    "Form": "그림자",
    "Pokemon_Name": "레지스틸",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "-",
    "Max_CP": 2766,
    "ATK": 143.0,
    "DEF": 285.0,
    "HP": 190,
    "Fast_Moves": [
      "메탈클로",
      "바위깨기",
      "록온"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "러스터캐논",
      "파괴광선",
      "기합구슬"
    ],
    "Elite_Charged_Moves": [
      "전자포"
    ],
    "Sprite_Col": 32,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 380,
    "Form": "일반",
    "Pokemon_Name": "라티아스",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 3968,
    "ATK": 228.0,
    "DEF": 246.0,
    "HP": 190,
    "Fast_Moves": [
      "용의숨결",
      "사념의박치기",
      "애교부리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "역린",
      "번개",
      "파동탄"
    ],
    "Elite_Charged_Moves": [
      "미스트볼"
    ],
    "Sprite_Col": 33,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "380-M1",
    "Form": "메가",
    "Pokemon_Name": "라티아스",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 5428,
    "ATK": 289.0,
    "DEF": 297.0,
    "HP": 190,
    "Fast_Moves": [
      "용의숨결",
      "사념의박치기",
      "애교부리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "역린",
      "번개",
      "파동탄"
    ],
    "Elite_Charged_Moves": [
      "미스트볼"
    ],
    "Sprite_Col": 34,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "380-S",
    "Form": "그림자",
    "Pokemon_Name": "라티아스",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 3968,
    "ATK": 227.99999999999997,
    "DEF": 246.0,
    "HP": 190,
    "Fast_Moves": [
      "용의숨결",
      "사념의박치기",
      "애교부리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "역린",
      "번개",
      "파동탄"
    ],
    "Elite_Charged_Moves": [
      "미스트볼"
    ],
    "Sprite_Col": 33,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 381,
    "Form": "일반",
    "Pokemon_Name": "라티오스",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 4310,
    "ATK": 268.0,
    "DEF": 212.0,
    "HP": 190,
    "Fast_Moves": [
      "용의숨결",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "드래곤클로",
      "솔라빔",
      "파동탄"
    ],
    "Elite_Charged_Moves": [
      "러스터퍼지"
    ],
    "Sprite_Col": 35,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "381-M1",
    "Form": "메가",
    "Pokemon_Name": "라티오스",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 5661,
    "ATK": 335.0,
    "DEF": 241.0,
    "HP": 190,
    "Fast_Moves": [
      "용의숨결",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "드래곤클로",
      "솔라빔",
      "파동탄"
    ],
    "Elite_Charged_Moves": [
      "러스터퍼지"
    ],
    "Sprite_Col": 36,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "381-S",
    "Form": "그림자",
    "Pokemon_Name": "라티오스",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 4310,
    "ATK": 268.0,
    "DEF": 211.99999999999997,
    "HP": 190,
    "Fast_Moves": [
      "용의숨결",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "드래곤클로",
      "솔라빔",
      "파동탄"
    ],
    "Elite_Charged_Moves": [
      "러스터퍼지"
    ],
    "Sprite_Col": 35,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 382,
    "Form": "일반",
    "Pokemon_Name": "가이오가",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 4652,
    "ATK": 270.0,
    "DEF": 228.0,
    "HP": 205,
    "Fast_Moves": [
      "폭포오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "하이드로펌프",
      "눈보라",
      "번개",
      "파도타기"
    ],
    "Elite_Charged_Moves": [
      "근원의파동"
    ],
    "Sprite_Col": 37,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "382-M1",
    "Form": "원시",
    "Pokemon_Name": "가이오가",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 6672,
    "ATK": 353.0,
    "DEF": 268.0,
    "HP": 218,
    "Fast_Moves": [
      "폭포오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "하이드로펌프",
      "눈보라",
      "번개",
      "파도타기"
    ],
    "Elite_Charged_Moves": [
      "근원의파동"
    ],
    "Sprite_Col": 38,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "382-S",
    "Form": "그림자",
    "Pokemon_Name": "가이오가",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 4652,
    "ATK": 270.0,
    "DEF": 228.0,
    "HP": 205,
    "Fast_Moves": [
      "폭포오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "하이드로펌프",
      "눈보라",
      "번개",
      "파도타기"
    ],
    "Elite_Charged_Moves": [
      "근원의파동"
    ],
    "Sprite_Col": 37,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 383,
    "Form": "일반",
    "Pokemon_Name": "그란돈",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "-",
    "Max_CP": 4652,
    "ATK": 270.0,
    "DEF": 228.0,
    "HP": 205,
    "Fast_Moves": [
      "머드샷",
      "드래곤테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지진",
      "불대문자",
      "솔라빔"
    ],
    "Elite_Charged_Moves": [
      "불꽃펀치",
      "단애의칼"
    ],
    "Sprite_Col": 39,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "383-M1",
    "Form": "원시",
    "Pokemon_Name": "그란돈",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "불꽃",
    "Max_CP": 6672,
    "ATK": 353.0,
    "DEF": 268.0,
    "HP": 218,
    "Fast_Moves": [
      "머드샷",
      "드래곤테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지진",
      "불대문자",
      "솔라빔"
    ],
    "Elite_Charged_Moves": [
      "불꽃펀치",
      "단애의칼"
    ],
    "Sprite_Col": 40,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "383-S",
    "Form": "그림자",
    "Pokemon_Name": "그란돈",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "-",
    "Max_CP": 4652,
    "ATK": 270.0,
    "DEF": 228.0,
    "HP": 205,
    "Fast_Moves": [
      "머드샷",
      "드래곤테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지진",
      "불대문자",
      "솔라빔"
    ],
    "Elite_Charged_Moves": [
      "불꽃펀치",
      "단애의칼"
    ],
    "Sprite_Col": 39,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 384,
    "Form": "일반",
    "Pokemon_Name": "레쿠쟈",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "비행",
    "Max_CP": 4336,
    "ATK": 284.0,
    "DEF": 170.0,
    "HP": 213,
    "Fast_Moves": [
      "에어슬래시",
      "드래곤테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "역린",
      "제비반환",
      "원시의힘"
    ],
    "Elite_Charged_Moves": [
      "폭풍",
      "와이드브레이커",
      "화룡점정"
    ],
    "Sprite_Col": 41,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": "384-M1",
    "Form": "메가",
    "Pokemon_Name": "레쿠쟈",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "비행",
    "Max_CP": 6458,
    "ATK": 377.0,
    "DEF": 210.0,
    "HP": 227,
    "Fast_Moves": [
      "에어슬래시",
      "드래곤테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "역린",
      "제비반환",
      "원시의힘"
    ],
    "Elite_Charged_Moves": [
      "폭풍",
      "와이드브레이커",
      "화룡점정"
    ],
    "Sprite_Col": 42,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 385,
    "Form": "일반",
    "Pokemon_Name": "지라치",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 3691,
    "ATK": 210.0,
    "DEF": 210.0,
    "HP": 225,
    "Fast_Moves": [
      "염동력",
      "차지빔"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "매지컬샤인",
      "사이코키네시스",
      "파멸의소원",
      "파동탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 43,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 386,
    "Form": "일반",
    "Pokemon_Name": "테오키스(노말폼)",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 2916,
    "ATK": 414.0,
    "DEF": 46.0,
    "HP": 137,
    "Fast_Moves": [
      "사념의박치기",
      "차지빔"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코부스트",
      "10만볼트",
      "파괴광선"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 44,
    "Sprite_Row": 12
  },
  {
    "Pokemon_ID": 386,
    "Form": "일반",
    "Pokemon_Name": "테오키스(어택폼)",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 2570,
    "ATK": 144.0,
    "DEF": 330.0,
    "HP": 137,
    "Fast_Moves": [
      "사념의박치기",
      "독찌르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코부스트",
      "전자포",
      "악의파동"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 386,
    "Form": "일반",
    "Pokemon_Name": "테오키스(디펜스폼)",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 3573,
    "ATK": 345.0,
    "DEF": 115.0,
    "HP": 137,
    "Fast_Moves": [
      "사념의박치기",
      "카운터"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코부스트",
      "10만볼트",
      "스톤샤워"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 2,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 386,
    "Form": "일반",
    "Pokemon_Name": "테오키스(스피드폼)",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 3255,
    "ATK": 230.0,
    "DEF": 218.0,
    "HP": 137,
    "Fast_Moves": [
      "사념의박치기",
      "차지빔"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코부스트",
      "10만볼트",
      "스피드스타"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 3,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 387,
    "Form": "일반",
    "Pokemon_Name": "모부기",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 1342,
    "ATK": 119.0,
    "DEF": 110.0,
    "HP": 146,
    "Fast_Moves": [
      "몸통박치기",
      "잎날가르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "씨폭탄",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": "387-S",
    "Form": "그림자",
    "Pokemon_Name": "모부기",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 1342,
    "ATK": 118.99999999999999,
    "DEF": 110.0,
    "HP": 146,
    "Fast_Moves": [
      "몸통박치기",
      "잎날가르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "씨폭탄",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 388,
    "Form": "일반",
    "Pokemon_Name": "수풀부기",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 2137,
    "ATK": 157.0,
    "DEF": 143.0,
    "HP": 181,
    "Fast_Moves": [
      "물기",
      "잎날가르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "솔라빔",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 5,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": "388-S",
    "Form": "그림자",
    "Pokemon_Name": "수풀부기",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 2137,
    "ATK": 157.0,
    "DEF": 143.0,
    "HP": 181,
    "Fast_Moves": [
      "물기",
      "잎날가르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "솔라빔",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 5,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 389,
    "Form": "일반",
    "Pokemon_Name": "토대부기",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "땅",
    "Max_CP": 3318,
    "ATK": 202.0,
    "DEF": 188.0,
    "HP": 216,
    "Fast_Moves": [
      "물기",
      "잎날가르기",
      "진흙뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤에지",
      "솔라빔",
      "지진",
      "모래지옥"
    ],
    "Elite_Charged_Moves": [
      "하드플랜트"
    ],
    "Sprite_Col": 6,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": "389-S",
    "Form": "그림자",
    "Pokemon_Name": "토대부기",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "땅",
    "Max_CP": 3318,
    "ATK": 202.0,
    "DEF": 188.0,
    "HP": 216,
    "Fast_Moves": [
      "물기",
      "잎날가르기",
      "진흙뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤에지",
      "솔라빔",
      "지진",
      "모래지옥"
    ],
    "Elite_Charged_Moves": [
      "하드플랜트"
    ],
    "Sprite_Col": 6,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 390,
    "Form": "일반",
    "Pokemon_Name": "불꽃숭이",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 1082,
    "ATK": 113.0,
    "DEF": 86.0,
    "HP": 127,
    "Fast_Moves": [
      "불꽃세례",
      "할퀴기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "화염바퀴",
      "화염방사",
      "니트로차지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": "390-S",
    "Form": "그림자",
    "Pokemon_Name": "불꽃숭이",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 1082,
    "ATK": 113.0,
    "DEF": 86.0,
    "HP": 127,
    "Fast_Moves": [
      "불꽃세례",
      "할퀴기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "화염바퀴",
      "화염방사",
      "니트로차지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 391,
    "Form": "일반",
    "Pokemon_Name": "파이숭이",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "격투",
    "Max_CP": 1780,
    "ATK": 158.0,
    "DEF": 105.0,
    "HP": 162,
    "Fast_Moves": [
      "불꽃세례",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "화염바퀴",
      "화염방사",
      "로킥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 8,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": "391-S",
    "Form": "그림자",
    "Pokemon_Name": "파이숭이",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "격투",
    "Max_CP": 1780,
    "ATK": 158.0,
    "DEF": 105.0,
    "HP": 162,
    "Fast_Moves": [
      "불꽃세례",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "화염바퀴",
      "화염방사",
      "로킥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 8,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 392,
    "Form": "일반",
    "Pokemon_Name": "초염몽",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "격투",
    "Max_CP": 3033,
    "ATK": 222.0,
    "DEF": 151.0,
    "HP": 183,
    "Fast_Moves": [
      "회오리불꽃",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "솔라빔",
      "화염방사",
      "인파이트"
    ],
    "Elite_Charged_Moves": [
      "블라스트번"
    ],
    "Sprite_Col": 9,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": "392-S",
    "Form": "그림자",
    "Pokemon_Name": "초염몽",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "격투",
    "Max_CP": 3033,
    "ATK": 222.0,
    "DEF": 151.0,
    "HP": 183,
    "Fast_Moves": [
      "회오리불꽃",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "솔라빔",
      "화염방사",
      "인파이트"
    ],
    "Elite_Charged_Moves": [
      "블라스트번"
    ],
    "Sprite_Col": 9,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 393,
    "Form": "일반",
    "Pokemon_Name": "팽도리",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1215,
    "ATK": 112.0,
    "DEF": 102.0,
    "HP": 142,
    "Fast_Moves": [
      "거품",
      "막치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "거품광선",
      "회전부리",
      "얼어붙은바람"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 10,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": "393-S",
    "Form": "그림자",
    "Pokemon_Name": "팽도리",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1215,
    "ATK": 112.00000000000001,
    "DEF": 102.0,
    "HP": 142,
    "Fast_Moves": [
      "거품",
      "막치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "거품광선",
      "회전부리",
      "얼어붙은바람"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 10,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 394,
    "Form": "일반",
    "Pokemon_Name": "팽태자",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1923,
    "ATK": 150.0,
    "DEF": 139.0,
    "HP": 162,
    "Fast_Moves": [
      "거품",
      "메탈클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "거품광선",
      "하이드로펌프",
      "얼어붙은바람"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": "394-S",
    "Form": "그림자",
    "Pokemon_Name": "팽태자",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1923,
    "ATK": 150.0,
    "DEF": 139.0,
    "HP": 162,
    "Fast_Moves": [
      "거품",
      "메탈클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "거품광선",
      "하이드로펌프",
      "얼어붙은바람"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 395,
    "Form": "일반",
    "Pokemon_Name": "엠페르트",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "강철",
    "Max_CP": 3279,
    "ATK": 210.0,
    "DEF": 186.0,
    "HP": 197,
    "Fast_Moves": [
      "폭포오르기",
      "메탈클로",
      "강철날개",
      "금속음"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "하이드로펌프",
      "눈보라",
      "러스터캐논",
      "회전부리"
    ],
    "Elite_Charged_Moves": [
      "하이드로캐논"
    ],
    "Sprite_Col": 12,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": "395-S",
    "Form": "그림자",
    "Pokemon_Name": "엠페르트",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "강철",
    "Max_CP": 3279,
    "ATK": 210.0,
    "DEF": 186.0,
    "HP": 197,
    "Fast_Moves": [
      "폭포오르기",
      "메탈클로",
      "강철날개",
      "금속음"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "하이드로펌프",
      "눈보라",
      "러스터캐논",
      "회전부리"
    ],
    "Elite_Charged_Moves": [
      "하이드로캐논"
    ],
    "Sprite_Col": 12,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 396,
    "Form": "일반",
    "Pokemon_Name": "찌르꼬",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 813,
    "ATK": 101.0,
    "DEF": 58.0,
    "HP": 120,
    "Fast_Moves": [
      "몸통박치기",
      "전광석화",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "제비반환",
      "브레이브버드",
      "공중날기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": "396-S",
    "Form": "그림자",
    "Pokemon_Name": "찌르꼬",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 813,
    "ATK": 101.0,
    "DEF": 58.0,
    "HP": 120,
    "Fast_Moves": [
      "몸통박치기",
      "전광석화",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "제비반환",
      "브레이브버드",
      "공중날기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 397,
    "Form": "일반",
    "Pokemon_Name": "찌르버드",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 1468,
    "ATK": 142.0,
    "DEF": 94.0,
    "HP": 146,
    "Fast_Moves": [
      "날개치기",
      "전광석화",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "제비반환",
      "브레이브버드",
      "열풍",
      "공중날기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 14,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": "397-S",
    "Form": "그림자",
    "Pokemon_Name": "찌르버드",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 1468,
    "ATK": 142.0,
    "DEF": 94.0,
    "HP": 146,
    "Fast_Moves": [
      "날개치기",
      "전광석화",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "제비반환",
      "브레이브버드",
      "열풍",
      "공중날기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 14,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 398,
    "Form": "일반",
    "Pokemon_Name": "찌르호크",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 3194,
    "ATK": 234.0,
    "DEF": 140.0,
    "HP": 198,
    "Fast_Moves": [
      "날개치기",
      "전광석화",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [
      "바람일으키기"
    ],
    "Charged_Moves": [
      "브레이브버드",
      "열풍",
      "인파이트",
      "공중날기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 15,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": "398-S",
    "Form": "그림자",
    "Pokemon_Name": "찌르호크",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 3194,
    "ATK": 234.00000000000003,
    "DEF": 140.0,
    "HP": 198,
    "Fast_Moves": [
      "날개치기",
      "전광석화",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [
      "바람일으키기"
    ],
    "Charged_Moves": [
      "브레이브버드",
      "열풍",
      "인파이트",
      "공중날기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 15,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 399,
    "Form": "일반",
    "Pokemon_Name": "비버니",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 815,
    "ATK": 80.0,
    "DEF": 73.0,
    "HP": 153,
    "Fast_Moves": [
      "몸통박치기",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "필살앞니",
      "깨물어부수기",
      "풀묶기"
    ],
    "Elite_Charged_Moves": [
      "섀도볼",
      "10만볼트",
      "냉동빔",
      "엄청난힘"
    ],
    "Sprite_Col": 16,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": "399-S",
    "Form": "그림자",
    "Pokemon_Name": "비버니",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 815,
    "ATK": 80.0,
    "DEF": 73.0,
    "HP": 153,
    "Fast_Moves": [
      "몸통박치기",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "필살앞니",
      "깨물어부수기",
      "풀묶기"
    ],
    "Elite_Charged_Moves": [
      "섀도볼",
      "10만볼트",
      "냉동빔",
      "엄청난힘"
    ],
    "Sprite_Col": 16,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 400,
    "Form": "일반",
    "Pokemon_Name": "비버통",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "물",
    "Max_CP": 2061,
    "ATK": 162.0,
    "DEF": 119.0,
    "HP": 188,
    "Fast_Moves": [
      "물대포",
      "돌진",
      "구르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "필살앞니",
      "파괴광선",
      "파도타기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 17,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": "400-S",
    "Form": "그림자",
    "Pokemon_Name": "비버통",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "물",
    "Max_CP": 2061,
    "ATK": 162.0,
    "DEF": 119.0,
    "HP": 188,
    "Fast_Moves": [
      "물대포",
      "돌진",
      "구르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "필살앞니",
      "파괴광선",
      "파도타기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 17,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 401,
    "Form": "일반",
    "Pokemon_Name": "귀뚤뚜기",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 453,
    "ATK": 45.0,
    "DEF": 74.0,
    "HP": 114,
    "Fast_Moves": [
      "벌레의저항",
      "벌레먹기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 18,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 402,
    "Form": "일반",
    "Pokemon_Name": "귀뚤톡크",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 1869,
    "ATK": 160.0,
    "DEF": 100.0,
    "HP": 184,
    "Fast_Moves": [
      "벌레의저항",
      "연속자르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "벌레의야단법석",
      "시저크로스",
      "제비반환"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 19,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 403,
    "Form": "일반",
    "Pokemon_Name": "꼬링크",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 990,
    "ATK": 117.0,
    "DEF": 64.0,
    "HP": 128,
    "Fast_Moves": [
      "몸통박치기",
      "스파크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "방전",
      "10만볼트",
      "스피드스타"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 20,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": "403-S",
    "Form": "그림자",
    "Pokemon_Name": "꼬링크",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 990,
    "ATK": 117.00000000000001,
    "DEF": 64.0,
    "HP": 128,
    "Fast_Moves": [
      "몸통박치기",
      "스파크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "방전",
      "10만볼트",
      "스피드스타"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 20,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 404,
    "Form": "일반",
    "Pokemon_Name": "럭시오",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 1680,
    "ATK": 159.0,
    "DEF": 95.0,
    "HP": 155,
    "Fast_Moves": [
      "스파크",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "10만볼트",
      "와일드볼트",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 21,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": "404-S",
    "Form": "그림자",
    "Pokemon_Name": "럭시오",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 1680,
    "ATK": 159.0,
    "DEF": 95.0,
    "HP": 155,
    "Fast_Moves": [
      "스파크",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "10만볼트",
      "와일드볼트",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 21,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 405,
    "Form": "일반",
    "Pokemon_Name": "렌트라",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 3265,
    "ATK": 232.0,
    "DEF": 156.0,
    "HP": 190,
    "Fast_Moves": [
      "스파크",
      "바크아웃",
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파괴광선",
      "와일드볼트",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [
      "사이코팽"
    ],
    "Sprite_Col": 22,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": "405-S",
    "Form": "그림자",
    "Pokemon_Name": "렌트라",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 3265,
    "ATK": 232.0,
    "DEF": 156.0,
    "HP": 190,
    "Fast_Moves": [
      "스파크",
      "바크아웃",
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파괴광선",
      "와일드볼트",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [
      "사이코팽"
    ],
    "Sprite_Col": 22,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 406,
    "Form": "일반",
    "Pokemon_Name": "꼬몽울",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "독",
    "Max_CP": 968,
    "ATK": 91.0,
    "DEF": 109.0,
    "HP": 120,
    "Fast_Moves": [
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)",
      "잎날가르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "풀묶기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 23,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 407,
    "Form": "일반",
    "Pokemon_Name": "로즈레이드",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "독",
    "Max_CP": 3359,
    "ATK": 243.0,
    "DEF": 185.0,
    "HP": 155,
    "Fast_Moves": [
      "독찌르기",
      "잎날가르기",
      "메지컬리프",
      "독침"
    ],
    "Elite_Fast_Moves": [
      "씨기관총"
    ],
    "Charged_Moves": [
      "솔라빔",
      "오물폭탄",
      "매지컬샤인",
      "풀묶기",
      "리프스톰"
    ],
    "Elite_Charged_Moves": [
      "웨더볼(불꽃)"
    ],
    "Sprite_Col": 24,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 408,
    "Form": "일반",
    "Pokemon_Name": "두개도스",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "-",
    "Max_CP": 2058,
    "ATK": 218.0,
    "DEF": 71.0,
    "HP": 167,
    "Fast_Moves": [
      "사념의박치기",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "암석봉인",
      "원시의힘",
      "땅고르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 25,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": "408-S",
    "Form": "그림자",
    "Pokemon_Name": "두개도스",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "-",
    "Max_CP": 2058,
    "ATK": 217.99999999999997,
    "DEF": 71.0,
    "HP": 167,
    "Fast_Moves": [
      "사념의박치기",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "암석봉인",
      "원시의힘",
      "땅고르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 25,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 409,
    "Form": "일반",
    "Pokemon_Name": "램펄드",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "-",
    "Max_CP": 3728,
    "ATK": 295.0,
    "DEF": 109.0,
    "HP": 219,
    "Fast_Moves": [
      "사념의박치기",
      "떨어뜨리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤샤워",
      "역린",
      "화염방사"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 26,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": "409-S",
    "Form": "그림자",
    "Pokemon_Name": "램펄드",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "-",
    "Max_CP": 3728,
    "ATK": 295.0,
    "DEF": 109.0,
    "HP": 219,
    "Fast_Moves": [
      "사념의박치기",
      "떨어뜨리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤샤워",
      "역린",
      "화염방사"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 26,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 410,
    "Form": "일반",
    "Pokemon_Name": "방패톱스",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "강철",
    "Max_CP": 1007,
    "ATK": 76.0,
    "DEF": 195.0,
    "HP": 102,
    "Fast_Moves": [
      "몸통박치기",
      "아이언테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "암석봉인",
      "원시의힘",
      "헤비봄버"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 27,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": "410-S",
    "Form": "그림자",
    "Pokemon_Name": "방패톱스",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "강철",
    "Max_CP": 1007,
    "ATK": 76.0,
    "DEF": 195.0,
    "HP": 102,
    "Fast_Moves": [
      "몸통박치기",
      "아이언테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "암석봉인",
      "원시의힘",
      "헤비봄버"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 27,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 411,
    "Form": "일반",
    "Pokemon_Name": "바리톱스",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "강철",
    "Max_CP": 1741,
    "ATK": 94.0,
    "DEF": 286.0,
    "HP": 155,
    "Fast_Moves": [
      "떨어뜨리기",
      "아이언테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤에지",
      "화염방사",
      "러스터캐논"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 28,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": "411-S",
    "Form": "그림자",
    "Pokemon_Name": "바리톱스",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "강철",
    "Max_CP": 1741,
    "ATK": 94.0,
    "DEF": 286.0,
    "HP": 155,
    "Fast_Moves": [
      "떨어뜨리기",
      "아이언테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤에지",
      "화염방사",
      "러스터캐논"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 28,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 412,
    "Form": "일반",
    "Pokemon_Name": "도롱충이(초목도롱)",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 552,
    "ATK": 53.0,
    "DEF": 83.0,
    "HP": 120,
    "Fast_Moves": [
      "몸통박치기",
      "벌레먹기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 29,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 412,
    "Form": "일반",
    "Pokemon_Name": "도롱충이(모래땅도롱)",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 552,
    "ATK": 53.0,
    "DEF": 83.0,
    "HP": 120,
    "Fast_Moves": [
      "몸통박치기",
      "벌레먹기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 412,
    "Form": "일반",
    "Pokemon_Name": "도롱충이(슈레도롱)",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 552,
    "ATK": 53.0,
    "DEF": 83.0,
    "HP": 120,
    "Fast_Moves": [
      "몸통박치기",
      "벌레먹기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 413,
    "Form": "일반",
    "Pokemon_Name": "도롱마담(초목도롱)",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "풀",
    "Max_CP": 2005,
    "ATK": 141.0,
    "DEF": 180.0,
    "HP": 155,
    "Fast_Moves": [
      "염동력",
      "벌레먹기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "환상빔",
      "에너지볼",
      "벌레의야단법석"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 413,
    "Form": "일반",
    "Pokemon_Name": "도롱마담(모래땅도롱)",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "땅",
    "Max_CP": 2005,
    "ATK": 141.0,
    "DEF": 180.0,
    "HP": 155,
    "Fast_Moves": [
      "염동력",
      "벌레먹기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "환상빔",
      "땅고르기",
      "벌레의야단법석"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 33,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 413,
    "Form": "일반",
    "Pokemon_Name": "도롱마담(슈레도롱)",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "강철",
    "Max_CP": 1802,
    "ATK": 127.0,
    "DEF": 175.0,
    "HP": 155,
    "Fast_Moves": [
      "염동력",
      "벌레먹기",
      "금속음"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "환상빔",
      "아이언헤드",
      "벌레의야단법석"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 34,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 414,
    "Form": "일반",
    "Pokemon_Name": "나메일",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "비행",
    "Max_CP": 2052,
    "ATK": 185.0,
    "DEF": 98.0,
    "HP": 172,
    "Fast_Moves": [
      "에어슬래시",
      "벌레먹기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "환상빔",
      "제비반환",
      "벌레의야단법석"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 35,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 415,
    "Form": "일반",
    "Pokemon_Name": "세꿀버리",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "비행",
    "Max_CP": 559,
    "ATK": 59.0,
    "DEF": 83.0,
    "HP": 102,
    "Fast_Moves": [
      "벌레먹기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "벌레의야단법석"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 416,
    "Form": "일반",
    "Pokemon_Name": "비퀸",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "비행",
    "Max_CP": 2267,
    "ATK": 149.0,
    "DEF": 190.0,
    "HP": 172,
    "Fast_Moves": [
      "벌레먹기",
      "독침",
      "연속자르기",
      "에어슬래시"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "벌레의야단법석",
      "파워젬",
      "시저크로스",
      "마지막일침",
      "시그널빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 417,
    "Form": "일반",
    "Pokemon_Name": "파치리스",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 1372,
    "ATK": 94.0,
    "DEF": 172.0,
    "HP": 155,
    "Fast_Moves": [
      "스파크",
      "볼트체인지"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "번개",
      "10만볼트",
      "번개펀치",
      "필살앞니"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 38,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 418,
    "Form": "일반",
    "Pokemon_Name": "브이젤",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1192,
    "ATK": 132.0,
    "DEF": 67.0,
    "HP": 146,
    "Fast_Moves": [
      "물대포",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아제트",
      "물의파동",
      "스피드스타"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 39,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 419,
    "Form": "일반",
    "Pokemon_Name": "플로젤",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 2762,
    "ATK": 221.0,
    "DEF": 114.0,
    "HP": 198,
    "Fast_Moves": [
      "물대포",
      "폭포오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아제트",
      "하이드로펌프",
      "스피드스타",
      "아쿠아브레이크"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 40,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 420,
    "Form": "일반",
    "Pokemon_Name": "체리버",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 1074,
    "ATK": 108.0,
    "DEF": 92.0,
    "HP": 128,
    "Fast_Moves": [
      "몸통박치기",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "매지컬샤인",
      "꽃보라",
      "씨폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 41,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 421,
    "Form": "일반",
    "Pokemon_Name": "체리꼬(네거티브)",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 2315,
    "ATK": 170.0,
    "DEF": 153.0,
    "HP": 172,
    "Fast_Moves": [
      "잎날가르기",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "매지컬샤인",
      "파괴광선",
      "솔라빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 43,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 421,
    "Form": "일반",
    "Pokemon_Name": "체리꼬(포지티브)",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 2315,
    "ATK": 170.0,
    "DEF": 153.0,
    "HP": 172,
    "Fast_Moves": [
      "잎날가르기",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "매지컬샤인",
      "파괴광선",
      "솔라빔",
      "웨더볼(불꽃)"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 42,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 422,
    "Form": "일반",
    "Pokemon_Name": "깝질무(동쪽바다)",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1284,
    "ATK": 103.0,
    "DEF": 105.0,
    "HP": 183,
    "Fast_Moves": [
      "진흙뿌리기",
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "물의파동",
      "진흙폭탄",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 422,
    "Form": "일반",
    "Pokemon_Name": "깝질무(서쪽바다)",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1284,
    "ATK": 103.0,
    "DEF": 105.0,
    "HP": 183,
    "Fast_Moves": [
      "진흙뿌리기",
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "물의파동",
      "진흙폭탄",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 44,
    "Sprite_Row": 13
  },
  {
    "Pokemon_ID": 423,
    "Form": "일반",
    "Pokemon_Name": "트리토돈(동쪽바다)",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "땅",
    "Max_CP": 2628,
    "ATK": 169.0,
    "DEF": 143.0,
    "HP": 244,
    "Fast_Moves": [
      "진흙뿌리기",
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "물의파동",
      "대지의힘",
      "누르기",
      "지진"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 3,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 423,
    "Form": "일반",
    "Pokemon_Name": "트리토돈(서쪽바다)",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "땅",
    "Max_CP": 2628,
    "ATK": 169.0,
    "DEF": 143.0,
    "HP": 244,
    "Fast_Moves": [
      "진흙뿌리기",
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "물의파동",
      "대지의힘",
      "누르기",
      "지진"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 2,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 424,
    "Form": "일반",
    "Pokemon_Name": "겟핸보숭",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 2733,
    "ATK": 205.0,
    "DEF": 143.0,
    "HP": 181,
    "Fast_Moves": [
      "할퀴기",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "로킥",
      "파괴광선",
      "제비반환"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": "424-S",
    "Form": "그림자",
    "Pokemon_Name": "겟핸보숭",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 2733,
    "ATK": 205.0,
    "DEF": 143.0,
    "HP": 181,
    "Fast_Moves": [
      "할퀴기",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "로킥",
      "파괴광선",
      "제비반환"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 425,
    "Form": "일반",
    "Pokemon_Name": "흔들풍손",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "비행",
    "Max_CP": 1353,
    "ATK": 117.0,
    "DEF": 80.0,
    "HP": 207,
    "Fast_Moves": [
      "병상첨병",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "괴상한바람",
      "얼어붙은바람",
      "섀도볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 5,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": "425-S",
    "Form": "그림자",
    "Pokemon_Name": "흔들풍손",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "비행",
    "Max_CP": 1353,
    "ATK": 117.00000000000001,
    "DEF": 80.0,
    "HP": 207,
    "Fast_Moves": [
      "병상첨병",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "괴상한바람",
      "얼어붙은바람",
      "섀도볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 5,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 426,
    "Form": "일반",
    "Pokemon_Name": "둥실라이드",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "비행",
    "Max_CP": 2693,
    "ATK": 180.0,
    "DEF": 102.0,
    "HP": 312,
    "Fast_Moves": [
      "병상첨병",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "괴상한바람",
      "얼어붙은바람",
      "섀도볼",
      "매지컬플레임"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 6,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": "426-S",
    "Form": "그림자",
    "Pokemon_Name": "둥실라이드",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "비행",
    "Max_CP": 2693,
    "ATK": 180.0,
    "DEF": 102.0,
    "HP": 312,
    "Fast_Moves": [
      "병상첨병",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "괴상한바람",
      "얼어붙은바람",
      "섀도볼",
      "매지컬플레임"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 6,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 427,
    "Form": "일반",
    "Pokemon_Name": "이어롤",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 1423,
    "ATK": 130.0,
    "DEF": 105.0,
    "HP": 146,
    "Fast_Moves": [
      "막치기",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "불꽃펀치",
      "스피드스타"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 428,
    "Form": "일반",
    "Pokemon_Name": "이어롭",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 2328,
    "ATK": 156.0,
    "DEF": 194.0,
    "HP": 163,
    "Fast_Moves": [
      "막치기",
      "안다리걸기",
      "두번차기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "불꽃펀치",
      "파괴광선",
      "기합구슬",
      "트리플악셀"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 8,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": "428-M1",
    "Form": "메가",
    "Pokemon_Name": "이어롭",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "격투",
    "Max_CP": 4234,
    "ATK": 282.0,
    "DEF": 214.0,
    "HP": 163,
    "Fast_Moves": [
      "막치기",
      "안다리걸기",
      "두번차기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "불꽃펀치",
      "파괴광선",
      "기합구슬",
      "트리플악셀"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 9,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 429,
    "Form": "일반",
    "Pokemon_Name": "무우마직",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "-",
    "Max_CP": 2957,
    "ATK": 211.0,
    "DEF": 187.0,
    "HP": 155,
    "Fast_Moves": [
      "기습",
      "병상첨병",
      "메지컬리프",
      "사이코웨이브"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도볼",
      "악의파동",
      "매지컬샤인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 10,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": "429-S",
    "Form": "그림자",
    "Pokemon_Name": "무우마직",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "-",
    "Max_CP": 2957,
    "ATK": 211.0,
    "DEF": 186.99999999999997,
    "HP": 155,
    "Fast_Moves": [
      "기습",
      "병상첨병",
      "메지컬리프",
      "사이코웨이브"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도볼",
      "악의파동",
      "매지컬샤인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 10,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 430,
    "Form": "일반",
    "Pokemon_Name": "돈크로우",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "비행",
    "Max_CP": 3065,
    "ATK": 243.0,
    "DEF": 103.0,
    "HP": 225,
    "Fast_Moves": [
      "쪼기",
      "바크아웃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "브레이브버드",
      "사이코키네시스",
      "악의파동",
      "불새"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": "430-S",
    "Form": "그림자",
    "Pokemon_Name": "돈크로우",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "비행",
    "Max_CP": 3065,
    "ATK": 242.99999999999997,
    "DEF": 103.0,
    "HP": 225,
    "Fast_Moves": [
      "쪼기",
      "바크아웃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "브레이브버드",
      "사이코키네시스",
      "악의파동",
      "불새"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 431,
    "Form": "일반",
    "Pokemon_Name": "나옹마",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 1056,
    "ATK": 109.0,
    "DEF": 82.0,
    "HP": 135,
    "Fast_Moves": [
      "할퀴기",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "치근거리기",
      "10만볼트",
      "제비반환"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 12,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": "431-S",
    "Form": "그림자",
    "Pokemon_Name": "나옹마",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 1056,
    "ATK": 108.99999999999999,
    "DEF": 82.0,
    "HP": 135,
    "Fast_Moves": [
      "할퀴기",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "치근거리기",
      "10만볼트",
      "제비반환"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 12,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 432,
    "Form": "일반",
    "Pokemon_Name": "몬냥이",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 2208,
    "ATK": 172.0,
    "DEF": 133.0,
    "HP": 174,
    "Fast_Moves": [
      "할퀴기",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "치근거리기",
      "번개",
      "제비반환"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": "432-S",
    "Form": "그림자",
    "Pokemon_Name": "몬냥이",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 2208,
    "ATK": 172.0,
    "DEF": 133.0,
    "HP": 174,
    "Fast_Moves": [
      "할퀴기",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "치근거리기",
      "번개",
      "제비반환"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 433,
    "Form": "일반",
    "Pokemon_Name": "랑딸랑",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 1137,
    "ATK": 114.0,
    "DEF": 94.0,
    "HP": 128,
    "Fast_Moves": [
      "사념의박치기",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "김밥말이",
      "섀도볼",
      "사이코쇼크"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 14,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 434,
    "Form": "일반",
    "Pokemon_Name": "스컹뿡",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "악",
    "Max_CP": 1301,
    "ATK": 121.0,
    "DEF": 90.0,
    "HP": 160,
    "Fast_Moves": [
      "할퀴기",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "화염방사",
      "오물폭탄",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 15,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": "434-S",
    "Form": "그림자",
    "Pokemon_Name": "스컹뿡",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "악",
    "Max_CP": 1301,
    "ATK": 121.0,
    "DEF": 90.00000000000001,
    "HP": 160,
    "Fast_Moves": [
      "할퀴기",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "화염방사",
      "오물폭탄",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 15,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 435,
    "Form": "일반",
    "Pokemon_Name": "스컹탱크",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "악",
    "Max_CP": 2666,
    "ATK": 184.0,
    "DEF": 132.0,
    "HP": 230,
    "Fast_Moves": [
      "독찌르기",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "화염방사",
      "오물폭탄",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 16,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": "435-S",
    "Form": "그림자",
    "Pokemon_Name": "스컹탱크",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "악",
    "Max_CP": 2666,
    "ATK": 184.0,
    "DEF": 132.0,
    "HP": 230,
    "Fast_Moves": [
      "독찌르기",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "화염방사",
      "오물폭탄",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 16,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 436,
    "Form": "일반",
    "Pokemon_Name": "동미러",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 681,
    "ATK": 43.0,
    "DEF": 154.0,
    "HP": 149,
    "Fast_Moves": [
      "몸통박치기",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "자이로볼",
      "사이코쇼크",
      "헤비봄버",
      "보복"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 17,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 437,
    "Form": "일반",
    "Pokemon_Name": "동탁군",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 2531,
    "ATK": 161.0,
    "DEF": 213.0,
    "HP": 167,
    "Fast_Moves": [
      "속여때리기",
      "염동력",
      "금속음"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "러스터캐논",
      "사이코키네시스",
      "헤비봄버",
      "땅고르기",
      "사이코쇼크",
      "보복"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 18,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 438,
    "Form": "일반",
    "Pokemon_Name": "꼬지지",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "-",
    "Max_CP": 1472,
    "ATK": 124.0,
    "DEF": 133.0,
    "HP": 137,
    "Fast_Moves": [
      "돌떨구기",
      "카운터"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "암석봉인",
      "지진",
      "스톤샤워"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 19,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 439,
    "Form": "일반",
    "Pokemon_Name": "흉내내",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "페어리",
    "Max_CP": 1238,
    "ATK": 125.0,
    "DEF": 142.0,
    "HP": 85,
    "Fast_Moves": [
      "염동력",
      "막치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "환상빔",
      "사이코키네시스",
      "사이코쇼크"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 20,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 440,
    "Form": "일반",
    "Pokemon_Name": "핑복",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 419,
    "ATK": 25.0,
    "DEF": 77.0,
    "HP": 225,
    "Fast_Moves": [
      "막치기",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 21,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 441,
    "Form": "일반",
    "Pokemon_Name": "페라페",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 2025,
    "ATK": 183.0,
    "DEF": 91.0,
    "HP": 183,
    "Fast_Moves": [
      "쪼기",
      "강철날개"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "나이트헤드",
      "불새",
      "열풍"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 22,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 442,
    "Form": "일반",
    "Pokemon_Name": "화강돌",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "악",
    "Max_CP": 2343,
    "ATK": 169.0,
    "DEF": 199.0,
    "HP": 137,
    "Fast_Moves": [
      "속여때리기",
      "기습"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "야습",
      "괴상한바람",
      "섀도볼",
      "암석봉인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 23,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 443,
    "Form": "일반",
    "Pokemon_Name": "딥상어동",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "땅",
    "Max_CP": 1258,
    "ATK": 124.0,
    "DEF": 84.0,
    "HP": 151,
    "Fast_Moves": [
      "돌진",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "회오리",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": "443-S",
    "Form": "그림자",
    "Pokemon_Name": "딥상어동",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "땅",
    "Max_CP": 1258,
    "ATK": 123.99999999999999,
    "DEF": 84.0,
    "HP": 151,
    "Fast_Moves": [
      "돌진",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "회오리",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 444,
    "Form": "일반",
    "Pokemon_Name": "한바이트",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "땅",
    "Max_CP": 2119,
    "ATK": 172.0,
    "DEF": 125.0,
    "HP": 169,
    "Fast_Moves": [
      "돌진",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "회오리",
      "화염방사"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 25,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": "444-S",
    "Form": "그림자",
    "Pokemon_Name": "한바이트",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "땅",
    "Max_CP": 2119,
    "ATK": 172.0,
    "DEF": 125.0,
    "HP": 169,
    "Fast_Moves": [
      "돌진",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "회오리",
      "화염방사"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 25,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 445,
    "Form": "일반",
    "Pokemon_Name": "한카리아스",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "땅",
    "Max_CP": 4479,
    "ATK": 261.0,
    "DEF": 193.0,
    "HP": 239,
    "Fast_Moves": [
      "드래곤테일",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "역린",
      "지진",
      "불대문자",
      "모래지옥",
      "와이드브레이커"
    ],
    "Elite_Charged_Moves": [
      "대지의힘"
    ],
    "Sprite_Col": 26,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": "445-M1",
    "Form": "메가",
    "Pokemon_Name": "한카리아스",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "땅",
    "Max_CP": 6132,
    "ATK": 339.0,
    "DEF": 222.0,
    "HP": 239,
    "Fast_Moves": [
      "드래곤테일",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "역린",
      "지진",
      "불대문자",
      "모래지옥",
      "와이드브레이커"
    ],
    "Elite_Charged_Moves": [
      "대지의힘"
    ],
    "Sprite_Col": 27,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": "445-S",
    "Form": "그림자",
    "Pokemon_Name": "한카리아스",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "땅",
    "Max_CP": 4479,
    "ATK": 261.0,
    "DEF": 193.0,
    "HP": 239,
    "Fast_Moves": [
      "드래곤테일",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "역린",
      "지진",
      "불대문자",
      "모래지옥",
      "와이드브레이커"
    ],
    "Elite_Charged_Moves": [
      "대지의힘"
    ],
    "Sprite_Col": 26,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 446,
    "Form": "일반",
    "Pokemon_Name": "먹고자",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 2139,
    "ATK": 137.0,
    "DEF": 117.0,
    "HP": 286,
    "Fast_Moves": [
      "몸통박치기",
      "핥기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "더스트슈트",
      "누르기",
      "땅고르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 28,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 447,
    "Form": "일반",
    "Pokemon_Name": "리오르",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 1123,
    "ATK": 127.0,
    "DEF": 78.0,
    "HP": 120,
    "Fast_Moves": [
      "카운터",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨트리기",
      "로킥",
      "크로스촙",
      "블레이즈킥",
      "번개펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 29,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 448,
    "Form": "일반",
    "Pokemon_Name": "루카리오",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "강철",
    "Max_CP": 3056,
    "ATK": 236.0,
    "DEF": 144.0,
    "HP": 172,
    "Fast_Moves": [
      "카운터",
      "불릿펀치"
    ],
    "Elite_Fast_Moves": [
      "발경"
    ],
    "Charged_Moves": [
      "러스터캐논",
      "섀도볼",
      "인파이트",
      "그로우펀치",
      "파동탄",
      "블레이즈킥",
      "번개펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": "448-M1",
    "Form": "메가",
    "Pokemon_Name": "루카리오",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "강철",
    "Max_CP": 4325,
    "ATK": 310.0,
    "DEF": 175.0,
    "HP": 172,
    "Fast_Moves": [
      "카운터",
      "불릿펀치"
    ],
    "Elite_Fast_Moves": [
      "발경"
    ],
    "Charged_Moves": [
      "러스터캐논",
      "섀도볼",
      "인파이트",
      "그로우펀치",
      "파동탄",
      "블레이즈킥",
      "번개펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 449,
    "Form": "일반",
    "Pokemon_Name": "히포포타스",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "-",
    "Max_CP": 1535,
    "ATK": 124.0,
    "DEF": 118.0,
    "HP": 169,
    "Fast_Moves": [
      "몸통박치기",
      "물기",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "암석봉인",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": "449-S",
    "Form": "그림자",
    "Pokemon_Name": "히포포타스",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "-",
    "Max_CP": 1535,
    "ATK": 123.99999999999999,
    "DEF": 118.0,
    "HP": 169,
    "Fast_Moves": [
      "몸통박치기",
      "물기",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "암석봉인",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 450,
    "Form": "일반",
    "Pokemon_Name": "하마돈",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "-",
    "Max_CP": 3488,
    "ATK": 201.0,
    "DEF": 191.0,
    "HP": 239,
    "Fast_Moves": [
      "불꽃엄니",
      "물기",
      "번개엄니",
      "얼음엄니",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지진",
      "스톤에지",
      "누르기",
      "대지의힘",
      "웨더볼(바위)",
      "열사의대지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 34,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": "450-S",
    "Form": "그림자",
    "Pokemon_Name": "하마돈",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "-",
    "Max_CP": 3488,
    "ATK": 201.0,
    "DEF": 191.0,
    "HP": 239,
    "Fast_Moves": [
      "불꽃엄니",
      "물기",
      "번개엄니",
      "얼음엄니",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지진",
      "스톤에지",
      "누르기",
      "대지의힘",
      "웨더볼(바위)",
      "열사의대지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 34,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 451,
    "Form": "일반",
    "Pokemon_Name": "스콜피",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "벌레",
    "Max_CP": 1141,
    "ATK": 93.0,
    "DEF": 151.0,
    "HP": 120,
    "Fast_Moves": [
      "독침",
      "엉겨붙기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "크로스포이즌",
      "아쿠아테일",
      "오물폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": "451-S",
    "Form": "그림자",
    "Pokemon_Name": "스콜피",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "벌레",
    "Max_CP": 1141,
    "ATK": 93.0,
    "DEF": 151.0,
    "HP": 120,
    "Fast_Moves": [
      "독침",
      "엉겨붙기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "크로스포이즌",
      "아쿠아테일",
      "오물폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 452,
    "Form": "일반",
    "Pokemon_Name": "드래피온",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "악",
    "Max_CP": 2773,
    "ATK": 180.0,
    "DEF": 202.0,
    "HP": 172,
    "Fast_Moves": [
      "독침",
      "엉겨붙기",
      "물기",
      "얼음엄니"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "아쿠아테일",
      "오물폭탄",
      "마지막일침"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": "452-S",
    "Form": "그림자",
    "Pokemon_Name": "드래피온",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "악",
    "Max_CP": 2773,
    "ATK": 180.0,
    "DEF": 202.0,
    "HP": 172,
    "Fast_Moves": [
      "독침",
      "엉겨붙기",
      "물기",
      "얼음엄니"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "아쿠아테일",
      "오물폭탄",
      "마지막일침"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 453,
    "Form": "일반",
    "Pokemon_Name": "삐딱구리",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "격투",
    "Max_CP": 1077,
    "ATK": 116.0,
    "DEF": 76.0,
    "HP": 134,
    "Fast_Moves": [
      "독침",
      "독찌르기",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨트리기",
      "로킥",
      "오물폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 38,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": "453-S",
    "Form": "그림자",
    "Pokemon_Name": "삐딱구리",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "격투",
    "Max_CP": 1077,
    "ATK": 116.0,
    "DEF": 76.0,
    "HP": 134,
    "Fast_Moves": [
      "독침",
      "독찌르기",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨트리기",
      "로킥",
      "오물폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 38,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 454,
    "Form": "일반",
    "Pokemon_Name": "독개굴",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "격투",
    "Max_CP": 2813,
    "ATK": 211.0,
    "DEF": 133.0,
    "HP": 195,
    "Fast_Moves": [
      "독찌르기",
      "카운터",
      "머드샷",
      "독침"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "폭발펀치",
      "진흙폭탄",
      "오물폭탄",
      "섀도볼",
      "드레인펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 39,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": "454-S",
    "Form": "그림자",
    "Pokemon_Name": "독개굴",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "격투",
    "Max_CP": 2813,
    "ATK": 211.0,
    "DEF": 133.0,
    "HP": 195,
    "Fast_Moves": [
      "독찌르기",
      "카운터",
      "머드샷",
      "독침"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "폭발펀치",
      "진흙폭탄",
      "오물폭탄",
      "섀도볼",
      "드레인펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 39,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 455,
    "Form": "일반",
    "Pokemon_Name": "무스틈니",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 2441,
    "ATK": 187.0,
    "DEF": 136.0,
    "HP": 179,
    "Fast_Moves": [
      "물기",
      "덩굴채찍"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파워휩",
      "에너지볼",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 40,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 456,
    "Form": "일반",
    "Pokemon_Name": "형광어",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1098,
    "ATK": 96.0,
    "DEF": 116.0,
    "HP": 135,
    "Fast_Moves": [
      "막치기",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "물의파동",
      "냉동빔",
      "은빛바람"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 41,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 457,
    "Form": "일반",
    "Pokemon_Name": "네오라이트",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 2050,
    "ATK": 142.0,
    "DEF": 170.0,
    "HP": 170,
    "Fast_Moves": [
      "폭포오르기",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "물의파동",
      "눈보라",
      "은빛바람"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 42,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 458,
    "Form": "일반",
    "Pokemon_Name": "타만타",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "비행",
    "Max_CP": 1411,
    "ATK": 105.0,
    "DEF": 179.0,
    "HP": 128,
    "Fast_Moves": [
      "거품",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "물의파동",
      "냉동빔",
      "제비반환"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 43,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 459,
    "Form": "일반",
    "Pokemon_Name": "눈쓰개",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "얼음",
    "Max_CP": 1311,
    "ATK": 115.0,
    "DEF": 105.0,
    "HP": 155,
    "Fast_Moves": [
      "눈싸라기",
      "얼음뭉치",
      "나뭇잎"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "냉동빔",
      "에너지볼",
      "짓밟기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 44,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": "459-S",
    "Form": "그림자",
    "Pokemon_Name": "눈쓰개",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "얼음",
    "Max_CP": 1311,
    "ATK": 115.0,
    "DEF": 105.0,
    "HP": 155,
    "Fast_Moves": [
      "눈싸라기",
      "얼음뭉치",
      "나뭇잎"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "냉동빔",
      "에너지볼",
      "짓밟기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 44,
    "Sprite_Row": 14
  },
  {
    "Pokemon_ID": 460,
    "Form": "일반",
    "Pokemon_Name": "눈설왕",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "얼음",
    "Max_CP": 2670,
    "ATK": 178.0,
    "DEF": 158.0,
    "HP": 207,
    "Fast_Moves": [
      "눈싸라기",
      "잎날가르기",
      "나뭇잎"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "눈보라",
      "에너지볼",
      "역린",
      "웨더볼(얼음)",
      "얼어붙은바람"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": "460-M1",
    "Form": "메가",
    "Pokemon_Name": "눈설왕",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "얼음",
    "Max_CP": 3850,
    "ATK": 240.0,
    "DEF": 191.0,
    "HP": 207,
    "Fast_Moves": [
      "눈싸라기",
      "잎날가르기",
      "나뭇잎"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "눈보라",
      "에너지볼",
      "역린",
      "웨더볼(얼음)",
      "얼어붙은바람"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 2,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": "460-S",
    "Form": "그림자",
    "Pokemon_Name": "눈설왕",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "얼음",
    "Max_CP": 2670,
    "ATK": 178.0,
    "DEF": 158.0,
    "HP": 207,
    "Fast_Moves": [
      "눈싸라기",
      "잎날가르기",
      "나뭇잎"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "눈보라",
      "에너지볼",
      "역린",
      "웨더볼(얼음)",
      "얼어붙은바람"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 461,
    "Form": "일반",
    "Pokemon_Name": "포푸니라",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "얼음",
    "Max_CP": 3397,
    "ATK": 243.0,
    "DEF": 171.0,
    "HP": 172,
    "Fast_Moves": [
      "얼음뭉치",
      "속여때리기",
      "바크아웃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "눈사태",
      "기합구슬",
      "속임수",
      "트리플악셀"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 3,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": "461-S",
    "Form": "그림자",
    "Pokemon_Name": "포푸니라",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "얼음",
    "Max_CP": 3397,
    "ATK": 242.99999999999997,
    "DEF": 171.00000000000003,
    "HP": 172,
    "Fast_Moves": [
      "얼음뭉치",
      "속여때리기",
      "바크아웃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "눈사태",
      "기합구슬",
      "속임수",
      "트리플악셀"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 3,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 462,
    "Form": "일반",
    "Pokemon_Name": "자포코일",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "강철",
    "Max_CP": 3623,
    "ATK": 238.0,
    "DEF": 205.0,
    "HP": 172,
    "Fast_Moves": [
      "스파크",
      "차지빔",
      "볼트체인지",
      "금속음"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "전자포",
      "와일드볼트",
      "러스터캐논",
      "미러샷"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": "462-S",
    "Form": "그림자",
    "Pokemon_Name": "자포코일",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "강철",
    "Max_CP": 3623,
    "ATK": 237.99999999999997,
    "DEF": 205.00000000000003,
    "HP": 172,
    "Fast_Moves": [
      "스파크",
      "차지빔",
      "볼트체인지",
      "금속음"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "전자포",
      "와일드볼트",
      "러스터캐논",
      "미러샷"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 463,
    "Form": "일반",
    "Pokemon_Name": "내룸벨트",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 2789,
    "ATK": 161.0,
    "DEF": 181.0,
    "HP": 242,
    "Fast_Moves": [
      "핥기",
      "사념의박치기",
      "구르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파괴광선",
      "지진",
      "솔라빔",
      "섀도볼"
    ],
    "Elite_Charged_Moves": [
      "누르기"
    ],
    "Sprite_Col": 5,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 464,
    "Form": "일반",
    "Pokemon_Name": "거대코뿌리",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "바위",
    "Max_CP": 4221,
    "ATK": 241.0,
    "DEF": 190.0,
    "HP": 251,
    "Fast_Moves": [
      "진흙뿌리기",
      "떨어뜨리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파도타기",
      "지진",
      "스톤에지",
      "로케트박치기",
      "엄청난힘",
      "와이드브레이커"
    ],
    "Elite_Charged_Moves": [
      "암석포"
    ],
    "Sprite_Col": 6,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": "464-S",
    "Form": "그림자",
    "Pokemon_Name": "거대코뿌리",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "바위",
    "Max_CP": 4221,
    "ATK": 241.0,
    "DEF": 190.0,
    "HP": 251,
    "Fast_Moves": [
      "진흙뿌리기",
      "떨어뜨리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파도타기",
      "지진",
      "스톤에지",
      "로케트박치기",
      "엄청난힘",
      "와이드브레이커"
    ],
    "Elite_Charged_Moves": [
      "암석포"
    ],
    "Sprite_Col": 6,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 465,
    "Form": "일반",
    "Pokemon_Name": "덩쿠림보",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 3425,
    "ATK": 207.0,
    "DEF": 184.0,
    "HP": 225,
    "Fast_Moves": [
      "덩굴채찍",
      "엉겨붙기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "원시의힘",
      "오물폭탄",
      "솔라빔",
      "파워휩",
      "스톤샤워"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": "465-S",
    "Form": "그림자",
    "Pokemon_Name": "덩쿠림보",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 3425,
    "ATK": 207.0,
    "DEF": 184.0,
    "HP": 225,
    "Fast_Moves": [
      "덩굴채찍",
      "엉겨붙기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "원시의힘",
      "오물폭탄",
      "솔라빔",
      "파워휩",
      "스톤샤워"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 466,
    "Form": "일반",
    "Pokemon_Name": "에레키블",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 3481,
    "ATK": 249.0,
    "DEF": 163.0,
    "HP": 181,
    "Fast_Moves": [
      "전기쇼크",
      "안다리걸기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "번개펀치",
      "와일드볼트",
      "번개",
      "냉동펀치"
    ],
    "Elite_Charged_Moves": [
      "화염방사"
    ],
    "Sprite_Col": 8,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": "466-S",
    "Form": "그림자",
    "Pokemon_Name": "에레키블",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 3481,
    "ATK": 249.00000000000003,
    "DEF": 163.0,
    "HP": 181,
    "Fast_Moves": [
      "전기쇼크",
      "안다리걸기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "번개펀치",
      "와일드볼트",
      "번개",
      "냉동펀치"
    ],
    "Elite_Charged_Moves": [
      "화염방사"
    ],
    "Sprite_Col": 8,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 467,
    "Form": "일반",
    "Pokemon_Name": "마그마번",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 3541,
    "ATK": 247.0,
    "DEF": 172.0,
    "HP": 181,
    "Fast_Moves": [
      "회오리불꽃",
      "태권당수"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨트리기",
      "불꽃펀치",
      "불대문자",
      "사이코키네시스",
      "열사의대지"
    ],
    "Elite_Charged_Moves": [
      "10만볼트"
    ],
    "Sprite_Col": 9,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": "467-S",
    "Form": "그림자",
    "Pokemon_Name": "마그마번",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 3541,
    "ATK": 247.0,
    "DEF": 172.0,
    "HP": 181,
    "Fast_Moves": [
      "회오리불꽃",
      "태권당수"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨트리기",
      "불꽃펀치",
      "불대문자",
      "사이코키네시스",
      "열사의대지"
    ],
    "Elite_Charged_Moves": [
      "10만볼트"
    ],
    "Sprite_Col": 9,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 468,
    "Form": "일반",
    "Pokemon_Name": "토게키스",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "비행",
    "Max_CP": 3767,
    "ATK": 225.0,
    "DEF": 217.0,
    "HP": 198,
    "Fast_Moves": [
      "에어슬래시",
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)",
      "애교부리기",
      "쪼기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "원시의힘",
      "매지컬샤인",
      "제비반환",
      "화염방사",
      "사이코쇼크"
    ],
    "Elite_Charged_Moves": [
      "파동탄"
    ],
    "Sprite_Col": 10,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 469,
    "Form": "일반",
    "Pokemon_Name": "메가자리",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "비행",
    "Max_CP": 3330,
    "ATK": 231.0,
    "DEF": 156.0,
    "HP": 200,
    "Fast_Moves": [
      "벌레먹기",
      "날개치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "원시의힘",
      "제비반환",
      "벌레의야단법석"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 470,
    "Form": "일반",
    "Pokemon_Name": "리피아",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 3328,
    "ATK": 216.0,
    "DEF": 219.0,
    "HP": 163,
    "Fast_Moves": [
      "잎날가르기",
      "전광석화"
    ],
    "Elite_Fast_Moves": [
      "씨기관총"
    ],
    "Charged_Moves": [
      "솔라빔",
      "리프블레이드",
      "에너지볼"
    ],
    "Elite_Charged_Moves": [
      "비장의무기"
    ],
    "Sprite_Col": 12,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 471,
    "Form": "일반",
    "Pokemon_Name": "글레이시아",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "-",
    "Max_CP": 3535,
    "ATK": 238.0,
    "DEF": 205.0,
    "HP": 163,
    "Fast_Moves": [
      "얼음뭉치",
      "얼음숨결"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "눈사태",
      "얼어붙은바람",
      "냉동빔"
    ],
    "Elite_Charged_Moves": [
      "비장의무기",
      "물의파동"
    ],
    "Sprite_Col": 13,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 472,
    "Form": "일반",
    "Pokemon_Name": "글라이온",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "비행",
    "Max_CP": 3043,
    "ATK": 185.0,
    "DEF": 222.0,
    "HP": 181,
    "Fast_Moves": [
      "연속자르기",
      "날개치기",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지진",
      "제비반환",
      "깜짝베기",
      "모래지옥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 14,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": "472-S",
    "Form": "그림자",
    "Pokemon_Name": "글라이온",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "비행",
    "Max_CP": 3043,
    "ATK": 185.0,
    "DEF": 222.0,
    "HP": 181,
    "Fast_Moves": [
      "연속자르기",
      "날개치기",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지진",
      "제비반환",
      "깜짝베기",
      "모래지옥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 14,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 473,
    "Form": "일반",
    "Pokemon_Name": "맘모꾸리",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "땅",
    "Max_CP": 3763,
    "ATK": 247.0,
    "DEF": 146.0,
    "HP": 242,
    "Fast_Moves": [
      "진흙뿌리기",
      "눈싸라기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "눈사태",
      "땅고르기",
      "스톤에지",
      "10만마력",
      "고드름침"
    ],
    "Elite_Charged_Moves": [
      "원시의힘"
    ],
    "Sprite_Col": 15,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": "473-S",
    "Form": "그림자",
    "Pokemon_Name": "맘모꾸리",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "땅",
    "Max_CP": 3763,
    "ATK": 247.0,
    "DEF": 146.0,
    "HP": 242,
    "Fast_Moves": [
      "진흙뿌리기",
      "눈싸라기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "눈사태",
      "땅고르기",
      "스톤에지",
      "10만마력",
      "고드름침"
    ],
    "Elite_Charged_Moves": [
      "원시의힘"
    ],
    "Sprite_Col": 15,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 474,
    "Form": "일반",
    "Pokemon_Name": "폴리곤Z",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 3693,
    "ATK": 264.0,
    "DEF": 150.0,
    "HP": 198,
    "Fast_Moves": [
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)",
      "차지빔",
      "록온"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "솔라빔",
      "파괴광선",
      "전자포",
      "눈보라"
    ],
    "Elite_Charged_Moves": [
      "트라이어택"
    ],
    "Sprite_Col": 16,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": "474-S",
    "Form": "그림자",
    "Pokemon_Name": "폴리곤Z",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 3693,
    "ATK": 264.0,
    "DEF": 150.0,
    "HP": 198,
    "Fast_Moves": [
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)",
      "차지빔",
      "록온"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "솔라빔",
      "파괴광선",
      "전자포",
      "눈보라"
    ],
    "Elite_Charged_Moves": [
      "트라이어택"
    ],
    "Sprite_Col": 16,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 475,
    "Form": "일반",
    "Pokemon_Name": "엘레이드",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "격투",
    "Max_CP": 3497,
    "ATK": 237.0,
    "DEF": 195.0,
    "HP": 169,
    "Fast_Moves": [
      "염동력",
      "안다리걸기",
      "애교부리기",
      "사이코커터"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "인파이트",
      "사이코키네시스",
      "리프블레이드"
    ],
    "Elite_Charged_Moves": [
      "싱크로노이즈"
    ],
    "Sprite_Col": 17,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": "475-M1",
    "Form": "메가",
    "Pokemon_Name": "엘레이드",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "격투",
    "Max_CP": 5112,
    "ATK": 326.0,
    "DEF": 230.0,
    "HP": 169,
    "Fast_Moves": [
      "염동력",
      "안다리걸기",
      "애교부리기",
      "사이코커터"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "인파이트",
      "사이코키네시스",
      "리프블레이드"
    ],
    "Elite_Charged_Moves": [
      "싱크로노이즈"
    ],
    "Sprite_Col": 18,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": "475-S",
    "Form": "그림자",
    "Pokemon_Name": "엘레이드",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "격투",
    "Max_CP": 3497,
    "ATK": 237.0,
    "DEF": 195.0,
    "HP": 169,
    "Fast_Moves": [
      "염동력",
      "안다리걸기",
      "애교부리기",
      "사이코커터"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "인파이트",
      "사이코키네시스",
      "리프블레이드"
    ],
    "Elite_Charged_Moves": [
      "싱크로노이즈"
    ],
    "Sprite_Col": 17,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 476,
    "Form": "일반",
    "Pokemon_Name": "대코파스",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "강철",
    "Max_CP": 2351,
    "ATK": 135.0,
    "DEF": 275.0,
    "HP": 155,
    "Fast_Moves": [
      "돌떨구기",
      "스파크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "마그넷봄",
      "스톤샤워",
      "10만볼트",
      "전자포"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 19,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": "476-S",
    "Form": "그림자",
    "Pokemon_Name": "대코파스",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "강철",
    "Max_CP": 2351,
    "ATK": 135.0,
    "DEF": 275.0,
    "HP": 155,
    "Fast_Moves": [
      "돌떨구기",
      "스파크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "마그넷봄",
      "스톤샤워",
      "10만볼트",
      "전자포"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 19,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 477,
    "Form": "일반",
    "Pokemon_Name": "야느와르몽",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "-",
    "Max_CP": 2700,
    "ATK": 180.0,
    "DEF": 254.0,
    "HP": 128,
    "Fast_Moves": [
      "병상첨병",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "괴상한바람",
      "사이코키네시스",
      "악의파동",
      "폴터가이스트",
      "섀도펀치",
      "폭발펀치"
    ],
    "Elite_Charged_Moves": [
      "섀도볼"
    ],
    "Sprite_Col": 20,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": "477-S",
    "Form": "그림자",
    "Pokemon_Name": "야느와르몽",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "-",
    "Max_CP": 2700,
    "ATK": 180.0,
    "DEF": 254.0,
    "HP": 128,
    "Fast_Moves": [
      "병상첨병",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "괴상한바람",
      "사이코키네시스",
      "악의파동",
      "폴터가이스트",
      "섀도펀치",
      "폭발펀치"
    ],
    "Elite_Charged_Moves": [
      "섀도볼"
    ],
    "Sprite_Col": 20,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 478,
    "Form": "일반",
    "Pokemon_Name": "눈여아",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "고스트",
    "Max_CP": 2306,
    "ATK": 171.0,
    "DEF": 150.0,
    "HP": 172,
    "Fast_Moves": [
      "눈싸라기",
      "병상첨병"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "눈사태",
      "깨물어부수기",
      "섀도볼",
      "트리플악셀"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 21,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": "478-S",
    "Form": "그림자",
    "Pokemon_Name": "눈여아",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "고스트",
    "Max_CP": 2306,
    "ATK": 171.0,
    "DEF": 150.0,
    "HP": 172,
    "Fast_Moves": [
      "눈싸라기",
      "병상첨병"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "눈사태",
      "깨물어부수기",
      "섀도볼",
      "트리플악셀"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 21,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 479,
    "Form": "일반",
    "Pokemon_Name": "로토무",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "고스트",
    "Max_CP": 2296,
    "ATK": 185.0,
    "DEF": 159.0,
    "HP": 137,
    "Fast_Moves": [
      "놀래키기",
      "전기쇼크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "괴상한바람",
      "10만볼트",
      "번개"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 22,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 479,
    "Form": "일반",
    "Pokemon_Name": "히트로토무",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "불꽃",
    "Max_CP": 2916,
    "ATK": 204.0,
    "DEF": 219.0,
    "HP": 137,
    "Fast_Moves": [
      "놀래키기",
      "전기쇼크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오버히트",
      "10만볼트",
      "번개"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 25,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 479,
    "Form": "일반",
    "Pokemon_Name": "워시로토무",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "물",
    "Max_CP": 2916,
    "ATK": 204.0,
    "DEF": 219.0,
    "HP": 137,
    "Fast_Moves": [
      "놀래키기",
      "전기쇼크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "하이드로펌프",
      "10만볼트",
      "번개"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 27,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 479,
    "Form": "일반",
    "Pokemon_Name": "프로스트로토무",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "얼음",
    "Max_CP": 2916,
    "ATK": 204.0,
    "DEF": 219.0,
    "HP": 137,
    "Fast_Moves": [
      "놀래키기",
      "전기쇼크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "눈보라",
      "10만볼트",
      "번개"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 479,
    "Form": "일반",
    "Pokemon_Name": "스핀로토무",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "비행",
    "Max_CP": 2916,
    "ATK": 204.0,
    "DEF": 219.0,
    "HP": 137,
    "Fast_Moves": [
      "놀래키기",
      "에어슬래시"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "괴상한바람",
      "10만볼트",
      "번개"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 23,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 479,
    "Form": "일반",
    "Pokemon_Name": "커트로토무",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "풀",
    "Max_CP": 2916,
    "ATK": 204.0,
    "DEF": 219.0,
    "HP": 137,
    "Fast_Moves": [
      "놀래키기",
      "전기쇼크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "괴상한바람",
      "10만볼트",
      "번개"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 26,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 480,
    "Form": "일반",
    "Pokemon_Name": "유크시",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 2853,
    "ATK": 156.0,
    "DEF": 270.0,
    "HP": 181,
    "Fast_Moves": [
      "염동력",
      "신통력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미래예지",
      "스피드스타",
      "번개"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 28,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 481,
    "Form": "일반",
    "Pokemon_Name": "엠라이트",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 3457,
    "ATK": 212.0,
    "DEF": 212.0,
    "HP": 190,
    "Fast_Moves": [
      "염동력",
      "신통력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미래예지",
      "스피드스타",
      "눈보라"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 29,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 482,
    "Form": "일반",
    "Pokemon_Name": "아그놈",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 3629,
    "ATK": 270.0,
    "DEF": 151.0,
    "HP": 181,
    "Fast_Moves": [
      "염동력",
      "신통력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미래예지",
      "스피드스타",
      "불대문자"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 483,
    "Form": "일반",
    "Pokemon_Name": "디아루가",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 4565,
    "ATK": 275.0,
    "DEF": 211.0,
    "HP": 205,
    "Fast_Moves": [
      "용의숨결",
      "메탈클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "용성군",
      "아이언헤드",
      "번개"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 483,
    "Form": "일반",
    "Pokemon_Name": "디아루가(오리진폼)",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 4624,
    "ATK": 270.0,
    "DEF": 225.0,
    "HP": 205,
    "Fast_Moves": [
      "용의숨결",
      "메탈클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "용성군",
      "아이언헤드",
      "번개"
    ],
    "Elite_Charged_Moves": [
      "시간의포효"
    ],
    "Sprite_Col": 32,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": "483-S",
    "Form": "그림자",
    "Pokemon_Name": "디아루가",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 4565,
    "ATK": 275.0,
    "DEF": 211.0,
    "HP": 205,
    "Fast_Moves": [
      "용의숨결",
      "메탈클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "용성군",
      "아이언헤드",
      "번개"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 484,
    "Form": "일반",
    "Pokemon_Name": "펄기아",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 4512,
    "ATK": 280.0,
    "DEF": 215.0,
    "HP": 189,
    "Fast_Moves": [
      "용의숨결",
      "드래곤테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "용성군",
      "불대문자",
      "하이드로펌프",
      "아쿠아테일"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 33,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 484,
    "Form": "일반",
    "Pokemon_Name": "펄기아(오리진폼)",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 4683,
    "ATK": 286.0,
    "DEF": 223.0,
    "HP": 189,
    "Fast_Moves": [
      "용의숨결",
      "드래곤테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "용성군",
      "불대문자",
      "하이드로펌프",
      "아쿠아테일"
    ],
    "Elite_Charged_Moves": [
      "공간절단"
    ],
    "Sprite_Col": 34,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": "484-S",
    "Form": "그림자",
    "Pokemon_Name": "펄기아",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 4512,
    "ATK": 280.0,
    "DEF": 215.0,
    "HP": 189,
    "Fast_Moves": [
      "용의숨결",
      "드래곤테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "용성군",
      "불대문자",
      "하이드로펌프",
      "아쿠아테일"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 33,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 485,
    "Form": "일반",
    "Pokemon_Name": "히드런",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "강철",
    "Max_CP": 4244,
    "ATK": 251.0,
    "DEF": 213.0,
    "HP": 209,
    "Fast_Moves": [
      "회오리불꽃",
      "벌레먹기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "불대문자",
      "아이언헤드",
      "스톤에지",
      "화염방사",
      "대지의힘"
    ],
    "Elite_Charged_Moves": [
      "마그마스톰"
    ],
    "Sprite_Col": 35,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": "485-S",
    "Form": "그림자",
    "Pokemon_Name": "히드런",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "강철",
    "Max_CP": 4244,
    "ATK": 251.0,
    "DEF": 213.0,
    "HP": 209,
    "Fast_Moves": [
      "회오리불꽃",
      "벌레먹기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "불대문자",
      "아이언헤드",
      "스톤에지",
      "화염방사",
      "대지의힘"
    ],
    "Elite_Charged_Moves": [
      "마그마스톰"
    ],
    "Sprite_Col": 35,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 486,
    "Form": "일반",
    "Pokemon_Name": "레지기가스",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 4913,
    "ATK": 287.0,
    "DEF": 210.0,
    "HP": 221,
    "Fast_Moves": [
      "사념의박치기",
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "기가임팩트",
      "기합구슬",
      "번개"
    ],
    "Elite_Charged_Moves": [
      "묵사발"
    ],
    "Sprite_Col": 36,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": "486-S",
    "Form": "그림자",
    "Pokemon_Name": "레지기가스",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 4913,
    "ATK": 287.0,
    "DEF": 210.0,
    "HP": 221,
    "Fast_Moves": [
      "사념의박치기",
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "기가임팩트",
      "기합구슬",
      "번개"
    ],
    "Elite_Charged_Moves": [
      "묵사발"
    ],
    "Sprite_Col": 36,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 487,
    "Form": "일반",
    "Pokemon_Name": "기라티나",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 3820,
    "ATK": 187.0,
    "DEF": 225.0,
    "HP": 284,
    "Fast_Moves": [
      "용의숨결",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "드래곤클로",
      "원시의힘",
      "야습"
    ],
    "Elite_Charged_Moves": [
      "섀도다이브"
    ],
    "Sprite_Col": 37,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 487,
    "Form": "일반",
    "Pokemon_Name": "기라티나(오리진폼)",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 4164,
    "ATK": 225.0,
    "DEF": 187.0,
    "HP": 284,
    "Fast_Moves": [
      "드래곤테일",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "용의파동",
      "괴상한바람",
      "섀도볼"
    ],
    "Elite_Charged_Moves": [
      "섀도다이브"
    ],
    "Sprite_Col": 38,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": "487-S",
    "Form": "그림자",
    "Pokemon_Name": "기라티나",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 3820,
    "ATK": 187.0,
    "DEF": 225.0,
    "HP": 284,
    "Fast_Moves": [
      "용의숨결",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "드래곤클로",
      "원시의힘",
      "야습"
    ],
    "Elite_Charged_Moves": [
      "섀도다이브"
    ],
    "Sprite_Col": 37,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 488,
    "Form": "일반",
    "Pokemon_Name": "크레세리아",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 3230,
    "ATK": 152.0,
    "DEF": 258.0,
    "HP": 260,
    "Fast_Moves": [
      "사이코커터",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오로라빔",
      "문포스",
      "미래예지"
    ],
    "Elite_Charged_Moves": [
      "풀묶기"
    ],
    "Sprite_Col": 39,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": "488-S",
    "Form": "그림자",
    "Pokemon_Name": "크레세리아",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 3230,
    "ATK": 152.0,
    "DEF": 258.0,
    "HP": 260,
    "Fast_Moves": [
      "사이코커터",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오로라빔",
      "문포스",
      "미래예지"
    ],
    "Elite_Charged_Moves": [
      "풀묶기"
    ],
    "Sprite_Col": 39,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 489,
    "Form": "일반",
    "Pokemon_Name": "피오네",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 2380,
    "ATK": 162.0,
    "DEF": 162.0,
    "HP": 190,
    "Fast_Moves": [
      "폭포오르기",
      "거품"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "거품광선",
      "물의파동",
      "파도타기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 40,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 490,
    "Form": "일반",
    "Pokemon_Name": "마나피",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 3691,
    "ATK": 210.0,
    "DEF": 210.0,
    "HP": 225,
    "Fast_Moves": [
      "폭포오르기",
      "거품"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "거품광선",
      "사이코키네시스",
      "파도타기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 41,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 491,
    "Form": "일반",
    "Pokemon_Name": "다크라이",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "-",
    "Max_CP": 4227,
    "ATK": 285.0,
    "DEF": 198.0,
    "HP": 172,
    "Fast_Moves": [
      "바크아웃",
      "속여때리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "기합구슬",
      "섀도볼",
      "악의파동"
    ],
    "Elite_Charged_Moves": [
      "오물폭탄"
    ],
    "Sprite_Col": 42,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": "491-S",
    "Form": "그림자",
    "Pokemon_Name": "다크라이",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "-",
    "Max_CP": 4227,
    "ATK": 285.0,
    "DEF": 198.0,
    "HP": 172,
    "Fast_Moves": [
      "바크아웃",
      "속여때리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "기합구슬",
      "섀도볼",
      "악의파동"
    ],
    "Elite_Charged_Moves": [
      "오물폭탄"
    ],
    "Sprite_Col": 42,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 492,
    "Form": "일반",
    "Pokemon_Name": "쉐이미(랜드폼)",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 3691,
    "ATK": 210.0,
    "DEF": 210.0,
    "HP": 225,
    "Fast_Moves": [
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "풀묶기",
      "솔라빔",
      "시드플레어"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 43,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 492,
    "Form": "일반",
    "Pokemon_Name": "쉐이미(스카이폼)",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "비행",
    "Max_CP": 4061,
    "ATK": 261.0,
    "DEF": 166.0,
    "HP": 225,
    "Fast_Moves": [
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)",
      "사념의박치기",
      "메지컬리프"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "풀묶기",
      "솔라빔",
      "시드플레어"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 44,
    "Sprite_Row": 15
  },
  {
    "Pokemon_ID": 493,
    "Form": "일반",
    "Pokemon_Name": "아르세우스(노말)",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 4510,
    "ATK": 238.0,
    "DEF": 238.0,
    "HP": 237,
    "Fast_Moves": [
      "아이언테일",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미래예지",
      "파괴광선",
      "역린"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 493,
    "Form": "일반",
    "Pokemon_Name": "아르세우스(벌레)",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 4510,
    "ATK": 238.0,
    "DEF": 238.0,
    "HP": 237,
    "Fast_Moves": [
      "아이언테일",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미래예지",
      "파괴광선",
      "역린"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 493,
    "Form": "일반",
    "Pokemon_Name": "아르세우스(악)",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "-",
    "Max_CP": 4510,
    "ATK": 238.0,
    "DEF": 238.0,
    "HP": 237,
    "Fast_Moves": [
      "아이언테일",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미래예지",
      "파괴광선",
      "역린"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 493,
    "Form": "일반",
    "Pokemon_Name": "아르세우스(드래곤)",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "-",
    "Max_CP": 4510,
    "ATK": 238.0,
    "DEF": 238.0,
    "HP": 237,
    "Fast_Moves": [
      "아이언테일",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미래예지",
      "파괴광선",
      "역린"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 493,
    "Form": "일반",
    "Pokemon_Name": "아르세우스(전기)",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 4510,
    "ATK": 238.0,
    "DEF": 238.0,
    "HP": 237,
    "Fast_Moves": [
      "아이언테일",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미래예지",
      "파괴광선",
      "역린"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 493,
    "Form": "일반",
    "Pokemon_Name": "아르세우스(페어리)",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "-",
    "Max_CP": 4510,
    "ATK": 238.0,
    "DEF": 238.0,
    "HP": 237,
    "Fast_Moves": [
      "아이언테일",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미래예지",
      "파괴광선",
      "역린"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 493,
    "Form": "일반",
    "Pokemon_Name": "아르세우스(격투)",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 4510,
    "ATK": 238.0,
    "DEF": 238.0,
    "HP": 237,
    "Fast_Moves": [
      "아이언테일",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미래예지",
      "파괴광선",
      "역린"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 493,
    "Form": "일반",
    "Pokemon_Name": "아르세우스(불꽃)",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 4510,
    "ATK": 238.0,
    "DEF": 238.0,
    "HP": 237,
    "Fast_Moves": [
      "아이언테일",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미래예지",
      "파괴광선",
      "역린"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 493,
    "Form": "일반",
    "Pokemon_Name": "아르세우스(비행)",
    "Pokemon_Type1": "비행",
    "Pokemon_Type2": "-",
    "Max_CP": 4510,
    "ATK": 238.0,
    "DEF": 238.0,
    "HP": 237,
    "Fast_Moves": [
      "아이언테일",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미래예지",
      "파괴광선",
      "역린"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 493,
    "Form": "일반",
    "Pokemon_Name": "아르세우스(고스트)",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "-",
    "Max_CP": 4510,
    "ATK": 238.0,
    "DEF": 238.0,
    "HP": 237,
    "Fast_Moves": [
      "아이언테일",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미래예지",
      "파괴광선",
      "역린"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 493,
    "Form": "일반",
    "Pokemon_Name": "아르세우스(풀)",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 4510,
    "ATK": 238.0,
    "DEF": 238.0,
    "HP": 237,
    "Fast_Moves": [
      "아이언테일",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미래예지",
      "파괴광선",
      "역린"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 493,
    "Form": "일반",
    "Pokemon_Name": "아르세우스(땅)",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "-",
    "Max_CP": 4510,
    "ATK": 238.0,
    "DEF": 238.0,
    "HP": 237,
    "Fast_Moves": [
      "아이언테일",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미래예지",
      "파괴광선",
      "역린"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 493,
    "Form": "일반",
    "Pokemon_Name": "아르세우스(얼음)",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "-",
    "Max_CP": 4510,
    "ATK": 238.0,
    "DEF": 238.0,
    "HP": 237,
    "Fast_Moves": [
      "아이언테일",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미래예지",
      "파괴광선",
      "역린"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 493,
    "Form": "일반",
    "Pokemon_Name": "아르세우스(독)",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "-",
    "Max_CP": 4510,
    "ATK": 238.0,
    "DEF": 238.0,
    "HP": 237,
    "Fast_Moves": [
      "아이언테일",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미래예지",
      "파괴광선",
      "역린"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 493,
    "Form": "일반",
    "Pokemon_Name": "아르세우스(에스퍼)",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 4510,
    "ATK": 238.0,
    "DEF": 238.0,
    "HP": 237,
    "Fast_Moves": [
      "아이언테일",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미래예지",
      "파괴광선",
      "역린"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 493,
    "Form": "일반",
    "Pokemon_Name": "아르세우스(바위)",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "-",
    "Max_CP": 4510,
    "ATK": 238.0,
    "DEF": 238.0,
    "HP": 237,
    "Fast_Moves": [
      "아이언테일",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미래예지",
      "파괴광선",
      "역린"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 493,
    "Form": "일반",
    "Pokemon_Name": "아르세우스(강철)",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "-",
    "Max_CP": 4510,
    "ATK": 238.0,
    "DEF": 238.0,
    "HP": 237,
    "Fast_Moves": [
      "아이언테일",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미래예지",
      "파괴광선",
      "역린"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 493,
    "Form": "일반",
    "Pokemon_Name": "아르세우스(물)",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 4510,
    "ATK": 238.0,
    "DEF": 238.0,
    "HP": 237,
    "Fast_Moves": [
      "아이언테일",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미래예지",
      "파괴광선",
      "역린"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 494,
    "Form": "일반",
    "Pokemon_Name": "비크티니",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "불꽃",
    "Max_CP": 3691,
    "ATK": 210.0,
    "DEF": 210.0,
    "HP": 225,
    "Fast_Moves": [
      "염동력",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오버히트",
      "기합구슬",
      "사이코키네시스",
      "V Create",
      "사이코쇼크"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 2,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 495,
    "Form": "일반",
    "Pokemon_Name": "주리비얀",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 960,
    "ATK": 88.0,
    "DEF": 107.0,
    "HP": 128,
    "Fast_Moves": [
      "몸통박치기",
      "덩굴채찍"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "씨폭탄",
      "김밥말이"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 3,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": "495-S",
    "Form": "그림자",
    "Pokemon_Name": "주리비얀",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 960,
    "ATK": 88.0,
    "DEF": 107.00000000000001,
    "HP": 128,
    "Fast_Moves": [
      "몸통박치기",
      "덩굴채찍"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "씨폭탄",
      "김밥말이"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 3,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 496,
    "Form": "일반",
    "Pokemon_Name": "샤비",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 1629,
    "ATK": 122.0,
    "DEF": 152.0,
    "HP": 155,
    "Fast_Moves": [
      "아이언테일",
      "덩굴채찍"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "풀묶기",
      "그래스믹서",
      "김밥말이"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": "496-S",
    "Form": "그림자",
    "Pokemon_Name": "샤비",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 1629,
    "ATK": 122.00000000000001,
    "DEF": 152.0,
    "HP": 155,
    "Fast_Moves": [
      "아이언테일",
      "덩굴채찍"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "풀묶기",
      "그래스믹서",
      "김밥말이"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 497,
    "Form": "일반",
    "Pokemon_Name": "샤로다",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 2574,
    "ATK": 161.0,
    "DEF": 204.0,
    "HP": 181,
    "Fast_Moves": [
      "아이언테일",
      "덩굴채찍"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "풀묶기",
      "그래스믹서",
      "제비반환"
    ],
    "Elite_Charged_Moves": [
      "하드플랜트"
    ],
    "Sprite_Col": 5,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": "497-S",
    "Form": "그림자",
    "Pokemon_Name": "샤로다",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 2574,
    "ATK": 161.0,
    "DEF": 204.0,
    "HP": 181,
    "Fast_Moves": [
      "아이언테일",
      "덩굴채찍"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "풀묶기",
      "그래스믹서",
      "제비반환"
    ],
    "Elite_Charged_Moves": [
      "하드플랜트"
    ],
    "Sprite_Col": 5,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 498,
    "Form": "일반",
    "Pokemon_Name": "뚜꾸리",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 1224,
    "ATK": 115.0,
    "DEF": 85.0,
    "HP": 163,
    "Fast_Moves": [
      "몸통박치기",
      "불꽃세례"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "니트로차지",
      "화염방사",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 6,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": "498-S",
    "Form": "그림자",
    "Pokemon_Name": "뚜꾸리",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 1224,
    "ATK": 115.0,
    "DEF": 85.0,
    "HP": 163,
    "Fast_Moves": [
      "몸통박치기",
      "불꽃세례"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "니트로차지",
      "화염방사",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 6,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 499,
    "Form": "일반",
    "Pokemon_Name": "차오꿀",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "격투",
    "Max_CP": 2175,
    "ATK": 173.0,
    "DEF": 106.0,
    "HP": 207,
    "Fast_Moves": [
      "몸통박치기",
      "불꽃세례"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "니트로차지",
      "화염방사",
      "암석봉인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": "499-S",
    "Form": "그림자",
    "Pokemon_Name": "차오꿀",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "격투",
    "Max_CP": 2175,
    "ATK": 173.0,
    "DEF": 105.99999999999999,
    "HP": 207,
    "Fast_Moves": [
      "몸통박치기",
      "불꽃세례"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "니트로차지",
      "화염방사",
      "암석봉인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 500,
    "Form": "일반",
    "Pokemon_Name": "염무왕",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "격투",
    "Max_CP": 3372,
    "ATK": 235.0,
    "DEF": 127.0,
    "HP": 242,
    "Fast_Moves": [
      "안다리걸기",
      "불꽃세례"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "열풍",
      "스톤샤워",
      "기합구슬",
      "니트로차지"
    ],
    "Elite_Charged_Moves": [
      "블라스트번"
    ],
    "Sprite_Col": 8,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": "500-S",
    "Form": "그림자",
    "Pokemon_Name": "염무왕",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "격투",
    "Max_CP": 3372,
    "ATK": 235.0,
    "DEF": 127.0,
    "HP": 242,
    "Fast_Moves": [
      "안다리걸기",
      "불꽃세례"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "열풍",
      "스톤샤워",
      "기합구슬",
      "니트로차지"
    ],
    "Elite_Charged_Moves": [
      "블라스트번"
    ],
    "Sprite_Col": 8,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 501,
    "Form": "일반",
    "Pokemon_Name": "수댕이",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1182,
    "ATK": 117.0,
    "DEF": 85.0,
    "HP": 146,
    "Fast_Moves": [
      "몸통박치기",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아테일",
      "물의파동",
      "깜짝베기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 9,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": "501-S",
    "Form": "그림자",
    "Pokemon_Name": "수댕이",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1182,
    "ATK": 117.00000000000001,
    "DEF": 85.0,
    "HP": 146,
    "Fast_Moves": [
      "몸통박치기",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아테일",
      "물의파동",
      "깜짝베기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 9,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 502,
    "Form": "일반",
    "Pokemon_Name": "쌍검자비",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1968,
    "ATK": 159.0,
    "DEF": 116.0,
    "HP": 181,
    "Fast_Moves": [
      "연속자르기",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아테일",
      "물의파동",
      "시저크로스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 10,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": "502-S",
    "Form": "그림자",
    "Pokemon_Name": "쌍검자비",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1968,
    "ATK": 159.0,
    "DEF": 116.0,
    "HP": 181,
    "Fast_Moves": [
      "연속자르기",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아테일",
      "물의파동",
      "시저크로스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 10,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 503,
    "Form": "일반",
    "Pokemon_Name": "대검귀",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 3194,
    "ATK": 212.0,
    "DEF": 157.0,
    "HP": 216,
    "Fast_Moves": [
      "연속자르기",
      "폭포오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "하이드로펌프",
      "눈보라",
      "메가혼",
      "셸블레이드",
      "아쿠아브레이크"
    ],
    "Elite_Charged_Moves": [
      "하이드로캐논"
    ],
    "Sprite_Col": 11,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": "503-4",
    "Form": "일반",
    "Pokemon_Name": "히스이대검귀",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "악",
    "Max_CP": 3167,
    "ATK": 218.0,
    "DEF": 152.0,
    "HP": 207,
    "Fast_Moves": [
      "폭포오르기",
      "연속자르기",
      "바크아웃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "셸블레이드",
      "얼어붙은바람",
      "시저크로스",
      "악의파동"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 12,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": "503-S",
    "Form": "그림자",
    "Pokemon_Name": "대검귀",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 3194,
    "ATK": 212.0,
    "DEF": 157.0,
    "HP": 216,
    "Fast_Moves": [
      "연속자르기",
      "폭포오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "하이드로펌프",
      "눈보라",
      "메가혼",
      "셸블레이드",
      "아쿠아브레이크"
    ],
    "Elite_Charged_Moves": [
      "하이드로캐논"
    ],
    "Sprite_Col": 11,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 504,
    "Form": "일반",
    "Pokemon_Name": "보르쥐",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 895,
    "ATK": 98.0,
    "DEF": 73.0,
    "HP": 128,
    "Fast_Moves": [
      "몸통박치기",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "필살앞니",
      "풀묶기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": "504-S",
    "Form": "그림자",
    "Pokemon_Name": "보르쥐",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 895,
    "ATK": 98.0,
    "DEF": 73.0,
    "HP": 128,
    "Fast_Moves": [
      "몸통박치기",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "필살앞니",
      "풀묶기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 505,
    "Form": "일반",
    "Pokemon_Name": "보르그",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 2056,
    "ATK": 165.0,
    "DEF": 139.0,
    "HP": 155,
    "Fast_Moves": [
      "안다리걸기",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "필살앞니",
      "풀묶기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 14,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": "505-S",
    "Form": "그림자",
    "Pokemon_Name": "보르그",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 2056,
    "ATK": 165.0,
    "DEF": 139.0,
    "HP": 155,
    "Fast_Moves": [
      "안다리걸기",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "필살앞니",
      "풀묶기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 14,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 506,
    "Form": "일반",
    "Pokemon_Name": "요테리",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 1035,
    "ATK": 107.0,
    "DEF": 86.0,
    "HP": 128,
    "Fast_Moves": [
      "몸통박치기",
      "돌진",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "10만볼트",
      "암석봉인",
      "구멍파기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 15,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 507,
    "Form": "일반",
    "Pokemon_Name": "하데리어",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 1789,
    "ATK": 145.0,
    "DEF": 126.0,
    "HP": 163,
    "Fast_Moves": [
      "핥기",
      "돌진",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "10만볼트",
      "치근거리기",
      "구멍파기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 16,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 508,
    "Form": "일반",
    "Pokemon_Name": "바랜드",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 3196,
    "ATK": 206.0,
    "DEF": 182.0,
    "HP": 198,
    "Fast_Moves": [
      "핥기",
      "돌진",
      "얼음엄니",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "와일드볼트",
      "치근거리기",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 17,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 509,
    "Form": "일반",
    "Pokemon_Name": "쌔비냥",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "-",
    "Max_CP": 872,
    "ATK": 98.0,
    "DEF": 73.0,
    "HP": 121,
    "Fast_Moves": [
      "할퀴기",
      "기습"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깜짝베기",
      "치근거리기",
      "악의파동"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 18,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": "509-S",
    "Form": "그림자",
    "Pokemon_Name": "쌔비냥",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "-",
    "Max_CP": 872,
    "ATK": 98.0,
    "DEF": 73.0,
    "HP": 121,
    "Fast_Moves": [
      "할퀴기",
      "기습"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깜짝베기",
      "치근거리기",
      "악의파동"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 18,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 510,
    "Form": "일반",
    "Pokemon_Name": "레파르다스",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "-",
    "Max_CP": 2087,
    "ATK": 187.0,
    "DEF": 106.0,
    "HP": 162,
    "Fast_Moves": [
      "애교부리기",
      "바크아웃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "더스트슈트",
      "치근거리기",
      "악의파동",
      "보복"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 19,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": "510-S",
    "Form": "그림자",
    "Pokemon_Name": "레파르다스",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "-",
    "Max_CP": 2087,
    "ATK": 187.0,
    "DEF": 105.99999999999999,
    "HP": 162,
    "Fast_Moves": [
      "애교부리기",
      "바크아웃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "더스트슈트",
      "치근거리기",
      "악의파동",
      "보복"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 19,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 511,
    "Form": "일반",
    "Pokemon_Name": "야나프",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 1081,
    "ATK": 104.0,
    "DEF": 94.0,
    "HP": 137,
    "Fast_Moves": [
      "할퀴기",
      "덩굴채찍"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "씨폭탄",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 20,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 512,
    "Form": "일반",
    "Pokemon_Name": "야나키",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 2657,
    "ATK": 206.0,
    "DEF": 133.0,
    "HP": 181,
    "Fast_Moves": [
      "물기",
      "덩굴채찍"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "솔라빔",
      "풀묶기",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 21,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 513,
    "Form": "일반",
    "Pokemon_Name": "바오프",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 1081,
    "ATK": 104.0,
    "DEF": 94.0,
    "HP": 137,
    "Fast_Moves": [
      "할퀴기",
      "회오리불꽃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "불꽃튀기기",
      "니트로차지",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 22,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 514,
    "Form": "일반",
    "Pokemon_Name": "바오키",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 2657,
    "ATK": 206.0,
    "DEF": 133.0,
    "HP": 181,
    "Fast_Moves": [
      "물기",
      "회오리불꽃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "화염방사",
      "불대문자",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 23,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 515,
    "Form": "일반",
    "Pokemon_Name": "앗차프",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1081,
    "ATK": 104.0,
    "DEF": 94.0,
    "HP": 137,
    "Fast_Moves": [
      "할퀴기",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파도타기",
      "물의파동",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 516,
    "Form": "일반",
    "Pokemon_Name": "앗차키",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 2657,
    "ATK": 206.0,
    "DEF": 133.0,
    "HP": 181,
    "Fast_Moves": [
      "물기",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파도타기",
      "하이드로펌프",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 25,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 517,
    "Form": "일반",
    "Pokemon_Name": "몽나",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 1294,
    "ATK": 111.0,
    "DEF": 92.0,
    "HP": 183,
    "Fast_Moves": [
      "사념의박치기",
      "차지빔"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "환상빔",
      "매지컬샤인",
      "사이코쇼크"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 26,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 518,
    "Form": "일반",
    "Pokemon_Name": "몽얌나",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 3079,
    "ATK": 183.0,
    "DEF": 166.0,
    "HP": 253,
    "Fast_Moves": [
      "사념의박치기",
      "차지빔"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미래예지",
      "매지컬샤인",
      "사이코쇼크"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 27,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 519,
    "Form": "일반",
    "Pokemon_Name": "콩둘기",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 958,
    "ATK": 98.0,
    "DEF": 80.0,
    "HP": 137,
    "Fast_Moves": [
      "전광석화",
      "에어슬래시"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "열풍",
      "제비반환",
      "에어커터"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 28,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": "519-S",
    "Form": "그림자",
    "Pokemon_Name": "콩둘기",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 958,
    "ATK": 98.0,
    "DEF": 80.0,
    "HP": 137,
    "Fast_Moves": [
      "전광석화",
      "에어슬래시"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "열풍",
      "제비반환",
      "에어커터"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 28,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 520,
    "Form": "일반",
    "Pokemon_Name": "유토브",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 1631,
    "ATK": 144.0,
    "DEF": 107.0,
    "HP": 158,
    "Fast_Moves": [
      "에어슬래시",
      "강철날개"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "열풍",
      "제비반환",
      "불새"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 29,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": "520-S",
    "Form": "그림자",
    "Pokemon_Name": "유토브",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 1631,
    "ATK": 144.0,
    "DEF": 107.00000000000001,
    "HP": 158,
    "Fast_Moves": [
      "에어슬래시",
      "강철날개"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "열풍",
      "제비반환",
      "불새"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 29,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 521,
    "Form": "일반",
    "Pokemon_Name": "켄호로우",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 3091,
    "ATK": 226.0,
    "DEF": 146.0,
    "HP": 190,
    "Fast_Moves": [
      "에어슬래시",
      "강철날개"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "열풍",
      "파괴광선",
      "불새"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": "521-S",
    "Form": "그림자",
    "Pokemon_Name": "켄호로우",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 3091,
    "ATK": 226.0,
    "DEF": 146.0,
    "HP": 190,
    "Fast_Moves": [
      "에어슬래시",
      "강철날개"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "열풍",
      "파괴광선",
      "불새"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 522,
    "Form": "일반",
    "Pokemon_Name": "줄뮤마",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 998,
    "ATK": 118.0,
    "DEF": 64.0,
    "HP": 128,
    "Fast_Moves": [
      "전광석화",
      "스파크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "니트로차지",
      "방전",
      "10만볼트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": "522-S",
    "Form": "그림자",
    "Pokemon_Name": "줄뮤마",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 998,
    "ATK": 118.0,
    "DEF": 64.0,
    "HP": 128,
    "Fast_Moves": [
      "전광석화",
      "스파크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "니트로차지",
      "방전",
      "10만볼트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 523,
    "Form": "일반",
    "Pokemon_Name": "제브라이카",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 2745,
    "ATK": 211.0,
    "DEF": 136.0,
    "HP": 181,
    "Fast_Moves": [
      "안다리걸기",
      "스파크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "니트로차지",
      "방전",
      "와일드볼트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 33,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": "523-S",
    "Form": "그림자",
    "Pokemon_Name": "제브라이카",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 2745,
    "ATK": 211.0,
    "DEF": 136.0,
    "HP": 181,
    "Fast_Moves": [
      "안다리걸기",
      "스파크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "니트로차지",
      "방전",
      "와일드볼트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 33,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 524,
    "Form": "일반",
    "Pokemon_Name": "단굴",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "-",
    "Max_CP": 1362,
    "ATK": 121.0,
    "DEF": 110.0,
    "HP": 146,
    "Fast_Moves": [
      "몸통박치기",
      "떨어뜨리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "땅고르기",
      "록블라스트",
      "스톤에지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 34,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": "524-S",
    "Form": "그림자",
    "Pokemon_Name": "단굴",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "-",
    "Max_CP": 1362,
    "ATK": 121.0,
    "DEF": 110.0,
    "HP": 146,
    "Fast_Moves": [
      "몸통박치기",
      "떨어뜨리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "땅고르기",
      "록블라스트",
      "스톤에지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 34,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 525,
    "Form": "일반",
    "Pokemon_Name": "암트르",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "-",
    "Max_CP": 2293,
    "ATK": 174.0,
    "DEF": 143.0,
    "HP": 172,
    "Fast_Moves": [
      "진흙뿌리기",
      "떨어뜨리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤샤워",
      "땅고르기",
      "스톤에지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 35,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": "525-S",
    "Form": "그림자",
    "Pokemon_Name": "암트르",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "-",
    "Max_CP": 2293,
    "ATK": 174.0,
    "DEF": 143.0,
    "HP": 172,
    "Fast_Moves": [
      "진흙뿌리기",
      "떨어뜨리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤샤워",
      "땅고르기",
      "스톤에지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 35,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 526,
    "Form": "일반",
    "Pokemon_Name": "기가이어스",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "-",
    "Max_CP": 3650,
    "ATK": 226.0,
    "DEF": 201.0,
    "HP": 198,
    "Fast_Moves": [
      "진흙뿌리기",
      "떨어뜨리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤샤워",
      "솔라빔",
      "엄청난힘",
      "헤비봄버"
    ],
    "Elite_Charged_Moves": [
      "메테오빔"
    ],
    "Sprite_Col": 36,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": "526-S",
    "Form": "그림자",
    "Pokemon_Name": "기가이어스",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "-",
    "Max_CP": 3650,
    "ATK": 226.0,
    "DEF": 201.0,
    "HP": 198,
    "Fast_Moves": [
      "진흙뿌리기",
      "떨어뜨리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤샤워",
      "솔라빔",
      "엄청난힘",
      "헤비봄버"
    ],
    "Elite_Charged_Moves": [
      "메테오빔"
    ],
    "Sprite_Col": 36,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 527,
    "Form": "일반",
    "Pokemon_Name": "또르박쥐",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "비행",
    "Max_CP": 1149,
    "ATK": 107.0,
    "DEF": 85.0,
    "HP": 163,
    "Fast_Moves": [
      "염동력",
      "에어슬래시"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에어커터",
      "제비반환",
      "사이코쇼크"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 528,
    "Form": "일반",
    "Pokemon_Name": "맘박쥐",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "비행",
    "Max_CP": 1940,
    "ATK": 161.0,
    "DEF": 119.0,
    "HP": 167,
    "Fast_Moves": [
      "염동력",
      "에어슬래시"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "제비반환",
      "미래예지",
      "사이코팽",
      "공중날기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 38,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 529,
    "Form": "일반",
    "Pokemon_Name": "두더류",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "-",
    "Max_CP": 1555,
    "ATK": 154.0,
    "DEF": 85.0,
    "HP": 155,
    "Fast_Moves": [
      "할퀴기",
      "진흙뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "암석봉인",
      "구멍파기",
      "드릴라이너"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 39,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": "529-S",
    "Form": "그림자",
    "Pokemon_Name": "두더류",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "-",
    "Max_CP": 1555,
    "ATK": 154.0,
    "DEF": 85.0,
    "HP": 155,
    "Fast_Moves": [
      "할퀴기",
      "진흙뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "암석봉인",
      "구멍파기",
      "드릴라이너"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 39,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 530,
    "Form": "일반",
    "Pokemon_Name": "몰드류",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "강철",
    "Max_CP": 3667,
    "ATK": 255.0,
    "DEF": 129.0,
    "HP": 242,
    "Fast_Moves": [
      "메탈클로",
      "진흙뿌리기",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤샤워",
      "지진",
      "드릴라이너",
      "아이언헤드",
      "열사의대지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 40,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": "530-S",
    "Form": "그림자",
    "Pokemon_Name": "몰드류",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "강철",
    "Max_CP": 3667,
    "ATK": 255.0,
    "DEF": 129.0,
    "HP": 242,
    "Fast_Moves": [
      "메탈클로",
      "진흙뿌리기",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤샤워",
      "지진",
      "드릴라이너",
      "아이언헤드",
      "열사의대지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 40,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 531,
    "Form": "일반",
    "Pokemon_Name": "다부니",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 1902,
    "ATK": 114.0,
    "DEF": 163.0,
    "HP": 230,
    "Fast_Moves": [
      "막치기",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "차밍보이스",
      "매지컬샤인",
      "파괴광선",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 41,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": "531-M1",
    "Form": "메가",
    "Pokemon_Name": "다부니",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "페어리",
    "Max_CP": 2853,
    "ATK": 147.0,
    "DEF": 239.0,
    "HP": 230,
    "Fast_Moves": [
      "막치기",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "차밍보이스",
      "매지컬샤인",
      "파괴광선",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 42,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 532,
    "Form": "일반",
    "Pokemon_Name": "으랏차",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 1487,
    "ATK": 134.0,
    "DEF": 87.0,
    "HP": 181,
    "Fast_Moves": [
      "안다리걸기",
      "막치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "로킥",
      "깨트리기",
      "암석봉인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 43,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": "532-S",
    "Form": "그림자",
    "Pokemon_Name": "으랏차",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 1487,
    "ATK": 134.0,
    "DEF": 87.0,
    "HP": 181,
    "Fast_Moves": [
      "안다리걸기",
      "막치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "로킥",
      "깨트리기",
      "암석봉인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 43,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 533,
    "Form": "일반",
    "Pokemon_Name": "토쇠골",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 2452,
    "ATK": 180.0,
    "DEF": 134.0,
    "HP": 198,
    "Fast_Moves": [
      "안다리걸기",
      "독찌르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "로킥",
      "깨트리기",
      "스톤에지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 44,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": "533-S",
    "Form": "그림자",
    "Pokemon_Name": "토쇠골",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 2452,
    "ATK": 180.0,
    "DEF": 134.0,
    "HP": 198,
    "Fast_Moves": [
      "안다리걸기",
      "독찌르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "로킥",
      "깨트리기",
      "스톤에지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 44,
    "Sprite_Row": 16
  },
  {
    "Pokemon_ID": 534,
    "Form": "일반",
    "Pokemon_Name": "노보청",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 3773,
    "ATK": 243.0,
    "DEF": 158.0,
    "HP": 233,
    "Fast_Moves": [
      "카운터",
      "독찌르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "폭발펀치",
      "기합구슬",
      "스톤에지"
    ],
    "Elite_Charged_Moves": [
      "세차게휘두르기"
    ],
    "Sprite_Col": 1,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": "534-S",
    "Form": "그림자",
    "Pokemon_Name": "노보청",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 3773,
    "ATK": 242.99999999999997,
    "DEF": 158.0,
    "HP": 233,
    "Fast_Moves": [
      "카운터",
      "독찌르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "폭발펀치",
      "기합구슬",
      "스톤에지"
    ],
    "Elite_Charged_Moves": [
      "세차게휘두르기"
    ],
    "Sprite_Col": 1,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 535,
    "Form": "일반",
    "Pokemon_Name": "동챙이",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 948,
    "ATK": 98.0,
    "DEF": 78.0,
    "HP": 137,
    "Fast_Moves": [
      "머드샷",
      "거품"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "물의파동",
      "진흙폭탄",
      "오물웨이브"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 2,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 536,
    "Form": "일반",
    "Pokemon_Name": "두까비",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "땅",
    "Max_CP": 1574,
    "ATK": 128.0,
    "DEF": 109.0,
    "HP": 181,
    "Fast_Moves": [
      "머드샷",
      "거품"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "물의파동",
      "대지의힘",
      "오물웨이브"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 3,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 537,
    "Form": "일반",
    "Pokemon_Name": "두빅굴",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "땅",
    "Max_CP": 2899,
    "ATK": 188.0,
    "DEF": 150.0,
    "HP": 233,
    "Fast_Moves": [
      "머드샷",
      "거품"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "탁류",
      "대지의힘",
      "오물폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 538,
    "Form": "일반",
    "Pokemon_Name": "던지미",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 2896,
    "ATK": 172.0,
    "DEF": 160.0,
    "HP": 260,
    "Fast_Moves": [
      "안다리걸기",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "기합구슬",
      "로킥",
      "누르기",
      "깨트리기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 5,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": "538-S",
    "Form": "그림자",
    "Pokemon_Name": "던지미",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 2896,
    "ATK": 172.0,
    "DEF": 160.0,
    "HP": 260,
    "Fast_Moves": [
      "안다리걸기",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "기합구슬",
      "로킥",
      "누르기",
      "깨트리기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 5,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 539,
    "Form": "일반",
    "Pokemon_Name": "타격귀",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 3152,
    "ATK": 231.0,
    "DEF": 153.0,
    "HP": 181,
    "Fast_Moves": [
      "안다리걸기",
      "독찌르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "기합구슬",
      "로킥",
      "누르기",
      "깨트리기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 6,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": "539-S",
    "Form": "그림자",
    "Pokemon_Name": "타격귀",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 3152,
    "ATK": 231.0,
    "DEF": 153.0,
    "HP": 181,
    "Fast_Moves": [
      "안다리걸기",
      "독찌르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "기합구슬",
      "로킥",
      "누르기",
      "깨트리기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 6,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 540,
    "Form": "일반",
    "Pokemon_Name": "두르보",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "풀",
    "Max_CP": 1105,
    "ATK": 96.0,
    "DEF": 124.0,
    "HP": 128,
    "Fast_Moves": [
      "벌레의저항",
      "벌레먹기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "씨폭탄",
      "은빛바람"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 541,
    "Form": "일반",
    "Pokemon_Name": "두르쿤",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "풀",
    "Max_CP": 1549,
    "ATK": 115.0,
    "DEF": 162.0,
    "HP": 146,
    "Fast_Moves": [
      "벌레의저항",
      "벌레먹기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "벌레의야단법석",
      "은빛바람"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 8,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 542,
    "Form": "일반",
    "Pokemon_Name": "모아머",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "풀",
    "Max_CP": 2917,
    "ATK": 205.0,
    "DEF": 165.0,
    "HP": 181,
    "Fast_Moves": [
      "잎날가르기",
      "벌레먹기"
    ],
    "Elite_Fast_Moves": [
      "섀도클로"
    ],
    "Charged_Moves": [
      "리프블레이드",
      "시저크로스",
      "은빛바람",
      "리프스톰"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 9,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 543,
    "Form": "일반",
    "Pokemon_Name": "마디네",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "독",
    "Max_CP": 799,
    "ATK": 83.0,
    "DEF": 99.0,
    "HP": 102,
    "Fast_Moves": [
      "벌레먹기",
      "독침"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "시그널빔",
      "오물폭탄",
      "자이로볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 10,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": "543-S",
    "Form": "그림자",
    "Pokemon_Name": "마디네",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "독",
    "Max_CP": 799,
    "ATK": 83.0,
    "DEF": 99.0,
    "HP": 102,
    "Fast_Moves": [
      "벌레먹기",
      "독침"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "시그널빔",
      "오물폭탄",
      "자이로볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 10,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 544,
    "Form": "일반",
    "Pokemon_Name": "휠구",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "독",
    "Max_CP": 1293,
    "ATK": 100.0,
    "DEF": 173.0,
    "HP": 120,
    "Fast_Moves": [
      "벌레먹기",
      "독침"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "시그널빔",
      "오물폭탄",
      "자이로볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": "544-S",
    "Form": "그림자",
    "Pokemon_Name": "휠구",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "독",
    "Max_CP": 1293,
    "ATK": 100.0,
    "DEF": 173.0,
    "HP": 120,
    "Fast_Moves": [
      "벌레먹기",
      "독침"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "시그널빔",
      "오물폭탄",
      "자이로볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 545,
    "Form": "일반",
    "Pokemon_Name": "펜드라",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "독",
    "Max_CP": 2766,
    "ATK": 203.0,
    "DEF": 175.0,
    "HP": 155,
    "Fast_Moves": [
      "벌레먹기",
      "독찌르기",
      "독침"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "메가혼",
      "오물폭탄",
      "자이로볼",
      "시저크로스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 12,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": "545-S",
    "Form": "그림자",
    "Pokemon_Name": "펜드라",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "독",
    "Max_CP": 2766,
    "ATK": 203.0,
    "DEF": 175.0,
    "HP": 155,
    "Fast_Moves": [
      "벌레먹기",
      "독찌르기",
      "독침"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "메가혼",
      "오물폭탄",
      "자이로볼",
      "시저크로스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 12,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 546,
    "Form": "일반",
    "Pokemon_Name": "소미안",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "페어리",
    "Max_CP": 791,
    "ATK": 71.0,
    "DEF": 111.0,
    "HP": 120,
    "Fast_Moves": [
      "애교부리기",
      "잎날가르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "씨폭탄",
      "풀묶기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 547,
    "Form": "일반",
    "Pokemon_Name": "엘풍",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "페어리",
    "Max_CP": 2277,
    "ATK": 164.0,
    "DEF": 176.0,
    "HP": 155,
    "Fast_Moves": [
      "애교부리기",
      "잎날가르기",
      "요정의바람"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "풀묶기",
      "폭풍",
      "문포스",
      "씨폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 14,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 548,
    "Form": "일반",
    "Pokemon_Name": "치릴리",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 1164,
    "ATK": 119.0,
    "DEF": 91.0,
    "HP": 128,
    "Fast_Moves": [
      "애교부리기",
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "씨폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 15,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 549,
    "Form": "일반",
    "Pokemon_Name": "드레디어",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 2883,
    "ATK": 214.0,
    "DEF": 155.0,
    "HP": 172,
    "Fast_Moves": [
      "애교부리기",
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)",
      "메지컬리프"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "꽃보라",
      "파괴광선",
      "솔라빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 16,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": "549-4",
    "Form": "일반",
    "Pokemon_Name": "히스이드레디어",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "격투",
    "Max_CP": 2840,
    "ATK": 208.0,
    "DEF": 159.0,
    "HP": 172,
    "Fast_Moves": [
      "메지컬리프",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "꽃보라",
      "인파이트",
      "솔라빔",
      "기선제압"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 17,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 550,
    "Form": "일반",
    "Pokemon_Name": "배쓰나이(파란줄)",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 2363,
    "ATK": 189.0,
    "DEF": 129.0,
    "HP": 172,
    "Fast_Moves": [
      "몸통박치기",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아제트",
      "아쿠아테일",
      "탁류"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 19,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 550,
    "Form": "일반",
    "Pokemon_Name": "배쓰나이(빨간줄)",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 2363,
    "ATK": 189.0,
    "DEF": 129.0,
    "HP": 172,
    "Fast_Moves": [
      "몸통박치기",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아제트",
      "아쿠아테일",
      "탁류"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 18,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 550,
    "Form": "일반",
    "Pokemon_Name": "배쓰나이(흰줄)",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 2363,
    "ATK": 189.0,
    "DEF": 129.0,
    "HP": 172,
    "Fast_Moves": [
      "몸통박치기",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아제트",
      "아쿠아테일",
      "탁류"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 20,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 551,
    "Form": "일반",
    "Pokemon_Name": "깜눈크",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "악",
    "Max_CP": 1172,
    "ATK": 132.0,
    "DEF": 69.0,
    "HP": 137,
    "Fast_Moves": [
      "물기",
      "진흙뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "깨물어부수기",
      "땅고르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 21,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 552,
    "Form": "일반",
    "Pokemon_Name": "악비르",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "악",
    "Max_CP": 1603,
    "ATK": 155.0,
    "DEF": 90.0,
    "HP": 155,
    "Fast_Moves": [
      "물기",
      "진흙뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지진",
      "깨물어부수기",
      "땅고르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 22,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 553,
    "Form": "일반",
    "Pokemon_Name": "악비아르",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "악",
    "Max_CP": 3444,
    "ATK": 229.0,
    "DEF": 158.0,
    "HP": 216,
    "Fast_Moves": [
      "바크아웃",
      "진흙뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지진",
      "깨물어부수기",
      "역린",
      "깨트리기",
      "모래지옥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 23,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 554,
    "Form": "일반",
    "Pokemon_Name": "달막화",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 1630,
    "ATK": 153.0,
    "DEF": 86.0,
    "HP": 172,
    "Fast_Moves": [
      "몸통박치기",
      "불꽃엄니"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "불꽃펀치",
      "니트로차지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": "554-3",
    "Form": "일반",
    "Pokemon_Name": "가라르달막화",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "-",
    "Max_CP": 1630,
    "ATK": 153.0,
    "DEF": 86.0,
    "HP": 172,
    "Fast_Moves": [
      "몸통박치기",
      "얼음엄니"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "냉동펀치",
      "냉동빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 25,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": "554-S",
    "Form": "그림자",
    "Pokemon_Name": "달막화",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 1630,
    "ATK": 153.0,
    "DEF": 86.0,
    "HP": 172,
    "Fast_Moves": [
      "몸통박치기",
      "불꽃엄니"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "불꽃펀치",
      "니트로차지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": "555-3",
    "Form": "일반",
    "Pokemon_Name": "가라르불비달마",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "-",
    "Max_CP": 3511,
    "ATK": 263.0,
    "DEF": 114.0,
    "HP": 233,
    "Fast_Moves": [
      "몸통박치기",
      "얼음엄니"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오버히트",
      "눈사태",
      "엄청난힘",
      "냉동펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 27,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": "555-3",
    "Form": "일반",
    "Pokemon_Name": "가라르불비달마(달마모드)",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "불꽃",
    "Max_CP": 4415,
    "ATK": 323.0,
    "DEF": 123.0,
    "HP": 233,
    "Fast_Moves": [
      "몸통박치기",
      "얼음엄니"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오버히트",
      "눈사태",
      "엄청난힘",
      "냉동펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 29,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 555,
    "Form": "일반",
    "Pokemon_Name": "불비달마",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 3511,
    "ATK": 263.0,
    "DEF": 114.0,
    "HP": 233,
    "Fast_Moves": [
      "몸통박치기",
      "불꽃엄니",
      "불태우기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오버히트",
      "기합구슬",
      "사이코키네시스",
      "스톤샤워"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 26,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 555,
    "Form": "일반",
    "Pokemon_Name": "불비달마(달마모드)",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 4226,
    "ATK": 243.0,
    "DEF": 202.0,
    "HP": 233,
    "Fast_Moves": [
      "몸통박치기",
      "불꽃엄니",
      "불태우기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오버히트",
      "기합구슬",
      "사이코키네시스",
      "스톤샤워"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 28,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": "555-S",
    "Form": "그림자",
    "Pokemon_Name": "불비달마",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 3511,
    "ATK": 263.0,
    "DEF": 114.0,
    "HP": 233,
    "Fast_Moves": [
      "몸통박치기",
      "불꽃엄니",
      "불태우기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오버히트",
      "기합구슬",
      "사이코키네시스",
      "스톤샤워"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 26,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 556,
    "Form": "일반",
    "Pokemon_Name": "마라카치",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 2571,
    "ATK": 201.0,
    "DEF": 130.0,
    "HP": 181,
    "Fast_Moves": [
      "씨기관총",
      "독찌르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "제비반환",
      "꽃보라",
      "솔라빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 557,
    "Form": "일반",
    "Pokemon_Name": "돌살이",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "바위",
    "Max_CP": 1384,
    "ATK": 118.0,
    "DEF": 128.0,
    "HP": 137,
    "Fast_Moves": [
      "풀베기",
      "떨어뜨리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "록블라스트",
      "시저크로스",
      "암석봉인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": "557-S",
    "Form": "그림자",
    "Pokemon_Name": "돌살이",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "바위",
    "Max_CP": 1384,
    "ATK": 118.0,
    "DEF": 128.0,
    "HP": 137,
    "Fast_Moves": [
      "풀베기",
      "떨어뜨리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "록블라스트",
      "시저크로스",
      "암석봉인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 558,
    "Form": "일반",
    "Pokemon_Name": "암팰리스",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "바위",
    "Max_CP": 2874,
    "ATK": 188.0,
    "DEF": 200.0,
    "HP": 172,
    "Fast_Moves": [
      "연속자르기",
      "떨어뜨리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "록블라스트",
      "시저크로스",
      "스톤샤워",
      "암석포"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": "558-S",
    "Form": "그림자",
    "Pokemon_Name": "암팰리스",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "바위",
    "Max_CP": 2874,
    "ATK": 188.0,
    "DEF": 200.0,
    "HP": 172,
    "Fast_Moves": [
      "연속자르기",
      "떨어뜨리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "록블라스트",
      "시저크로스",
      "스톤샤워",
      "암석포"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 559,
    "Form": "일반",
    "Pokemon_Name": "곤율랭",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "격투",
    "Max_CP": 1551,
    "ATK": 132.0,
    "DEF": 132.0,
    "HP": 137,
    "Fast_Moves": [
      "바위깨기",
      "속여때리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "애시드봄",
      "깨트리기",
      "속임수",
      "번개펀치",
      "기선제압"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 33,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 560,
    "Form": "일반",
    "Pokemon_Name": "곤율거니",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "격투",
    "Max_CP": 2581,
    "ATK": 163.0,
    "DEF": 222.0,
    "HP": 163,
    "Fast_Moves": [
      "카운터",
      "바크아웃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "애시드봄",
      "그로우펀치",
      "속임수",
      "번개펀치",
      "기선제압"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 34,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 561,
    "Form": "일반",
    "Pokemon_Name": "심보러",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "비행",
    "Max_CP": 2883,
    "ATK": 204.0,
    "DEF": 167.0,
    "HP": 176,
    "Fast_Moves": [
      "에어슬래시",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에어커터",
      "환상빔",
      "원시의힘",
      "시그널빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 35,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 562,
    "Form": "일반",
    "Pokemon_Name": "데스마스",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "-",
    "Max_CP": 1110,
    "ATK": 95.0,
    "DEF": 141.0,
    "HP": 116,
    "Fast_Moves": [
      "놀래키기",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도볼",
      "악의파동",
      "괴상한바람"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": "562-3",
    "Form": "일반",
    "Pokemon_Name": "가라르데스마스",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "고스트",
    "Max_CP": 1110,
    "ATK": 95.0,
    "DEF": 141.0,
    "HP": 116,
    "Fast_Moves": [
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "나이트헤드",
      "암석봉인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": "562-S",
    "Form": "그림자",
    "Pokemon_Name": "데스마스",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "-",
    "Max_CP": 1110,
    "ATK": 95.0,
    "DEF": 141.0,
    "HP": 116,
    "Fast_Moves": [
      "놀래키기",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도볼",
      "악의파동",
      "괴상한바람"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 563,
    "Form": "일반",
    "Pokemon_Name": "데스니칸",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "-",
    "Max_CP": 2570,
    "ATK": 163.0,
    "DEF": 237.0,
    "HP": 151,
    "Fast_Moves": [
      "놀래키기",
      "사념의박치기",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도볼",
      "악의파동",
      "사이코키네시스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 38,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": "563-S",
    "Form": "그림자",
    "Pokemon_Name": "데스니칸",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "-",
    "Max_CP": 2570,
    "ATK": 163.0,
    "DEF": 237.0,
    "HP": 151,
    "Fast_Moves": [
      "놀래키기",
      "사념의박치기",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도볼",
      "악의파동",
      "사이코키네시스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 38,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 564,
    "Form": "일반",
    "Pokemon_Name": "프로토가",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "바위",
    "Max_CP": 1683,
    "ATK": 134.0,
    "DEF": 146.0,
    "HP": 144,
    "Fast_Moves": [
      "물대포",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파도타기",
      "원시의힘",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 39,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": "564-S",
    "Form": "그림자",
    "Pokemon_Name": "프로토가",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "바위",
    "Max_CP": 1683,
    "ATK": 134.0,
    "DEF": 146.0,
    "HP": 144,
    "Fast_Moves": [
      "물대포",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파도타기",
      "원시의힘",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 39,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 565,
    "Form": "일반",
    "Pokemon_Name": "늑골라",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "바위",
    "Max_CP": 2964,
    "ATK": 192.0,
    "DEF": 197.0,
    "HP": 179,
    "Fast_Moves": [
      "물대포",
      "돌떨구기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파도타기",
      "원시의힘",
      "누르기",
      "아쿠아브레이크"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 40,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": "565-S",
    "Form": "그림자",
    "Pokemon_Name": "늑골라",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "바위",
    "Max_CP": 2964,
    "ATK": 192.0,
    "DEF": 197.0,
    "HP": 179,
    "Fast_Moves": [
      "물대포",
      "돌떨구기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파도타기",
      "원시의힘",
      "누르기",
      "아쿠아브레이크"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 40,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 566,
    "Form": "일반",
    "Pokemon_Name": "아켄",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "비행",
    "Max_CP": 2083,
    "ATK": 213.0,
    "DEF": 89.0,
    "HP": 146,
    "Fast_Moves": [
      "전광석화",
      "날개치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "드래곤클로",
      "원시의힘",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 41,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": "566-S",
    "Form": "그림자",
    "Pokemon_Name": "아켄",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "비행",
    "Max_CP": 2083,
    "ATK": 213.0,
    "DEF": 88.99999999999999,
    "HP": 146,
    "Fast_Moves": [
      "전광석화",
      "날개치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "드래곤클로",
      "원시의힘",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 41,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 567,
    "Form": "일반",
    "Pokemon_Name": "아케오스",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "비행",
    "Max_CP": 3766,
    "ATK": 292.0,
    "DEF": 139.0,
    "HP": 181,
    "Fast_Moves": [
      "강철날개",
      "날개치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "드래곤클로",
      "원시의힘",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 42,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": "567-S",
    "Form": "그림자",
    "Pokemon_Name": "아케오스",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "비행",
    "Max_CP": 3766,
    "ATK": 292.0,
    "DEF": 139.0,
    "HP": 181,
    "Fast_Moves": [
      "강철날개",
      "날개치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "드래곤클로",
      "원시의힘",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 42,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 568,
    "Form": "일반",
    "Pokemon_Name": "깨봉이",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "-",
    "Max_CP": 1131,
    "ATK": 96.0,
    "DEF": 122.0,
    "HP": 137,
    "Fast_Moves": [
      "막치기",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "더스트슈트",
      "씨폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 43,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": "568-S",
    "Form": "그림자",
    "Pokemon_Name": "깨봉이",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "-",
    "Max_CP": 1131,
    "ATK": 96.0,
    "DEF": 122.0,
    "HP": 137,
    "Fast_Moves": [
      "막치기",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "더스트슈트",
      "씨폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 43,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 569,
    "Form": "일반",
    "Pokemon_Name": "더스트나",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "-",
    "Max_CP": 2651,
    "ATK": 181.0,
    "DEF": 164.0,
    "HP": 190,
    "Fast_Moves": [
      "엉겨붙기",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "애시드봄",
      "씨폭탄",
      "더스트슈트",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 44,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": "569-S",
    "Form": "그림자",
    "Pokemon_Name": "더스트나",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "-",
    "Max_CP": 2651,
    "ATK": 181.0,
    "DEF": 164.0,
    "HP": 190,
    "Fast_Moves": [
      "엉겨붙기",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "애시드봄",
      "씨폭탄",
      "더스트슈트",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 44,
    "Sprite_Row": 17
  },
  {
    "Pokemon_ID": 570,
    "Form": "일반",
    "Pokemon_Name": "조로아",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "-",
    "Max_CP": 1329,
    "ATK": 153.0,
    "DEF": 78.0,
    "HP": 120,
    "Fast_Moves": [
      "할퀴기",
      "속여때리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "속임수",
      "제비반환",
      "악의파동",
      "나이트헤드"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 2,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": "570-4",
    "Form": "일반",
    "Pokemon_Name": "히스이조로아",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "고스트",
    "Max_CP": 1360,
    "ATK": 162.0,
    "DEF": 79.0,
    "HP": 111,
    "Fast_Moves": [
      "할퀴기",
      "바크아웃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "속임수",
      "섀도볼",
      "악의파동",
      "나이트헤드"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 3,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 571,
    "Form": "일반",
    "Pokemon_Name": "조로아크",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "-",
    "Max_CP": 2907,
    "ATK": 250.0,
    "DEF": 127.0,
    "HP": 155,
    "Fast_Moves": [
      "섀도클로",
      "바크아웃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "속임수",
      "오물폭탄",
      "화염방사",
      "나이트헤드"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": "571-4",
    "Form": "일반",
    "Pokemon_Name": "히스이조로아크",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "고스트",
    "Max_CP": 2957,
    "ATK": 261.0,
    "DEF": 128.0,
    "HP": 146,
    "Fast_Moves": [
      "섀도클로",
      "바크아웃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "속임수",
      "오물폭탄",
      "화염방사",
      "섀도볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 5,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 572,
    "Form": "일반",
    "Pokemon_Name": "치라미",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 986,
    "ATK": 98.0,
    "DEF": 80.0,
    "HP": 146,
    "Fast_Moves": [
      "막치기",
      "애교부리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스피드스타",
      "10만볼트",
      "아쿠아테일"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 6,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 573,
    "Form": "일반",
    "Pokemon_Name": "치라치노",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 2535,
    "ATK": 198.0,
    "DEF": 130.0,
    "HP": 181,
    "Fast_Moves": [
      "막치기",
      "애교부리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파괴광선",
      "10만볼트",
      "아쿠아테일"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 574,
    "Form": "일반",
    "Pokemon_Name": "고디탱",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 1075,
    "ATK": 98.0,
    "DEF": 112.0,
    "HP": 128,
    "Fast_Moves": [
      "막치기",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "환상빔",
      "사이코쇼크",
      "사이코키네시스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 8,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": "574-S",
    "Form": "그림자",
    "Pokemon_Name": "고디탱",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 1075,
    "ATK": 98.0,
    "DEF": 112.0,
    "HP": 128,
    "Fast_Moves": [
      "막치기",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "환상빔",
      "사이코쇼크",
      "사이코키네시스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 8,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 575,
    "Form": "일반",
    "Pokemon_Name": "고디보미",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 1813,
    "ATK": 137.0,
    "DEF": 153.0,
    "HP": 155,
    "Fast_Moves": [
      "막치기",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "환상빔",
      "미래예지",
      "사이코키네시스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 9,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": "575-S",
    "Form": "그림자",
    "Pokemon_Name": "고디보미",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 1813,
    "ATK": 137.0,
    "DEF": 153.0,
    "HP": 155,
    "Fast_Moves": [
      "막치기",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "환상빔",
      "미래예지",
      "사이코키네시스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 9,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 576,
    "Form": "일반",
    "Pokemon_Name": "고디모아젤",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 2735,
    "ATK": 176.0,
    "DEF": 205.0,
    "HP": 172,
    "Fast_Moves": [
      "애교부리기",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤샤워",
      "미래예지",
      "사이코키네시스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 10,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": "576-S",
    "Form": "그림자",
    "Pokemon_Name": "고디모아젤",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 2735,
    "ATK": 176.0,
    "DEF": 205.00000000000003,
    "HP": 172,
    "Fast_Moves": [
      "애교부리기",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤샤워",
      "미래예지",
      "사이코키네시스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 10,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 577,
    "Form": "일반",
    "Pokemon_Name": "유니란",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 1546,
    "ATK": 170.0,
    "DEF": 83.0,
    "HP": 128,
    "Fast_Moves": [
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코쇼크",
      "나이트헤드",
      "번개"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": "577-S",
    "Form": "그림자",
    "Pokemon_Name": "유니란",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 1546,
    "ATK": 170.0,
    "DEF": 83.0,
    "HP": 128,
    "Fast_Moves": [
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코쇼크",
      "나이트헤드",
      "번개"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 578,
    "Form": "일반",
    "Pokemon_Name": "듀란",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 2282,
    "ATK": 208.0,
    "DEF": 103.0,
    "HP": 163,
    "Fast_Moves": [
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코쇼크",
      "나이트헤드",
      "번개"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 12,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": "578-S",
    "Form": "그림자",
    "Pokemon_Name": "듀란",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 2282,
    "ATK": 208.0,
    "DEF": 103.0,
    "HP": 163,
    "Fast_Moves": [
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코쇼크",
      "나이트헤드",
      "번개"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 12,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 579,
    "Form": "일반",
    "Pokemon_Name": "란쿨루스",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 3309,
    "ATK": 214.0,
    "DEF": 148.0,
    "HP": 242,
    "Fast_Moves": [
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [
      "애교부리기"
    ],
    "Charged_Moves": [
      "미래예지",
      "섀도볼",
      "번개",
      "사이코쇼크"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": "579-S",
    "Form": "그림자",
    "Pokemon_Name": "란쿨루스",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 3309,
    "ATK": 214.00000000000003,
    "DEF": 148.0,
    "HP": 242,
    "Fast_Moves": [
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [
      "애교부리기"
    ],
    "Charged_Moves": [
      "미래예지",
      "섀도볼",
      "번개",
      "사이코쇼크"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 580,
    "Form": "일반",
    "Pokemon_Name": "꼬지보리",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "비행",
    "Max_CP": 968,
    "ATK": 84.0,
    "DEF": 96.0,
    "HP": 158,
    "Fast_Moves": [
      "물대포",
      "날개치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "제비반환",
      "거품광선",
      "브레이브버드"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 14,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": "580-S",
    "Form": "그림자",
    "Pokemon_Name": "꼬지보리",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "비행",
    "Max_CP": 968,
    "ATK": 84.0,
    "DEF": 96.0,
    "HP": 158,
    "Fast_Moves": [
      "물대포",
      "날개치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "제비반환",
      "거품광선",
      "브레이브버드"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 14,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 581,
    "Form": "일반",
    "Pokemon_Name": "스완나",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "비행",
    "Max_CP": 2361,
    "ATK": 182.0,
    "DEF": 132.0,
    "HP": 181,
    "Fast_Moves": [
      "물대포",
      "에어슬래시"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "냉동빔",
      "거품광선",
      "폭풍",
      "공중날기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 15,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": "581-S",
    "Form": "그림자",
    "Pokemon_Name": "스완나",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "비행",
    "Max_CP": 2361,
    "ATK": 182.0,
    "DEF": 132.0,
    "HP": 181,
    "Fast_Moves": [
      "물대포",
      "에어슬래시"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "냉동빔",
      "거품광선",
      "폭풍",
      "공중날기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 15,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 582,
    "Form": "일반",
    "Pokemon_Name": "바닐프티",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "-",
    "Max_CP": 1168,
    "ATK": 118.0,
    "DEF": 106.0,
    "HP": 113,
    "Fast_Moves": [
      "눈싸라기",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "얼어붙은바람",
      "냉동빔",
      "시그널빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 16,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 583,
    "Form": "일반",
    "Pokemon_Name": "바닐리치",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "-",
    "Max_CP": 1799,
    "ATK": 151.0,
    "DEF": 138.0,
    "HP": 139,
    "Fast_Moves": [
      "얼음숨결",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "얼어붙은바람",
      "냉동빔",
      "시그널빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 17,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 584,
    "Form": "일반",
    "Pokemon_Name": "배바닐라",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "-",
    "Max_CP": 3190,
    "ATK": 218.0,
    "DEF": 184.0,
    "HP": 174,
    "Fast_Moves": [
      "얼음숨결",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "눈보라",
      "러스터캐논",
      "시그널빔"
    ],
    "Elite_Charged_Moves": [
      "눈사태"
    ],
    "Sprite_Col": 18,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 585,
    "Form": "일반",
    "Pokemon_Name": "사철록(봄)",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "풀",
    "Max_CP": 1283,
    "ATK": 115.0,
    "DEF": 100.0,
    "HP": 155,
    "Fast_Moves": [
      "몸통박치기",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "씨폭탄",
      "와일드볼트",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 19,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 585,
    "Form": "일반",
    "Pokemon_Name": "사철록(여름)",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "풀",
    "Max_CP": 1283,
    "ATK": 115.0,
    "DEF": 100.0,
    "HP": 155,
    "Fast_Moves": [
      "몸통박치기",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "씨폭탄",
      "와일드볼트",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 20,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 585,
    "Form": "일반",
    "Pokemon_Name": "사철록(가을)",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "풀",
    "Max_CP": 1283,
    "ATK": 115.0,
    "DEF": 100.0,
    "HP": 155,
    "Fast_Moves": [
      "몸통박치기",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "씨폭탄",
      "와일드볼트",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 21,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 585,
    "Form": "일반",
    "Pokemon_Name": "사철록(겨울)",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "풀",
    "Max_CP": 1283,
    "ATK": 115.0,
    "DEF": 100.0,
    "HP": 155,
    "Fast_Moves": [
      "몸통박치기",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "씨폭탄",
      "와일드볼트",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 22,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 586,
    "Form": "일반",
    "Pokemon_Name": "바라철록(봄)",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "풀",
    "Max_CP": 2732,
    "ATK": 198.0,
    "DEF": 146.0,
    "HP": 190,
    "Fast_Moves": [
      "속여때리기",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "메가혼",
      "솔라빔",
      "와일드볼트",
      "파괴광선",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 23,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 586,
    "Form": "일반",
    "Pokemon_Name": "바라철록(여름)",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "풀",
    "Max_CP": 2732,
    "ATK": 198.0,
    "DEF": 146.0,
    "HP": 190,
    "Fast_Moves": [
      "속여때리기",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "메가혼",
      "솔라빔",
      "와일드볼트",
      "파괴광선",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 586,
    "Form": "일반",
    "Pokemon_Name": "바라철록(가을)",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "풀",
    "Max_CP": 2732,
    "ATK": 198.0,
    "DEF": 146.0,
    "HP": 190,
    "Fast_Moves": [
      "속여때리기",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "메가혼",
      "솔라빔",
      "와일드볼트",
      "파괴광선",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 25,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 586,
    "Form": "일반",
    "Pokemon_Name": "바라철록(겨울)",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "풀",
    "Max_CP": 2732,
    "ATK": 198.0,
    "DEF": 146.0,
    "HP": 190,
    "Fast_Moves": [
      "속여때리기",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "메가혼",
      "솔라빔",
      "와일드볼트",
      "파괴광선",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 26,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 587,
    "Form": "일반",
    "Pokemon_Name": "에몽가",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "비행",
    "Max_CP": 1847,
    "ATK": 158.0,
    "DEF": 127.0,
    "HP": 146,
    "Fast_Moves": [
      "전기쇼크",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "방전",
      "제비반환",
      "10만볼트",
      "애크러뱃"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 27,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": "587-S",
    "Form": "그림자",
    "Pokemon_Name": "에몽가",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "비행",
    "Max_CP": 1847,
    "ATK": 158.0,
    "DEF": 127.0,
    "HP": 146,
    "Fast_Moves": [
      "전기쇼크",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "방전",
      "제비반환",
      "10만볼트",
      "애크러뱃"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 27,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 588,
    "Form": "일반",
    "Pokemon_Name": "딱정곤",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 1336,
    "ATK": 137.0,
    "DEF": 87.0,
    "HP": 137,
    "Fast_Moves": [
      "쪼기",
      "연속자르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "시그널빔",
      "시저크로스",
      "드릴라이너",
      "제비반환"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 28,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": "588-S",
    "Form": "그림자",
    "Pokemon_Name": "딱정곤",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 1336,
    "ATK": 137.0,
    "DEF": 87.0,
    "HP": 137,
    "Fast_Moves": [
      "쪼기",
      "연속자르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "시그널빔",
      "시저크로스",
      "드릴라이너",
      "제비반환"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 28,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 589,
    "Form": "일반",
    "Pokemon_Name": "슈바르고",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "강철",
    "Max_CP": 3266,
    "ATK": 223.0,
    "DEF": 187.0,
    "HP": 172,
    "Fast_Moves": [
      "카운터",
      "벌레먹기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "메가혼",
      "애시드봄",
      "드릴라이너",
      "제비반환"
    ],
    "Elite_Charged_Moves": [
      "셸블레이드"
    ],
    "Sprite_Col": 29,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": "589-S",
    "Form": "그림자",
    "Pokemon_Name": "슈바르고",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "강철",
    "Max_CP": 3266,
    "ATK": 222.99999999999997,
    "DEF": 186.99999999999997,
    "HP": 172,
    "Fast_Moves": [
      "카운터",
      "벌레먹기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "메가혼",
      "애시드봄",
      "드릴라이너",
      "제비반환"
    ],
    "Elite_Charged_Moves": [
      "셸블레이드"
    ],
    "Sprite_Col": 29,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 590,
    "Form": "일반",
    "Pokemon_Name": "깜놀버슬",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "독",
    "Max_CP": 1107,
    "ATK": 97.0,
    "DEF": 91.0,
    "HP": 170,
    "Fast_Moves": [
      "놀래키기",
      "속여때리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "누르기",
      "풀묶기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": "590-S",
    "Form": "그림자",
    "Pokemon_Name": "깜놀버슬",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "독",
    "Max_CP": 1107,
    "ATK": 97.0,
    "DEF": 91.0,
    "HP": 170,
    "Fast_Moves": [
      "놀래키기",
      "속여때리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "누르기",
      "풀묶기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 591,
    "Form": "일반",
    "Pokemon_Name": "뽀록나",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "독",
    "Max_CP": 2420,
    "ATK": 155.0,
    "DEF": 139.0,
    "HP": 249,
    "Fast_Moves": [
      "놀래키기",
      "속여때리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "속임수",
      "오물폭탄",
      "풀묶기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": "591-S",
    "Form": "그림자",
    "Pokemon_Name": "뽀록나",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "독",
    "Max_CP": 2420,
    "ATK": 155.0,
    "DEF": 139.0,
    "HP": 249,
    "Fast_Moves": [
      "놀래키기",
      "속여때리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "속임수",
      "오물폭탄",
      "풀묶기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 592,
    "Form": "일반",
    "Pokemon_Name": "탱그릴♂",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "고스트",
    "Max_CP": 1421,
    "ATK": 115.0,
    "DEF": 134.0,
    "HP": 146,
    "Fast_Moves": [
      "거품",
      "병상첨병"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "나이트헤드",
      "냉동빔",
      "괴상한바람"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 592,
    "Form": "일반",
    "Pokemon_Name": "탱그릴♀",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "고스트",
    "Max_CP": 1421,
    "ATK": 115.0,
    "DEF": 134.0,
    "HP": 146,
    "Fast_Moves": [
      "거품",
      "병상첨병"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "나이트헤드",
      "냉동빔",
      "괴상한바람"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 33,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 593,
    "Form": "일반",
    "Pokemon_Name": "탱탱겔♂",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "고스트",
    "Max_CP": 2644,
    "ATK": 159.0,
    "DEF": 178.0,
    "HP": 225,
    "Fast_Moves": [
      "거품",
      "병상첨병"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도볼",
      "냉동빔",
      "거품광선",
      "파도타기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 34,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 593,
    "Form": "일반",
    "Pokemon_Name": "탱탱겔♀",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "고스트",
    "Max_CP": 2644,
    "ATK": 159.0,
    "DEF": 178.0,
    "HP": 225,
    "Fast_Moves": [
      "거품",
      "병상첨병"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도볼",
      "냉동빔",
      "거품광선",
      "파도타기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 35,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 594,
    "Form": "일반",
    "Pokemon_Name": "맘복치",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 2452,
    "ATK": 138.0,
    "DEF": 131.0,
    "HP": 338,
    "Fast_Moves": [
      "폭포오르기",
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "하이드로펌프",
      "눈보라",
      "사이코키네시스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 595,
    "Form": "일반",
    "Pokemon_Name": "파쪼옥",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "전기",
    "Max_CP": 1156,
    "ATK": 110.0,
    "DEF": 98.0,
    "HP": 137,
    "Fast_Moves": [
      "차지빔",
      "기습"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "크로스포이즌",
      "벌레의야단법석",
      "방전"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": "595-S",
    "Form": "그림자",
    "Pokemon_Name": "파쪼옥",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "전기",
    "Max_CP": 1156,
    "ATK": 110.0,
    "DEF": 97.99999999999999,
    "HP": 137,
    "Fast_Moves": [
      "차지빔",
      "기습"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "크로스포이즌",
      "벌레의야단법석",
      "방전"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 596,
    "Form": "일반",
    "Pokemon_Name": "전툴라",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "전기",
    "Max_CP": 2494,
    "ATK": 201.0,
    "DEF": 128.0,
    "HP": 172,
    "Fast_Moves": [
      "볼트체인지",
      "연속자르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "크로스포이즌",
      "벌레의야단법석",
      "방전",
      "에너지볼",
      "덤벼들기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 38,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": "596-S",
    "Form": "그림자",
    "Pokemon_Name": "전툴라",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "전기",
    "Max_CP": 2494,
    "ATK": 201.0,
    "DEF": 128.0,
    "HP": 172,
    "Fast_Moves": [
      "볼트체인지",
      "연속자르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "크로스포이즌",
      "벌레의야단법석",
      "방전",
      "에너지볼",
      "덤벼들기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 38,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 597,
    "Form": "일반",
    "Pokemon_Name": "철시드",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "강철",
    "Max_CP": 1064,
    "ATK": 82.0,
    "DEF": 155.0,
    "HP": 127,
    "Fast_Moves": [
      "몸통박치기",
      "메탈클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "자이로볼",
      "러스터캐논",
      "아이언헤드"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 39,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": "597-S",
    "Form": "그림자",
    "Pokemon_Name": "철시드",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "강철",
    "Max_CP": 1064,
    "ATK": 82.0,
    "DEF": 155.00000000000003,
    "HP": 127,
    "Fast_Moves": [
      "몸통박치기",
      "메탈클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "자이로볼",
      "러스터캐논",
      "아이언헤드"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 39,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 598,
    "Form": "일반",
    "Pokemon_Name": "너트령",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "강철",
    "Max_CP": 2624,
    "ATK": 158.0,
    "DEF": 223.0,
    "HP": 179,
    "Fast_Moves": [
      "씨기관총",
      "메탈클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파워휩",
      "러스터캐논",
      "애시드봄",
      "번개",
      "미러샷"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 40,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": "598-S",
    "Form": "그림자",
    "Pokemon_Name": "너트령",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "강철",
    "Max_CP": 2624,
    "ATK": 158.0,
    "DEF": 223.00000000000003,
    "HP": 179,
    "Fast_Moves": [
      "씨기관총",
      "메탈클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파워휩",
      "러스터캐논",
      "애시드봄",
      "번개",
      "미러샷"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 40,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 599,
    "Form": "일반",
    "Pokemon_Name": "기어르",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "-",
    "Max_CP": 1081,
    "ATK": 98.0,
    "DEF": 121.0,
    "HP": 120,
    "Fast_Moves": [
      "볼트체인지",
      "차지빔",
      "금속음"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "찝기",
      "방전",
      "전자포"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 41,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 600,
    "Form": "일반",
    "Pokemon_Name": "기기어르",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "-",
    "Max_CP": 2088,
    "ATK": 150.0,
    "DEF": 174.0,
    "HP": 155,
    "Fast_Moves": [
      "전기쇼크",
      "차지빔",
      "금속음"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "찝기",
      "10만볼트",
      "전자포"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 42,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 601,
    "Form": "일반",
    "Pokemon_Name": "기기기어르",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "-",
    "Max_CP": 2981,
    "ATK": 199.0,
    "DEF": 214.0,
    "HP": 155,
    "Fast_Moves": [
      "전기쇼크",
      "차지빔",
      "금속음"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파괴광선",
      "러스터캐논",
      "전자포",
      "미러샷"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 43,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 602,
    "Form": "일반",
    "Pokemon_Name": "저리어",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 917,
    "ATK": 105.0,
    "DEF": 78.0,
    "HP": 111,
    "Fast_Moves": [
      "몸통박치기",
      "스파크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 44,
    "Sprite_Row": 18
  },
  {
    "Pokemon_ID": 603,
    "Form": "일반",
    "Pokemon_Name": "저리릴",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 1939,
    "ATK": 156.0,
    "DEF": 130.0,
    "HP": 163,
    "Fast_Moves": [
      "용해액",
      "스파크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "10만볼트",
      "방전"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 604,
    "Form": "일반",
    "Pokemon_Name": "저리더프",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 3089,
    "ATK": 217.0,
    "DEF": 152.0,
    "HP": 198,
    "Fast_Moves": [
      "용해액",
      "스파크"
    ],
    "Elite_Fast_Moves": [
      "볼트체인지"
    ],
    "Charged_Moves": [
      "깨물어부수기",
      "10만볼트",
      "애시드봄",
      "드래곤클로",
      "아쿠아브레이크"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 2,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 605,
    "Form": "일반",
    "Pokemon_Name": "리그레",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 1566,
    "ATK": 148.0,
    "DEF": 100.0,
    "HP": 146,
    "Fast_Moves": [
      "염동력",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "환상빔",
      "악의파동",
      "사이코키네시스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 3,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 606,
    "Form": "일반",
    "Pokemon_Name": "벰크",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 3112,
    "ATK": 221.0,
    "DEF": 163.0,
    "HP": 181,
    "Fast_Moves": [
      "염동력",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤샤워",
      "악의파동",
      "사이코키네시스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 607,
    "Form": "일반",
    "Pokemon_Name": "불켜미",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "불꽃",
    "Max_CP": 1138,
    "ATK": 108.0,
    "DEF": 98.0,
    "HP": 137,
    "Fast_Moves": [
      "놀래키기",
      "불꽃세례"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "니트로차지",
      "불꽃튀기기",
      "열풍",
      "매지컬플레임"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 5,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": "607-S",
    "Form": "그림자",
    "Pokemon_Name": "불켜미",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "불꽃",
    "Max_CP": 1138,
    "ATK": 108.0,
    "DEF": 97.99999999999999,
    "HP": 137,
    "Fast_Moves": [
      "놀래키기",
      "불꽃세례"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "니트로차지",
      "불꽃튀기기",
      "열풍",
      "매지컬플레임"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 5,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 608,
    "Form": "일반",
    "Pokemon_Name": "램프라",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "불꽃",
    "Max_CP": 1931,
    "ATK": 169.0,
    "DEF": 115.0,
    "HP": 155,
    "Fast_Moves": [
      "놀래키기",
      "불꽃세례"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "불꽃튀기기",
      "열풍"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 6,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": "608-S",
    "Form": "그림자",
    "Pokemon_Name": "램프라",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "불꽃",
    "Max_CP": 1931,
    "ATK": 169.0,
    "DEF": 114.99999999999999,
    "HP": 155,
    "Fast_Moves": [
      "놀래키기",
      "불꽃세례"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "불꽃튀기기",
      "열풍"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 6,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 609,
    "Form": "일반",
    "Pokemon_Name": "샹델라",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "불꽃",
    "Max_CP": 3695,
    "ATK": 271.0,
    "DEF": 182.0,
    "HP": 155,
    "Fast_Moves": [
      "병상첨병",
      "회오리불꽃",
      "불태우기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "섀도볼",
      "오버히트",
      "니트로차지"
    ],
    "Elite_Charged_Moves": [
      "폴터가이스트"
    ],
    "Sprite_Col": 7,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": "609-S",
    "Form": "그림자",
    "Pokemon_Name": "샹델라",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "불꽃",
    "Max_CP": 3695,
    "ATK": 271.0,
    "DEF": 182.0,
    "HP": 155,
    "Fast_Moves": [
      "병상첨병",
      "회오리불꽃",
      "불태우기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "섀도볼",
      "오버히트",
      "니트로차지"
    ],
    "Elite_Charged_Moves": [
      "폴터가이스트"
    ],
    "Sprite_Col": 7,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 610,
    "Form": "일반",
    "Pokemon_Name": "터검니",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "-",
    "Max_CP": 1547,
    "ATK": 154.0,
    "DEF": 101.0,
    "HP": 130,
    "Fast_Moves": [
      "할퀴기",
      "아이언테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "드래곤클로",
      "아쿠아테일",
      "용의파동"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 8,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 611,
    "Form": "일반",
    "Pokemon_Name": "액슨도",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "-",
    "Max_CP": 2526,
    "ATK": 212.0,
    "DEF": 123.0,
    "HP": 165,
    "Fast_Moves": [
      "드래곤테일",
      "아이언테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "드래곤클로",
      "아쿠아테일",
      "깜짝베기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 9,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 612,
    "Form": "일반",
    "Pokemon_Name": "액스라이즈",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "-",
    "Max_CP": 4062,
    "ATK": 284.0,
    "DEF": 172.0,
    "HP": 183,
    "Fast_Moves": [
      "드래곤테일",
      "카운터"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "드래곤클로",
      "파도타기",
      "깜짝베기",
      "지진"
    ],
    "Elite_Charged_Moves": [
      "와이드브레이커"
    ],
    "Sprite_Col": 10,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 613,
    "Form": "일반",
    "Pokemon_Name": "코고미",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "-",
    "Max_CP": 1208,
    "ATK": 128.0,
    "DEF": 74.0,
    "HP": 146,
    "Fast_Moves": [
      "눈싸라기",
      "애교부리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "냉동펀치",
      "얼어붙은바람",
      "치근거리기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 614,
    "Form": "일반",
    "Pokemon_Name": "툰베어",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "-",
    "Max_CP": 3439,
    "ATK": 233.0,
    "DEF": 152.0,
    "HP": 216,
    "Fast_Moves": [
      "눈싸라기",
      "애교부리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "냉동펀치",
      "파도타기",
      "치근거리기",
      "아쿠아브레이크"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 12,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 615,
    "Form": "일반",
    "Pokemon_Name": "프리지오",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "-",
    "Max_CP": 3163,
    "ATK": 190.0,
    "DEF": 218.0,
    "HP": 190,
    "Fast_Moves": [
      "얼음뭉치",
      "얼음숨결"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오로라빔",
      "깜짝베기",
      "솔라빔",
      "물의파동",
      "트리플악셀"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 616,
    "Form": "일반",
    "Pokemon_Name": "쪼마리",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 942,
    "ATK": 72.0,
    "DEF": 140.0,
    "HP": 137,
    "Fast_Moves": [
      "용해액",
      "엉겨붙기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "벌레의야단법석",
      "누르기",
      "시그널빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 14,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": "616-S",
    "Form": "그림자",
    "Pokemon_Name": "쪼마리",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 942,
    "ATK": 72.0,
    "DEF": 140.0,
    "HP": 137,
    "Fast_Moves": [
      "용해액",
      "엉겨붙기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "벌레의야단법석",
      "누르기",
      "시그널빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 14,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 617,
    "Form": "일반",
    "Pokemon_Name": "어지리더",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 2760,
    "ATK": 220.0,
    "DEF": 120.0,
    "HP": 190,
    "Fast_Moves": [
      "용해액",
      "엉겨붙기",
      "물수리검"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "벌레의야단법석",
      "애시드봄",
      "시그널빔",
      "기합구슬"
    ],
    "Elite_Charged_Moves": [
      "에너지볼"
    ],
    "Sprite_Col": 15,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": "617-S",
    "Form": "그림자",
    "Pokemon_Name": "어지리더",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 2760,
    "ATK": 220.0,
    "DEF": 120.0,
    "HP": 190,
    "Fast_Moves": [
      "용해액",
      "엉겨붙기",
      "물수리검"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "벌레의야단법석",
      "애시드봄",
      "시그널빔",
      "기합구슬"
    ],
    "Elite_Charged_Moves": [
      "에너지볼"
    ],
    "Sprite_Col": 15,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 618,
    "Form": "일반",
    "Pokemon_Name": "메더",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "전기",
    "Max_CP": 2445,
    "ATK": 144.0,
    "DEF": 171.0,
    "HP": 240,
    "Fast_Moves": [
      "전기쇼크",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "진흙폭탄",
      "방전",
      "탁류"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 16,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": "618-3",
    "Form": "일반",
    "Pokemon_Name": "가라르메더",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "강철",
    "Max_CP": 2445,
    "ATK": 144.0,
    "DEF": 171.0,
    "HP": 240,
    "Fast_Moves": [
      "머드샷",
      "메탈클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지진",
      "러스터캐논",
      "탁류",
      "스톤샤워"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 17,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 619,
    "Form": "일반",
    "Pokemon_Name": "비조푸",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 1570,
    "ATK": 160.0,
    "DEF": 98.0,
    "HP": 128,
    "Fast_Moves": [
      "안다리걸기",
      "막치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨트리기",
      "로킥",
      "기합구슬",
      "드레인펀치"
    ],
    "Elite_Charged_Moves": [
      "무릎차기"
    ],
    "Sprite_Col": 18,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 620,
    "Form": "일반",
    "Pokemon_Name": "비조도",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 3064,
    "ATK": 258.0,
    "DEF": 127.0,
    "HP": 163,
    "Fast_Moves": [
      "안다리걸기",
      "독찌르기",
      "발경"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨트리기",
      "풀묶기",
      "스톤에지",
      "블레이즈킥",
      "세차게휘두르기",
      "드레인펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 19,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 621,
    "Form": "일반",
    "Pokemon_Name": "크리만",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "-",
    "Max_CP": 3088,
    "ATK": 213.0,
    "DEF": 170.0,
    "HP": 184,
    "Fast_Moves": [
      "드래곤테일",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "드래곤클로",
      "깜짝베기",
      "파괴광선",
      "암석봉인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 20,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 622,
    "Form": "일반",
    "Pokemon_Name": "골비람",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "고스트",
    "Max_CP": 1344,
    "ATK": 127.0,
    "DEF": 92.0,
    "HP": 153,
    "Fast_Moves": [
      "놀래키기",
      "진흙뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도펀치",
      "깨트리기",
      "나이트헤드"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 21,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": "622-S",
    "Form": "그림자",
    "Pokemon_Name": "골비람",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "고스트",
    "Max_CP": 1344,
    "ATK": 127.00000000000001,
    "DEF": 92.0,
    "HP": 153,
    "Fast_Moves": [
      "놀래키기",
      "진흙뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도펀치",
      "깨트리기",
      "나이트헤드"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 21,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 623,
    "Form": "일반",
    "Pokemon_Name": "골루그",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "고스트",
    "Max_CP": 3226,
    "ATK": 222.0,
    "DEF": 154.0,
    "HP": 205,
    "Fast_Moves": [
      "놀래키기",
      "진흙뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도펀치",
      "폭발펀치",
      "대지의힘",
      "폴터가이스트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 22,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": "623-S",
    "Form": "그림자",
    "Pokemon_Name": "골루그",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "고스트",
    "Max_CP": 3226,
    "ATK": 222.0,
    "DEF": 154.0,
    "HP": 205,
    "Fast_Moves": [
      "놀래키기",
      "진흙뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도펀치",
      "폭발펀치",
      "대지의힘",
      "폴터가이스트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 22,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 624,
    "Form": "일반",
    "Pokemon_Name": "자망칼",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "강철",
    "Max_CP": 1620,
    "ATK": 154.0,
    "DEF": 114.0,
    "HP": 128,
    "Fast_Moves": [
      "할퀴기",
      "연속자르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깜짝베기",
      "아이언헤드",
      "시저크로스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 23,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 625,
    "Form": "일반",
    "Pokemon_Name": "절각참",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "강철",
    "Max_CP": 3215,
    "ATK": 232.0,
    "DEF": 176.0,
    "HP": 163,
    "Fast_Moves": [
      "바크아웃",
      "메탈클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "악의파동",
      "아이언헤드",
      "시저크로스",
      "기합구슬"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 626,
    "Form": "일반",
    "Pokemon_Name": "버프론",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 3163,
    "ATK": 195.0,
    "DEF": 182.0,
    "HP": 216,
    "Fast_Moves": [
      "사념의박치기",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "메가혼",
      "짓밟기",
      "로케트박치기",
      "지진"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 25,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 627,
    "Form": "일반",
    "Pokemon_Name": "수리둥보",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 1686,
    "ATK": 150.0,
    "DEF": 97.0,
    "HP": 172,
    "Fast_Moves": [
      "쪼기",
      "날개치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "제비반환",
      "브레이브버드",
      "암석봉인",
      "공중날기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 26,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 628,
    "Form": "일반",
    "Pokemon_Name": "워글",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 3491,
    "ATK": 232.0,
    "DEF": 152.0,
    "HP": 225,
    "Fast_Moves": [
      "강철날개",
      "에어슬래시"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "열풍",
      "브레이브버드",
      "스톤샤워",
      "인파이트",
      "공중날기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 27,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": "628-4",
    "Form": "일반",
    "Pokemon_Name": "히스이워글",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "비행",
    "Max_CP": 3181,
    "ATK": 213.0,
    "DEF": 137.0,
    "HP": 242,
    "Fast_Moves": [
      "에어슬래시",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "매지컬샤인",
      "브레이브버드",
      "사이코키네시스",
      "괴상한바람",
      "공중날기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 28,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 629,
    "Form": "일반",
    "Pokemon_Name": "벌차이",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "비행",
    "Max_CP": 1437,
    "ATK": 105.0,
    "DEF": 139.0,
    "HP": 172,
    "Fast_Moves": [
      "속여때리기",
      "에어슬래시"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "악의파동",
      "브레이브버드",
      "속임수"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 29,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 630,
    "Form": "일반",
    "Pokemon_Name": "버랜지나",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "비행",
    "Max_CP": 2417,
    "ATK": 129.0,
    "DEF": 205.0,
    "HP": 242,
    "Fast_Moves": [
      "바크아웃",
      "에어슬래시"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "악의파동",
      "제비반환",
      "속임수",
      "섀도볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 631,
    "Form": "일반",
    "Pokemon_Name": "앤티골",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 2708,
    "ATK": 204.0,
    "DEF": 129.0,
    "HP": 198,
    "Fast_Moves": [
      "핥기",
      "회오리불꽃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "화염방사",
      "번개펀치",
      "그로우펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 632,
    "Form": "일반",
    "Pokemon_Name": "아이앤트",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "강철",
    "Max_CP": 3007,
    "ATK": 217.0,
    "DEF": 188.0,
    "HP": 151,
    "Fast_Moves": [
      "벌레먹기",
      "메탈클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "시저크로스",
      "아이언헤드",
      "스톤에지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 633,
    "Form": "일반",
    "Pokemon_Name": "모노두",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 1200,
    "ATK": 116.0,
    "DEF": 93.0,
    "HP": 141,
    "Fast_Moves": [
      "몸통박치기",
      "용의숨결"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "용의파동",
      "깨물어부수기",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 33,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": "633-S",
    "Form": "그림자",
    "Pokemon_Name": "모노두",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 1200,
    "ATK": 116.0,
    "DEF": 93.0,
    "HP": 141,
    "Fast_Moves": [
      "몸통박치기",
      "용의숨결"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "용의파동",
      "깨물어부수기",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 33,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 634,
    "Form": "일반",
    "Pokemon_Name": "디헤드",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 2079,
    "ATK": 159.0,
    "DEF": 135.0,
    "HP": 176,
    "Fast_Moves": [
      "물기",
      "용의숨결"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "용의파동",
      "악의파동",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 34,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": "634-S",
    "Form": "그림자",
    "Pokemon_Name": "디헤드",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 2079,
    "ATK": 159.0,
    "DEF": 135.0,
    "HP": 176,
    "Fast_Moves": [
      "물기",
      "용의숨결"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "용의파동",
      "악의파동",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 34,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 635,
    "Form": "일반",
    "Pokemon_Name": "삼삼드래",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 4098,
    "ATK": 256.0,
    "DEF": 188.0,
    "HP": 211,
    "Fast_Moves": [
      "물기",
      "용의숨결"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "용의파동",
      "악의파동",
      "러스터캐논"
    ],
    "Elite_Charged_Moves": [
      "세차게휘두르기"
    ],
    "Sprite_Col": 35,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": "635-S",
    "Form": "그림자",
    "Pokemon_Name": "삼삼드래",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 4098,
    "ATK": 256.0,
    "DEF": 188.0,
    "HP": 211,
    "Fast_Moves": [
      "물기",
      "용의숨결"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "용의파동",
      "악의파동",
      "러스터캐논"
    ],
    "Elite_Charged_Moves": [
      "세차게휘두르기"
    ],
    "Sprite_Col": 35,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 636,
    "Form": "일반",
    "Pokemon_Name": "활화르바",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "불꽃",
    "Max_CP": 1692,
    "ATK": 156.0,
    "DEF": 107.0,
    "HP": 146,
    "Fast_Moves": [
      "불꽃세례",
      "벌레먹기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "니트로차지",
      "벌레의야단법석",
      "화염바퀴"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 637,
    "Form": "일반",
    "Pokemon_Name": "불카모스",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "불꽃",
    "Max_CP": 4106,
    "ATK": 264.0,
    "DEF": 189.0,
    "HP": 198,
    "Fast_Moves": [
      "회오리불꽃",
      "벌레먹기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오버히트",
      "벌레의야단법석",
      "솔라빔",
      "폭풍"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 638,
    "Form": "일반",
    "Pokemon_Name": "코바르온",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "격투",
    "Max_CP": 3417,
    "ATK": 192.0,
    "DEF": 229.0,
    "HP": 209,
    "Fast_Moves": [
      "메탈클로",
      "사념의박치기",
      "두번차기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "인파이트",
      "아이언헤드",
      "스톤에지"
    ],
    "Elite_Charged_Moves": [
      "성스러운칼"
    ],
    "Sprite_Col": 38,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 639,
    "Form": "일반",
    "Pokemon_Name": "테라키온",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "격투",
    "Max_CP": 4181,
    "ATK": 260.0,
    "DEF": 192.0,
    "HP": 209,
    "Fast_Moves": [
      "떨어뜨리기",
      "사념의박치기",
      "두번차기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "인파이트",
      "지진",
      "스톤샤워"
    ],
    "Elite_Charged_Moves": [
      "성스러운칼"
    ],
    "Sprite_Col": 39,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 640,
    "Form": "일반",
    "Pokemon_Name": "비리디온",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "격투",
    "Max_CP": 3417,
    "ATK": 192.0,
    "DEF": 229.0,
    "HP": 209,
    "Fast_Moves": [
      "전광석화",
      "사념의박치기",
      "두번차기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "인파이트",
      "리프블레이드",
      "스톤에지"
    ],
    "Elite_Charged_Moves": [
      "성스러운칼"
    ],
    "Sprite_Col": 40,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 641,
    "Form": "일반",
    "Pokemon_Name": "토네로스(화신폼)",
    "Pokemon_Type1": "비행",
    "Pokemon_Type2": "-",
    "Max_CP": 3782,
    "ATK": 266.0,
    "DEF": 164.0,
    "HP": 188,
    "Fast_Moves": [
      "물기",
      "에어슬래시"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "풀묶기",
      "악의파동",
      "파괴광선",
      "폭풍"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 41,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 641,
    "Form": "일반",
    "Pokemon_Name": "토네로스(영물폼)",
    "Pokemon_Type1": "비행",
    "Pokemon_Type2": "-",
    "Max_CP": 3635,
    "ATK": 238.0,
    "DEF": 189.0,
    "HP": 188,
    "Fast_Moves": [
      "놀래키기",
      "바람일으키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "열풍",
      "사이코키네시스",
      "기합구슬",
      "폭풍"
    ],
    "Elite_Charged_Moves": [
      "찬바람폭풍"
    ],
    "Sprite_Col": 42,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": "641-S",
    "Form": "그림자",
    "Pokemon_Name": "토네로스(화신폼)",
    "Pokemon_Type1": "비행",
    "Pokemon_Type2": "-",
    "Max_CP": 3782,
    "ATK": 266.0,
    "DEF": 164.0,
    "HP": 188,
    "Fast_Moves": [
      "물기",
      "에어슬래시"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "풀묶기",
      "악의파동",
      "파괴광선",
      "폭풍"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 41,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 642,
    "Form": "일반",
    "Pokemon_Name": "볼트로스(화신폼)",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "비행",
    "Max_CP": 3782,
    "ATK": 266.0,
    "DEF": 164.0,
    "HP": 188,
    "Fast_Moves": [
      "놀래키기",
      "전기쇼크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "번개",
      "깨트리기",
      "번개펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 43,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 642,
    "Form": "일반",
    "Pokemon_Name": "볼트로스(영물폼)",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "비행",
    "Max_CP": 4137,
    "ATK": 295.0,
    "DEF": 161.0,
    "HP": 188,
    "Fast_Moves": [
      "물기",
      "볼트체인지"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오물웨이브",
      "번개",
      "기합구슬",
      "10만볼트"
    ],
    "Elite_Charged_Moves": [
      "번개폭풍"
    ],
    "Sprite_Col": 44,
    "Sprite_Row": 19
  },
  {
    "Pokemon_ID": 643,
    "Form": "일반",
    "Pokemon_Name": "레시라무",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "불꽃",
    "Max_CP": 4565,
    "ATK": 275.0,
    "DEF": 211.0,
    "HP": 205,
    "Fast_Moves": [
      "용의숨결",
      "불꽃엄니"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "오버히트",
      "용성군",
      "스톤에지"
    ],
    "Elite_Charged_Moves": [
      "크로스플레임"
    ],
    "Sprite_Col": 1,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 644,
    "Form": "일반",
    "Pokemon_Name": "제크로무",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "전기",
    "Max_CP": 4565,
    "ATK": 275.0,
    "DEF": 211.0,
    "HP": 205,
    "Fast_Moves": [
      "용의숨결",
      "차지빔"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "역린",
      "와일드볼트",
      "러스터캐논",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [
      "크로스썬더"
    ],
    "Sprite_Col": 2,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 645,
    "Form": "일반",
    "Pokemon_Name": "랜드로스(화신폼)",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "비행",
    "Max_CP": 4057,
    "ATK": 261.0,
    "DEF": 182.0,
    "HP": 205,
    "Fast_Moves": [
      "머드샷",
      "돌떨구기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "대지의힘",
      "역린",
      "스톤샤워",
      "기합구슬"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 3,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 645,
    "Form": "일반",
    "Pokemon_Name": "랜드로스(영물폼)",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "비행",
    "Max_CP": 4434,
    "ATK": 289.0,
    "DEF": 179.0,
    "HP": 205,
    "Fast_Moves": [
      "머드샷",
      "신통력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "지진",
      "땅고르기",
      "스톤에지",
      "엄청난힘"
    ],
    "Elite_Charged_Moves": [
      "열사의폭풍"
    ],
    "Sprite_Col": 4,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 646,
    "Form": "일반",
    "Pokemon_Name": "큐레무",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "얼음",
    "Max_CP": 4041,
    "ATK": 246.0,
    "DEF": 170.0,
    "HP": 245,
    "Fast_Moves": [
      "용의숨결",
      "강철날개"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "드래곤클로",
      "눈보라",
      "용성군"
    ],
    "Elite_Charged_Moves": [
      "얼어붙은세계"
    ],
    "Sprite_Col": 5,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 646,
    "Form": "일반",
    "Pokemon_Name": "블랙 큐레무",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "얼음",
    "Max_CP": 5206,
    "ATK": 310.0,
    "DEF": 183.0,
    "HP": 245,
    "Fast_Moves": [
      "드래곤테일",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아이언헤드",
      "눈보라",
      "스톤에지",
      "역린",
      "크로스썬더"
    ],
    "Elite_Charged_Moves": [
      "프리즈볼트"
    ],
    "Sprite_Col": 6,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 646,
    "Form": "일반",
    "Pokemon_Name": "화이트 큐레무",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "얼음",
    "Max_CP": 5206,
    "ATK": 310.0,
    "DEF": 183.0,
    "HP": 245,
    "Fast_Moves": [
      "용의숨결",
      "강철날개",
      "얼음엄니"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "용의파동",
      "눈보라",
      "원시의힘",
      "기합구슬",
      "크로스플레임"
    ],
    "Elite_Charged_Moves": [
      "콜드플레어"
    ],
    "Sprite_Col": 7,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 647,
    "Form": "일반",
    "Pokemon_Name": "케르디오",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "격투",
    "Max_CP": 4181,
    "ATK": 260.0,
    "DEF": 192.0,
    "HP": 209,
    "Fast_Moves": [
      "독찌르기",
      "안다리걸기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아제트",
      "인파이트",
      "하이드로펌프",
      "시저크로스",
      "성스러운칼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 8,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 647,
    "Form": "일반",
    "Pokemon_Name": "케르디오(각오의 모습)",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "격투",
    "Max_CP": 4181,
    "ATK": 260.0,
    "DEF": 192.0,
    "HP": 209,
    "Fast_Moves": [
      "독찌르기",
      "안다리걸기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아제트",
      "인파이트",
      "하이드로펌프",
      "시저크로스",
      "성스러운칼"
    ],
    "Elite_Charged_Moves": [
      "신비의칼"
    ],
    "Sprite_Col": 9,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 648,
    "Form": "일반",
    "Pokemon_Name": "메로엣타(보이스폼)",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 4490,
    "ATK": 250.0,
    "DEF": 225.0,
    "HP": 225,
    "Fast_Moves": [
      "전광석화",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코쇼크",
      "10만볼트",
      "매지컬샤인",
      "파괴광선"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 10,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 648,
    "Form": "일반",
    "Pokemon_Name": "메로엣타(스텝폼)",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "격투",
    "Max_CP": 4426,
    "ATK": 269.0,
    "DEF": 188.0,
    "HP": 225,
    "Fast_Moves": [
      "전광석화",
      "안다리걸기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "인파이트",
      "불꽃펀치",
      "냉동펀치",
      "파괴광선"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 649,
    "Form": "일반",
    "Pokemon_Name": "게노세크트",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "강철",
    "Max_CP": 3791,
    "ATK": 252.0,
    "DEF": 199.0,
    "HP": 174,
    "Fast_Moves": [
      "메탈클로",
      "연속자르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "시저크로스",
      "마그넷봄",
      "파괴광선"
    ],
    "Elite_Charged_Moves": [
      "테크노버스터(노말)"
    ],
    "Sprite_Col": 12,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 649,
    "Form": "일반",
    "Pokemon_Name": "게노세크트(블레이즈)",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "강철",
    "Max_CP": 3791,
    "ATK": 252.0,
    "DEF": 199.0,
    "HP": 174,
    "Fast_Moves": [
      "메탈클로",
      "연속자르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "시저크로스",
      "마그넷봄",
      "화염방사"
    ],
    "Elite_Charged_Moves": [
      "테크노버스터(불꽃)"
    ],
    "Sprite_Col": 13,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 649,
    "Form": "일반",
    "Pokemon_Name": "게노세크트(아쿠아)",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "강철",
    "Max_CP": 3791,
    "ATK": 252.0,
    "DEF": 199.0,
    "HP": 174,
    "Fast_Moves": [
      "메탈클로",
      "연속자르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "시저크로스",
      "마그넷봄",
      "더스트슈트"
    ],
    "Elite_Charged_Moves": [
      "테크노버스터(물)"
    ],
    "Sprite_Col": 15,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 649,
    "Form": "일반",
    "Pokemon_Name": "게노세크트(라이트닝)",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "강철",
    "Max_CP": 3791,
    "ATK": 252.0,
    "DEF": 199.0,
    "HP": 174,
    "Fast_Moves": [
      "메탈클로",
      "연속자르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "시저크로스",
      "마그넷봄",
      "전자포"
    ],
    "Elite_Charged_Moves": [
      "테크노버스터(전기)"
    ],
    "Sprite_Col": 16,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 649,
    "Form": "일반",
    "Pokemon_Name": "게노세크트(프리즈)",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "강철",
    "Max_CP": 3791,
    "ATK": 252.0,
    "DEF": 199.0,
    "HP": 174,
    "Fast_Moves": [
      "메탈클로",
      "연속자르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "시저크로스",
      "마그넷봄",
      "냉동빔"
    ],
    "Elite_Charged_Moves": [
      "테크노버스터(얼음)"
    ],
    "Sprite_Col": 14,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 650,
    "Form": "일반",
    "Pokemon_Name": "도치마론",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 1239,
    "ATK": 110.0,
    "DEF": 106.0,
    "HP": 148,
    "Fast_Moves": [
      "돌진",
      "덩굴채찍"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "자이로볼",
      "씨폭탄",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 17,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 651,
    "Form": "일반",
    "Pokemon_Name": "도치보구",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 1943,
    "ATK": 146.0,
    "DEF": 156.0,
    "HP": 156,
    "Fast_Moves": [
      "안다리걸기",
      "덩굴채찍"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "자이로볼",
      "에너지볼",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 18,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 652,
    "Form": "일반",
    "Pokemon_Name": "브리가론",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "격투",
    "Max_CP": 3340,
    "ATK": 201.0,
    "DEF": 204.0,
    "HP": 204,
    "Fast_Moves": [
      "안다리걸기",
      "덩굴채찍",
      "떨어뜨리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "자이로볼",
      "에너지볼",
      "엄청난힘",
      "솔라빔",
      "번개펀치"
    ],
    "Elite_Charged_Moves": [
      "하드플랜트"
    ],
    "Sprite_Col": 19,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 653,
    "Form": "일반",
    "Pokemon_Name": "푸호꼬",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 1162,
    "ATK": 116.0,
    "DEF": 102.0,
    "HP": 120,
    "Fast_Moves": [
      "할퀴기",
      "불꽃세례"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코쇼크",
      "화염방사",
      "니트로차지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 20,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 654,
    "Form": "일반",
    "Pokemon_Name": "테르나",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 2049,
    "ATK": 171.0,
    "DEF": 130.0,
    "HP": 153,
    "Fast_Moves": [
      "할퀴기",
      "불꽃세례"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코쇼크",
      "화염방사",
      "니트로차지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 21,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 655,
    "Form": "일반",
    "Pokemon_Name": "마폭시",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 3459,
    "ATK": 230.0,
    "DEF": 189.0,
    "HP": 181,
    "Fast_Moves": [
      "할퀴기",
      "회오리불꽃",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "화염방사",
      "니트로차지",
      "불대문자",
      "매지컬플레임",
      "사이코쇼크"
    ],
    "Elite_Charged_Moves": [
      "블라스트번"
    ],
    "Sprite_Col": 22,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 656,
    "Form": "일반",
    "Pokemon_Name": "개구마르",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1122,
    "ATK": 122.0,
    "DEF": 84.0,
    "HP": 121,
    "Fast_Moves": [
      "막치기",
      "거품"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "물의파동",
      "제비반환",
      "파도타기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 23,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 657,
    "Form": "일반",
    "Pokemon_Name": "개굴반장",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1850,
    "ATK": 168.0,
    "DEF": 114.0,
    "HP": 144,
    "Fast_Moves": [
      "막치기",
      "거품"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "물의파동",
      "제비반환",
      "파도타기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 658,
    "Form": "일반",
    "Pokemon_Name": "개굴닌자",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "악",
    "Max_CP": 3001,
    "ATK": 223.0,
    "DEF": 152.0,
    "HP": 176,
    "Fast_Moves": [
      "속여때리기",
      "거품",
      "물수리검"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깜짝베기",
      "제비반환",
      "파도타기",
      "하이드로펌프"
    ],
    "Elite_Charged_Moves": [
      "하이드로캐논"
    ],
    "Sprite_Col": 25,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 659,
    "Form": "일반",
    "Pokemon_Name": "파르빗",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 625,
    "ATK": 68.0,
    "DEF": 72.0,
    "HP": 116,
    "Fast_Moves": [
      "진흙뿌리기",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "땅고르기",
      "지진"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 27,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": "659-S",
    "Form": "그림자",
    "Pokemon_Name": "파르빗",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 625,
    "ATK": 68.0,
    "DEF": 72.0,
    "HP": 116,
    "Fast_Moves": [
      "진흙뿌리기",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "땅고르기",
      "지진"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 27,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 660,
    "Form": "일반",
    "Pokemon_Name": "파르토",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "땅",
    "Max_CP": 1706,
    "ATK": 112.0,
    "DEF": 155.0,
    "HP": 198,
    "Fast_Moves": [
      "머드샷",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "파괴광선",
      "지진",
      "불꽃펀치",
      "열사의대지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 28,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": "660-S",
    "Form": "그림자",
    "Pokemon_Name": "파르토",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "땅",
    "Max_CP": 1706,
    "ATK": 112.00000000000001,
    "DEF": 155.00000000000003,
    "HP": 198,
    "Fast_Moves": [
      "머드샷",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "파괴광선",
      "지진",
      "불꽃펀치",
      "열사의대지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 28,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 661,
    "Form": "일반",
    "Pokemon_Name": "화살꼬빈",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 905,
    "ATK": 95.0,
    "DEF": 80.0,
    "HP": 128,
    "Fast_Moves": [
      "쪼기",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "제비반환",
      "열풍",
      "스피드스타",
      "공중날기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 29,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": "661-S",
    "Form": "그림자",
    "Pokemon_Name": "화살꼬빈",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 905,
    "ATK": 95.0,
    "DEF": 80.0,
    "HP": 128,
    "Fast_Moves": [
      "쪼기",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "제비반환",
      "열풍",
      "스피드스타",
      "공중날기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 29,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 662,
    "Form": "일반",
    "Pokemon_Name": "불화살빈",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "비행",
    "Max_CP": 1661,
    "ATK": 145.0,
    "DEF": 110.0,
    "HP": 158,
    "Fast_Moves": [
      "쪼기",
      "불꽃세례",
      "강철날개"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "제비반환",
      "열풍",
      "니트로차지",
      "공중날기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": "662-S",
    "Form": "그림자",
    "Pokemon_Name": "불화살빈",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "비행",
    "Max_CP": 1661,
    "ATK": 145.0,
    "DEF": 110.0,
    "HP": 158,
    "Fast_Moves": [
      "쪼기",
      "불꽃세례",
      "강철날개"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "제비반환",
      "열풍",
      "니트로차지",
      "공중날기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 663,
    "Form": "일반",
    "Pokemon_Name": "파이어로",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "비행",
    "Max_CP": 2493,
    "ATK": 176.0,
    "DEF": 155.0,
    "HP": 186,
    "Fast_Moves": [
      "쪼기",
      "회오리불꽃",
      "강철날개"
    ],
    "Elite_Fast_Moves": [
      "불태우기"
    ],
    "Charged_Moves": [
      "브레이브버드",
      "불대문자",
      "니트로차지",
      "폭풍",
      "공중날기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": "663-S",
    "Form": "그림자",
    "Pokemon_Name": "파이어로",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "비행",
    "Max_CP": 2493,
    "ATK": 176.0,
    "DEF": 155.00000000000003,
    "HP": 186,
    "Fast_Moves": [
      "쪼기",
      "회오리불꽃",
      "강철날개"
    ],
    "Elite_Fast_Moves": [
      "불태우기"
    ],
    "Charged_Moves": [
      "브레이브버드",
      "불대문자",
      "니트로차지",
      "폭풍",
      "공중날기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 664,
    "Form": "일반",
    "Pokemon_Name": "분이벌레",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 556,
    "ATK": 63.0,
    "DEF": 63.0,
    "HP": 116,
    "Fast_Moves": [
      "벌레먹기",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 665,
    "Form": "일반",
    "Pokemon_Name": "분떠도리",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 542,
    "ATK": 48.0,
    "DEF": 89.0,
    "HP": 128,
    "Fast_Moves": [
      "벌레의저항"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 33,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 666,
    "Form": "일반",
    "Pokemon_Name": "비비용",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "비행",
    "Max_CP": 2097,
    "ATK": 176.0,
    "DEF": 103.0,
    "HP": 190,
    "Fast_Moves": [
      "바람일으키기",
      "벌레의저항"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "벌레의야단법석",
      "제비반환",
      "에너지볼",
      "폭풍"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 34,
    "Sprite_Row": 20
  },
  {
    "Pokemon_ID": 667,
    "Form": "일반",
    "Pokemon_Name": "레오꼬",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "노말",
    "Max_CP": 1611,
    "ATK": 139.0,
    "DEF": 112.0,
    "HP": 158,
    "Fast_Moves": [
      "불꽃엄니",
      "몸통박치기",
      "불꽃세례",
      "불태우기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "니트로차지",
      "화염방사",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 10,
    "Sprite_Row": 21
  },
  {
    "Pokemon_ID": 668,
    "Form": "일반",
    "Pokemon_Name": "화염레오",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "노말",
    "Max_CP": 3129,
    "ATK": 221.0,
    "DEF": 149.0,
    "HP": 200,
    "Fast_Moves": [
      "불꽃엄니",
      "돌진",
      "불꽃세례",
      "불태우기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "니트로차지",
      "솔라빔",
      "악의파동",
      "오버히트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 21
  },
  {
    "Pokemon_ID": 669,
    "Form": "일반",
    "Pokemon_Name": "플라베베",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "-",
    "Max_CP": 1202,
    "ATK": 108.0,
    "DEF": 120.0,
    "HP": 127,
    "Fast_Moves": [
      "덩굴채찍",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "매지컬샤인",
      "꽃보라",
      "사이코키네시스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 14,
    "Sprite_Row": 21
  },
  {
    "Pokemon_ID": 670,
    "Form": "일반",
    "Pokemon_Name": "플라엣테",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "-",
    "Max_CP": 1732,
    "ATK": 136.0,
    "DEF": 151.0,
    "HP": 144,
    "Fast_Moves": [
      "덩굴채찍",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "매지컬샤인",
      "꽃보라",
      "사이코키네시스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 19,
    "Sprite_Row": 21
  },
  {
    "Pokemon_ID": 671,
    "Form": "일반",
    "Pokemon_Name": "플라제스",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "-",
    "Max_CP": 3657,
    "ATK": 212.0,
    "DEF": 244.0,
    "HP": 186,
    "Fast_Moves": [
      "덩굴채찍",
      "몸통박치기",
      "잎날가르기",
      "요정의바람"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "문포스",
      "꽃보라",
      "사이코키네시스",
      "차밍보이스",
      "개척하기"
    ],
    "Elite_Charged_Moves": [
      "찬물끼얹기"
    ],
    "Sprite_Col": 25,
    "Sprite_Row": 21
  },
  {
    "Pokemon_ID": 672,
    "Form": "일반",
    "Pokemon_Name": "메이클",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 1414,
    "ATK": 123.0,
    "DEF": 102.0,
    "HP": 165,
    "Fast_Moves": [
      "사념의박치기",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨트리기",
      "씨폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 29,
    "Sprite_Row": 21
  },
  {
    "Pokemon_ID": 673,
    "Form": "일반",
    "Pokemon_Name": "고고트",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 3163,
    "ATK": 196.0,
    "DEF": 146.0,
    "HP": 265,
    "Fast_Moves": [
      "사념의박치기",
      "바위깨기",
      "덩굴채찍"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨트리기",
      "리프블레이드",
      "씨폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 21
  },
  {
    "Pokemon_ID": 674,
    "Form": "일반",
    "Pokemon_Name": "판짱",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 1683,
    "ATK": 145.0,
    "DEF": 107.0,
    "HP": 167,
    "Fast_Moves": [
      "안다리걸기",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "로킥",
      "깨물어부수기",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 21
  },
  {
    "Pokemon_ID": 675,
    "Form": "일반",
    "Pokemon_Name": "부란다",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "악",
    "Max_CP": 3281,
    "ATK": 226.0,
    "DEF": 146.0,
    "HP": 216,
    "Fast_Moves": [
      "안다리걸기",
      "바크아웃",
      "불릿펀치",
      "태권당수"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "인파이트",
      "깜짝베기",
      "아이언헤드",
      "스톤샤워"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 21
  },
  {
    "Pokemon_ID": 676,
    "Form": "일반",
    "Pokemon_Name": "트리미앙",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 2387,
    "ATK": 164.0,
    "DEF": 167.0,
    "HP": 181,
    "Fast_Moves": [
      "돌진",
      "물기",
      "기습",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파도타기",
      "악의파동",
      "풀묶기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 33,
    "Sprite_Row": 21
  },
  {
    "Pokemon_ID": 677,
    "Form": "일반",
    "Pokemon_Name": "냐스퍼",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 1424,
    "ATK": 120.0,
    "DEF": 114.0,
    "HP": 158,
    "Fast_Moves": [
      "염동력",
      "할퀴기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코쇼크",
      "에너지볼",
      "사이코키네시스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 43,
    "Sprite_Row": 21
  },
  {
    "Pokemon_ID": 678,
    "Form": "일반",
    "Pokemon_Name": "냐오닉스",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 2401,
    "ATK": 166.0,
    "DEF": 167.0,
    "HP": 179,
    "Fast_Moves": [
      "염동력",
      "기습"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "에너지볼",
      "10만볼트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 44,
    "Sprite_Row": 21
  },
  {
    "Pokemon_ID": 679,
    "Form": "일반",
    "Pokemon_Name": "단칼빙",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "고스트",
    "Max_CP": 1571,
    "ATK": 135.0,
    "DEF": 139.0,
    "HP": 128,
    "Fast_Moves": [
      "사이코커터",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아이언헤드",
      "자이로볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 2,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 680,
    "Form": "일반",
    "Pokemon_Name": "쌍검킬",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "고스트",
    "Max_CP": 2761,
    "ATK": 188.0,
    "DEF": 206.0,
    "HP": 153,
    "Fast_Moves": [
      "사이코커터",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아이언헤드",
      "자이로볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 3,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 681,
    "Form": "일반",
    "Pokemon_Name": "킬가르도(쉴드폼)",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "고스트",
    "Max_CP": 1746,
    "ATK": 97.0,
    "DEF": 272.0,
    "HP": 155,
    "Fast_Moves": [
      "사이코커터",
      "에어슬래시"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "러스터캐논",
      "자이로볼",
      "섀도볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 681,
    "Form": "일반",
    "Pokemon_Name": "킬가르도(소드폼)",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "고스트",
    "Max_CP": 2796,
    "ATK": 272.0,
    "DEF": 97.0,
    "HP": 155,
    "Fast_Moves": [
      "사이코커터",
      "에어슬래시"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "러스터캐논",
      "자이로볼",
      "섀도볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 5,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 682,
    "Form": "일반",
    "Pokemon_Name": "슈쁘",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "-",
    "Max_CP": 1415,
    "ATK": 110.0,
    "DEF": 113.0,
    "HP": 186,
    "Fast_Moves": [
      "애교부리기",
      "차지빔"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "드레인키스",
      "10만볼트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 6,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 683,
    "Form": "일반",
    "Pokemon_Name": "프레프티르",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "-",
    "Max_CP": 2647,
    "ATK": 173.0,
    "DEF": 150.0,
    "HP": 226,
    "Fast_Moves": [
      "애교부리기",
      "차지빔"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "문포스",
      "10만볼트",
      "사이코키네시스",
      "드레인키스",
      "사이코쇼크"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 684,
    "Form": "일반",
    "Pokemon_Name": "나룸퍼프",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "-",
    "Max_CP": 1333,
    "ATK": 109.0,
    "DEF": 119.0,
    "HP": 158,
    "Fast_Moves": [
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "드레인키스",
      "에너지볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 8,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 685,
    "Form": "일반",
    "Pokemon_Name": "나루림",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "-",
    "Max_CP": 2486,
    "ATK": 168.0,
    "DEF": 163.0,
    "HP": 193,
    "Fast_Moves": [
      "몸통박치기",
      "애교부리기",
      "요정의바람"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "치근거리기",
      "에너지볼",
      "화염방사",
      "드레인키스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 9,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 686,
    "Form": "일반",
    "Pokemon_Name": "오케이징",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 1048,
    "ATK": 98.0,
    "DEF": 95.0,
    "HP": 142,
    "Fast_Moves": [
      "쪼기",
      "몸통박치기",
      "사이코웨이브"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "환상빔",
      "깜짝베기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 10,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": "686-S",
    "Form": "그림자",
    "Pokemon_Name": "오케이징",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 1048,
    "ATK": 98.0,
    "DEF": 95.0,
    "HP": 142,
    "Fast_Moves": [
      "쪼기",
      "몸통박치기",
      "사이코웨이브"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "환상빔",
      "깜짝베기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 10,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 687,
    "Form": "일반",
    "Pokemon_Name": "칼라마네로",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 2667,
    "ATK": 177.0,
    "DEF": 165.0,
    "HP": 200,
    "Fast_Moves": [
      "쪼기",
      "사이코커터",
      "사이코웨이브"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "환상빔",
      "속임수",
      "엄청난힘",
      "파괴광선"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": "687-S",
    "Form": "그림자",
    "Pokemon_Name": "칼라마네로",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 2667,
    "ATK": 177.0,
    "DEF": 165.0,
    "HP": 200,
    "Fast_Moves": [
      "쪼기",
      "사이코커터",
      "사이코웨이브"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "환상빔",
      "속임수",
      "엄청난힘",
      "파괴광선"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 688,
    "Form": "일반",
    "Pokemon_Name": "거북손손",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "물",
    "Max_CP": 1069,
    "ATK": 96.0,
    "DEF": 120.0,
    "HP": 123,
    "Fast_Moves": [
      "할퀴기",
      "진흙뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "원시의힘",
      "크로스촙",
      "구멍파기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 12,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 689,
    "Form": "일반",
    "Pokemon_Name": "거북손데스",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "물",
    "Max_CP": 3025,
    "ATK": 194.0,
    "DEF": 205.0,
    "HP": 176,
    "Fast_Moves": [
      "물대포",
      "진흙뿌리기",
      "연속자르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "로케트박치기",
      "크로스촙",
      "스톤에지",
      "풀묶기",
      "셸블레이드"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 690,
    "Form": "일반",
    "Pokemon_Name": "수레기",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "물",
    "Max_CP": 1202,
    "ATK": 109.0,
    "DEF": 109.0,
    "HP": 137,
    "Fast_Moves": [
      "물대포",
      "용해액"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아테일",
      "물의파동",
      "회오리",
      "오물폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 14,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 691,
    "Form": "일반",
    "Pokemon_Name": "드래캄",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 2694,
    "ATK": 177.0,
    "DEF": 207.0,
    "HP": 163,
    "Fast_Moves": [
      "물대포",
      "용해액",
      "드래곤테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "하이드로펌프",
      "아쿠아테일",
      "역린",
      "더스트슈트",
      "기합구슬",
      "오물폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 15,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 692,
    "Form": "일반",
    "Pokemon_Name": "완철포",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1230,
    "ATK": 108.0,
    "DEF": 117.0,
    "HP": 137,
    "Fast_Moves": [
      "물대포",
      "떨어뜨리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "물의파동",
      "집게해머",
      "아쿠아제트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 16,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 693,
    "Form": "일반",
    "Pokemon_Name": "블로스터",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 3124,
    "ATK": 221.0,
    "DEF": 171.0,
    "HP": 174,
    "Fast_Moves": [
      "물대포",
      "떨어뜨리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "물의파동",
      "악의파동",
      "냉동빔",
      "집게해머"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 17,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 694,
    "Form": "일반",
    "Pokemon_Name": "목도리키텔",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "노말",
    "Max_CP": 1054,
    "ATK": 115.0,
    "DEF": 78.0,
    "HP": 127,
    "Fast_Moves": [
      "전광석화",
      "전기쇼크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파라볼라차지",
      "땅고르기",
      "10만볼트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 18,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 695,
    "Form": "일반",
    "Pokemon_Name": "일레도리자드",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "노말",
    "Max_CP": 2939,
    "ATK": 219.0,
    "DEF": 168.0,
    "HP": 158,
    "Fast_Moves": [
      "전광석화",
      "볼트체인지",
      "진흙뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파라볼라차지",
      "땅고르기",
      "10만볼트",
      "풀묶기",
      "와이드브레이커"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 19,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 696,
    "Form": "일반",
    "Pokemon_Name": "티고라스",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 1848,
    "ATK": 158.0,
    "DEF": 123.0,
    "HP": 151,
    "Fast_Moves": [
      "드래곤테일",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "짓밟기",
      "원시의힘",
      "드래곤클로",
      "암석봉인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 20,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": "696-S",
    "Form": "그림자",
    "Pokemon_Name": "티고라스",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 1848,
    "ATK": 158.0,
    "DEF": 123.0,
    "HP": 151,
    "Fast_Moves": [
      "드래곤테일",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "짓밟기",
      "원시의힘",
      "드래곤클로",
      "암석봉인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 20,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 697,
    "Form": "일반",
    "Pokemon_Name": "견고라스",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 3537,
    "ATK": 227.0,
    "DEF": 191.0,
    "HP": 193,
    "Fast_Moves": [
      "드래곤테일",
      "애교부리기",
      "돌떨구기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "스톤에지",
      "역린",
      "지진",
      "메테오빔",
      "암석봉인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 21,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": "697-S",
    "Form": "그림자",
    "Pokemon_Name": "견고라스",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 3537,
    "ATK": 227.0,
    "DEF": 191.0,
    "HP": 193,
    "Fast_Moves": [
      "드래곤테일",
      "애교부리기",
      "돌떨구기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "스톤에지",
      "역린",
      "지진",
      "메테오빔",
      "암석봉인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 21,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 698,
    "Form": "일반",
    "Pokemon_Name": "아마루스",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "얼음",
    "Max_CP": 1541,
    "ATK": 124.0,
    "DEF": 109.0,
    "HP": 184,
    "Fast_Moves": [
      "눈싸라기",
      "얼음숨결"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "웨더볼(얼음)",
      "원시의힘",
      "오로라빔",
      "10만볼트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 22,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": "698-S",
    "Form": "그림자",
    "Pokemon_Name": "아마루스",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "얼음",
    "Max_CP": 1541,
    "ATK": 123.99999999999999,
    "DEF": 109.0,
    "HP": 184,
    "Fast_Moves": [
      "눈싸라기",
      "얼음숨결"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "웨더볼(얼음)",
      "원시의힘",
      "오로라빔",
      "10만볼트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 22,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 699,
    "Form": "일반",
    "Pokemon_Name": "아마루르가",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "얼음",
    "Max_CP": 3168,
    "ATK": 186.0,
    "DEF": 163.0,
    "HP": 265,
    "Fast_Moves": [
      "눈싸라기",
      "얼음숨결",
      "돌떨구기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "웨더볼(얼음)",
      "원시의힘",
      "눈보라",
      "10만볼트",
      "파괴광선",
      "메테오빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 23,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": "699-S",
    "Form": "그림자",
    "Pokemon_Name": "아마루르가",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "얼음",
    "Max_CP": 3168,
    "ATK": 186.0,
    "DEF": 163.0,
    "HP": 265,
    "Fast_Moves": [
      "눈싸라기",
      "얼음숨결",
      "돌떨구기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "웨더볼(얼음)",
      "원시의힘",
      "눈보라",
      "10만볼트",
      "파괴광선",
      "메테오빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 23,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 700,
    "Form": "일반",
    "Pokemon_Name": "님피아",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "-",
    "Max_CP": 3470,
    "ATK": 203.0,
    "DEF": 205.0,
    "HP": 216,
    "Fast_Moves": [
      "애교부리기",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "문포스",
      "매지컬샤인",
      "드레인키스"
    ],
    "Elite_Charged_Moves": [
      "비장의무기",
      "사이코쇼크"
    ],
    "Sprite_Col": 24,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 701,
    "Form": "일반",
    "Pokemon_Name": "루차불",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "비행",
    "Max_CP": 2724,
    "ATK": 195.0,
    "DEF": 153.0,
    "HP": 186,
    "Fast_Moves": [
      "안다리걸기",
      "독찌르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "플라잉프레스",
      "제비반환",
      "시저크로스",
      "그로우펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 25,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 702,
    "Form": "일반",
    "Pokemon_Name": "데덴네",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "페어리",
    "Max_CP": 2081,
    "ATK": 164.0,
    "DEF": 134.0,
    "HP": 167,
    "Fast_Moves": [
      "몸통박치기",
      "전기쇼크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "방전",
      "치근거리기",
      "파라볼라차지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 26,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 703,
    "Form": "일반",
    "Pokemon_Name": "멜리시",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "페어리",
    "Max_CP": 1658,
    "ATK": 95.0,
    "DEF": 285.0,
    "HP": 137,
    "Fast_Moves": [
      "몸통박치기",
      "돌떨구기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤샤워",
      "문포스",
      "파워젬"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 27,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 704,
    "Form": "일반",
    "Pokemon_Name": "미끄메라",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "-",
    "Max_CP": 1103,
    "ATK": 101.0,
    "DEF": 112.0,
    "HP": 128,
    "Fast_Moves": [
      "물대포",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "용의파동",
      "오물웨이브",
      "탁류"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 28,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 705,
    "Form": "일반",
    "Pokemon_Name": "미끄네일",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "-",
    "Max_CP": 2303,
    "ATK": 159.0,
    "DEF": 176.0,
    "HP": 169,
    "Fast_Moves": [
      "물대포",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "용의파동",
      "오물웨이브",
      "탁류",
      "물의파동"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 29,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 706,
    "Form": "일반",
    "Pokemon_Name": "미끄래곤",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "-",
    "Max_CP": 3963,
    "ATK": 220.0,
    "DEF": 242.0,
    "HP": 207,
    "Fast_Moves": [
      "물대포",
      "용의숨결"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "용성군",
      "오물웨이브",
      "탁류",
      "파워휩",
      "아쿠아테일"
    ],
    "Elite_Charged_Moves": [
      "번개펀치"
    ],
    "Sprite_Col": 31,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 707,
    "Form": "일반",
    "Pokemon_Name": "클레피",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "페어리",
    "Max_CP": 2204,
    "ATK": 160.0,
    "DEF": 179.0,
    "HP": 149,
    "Fast_Moves": [
      "놀래키기",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "러스터캐논",
      "치근거리기",
      "드레인키스",
      "속임수"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 33,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 708,
    "Form": "일반",
    "Pokemon_Name": "나목령",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "풀",
    "Max_CP": 1270,
    "ATK": 125.0,
    "DEF": 103.0,
    "HP": 125,
    "Fast_Moves": [
      "놀래키기",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "씨폭탄",
      "섀도볼",
      "속임수"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 34,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": "708-S",
    "Form": "그림자",
    "Pokemon_Name": "나목령",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "풀",
    "Max_CP": 1270,
    "ATK": 125.0,
    "DEF": 103.0,
    "HP": 125,
    "Fast_Moves": [
      "놀래키기",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "씨폭탄",
      "섀도볼",
      "속임수"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 34,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 709,
    "Form": "일반",
    "Pokemon_Name": "대로트",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "풀",
    "Max_CP": 2893,
    "ATK": 201.0,
    "DEF": 154.0,
    "HP": 198,
    "Fast_Moves": [
      "섀도클로",
      "기습"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "씨폭탄",
      "섀도볼",
      "속임수"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 35,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": "709-S",
    "Form": "그림자",
    "Pokemon_Name": "대로트",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "풀",
    "Max_CP": 2893,
    "ATK": 201.0,
    "DEF": 154.0,
    "HP": 198,
    "Fast_Moves": [
      "섀도클로",
      "기습"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "씨폭탄",
      "섀도볼",
      "속임수"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 35,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 710,
    "Form": "일반",
    "Pokemon_Name": "호바귀(평균 사이즈)",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "풀",
    "Max_CP": 1381,
    "ATK": 121.0,
    "DEF": 123.0,
    "HP": 135,
    "Fast_Moves": [
      "놀래키기",
      "잎날가르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "풀묶기",
      "야습",
      "속임수"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 710,
    "Form": "일반",
    "Pokemon_Name": "호바귀(큰 사이즈)",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "풀",
    "Max_CP": 1406,
    "ATK": 120.0,
    "DEF": 122.0,
    "HP": 144,
    "Fast_Moves": [
      "놀래키기",
      "잎날가르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "풀묶기",
      "야습",
      "속임수"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 710,
    "Form": "일반",
    "Pokemon_Name": "호바귀(작은 사이즈)",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "풀",
    "Max_CP": 1359,
    "ATK": 122.0,
    "DEF": 124.0,
    "HP": 127,
    "Fast_Moves": [
      "놀래키기",
      "잎날가르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "풀묶기",
      "야습",
      "속임수"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 710,
    "Form": "일반",
    "Pokemon_Name": "호바귀(슈퍼 사이즈)",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "풀",
    "Max_CP": 1414,
    "ATK": 118.0,
    "DEF": 120.0,
    "HP": 153,
    "Fast_Moves": [
      "놀래키기",
      "잎날가르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "풀묶기",
      "야습",
      "속임수"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 711,
    "Form": "일반",
    "Pokemon_Name": "펌킨인(평균 사이즈)",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "풀",
    "Max_CP": 2702,
    "ATK": 175.0,
    "DEF": 213.0,
    "HP": 163,
    "Fast_Moves": [
      "병상첨병",
      "잎날가르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "씨폭탄",
      "섀도볼",
      "속임수",
      "불대문자",
      "폴터가이스트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 711,
    "Form": "일반",
    "Pokemon_Name": "펌킨인(큰 사이즈)",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "풀",
    "Max_CP": 2850,
    "ATK": 179.0,
    "DEF": 206.0,
    "HP": 181,
    "Fast_Moves": [
      "병상첨병",
      "잎날가르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "씨폭탄",
      "섀도볼",
      "속임수",
      "불대문자",
      "폴터가이스트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 711,
    "Form": "일반",
    "Pokemon_Name": "펌킨인(작은 사이즈)",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "풀",
    "Max_CP": 2549,
    "ATK": 171.0,
    "DEF": 219.0,
    "HP": 146,
    "Fast_Moves": [
      "병상첨병",
      "잎날가르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "씨폭탄",
      "섀도볼",
      "속임수",
      "불대문자",
      "폴터가이스트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 711,
    "Form": "일반",
    "Pokemon_Name": "펌킨인(슈퍼 사이즈)",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "풀",
    "Max_CP": 2976,
    "ATK": 182.0,
    "DEF": 200.0,
    "HP": 198,
    "Fast_Moves": [
      "병상첨병",
      "잎날가르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "씨폭탄",
      "섀도볼",
      "속임수",
      "불대문자",
      "폴터가이스트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 712,
    "Form": "일반",
    "Pokemon_Name": "꽁어름",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "-",
    "Max_CP": 1374,
    "ATK": 117.0,
    "DEF": 120.0,
    "HP": 146,
    "Fast_Moves": [
      "물기",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "얼어붙은바람",
      "미러코트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 38,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 713,
    "Form": "일반",
    "Pokemon_Name": "크레베이스",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "-",
    "Max_CP": 3615,
    "ATK": 196.0,
    "DEF": 240.0,
    "HP": 216,
    "Fast_Moves": [
      "물기",
      "얼음엄니"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "눈사태",
      "지진",
      "누르기",
      "미러코트",
      "얼어붙은바람"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 39,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": "713-4",
    "Form": "일반",
    "Pokemon_Name": "히스이크레베이스",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "바위",
    "Max_CP": 3909,
    "ATK": 214.0,
    "DEF": 238.0,
    "HP": 216,
    "Fast_Moves": [
      "물기",
      "몸통박치기",
      "눈싸라기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "스톤샤워",
      "눈보라",
      "얼어붙은바람"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 40,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 714,
    "Form": "일반",
    "Pokemon_Name": "음뱃",
    "Pokemon_Type1": "비행",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 754,
    "ATK": 83.0,
    "DEF": 73.0,
    "HP": 120,
    "Fast_Moves": [
      "날개치기",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "용의파동",
      "에어커터",
      "열풍"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 41,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 715,
    "Form": "일반",
    "Pokemon_Name": "음번",
    "Pokemon_Type1": "비행",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 3125,
    "ATK": 205.0,
    "DEF": 175.0,
    "HP": 198,
    "Fast_Moves": [
      "에어슬래시",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "용성군",
      "폭풍",
      "열풍",
      "사이코키네시스"
    ],
    "Elite_Charged_Moves": [
      "폭음파"
    ],
    "Sprite_Col": 42,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 716,
    "Form": "일반",
    "Pokemon_Name": "제르네아스",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "-",
    "Max_CP": 4275,
    "ATK": 250.0,
    "DEF": 185.0,
    "HP": 246,
    "Fast_Moves": [
      "몸통박치기",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [
      "지오컨트롤"
    ],
    "Charged_Moves": [
      "문포스",
      "메가혼",
      "인파이트",
      "기가임팩트",
      "번개"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 44,
    "Sprite_Row": 22
  },
  {
    "Pokemon_ID": 717,
    "Form": "일반",
    "Pokemon_Name": "이벨타르",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "비행",
    "Max_CP": 4275,
    "ATK": 250.0,
    "DEF": 185.0,
    "HP": 246,
    "Fast_Moves": [
      "기습",
      "바크아웃",
      "바람일으키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "악의파동",
      "폭풍",
      "기합구슬",
      "파괴광선",
      "사이코키네시스"
    ],
    "Elite_Charged_Moves": [
      "데스윙"
    ],
    "Sprite_Col": 1,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 718,
    "Form": "일반",
    "Pokemon_Name": "지가르데(퍼펙트폼)",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "땅",
    "Max_CP": 4208,
    "ATK": 184.0,
    "DEF": 207.0,
    "HP": 389,
    "Fast_Moves": [
      "드래곤테일",
      "물기",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "역린",
      "지진",
      "깨물어부수기",
      "파괴광선",
      "땅고르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 718,
    "Form": "일반",
    "Pokemon_Name": "지가르데(50%)",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "땅",
    "Max_CP": 3855,
    "ATK": 203.0,
    "DEF": 232.0,
    "HP": 239,
    "Fast_Moves": [
      "드래곤테일",
      "물기",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "역린",
      "지진",
      "깨물어부수기",
      "파괴광선",
      "땅고르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 2,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 718,
    "Form": "일반",
    "Pokemon_Name": "지가르데(10%)",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "땅",
    "Max_CP": 2685,
    "ATK": 205.0,
    "DEF": 173.0,
    "HP": 144,
    "Fast_Moves": [
      "드래곤테일",
      "물기",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "역린",
      "지진",
      "깨물어부수기",
      "파괴광선",
      "땅고르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 3,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 719,
    "Form": "일반",
    "Pokemon_Name": "디안시",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "페어리",
    "Max_CP": 3091,
    "ATK": 190.0,
    "DEF": 285.0,
    "HP": 137,
    "Fast_Moves": [
      "몸통박치기",
      "돌떨구기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤샤워",
      "문포스",
      "파워젬"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 5,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": "719-M1",
    "Form": "메가",
    "Pokemon_Name": "디안시",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "페어리",
    "Max_CP": 4913,
    "ATK": 342.0,
    "DEF": 235.0,
    "HP": 137,
    "Fast_Moves": [
      "몸통박치기",
      "돌떨구기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤샤워",
      "문포스",
      "파워젬"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 6,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 720,
    "Form": "일반",
    "Pokemon_Name": "굴레에 빠진 후파",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "고스트",
    "Max_CP": 3797,
    "ATK": 261.0,
    "DEF": 187.0,
    "HP": 173,
    "Fast_Moves": [
      "염동력",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도볼",
      "환상빔",
      "사이코키네시스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 720,
    "Form": "일반",
    "Pokemon_Name": "굴레를 벗어난 후파",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "악",
    "Max_CP": 4530,
    "ATK": 311.0,
    "DEF": 191.0,
    "HP": 173,
    "Fast_Moves": [
      "염동력",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도볼",
      "악의파동",
      "사이코키네시스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 8,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 721,
    "Form": "일반",
    "Pokemon_Name": "볼케니온",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "물",
    "Max_CP": 4102,
    "ATK": 252.0,
    "DEF": 216.0,
    "HP": 190,
    "Fast_Moves": [
      "불태우기",
      "물대포",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "하이드로펌프",
      "오버히트",
      "대지의힘",
      "오물폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 9,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 722,
    "Form": "일반",
    "Pokemon_Name": "나몰빼미",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "비행",
    "Max_CP": 1196,
    "ATK": 102.0,
    "DEF": 99.0,
    "HP": 169,
    "Fast_Moves": [
      "몸통박치기",
      "잎날가르기",
      "나뭇잎",
      "메지컬리프"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "씨폭탄",
      "에너지볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 10,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 723,
    "Form": "일반",
    "Pokemon_Name": "빼미스로우",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "비행",
    "Max_CP": 1950,
    "ATK": 142.0,
    "DEF": 139.0,
    "HP": 186,
    "Fast_Moves": [
      "쪼기",
      "잎날가르기",
      "나뭇잎",
      "메지컬리프"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "씨폭탄",
      "에너지볼",
      "브레이브버드"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 724,
    "Form": "일반",
    "Pokemon_Name": "모크나이퍼",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "고스트",
    "Max_CP": 3137,
    "ATK": 210.0,
    "DEF": 179.0,
    "HP": 186,
    "Fast_Moves": [
      "놀래키기",
      "잎날가르기",
      "나뭇잎",
      "메지컬리프"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "야습",
      "에너지볼",
      "브레이브버드",
      "그림자꿰메기"
    ],
    "Elite_Charged_Moves": [
      "하드플랜트"
    ],
    "Sprite_Col": 12,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": "724-4",
    "Form": "일반",
    "Pokemon_Name": "히스이모크나이퍼",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "격투",
    "Max_CP": 3275,
    "ATK": 213.0,
    "DEF": 174.0,
    "HP": 204,
    "Fast_Moves": [
      "메지컬리프",
      "사이코커터"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "개척하기",
      "에너지볼",
      "파동탄",
      "제비반환",
      "나이트헤드"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 725,
    "Form": "일반",
    "Pokemon_Name": "냐오불",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 1170,
    "ATK": 128.0,
    "DEF": 79.0,
    "HP": 128,
    "Fast_Moves": [
      "할퀴기",
      "불꽃세례"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "화염방사",
      "니트로차지",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 14,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 726,
    "Form": "일반",
    "Pokemon_Name": "냐오히트",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 1934,
    "ATK": 174.0,
    "DEF": 103.0,
    "HP": 163,
    "Fast_Moves": [
      "물기",
      "불꽃세례"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "화염방사",
      "니트로차지",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 15,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 727,
    "Form": "일반",
    "Pokemon_Name": "어흥염",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "악",
    "Max_CP": 3387,
    "ATK": 214.0,
    "DEF": 175.0,
    "HP": 216,
    "Fast_Moves": [
      "바크아웃",
      "불꽃엄니",
      "두번차기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "불대문자",
      "니트로차지",
      "악의파동",
      "블레이즈킥",
      "DD래리어트",
      "세차게휘두르기",
      "드레인펀치"
    ],
    "Elite_Charged_Moves": [
      "블라스트번"
    ],
    "Sprite_Col": 16,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 728,
    "Form": "일반",
    "Pokemon_Name": "누리공",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1276,
    "ATK": 120.0,
    "DEF": 103.0,
    "HP": 137,
    "Fast_Moves": [
      "막치기",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아제트",
      "물의파동",
      "아쿠아테일"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 17,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 729,
    "Form": "일반",
    "Pokemon_Name": "키요공",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 2131,
    "ATK": 168.0,
    "DEF": 145.0,
    "HP": 155,
    "Fast_Moves": [
      "애교부리기",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아제트",
      "물의파동",
      "차밍보이스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 18,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 730,
    "Form": "일반",
    "Pokemon_Name": "누리레느",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "페어리",
    "Max_CP": 3618,
    "ATK": 232.0,
    "DEF": 195.0,
    "HP": 190,
    "Fast_Moves": [
      "애교부리기",
      "폭포오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "하이드로펌프",
      "문포스",
      "차밍보이스",
      "물거품아리아"
    ],
    "Elite_Charged_Moves": [
      "하이드로캐논"
    ],
    "Sprite_Col": 19,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 731,
    "Form": "일반",
    "Pokemon_Name": "콕코구리",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 1029,
    "ATK": 136.0,
    "DEF": 59.0,
    "HP": 111,
    "Fast_Moves": [
      "쪼기",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "회전부리",
      "제비반환",
      "불새"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 20,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": "731-S",
    "Form": "그림자",
    "Pokemon_Name": "콕코구리",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 1029,
    "ATK": 136.0,
    "DEF": 59.0,
    "HP": 111,
    "Fast_Moves": [
      "쪼기",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "회전부리",
      "제비반환",
      "불새"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 20,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 732,
    "Form": "일반",
    "Pokemon_Name": "크라파",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 1671,
    "ATK": 159.0,
    "DEF": 100.0,
    "HP": 146,
    "Fast_Moves": [
      "쪼기",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "회전부리",
      "록블라스트",
      "불새"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 21,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": "732-S",
    "Form": "그림자",
    "Pokemon_Name": "크라파",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 1671,
    "ATK": 159.0,
    "DEF": 100.0,
    "HP": 146,
    "Fast_Moves": [
      "쪼기",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "회전부리",
      "록블라스트",
      "불새"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 21,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 733,
    "Form": "일반",
    "Pokemon_Name": "왕큰부리",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 3040,
    "ATK": 222.0,
    "DEF": 146.0,
    "HP": 190,
    "Fast_Moves": [
      "쪼기",
      "바위깨기",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "회전부리",
      "록블라스트",
      "러스터캐논"
    ],
    "Elite_Charged_Moves": [
      "부리캐논"
    ],
    "Sprite_Col": 22,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": "733-S",
    "Form": "그림자",
    "Pokemon_Name": "왕큰부리",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 3040,
    "ATK": 222.0,
    "DEF": 146.0,
    "HP": 190,
    "Fast_Moves": [
      "쪼기",
      "바위깨기",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "회전부리",
      "록블라스트",
      "러스터캐논"
    ],
    "Elite_Charged_Moves": [
      "부리캐논"
    ],
    "Sprite_Col": 22,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 734,
    "Form": "일반",
    "Pokemon_Name": "영구스",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 994,
    "ATK": 122.0,
    "DEF": 56.0,
    "HP": 134,
    "Fast_Moves": [
      "몸통박치기",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "필살앞니",
      "깨물어부수기",
      "암석봉인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 23,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 735,
    "Form": "일반",
    "Pokemon_Name": "형사구스",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 2470,
    "ATK": 194.0,
    "DEF": 113.0,
    "HP": 204,
    "Fast_Moves": [
      "돌진",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "필살앞니",
      "깨물어부수기",
      "암석봉인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 736,
    "Form": "일반",
    "Pokemon_Name": "턱지충이",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 1112,
    "ATK": 115.0,
    "DEF": 85.0,
    "HP": 132,
    "Fast_Moves": [
      "벌레먹기",
      "스파크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "시저크로스",
      "찝기",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 25,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": "736-S",
    "Form": "그림자",
    "Pokemon_Name": "턱지충이",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 1112,
    "ATK": 115.0,
    "DEF": 85.0,
    "HP": 132,
    "Fast_Moves": [
      "벌레먹기",
      "스파크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "시저크로스",
      "찝기",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 25,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 737,
    "Form": "일반",
    "Pokemon_Name": "전지충이",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "전기",
    "Max_CP": 1919,
    "ATK": 145.0,
    "DEF": 161.0,
    "HP": 149,
    "Fast_Moves": [
      "벌레먹기",
      "스파크"
    ],
    "Elite_Fast_Moves": [
      "볼트체인지"
    ],
    "Charged_Moves": [
      "시저크로스",
      "방전",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 26,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": "737-S",
    "Form": "그림자",
    "Pokemon_Name": "전지충이",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "전기",
    "Max_CP": 1919,
    "ATK": 145.0,
    "DEF": 161.0,
    "HP": 149,
    "Fast_Moves": [
      "벌레먹기",
      "스파크"
    ],
    "Elite_Fast_Moves": [
      "볼트체인지"
    ],
    "Charged_Moves": [
      "시저크로스",
      "방전",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 26,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 738,
    "Form": "일반",
    "Pokemon_Name": "투구뿌논",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "전기",
    "Max_CP": 3524,
    "ATK": 254.0,
    "DEF": 158.0,
    "HP": 184,
    "Fast_Moves": [
      "벌레먹기",
      "스파크",
      "진흙뿌리기"
    ],
    "Elite_Fast_Moves": [
      "볼트체인지"
    ],
    "Charged_Moves": [
      "시저크로스",
      "방전",
      "깨물어부수기",
      "공중날기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 27,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": "738-S",
    "Form": "그림자",
    "Pokemon_Name": "투구뿌논",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "전기",
    "Max_CP": 3524,
    "ATK": 254.00000000000003,
    "DEF": 158.0,
    "HP": 184,
    "Fast_Moves": [
      "벌레먹기",
      "스파크",
      "진흙뿌리기"
    ],
    "Elite_Fast_Moves": [
      "볼트체인지"
    ],
    "Charged_Moves": [
      "시저크로스",
      "방전",
      "깨물어부수기",
      "공중날기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 27,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 739,
    "Form": "일반",
    "Pokemon_Name": "오기지게",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 1540,
    "ATK": 150.0,
    "DEF": 104.0,
    "HP": 132,
    "Fast_Moves": [
      "바위깨기",
      "거품"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "그로우펀치",
      "집게해머",
      "보복",
      "깨트리기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 28,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 740,
    "Form": "일반",
    "Pokemon_Name": "모단단게",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "얼음",
    "Max_CP": 3286,
    "ATK": 231.0,
    "DEF": 138.0,
    "HP": 219,
    "Fast_Moves": [
      "바위깨기",
      "거품"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "그로우펀치",
      "집게해머",
      "보복",
      "냉동펀치",
      "깨트리기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 29,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 741,
    "Form": "일반",
    "Pokemon_Name": "춤추새(이글이글 스타일)",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "비행",
    "Max_CP": 2638,
    "ATK": 196.0,
    "DEF": 145.0,
    "HP": 181,
    "Fast_Moves": [
      "막치기",
      "에어슬래시"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "제비반환",
      "에어커터",
      "폭풍"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 741,
    "Form": "일반",
    "Pokemon_Name": "춤추새(파직파직 스타일)",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "비행",
    "Max_CP": 2638,
    "ATK": 196.0,
    "DEF": 145.0,
    "HP": 181,
    "Fast_Moves": [
      "막치기",
      "에어슬래시"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "제비반환",
      "에어커터",
      "폭풍"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 741,
    "Form": "일반",
    "Pokemon_Name": "춤추새(훌라훌라 스타일)",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "비행",
    "Max_CP": 2638,
    "ATK": 196.0,
    "DEF": 145.0,
    "HP": 181,
    "Fast_Moves": [
      "막치기",
      "에어슬래시"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "제비반환",
      "에어커터",
      "폭풍"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 741,
    "Form": "일반",
    "Pokemon_Name": "춤추새(하늘하늘 스타일)",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "비행",
    "Max_CP": 2638,
    "ATK": 196.0,
    "DEF": 145.0,
    "HP": 181,
    "Fast_Moves": [
      "막치기",
      "에어슬래시"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "제비반환",
      "에어커터",
      "폭풍"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 33,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 742,
    "Form": "일반",
    "Pokemon_Name": "에블리",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "페어리",
    "Max_CP": 1004,
    "ATK": 110.0,
    "DEF": 81.0,
    "HP": 120,
    "Fast_Moves": [
      "요정의바람",
      "벌레의저항"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "매지컬샤인",
      "벌레의야단법석"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 34,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 743,
    "Form": "일반",
    "Pokemon_Name": "에리본",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "페어리",
    "Max_CP": 2488,
    "ATK": 198.0,
    "DEF": 146.0,
    "HP": 155,
    "Fast_Moves": [
      "요정의바람",
      "벌레의저항",
      "애교부리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "매지컬샤인",
      "벌레의야단법석",
      "드레인키스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 35,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 744,
    "Form": "일반",
    "Pokemon_Name": "암멍이",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "-",
    "Max_CP": 1074,
    "ATK": 117.0,
    "DEF": 78.0,
    "HP": 128,
    "Fast_Moves": [
      "몸통박치기",
      "돌떨구기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤에지",
      "암석봉인",
      "깨물어부수기",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 745,
    "Form": "일반",
    "Pokemon_Name": "루가루암(황혼의 모습)",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "-",
    "Max_CP": 3054,
    "ATK": 234.0,
    "DEF": 139.0,
    "HP": 181,
    "Fast_Moves": [
      "기습",
      "카운터",
      "돌떨구기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤에지",
      "아이언헤드",
      "깨물어부수기",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 39,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 745,
    "Form": "일반",
    "Pokemon_Name": "루가루암(한낮의 모습)",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "-",
    "Max_CP": 3027,
    "ATK": 231.0,
    "DEF": 140.0,
    "HP": 181,
    "Fast_Moves": [
      "기습",
      "돌떨구기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤에지",
      "드릴라이너",
      "깨물어부수기",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 745,
    "Form": "일반",
    "Pokemon_Name": "루가루암(한밤중의 모습)",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "-",
    "Max_CP": 3102,
    "ATK": 218.0,
    "DEF": 152.0,
    "HP": 198,
    "Fast_Moves": [
      "카운터",
      "돌떨구기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤에지",
      "사이코팽",
      "깨물어부수기",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 38,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 746,
    "Form": "일반",
    "Pokemon_Name": "약어리(군집의 모습)",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 3654,
    "ATK": 255.0,
    "DEF": 242.0,
    "HP": 128,
    "Fast_Moves": [
      "물대포",
      "폭포오르기",
      "아이언테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "소금물",
      "파도타기",
      "아쿠아테일"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 41,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 746,
    "Form": "일반",
    "Pokemon_Name": "약어리(단독의 모습)",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 392,
    "ATK": 46.0,
    "DEF": 43.0,
    "HP": 128,
    "Fast_Moves": [
      "물대포",
      "폭포오르기",
      "아이언테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "소금물",
      "파도타기",
      "아쿠아테일"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 40,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 747,
    "Form": "일반",
    "Pokemon_Name": "시마사리",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "물",
    "Max_CP": 1099,
    "ATK": 98.0,
    "DEF": 110.0,
    "HP": 137,
    "Fast_Moves": [
      "독침",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "소금물",
      "더스트슈트",
      "오물웨이브"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 42,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 748,
    "Form": "일반",
    "Pokemon_Name": "더시마사리",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "물",
    "Max_CP": 1905,
    "ATK": 114.0,
    "DEF": 273.0,
    "HP": 137,
    "Fast_Moves": [
      "독찌르기",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "소금물",
      "더스트슈트",
      "오물웨이브"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 43,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 749,
    "Form": "일반",
    "Pokemon_Name": "머드나기",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "-",
    "Max_CP": 2139,
    "ATK": 175.0,
    "DEF": 121.0,
    "HP": 172,
    "Fast_Moves": [
      "진흙뿌리기",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "땅고르기",
      "누르기",
      "지진"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 44,
    "Sprite_Row": 23
  },
  {
    "Pokemon_ID": 750,
    "Form": "일반",
    "Pokemon_Name": "만마드",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "-",
    "Max_CP": 3443,
    "ATK": 214.0,
    "DEF": 174.0,
    "HP": 225,
    "Fast_Moves": [
      "진흙뿌리기",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "땅고르기",
      "누르기",
      "지진",
      "헤비봄버"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 751,
    "Form": "일반",
    "Pokemon_Name": "물거미",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "벌레",
    "Max_CP": 807,
    "ATK": 72.0,
    "DEF": 117.0,
    "HP": 116,
    "Fast_Moves": [
      "엉겨붙기",
      "벌레먹기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "물의파동",
      "거품광선",
      "미러코트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 2,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 752,
    "Form": "일반",
    "Pokemon_Name": "깨비물거미",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "벌레",
    "Max_CP": 2065,
    "ATK": 126.0,
    "DEF": 219.0,
    "HP": 169,
    "Fast_Moves": [
      "엉겨붙기",
      "벌레먹기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "벌레의야단법석",
      "거품광선",
      "미러코트",
      "물의파동"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 3,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 753,
    "Form": "일반",
    "Pokemon_Name": "짜랑랑",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 838,
    "ATK": 100.0,
    "DEF": 64.0,
    "HP": 120,
    "Fast_Moves": [
      "잎날가르기",
      "연속자르기",
      "나뭇잎"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "리프블레이드",
      "에너지볼",
      "풀묶기",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 754,
    "Form": "일반",
    "Pokemon_Name": "라란티스",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 2711,
    "ATK": 192.0,
    "DEF": 169.0,
    "HP": 172,
    "Fast_Moves": [
      "잎날가르기",
      "연속자르기",
      "나뭇잎"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "리프블레이드",
      "리프스톰",
      "엄청난힘",
      "시저크로스",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 5,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 755,
    "Form": "일반",
    "Pokemon_Name": "자마슈",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "페어리",
    "Max_CP": 1168,
    "ATK": 108.0,
    "DEF": 119.0,
    "HP": 120,
    "Fast_Moves": [
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "매지컬샤인",
      "씨폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 6,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 756,
    "Form": "일반",
    "Pokemon_Name": "마셰이드",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "페어리",
    "Max_CP": 2104,
    "ATK": 154.0,
    "DEF": 168.0,
    "HP": 155,
    "Fast_Moves": [
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "문포스",
      "씨폭탄",
      "오물폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 757,
    "Form": "일반",
    "Pokemon_Name": "야도뇽",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "불꽃",
    "Max_CP": 1268,
    "ATK": 136.0,
    "DEF": 80.0,
    "HP": 134,
    "Fast_Moves": [
      "불꽃세례",
      "독찌르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "맹독엄니",
      "화염방사",
      "용의파동"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 8,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 758,
    "Form": "일반",
    "Pokemon_Name": "염뉴트",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "불꽃",
    "Max_CP": 2802,
    "ATK": 228.0,
    "DEF": 130.0,
    "HP": 169,
    "Fast_Moves": [
      "불태우기",
      "독찌르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "맹독엄니",
      "불대문자",
      "용의파동",
      "오물웨이브"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 9,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 759,
    "Form": "일반",
    "Pokemon_Name": "포곰곰",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "격투",
    "Max_CP": 1529,
    "ATK": 136.0,
    "DEF": 95.0,
    "HP": 172,
    "Fast_Moves": [
      "몸통박치기",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "엄청난힘",
      "깨트리기",
      "짓밟기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 10,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 760,
    "Form": "일반",
    "Pokemon_Name": "이븐곰",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "격투",
    "Max_CP": 3524,
    "ATK": 226.0,
    "DEF": 141.0,
    "HP": 260,
    "Fast_Moves": [
      "몸통박치기",
      "안다리걸기",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "엄청난힘",
      "보복",
      "짓밟기"
    ],
    "Elite_Charged_Moves": [
      "드레인펀치"
    ],
    "Sprite_Col": 11,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 761,
    "Form": "일반",
    "Pokemon_Name": "달콤아",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 532,
    "ATK": 55.0,
    "DEF": 69.0,
    "HP": 123,
    "Fast_Moves": [
      "잎날가르기",
      "애교부리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "드레인키스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 12,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 762,
    "Form": "일반",
    "Pokemon_Name": "달무리나",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 856,
    "ATK": 78.0,
    "DEF": 94.0,
    "HP": 141,
    "Fast_Moves": [
      "잎날가르기",
      "애교부리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "드레인키스",
      "풀묶기",
      "트리플악셀"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 763,
    "Form": "일반",
    "Pokemon_Name": "달코퀸",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 3351,
    "ATK": 222.0,
    "DEF": 195.0,
    "HP": 176,
    "Fast_Moves": [
      "잎날가르기",
      "애교부리기",
      "메지컬리프"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "드레인키스",
      "풀묶기",
      "짓밟기",
      "트리플악셀"
    ],
    "Elite_Charged_Moves": [
      "무릎차기"
    ],
    "Sprite_Col": 14,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 764,
    "Form": "일반",
    "Pokemon_Name": "큐아링",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "-",
    "Max_CP": 2392,
    "ATK": 165.0,
    "DEF": 215.0,
    "HP": 139,
    "Fast_Moves": [
      "덩굴채찍",
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "꽃보라",
      "풀묶기",
      "드레인키스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 15,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 765,
    "Form": "일반",
    "Pokemon_Name": "하랑우탄",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 2770,
    "ATK": 168.0,
    "DEF": 192.0,
    "HP": 207,
    "Fast_Moves": [
      "염동력",
      "사념의박치기",
      "하품"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "속임수",
      "미래예지",
      "개척하기",
      "세차게휘두르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 16,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 766,
    "Form": "일반",
    "Pokemon_Name": "내던숭이",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 3429,
    "ATK": 222.0,
    "DEF": 160.0,
    "HP": 225,
    "Fast_Moves": [
      "카운터",
      "바위깨기",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨트리기",
      "인파이트",
      "엄청난힘",
      "세차게휘두르기",
      "드레인펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 17,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 767,
    "Form": "일반",
    "Pokemon_Name": "꼬시레",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "물",
    "Max_CP": 567,
    "ATK": 67.0,
    "DEF": 74.0,
    "HP": 93,
    "Fast_Moves": [
      "벌레의저항"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "벌레의야단법석"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 18,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 768,
    "Form": "일반",
    "Pokemon_Name": "갑주무사",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "물",
    "Max_CP": 3575,
    "ATK": 218.0,
    "DEF": 226.0,
    "HP": 181,
    "Fast_Moves": [
      "연속자르기",
      "메탈클로",
      "폭포오르기",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "시저크로스",
      "아쿠아제트",
      "제비반환",
      "아쿠아브레이크",
      "셸블레이드"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 19,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 769,
    "Form": "일반",
    "Pokemon_Name": "모래꿍",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "땅",
    "Max_CP": 1394,
    "ATK": 120.0,
    "DEF": 118.0,
    "HP": 146,
    "Fast_Moves": [
      "놀래키기",
      "머드샷",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "모래지옥",
      "섀도볼",
      "대지의힘",
      "열사의대지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 20,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 770,
    "Form": "일반",
    "Pokemon_Name": "모래성이당",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "땅",
    "Max_CP": 2763,
    "ATK": 178.0,
    "DEF": 178.0,
    "HP": 198,
    "Fast_Moves": [
      "놀래키기",
      "머드샷",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "모래지옥",
      "섀도볼",
      "대지의힘",
      "열사의대지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 21,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 771,
    "Form": "일반",
    "Pokemon_Name": "해무기",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1551,
    "ATK": 97.0,
    "DEF": 224.0,
    "HP": 146,
    "Fast_Moves": [
      "카운터"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미러코트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 22,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 772,
    "Form": "일반",
    "Pokemon_Name": "타입:널",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 3012,
    "ATK": 184.0,
    "DEF": 184.0,
    "HP": 216,
    "Fast_Moves": [
      "몸통박치기",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "트라이어택",
      "아이언헤드",
      "제비반환"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 23,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 773,
    "Form": "일반",
    "Pokemon_Name": "실버디(노말)",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 3336,
    "ATK": 198.0,
    "DEF": 198.0,
    "HP": 216,
    "Fast_Moves": [
      "몸통박치기",
      "돌진",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "트라이어택",
      "아이언헤드",
      "제비반환",
      "시저크로스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 773,
    "Form": "일반",
    "Pokemon_Name": "실버디(벌레)",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 3336,
    "ATK": 198.0,
    "DEF": 198.0,
    "HP": 216,
    "Fast_Moves": [
      "몸통박치기",
      "돌진",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "트라이어택",
      "아이언헤드",
      "제비반환",
      "시저크로스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 773,
    "Form": "일반",
    "Pokemon_Name": "실버디(악)",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "-",
    "Max_CP": 3336,
    "ATK": 198.0,
    "DEF": 198.0,
    "HP": 216,
    "Fast_Moves": [
      "몸통박치기",
      "돌진",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "트라이어택",
      "아이언헤드",
      "제비반환",
      "시저크로스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 773,
    "Form": "일반",
    "Pokemon_Name": "실버디(드래곤)",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "-",
    "Max_CP": 3336,
    "ATK": 198.0,
    "DEF": 198.0,
    "HP": 216,
    "Fast_Moves": [
      "몸통박치기",
      "돌진",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "트라이어택",
      "아이언헤드",
      "제비반환",
      "시저크로스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 773,
    "Form": "일반",
    "Pokemon_Name": "실버디(전기)",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 3336,
    "ATK": 198.0,
    "DEF": 198.0,
    "HP": 216,
    "Fast_Moves": [
      "몸통박치기",
      "돌진",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "트라이어택",
      "아이언헤드",
      "제비반환",
      "시저크로스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 773,
    "Form": "일반",
    "Pokemon_Name": "실버디(페어리)",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "-",
    "Max_CP": 3336,
    "ATK": 198.0,
    "DEF": 198.0,
    "HP": 216,
    "Fast_Moves": [
      "몸통박치기",
      "돌진",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "트라이어택",
      "아이언헤드",
      "제비반환",
      "시저크로스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 773,
    "Form": "일반",
    "Pokemon_Name": "실버디(격투)",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 3336,
    "ATK": 198.0,
    "DEF": 198.0,
    "HP": 216,
    "Fast_Moves": [
      "몸통박치기",
      "돌진",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "트라이어택",
      "아이언헤드",
      "제비반환",
      "시저크로스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 773,
    "Form": "일반",
    "Pokemon_Name": "실버디(불꽃)",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 3336,
    "ATK": 198.0,
    "DEF": 198.0,
    "HP": 216,
    "Fast_Moves": [
      "몸통박치기",
      "돌진",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "트라이어택",
      "아이언헤드",
      "제비반환",
      "시저크로스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 773,
    "Form": "일반",
    "Pokemon_Name": "실버디(비행)",
    "Pokemon_Type1": "비행",
    "Pokemon_Type2": "-",
    "Max_CP": 3336,
    "ATK": 198.0,
    "DEF": 198.0,
    "HP": 216,
    "Fast_Moves": [
      "몸통박치기",
      "돌진",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "트라이어택",
      "아이언헤드",
      "제비반환",
      "시저크로스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 773,
    "Form": "일반",
    "Pokemon_Name": "실버디(고스트)",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "-",
    "Max_CP": 3336,
    "ATK": 198.0,
    "DEF": 198.0,
    "HP": 216,
    "Fast_Moves": [
      "몸통박치기",
      "돌진",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "트라이어택",
      "아이언헤드",
      "제비반환",
      "시저크로스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 773,
    "Form": "일반",
    "Pokemon_Name": "실버디(풀)",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 3336,
    "ATK": 198.0,
    "DEF": 198.0,
    "HP": 216,
    "Fast_Moves": [
      "몸통박치기",
      "돌진",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "트라이어택",
      "아이언헤드",
      "제비반환",
      "시저크로스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 773,
    "Form": "일반",
    "Pokemon_Name": "실버디(땅)",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "-",
    "Max_CP": 3336,
    "ATK": 198.0,
    "DEF": 198.0,
    "HP": 216,
    "Fast_Moves": [
      "몸통박치기",
      "돌진",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "트라이어택",
      "아이언헤드",
      "제비반환",
      "시저크로스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 773,
    "Form": "일반",
    "Pokemon_Name": "실버디(얼음)",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "-",
    "Max_CP": 3336,
    "ATK": 198.0,
    "DEF": 198.0,
    "HP": 216,
    "Fast_Moves": [
      "몸통박치기",
      "돌진",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "트라이어택",
      "아이언헤드",
      "제비반환",
      "시저크로스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 773,
    "Form": "일반",
    "Pokemon_Name": "실버디(독)",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "-",
    "Max_CP": 3336,
    "ATK": 198.0,
    "DEF": 198.0,
    "HP": 216,
    "Fast_Moves": [
      "몸통박치기",
      "돌진",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "트라이어택",
      "아이언헤드",
      "제비반환",
      "시저크로스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 773,
    "Form": "일반",
    "Pokemon_Name": "실버디(에스퍼)",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 3336,
    "ATK": 198.0,
    "DEF": 198.0,
    "HP": 216,
    "Fast_Moves": [
      "몸통박치기",
      "돌진",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "트라이어택",
      "아이언헤드",
      "제비반환",
      "시저크로스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 773,
    "Form": "일반",
    "Pokemon_Name": "실버디(바위)",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "-",
    "Max_CP": 3336,
    "ATK": 198.0,
    "DEF": 198.0,
    "HP": 216,
    "Fast_Moves": [
      "몸통박치기",
      "돌진",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "트라이어택",
      "아이언헤드",
      "제비반환",
      "시저크로스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 773,
    "Form": "일반",
    "Pokemon_Name": "실버디(강철)",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "-",
    "Max_CP": 3336,
    "ATK": 198.0,
    "DEF": 198.0,
    "HP": 216,
    "Fast_Moves": [
      "몸통박치기",
      "돌진",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "트라이어택",
      "아이언헤드",
      "제비반환",
      "시저크로스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 773,
    "Form": "일반",
    "Pokemon_Name": "실버디(물)",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 3336,
    "ATK": 198.0,
    "DEF": 198.0,
    "HP": 216,
    "Fast_Moves": [
      "몸통박치기",
      "돌진",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "트라이어택",
      "아이언헤드",
      "제비반환",
      "시저크로스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 774,
    "Form": "일반",
    "Pokemon_Name": "메테노",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "비행",
    "Max_CP": 1743,
    "ATK": 116.0,
    "DEF": 194.0,
    "HP": 155,
    "Fast_Moves": [
      "구르기",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파워젬",
      "원시의힘",
      "애크러뱃"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 26,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 774,
    "Form": "일반",
    "Pokemon_Name": "메테노(코어)",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "비행",
    "Max_CP": 2591,
    "ATK": 218.0,
    "DEF": 131.0,
    "HP": 155,
    "Fast_Moves": [
      "구르기",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파워젬",
      "원시의힘",
      "애크러뱃"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 25,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 775,
    "Form": "일반",
    "Pokemon_Name": "자말라",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 2919,
    "ATK": 216.0,
    "DEF": 165.0,
    "HP": 163,
    "Fast_Moves": [
      "구르기",
      "하품"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "치근거리기",
      "땅고르기",
      "보복"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 33,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 776,
    "Form": "일반",
    "Pokemon_Name": "폭거북스",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 2513,
    "ATK": 165.0,
    "DEF": 215.0,
    "HP": 155,
    "Fast_Moves": [
      "불꽃세례",
      "회오리불꽃",
      "불태우기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오버히트",
      "화염방사",
      "용의파동",
      "러스터캐논",
      "세차게휘두르기",
      "드래곤클로"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 34,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 777,
    "Form": "일반",
    "Pokemon_Name": "토게데마루",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "강철",
    "Max_CP": 2442,
    "ATK": 190.0,
    "DEF": 145.0,
    "HP": 163,
    "Fast_Moves": [
      "전기쇼크",
      "스파크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "마지막일침",
      "와일드볼트",
      "자이로볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 35,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 778,
    "Form": "일반",
    "Pokemon_Name": "따라큐",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "페어리",
    "Max_CP": 2516,
    "ATK": 177.0,
    "DEF": 199.0,
    "HP": 146,
    "Fast_Moves": [
      "섀도클로",
      "애교부리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "야습",
      "치근거리기",
      "섀도볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 779,
    "Form": "일반",
    "Pokemon_Name": "치갈기",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 2701,
    "ATK": 208.0,
    "DEF": 145.0,
    "HP": 169,
    "Fast_Moves": [
      "물대포",
      "염동력",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코팽",
      "아쿠아테일",
      "깨물어부수기",
      "사이코쇼크"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 780,
    "Form": "일반",
    "Pokemon_Name": "할비롱",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 3294,
    "ATK": 231.0,
    "DEF": 164.0,
    "HP": 186,
    "Fast_Moves": [
      "용의숨결",
      "신통력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "역린",
      "용의파동",
      "공중날기",
      "스피드스타"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 38,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 781,
    "Form": "일반",
    "Pokemon_Name": "타타륜",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "풀",
    "Max_CP": 3335,
    "ATK": 233.0,
    "DEF": 179.0,
    "HP": 172,
    "Fast_Moves": [
      "놀래키기",
      "섀도클로",
      "금속음"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파워휩",
      "섀도볼",
      "헤비봄버",
      "김밥말이"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 39,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 782,
    "Form": "일반",
    "Pokemon_Name": "짜랑꼬",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "-",
    "Max_CP": 1095,
    "ATK": 102.0,
    "DEF": 108.0,
    "HP": 128,
    "Fast_Moves": [
      "몸통박치기",
      "드래곤테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "드래곤클로",
      "깨트리기",
      "용의파동"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 40,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 783,
    "Form": "일반",
    "Pokemon_Name": "짜랑고우",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "격투",
    "Max_CP": 1907,
    "ATK": 145.0,
    "DEF": 162.0,
    "HP": 146,
    "Fast_Moves": [
      "몸통박치기",
      "드래곤테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "드래곤클로",
      "깨트리기",
      "용의파동",
      "암석봉인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 41,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 784,
    "Form": "일반",
    "Pokemon_Name": "짜랑고우거",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "격투",
    "Max_CP": 3741,
    "ATK": 222.0,
    "DEF": 240.0,
    "HP": 181,
    "Fast_Moves": [
      "독찌르기",
      "드래곤테일",
      "금속음"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "드래곤클로",
      "인파이트",
      "화염방사",
      "폭음파",
      "깨트리기",
      "기선제압"
    ],
    "Elite_Charged_Moves": [
      "스케일노이즈"
    ],
    "Sprite_Col": 42,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 785,
    "Form": "일반",
    "Pokemon_Name": "카푸꼬꼬꼭",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "페어리",
    "Max_CP": 3582,
    "ATK": 250.0,
    "DEF": 181.0,
    "HP": 172,
    "Fast_Moves": [
      "볼트체인지",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "10만볼트",
      "매지컬샤인",
      "브레이브버드",
      "번개"
    ],
    "Elite_Charged_Moves": [
      "자연의분노"
    ],
    "Sprite_Col": 43,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 786,
    "Form": "일반",
    "Pokemon_Name": "카푸나비나",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "페어리",
    "Max_CP": 3950,
    "ATK": 259.0,
    "DEF": 208.0,
    "HP": 172,
    "Fast_Moves": [
      "염동력",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코쇼크",
      "문포스",
      "기합구슬",
      "미래예지",
      "드레인키스"
    ],
    "Elite_Charged_Moves": [
      "자연의분노"
    ],
    "Sprite_Col": 44,
    "Sprite_Row": 24
  },
  {
    "Pokemon_ID": 787,
    "Form": "일반",
    "Pokemon_Name": "카푸브루루",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "페어리",
    "Max_CP": 3865,
    "ATK": 249.0,
    "DEF": 215.0,
    "HP": 172,
    "Fast_Moves": [
      "씨기관총",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "풀묶기",
      "매지컬샤인",
      "메가혼",
      "솔라빔"
    ],
    "Elite_Charged_Moves": [
      "자연의분노"
    ],
    "Sprite_Col": 1,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 788,
    "Form": "일반",
    "Pokemon_Name": "카푸느지느",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "페어리",
    "Max_CP": 3230,
    "ATK": 189.0,
    "DEF": 254.0,
    "HP": 172,
    "Fast_Moves": [
      "물대포",
      "잠재파워(페어리)",
      "잠재파워(에스퍼)",
      "잠재파워(격투)",
      "잠재파워(바위)",
      "잠재파워(불꽃)",
      "잠재파워(강철)",
      "잠재파워(물)",
      "잠재파워(비행)",
      "잠재파워(고스트)",
      "잠재파워(풀)",
      "잠재파워(벌레)",
      "잠재파워(땅)",
      "잠재파워(얼음)",
      "잠재파워(악)",
      "잠재파워(드래곤)",
      "잠재파워(노말)",
      "잠재파워(전기)",
      "잠재파워(독)"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파도타기",
      "문포스",
      "냉동빔",
      "하이드로펌프"
    ],
    "Elite_Charged_Moves": [
      "자연의분노"
    ],
    "Sprite_Col": 2,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 789,
    "Form": "일반",
    "Pokemon_Name": "코스모그",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 489,
    "ATK": 54.0,
    "DEF": 57.0,
    "HP": 125,
    "Fast_Moves": [
      "튀어오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 3,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 790,
    "Form": "일반",
    "Pokemon_Name": "코스모움",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 924,
    "ATK": 54.0,
    "DEF": 242.0,
    "HP": 125,
    "Fast_Moves": [
      "튀어오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 791,
    "Form": "일반",
    "Pokemon_Name": "솔가레오",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "강철",
    "Max_CP": 4570,
    "ATK": 255.0,
    "DEF": 191.0,
    "HP": 264,
    "Fast_Moves": [
      "사념의박치기",
      "회오리불꽃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아이언헤드",
      "사이코팽",
      "솔라빔",
      "화염방사"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 5,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 792,
    "Form": "일반",
    "Pokemon_Name": "루나아라",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "고스트",
    "Max_CP": 4570,
    "ATK": 255.0,
    "DEF": 191.0,
    "HP": 264,
    "Fast_Moves": [
      "염동력",
      "에어슬래시",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도볼",
      "사이코키네시스",
      "문포스",
      "미래예지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 6,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 793,
    "Form": "일반",
    "Pokemon_Name": "텅비드",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "독",
    "Max_CP": 4465,
    "ATK": 249.0,
    "DEF": 210.0,
    "HP": 240,
    "Fast_Moves": [
      "용해액",
      "막치기",
      "독찌르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파워젬",
      "더스트슈트",
      "오물폭탄",
      "스톤샤워"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 794,
    "Form": "일반",
    "Pokemon_Name": "매시붕",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "격투",
    "Max_CP": 3912,
    "ATK": 236.0,
    "DEF": 196.0,
    "HP": 216,
    "Fast_Moves": [
      "카운터",
      "독찌르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "그로우펀치",
      "마지막일침",
      "덤벼들기",
      "엄청난힘"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 8,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 795,
    "Form": "일반",
    "Pokemon_Name": "페로코체",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "격투",
    "Max_CP": 3213,
    "ATK": 316.0,
    "DEF": 85.0,
    "HP": 174,
    "Fast_Moves": [
      "벌레먹기",
      "안다리걸기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "기합구슬",
      "벌레의야단법석",
      "덤벼들기",
      "인파이트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 9,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 796,
    "Form": "일반",
    "Pokemon_Name": "전수목",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 4451,
    "ATK": 330.0,
    "DEF": 144.0,
    "HP": 195,
    "Fast_Moves": [
      "전기쇼크",
      "스파크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "방전",
      "번개",
      "파워휩",
      "매지컬샤인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 10,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 797,
    "Form": "일반",
    "Pokemon_Name": "철화구야",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "비행",
    "Max_CP": 3507,
    "ATK": 207.0,
    "DEF": 199.0,
    "HP": 219,
    "Fast_Moves": [
      "에어슬래시",
      "떨어뜨리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아이언헤드",
      "누르기",
      "헤비봄버",
      "땅고르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 798,
    "Form": "일반",
    "Pokemon_Name": "종이신도",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "강철",
    "Max_CP": 4156,
    "ATK": 323.0,
    "DEF": 182.0,
    "HP": 139,
    "Fast_Moves": [
      "에어슬래시",
      "잎날가르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "리프블레이드",
      "시저크로스",
      "깜짝베기",
      "제비반환"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 12,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 799,
    "Form": "일반",
    "Pokemon_Name": "악식킹",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 3264,
    "ATK": 188.0,
    "DEF": 99.0,
    "HP": 440,
    "Fast_Moves": [
      "바크아웃",
      "드래곤테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "세차게휘두르기",
      "드래곤클로",
      "깨물어부수기",
      "오물폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 800,
    "Form": "일반",
    "Pokemon_Name": "네크로즈마",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 4163,
    "ATK": 251.0,
    "DEF": 195.0,
    "HP": 219,
    "Fast_Moves": [
      "메탈클로",
      "사이코커터",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "악의파동",
      "미래예지",
      "아이언헤드",
      "역린"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 14,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 800,
    "Form": "일반",
    "Pokemon_Name": "황혼의 갈기 네크로즈마",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "강철",
    "Max_CP": 4634,
    "ATK": 277.0,
    "DEF": 220.0,
    "HP": 200,
    "Fast_Moves": [
      "메탈클로",
      "사이코커터",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "악의파동",
      "미래예지",
      "아이언헤드",
      "역린"
    ],
    "Elite_Charged_Moves": [
      "메테오드라이브"
    ],
    "Sprite_Col": 15,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 800,
    "Form": "일반",
    "Pokemon_Name": "새벽의 날개 네크로즈마",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "고스트",
    "Max_CP": 4634,
    "ATK": 277.0,
    "DEF": 220.0,
    "HP": 200,
    "Fast_Moves": [
      "메탈클로",
      "사이코커터",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "악의파동",
      "미래예지",
      "아이언헤드",
      "역린"
    ],
    "Elite_Charged_Moves": [
      "섀도레이"
    ],
    "Sprite_Col": 16,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 800,
    "Form": "일반",
    "Pokemon_Name": "울트라 네크로즈마",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 5293,
    "ATK": 337.0,
    "DEF": 196.0,
    "HP": 200,
    "Fast_Moves": [
      "튀어오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 17,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 801,
    "Form": "일반",
    "Pokemon_Name": "마기아나",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "페어리",
    "Max_CP": 4087,
    "ATK": 246.0,
    "DEF": 225.0,
    "HP": 190,
    "Fast_Moves": [
      "튀어오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 18,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 802,
    "Form": "일반",
    "Pokemon_Name": "마샤도",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "고스트",
    "Max_CP": 4217,
    "ATK": 265.0,
    "DEF": 190.0,
    "HP": 207,
    "Fast_Moves": [
      "기습",
      "카운터",
      "독찌르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "인파이트",
      "불꽃펀치",
      "번개펀치",
      "냉동펀치",
      "스톤샤워"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 20,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 803,
    "Form": "일반",
    "Pokemon_Name": "베베놈",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "-",
    "Max_CP": 1854,
    "ATK": 145.0,
    "DEF": 133.0,
    "HP": 167,
    "Fast_Moves": [
      "독찌르기",
      "쪼기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오물폭탄",
      "오물웨이브",
      "마지막일침"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 21,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 804,
    "Form": "일반",
    "Pokemon_Name": "아고용",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 3587,
    "ATK": 263.0,
    "DEF": 159.0,
    "HP": 177,
    "Fast_Moves": [
      "독찌르기",
      "에어슬래시"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오물폭탄",
      "애크러뱃",
      "마지막일침",
      "용의파동",
      "드래곤클로"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 22,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 805,
    "Form": "일반",
    "Pokemon_Name": "차곡차곡",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "강철",
    "Max_CP": 3724,
    "ATK": 213.0,
    "DEF": 298.0,
    "HP": 156,
    "Fast_Moves": [
      "돌떨구기",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "러스터캐논",
      "스톤에지",
      "땅고르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 23,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 806,
    "Form": "일반",
    "Pokemon_Name": "두파팡",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "고스트",
    "Max_CP": 3727,
    "ATK": 315.0,
    "DEF": 148.0,
    "HP": 142,
    "Fast_Moves": [
      "불태우기",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "매지컬플레임",
      "섀도볼",
      "오버히트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 807,
    "Form": "일반",
    "Pokemon_Name": "제라오라",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 3865,
    "ATK": 252.0,
    "DEF": 177.0,
    "HP": 204,
    "Fast_Moves": [
      "스파크",
      "볼트체인지"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "번개펀치",
      "방전",
      "와일드볼트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 25,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 808,
    "Form": "일반",
    "Pokemon_Name": "멜탄",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "-",
    "Max_CP": 1207,
    "ATK": 118.0,
    "DEF": 99.0,
    "HP": 130,
    "Fast_Moves": [
      "전기쇼크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "러스터캐논",
      "10만볼트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 26,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 809,
    "Form": "일반",
    "Pokemon_Name": "멜메탈",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "-",
    "Max_CP": 4069,
    "ATK": 226.0,
    "DEF": 190.0,
    "HP": 264,
    "Fast_Moves": [
      "전기쇼크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "러스터캐논",
      "10만볼트",
      "파괴광선",
      "스톤샤워",
      "엄청난힘"
    ],
    "Elite_Charged_Moves": [
      "더블펀처"
    ],
    "Sprite_Col": 27,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 810,
    "Form": "일반",
    "Pokemon_Name": "흥나숭",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 1227,
    "ATK": 122.0,
    "DEF": 91.0,
    "HP": 137,
    "Fast_Moves": [
      "할퀴기",
      "잎날가르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "풀묶기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 29,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 811,
    "Form": "일반",
    "Pokemon_Name": "채키몽",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 2121,
    "ATK": 165.0,
    "DEF": 134.0,
    "HP": 172,
    "Fast_Moves": [
      "할퀴기",
      "잎날가르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "풀묶기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 812,
    "Form": "일반",
    "Pokemon_Name": "고릴타",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 3758,
    "ATK": 239.0,
    "DEF": 168.0,
    "HP": 225,
    "Fast_Moves": [
      "할퀴기",
      "잎날가르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "풀묶기",
      "대지의힘"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 813,
    "Form": "일반",
    "Pokemon_Name": "염버니",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 1240,
    "ATK": 132.0,
    "DEF": 79.0,
    "HP": 137,
    "Fast_Moves": [
      "몸통박치기",
      "회오리불꽃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "니트로차지",
      "화염방사"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 33,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 814,
    "Form": "일반",
    "Pokemon_Name": "래비풋",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 2062,
    "ATK": 170.0,
    "DEF": 125.0,
    "HP": 163,
    "Fast_Moves": [
      "몸통박치기",
      "회오리불꽃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "니트로차지",
      "화염방사"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 34,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 815,
    "Form": "일반",
    "Pokemon_Name": "에이스번",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 3412,
    "ATK": 238.0,
    "DEF": 163.0,
    "HP": 190,
    "Fast_Moves": [
      "몸통박치기",
      "회오리불꽃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "니트로차지",
      "화염방사",
      "기합구슬"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 35,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 816,
    "Form": "일반",
    "Pokemon_Name": "울머기",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1240,
    "ATK": 132.0,
    "DEF": 79.0,
    "HP": 137,
    "Fast_Moves": [
      "막치기",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "물의파동",
      "파도타기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 817,
    "Form": "일반",
    "Pokemon_Name": "누겔레온",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 2142,
    "ATK": 186.0,
    "DEF": 113.0,
    "HP": 163,
    "Fast_Moves": [
      "막치기",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "물의파동",
      "파도타기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 38,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 818,
    "Form": "일반",
    "Pokemon_Name": "인텔리레온",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 3351,
    "ATK": 262.0,
    "DEF": 142.0,
    "HP": 172,
    "Fast_Moves": [
      "막치기",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "물의파동",
      "파도타기",
      "섀도볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 39,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 819,
    "Form": "일반",
    "Pokemon_Name": "탐리스",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 1067,
    "ATK": 95.0,
    "DEF": 86.0,
    "HP": 172,
    "Fast_Moves": [
      "몸통박치기",
      "물기",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "누르기",
      "깨물어부수기",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 41,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 820,
    "Form": "일반",
    "Pokemon_Name": "요씽리스",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 2679,
    "ATK": 160.0,
    "DEF": 156.0,
    "HP": 260,
    "Fast_Moves": [
      "몸통박치기",
      "물기",
      "씨기관총",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "누르기",
      "깨물어부수기",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 42,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 821,
    "Form": "일반",
    "Pokemon_Name": "파라꼬",
    "Pokemon_Type1": "비행",
    "Pokemon_Type2": "-",
    "Max_CP": 753,
    "ATK": 88.0,
    "DEF": 67.0,
    "HP": 116,
    "Fast_Moves": [
      "쪼기",
      "에어슬래시",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "불새",
      "보복"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 43,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 822,
    "Form": "일반",
    "Pokemon_Name": "파크로우",
    "Pokemon_Type1": "비행",
    "Pokemon_Type2": "-",
    "Max_CP": 1542,
    "ATK": 129.0,
    "DEF": 110.0,
    "HP": 169,
    "Fast_Moves": [
      "쪼기",
      "에어슬래시",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "불새",
      "보복"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 44,
    "Sprite_Row": 25
  },
  {
    "Pokemon_ID": 823,
    "Form": "일반",
    "Pokemon_Name": "아머까오",
    "Pokemon_Type1": "비행",
    "Pokemon_Type2": "강철",
    "Max_CP": 2777,
    "ATK": 163.0,
    "DEF": 192.0,
    "HP": 221,
    "Fast_Moves": [
      "강철날개",
      "에어슬래시",
      "모래뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "불새",
      "보복"
    ],
    "Elite_Charged_Moves": [
      "아이언헤드",
      "에어커터"
    ],
    "Sprite_Col": 1,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 824,
    "Form": "일반",
    "Pokemon_Name": "두루지벌레",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 405,
    "ATK": 46.0,
    "DEF": 67.0,
    "HP": 93,
    "Fast_Moves": [
      "벌레의저항"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 3,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 825,
    "Form": "일반",
    "Pokemon_Name": "레돔벌레",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 1164,
    "ATK": 87.0,
    "DEF": 157.0,
    "HP": 137,
    "Fast_Moves": [
      "벌레의저항",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "벌레의야단법석",
      "사이코키네시스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 826,
    "Form": "일반",
    "Pokemon_Name": "이올브",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 2513,
    "ATK": 156.0,
    "DEF": 240.0,
    "HP": 155,
    "Fast_Moves": [
      "벌레의저항",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "벌레의야단법석",
      "사이코키네시스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 5,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 827,
    "Form": "일반",
    "Pokemon_Name": "훔처우",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "-",
    "Max_CP": 808,
    "ATK": 85.0,
    "DEF": 82.0,
    "HP": 120,
    "Fast_Moves": [
      "기습",
      "바크아웃",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깜짝베기",
      "치근거리기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 828,
    "Form": "일반",
    "Pokemon_Name": "폭슬라이",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "-",
    "Max_CP": 2415,
    "ATK": 172.0,
    "DEF": 164.0,
    "HP": 172,
    "Fast_Moves": [
      "기습",
      "바크아웃",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깜짝베기",
      "치근거리기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 8,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 829,
    "Form": "일반",
    "Pokemon_Name": "꼬모카",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 760,
    "ATK": 70.0,
    "DEF": 104.0,
    "HP": 120,
    "Fast_Moves": [
      "잎날가르기",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "풀묶기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 9,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 830,
    "Form": "일반",
    "Pokemon_Name": "백솜모카",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 2255,
    "ATK": 148.0,
    "DEF": 211.0,
    "HP": 155,
    "Fast_Moves": [
      "잎날가르기",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "에너지볼",
      "풀묶기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 10,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 831,
    "Form": "일반",
    "Pokemon_Name": "우르",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 798,
    "ATK": 76.0,
    "DEF": 97.0,
    "HP": 123,
    "Fast_Moves": [
      "몸통박치기",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "와일드볼트",
      "보복",
      "짓밟기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 832,
    "Form": "일반",
    "Pokemon_Name": "배우르",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 2478,
    "ATK": 159.0,
    "DEF": 198.0,
    "HP": 176,
    "Fast_Moves": [
      "몸통박치기",
      "돌진",
      "두번차기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "와일드볼트",
      "보복",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 12,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 833,
    "Form": "일반",
    "Pokemon_Name": "깨물부기",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1123,
    "ATK": 114.0,
    "DEF": 85.0,
    "HP": 137,
    "Fast_Moves": [
      "물대포",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "누르기",
      "파도타기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 834,
    "Form": "일반",
    "Pokemon_Name": "갈가부기",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "바위",
    "Max_CP": 3209,
    "ATK": 213.0,
    "DEF": 164.0,
    "HP": 207,
    "Fast_Moves": [
      "폭포오르기",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "누르기",
      "파도타기",
      "록블라스트",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 14,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 835,
    "Form": "일반",
    "Pokemon_Name": "멍파치",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 890,
    "ATK": 80.0,
    "DEF": 90.0,
    "HP": 153,
    "Fast_Moves": [
      "스파크",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "번개"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 16,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 836,
    "Form": "일반",
    "Pokemon_Name": "펄스멍",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 2460,
    "ATK": 197.0,
    "DEF": 131.0,
    "HP": 170,
    "Fast_Moves": [
      "스파크",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "번개"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 17,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 837,
    "Form": "일반",
    "Pokemon_Name": "탄동",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "-",
    "Max_CP": 691,
    "ATK": 73.0,
    "DEF": 91.0,
    "HP": 102,
    "Fast_Moves": [
      "떨어뜨리기",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "록블라스트",
      "스톤샤워"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 18,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 838,
    "Form": "일반",
    "Pokemon_Name": "탄차곤",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "불꽃",
    "Max_CP": 1710,
    "ATK": 114.0,
    "DEF": 157.0,
    "HP": 190,
    "Fast_Moves": [
      "떨어뜨리기",
      "불태우기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "록블라스트",
      "스톤샤워",
      "니트로차지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 19,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 839,
    "Form": "일반",
    "Pokemon_Name": "석탄산",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "불꽃",
    "Max_CP": 2659,
    "ATK": 146.0,
    "DEF": 198.0,
    "HP": 242,
    "Fast_Moves": [
      "떨어뜨리기",
      "불태우기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "록블라스트",
      "스톤샤워",
      "니트로차지"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 20,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 840,
    "Form": "일반",
    "Pokemon_Name": "과사삭벌레",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 807,
    "ATK": 71.0,
    "DEF": 116.0,
    "HP": 120,
    "Fast_Moves": [
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 22,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 841,
    "Form": "일반",
    "Pokemon_Name": "애프룡",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 2788,
    "ATK": 214.0,
    "DEF": 144.0,
    "HP": 172,
    "Fast_Moves": [
      "씨기관총",
      "용의숨결"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "용의파동",
      "공중날기",
      "역린",
      "씨폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 23,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 842,
    "Form": "일반",
    "Pokemon_Name": "단지래플",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 2772,
    "ATK": 178.0,
    "DEF": 146.0,
    "HP": 242,
    "Fast_Moves": [
      "씨기관총",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "용의파동",
      "에너지볼",
      "역린",
      "씨폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 25,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 843,
    "Form": "일반",
    "Pokemon_Name": "모래뱀",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "-",
    "Max_CP": 1222,
    "ATK": 103.0,
    "DEF": 123.0,
    "HP": 141,
    "Fast_Moves": [
      "진흙뿌리기",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "땅고르기",
      "대지의힘",
      "김밥말이"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 27,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 844,
    "Form": "일반",
    "Pokemon_Name": "사다이사",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "-",
    "Max_CP": 3155,
    "ATK": 202.0,
    "DEF": 207.0,
    "HP": 176,
    "Fast_Moves": [
      "진흙뿌리기",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "땅고르기",
      "대지의힘",
      "김밥말이"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 28,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 845,
    "Form": "일반",
    "Pokemon_Name": "윽우지",
    "Pokemon_Type1": "비행",
    "Pokemon_Type2": "물",
    "Max_CP": 2421,
    "ATK": 173.0,
    "DEF": 163.0,
    "HP": 172,
    "Fast_Moves": [
      "쪼기",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "회전부리",
      "공중날기",
      "하이드로펌프"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 846,
    "Form": "일반",
    "Pokemon_Name": "찌로꼬치",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1021,
    "ATK": 118.0,
    "DEF": 72.0,
    "HP": 121,
    "Fast_Moves": [
      "폭포오르기",
      "물기",
      "쪼기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "아쿠아제트",
      "인파이트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 33,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 847,
    "Form": "일반",
    "Pokemon_Name": "꼬치조",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 3003,
    "ATK": 258.0,
    "DEF": 127.0,
    "HP": 156,
    "Fast_Moves": [
      "폭포오르기",
      "물기",
      "쪼기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "아쿠아제트",
      "인파이트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 34,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 848,
    "Form": "일반",
    "Pokemon_Name": "일레즌",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "독",
    "Max_CP": 821,
    "ATK": 97.0,
    "DEF": 65.0,
    "HP": 120,
    "Fast_Moves": [
      "용해액"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "그로우펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 35,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 849,
    "Form": "일반",
    "Pokemon_Name": "스트린더(로우한 모습)",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "독",
    "Max_CP": 2941,
    "ATK": 224.0,
    "DEF": 140.0,
    "HP": 181,
    "Fast_Moves": [
      "용해액",
      "스파크",
      "독찌르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "애시드봄",
      "방전",
      "와일드볼트",
      "그로우펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 849,
    "Form": "일반",
    "Pokemon_Name": "스트린더(하이한 모습)",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "독",
    "Max_CP": 2941,
    "ATK": 224.0,
    "DEF": 140.0,
    "HP": 181,
    "Fast_Moves": [
      "용해액",
      "스파크",
      "독찌르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "애시드봄",
      "방전",
      "와일드볼트",
      "그로우펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 850,
    "Form": "일반",
    "Pokemon_Name": "태우지네",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "벌레",
    "Max_CP": 1186,
    "ATK": 118.0,
    "DEF": 90.0,
    "HP": 137,
    "Fast_Moves": [
      "벌레먹기",
      "불꽃세례"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "열풍",
      "벌레의야단법석",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 39,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 851,
    "Form": "일반",
    "Pokemon_Name": "다태우지네",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "벌레",
    "Max_CP": 3381,
    "ATK": 220.0,
    "DEF": 158.0,
    "HP": 225,
    "Fast_Moves": [
      "벌레먹기",
      "불꽃세례"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "열풍",
      "벌레의야단법석",
      "깨물어부수기",
      "덤벼들기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 40,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 852,
    "Form": "일반",
    "Pokemon_Name": "때때무노",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 1286,
    "ATK": 121.0,
    "DEF": 103.0,
    "HP": 137,
    "Fast_Moves": [
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨트리기",
      "엄청난힘",
      "냉동펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 42,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 853,
    "Form": "일반",
    "Pokemon_Name": "케오퍼스",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 3012,
    "ATK": 209.0,
    "DEF": 162.0,
    "HP": 190,
    "Fast_Moves": [
      "바위깨기",
      "폭포오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨트리기",
      "엄청난힘",
      "냉동펀치",
      "파도타기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 43,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 854,
    "Form": "일반",
    "Pokemon_Name": "데인차",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "-",
    "Max_CP": 1287,
    "ATK": 134.0,
    "DEF": 96.0,
    "HP": 120,
    "Fast_Moves": [
      "놀래키기",
      "기습"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도볼",
      "악의파동",
      "사이코키네시스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 44,
    "Sprite_Row": 26
  },
  {
    "Pokemon_ID": 855,
    "Form": "일반",
    "Pokemon_Name": "포트데스",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "-",
    "Max_CP": 3458,
    "ATK": 248.0,
    "DEF": 189.0,
    "HP": 155,
    "Fast_Moves": [
      "놀래키기",
      "기습",
      "병상첨병"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도볼",
      "악의파동",
      "사이코키네시스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": 856,
    "Form": "일반",
    "Pokemon_Name": "몸지브림",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 974,
    "ATK": 98.0,
    "DEF": 93.0,
    "HP": 123,
    "Fast_Moves": [
      "염동력",
      "애교부리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코쇼크",
      "사이코키네시스",
      "매지컬샤인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 2,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": 857,
    "Form": "일반",
    "Pokemon_Name": "손지브림",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 1848,
    "ATK": 153.0,
    "DEF": 133.0,
    "HP": 149,
    "Fast_Moves": [
      "염동력",
      "애교부리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코쇼크",
      "사이코키네시스",
      "매지컬샤인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 3,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": 858,
    "Form": "일반",
    "Pokemon_Name": "브리무음",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "페어리",
    "Max_CP": 3198,
    "ATK": 237.0,
    "DEF": 182.0,
    "HP": 149,
    "Fast_Moves": [
      "염동력",
      "애교부리기",
      "사이코커터"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코쇼크",
      "사이코키네시스",
      "매지컬샤인",
      "파워휩"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": 859,
    "Form": "일반",
    "Pokemon_Name": "메롱꿍",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "페어리",
    "Max_CP": 913,
    "ATK": 103.0,
    "DEF": 69.0,
    "HP": 128,
    "Fast_Moves": [
      "물기",
      "기습"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "속임수",
      "악의파동",
      "치근거리기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 6,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": 860,
    "Form": "일반",
    "Pokemon_Name": "쏘겨모",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "페어리",
    "Max_CP": 1630,
    "ATK": 145.0,
    "DEF": 102.0,
    "HP": 163,
    "Fast_Moves": [
      "물기",
      "기습"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "속임수",
      "악의파동",
      "치근거리기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": 861,
    "Form": "일반",
    "Pokemon_Name": "오롱털",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "페어리",
    "Max_CP": 3222,
    "ATK": 227.0,
    "DEF": 139.0,
    "HP": 216,
    "Fast_Moves": [
      "물기",
      "기습",
      "안다리걸기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "속임수",
      "악의파동",
      "치근거리기",
      "그로우펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 8,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": 862,
    "Form": "일반",
    "Pokemon_Name": "가로막구리",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "노말",
    "Max_CP": 2999,
    "ATK": 180.0,
    "DEF": 194.0,
    "HP": 212,
    "Fast_Moves": [
      "카운터",
      "핥기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "크로스촙",
      "깜짝베기",
      "파괴광선",
      "더스트슈트"
    ],
    "Elite_Charged_Moves": [
      "블로킹"
    ],
    "Sprite_Col": 10,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": "862-S",
    "Form": "그림자",
    "Pokemon_Name": "가로막구리",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "노말",
    "Max_CP": 2999,
    "ATK": 180.0,
    "DEF": 194.0,
    "HP": 212,
    "Fast_Moves": [
      "카운터",
      "핥기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "크로스촙",
      "깜짝베기",
      "파괴광선",
      "더스트슈트"
    ],
    "Elite_Charged_Moves": [
      "블로킹"
    ],
    "Sprite_Col": 10,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": 863,
    "Form": "일반",
    "Pokemon_Name": "나이킹",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "-",
    "Max_CP": 2697,
    "ATK": 195.0,
    "DEF": 162.0,
    "HP": 172,
    "Fast_Moves": [
      "메탈클로",
      "섀도클로",
      "금속음"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아이언헤드",
      "인파이트",
      "치근거리기",
      "속임수",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": 864,
    "Form": "일반",
    "Pokemon_Name": "산호르곤",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "-",
    "Max_CP": 3463,
    "ATK": 253.0,
    "DEF": 182.0,
    "HP": 155,
    "Fast_Moves": [
      "몸통박치기",
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "록블라스트",
      "파워젬",
      "나이트헤드"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 12,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": 865,
    "Form": "일반",
    "Pokemon_Name": "창파나이트",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 3375,
    "ATK": 248.0,
    "DEF": 176.0,
    "HP": 158,
    "Fast_Moves": [
      "카운터",
      "연속자르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "인파이트",
      "브레이브버드",
      "리프블레이드",
      "깜짝베기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": 866,
    "Form": "일반",
    "Pokemon_Name": "마임꽁꽁",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 3196,
    "ATK": 212.0,
    "DEF": 179.0,
    "HP": 190,
    "Fast_Moves": [
      "염동력",
      "사념의박치기",
      "얼음뭉치"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "환상빔",
      "사이코키네시스",
      "냉동펀치",
      "얼어붙은바람",
      "트리플악셀"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 14,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": 867,
    "Form": "일반",
    "Pokemon_Name": "데스판",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "고스트",
    "Max_CP": 2570,
    "ATK": 163.0,
    "DEF": 237.0,
    "HP": 151,
    "Fast_Moves": [
      "놀래키기",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도볼",
      "모래지옥",
      "암석봉인",
      "세차게휘두르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 15,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": 868,
    "Form": "일반",
    "Pokemon_Name": "마빌크",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "-",
    "Max_CP": 938,
    "ATK": 90.0,
    "DEF": 97.0,
    "HP": 128,
    "Fast_Moves": [
      "몸통박치기",
      "애교부리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "매지컬샤인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 16,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": 869,
    "Form": "일반",
    "Pokemon_Name": "마휘핑",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "-",
    "Max_CP": 3032,
    "ATK": 203.0,
    "DEF": 203.0,
    "HP": 163,
    "Fast_Moves": [
      "몸통박치기",
      "애교부리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "매지컬샤인",
      "사이코쇼크",
      "에너지볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 17,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": 870,
    "Form": "일반",
    "Pokemon_Name": "대여르",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 2665,
    "ATK": 193.0,
    "DEF": 170.0,
    "HP": 163,
    "Fast_Moves": [
      "바위깨기",
      "카운터"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "엄청난힘",
      "깨트리기",
      "메가혼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 27,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": 871,
    "Form": "일반",
    "Pokemon_Name": "찌르성게",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 2183,
    "ATK": 176.0,
    "DEF": 161.0,
    "HP": 134,
    "Fast_Moves": [
      "전기쇼크",
      "물대포",
      "독찌르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "방전",
      "10만볼트",
      "거품광선"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 28,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": 872,
    "Form": "일반",
    "Pokemon_Name": "누니머기",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "벌레",
    "Max_CP": 597,
    "ATK": 76.0,
    "DEF": 59.0,
    "HP": 102,
    "Fast_Moves": [
      "눈싸라기",
      "벌레의저항"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "얼어붙은바람",
      "벌레의야단법석"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 29,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": 873,
    "Form": "일반",
    "Pokemon_Name": "모스노우",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "벌레",
    "Max_CP": 3084,
    "ATK": 230.0,
    "DEF": 155.0,
    "HP": 172,
    "Fast_Moves": [
      "눈싸라기",
      "벌레먹기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "얼어붙은바람",
      "벌레의야단법석",
      "냉동빔",
      "폭풍"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": 874,
    "Form": "일반",
    "Pokemon_Name": "돌헨진",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "-",
    "Max_CP": 3638,
    "ATK": 222.0,
    "DEF": 182.0,
    "HP": 225,
    "Fast_Moves": [
      "돌떨구기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤에지",
      "스톤샤워",
      "짓밟기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": 875,
    "Form": "일반",
    "Pokemon_Name": "빙큐보(아이스페이스)",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "-",
    "Max_CP": 2335,
    "ATK": 148.0,
    "DEF": 195.0,
    "HP": 181,
    "Fast_Moves": [
      "눈싸라기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "얼어붙은바람",
      "웨더볼(얼음)",
      "파도타기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": 875,
    "Form": "일반",
    "Pokemon_Name": "빙큐보(나이스페이스)",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "-",
    "Max_CP": 2306,
    "ATK": 173.0,
    "DEF": 139.0,
    "HP": 181,
    "Fast_Moves": [
      "눈싸라기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "얼어붙은바람",
      "웨더볼(얼음)",
      "파도타기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 33,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": 876,
    "Form": "일반",
    "Pokemon_Name": "에써르♀",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "노말",
    "Max_CP": 2710,
    "ATK": 184.0,
    "DEF": 184.0,
    "HP": 172,
    "Fast_Moves": [
      "신통력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "환상빔",
      "사이코키네시스",
      "에너지볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 35,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": 876,
    "Form": "일반",
    "Pokemon_Name": "에써르♂",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "노말",
    "Max_CP": 2762,
    "ATK": 208.0,
    "DEF": 166.0,
    "HP": 155,
    "Fast_Moves": [
      "신통력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "환상빔",
      "사이코키네시스",
      "섀도볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 34,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": 877,
    "Form": "일반",
    "Pokemon_Name": "모르페코(배부름)",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "악",
    "Max_CP": 2196,
    "ATK": 192.0,
    "DEF": 121.0,
    "HP": 151,
    "Fast_Moves": [
      "차지빔",
      "물기",
      "전기쇼크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "씨폭탄",
      "역린",
      "오라휠(전기)",
      "사이코팽"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": 877,
    "Form": "일반",
    "Pokemon_Name": "모르페코(배고픔)",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "악",
    "Max_CP": 2196,
    "ATK": 192.0,
    "DEF": 121.0,
    "HP": 151,
    "Fast_Moves": [
      "차지빔",
      "물기",
      "전기쇼크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "씨폭탄",
      "역린",
      "오라휠(악)",
      "사이코팽"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": 878,
    "Form": "일반",
    "Pokemon_Name": "끼리동",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "-",
    "Max_CP": 1557,
    "ATK": 140.0,
    "DEF": 91.0,
    "HP": 176,
    "Fast_Moves": [
      "몸통박치기",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아이언헤드",
      "구멍파기",
      "치근거리기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 38,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": 879,
    "Form": "일반",
    "Pokemon_Name": "대왕끼리동",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "-",
    "Max_CP": 3369,
    "ATK": 226.0,
    "DEF": 126.0,
    "HP": 263,
    "Fast_Moves": [
      "몸통박치기",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아이언헤드",
      "구멍파기",
      "치근거리기",
      "헤비봄버"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 39,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": 880,
    "Form": "일반",
    "Pokemon_Name": "파치래곤",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 2964,
    "ATK": 195.0,
    "DEF": 165.0,
    "HP": 207,
    "Fast_Moves": [
      "드래곤테일",
      "전기쇼크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "방전",
      "용의파동",
      "원시의힘"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 41,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": 881,
    "Form": "일반",
    "Pokemon_Name": "파치르돈",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "얼음",
    "Max_CP": 2901,
    "ATK": 190.0,
    "DEF": 166.0,
    "HP": 207,
    "Fast_Moves": [
      "눈싸라기",
      "전기쇼크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "방전",
      "눈사태",
      "원시의힘"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 42,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": 882,
    "Form": "일반",
    "Pokemon_Name": "어래곤",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 2826,
    "ATK": 175.0,
    "DEF": 185.0,
    "HP": 207,
    "Fast_Moves": [
      "용의숨결",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "소금물",
      "용의파동",
      "원시의힘"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 43,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": 883,
    "Form": "일반",
    "Pokemon_Name": "어치르돈",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "얼음",
    "Max_CP": 2767,
    "ATK": 171.0,
    "DEF": 185.0,
    "HP": 207,
    "Fast_Moves": [
      "눈싸라기",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "소금물",
      "눈사태",
      "원시의힘"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 44,
    "Sprite_Row": 27
  },
  {
    "Pokemon_ID": 884,
    "Form": "일반",
    "Pokemon_Name": "두랄루돈",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 3468,
    "ATK": 239.0,
    "DEF": 185.0,
    "HP": 172,
    "Fast_Moves": [
      "드래곤테일",
      "메탈클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "러스터캐논",
      "드래곤클로",
      "파괴광선"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 885,
    "Form": "일반",
    "Pokemon_Name": "드라꼰",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "고스트",
    "Max_CP": 867,
    "ATK": 117.0,
    "DEF": 61.0,
    "HP": 99,
    "Fast_Moves": [
      "놀래키기",
      "전광석화"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 3,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 886,
    "Form": "일반",
    "Pokemon_Name": "드래런치",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "고스트",
    "Max_CP": 1867,
    "ATK": 163.0,
    "DEF": 105.0,
    "HP": 169,
    "Fast_Moves": [
      "놀래키기",
      "드래곤테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "용의파동",
      "섀도볼",
      "역린"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 887,
    "Form": "일반",
    "Pokemon_Name": "드래펄트",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "고스트",
    "Max_CP": 3993,
    "ATK": 266.0,
    "DEF": 170.0,
    "HP": 204,
    "Fast_Moves": [
      "놀래키기",
      "드래곤테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "용의파동",
      "섀도볼",
      "역린",
      "와이드브레이커"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 5,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 888,
    "Form": "일반",
    "Pokemon_Name": "자시안",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "-",
    "Max_CP": 4329,
    "ATK": 254.0,
    "DEF": 236.0,
    "HP": 192,
    "Fast_Moves": [
      "메탈클로",
      "바크아웃",
      "전광석화",
      "불꽃엄니"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "치근거리기",
      "아이언헤드",
      "와일드볼트",
      "인파이트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 6,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 888,
    "Form": "일반",
    "Pokemon_Name": "자시안(검왕폼)",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "강철",
    "Max_CP": 5629,
    "ATK": 332.0,
    "DEF": 240.0,
    "HP": 192,
    "Fast_Moves": [
      "메탈클로",
      "에어슬래시"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "치근거리기",
      "인파이트",
      "기가임팩트"
    ],
    "Elite_Charged_Moves": [
      "거수참"
    ],
    "Sprite_Col": 7,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 889,
    "Form": "일반",
    "Pokemon_Name": "자마젠타",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 4329,
    "ATK": 254.0,
    "DEF": 236.0,
    "HP": 192,
    "Fast_Moves": [
      "메탈클로",
      "바크아웃",
      "전광석화",
      "얼음엄니"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "문포스",
      "아이언헤드",
      "깨물어부수기",
      "인파이트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 8,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 889,
    "Form": "일반",
    "Pokemon_Name": "자마젠타(방패왕폼)",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "강철",
    "Max_CP": 4717,
    "ATK": 250.0,
    "DEF": 292.0,
    "HP": 192,
    "Fast_Moves": [
      "메탈클로",
      "얼음엄니"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "문포스",
      "인파이트",
      "기가임팩트"
    ],
    "Elite_Charged_Moves": [
      "거수탄"
    ],
    "Sprite_Col": 9,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 890,
    "Form": "일반",
    "Pokemon_Name": "무한다이노",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 5007,
    "ATK": 278.0,
    "DEF": 192.0,
    "HP": 268,
    "Fast_Moves": [
      "드래곤테일",
      "독찌르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오물폭탄",
      "용의파동",
      "화염방사"
    ],
    "Elite_Charged_Moves": [
      "다이맥스포"
    ],
    "Sprite_Col": 10,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 890,
    "Form": "일반",
    "Pokemon_Name": "무한다이맥스",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 9255,
    "ATK": 251.0,
    "DEF": 505.0,
    "HP": 452,
    "Fast_Moves": [
      "드래곤테일",
      "독찌르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오물폭탄",
      "용의파동",
      "화염방사"
    ],
    "Elite_Charged_Moves": [
      "다이맥스포"
    ],
    "Sprite_Col": 11,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 891,
    "Form": "일반",
    "Pokemon_Name": "치고마",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "-",
    "Max_CP": 1919,
    "ATK": 170.0,
    "DEF": 112.0,
    "HP": 155,
    "Fast_Moves": [
      "바위깨기",
      "카운터"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨트리기",
      "폭발펀치",
      "인파이트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 12,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 892,
    "Form": "일반",
    "Pokemon_Name": "우라오스(일격태세)",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "악",
    "Max_CP": 4077,
    "ATK": 254.0,
    "DEF": 177.0,
    "HP": 225,
    "Fast_Moves": [
      "바위깨기",
      "카운터",
      "기습"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨트리기",
      "폭발펀치",
      "인파이트",
      "보복"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 892,
    "Form": "일반",
    "Pokemon_Name": "우라오스(연격태세)",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "물",
    "Max_CP": 4077,
    "ATK": 254.0,
    "DEF": 177.0,
    "HP": 225,
    "Fast_Moves": [
      "바위깨기",
      "카운터",
      "폭포오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨트리기",
      "폭발펀치",
      "인파이트",
      "아쿠아제트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 893,
    "Form": "일반",
    "Pokemon_Name": "자루도",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "풀",
    "Max_CP": 4334,
    "ATK": 242.0,
    "DEF": 215.0,
    "HP": 233,
    "Fast_Moves": [
      "덩굴채찍",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파워휩",
      "에너지볼",
      "악의파동"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 16,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 894,
    "Form": "일반",
    "Pokemon_Name": "레지에레키",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 3169,
    "ATK": 250.0,
    "DEF": 125.0,
    "HP": 190,
    "Fast_Moves": [
      "전기쇼크",
      "록온",
      "볼트체인지"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파괴광선",
      "번개",
      "전자포"
    ],
    "Elite_Charged_Moves": [
      "썬더프리즌"
    ],
    "Sprite_Col": 18,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 895,
    "Form": "일반",
    "Pokemon_Name": "레지드래고",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "-",
    "Max_CP": 3361,
    "ATK": 202.0,
    "DEF": 101.0,
    "HP": 400,
    "Fast_Moves": [
      "물기"
    ],
    "Elite_Fast_Moves": [
      "용의숨결"
    ],
    "Charged_Moves": [
      "파괴광선",
      "역린",
      "용의파동",
      "와이드브레이커"
    ],
    "Elite_Charged_Moves": [
      "드래곤에너지"
    ],
    "Sprite_Col": 19,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 896,
    "Form": "일반",
    "Pokemon_Name": "블리자포스",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "-",
    "Max_CP": 4404,
    "ATK": 246.0,
    "DEF": 223.0,
    "HP": 225,
    "Fast_Moves": [
      "몸통박치기",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "눈사태",
      "얼어붙은바람",
      "땅고르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 20,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 897,
    "Form": "일반",
    "Pokemon_Name": "레이스포스",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "-",
    "Max_CP": 3827,
    "ATK": 273.0,
    "DEF": 146.0,
    "HP": 205,
    "Fast_Moves": [
      "몸통박치기",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도볼",
      "속임수",
      "땅고르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 21,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 898,
    "Form": "일반",
    "Pokemon_Name": "버드렉스",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "풀",
    "Max_CP": 2575,
    "ATK": 162.0,
    "DEF": 162.0,
    "HP": 225,
    "Fast_Moves": [
      "막치기",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코쇼크",
      "사이코키네시스",
      "에너지볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 22,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 898,
    "Form": "일반",
    "Pokemon_Name": "버드렉스(백마에 탄 모습)",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "얼음",
    "Max_CP": 4788,
    "ATK": 268.0,
    "DEF": 246.0,
    "HP": 205,
    "Fast_Moves": [
      "염동력",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코쇼크",
      "사이코키네시스",
      "에너지볼",
      "눈사태"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 23,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 898,
    "Form": "일반",
    "Pokemon_Name": "버드렉스(흑마에 탄 모습)",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "고스트",
    "Max_CP": 4788,
    "ATK": 268.0,
    "DEF": 246.0,
    "HP": 205,
    "Fast_Moves": [
      "염동력",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코쇼크",
      "사이코키네시스",
      "에너지볼",
      "섀도볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 899,
    "Form": "일반",
    "Pokemon_Name": "신비록",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 3089,
    "ATK": 206.0,
    "DEF": 145.0,
    "HP": 230,
    "Fast_Moves": [
      "몸통박치기",
      "사념의박치기",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "짓밟기",
      "와일드볼트",
      "메가혼",
      "사이코키네시스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 25,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 900,
    "Form": "일반",
    "Pokemon_Name": "사마자르",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "바위",
    "Max_CP": 3557,
    "ATK": 253.0,
    "DEF": 174.0,
    "HP": 172,
    "Fast_Moves": [
      "전광석화",
      "에어슬래시",
      "연속자르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "시저크로스",
      "스톤샤워",
      "스톤에지",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 26,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 901,
    "Form": "일반",
    "Pokemon_Name": "다투곰",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "노말",
    "Max_CP": 4358,
    "ATK": 243.0,
    "DEF": 181.0,
    "HP": 277,
    "Fast_Moves": [
      "몸통박치기",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "불꽃펀치",
      "번개펀치",
      "제비반환",
      "냉동펀치",
      "개척하기",
      "스피드스타"
    ],
    "Elite_Charged_Moves": [
      "10만마력"
    ],
    "Sprite_Col": 27,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": "901-S",
    "Form": "그림자",
    "Pokemon_Name": "다투곰",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "노말",
    "Max_CP": 4358,
    "ATK": 242.99999999999997,
    "DEF": 181.0,
    "HP": 277,
    "Fast_Moves": [
      "몸통박치기",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "불꽃펀치",
      "번개펀치",
      "제비반환",
      "냉동펀치",
      "개척하기",
      "스피드스타"
    ],
    "Elite_Charged_Moves": [
      "10만마력"
    ],
    "Sprite_Col": 27,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 903,
    "Form": "일반",
    "Pokemon_Name": "포푸니크",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "독",
    "Max_CP": 3643,
    "ATK": 259.0,
    "DEF": 158.0,
    "HP": 190,
    "Fast_Moves": [
      "바위깨기",
      "독찌르기",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "제비반환",
      "인파이트",
      "시저크로스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": "903-S",
    "Form": "그림자",
    "Pokemon_Name": "포푸니크",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "독",
    "Max_CP": 3643,
    "ATK": 259.0,
    "DEF": 158.0,
    "HP": 190,
    "Fast_Moves": [
      "바위깨기",
      "독찌르기",
      "섀도클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "제비반환",
      "인파이트",
      "시저크로스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 904,
    "Form": "일반",
    "Pokemon_Name": "장침바루",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "독",
    "Max_CP": 3330,
    "ATK": 222.0,
    "DEF": 171.0,
    "HP": 198,
    "Fast_Moves": [
      "독침",
      "독찌르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아테일",
      "냉동빔",
      "오물폭탄",
      "악의파동",
      "섀도볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 905,
    "Form": "일반",
    "Pokemon_Name": "러브로스(화신폼)",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "비행",
    "Max_CP": 3873,
    "ATK": 281.0,
    "DEF": 162.0,
    "HP": 179,
    "Fast_Moves": [
      "놀래키기",
      "사념의박치기",
      "요정의바람"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "매지컬샤인",
      "공중날기",
      "풀묶기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 33,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 905,
    "Form": "일반",
    "Pokemon_Name": "러브로스(영물폼)",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "비행",
    "Max_CP": 3830,
    "ATK": 250.0,
    "DEF": 201.0,
    "HP": 179,
    "Fast_Moves": [
      "놀래키기",
      "사념의박치기",
      "요정의바람"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "매지컬샤인",
      "공중날기",
      "풀묶기"
    ],
    "Elite_Charged_Moves": [
      "요정의바람"
    ],
    "Sprite_Col": 34,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 906,
    "Form": "일반",
    "Pokemon_Name": "나오하",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 1147,
    "ATK": 116.0,
    "DEF": 99.0,
    "HP": 120,
    "Fast_Moves": [
      "나뭇잎",
      "애교부리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "풀묶기",
      "치근거리기",
      "에너지볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 35,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 907,
    "Form": "일반",
    "Pokemon_Name": "나로테",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 1899,
    "ATK": 157.0,
    "DEF": 128.0,
    "HP": 156,
    "Fast_Moves": [
      "나뭇잎",
      "애교부리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "풀묶기",
      "치근거리기",
      "에너지볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 908,
    "Form": "일반",
    "Pokemon_Name": "마스카나",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "악",
    "Max_CP": 3193,
    "ATK": 233.0,
    "DEF": 153.0,
    "HP": 183,
    "Fast_Moves": [
      "나뭇잎",
      "애교부리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "풀묶기",
      "치근거리기",
      "에너지볼",
      "깜짝베기",
      "트릭플라워"
    ],
    "Elite_Charged_Moves": [
      "하드플랜트"
    ],
    "Sprite_Col": 37,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 909,
    "Form": "일반",
    "Pokemon_Name": "뜨아거",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 1274,
    "ATK": 112.0,
    "DEF": 96.0,
    "HP": 167,
    "Fast_Moves": [
      "불태우기",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "화염방사",
      "차밍보이스",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 38,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 910,
    "Form": "일반",
    "Pokemon_Name": "악뜨거",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 2189,
    "ATK": 162.0,
    "DEF": 134.0,
    "HP": 191,
    "Fast_Moves": [
      "불태우기",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "화염방사",
      "차밍보이스",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 39,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 911,
    "Form": "일반",
    "Pokemon_Name": "라우드본",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "고스트",
    "Max_CP": 3422,
    "ATK": 207.0,
    "DEF": 178.0,
    "HP": 232,
    "Fast_Moves": [
      "불태우기",
      "물기",
      "병상첨병"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "화염방사",
      "차밍보이스",
      "깨물어부수기",
      "섀도볼",
      "플레어송"
    ],
    "Elite_Charged_Moves": [
      "블라스트번"
    ],
    "Sprite_Col": 40,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 912,
    "Form": "일반",
    "Pokemon_Name": "꾸왁스",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 1215,
    "ATK": 120.0,
    "DEF": 86.0,
    "HP": 146,
    "Fast_Moves": [
      "물대포",
      "날개치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아제트",
      "제비반환",
      "아쿠아브레이크"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 41,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 913,
    "Form": "일반",
    "Pokemon_Name": "아꾸왁",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 2007,
    "ATK": 162.0,
    "DEF": 123.0,
    "HP": 172,
    "Fast_Moves": [
      "물대포",
      "날개치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아제트",
      "제비반환",
      "아쿠아브레이크"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 42,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 914,
    "Form": "일반",
    "Pokemon_Name": "웨이니발",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "격투",
    "Max_CP": 3411,
    "ATK": 236.0,
    "DEF": 159.0,
    "HP": 198,
    "Fast_Moves": [
      "물대포",
      "날개치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아제트",
      "제비반환",
      "아쿠아브레이크",
      "인파이트",
      "아쿠아스텝"
    ],
    "Elite_Charged_Moves": [
      "하이드로캐논"
    ],
    "Sprite_Col": 43,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 915,
    "Form": "일반",
    "Pokemon_Name": "맛보돈",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 828,
    "ATK": 81.0,
    "DEF": 79.0,
    "HP": 144,
    "Fast_Moves": [
      "몸통박치기",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "개척하기",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 44,
    "Sprite_Row": 28
  },
  {
    "Pokemon_ID": 916,
    "Form": "일반",
    "Pokemon_Name": "퍼퓨돈♀",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 2819,
    "ATK": 169.0,
    "DEF": 162.0,
    "HP": 251,
    "Fast_Moves": [
      "몸통박치기",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "개척하기",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 2,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 916,
    "Form": "일반",
    "Pokemon_Name": "퍼퓨돈♂",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 2949,
    "ATK": 186.0,
    "DEF": 153.0,
    "HP": 242,
    "Fast_Moves": [
      "몸통박치기",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "개척하기",
      "누르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 917,
    "Form": "일반",
    "Pokemon_Name": "타랜툴라",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 646,
    "ATK": 70.0,
    "DEF": 77.0,
    "HP": 111,
    "Fast_Moves": [
      "벌레먹기",
      "벌레의저항"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "시저크로스",
      "풀묶기",
      "덤벼들기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 3,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 918,
    "Form": "일반",
    "Pokemon_Name": "트래피더",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 1907,
    "ATK": 139.0,
    "DEF": 166.0,
    "HP": 155,
    "Fast_Moves": [
      "벌레먹기",
      "카운터"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "시저크로스",
      "풀묶기",
      "덤벼들기",
      "암석봉인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 919,
    "Form": "일반",
    "Pokemon_Name": "콩알뚜기",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 669,
    "ATK": 81.0,
    "DEF": 65.0,
    "HP": 107,
    "Fast_Moves": [
      "벌레먹기",
      "벌레의저항"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "시저크로스",
      "개척하기",
      "벌레의야단법석"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 5,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 920,
    "Form": "일반",
    "Pokemon_Name": "엑스레그",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "악",
    "Max_CP": 2619,
    "ATK": 199.0,
    "DEF": 144.0,
    "HP": 174,
    "Fast_Moves": [
      "벌레먹기",
      "기습",
      "카운터"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "시저크로스",
      "개척하기",
      "벌레의야단법석",
      "악의파동"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 6,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 921,
    "Form": "일반",
    "Pokemon_Name": "빠모",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 719,
    "ATK": 95.0,
    "DEF": 45.0,
    "HP": 128,
    "Fast_Moves": [
      "스파크",
      "차지빔",
      "전기쇼크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "10만볼트",
      "방전",
      "와일드볼트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 922,
    "Form": "일반",
    "Pokemon_Name": "빠모트",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "격투",
    "Max_CP": 1468,
    "ATK": 147.0,
    "DEF": 82.0,
    "HP": 155,
    "Fast_Moves": [
      "스파크",
      "차지빔",
      "전기쇼크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "10만볼트",
      "방전",
      "와일드볼트",
      "번개펀치"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 8,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 923,
    "Form": "일반",
    "Pokemon_Name": "빠르모트",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "격투",
    "Max_CP": 2978,
    "ATK": 232.0,
    "DEF": 141.0,
    "HP": 172,
    "Fast_Moves": [
      "스파크",
      "차지빔",
      "안다리걸기",
      "전기쇼크"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "10만볼트",
      "방전",
      "와일드볼트",
      "인파이트",
      "번개펀치"
    ],
    "Elite_Charged_Moves": [
      "깨트리기"
    ],
    "Sprite_Col": 9,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 924,
    "Form": "일반",
    "Pokemon_Name": "두리쥐",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 1008,
    "ATK": 98.0,
    "DEF": 90.0,
    "HP": 137,
    "Fast_Moves": [
      "돌진",
      "머드샷",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스피드스타",
      "치근거리기",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 10,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 925,
    "Form": "일반",
    "Pokemon_Name": "파밀리쥐(세식구)",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 2244,
    "ATK": 159.0,
    "DEF": 157.0,
    "HP": 179,
    "Fast_Moves": [
      "돌진",
      "머드샷",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스피드스타",
      "치근거리기",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 925,
    "Form": "일반",
    "Pokemon_Name": "파밀리쥐(네식구)",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 2244,
    "ATK": 159.0,
    "DEF": 157.0,
    "HP": 179,
    "Fast_Moves": [
      "돌진",
      "머드샷",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스피드스타",
      "치근거리기",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 12,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 926,
    "Form": "일반",
    "Pokemon_Name": "쫀도기",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "-",
    "Max_CP": 1114,
    "ATK": 102.0,
    "DEF": 126.0,
    "HP": 114,
    "Fast_Moves": [
      "애교부리기",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "누르기",
      "치근거리기",
      "사이코팽"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 927,
    "Form": "일반",
    "Pokemon_Name": "바우첼",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "-",
    "Max_CP": 2370,
    "ATK": 159.0,
    "DEF": 212.0,
    "HP": 149,
    "Fast_Moves": [
      "애교부리기",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "누르기",
      "치근거리기",
      "사이코팽"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 14,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 928,
    "Form": "일반",
    "Pokemon_Name": "미니브",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "노말",
    "Max_CP": 965,
    "ATK": 100.0,
    "DEF": 89.0,
    "HP": 121,
    "Fast_Moves": [
      "잎날가르기",
      "몸통박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "씨폭탄",
      "에너지볼",
      "대지의힘",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 15,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 929,
    "Form": "일반",
    "Pokemon_Name": "올리뇨",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "노말",
    "Max_CP": 1619,
    "ATK": 137.0,
    "DEF": 131.0,
    "HP": 141,
    "Fast_Moves": [
      "잎날가르기",
      "몸통박치기",
      "메지컬리프"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "씨폭탄",
      "에너지볼",
      "대지의힘",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 16,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 930,
    "Form": "일반",
    "Pokemon_Name": "올리르바",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "노말",
    "Max_CP": 3345,
    "ATK": 219.0,
    "DEF": 189.0,
    "HP": 186,
    "Fast_Moves": [
      "잎날가르기",
      "몸통박치기",
      "메지컬리프"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "씨폭탄",
      "에너지볼",
      "대지의힘",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 17,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 931,
    "Form": "일반",
    "Pokemon_Name": "시비꼬",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "비행",
    "Max_CP": 2231,
    "ATK": 185.0,
    "DEF": 105.0,
    "HP": 193,
    "Fast_Moves": [
      "쪼기",
      "에어슬래시"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "제비반환",
      "브레이브버드",
      "공중날기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 18,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 932,
    "Form": "일반",
    "Pokemon_Name": "베베솔트",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "-",
    "Max_CP": 1093,
    "ATK": 95.0,
    "DEF": 108.0,
    "HP": 146,
    "Fast_Moves": [
      "돌떨구기",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "록블라스트",
      "암석봉인",
      "원시의힘"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 22,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 933,
    "Form": "일반",
    "Pokemon_Name": "스태솔트",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "-",
    "Max_CP": 1461,
    "ATK": 105.0,
    "DEF": 160.0,
    "HP": 155,
    "Fast_Moves": [
      "떨어뜨리기",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "록블라스트",
      "암석봉인",
      "원시의힘"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 23,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 934,
    "Form": "일반",
    "Pokemon_Name": "콜로솔트",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "-",
    "Max_CP": 3065,
    "ATK": 171.0,
    "DEF": 212.0,
    "HP": 225,
    "Fast_Moves": [
      "떨어뜨리기",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "록블라스트",
      "암석봉인",
      "원시의힘"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 935,
    "Form": "일반",
    "Pokemon_Name": "카르본",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "-",
    "Max_CP": 828,
    "ATK": 92.0,
    "DEF": 74.0,
    "HP": 120,
    "Fast_Moves": [
      "불꽃세례",
      "불태우기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "니트로차지",
      "열풍",
      "화염방사"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 25,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 936,
    "Form": "일반",
    "Pokemon_Name": "카디나르마",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 3628,
    "ATK": 234.0,
    "DEF": 185.0,
    "HP": 198,
    "Fast_Moves": [
      "불꽃세례",
      "불태우기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "니트로차지",
      "열풍",
      "화염방사",
      "사이코쇼크"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 26,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 937,
    "Form": "일반",
    "Pokemon_Name": "파라블레이즈",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "고스트",
    "Max_CP": 3586,
    "ATK": 239.0,
    "DEF": 189.0,
    "HP": 181,
    "Fast_Moves": [
      "불꽃세례",
      "불태우기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "니트로차지",
      "열풍",
      "화염방사",
      "섀도볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 27,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 938,
    "Form": "일반",
    "Pokemon_Name": "빈나두",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 1030,
    "ATK": 104.0,
    "DEF": 73.0,
    "HP": 156,
    "Fast_Moves": [
      "전기쇼크",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파라볼라차지",
      "방전",
      "전자포"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 28,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 939,
    "Form": "일반",
    "Pokemon_Name": "찌리배리",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "-",
    "Max_CP": 3010,
    "ATK": 184.0,
    "DEF": 165.0,
    "HP": 240,
    "Fast_Moves": [
      "전기쇼크",
      "물대포",
      "기습"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파라볼라차지",
      "방전",
      "전자포"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 29,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 940,
    "Form": "일반",
    "Pokemon_Name": "찌리비",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "비행",
    "Max_CP": 933,
    "ATK": 105.0,
    "DEF": 75.0,
    "HP": 120,
    "Fast_Moves": [
      "전기쇼크",
      "쪼기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "애크러뱃",
      "제비반환",
      "10만볼트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 941,
    "Form": "일반",
    "Pokemon_Name": "찌리비크",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "비행",
    "Max_CP": 2762,
    "ATK": 221.0,
    "DEF": 132.0,
    "HP": 172,
    "Fast_Moves": [
      "전기쇼크",
      "에어슬래시"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "애크러뱃",
      "제비반환",
      "10만볼트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 942,
    "Form": "일반",
    "Pokemon_Name": "오라티프",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "-",
    "Max_CP": 1582,
    "ATK": 140.0,
    "DEF": 108.0,
    "HP": 155,
    "Fast_Moves": [
      "바크아웃",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "보복",
      "구멍파기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 943,
    "Form": "일반",
    "Pokemon_Name": "마피티프",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "-",
    "Max_CP": 3350,
    "ATK": 230.0,
    "DEF": 168.0,
    "HP": 190,
    "Fast_Moves": [
      "바크아웃",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "깨물어부수기",
      "보복",
      "구멍파기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 33,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 944,
    "Form": "일반",
    "Pokemon_Name": "땃쭈르",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "노말",
    "Max_CP": 1051,
    "ATK": 124.0,
    "DEF": 70.0,
    "HP": 120,
    "Fast_Moves": [
      "진흙뿌리기",
      "독찌르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "애시드봄",
      "맹독엄니",
      "오물폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 34,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 945,
    "Form": "일반",
    "Pokemon_Name": "태깅구르",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "노말",
    "Max_CP": 2559,
    "ATK": 199.0,
    "DEF": 149.0,
    "HP": 160,
    "Fast_Moves": [
      "진흙뿌리기",
      "독찌르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "애시드봄",
      "맹독엄니",
      "오물폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 35,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 946,
    "Form": "일반",
    "Pokemon_Name": "그푸리",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "고스트",
    "Max_CP": 991,
    "ATK": 121.0,
    "DEF": 64.0,
    "HP": 120,
    "Fast_Moves": [
      "놀래키기",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "야습",
      "나이트헤드",
      "파워휩"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 947,
    "Form": "일반",
    "Pokemon_Name": "공푸리",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "고스트",
    "Max_CP": 2745,
    "ATK": 228.0,
    "DEF": 144.0,
    "HP": 146,
    "Fast_Moves": [
      "병상첨병",
      "씨기관총"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "야습",
      "나이트헤드",
      "파워휩"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 948,
    "Form": "일반",
    "Pokemon_Name": "들눈해",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "풀",
    "Max_CP": 1176,
    "ATK": 97.0,
    "DEF": 149.0,
    "HP": 120,
    "Fast_Moves": [
      "진흙뿌리기",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "대지의힘",
      "씨폭탄",
      "김밥말이"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 38,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 949,
    "Form": "일반",
    "Pokemon_Name": "육파리",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "풀",
    "Max_CP": 2738,
    "ATK": 166.0,
    "DEF": 209.0,
    "HP": 190,
    "Fast_Moves": [
      "진흙뿌리기",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "대지의힘",
      "씨폭탄",
      "김밥말이",
      "애시드봄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 39,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 950,
    "Form": "일반",
    "Pokemon_Name": "절벼게",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "-",
    "Max_CP": 2717,
    "ATK": 184.0,
    "DEF": 185.0,
    "HP": 172,
    "Fast_Moves": [
      "돌떨구기",
      "진흙뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "스톤샤워",
      "암석봉인",
      "땅고르기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 40,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 951,
    "Form": "일반",
    "Pokemon_Name": "캡싸이",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 1104,
    "ATK": 118.0,
    "DEF": 76.0,
    "HP": 137,
    "Fast_Moves": [
      "나뭇잎",
      "잎날가르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "리프스톰",
      "풀묶기",
      "씨폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 41,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 952,
    "Form": "일반",
    "Pokemon_Name": "스코빌런",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "불꽃",
    "Max_CP": 2620,
    "ATK": 216.0,
    "DEF": 130.0,
    "HP": 163,
    "Fast_Moves": [
      "나뭇잎",
      "불꽃엄니"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "리프스톰",
      "풀묶기",
      "오버히트",
      "화염방사"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 42,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 953,
    "Form": "일반",
    "Pokemon_Name": "구르데",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "-",
    "Max_CP": 922,
    "ATK": 86.0,
    "DEF": 108.0,
    "HP": 121,
    "Fast_Moves": [
      "벌레먹기",
      "벌레의저항"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "벌레의야단법석",
      "덤벼들기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 43,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 954,
    "Form": "일반",
    "Pokemon_Name": "베라카스",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 2966,
    "ATK": 201.0,
    "DEF": 178.0,
    "HP": 181,
    "Fast_Moves": [
      "벌레먹기",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "벌레의야단법석",
      "덤벼들기",
      "환상빔"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 44,
    "Sprite_Row": 29
  },
  {
    "Pokemon_ID": 955,
    "Form": "일반",
    "Pokemon_Name": "하느라기",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 793,
    "ATK": 105.0,
    "DEF": 60.0,
    "HP": 102,
    "Fast_Moves": [
      "쪼기",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "환상빔",
      "사이코쇼크",
      "사이코키네시스"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 956,
    "Form": "일반",
    "Pokemon_Name": "클레스퍼트라",
    "Pokemon_Type1": "에스퍼",
    "Pokemon_Type2": "-",
    "Max_CP": 2800,
    "ATK": 204.0,
    "DEF": 127.0,
    "HP": 216,
    "Fast_Moves": [
      "쪼기",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "환상빔",
      "사이코쇼크",
      "사이코키네시스",
      "매지컬샤인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 2,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 957,
    "Form": "일반",
    "Pokemon_Name": "어리짱",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "강철",
    "Max_CP": 973,
    "ATK": 85.0,
    "DEF": 110.0,
    "HP": 137,
    "Fast_Moves": [
      "요정의바람",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "치근거리기",
      "러스터캐논"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 3,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 958,
    "Form": "일반",
    "Pokemon_Name": "벼리짱",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "강철",
    "Max_CP": 1477,
    "ATK": 109.0,
    "DEF": 145.0,
    "HP": 163,
    "Fast_Moves": [
      "요정의바람",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "치근거리기",
      "러스터캐논"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 959,
    "Form": "일반",
    "Pokemon_Name": "두드리짱",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "강철",
    "Max_CP": 2544,
    "ATK": 155.0,
    "DEF": 196.0,
    "HP": 198,
    "Fast_Moves": [
      "요정의바람",
      "바위깨기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "치근거리기",
      "러스터캐논",
      "땅고르기",
      "헤비봄버"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 5,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 960,
    "Form": "일반",
    "Pokemon_Name": "바다그다",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 648,
    "ATK": 109.0,
    "DEF": 52.0,
    "HP": 67,
    "Fast_Moves": [
      "물대포",
      "진흙뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아브레이크",
      "구멍파기",
      "파도타기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 6,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 961,
    "Form": "일반",
    "Pokemon_Name": "바닥트리오",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 2142,
    "ATK": 205.0,
    "DEF": 136.0,
    "HP": 111,
    "Fast_Moves": [
      "물대포",
      "진흙뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아브레이크",
      "구멍파기",
      "파도타기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 962,
    "Form": "일반",
    "Pokemon_Name": "떨구새",
    "Pokemon_Type1": "비행",
    "Pokemon_Type2": "악",
    "Max_CP": 2812,
    "ATK": 198.0,
    "DEF": 172.0,
    "HP": 172,
    "Fast_Moves": [
      "날개치기",
      "돌떨구기",
      "기습"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "보복",
      "제비반환",
      "공중날기",
      "암석봉인"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 8,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 963,
    "Form": "일반",
    "Pokemon_Name": "맨돌핀",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 988,
    "ATK": 90.0,
    "DEF": 80.0,
    "HP": 172,
    "Fast_Moves": [
      "폭포오르기",
      "애교부리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아제트",
      "물의파동",
      "얼어붙은바람"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 9,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 964,
    "Form": "일반",
    "Pokemon_Name": "돌핀맨(히어로폼)",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 5354,
    "ATK": 322.0,
    "DEF": 196.0,
    "HP": 225,
    "Fast_Moves": [
      "폭포오르기",
      "애교부리기",
      "카운터"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아제트",
      "물의파동",
      "얼어붙은바람",
      "드레인펀치",
      "애크러뱃"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 964,
    "Form": "일반",
    "Pokemon_Name": "돌핀맨(제로폼)",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 2179,
    "ATK": 143.0,
    "DEF": 144.0,
    "HP": 225,
    "Fast_Moves": [
      "폭포오르기",
      "애교부리기",
      "카운터"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "아쿠아제트",
      "물의파동",
      "얼어붙은바람",
      "드레인펀치",
      "애크러뱃"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 10,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 965,
    "Form": "일반",
    "Pokemon_Name": "부르롱",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "강철",
    "Max_CP": 1287,
    "ATK": 123.0,
    "DEF": 107.0,
    "HP": 128,
    "Fast_Moves": [
      "핥기",
      "독찌르기",
      "금속음"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "애시드봄",
      "더스트슈트",
      "자이로볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 12,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 966,
    "Form": "일반",
    "Pokemon_Name": "부르르룸",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "강철",
    "Max_CP": 3337,
    "ATK": 229.0,
    "DEF": 168.0,
    "HP": 190,
    "Fast_Moves": [
      "핥기",
      "독찌르기",
      "금속음"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "애시드봄",
      "더스트슈트",
      "자이로볼",
      "오버히트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 967,
    "Form": "일반",
    "Pokemon_Name": "모토마",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "노말",
    "Max_CP": 2661,
    "ATK": 205.0,
    "DEF": 142.0,
    "HP": 172,
    "Fast_Moves": [
      "드래곤테일",
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "드래곤클로",
      "누르기",
      "개척하기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 14,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 968,
    "Form": "일반",
    "Pokemon_Name": "꿈트렁",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "-",
    "Max_CP": 2599,
    "ATK": 161.0,
    "DEF": 219.0,
    "HP": 172,
    "Fast_Moves": [
      "아이언테일",
      "진흙뿌리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "암석봉인",
      "지진",
      "아이언헤드"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 15,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 969,
    "Form": "일반",
    "Pokemon_Name": "초롱순",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "독",
    "Max_CP": 1899,
    "ATK": 187.0,
    "DEF": 104.0,
    "HP": 134,
    "Fast_Moves": [
      "돌떨구기",
      "떨어뜨리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "매지컬샤인",
      "파워젬",
      "오물웨이브"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 16,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 970,
    "Form": "일반",
    "Pokemon_Name": "킬라플로르",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "독",
    "Max_CP": 3700,
    "ATK": 246.0,
    "DEF": 177.0,
    "HP": 195,
    "Fast_Moves": [
      "돌떨구기",
      "떨어뜨리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "매지컬샤인",
      "파워젬",
      "오물웨이브"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 17,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 971,
    "Form": "일반",
    "Pokemon_Name": "망망이",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "-",
    "Max_CP": 1149,
    "ATK": 105.0,
    "DEF": 106.0,
    "HP": 137,
    "Fast_Moves": [
      "핥기",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도볼",
      "구멍파기",
      "사이코팽"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 18,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 972,
    "Form": "일반",
    "Pokemon_Name": "묘두기",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "-",
    "Max_CP": 2842,
    "ATK": 186.0,
    "DEF": 195.0,
    "HP": 176,
    "Fast_Moves": [
      "핥기",
      "물기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도볼",
      "구멍파기",
      "사이코팽"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 19,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 973,
    "Form": "일반",
    "Pokemon_Name": "꼬이밍고",
    "Pokemon_Type1": "비행",
    "Pokemon_Type2": "격투",
    "Max_CP": 3117,
    "ATK": 227.0,
    "DEF": 145.0,
    "HP": 193,
    "Fast_Moves": [
      "날개치기",
      "두번차기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "제비반환",
      "브레이브버드",
      "인파이트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 20,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 974,
    "Form": "일반",
    "Pokemon_Name": "터벅고래",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "-",
    "Max_CP": 1469,
    "ATK": 119.0,
    "DEF": 80.0,
    "HP": 239,
    "Fast_Moves": [
      "얼음뭉치",
      "몸통박치기",
      "눈싸라기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "누르기",
      "눈사태",
      "헤비봄버"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 21,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 975,
    "Form": "일반",
    "Pokemon_Name": "우락고래",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "-",
    "Max_CP": 3519,
    "ATK": 208.0,
    "DEF": 123.0,
    "HP": 347,
    "Fast_Moves": [
      "얼음뭉치",
      "몸통박치기",
      "눈싸라기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "누르기",
      "눈사태",
      "헤비봄버"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 22,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 976,
    "Form": "일반",
    "Pokemon_Name": "가비루사",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 2754,
    "ATK": 196.0,
    "DEF": 139.0,
    "HP": 207,
    "Fast_Moves": [
      "얼음엄니",
      "사념의박치기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "물의파동",
      "사이코팽",
      "드릴라이너",
      "깨물어부수기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 23,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 977,
    "Form": "일반",
    "Pokemon_Name": "어써러셔",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "-",
    "Max_CP": 3388,
    "ATK": 176.0,
    "DEF": 178.0,
    "HP": 312,
    "Fast_Moves": [
      "폭포오르기",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "역린",
      "파도타기",
      "하이드로펌프",
      "아쿠아브레이크"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 978,
    "Form": "일반",
    "Pokemon_Name": "싸리용(젖힌 모습)",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "물",
    "Max_CP": 3105,
    "ATK": 226.0,
    "DEF": 166.0,
    "HP": 169,
    "Fast_Moves": [
      "돌진",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "역린",
      "파도타기",
      "하이드로펌프",
      "탁류"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 25,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 978,
    "Form": "일반",
    "Pokemon_Name": "싸리용(늘어진 모습)",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "물",
    "Max_CP": 3105,
    "ATK": 226.0,
    "DEF": 166.0,
    "HP": 169,
    "Fast_Moves": [
      "돌진",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "역린",
      "파도타기",
      "하이드로펌프",
      "탁류"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 26,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 978,
    "Form": "일반",
    "Pokemon_Name": "싸리용(뻗은 모습)",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "물",
    "Max_CP": 3105,
    "ATK": 226.0,
    "DEF": 166.0,
    "HP": 169,
    "Fast_Moves": [
      "돌진",
      "물대포"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "역린",
      "파도타기",
      "하이드로펌프",
      "탁류"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 27,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 979,
    "Form": "일반",
    "Pokemon_Name": "저승갓숭",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "고스트",
    "Max_CP": 3695,
    "ATK": 220.0,
    "DEF": 178.0,
    "HP": 242,
    "Fast_Moves": [
      "안다리걸기",
      "카운터"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "인파이트",
      "로킥",
      "깜짝베기",
      "냉동펀치",
      "섀도볼"
    ],
    "Elite_Charged_Moves": [
      "분노의주먹"
    ],
    "Sprite_Col": 28,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": "979-S",
    "Form": "그림자",
    "Pokemon_Name": "저승갓숭",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "고스트",
    "Max_CP": 3695,
    "ATK": 220.0,
    "DEF": 177.99999999999997,
    "HP": 242,
    "Fast_Moves": [
      "안다리걸기",
      "카운터"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "인파이트",
      "로킥",
      "깜짝베기",
      "냉동펀치",
      "섀도볼"
    ],
    "Elite_Charged_Moves": [
      "분노의주먹"
    ],
    "Sprite_Col": 28,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 980,
    "Form": "일반",
    "Pokemon_Name": "토오",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "땅",
    "Max_CP": 2207,
    "ATK": 127.0,
    "DEF": 151.0,
    "HP": 277,
    "Fast_Moves": [
      "독침",
      "머드샷"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "오물폭탄",
      "지진",
      "스톤에지",
      "애시드봄",
      "물의파동"
    ],
    "Elite_Charged_Moves": [
      "메가혼"
    ],
    "Sprite_Col": 29,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 981,
    "Form": "일반",
    "Pokemon_Name": "키키링",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 3223,
    "ATK": 209.0,
    "DEF": 136.0,
    "HP": 260,
    "Fast_Moves": [
      "몸통박치기",
      "염동력",
      "두번차기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "사이코키네시스",
      "10만볼트",
      "미러코트",
      "사이코팽"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 982,
    "Form": "일반",
    "Pokemon_Name": "노고고치(두마디 폼)",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 3097,
    "ATK": 188.0,
    "DEF": 150.0,
    "HP": 268,
    "Fast_Moves": [
      "물기",
      "놀래키기",
      "구르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "스톤샤워",
      "드릴라이너"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 982,
    "Form": "일반",
    "Pokemon_Name": "노고고치(세마디 폼)",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 3097,
    "ATK": 188.0,
    "DEF": 150.0,
    "HP": 268,
    "Fast_Moves": [
      "물기",
      "놀래키기",
      "구르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "구멍파기",
      "스톤샤워",
      "드릴라이너"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 983,
    "Form": "일반",
    "Pokemon_Name": "대도각참",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "강철",
    "Max_CP": 4086,
    "ATK": 238.0,
    "DEF": 203.0,
    "HP": 225,
    "Fast_Moves": [
      "바크아웃",
      "메탈클로",
      "금속음"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "악의파동",
      "아이언헤드",
      "시저크로스",
      "기합구슬",
      "속임수"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 33,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 984,
    "Form": "일반",
    "Pokemon_Name": "위대한엄니",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "격투",
    "Max_CP": 4550,
    "ATK": 249.0,
    "DEF": 209.0,
    "HP": 251,
    "Fast_Moves": [
      "튀어오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 34,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 985,
    "Form": "일반",
    "Pokemon_Name": "우렁찬꼬리",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 2798,
    "ATK": 139.0,
    "DEF": 234.0,
    "HP": 251,
    "Fast_Moves": [
      "튀어오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 35,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 986,
    "Form": "일반",
    "Pokemon_Name": "사나운버섯",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "악",
    "Max_CP": 4018,
    "ATK": 232.0,
    "DEF": 190.0,
    "HP": 244,
    "Fast_Moves": [
      "튀어오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 36,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 987,
    "Form": "일반",
    "Pokemon_Name": "날개치는머리",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "페어리",
    "Max_CP": 4179,
    "ATK": 280.0,
    "DEF": 235.0,
    "HP": 146,
    "Fast_Moves": [
      "튀어오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 988,
    "Form": "일반",
    "Pokemon_Name": "땅을기는날개",
    "Pokemon_Type1": "벌레",
    "Pokemon_Type2": "격투",
    "Max_CP": 4102,
    "ATK": 261.0,
    "DEF": 193.0,
    "HP": 198,
    "Fast_Moves": [
      "튀어오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 38,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 989,
    "Form": "일반",
    "Pokemon_Name": "모래털가죽",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "땅",
    "Max_CP": 3867,
    "ATK": 244.0,
    "DEF": 195.0,
    "HP": 198,
    "Fast_Moves": [
      "튀어오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 39,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 990,
    "Form": "일반",
    "Pokemon_Name": "무쇠바퀴",
    "Pokemon_Type1": "땅",
    "Pokemon_Type2": "강철",
    "Max_CP": 3869,
    "ATK": 227.0,
    "DEF": 216.0,
    "HP": 207,
    "Fast_Moves": [
      "튀어오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 40,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 991,
    "Form": "일반",
    "Pokemon_Name": "무쇠보따리",
    "Pokemon_Type1": "얼음",
    "Pokemon_Type2": "물",
    "Max_CP": 3808,
    "ATK": 266.0,
    "DEF": 211.0,
    "HP": 148,
    "Fast_Moves": [
      "튀어오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 41,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 992,
    "Form": "일반",
    "Pokemon_Name": "무쇠손",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "전기",
    "Max_CP": 4649,
    "ATK": 245.0,
    "DEF": 177.0,
    "HP": 319,
    "Fast_Moves": [
      "튀어오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 42,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 993,
    "Form": "일반",
    "Pokemon_Name": "무쇠머리",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "비행",
    "Max_CP": 3929,
    "ATK": 249.0,
    "DEF": 179.0,
    "HP": 214,
    "Fast_Moves": [
      "튀어오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 43,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 994,
    "Form": "일반",
    "Pokemon_Name": "무쇠독나방",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "독",
    "Max_CP": 4346,
    "ATK": 281.0,
    "DEF": 196.0,
    "HP": 190,
    "Fast_Moves": [
      "튀어오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 44,
    "Sprite_Row": 30
  },
  {
    "Pokemon_ID": 995,
    "Form": "일반",
    "Pokemon_Name": "무쇠가시",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "전기",
    "Max_CP": 4250,
    "ATK": 250.0,
    "DEF": 200.0,
    "HP": 225,
    "Fast_Moves": [
      "튀어오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 1,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 996,
    "Form": "일반",
    "Pokemon_Name": "드니차",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "얼음",
    "Max_CP": 1410,
    "ATK": 134.0,
    "DEF": 86.0,
    "HP": 163,
    "Fast_Moves": [
      "용의숨결",
      "얼음엄니"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "드래곤클로",
      "눈사태",
      "역린",
      "얼어붙은바람"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 2,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 997,
    "Form": "일반",
    "Pokemon_Name": "드니꽁",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "얼음",
    "Max_CP": 2365,
    "ATK": 173.0,
    "DEF": 128.0,
    "HP": 207,
    "Fast_Moves": [
      "용의숨결",
      "얼음엄니"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "드래곤클로",
      "눈사태",
      "역린",
      "얼어붙은바람"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 3,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 998,
    "Form": "일반",
    "Pokemon_Name": "드닐레이브",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "얼음",
    "Max_CP": 4013,
    "ATK": 254.0,
    "DEF": 168.0,
    "HP": 229,
    "Fast_Moves": [
      "용의숨결",
      "얼음엄니"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "드래곤클로",
      "눈사태",
      "역린",
      "눈보라",
      "얼어붙은바람"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 4,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 999,
    "Form": "일반",
    "Pokemon_Name": "모으령(상자폼)",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "-",
    "Max_CP": 1248,
    "ATK": 140.0,
    "DEF": 76.0,
    "HP": 128,
    "Fast_Moves": [
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 5,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 999,
    "Form": "일반",
    "Pokemon_Name": "모으령(도보폼)",
    "Pokemon_Type1": "고스트",
    "Pokemon_Type2": "-",
    "Max_CP": 1248,
    "ATK": 140.0,
    "DEF": 76.0,
    "HP": 128,
    "Fast_Moves": [
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도볼"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 6,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 1000,
    "Form": "일반",
    "Pokemon_Name": "타부자고",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "고스트",
    "Max_CP": 3976,
    "ATK": 252.0,
    "DEF": 190.0,
    "HP": 202,
    "Fast_Moves": [
      "놀래키기",
      "병상첨병"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도볼",
      "매지컬샤인",
      "기합구슬",
      "파워젬"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 7,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 1001,
    "Form": "일반",
    "Pokemon_Name": "총지엔",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "풀",
    "Max_CP": 3320,
    "ATK": 186.0,
    "DEF": 242.0,
    "HP": 198,
    "Fast_Moves": [
      "메지컬리프",
      "바크아웃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "악의파동",
      "풀묶기",
      "리프스톰"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 8,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 1002,
    "Form": "일반",
    "Pokemon_Name": "파오젠",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "얼음",
    "Max_CP": 3764,
    "ATK": 261.0,
    "DEF": 167.0,
    "HP": 190,
    "Fast_Moves": [
      "눈싸라기",
      "바크아웃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "악의파동",
      "눈사태",
      "눈보라"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 9,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 1003,
    "Form": "일반",
    "Pokemon_Name": "딩루",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "땅",
    "Max_CP": 3994,
    "ATK": 194.0,
    "DEF": 203.0,
    "HP": 321,
    "Fast_Moves": [
      "머드샷",
      "바크아웃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "악의파동",
      "땅고르기",
      "지진"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 10,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 1004,
    "Form": "일반",
    "Pokemon_Name": "위유이",
    "Pokemon_Type1": "악",
    "Pokemon_Type2": "불꽃",
    "Max_CP": 3908,
    "ATK": 269.0,
    "DEF": 221.0,
    "HP": 146,
    "Fast_Moves": [
      "불태우기",
      "바크아웃"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "악의파동",
      "니트로차지",
      "화염바퀴"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 11,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 1005,
    "Form": "일반",
    "Pokemon_Name": "고동치는달",
    "Pokemon_Type1": "드래곤",
    "Pokemon_Type2": "악",
    "Max_CP": 4764,
    "ATK": 280.0,
    "DEF": 196.0,
    "HP": 233,
    "Fast_Moves": [
      "튀어오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 12,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 1006,
    "Form": "일반",
    "Pokemon_Name": "무쇠무인",
    "Pokemon_Type1": "페어리",
    "Pokemon_Type2": "격투",
    "Max_CP": 3943,
    "ATK": 279.0,
    "DEF": 171.0,
    "HP": 179,
    "Fast_Moves": [
      "튀어오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 13,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 1007,
    "Form": "일반",
    "Pokemon_Name": "코라이돈",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 4491,
    "ATK": 263.0,
    "DEF": 223.0,
    "HP": 205,
    "Fast_Moves": [
      "바위깨기",
      "드래곤테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "기가임팩트",
      "드래곤클로",
      "인파이트",
      "역린"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 14,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 1007,
    "Form": "일반",
    "Pokemon_Name": "코라이돈 APEX",
    "Pokemon_Type1": "격투",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 4491,
    "ATK": 263.0,
    "DEF": 223.0,
    "HP": 205,
    "Fast_Moves": [
      "바위깨기",
      "드래곤테일"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "기가임팩트",
      "드래곤클로",
      "인파이트",
      "역린"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 15,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 1008,
    "Form": "일반",
    "Pokemon_Name": "미라이돈",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 4491,
    "ATK": 263.0,
    "DEF": 223.0,
    "HP": 205,
    "Fast_Moves": [
      "전기쇼크",
      "용의숨결"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파괴광선",
      "용의파동",
      "번개",
      "역린"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 16,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 1008,
    "Form": "일반",
    "Pokemon_Name": "미라이돈 APEX",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 4491,
    "ATK": 263.0,
    "DEF": 223.0,
    "HP": 205,
    "Fast_Moves": [
      "전기쇼크",
      "용의숨결"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파괴광선",
      "용의파동",
      "번개",
      "역린"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 17,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 1009,
    "Form": "일반",
    "Pokemon_Name": "굽이치는물결",
    "Pokemon_Type1": "물",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 3526,
    "ATK": 233.0,
    "DEF": 171.0,
    "HP": 203,
    "Fast_Moves": [
      "튀어오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 18,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 1010,
    "Form": "일반",
    "Pokemon_Name": "무쇠잎새",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 3659,
    "ATK": 236.0,
    "DEF": 194.0,
    "HP": 189,
    "Fast_Moves": [
      "튀어오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 21,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 1011,
    "Form": "일반",
    "Pokemon_Name": "과미르",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 2681,
    "ATK": 173.0,
    "DEF": 184.0,
    "HP": 190,
    "Fast_Moves": [
      "씨기관총",
      "드래곤테일",
      "구르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "용의파동",
      "역린",
      "씨폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 26,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 1012,
    "Form": "일반",
    "Pokemon_Name": "차데스",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "고스트",
    "Max_CP": 1287,
    "ATK": 134.0,
    "DEF": 96.0,
    "HP": 120,
    "Fast_Moves": [
      "놀래키기",
      "메지컬리프"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도볼",
      "에너지볼",
      "폴터가이스트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 24,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 1013,
    "Form": "일반",
    "Pokemon_Name": "그우린차",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "고스트",
    "Max_CP": 3343,
    "ATK": 225.0,
    "DEF": 191.0,
    "HP": 174,
    "Fast_Moves": [
      "놀래키기",
      "메지컬리프"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도볼",
      "에너지볼",
      "폴터가이스트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 25,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 1014,
    "Form": "일반",
    "Pokemon_Name": "조타구",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "격투",
    "Max_CP": 3376,
    "ATK": 220.0,
    "DEF": 191.0,
    "HP": 186,
    "Fast_Moves": [
      "독찌르기",
      "발경"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "엄청난힘",
      "기선제압",
      "오물폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 28,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 1015,
    "Form": "일반",
    "Pokemon_Name": "이야후",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 3321,
    "ATK": 238.0,
    "DEF": 157.0,
    "HP": 186,
    "Fast_Moves": [
      "독찌르기",
      "염동력"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "미래예지",
      "사이코키네시스",
      "오물폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 29,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 1016,
    "Form": "일반",
    "Pokemon_Name": "기로치",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "페어리",
    "Max_CP": 2750,
    "ATK": 169.0,
    "DEF": 208.0,
    "HP": 186,
    "Fast_Moves": [
      "독찌르기",
      "애교부리기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "문포스",
      "차밍보이스",
      "오물폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 30,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 1017,
    "Form": "일반",
    "Pokemon_Name": "오거폰(벽록의 가면)",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "-",
    "Max_CP": 3147,
    "ATK": 219.0,
    "DEF": 178.0,
    "HP": 173,
    "Fast_Moves": [
      "덩굴채찍",
      "메지컬리프",
      "두번차기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파워휩",
      "풀묶기",
      "치근거리기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 31,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 1017,
    "Form": "일반",
    "Pokemon_Name": "오거폰(우물의 가면)",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "물",
    "Max_CP": 3147,
    "ATK": 219.0,
    "DEF": 178.0,
    "HP": 173,
    "Fast_Moves": [
      "덩굴채찍",
      "메지컬리프",
      "두번차기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파워휩",
      "풀묶기",
      "치근거리기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 33,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 1017,
    "Form": "일반",
    "Pokemon_Name": "오거폰(화덕의 가면)",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "불꽃",
    "Max_CP": 3147,
    "ATK": 219.0,
    "DEF": 178.0,
    "HP": 173,
    "Fast_Moves": [
      "덩굴채찍",
      "메지컬리프",
      "두번차기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파워휩",
      "풀묶기",
      "치근거리기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 32,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 1017,
    "Form": "일반",
    "Pokemon_Name": "오거폰(주춧돌의 가면)",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "바위",
    "Max_CP": 3147,
    "ATK": 219.0,
    "DEF": 178.0,
    "HP": 173,
    "Fast_Moves": [
      "덩굴채찍",
      "메지컬리프",
      "두번차기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "파워휩",
      "풀묶기",
      "치근거리기"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 34,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 1018,
    "Form": "일반",
    "Pokemon_Name": "브리두라스",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 4228,
    "ATK": 250.0,
    "DEF": 215.0,
    "HP": 207,
    "Fast_Moves": [
      "드래곤테일",
      "메탈클로"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "러스터캐논",
      "드래곤클로",
      "파괴광선"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 35,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 1019,
    "Form": "일반",
    "Pokemon_Name": "과미드라",
    "Pokemon_Type1": "풀",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 3656,
    "ATK": 216.0,
    "DEF": 186.0,
    "HP": 235,
    "Fast_Moves": [
      "씨기관총",
      "드래곤테일",
      "구르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "용의파동",
      "역린",
      "씨폭탄"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 27,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 1020,
    "Form": "일반",
    "Pokemon_Name": "꿰뚫는화염",
    "Pokemon_Type1": "불꽃",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 3502,
    "ATK": 205.0,
    "DEF": 208.0,
    "HP": 213,
    "Fast_Moves": [
      "튀어오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 19,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 1021,
    "Form": "일반",
    "Pokemon_Name": "날뛰는우레",
    "Pokemon_Type1": "전기",
    "Pokemon_Type2": "드래곤",
    "Max_CP": 3818,
    "ATK": 235.0,
    "DEF": 165.0,
    "HP": 245,
    "Fast_Moves": [
      "튀어오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 20,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 1022,
    "Form": "일반",
    "Pokemon_Name": "무쇠암석",
    "Pokemon_Type1": "바위",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 3536,
    "ATK": 227.0,
    "DEF": 195.0,
    "HP": 189,
    "Fast_Moves": [
      "튀어오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 22,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 1023,
    "Form": "일반",
    "Pokemon_Name": "무쇠감투",
    "Pokemon_Type1": "강철",
    "Pokemon_Type2": "에스퍼",
    "Max_CP": 3489,
    "ATK": 221.0,
    "DEF": 200.0,
    "HP": 189,
    "Fast_Moves": [
      "튀어오르기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 23,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 1024,
    "Form": "일반",
    "Pokemon_Name": "테라파고스",
    "Pokemon_Type1": "노말",
    "Pokemon_Type2": "-",
    "Max_CP": 1990,
    "ATK": 126.0,
    "DEF": 165.0,
    "HP": 207,
    "Fast_Moves": [
      "돌진"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "발버둥"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 37,
    "Sprite_Row": 31
  },
  {
    "Pokemon_ID": 1025,
    "Form": "일반",
    "Pokemon_Name": "복숭악동",
    "Pokemon_Type1": "독",
    "Pokemon_Type2": "고스트",
    "Max_CP": 2906,
    "ATK": 164.0,
    "DEF": 248.0,
    "HP": 186,
    "Fast_Moves": [
      "놀래키기"
    ],
    "Elite_Fast_Moves": [],
    "Charged_Moves": [
      "섀도볼",
      "더스트슈트",
      "폴터가이스트"
    ],
    "Elite_Charged_Moves": [],
    "Sprite_Col": 39,
    "Sprite_Row": 31
  }
];

export default pokemonStats;