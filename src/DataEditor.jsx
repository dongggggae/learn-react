import { useRef, useState } from 'react';
import PropTypes from 'prop-types';

const DataEditor = ({ onCreate }) => {
  const subjectName = useRef();
  const subjectContent = useRef();
  const subjectScore = useRef();

  const [state, setState] = useState({
    name: '',
    content: '',
    score: 'default',
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(state);
    if (state.name.length < 5) {
      subjectName.current.focus();
      return;
    }
    if (state.content.length < 10) {
      subjectContent.current.focus();
      return;
    }
    if (state.score === 'default') {
      subjectScore.current.focus();
      return;
    }

    onCreate(state.name, state.content, state.score);

    setState({
      name: '',
      content: '',
      score: 'default',
    });
  };

  return (
    <div className="DataEditor">
      <div className="FlexBox">
        <p>강의명 :</p>
        <input name="name" type="text" value={state.name} onChange={handleChangeState} ref={subjectName} />
      </div>
      <div className="FlexBox">
        <p>강의 내용 :</p>
        <textarea name="content" value={state.content} onChange={handleChangeState} ref={subjectContent} />
      </div>
      <div className="FlexBox">
        <p>강의 점수 :</p>
        <select name="score" value={state.score} onChange={handleChangeState} ref={subjectScore}>
          <option value="default">점수를 선택해주세요</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>수강신청</button>
      </div>
    </div>
  );
};
DataEditor.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default DataEditor;
