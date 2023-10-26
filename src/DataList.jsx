import PropTypes from 'prop-types';
import DataItem from './DataItem';

const DataList = ({ dataList, onDelete }) => {
  return (
    <div className="DataList">
      <div className="SubjectInfo">
        {dataList.map((it) => (
          <DataItem key={it.id} {...it} onDelete={onDelete} />
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
  onDelete: PropTypes.func.isRequired,
};
export default DataList;
