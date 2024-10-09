// INIT
interpreter("interpreter1", "interText1")
interpreter("interpreter2", "interText2")

// const { jsPDF } = window.jspdf;
// const doc = new jsPDF();
// doc.setFont("calibri", "normal")

const { jsPDF } = window.jspdf;
var doc = new jsPDF();
doc.setFont("calibri", "normal")

const fontSize = 12;
var x = 10;
var y = 10 + fontSize;
const pageHeight = doc.internal.pageSize.height;
const pageWidth = doc.internal.pageSize.width;
const maxWidth = pageWidth - 20;

doc.setFontSize(fontSize)

const bullet = '\u2022'
const isFace = true;

function init(){
    const { jsPDF } = window.jspdf;
    doc = new jsPDF();
    doc.setFont("calibri", "normal")

    const fontSize = 12
    x = 10
    y = 10 + fontSize

    doc.setFontSize(fontSize)
}
// INIT FIN

function underLine(text){

    // Add text
    doc.text(text, x, y);

    const textWidth = doc.getTextWidth(text);

    const underlineY = y + 1;

    // Draw underline
    doc.line(x, underlineY, x + textWidth, underlineY);
}

function newLine(){
    y += 6
}
function gap(){
    y += 20
}
function smallGap(){
    y += 15
}
function checkNewPage(){
    if(y > (pageHeight - (10 + fontSize))){
        doc.addPage();
        y = 10 + fontSize; // reset y for new page
    }
}

