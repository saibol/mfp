import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";

// mount function to start the app 
// const mount = (el) => {
    ReactDOM.render(<App />, document.querySelector('#root'));
// };

// if we are in the development and in standalone,
// call mount immediately
// if (process.env.NODE_ENV === 'development') {
//     const devRoot = document.querySelector('#_marketing-dev-root');
//     if (devRoot) {
//         mount(devRoot);
//     }
// }

// we are running through the container,
// we should export the mount function
// export { mount };