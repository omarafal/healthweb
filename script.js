// INIT
interpreter("interpreter1", "interText1")
interpreter("interpreter2", "interText2")

const { jsPDF } = window.jspdf;
const doc = new jsPDF();
doc.setFont("calibri", "normal")

const fontSize = 12;
var x = 10;
var y = 10 + fontSize;
doc.setFontSize(fontSize);

const isFace = true;
// INIT FIN

function underLine(text){

    // Add text
    doc.text(text, x, y);

    const textWidth = doc.getTextWidth(text);

    const underlineY = y + 1;  // Adjust '1' based on the font size

    // Draw underline
    doc.line(x, underlineY, x + textWidth, underlineY);
}

function newLine(){
    y += 5
}
function gap(){
    y += 30
}
function text(txt){
    doc.text(txt, x, y)
}
function textBold(txt){
    doc.setFont("calibri", "bold")
    doc.text(txt, x, y)
    doc.setFont("calibri", "normal")
}

function generatePDF() {
    const header = "SLT Initial feeding ax"
    underLine(header)
    gap()
    // skip first part for now
    text("O/", x, y)
    newLine()
    textBold("Case History")

    const texts = []

    const name = document.getElementById(isFace ? "name1" : "name2").value;

    texts.push(name)
    // const refererName = document.getElementById().value;
    // const refererProf = document.getElementById().value;
    // const he_she = document.getElementById().value;
    // const face_location = document.getElementById().value;
    // const brought_by = document.getElementById().value;
    // const interpreter = document.getElementById().value;
    // const age = document.getElementById().value;

    // const virtual_way = document.getElementById().value;
    // const child_seen = document.getElementById().value;

    // "[NAME] was referred for an eating, drinking and swallowing assessment by [REFERRER ]. He/She  was seen at WSHC/home  with Mum/Dad . An interpreter was also present . Verbal consent to feeding assessment and treatment. Consent and candour gained to liaise with GP and HCPs. "+
    // "VOC: Child appeared clean, well and settled. Current age: #;##."

    // // Get form data
    // // const name = document.getElementById('name').value;
    // const date = document.getElementById('date').value;
    // const summary = document.getElementById('summary').value;

    // // Add content to PDF
    // doc.text(`Report for: ${name}`, 10, 10);
    // doc.text(`Date: ${date}`, 10, 20);
    // doc.text(`Summary:`, 10, 30);
    // doc.text(summary, 10, 40, { maxWidth: 180 });

    // Save the PDF
    // texts.forEach((text) => {
    //     // Add the text
    //     doc.text(text, x, y);

    //     // Calculate text width for the underline
    //     const textWidth = doc.getTextWidth(text);

    //     // Set the Y position for the underline slightly below the text
    //     const underlineY = y + 2; // Adjust based on font size

    //     // Draw the underline
    //     doc.line(x, underlineY, x + textWidth, underlineY);

    //     // Move Y down for the next line (this automatically shifts text downward)
    //     y += fontSize + lineHeight; // fontSize + lineHeight gives space between lines
    // });

    // doc.text(name, 10, 20)
    doc.save(`report.pdf`);
  }

// check if interpreter is wanted
function interpreter(id, txtId){
    const interpreterBtn = document.getElementById(id)

    interpreterBtn.addEventListener("change", () => {
        const interText = document.getElementById(txtId)

        if(interpreterBtn.checked){
            interText.style = "text-decoration: none;"
        }
        else{
            interText.style = "text-decoration: line-through;"
        }
    })
}

// listen for radio changes
const face_virtual = document.querySelectorAll('input[name="group1"]');
face_virtual.forEach(ch => {
    ch.addEventListener('change', () => {
        const selectedValue = document.querySelector('input[name="group1"]:checked').value;
        const faceOption = document.getElementById("faceOption")
        const virtualOption = document.getElementById("virtualOption")

        if(selectedValue == "face"){
            faceOption.style = "visibility: visible"
            virtualOption.style = "visibility: hidden; display: none;"
            isFace = true
        }
        else{
            faceOption.style = "visibility: hidden; display: none;"
            virtualOption.style = "visibility: visible"
            isFace = false
        }
        // console.log(selectedValue);
    });
});



// check if interpreter is wanted
// const interpreterBtns = document.getElementsByClassName("interpreter")
// Array.from(interpreterBtns).forEach(interpreterBtn => {
//     interpreterBtn.addEventListener('change', () => {
//         const interText = document.getElementsByClassName("interText")
        
//         Array.from(interText).forEach(txt => {
//             if(interpreterBtn.checked){
//                 txt.style = "text-decoration: none;"
//             }
//             else{
//                 txt.style = "text-decoration: line-through;"
//             }
//         })
        
       
//     })
// })

// check if child was seen
const childSeen = document.getElementById("childSeen")
childSeen.addEventListener("change", () => {
    const childSeenText = document.getElementById("childSeenText")

    if(childSeen.checked){
        childSeenText.style = "text-decoration: none;"
    }
    else{
        childSeenText.style = "text-decoration: line-through;"
    }
})