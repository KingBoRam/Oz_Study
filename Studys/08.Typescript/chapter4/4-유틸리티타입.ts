// Partial<T>
// T의 모든 속성을 옵셔널프로퍼티로 만든다
type User = {
  id: number;
  name: string;
  email: string;
};

// type PartialUser = Partial<User>;

// const user: PartialUser = {};
// const user2: User = {}

// Readonly<T>
// const user: Readonly<User> = {
//   id: 1,
//   name: "john",
//   email: "1@naver.com",
// };

// user.id = 2

// Pick<T,K> : T에서 K를 추출해라
// type UserWithNameOnly = Pick<User, "name">;

// Omit<T,K> 특정 속성을 제외한 나머지로 새로운 타입을 만듬
// type UserWithOutName = Omit<User, "name" | "email">;

// Record<T,K> T타입의 키와 K타입의 값으로 구성된 객체 생성
type Country = "SouthKorea" | "UnitedState" | "Canada";
type Capital = string;
type CountryCapitals = Record<Country, Capital>;

const capitals: CountryCapitals = {
  SouthKorea: "seoul",
  UnitedState: "w.d.c",
  Canada: "ottawa",
};

type CountryInfo = {
  capital: string;
  population: number;
  continent: string;
};
type CountryInfoMap = Record<Country, CountryInfo>;

const countryInfo: CountryInfoMap = {
  SouthKorea: {
    capital: "seoul",
    population: 51_000_000,
    continent: "asia",
  },
  UnitedState: {
    capital: "wdc",
    population: 331_000_000,
    continent: "northamerica",
  },
  Canada: {
    capital: "ottawa",
    population: 83_000_000,
    continent: "northamerica",
  },
};

// parameter<T> 함수의 매개변수타입을 튜플로 추출해서 타입으로 만듬. 함수를 재사용할때 파라미터도 재사용가능하게 편하게 만들어줌
type SomeFunction = (id: number) => void;
type Param = Parameters<SomeFunction>;

function someFunction(...param: Param) {
  const [id] = param;
}

someFunction(100);
