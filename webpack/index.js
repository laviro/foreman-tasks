import componentRegistry from 'foremanReact/components/componentRegistry';
import ForemanTasksApplication from './containers/Application/index';

componentRegistry.register({
  name: 'ForemanTasks',
  type: ForemanTasksApplication,
});
