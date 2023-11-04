import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
const DataItem = ({ id, name, content, score, onRemove, onEdit }) => {
  // Item 수정
  const [isEdit, setIsEdit] = useState(false);

  const toggleIsEdit = () => setIsEdit(!isEdit);

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`${id}번 째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };

  const [localContent, setLocalContent] = useState(content);

  const localContentInput = useRef();

  const handleChangeContent = (e) => {
    setLocalContent(e.target.value);
  };
  // Item 삭제
  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  return (
    <div className="DataItem">
      <h2 className="SbujectTitle">
        {id}. {name}
      </h2>
      <div className="SubjectContent">
        {isEdit ? (
          <>
            <textarea ref={localContentInput} value={localContent} onChange={handleChangeContent} />
          </>
        ) : (
          <>{content}</>
        )}
      </div>
      <div className="SubjectScore">
        <p>
          강의 점수 : <span>{score}</span>
        </p>
      </div>
      <div className="ButtonArea">
        {isEdit ? (
          <>
            <button onClick={handleQuitEdit}>수정 취소</button>
            <button onClick={handleEdit}>수정 완료</button>
          </>
        ) : (
          <>
            <button onClick={toggleIsEdit}>수정 하기</button>
            <button onClick={handleRemove}>삭제 하기</button>
          </>
        )}
      </div>
    </div>
  );
};
DataItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};
export default DataItem;
