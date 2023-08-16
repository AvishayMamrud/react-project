import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    return (<div className='chart'>
        {props.points.map(point => <ChartBar 
                                        key={point.label}
                                        value={point.value}
                                        label={point.label}
                                        maxVal={point.maxVal} 
                                    />)}
    </div>);
};

export default Chart;
