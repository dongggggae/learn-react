import { useState, useRef } from 'react';
import './App.css';
import DataEditor from './DataEditor';
import DataList from './DataList';

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (input, textarea, select) => {
    const newItem = {
      input,
      textarea,
      select,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  return (
    <div className="App">
      <DataEditor onCreate={onCreate} />
      <DataList dataList={data} />
    </div>
  );
}
export default App;
