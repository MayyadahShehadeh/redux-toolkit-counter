import {useSelector} from 'react-redux';
const Count = () => {
  const count = useSelector((state)=>state.counter.count);

  return (
    <div style={{paddingTop: '200px'}}>
      <b><big className="value">count : {count}</big></b>
    </div>
  );
};

export default Count;