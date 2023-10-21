import { useState } from 'react';

const DiaryEditor = () => {
  const [state, setState] = useState({
    input: '',
    textarea: '',
    select: 1,
  });
  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    console.log(state);
    alert('저장 성공');
  };
  return (
    <div className='DiaryEditor'>
      <h2>입력 폼 공부하기</h2>
      <div>
        <input name="input" value={state.input} onChange={handleChangeState} />
      </div>
      <div>
        <textarea name="textarea" value={state.textarea} onChange={handleChangeState} />
      </div>
      <div>
        오늘의 셀렉트 : 
        <select name="select" value={state.select} onChange={handleChangeState}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>저장 하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
