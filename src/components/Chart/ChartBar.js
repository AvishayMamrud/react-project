import './ChartBar.css';

const ChartBar = (props) => {
//   value,label,maxVal
  let barFill = props.maxVal <= 0 ? '0%' : `${Math.round(props.value / props.maxVal * 100)}%`;
  return (<div className='chart-bar'>
    <div className='chart-bar__inner'>
        <div className='chart-bar__fill' style={{height: barFill}}></div>
    </div>
    <div className='chart-bar__label'>{props.label}</div>
  </div>);
};
export default ChartBar;
