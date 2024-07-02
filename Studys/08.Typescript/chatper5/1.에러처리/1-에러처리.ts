// function fn() {
// 	try {
// 		// 에러가 발생할 수도 있는 코드를 실행
// 		throw new Error("somthing went wrong..");
//   } catch (error) {
//     // 에러를 처리하는 공간
//     console.error(error.message); // message에는 위에 ""안에 텍스트가 들어감
// 	} finally {
// 		// 에러 여부와 상관없이 항상 실행 됨. 에러가떴을때 상태를 복구하거나, 사용자에게 알리기
//   }
// }

function checkPositiveNumber(num: number) {
  if (num < 0) {
    throw new Error("number should be positive");
  }
  console.log(`${num} is a positive number`);
}

try {
  checkPositiveNumber(10);
  checkPositiveNumber(-10); // 에러가 발생하면 가장 가까운 에러블록으로 메세지를 전달함
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error(error.message);
  }
}

class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CustomError";
  }
}

try {
  throw new CustomError("custom errorr..");
} catch (error: unknown) {
  if (error instanceof CustomError) {
    console.error(error.message);
  }
}
