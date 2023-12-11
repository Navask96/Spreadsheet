import React, { useEffect } from 'react';
import Spreadsheet from 'x-data-spreadsheet';
import 'x-data-spreadsheet/dist/xspreadsheet.css';
import 'x-data-spreadsheet/dist/locale/zh-cn.js'; // Adjust the locale as needed

const App = () => {
  useEffect(() => {
    const spreadsheet = new Spreadsheet('#x-spreadsheet-demo', {
      mode: 'edit',
      showToolbar: false,
      showGrid: true,
      showContextmenu: true,
      view: {
        height: () => document.documentElement.clientHeight,
        width: () => document.documentElement.clientWidth,
      },
      // ...other options
    });

    // Bind events or customize the spreadsheet as needed

    // Event of click on cell
    spreadsheet.on('cell-selected', (cell, ri, ci) => {
      // Your code here
    });

    // Edited on cell
    spreadsheet.on('cell-edited', (text, ri, ci) => {
      // Your code here
    });

    // ...more events and customizations

    // Update cell text
    spreadsheet.cellText(5, 5, 'xxxx').cellText(6, 5, 'yyy').reRender();
  }, []);

  return <div id="x-spreadsheet-demo" />;
};

export default App;
