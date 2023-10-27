import PropTypes from 'prop-types';
import DataItem from './DataItem';

const DataList = ({ dataList, onRemove, onEdit }) => {
  return (
    <div className="DataList">
      <div className="SubjectInfo">
        {dataList.map((it) => (
          <DataItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit}/>
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
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};
export default DataList;
