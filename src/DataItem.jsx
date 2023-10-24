import PropTypes from 'prop-types';
const DataItem = ({ id, input, textarea, select }) => {
  return (
    <div className="DataItem">
      <div>{id}번째 내용</div>
      <div>작성자 : {input}</div>
      <div>글 내용 : {textarea}</div>
      <div>오늘의 점수 : {select}</div>
    </div>
  );
};

DataItem.propTypes = {
  id: PropTypes.array.isRequired,
  input: PropTypes.array.isRequired,
  textarea: PropTypes.array.isRequired,
  select: PropTypes.array.isRequired,
};
export default DataItem;
