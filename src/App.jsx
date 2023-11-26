import { useMemo, useRef, useEffect, useReducer, useCallback } from 'react';
import './App.css';

import DataEditor from './DataEditor';
import DataList from './DataList';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      const newItem = {
        ...action.data,
      };
      return [newItem, ...state];
    }
    case 'REMOVE': {
      return state.filter((it) => it.id !== action.targetId);
    }
    case 'EDIT': {
      return state.map((it) =>
        it.id === action.targetId
          ? {
              ...it,
              content: action.newContent,
            }
          : it,
      );
    }
    default:
      return state;
  }
};

function App() {
  const subject = ['국어', '수학', '영어', '과학탐구', '사회탐구'];

  const [data, dispatch] = useReducer(reducer, []);
  const dataId = useRef(0);
  const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments').then((res) => res.json());

    const initData = res.slice(0, 20).map((item) => {
      return {
        name: item.email,
        content: item.body,
        score: Math.floor(Math.random() * 5) + 1,
        id: dataId.current++,
      };
    });

    dispatch({ type: 'INIT', data: initData });
  };

  useEffect(() => {
    getData();
  }, []);

  const onCreate = (name, content, score) => {
    dispatch({
      type: 'CREATE',
      data: {
        name,
        content,
        score,
        id: dataId.current,
      },
    });
    dataId.current += 1;
  };

  const onRemove = useCallback((targetId) => {
    dispatch({
      type: 'REMOVE',
      targetId,
    });
  }, []);

  const onEdit = useCallback((targetId, newContent) => {
    dispatch({
      type: 'EDIT',
      targetId,
      newContent,
    });
  }, []);

  const memoizedDiaryAnalysis = useMemo(() => {
    const goodData = data.filter((it) => it.emotion >= 3).length;
    const badData = data.length - goodData;
    const dataRatio = (goodData / data.length) * 100.0;
    return { goodData, badData, dataRatio };
  }, [data.length]);

  const { goodData, badData, dataRatio } = memoizedDiaryAnalysis;

  return (
    <div className="App">
      <div className="data__box">
        <div className="TitleArea">
          <h2>커리큘럼</h2>
          <ul className="SubjectLuist">
            {subject.map((it, idx) => (
              <li key={idx}>{it}</li>
            ))}
          </ul>
        </div>
        <DataEditor onCreate={onCreate} />
        <p>전체 일기 : {data.length}</p>
        <p>점수 높은 데이터 개수 : {goodData}</p>
        <p>점수 낮은 데이터 개수 : {badData}</p>
        <p>좋은 데이터의 비율 : {dataRatio}</p>
        <DataList dataList={data} onRemove={onRemove} onEdit={onEdit} />
      </div>
    </div>
  );
}
export default App;
