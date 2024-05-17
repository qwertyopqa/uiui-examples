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
import { initTheme } from './theme/example';
import testData from './UiUi.testdata.b.json';
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://3aebd50a354d8b29f8299aa9cee1cd27@o4507254573432832.ingest.de.sentry.io/4507254577496144",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/uiui-examples\.vercel\.app/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});


initTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <UiUiExList><UiUi.Canvas url="/intro.frag.glsl" /></UiUiExList>,
  },
  {
    path: "/from-file",
    element: <BackWrapper><UiUi.Root data={testData}/></BackWrapper>,
  },
  {
    path: "/glsl/tiles",
    element: <BackWrapper><UiUi.Canvas url="/shader.frag.glsl" theme="example"/></BackWrapper>,
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
