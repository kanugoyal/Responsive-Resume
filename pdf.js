function generatePDF(){
    const element = document.getElementById("resume");

    html2pdf()
    .from(element)
    .save();
}