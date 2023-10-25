import PropTypes from 'prop-types';
const DataItem = ({ id, name, content, score }) => {
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
    </div>
  );
};
DataItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
};
export default DataItem;
