import PropTypes from 'prop-types';
import DataItem from './DataItem';

const DataList = ({ dataList }) => {
  return (
    <div className="DataList">
      <h2>노출되는 Props</h2>
      <h4>{dataList.length}개 추출</h4>
      <div>
        {dataList.map((it) => (
          <DataItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

DataList.defaultProps = {
  dataList: [],
};

DataList.propTypes = {
  dataList: PropTypes.array.isRequired,
};
export default DataList;
