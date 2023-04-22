const basicData = [
  { number: 1, name: "코카콜라", price: 1500 },
  { number: 2, name: "사이다", price: 1200 },
  { number: 3, name: "포카리스웨트", price: 1000 },
  { number: 4, name: "칸쵸", price: 800 },
  { number: 5, name: "오예스", price: 1000 },
  { number: 6, name: "초코파이", price: 1200 },
  { number: 7, name: "허니버터칩", price: 1500 },
  { number: 8, name: "새우깡", price: 900 },
  { number: 9, name: "치즈볼", price: 1200 },
  { number: 10, name: "신라면", price: 900 },
];

const currency = {
  thousand: { value: 1000, name: "일천원권" },
  fiveThousand: { value: 5000, name: "오천원권" },
  tenThousand: { value: 10000, name: "일만원권" },
  fiveHundred: { value: 500, name: "오백원" },
  hundred: { value: 100, name: "일백원" },
};

// 우리학원 휴실ㅔ 있는 자판기에 들어있는 음료수의 정보를 담은 배열입니다.
// 아래의 exampleOne()은 임의의 '돈'에 대해 얼마짜리를 넣었는지 확인 할 수 있게 로직을 구성합니다.
function exampleOne(inputPrice, currency, basicData) {
  let possible = [];
  let check = false;
  // Q1
  // 만약 inputPrice가 1000원이라면 currency.thousand.name을 반환하여
  // "일천원권을 넣었습니다".라는 문구를 console.log를 통해 출력하도록 제작.
  // Q2
  // 만약 inputPrice가 1000원일 떄, basicData를 통해 구매 가능한 제품을
  // console.log()를 통해 출력

  // Q3
  // 만약 inputPrice가 모든 제품의 가격보다 적다면 "잔액이 부족합니다."라는 문구를
  // console.log()를 통해 출력
  // Q4
  // 만약 inputPrice가 모든 제품의 가격보다 많다면 "당신은 부자입니다."라는 문구를
  // console.log()를 통해 출력

  for (i in currency) {
    if (inputPrice === currency[i].value) {
      console.log(`${currency[i].name}을 넣었습니다.`);
      check = true;
      for (i in basicData) {
        if (inputPrice >= basicData[i].price) {
          possible.push(basicData[i].name);
        }
      }
      console.log(`살 수 있는 제품: ${possible}`);
    }
    // 잔액이 부족할 때
    else if(inputPrice < currency[i].value) {
      for (i in basicData) {
        if (inputPrice >= basicData[i].price) {
          possible.push(basicData[i].name);
        }
      }
    }
  }

  if(possible.length > 0 && check === false) {
    console.log(`${inputPrice}을 넣었습니다.`);
    possible = [];
    for (i in basicData) {
      if (inputPrice >= basicData[i].price) {
        possible.push(basicData[i].name);
      }
    }
    console.log(`살 수 있는 제품: ${possible}`);
  }
  else if(possible.length === 0 && check === true) {
    console.log(`${inputPrice}을 넣었습니다.`);
    console.log('잔액이 부족합니다.');
  }
  else if (possible.length === basicData.length && check === false){
    for (i in basicData) {
      if (inputPrice >= basicData[i].price) {
        possible.push(basicData[i].name);
      }
    }
    console.log('당신은 부자입니다.');
  }
  // console.log(possible);
  console.log(check);
}

exampleOne(1000, currency, basicData);
// console.log(basicData.length);
// for (i in currency) {
//   console.log(currency[i].value);
// }
