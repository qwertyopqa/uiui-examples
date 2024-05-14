import { UiUi } from '@opqa/uiui';
import varsFile from './vars.module.scss';
import Panel from './panel.module.scss';
import Root from './root.module.scss';
import Slider from './slider.module.scss';

export const initTheme = () => {
  UiUi.Theme.register('example', {
    vars: varsFile.vars,
    Panel,
    Root,
    Slider,
  });
  return 'example';
}
