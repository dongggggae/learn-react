import { useState, useRef, useEffect } from 'react';
import './App.css';

import DataEditor from './DataEditor';
import DataList from './DataList';

function App() {
  const subject = ['국어', '수학', '영어', '과학탐구', '사회탐구'];

  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments').then((res) => res.json());

    const initData = res.slice(0, 50).map((item) => {
      return {
        name: item.email,
        content: item.body,
        score: Math.floor(Math.random() * 5) + 1,
        id: dataId.current++,
      };
    });

    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []);

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

  const onRemove = (targetId) => {
    const newDataList = data.filter((it) => it.id !== targetId);
    setData(newDataList);
  };

  const onEdit = (targetId, newContent) => {
    setData(data.map((it) => (it.id === targetId ? { ...it, content: newContent } : it)));
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
      <DataList dataList={data} onRemove={onRemove} onEdit={onEdit} />
    </div>
  );
}
export default App;
