import logo from "./logo.svg";
import {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";

function App() {
  useEffect(() => {
    // db의 값 가져오기
    axios.get("/api/values").then((res) => {
      console.log(res.data);
      setLists(res.data);
    });
  }, []);

  const [lists, setLists] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/value`, {value: value}).then((res) => {
      if (res.data.success) {
        console.log(res);
        setLists([...lists, res.data]);
        setValue("");
      } else {
        alert("값을 db에 넣는데 실패했다.");
      }
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {lists?.map((list, index) => {
          <li key={index}>{list.value}</li>;
        })}
        <br></br>
        <div className="container">
          <form className="example" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="입력해주세요."
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}></input>
            <button type="submit">확인</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
