/*
타입 좁히기 type narrawing
*/

// typeof 'string'
// typeof 'number'
type Id = number | string;

function getId(id: Id) {
  if (typeof id === "number") {
    return id;
  }
  return Number(id);
}

// 동일성 / 동등성 좁히기
type Option = "on" | "off";

function power(option: Option) {
  if (option === "off") {
    console.log("power off");
  } else {
    console.log("power on");
  }
}

// in 키워드 사용
type iOS = {iMessage: () => void};
type android = {message: () => void};

function sendMessage(os: iOS | android) {
  if ("iMessage" in os) {
    os.iMessage();
  } else {
    os.message();
  }
}

sendMessage({
  iMessage: () => {
    console.log("sending iMessage");
  },
});

// instanceof
class ApiResponse {
  data: any;
}
class ErrorResponse {
  message: string = "";
}
async function handleApiResponse(response: any) {
  if (response instanceof ApiResponse) {
  } else if (response instanceof ErrorResponse) {
  }
}

const apiResponse = new ApiResponse();
const errorResponse = new ErrorResponse();

handleApiResponse(apiResponse);
handleApiResponse(errorResponse);

// 타입 가드 type predicates
function isErrorResponse(
  response: ApiResponse | ErrorResponse
): response is ErrorResponse {
  return (response as ErrorResponse).message !== undefined;
}

const response = {message: "error..."};

if (isErrorResponse(response)) {
  console.log(response.message);
}

// 식별 가능한 유니언 타입 discriminated union
// 타입스크립트의 여러타입중 하나를 식별 할 수 있는 공통 속성을 가진 유니언 타입

type SuccessResponseType = {
  type: "success";
  data: any;
};

type ErrorResponseType = {
  type: "error";
  message: string;
};

type ApiResponseType = SuccessResponseType | ErrorResponseType;

function handleResponse(response: ApiResponseType) {
  if (response.type === "success") {
    console.log("data:", response.data);
  } else {
    console.log(response.message);
  }
}
