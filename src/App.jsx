import { useState, useRef } from 'react';
import './App.css';

import DataEditor from './DataEditor';
import DataList from './DataList';

function App() {
  const subject = ['국어', '수학', '영어', '과학탐구', '사회탐구'];

  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (name, content, score) => {
    const newItem = {
      name,
      content,
      score,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };
  return (
    <div className="App">
      <div className="TitleArea">
        <h2>커리큘럼</h2>
        <ul className="SubjectLuist">
          {subject.map((it, idx) => (
            <li key={idx}>{it}</li>
          ))}
        </ul>
      </div>
      <DataEditor onCreate={onCreate} />
      <DataList dataList={data} />
    </div>
  );
}
export default App;
