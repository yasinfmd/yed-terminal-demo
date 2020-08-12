import React from 'react';
import logo from './logo.svg';
import './App.css';

import YedTerminal from "yed-terminal"
import 'yed-terminal/dist/index.css'

function App() {
  return (
      <>
          <p>Başlık ile beraber kullanım</p>
        <YedTerminal terminalTitle={"Terminalim"} terminalType="Mac" terminalLogs={[{label:'Merhaba'},{label: "Yasin Efem Dalkılıç"}]} />
    
       <p> Windows için  kullanım</p>
        <YedTerminal terminalTitle={"Terminalim"} terminalType="Windows" terminalLogs={[{label:'Merhaba'},{label: "Yasin Efem Dalkılıç"}]} />

          <p>Farklı yükseklik değerleri ile kullanım</p>
          <YedTerminal terminalHeight={300} terminalTitle={"Terminalim"} terminalLogs={[{label:'Merhaba'},{label: "Yasin Efem Dalkılıç"}]} />

          <p>Standart Kullanım</p>
          <YedTerminal terminalTitle={"Terminalim"} terminalLogs={[]} />
        </>
  );
}

export default App;
