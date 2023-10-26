import PropTypes from 'prop-types';
const DataItem = ({ id, name, content, score, onDelete }) => {
  return (
    <div className="DataItem">
      <h2 className="SbujectTitle">
        {id}. {name}
      </h2>
      <div className="SubjectContent">{content}</div>
      <div className="SubjectScore">
        <p>
          강의 점수 : <span>{score}</span>
        </p>
      </div>
      <div className="ButtonArea">
        <button
          onClick={() => {
            if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
              onDelete(id);
            }
          }}
        >
          삭제하기
        </button>
      </div>
    </div>
  );
};
DataItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default DataItem;
