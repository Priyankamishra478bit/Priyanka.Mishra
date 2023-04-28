// import reactdom from 'react-dom';
// let element =<h1>hello abc</h1>;
// reactdom.render (element,document.getElementById("root"));



// import reactDom from 'react-dom/client';
// let element =<h1>hello abc</h1>;
// const root= reactDom.createRoot (document.getElementById("root"));
// root.render(element);

import React from 'react';
import reactDom from 'react-dom/client';
let element =React.createElement("h1",  null, "hello abc",);
// let element =React.createElement ("span", null, React.createElement("h1",  null, "hello abc",));
const root= reactDom.createRoot (document.getElementById("root"));
 root.render(element);