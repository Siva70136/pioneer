import { Component } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Bar, Tooltip, BarChart } from 'recharts'
import './index.css'



class Graph extends Component {
    state = { data: [] }

    componentDidMount() {
        this.getData();
    }


    getData = async () => {

        const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        const info = await response.json();
        this.setState({ data: info.data });

    }

    render() {
        const { data } = this.state;
        return (<div className="graph-container">
            <div className='linechart'>
                <LineChart  height={300} data={data} width={430}>
                    <XAxis dataKey="Year" tick={{stroke: 'white', strokeWidth: 1,fontSize: 12}}  label={{ value: 'Year', position: 'top',className: 'x-axis-label',style: { fontSize: '14px', fontWeight: 'bold', fill: 'white' }}}/>
                    <YAxis dataKey='Population' tick={{stroke: 'white', strokeWidth: 1,fontSize: 10}} label={{ value: 'Population', position: 'top',style: { fontSize: '14px', fontWeight: 'bold', fill: 'white' }}}/>
                    <Legend verticalAlign="top" align='right' iconType='circle' iconSize={6} />
                    <Line type="monotone" dataKey="Population" stroke="green" />
                    <Line type="monotone" dataKey="Nation" stroke="#E9A0A0" />
                    

                </LineChart>
            </div>
            <div className="barchart">
            <BarChart width={430} height={300} data={data} style={{ width: '100%', maxWidth: '100%' }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="Year"
              tick={{ stroke: 'white', strokeWidth: 1, fontSize: 12 }}
              label={{
                value: 'Year',
                position: 'insideBottom',
                style: { fontSize: '14px', fontWeight: 'bold', fill: 'white', marginTop: '10px' },
              }}
            />
            <YAxis
              tick={{ stroke: 'white', strokeWidth: 1, fontSize: 10 }}
              label={{
                value: 'Population',
                position: 'top',
                style: { fontSize: '14px', fontWeight: 'bold', fill: 'white' },
              }}
            />
            <Tooltip />
            <Legend verticalAlign="top" align="right" iconType="circle" iconSize={6} />
            <Bar dataKey="Population" fill="gold" />
            <Bar dataKey="Nation" fill="green" />
          </BarChart>
            </div>
        </div>

        )
    }


}

export default Graph;