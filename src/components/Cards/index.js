import { Component } from "react";
import './index.css'

class Cards extends Component {
    state = { data: [] }

    componentDidMount() {
        this.getData();
    }

    bgcolor = ['lightgreen', 'lightblue', 'lightgoldenrodyellow', 'lightskyblue', 'lightpink']
    url = "https://api.coindesk.com/v1/bpi/currentprice.json";

    getData = async () => {
        const response = await fetch(this.url);
        const info = await response.json();
        //console.log(info.bpi);
        const currData = info.bpi;
        this.setState({ data: currData });
    }

    bStyle = {
        backgroundColor: this.bgcolor[0],
        color:'black'
      };

    render() {
        const { data } = this.state;
        return (
            <div className='cards-container'>
                {Object.keys(data).map((currencyCode) => {
                    const currency = data[currencyCode];
                    let symbolText;

                    if (currency.symbol === '&#36;') symbolText = '$';
                    else if (currency.symbol === '&pound;') symbolText = '£';
                    else if (currency.symbol === '&euro;') symbolText = '€';
                    else symbolText = currency.symbol;
                    return (
                        <div key={currencyCode} className='card'>
                            <div className="currency-container">
                                <p className=" i" style={this.bStyle}>{symbolText}</p>
                                <p>{currency.code}</p>
                            </div>
                            <h3>{currency.description}</h3>
                            <p><span>Price: </span>{currency.rate}</p>
                            <p><span>Rate Float: </span>{currency.rate_float}</p>
                        </div>
                    );
                })}
            </div>

        )
    }


}

export default Cards;