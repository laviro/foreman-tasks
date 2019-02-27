import componentRegistry from 'foremanReact/components/componentRegistry';
import ForemanTasksApplication from './app';

componentRegistry.register({
  name: 'ForemanTasks',
  type: ForemanTasksApplication,
});
