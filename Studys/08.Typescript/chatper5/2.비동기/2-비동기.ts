const syncFn = () => {
  console.log("동기");
};

const asyncFn = () => {
  return new Promise((res, rej) => {
    if (res) {
      res("비동기 완료");
    } else {
      rej("비동기 실패");
    }
  });
};

function main() {
  syncFn();
  asyncFn().then((value) => console.log(value));
  syncFn();
}

main();

// 제네릭 프로미스 : ts에서는 프로미스를 제네릭 프로미스로 사용한다.
// Promise<T> : 비동기의 결과로 반환되는 리턴의 타입을 T로 하겠다고 명시를 해주는 것

interface MyDataType {
  id: number;
  name: string;
}

const fetchData = (): Promise<MyDataType> => {
  return new Promise((res, rej) => {
    const success = true;
    if (success) {
      res({id: 1, name: "1"});
    } else {
      rej("data fetch failed");
    }
  });
};

fetchData()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

async function doFetch() {
  // 비동기로직
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
doFetch();

type Config = Record<string, string | boolean>;

async function loadConfig(): Promise<Config> {
  const response = await fetch("/api/config");
  const configData: Config = await response.json();
  return configData;
}

async function fetchData2<T>(url: string): Promise<T> {
  const response = await fetch(url);
  const data = await response.json();
  return data as T;
}