function text(txt){
    checkNewPage()
    doc.text(txt, x, y, { maxWidth })
}
function textBold(txt){
    checkNewPage()
    doc.setFont("calibri", "bold")
    doc.text(txt, x, y, { maxWidth })
    doc.setFont("calibri", "normal")
}
function listItem(txt){
    checkNewPage()
    var com = `${bullet} ${txt} `
    doc.text(com, x+3, y, { maxWidth })
}
function sublistItem(txt){
    checkNewPage()
    var com = `- ${txt} `
    doc.text(com, x+10, y, { maxWidth })
}
function valueField(id){
    return document.getElementById(id).value
}
function lastIsChecked(id){
    return document.getElementById(id).checked
}
function generatePDF() {
    init()
    underLine("SLT Initial feeding ax")
    gap()
    // skip first part for now
    text("O/", x, y)
    smallGap()
    textBold("Case History")
    smallGap()
    listItem(`Main concerns reported by: ${valueField("reportedBy")}`)
    newLine()
    listItem(`Strategies parents have attempted already: ${valueField("sec2_1")}`)
    newLine()
    listItem(`Birth and pregnancy: ${valueField("sec2_2")}`)
    newLine()
    listItem(`Medical history:`)
    newLine()
    sublistItem(`Diagnoses: ${valueField("sec2_3_1")}`)
    newLine()
    sublistItem(`Long hospital stays: ${valueField("sec2_3_2")}`)
    newLine()
    sublistItem(`Vision and hearing: ${valueField("sec2_3_3")}`)
    newLine()
    sublistItem(`Chest health: ${valueField("sec2_3_4")}`)
    newLine()
    listItem(`Current medications: ${valueField("sec2_4")}`)
    newLine()
    listItem(`Global development history: ${valueField("sec2_5")}`)
    newLine()
    listItem(`Weight and height: ${valueField("sec2_6")}`)
    newLine()
    listItem(`Regularity of bowel and bladder movements: ${valueField("sec2_7")}`)
    newLine()
    listItem(`Sleep: ${valueField("sec2_8")}`)
    newLine()
    listItem(`Dentition: ${valueField("sec2_9")}`)
    newLine()
    listItem(`Play - sensory play: ${valueField("sec2_10")}`)
    newLine()
    listItem(`Communication: ${valueField("sec2_11")}`)
    newLine()
    listItem(`Other services / upcoming appointments: ${valueField("sec2_12")}`)
    newLine()
    listItem(`Social history: ${valueField("sec2_13")}`)
    smallGap()
    textBold("Feeding History")
    smallGap()
    listItem(`From birth to weaning: ${valueField("sec3_1")}`)
    newLine()
    listItem(`From weaning to now: ${valueField("sec3_2")}`)
    newLine()
    listItem(`Accepts: ${valueField("sec3_3")}`)
    newLine()
    listItem(`Refuses: ${valueField("sec3_4")}`)
    newLine()
    listItem(`Onset: ${valueField("sec3_5")}`)
    newLine()
    sublistItem(`Breakfast: ${valueField("sec3_6_1")}`)
    newLine()
    sublistItem(`Lunch: ${valueField("sec3_6_1")}`)
    newLine()
    sublistItem(`Diner: ${valueField("sec3_6_2")}`)
    newLine()
    sublistItem(`Snacks: ${valueField("sec3_6_3")}`)
    newLine()
    sublistItem(`Fluids: ${valueField("sec3_6_4")}`)
    newLine()
    listItem(`Positioning: ${valueField("sec3_7")}`)
    newLine()
    listItem(`Meal time routine: ${valueField("sec3_8")}`)
    smallGap()
    textBold("Feeding Assessment")
    smallGap()
    text("Alertness and energy levels were appropriate for mealtime assessment.")
    smallGap()
    listItem(`Oro-motor examination: ${valueField("sec4_1")}`)
    newLine()
    listItem(`Voice/Upper Airway: ${valueField("sec4_2")}`)
    newLine()
    listItem(`Communication: ${valueField("sec4_3")}`)
    newLine()
    listItem("Oral feeding observation:")
    newLine()
    sublistItem(`Positioning: ${valueField("sec4_4_1")}`)
    newLine()
    sublistItem(`Oral-sensory and mealtime behaviours: ${valueField("sec4_4_2")}`)
    newLine()
    sublistItem(`Water bottle (${valueField("sec4_4_3_1")}, IDDSI ${valueField("sec4_4_3_2")}): ${valueField("sec4_4_3_3")}`)
    newLine()
    sublistItem(`Cup (${valueField("sec4_4_4_1")}, IDDSI ${valueField("sec4_4_4_2")}): ${valueField("sec4_4_4_3")}`)
    newLine()
    sublistItem(`Straw (${valueField("sec4_4_5_1")}, IDDSI ${valueField("sec4_4_5_2")}): ${valueField("sec4_4_5_3")}`)
    newLine()
    sublistItem(`Spoon feeding (${valueField("sec4_4_6_1")}, IDDSI ${valueField("sec4_4_6_2")}): ${valueField("sec4_4_6_3")}`)
    newLine()
    sublistItem(`Chewing: ${valueField("sec4_4_7")}`)
    gap()
    text("P/")
    smallGap()
    textBold("Impression and Summary")
    smallGap()
    text(`${valueField("sec5_1")} presents with ${valueField("sec5_2")} paediatric feeding disorder characterized by ${valueField("sec5_3")} and impacting on ${valueField("sec5_4")}.`)
    smallGap()
    // SPECIAL ----------
    underLine("TOMs score: ")
    checkNewPage()
    doc.text(`${valueField("sec5_5")}`, doc.getTextWidth("TOMs score: ")+11, y)
    // ------------------
    newLine()
    text(`Impairment: ${valueField("sec5_6")}`)
    newLine()
    text(`Activity: ${valueField("sec5_7")}`)
    newLine()
    text(`Participation: ${valueField("sec5_8")}`)
    newLine()
    text(`Well-being (child): ${valueField("sec5_9")}`)
    newLine()
    text(`Well-being (parent): ${valueField("sec5_10")}`)
    smallGap()
    text("Written and verbal recommendation:")
    if(valueField("sec5_11") != ""){
        newLine()
        text(`- ${valueField("sec5_11")}`)
    }
    if(valueField("sec5_12") != ""){
        newLine()
        text(`- ${valueField("sec5_12")}`)
    }
    if(valueField("sec5_13") != ""){
        newLine()
        text(`- ${valueField("sec5_13")}`)
    }
    if(valueField("sec5_14") != ""){
        newLine()
        text(`- ${valueField("sec5_14")}`)
    }
    gap()
    text("P/")
    smallGap()
    listItem(`Priority: ${valueField("sec6_1_1")}; dysphagia-risk - ${valueField("sec6_1_2")} ${valueField("sec6_1_3")}.`)
    if(lastIsChecked("last1")){
        newLine()
        listItem(`SLT RV in ${valueField("sec6_2_1")} months with view to ${valueField("sec_6_2_2")}.`)
    }
    if(lastIsChecked("last2")){
        newLine()
        listItem("DC from SLT with recommandations.")
    }
    if(lastIsChecked("last3")){
        newLine()
        listItem("Internal referral for CDT communication.")
    }
    if(lastIsChecked("last4")){
        newLine()
        listItem(`Letter to GP for: ${"sec6_3"}.`)
    }
    if(lastIsChecked("last5")){
        newLine()
        listItem(`Refferal for VFSS at: ${"sec6_4"}.`)
    }
    if(lastIsChecked("last6")){
        newLine()
        listItem("Referral to SSOT for supportive seating at mealtimes.")
    }
    if(lastIsChecked("last7")){
        newLine()
        listItem(`Referral / Contact DT re: ${"sec6_5"}.`)
    }

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