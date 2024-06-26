import {render, screen} from "@testing-library/react";
import {act} from "react";
import App from "./App";

test("renders input and button", async () => {
  // 테스트 이름 변경
  await act(async () => {
    render(<App />);
  });
  const inputElement = screen.getByPlaceholderText(/입력해주세요./i); // placeholder 텍스트로 찾기
  const buttonElement = screen.getByText(/확인/i); // 버튼 텍스트로 찾기
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});
