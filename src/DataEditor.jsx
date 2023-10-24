import { useRef, useState } from 'react';
import PropTypes from 'prop-types';

const DataEditor = ({ onCreate }) => {
  const userInput = useRef();
  const userTextarea = useRef();
  const userSelect = useRef();

  const [state, setState] = useState({
    input: '',
    textarea: '',
    select: 'default',
  });
  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    console.log(state);
    if (state.input.length < 5) {
      userInput.current.focus();
      return;
    }
    if (state.textarea.length < 10) {
      userTextarea.current.focus();
      return;
    }
    if (state.select === 'default') {
      userSelect.current.focus();
      return;
    }
    onCreate(state.input, state.textarea, state.select);
    console.log(state);
    setState({
      input: '',
      textarea: '',
      select: 1,
    });
    alert('저장 성공');
  };
  return (
    <div className="DataEditor">
      <h2>입력 폼 공부하기</h2>
      <div>
        <input ref={userInput} name="input" value={state.input} onChange={handleChangeState} />
      </div>
      <div>
        <textarea ref={userTextarea} name="textarea" value={state.textarea} onChange={handleChangeState} />
      </div>
      <div>
        셀렉트 :
        <select ref={userSelect} name="select" value={state.select} onChange={handleChangeState}>
          <option value="default">선택해주세요</option>
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
DataEditor.propTypes = {
  onCreate: PropTypes.array.isRequired,
};
export default DataEditor;
