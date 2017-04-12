const React = window.React;
import Header from './Header';
import Fixtures from './fixtures';

import '../style.css';

export default class App extends React.Component {
    render() {
    return (
      <div>
        <Header />
        <div className="container" >
          <Fixtures />
        </div>
      </div>
    );
  }
}
