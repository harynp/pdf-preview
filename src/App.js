import './App.css';
import PDFCompiler from './components/pdfCompiler';
import pdf from './FORM.pdf';

function App() {
  return (
    <div className="App">
      <PDFCompiler pdfFile={pdf} />
    </div>
  );
}

export default App;
