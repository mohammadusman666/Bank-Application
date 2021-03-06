import React, { Component } from "react";
import formatNumber from "format-number";

import store from "./store";
import withdrawMoney from "./actions";

import "./App.css";

class App extends Component {
  render() {
    const { totalAmount, username } = store.getState();
    return (
      <div className="App">
        <img className="App__userpic" src={"https://image.ibb.co/nC8vGp/girl.png"} alt="photographer" />
        <p className="App__username">Hello, { username }! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button data-amount="10000" onClick={ dispatchWithdrawMoney }>WITHDRAW $10,000</button>
          <button data-amount="5000" onClick={ dispatchWithdrawMoney }>WITHDRAW $5,000</button>
        </section>

        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
    );
  }
}

const dispatchWithdrawMoney= (event) => {
  const amount = event.target.dataset.amount;
  store.dispatch(withdrawMoney(amount));
}

export default App;
