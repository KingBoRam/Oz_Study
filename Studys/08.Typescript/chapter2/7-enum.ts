// Eunm

// 기본문법
enum 이름 {
  상수값1,
  상수값2,
  상수값3,
}
// 상수값1,2,3은 enum의 멤버라고 불리고, 각 멤버들은 멤버마다 할당값이 존재함. 각 멤버에 대응하는 구체적인 값이 존재한다는 뜻.

// 숫자형 enum
// PlayerState는 4가지의 값만 가질 수 있다.
enum PlayerState {
  Buffering,
  Playing,
  Paused,
  Seeking,
}
let currentState: PlayerState;
currentState = PlayerState.Buffering;
currentState = PlayerState.Playing;
// currentState = 'Playing'
const isPlaying = (state: PlayerState) => {
  return state === PlayerState.Playing;
};
isPlaying(currentState); // true

// 문자형 enum
enum Direction {
  Left = "LEFT",
  Right = "RIGHT",
  Up = "Up",
  Down = "DOWN",
}

function move(dir: Direction) {
  switch (dir) {
    case Direction.Left:
      // 왼쪽 로직
      break;
    case Direction.Right:
      // 오른쪽 로직
      break;
    // ...
  }
}

move(Direction.Left);
move(Direction.Right);
