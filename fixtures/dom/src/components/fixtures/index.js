import Header from '../Header';

import RangeInputFixtures from './range-inputs';
import TextInputFixtures from './text-inputs';
import SelectFixtures from './selects';
import TextAreaFixtures from './textareas';
import InputChangeEvents from './input-change-events';
import NumberInputFixtures from './number-inputs';
import PasswordInputFixtures from './password-inputs';
import ButtonFixtures from './buttons';
import DateInputFixtures from './date-inputs';
import ErrorHandling from './error-handling';
import EventPooling from './event-pooling';
import CustomElementFixtures from './custom-elements';
import MediaEventsFixtures from './media-events';
import {
  SelectionEventFixtureRoot,
  SelectionEventFixtureIFrame,
} from './selection-events';

const React = window.React;

const RouteConfig = {
  '/text-inputs': <TextInputFixtures />,
  '/range-inputs': <RangeInputFixtures />,
  '/selects': <SelectFixtures />,
  '/textareas': <TextAreaFixtures />,
  '/input-change-events': <InputChangeEvents />,
  '/number-inputs': <NumberInputFixtures />,
  '/password-inputs': <PasswordInputFixtures />,
  '/buttons': <ButtonFixtures />,
  '/date-inputs': <DateInputFixtures />,
  '/error-handling': <ErrorHandling />,
  '/event-pooling': <EventPooling />,
  '/custom-elements': <CustomElementFixtures />,
  '/media-events': <MediaEventsFixtures />,
  '/selection-events': <SelectionEventFixtureRoot />,
};

function FixturesPage() {
  const {pathname} = window.location;
  if (pathname === '/selection-events-iframe') {
    return <SelectionEventFixtureIFrame />;
  }
  return (
    <div>
      <Header />
      <div className="container">
        {RouteConfig[pathname] || <p>Please select a test fixture.</p>}
      </div>
    </div>
  );
}

export default FixturesPage;
