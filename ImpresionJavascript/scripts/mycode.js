function proc(){
    alert('hola');
    if (window.print) 
        window.print();
    else
        alert("puede usar Ctrl + P");
}

function onPrint(){
    var gadget = new cloudprint.Gadget();
    gadget.setPrintDocument("url","test page");
    gadget.setPrintDocument("application/pdf","PDF Doc");
    gadget.setPrintDocument("url","Test Page","docs/imprimir.pdf");
    gadget.openPrintDialog();
}