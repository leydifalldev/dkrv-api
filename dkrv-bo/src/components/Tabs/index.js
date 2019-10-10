import React, { Component } from 'react';
import { Tab, Tabs, Card, Button, ButtonGroup } from 'react-bootstrap';

export class SimpleTabs extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 0,
    };
  }

  _renderTab(tabs) {
    let tabsView = [];
    tabs.map((tab, index) => tabsView.push(<Tab eventKey={index} title={tab.label}>
      <PanelCollection collections={collections.data} />
    </Tab>))
    return tabsView;
  }

  render() {
    const { tabs } = this.props;
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={this.state.key}
        onSelect={key => this.setState({ key })}
      >
        {this._renderTab(tabs)}
      </Tabs>
    );
  }
}