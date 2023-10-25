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
  id: PropTypes.array.isRequired,
  name: PropTypes.array.isRequired,
  content: PropTypes.array.isRequired,
  score: PropTypes.array.isRequired,
};
export default DataItem;
