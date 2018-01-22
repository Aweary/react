import React, {Component} from 'react';
import FixtureSet from '../../FixtureSet';
import TestCase from '../../TestCase';

export class SelectionEventFixtureRoot extends Component {
  render() {
    return (
      <FixtureSet title="Selection Events - iframes" description="">
        <TestCase
          title="Selection events across iframes"
          description="Selection events should work within iframes">
          <TestCase.Steps>
            <li>TODO</li>
          </TestCase.Steps>
          <TestCase.ExpectedResult>TODO</TestCase.ExpectedResult>
          <iframe src="/selection-events-iframe" />
        </TestCase>
      </FixtureSet>
    );
  }
}

export class SelectionEventFixtureIFrame extends Component {
  render() {
    return <div>I'm in an iframe. TODO</div>;
  }
}
