import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BackWrapper } from './BackWrapper';
import { UiUiExList } from './UiUiExList';


import { UiUi } from '@opqa/uiui';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//import { UiUiPoint } from './ui/Point';
// import sliderStyles from './ui/slider.module.scss';
// UiUi.Styles.register('Slider', sliderStyles);
// UiUi.Config.enable([UiUiPoint]);

// UiUi.GlslCanvas.processShaderCode(code);

const testData = require('./UiUi.testdata.b.json');
const router = createBrowserRouter([
  {
    path: "/",
    element: <UiUiExList/>,
  },
  {
    path: "/from-file",
    element: <BackWrapper><UiUi.Root data={testData}/></BackWrapper>,
  },
  {
    path: "/glsl/tiles",
    element: <BackWrapper><UiUi.Canvas url="/shader.frag.glsl" /></BackWrapper>,
  },
  {
    path: "/glsl/thread",
    element: <BackWrapper><UiUi.Canvas url="/threads.frag.glsl" /></BackWrapper>
  },
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
