function generatePDF(){
    const element = document.getElementsByClassName("container");

    html2pdf()
    .from(element)
    .save();
}