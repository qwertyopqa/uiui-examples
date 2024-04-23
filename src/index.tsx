import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


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
    path: "/from-file",
    element: <UiUi.Root data={testData}/>,
  },
  {
    path: "/glsl/tiles",
    element: <UiUi.Canvas url="/shader.frag.glsl" />,
  },
  {
    path: "/glsl/threads",
    element: <UiUi.Canvas url="/threads.frag.glsl" />,
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
