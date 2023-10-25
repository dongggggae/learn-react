import PropTypes from 'prop-types';
import DataItem from './DataItem';

const DataList = ({ dataList }) => {
  return (
    <div className="DataList">
      <div className="SubjectInfo">
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
