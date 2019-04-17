import React, { Component } from 'react';
import SummaryTotal from '../summaryTotal/summaryTotal';
import './summary.css';

class Summary extends Component {
  render() {

    const summary = Object.keys(this.props.state.selected)
    .map(key => <div className="summary__option" key={key}>
      <div className="summary__option__label">{key}  </div>
      <div className="summary__option__value">{this.props.state.selected[key].name}</div>
      <div className="summary__option__cost">
        { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
            .format(this.props.state.selected[key].cost) }
      </div>
      </div>)


    return (
    <section className="main__summary">
      <h3>NEW GREENLEAF 2018</h3>
      {summary}
      <SummaryTotal state={this.props.state} />
    </section>
)
  }
}

export default Summary
