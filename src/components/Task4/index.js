import React, { Component } from 'react';
import Web3 from 'web3';
import Menu from '../Menu';
import MenuSm from '../MenuSm';
import './index.css'

class MetaMaskIntegration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isConnected: false,
            errorMessage: ''
        };
    }

    connectWallet = async () => {
        try {
            console.log(window.ethereum);
            if (window.ethereum) {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(window.ethereum);
                // Check if connected
                const accounts = await web3.eth.getAccounts();
                const networkId = await web3.eth.net.getId();
                console.log(accounts, networkId);
                if (accounts.length > 0) {
                    this.setState({ isConnected: true, errorMessage: '' });
                }
            } else {
                this.setState({ isConnected: false, errorMessage: 'MetaMask extension not detected.' });
            }
        } catch (error) {
            this.setState({ isConnected: false, errorMessage: error.message });
        }
    };

    render() {
        const { isConnected, errorMessage } = this.state;
        return (
            <div className="home-container">
                <div className="menu"><Menu /></div>

                <div className="data-container">
                    <div className="menusm">
                        <MenuSm />
                    </div>

                    <div className="top-header">
                        <div>
                            <p className="head">Hello,<span className="sub-head">Brooklyn Simmions</span></p>
                            <p className="head">Welcome,<span className="sub-head2">spot-trading!</span></p>
                        </div>
                        <div className="">
                            <button className="button">start trading</button>
                        </div>
                    </div>

                    <div className='connect-button'>
                        <button onClick={this.connectWallet} className='button'>Connect Wallet</button>
                        {isConnected && <p className='success'>Wallet connected successfully!</p>}
                        {errorMessage && <p className='error'>{errorMessage}</p>}
                    </div>
                </div>
            </div>

        );
    }
}

export default MetaMaskIntegration;
