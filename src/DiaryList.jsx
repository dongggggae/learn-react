import PropTypes from 'prop-types';

const DiaryList = ({ dummyList }) => {
  return (
    <div className="DiaryList">
      <h2>노출되는 Props</h2>
      <h4>{dummyList.length}개 추출</h4>
      <div>
        {dummyList.map((it) => (
          <div key={it.id}>
            <p>페이지 고유 번호 {it.id}</p>
            <p>input: {it.input}</p>
            <p>textarea: {it.textarea}</p>
            <p>select: {it.select}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
DiaryList.propTypes = {
  dummyList: PropTypes.array.isRequired, // dummyList는 배열이며 필수 prop
};
export default DiaryList;
