// 반복 렌더링
// 요소를 반복 렌더링하기 위해서는 그 요소를 가공하여 가공된 값이 포함된 배열로 만들어 표현식으로 출력
// 리액트의 기본 원리는 배열이 표현식으로 렌더링되는 것.
// 그러나 데이터는 태그를 포함된 형태가 아님. -> 원본 데이터를 반복 렌더링할 수 있는 형태로 가공
// 따라서 map이 적절
import { useState } from "react";
export default function App() {
  // const items = ["1", "2", "3"];
  // const newItems = [];
  // for (let i = 0; i < items.length; i++) {
  //   newItems.push(<li>{items[i]}</li>);
  // }

  // 요소를 배열의 맨 앞에 추가할 경우, 인식이 어려울 경우가 있다.
  // 이 경우, index를 key값을 사용하면 추가가 이상하게 이루어짐. 왜냐하면 index가 밀리기 때문
  // 따라서 고유한 키 값을 사용해야한다.

  // 배열을 가공할 일이 없거나, 배열의 뒷쪽으로만 새로운 요소가 추가될 경우, index를 key값으로 사용해도 된다.
  // 배열을 가공할 일이 있는데, 새로운 요소를 그 배열의 앞에 추가하거나, 배열과 배열 사이에 추가할 경우, index를 key값으로 사용하면 안된다.

  // component에 전달되는 key속성은 프로퍼티에 포함되지 않는다.
  const [items, setItems] = useState(["aaa", "bbb", "ccc"]);
  const handleItemAdd = () => {
    setItems((items) => ["New Item", ...items]);
  };
  return (
    <>
      {/* 배열을 출력하면 아이템이 전부 하나로 합쳐져 꺼내진다
      <h1>{items}</h1> */}
      {/* <ul>{newItems}</ul>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button>추가</button> */}

      {items.map((item) => (
        <input key={item} placeholder={item} style={{ display: "block" }} />
      ))}
      <button onClick={handleItemAdd}>추가</button>
    </>
  );
}
