import { useState } from 'react';
import { Document, pdfjs, Page } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

const PDFCompiler = ({ pdfFile }) => {

    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPageNumber(1);
    }

    const changePage = (offset) => {
        setPageNumber(prevNumberPage => prevNumberPage + offset);
    }

    const back = () => {
        changePage(-1)
    }

    const next = () => {
        changePage(+1)
    }

    return (
        <div className="pdf-div">
            <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                {/* If we show all pages 1-3
                {
                    Array.apply(null, Array(numPages))
                        .map((_, i) => i + 1)
                        .map((page) => {
                            return <Page
                                key={i}
                                pageNumber={page}
                                renderTextLayer={false}
                                renderAnnotationLayer={false}
                            />
                        })
                }  */}
                <Page
                    pageNumber={pageNumber}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                />
            </Document>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {
                    pageNumber > 1 &&
                    <button onClick={back}>Previous</button>
                }
                {
                    pageNumber < numPages &&
                    <button onClick={next}>Next</button>
                }
            </div>



        </div>
    );
}

export default PDFCompiler;
