import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: '/',
    lazy: async () => {
      const { default: HomePage } = await import('./src/pages/Home/HomePage');
      return { Component: HomePage };
    },
    children: [
      {
        index: true,
        lazy: async () => {
          const { default: AboutPage } = await import('./src/pages/About/AboutPage');
          return { Component: AboutPage };
        },
      },
    ],
  },
]);

export default router;