// INIT
interpreter("interpreter1", "interText1")
interpreter("interpreter2", "interText2")

// const { jsPDF } = window.jspdf;
// const doc = new jsPDF();
// doc.setFont("calibri", "normal")

const { jsPDF } = window.jspdf;
var doc = new jsPDF();
doc.setFont("calibri", "normal")
const lineHeight = 1.15;
const fontSize = 12;
var x = 10;
var y = 10 + fontSize;
const pageHeight = doc.internal.pageSize.height;
const pageWidth = doc.internal.pageSize.width;
const maxWidth = pageWidth - 20;

doc.setFontSize(fontSize)

const bullet = '\u2022'
// var isFace = true;

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

// function //newLine(){
//     y += 6
// }
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
    // y = doc.getTextHeight(txt);
    const splitText = doc.splitTextToSize(txt, maxWidth);  // Split text into multiple lines
    doc.text(splitText, x, y)
    y += splitText.length * 6;

    // console.log(splitText)
    // console.log(splitText.length)
    // console.log(doc.getLineHeightFactor())
    // console.log(`y: ${y}`)
}
function textTOM(val){
    var txt = "TOMs score: "
    checkNewPage()
    // y = doc.getTextHeight(txt);
    const splitText = doc.splitTextToSize(`${valueField("sec5_5")}`, maxWidth);  // Split text into multiple lines
    doc.text(splitText, doc.getTextWidth(txt)+11, y)
    y += splitText.length * 6;

    // console.log(splitText)
    // console.log(splitText.length)
    // console.log(doc.getLineHeightFactor())
    // console.log(`y: ${y}`)
}

function textBold(txt){
    checkNewPage()
    doc.setFont("calibri", "bold")
    // doc.text(txt, x, y, { maxWidth })
    const splitText = doc.splitTextToSize(txt, maxWidth);  // Split text into multiple lines
    doc.text(splitText, x, y)
    doc.setFont("calibri", "normal")
    y += splitText.length * 6;

}
function listItem(txt){
    checkNewPage()
    var com = `${bullet} ${txt} `
    // doc.text(com, x+3, y, { maxWidth })
    const splitText = doc.splitTextToSize(com, maxWidth);  // Split text into multiple lines
    doc.text(splitText, x+3, y)
    // console.log(splitText.length)
    y += splitText.length * 6;

}
function sublistItem(txt){
    checkNewPage()
    var com = `- ${txt} `
    // doc.text(com, x+10, y, { maxWidth })
    const splitText = doc.splitTextToSize(com, maxWidth);  // Split text into multiple lines
    doc.text(splitText, x+10, y)
    y += splitText.length * 6;


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
    text("S/")
    smallGap()
    if(document.getElementById("virtualOption").style.visibility != "visible"){
        text(`${valueField("name1")} was referred for an eating, drinking and swallowing assessment by ${valueField("refname1")}\
, ${valueField("refpof1")}. ${document.querySelector('input[name="gender"]:checked').value} was seen at ${valueField("place")} with\
 ${valueField("broughtby1")}. ${document.getElementById("interpreter1").checked ? "An interpreter was also present. " : ""}Verbal consent to feeding assessment and treatment. Consent and candour gained to liaise with GP and HCPs. VOC: Child appeared clean, well and settled. Current age: \
 ${valueField("age1")}.`)
    }
    else{
        text(`${valueField("name2")} was referred for an eating, drinking and swallowing assessment by ${valueField("refname2")}\
, ${valueField("refpof2")}. ${valueField("comm")} consultation conducted with ${valueField("broughtby2")}. ${document.getElementById("interpreter2").checked ? "An interpreter was also present. " : ""}Verbal consent to feeding ax and treatment; consent and candour gained to liaise with GP and HCPs; consent gained for use of WhatsApp for purpose of video consultations and video recordings of clinical bedside ax. ${document.getElementById("childSeen").checked ? "Child was not seen during the appointment but reported to be well. " : ""}Current age: \
 ${valueField("age2")}.`)
    }
    gap()
    text("O/")
    smallGap()
    textBold("Case History")
    smallGap()
    listItem(`Main concerns reported by: ${valueField("reportedBy")}`)
    //newLine()
    listItem(`Strategies parents have attempted already: ${valueField("sec2_1")}`)
    //newLine()
    listItem(`Birth and pregnancy: ${valueField("sec2_2")}`)
    //newLine()
    listItem(`Medical history:`)
    //newLine()
    sublistItem(`Diagnoses: ${valueField("sec2_3_1")}`)
    //newLine()
    sublistItem(`Long hospital stays: ${valueField("sec2_3_2")}`)
    //newLine()
    sublistItem(`Vision and hearing: ${valueField("sec2_3_3")}`)
    //newLine()
    sublistItem(`Chest health: ${valueField("sec2_3_4")}`)
    //newLine()
    listItem(`Current medications: ${valueField("sec2_4")}`)
    //newLine()
    listItem(`Global development history: ${valueField("sec2_5")}`)
    //newLine()
    listItem(`Weight and height: ${valueField("sec2_6")}`)
    //newLine()
    listItem(`Regularity of bowel and bladder movements: ${valueField("sec2_7")}`)
    //newLine()
    listItem(`Sleep: ${valueField("sec2_8")}`)
    //newLine()
    listItem(`Dentition: ${valueField("sec2_9")}`)
    //newLine()
    listItem(`Play - sensory play: ${valueField("sec2_10")}`)
    //newLine()
    listItem(`Communication: ${valueField("sec2_11")}`)
    //newLine()
    listItem(`Other services / upcoming appointments: ${valueField("sec2_12")}`)
    //newLine()
    listItem(`Social history: ${valueField("sec2_13")}`)
    gap()
    smallGap()
    textBold("Feeding History")
    smallGap()
    listItem(`From birth to weaning: ${valueField("sec3_1")}`)
    //newLine()
    listItem(`From weaning to now: ${valueField("sec3_2")}`)
    //newLine()
    listItem(`Accepts: ${valueField("sec3_3")}`)
    //newLine()
    listItem(`Refuses: ${valueField("sec3_4")}`)
    //newLine()
    listItem(`Onset: ${valueField("sec3_5")}`)
    //newLine()
    sublistItem(`Breakfast: ${valueField("sec3_6_1")}`)
    //newLine()
    sublistItem(`Lunch: ${valueField("sec3_6_1")}`)
    //newLine()
    sublistItem(`Diner: ${valueField("sec3_6_2")}`)
    //newLine()
    sublistItem(`Snacks: ${valueField("sec3_6_3")}`)
    //newLine()
    sublistItem(`Fluids: ${valueField("sec3_6_4")}`)
    //newLine()
    listItem(`Positioning: ${valueField("sec3_7")}`)
    //newLine()
    listItem(`Meal time routine: ${valueField("sec3_8")}`)
    smallGap()
    textBold("Feeding Assessment")
    smallGap()
    text("Alertness and energy levels were appropriate for mealtime assessment.")
    smallGap()
    listItem(`Oro-motor examination: ${valueField("sec4_1")}`)
    //newLine()
    listItem(`Voice/Upper Airway: ${valueField("sec4_2")}`)
    //newLine()
    listItem(`Communication: ${valueField("sec4_3")}`)
    //newLine()
    listItem("Oral feeding observation:")
    //newLine()
    sublistItem(`Positioning: ${valueField("sec4_4_1")}`)
    //newLine()
    sublistItem(`Oral-sensory and mealtime behaviours: ${valueField("sec4_4_2")}`)
    //newLine()
    sublistItem(`Water bottle (${valueField("sec4_4_3_1")}, IDDSI ${valueField("sec4_4_3_2")}): ${valueField("sec4_4_3_3")}`)
    //newLine()
    sublistItem(`Cup (${valueField("sec4_4_4_1")}, IDDSI ${valueField("sec4_4_4_2")}): ${valueField("sec4_4_4_3")}`)
    //newLine()
    sublistItem(`Straw (${valueField("sec4_4_5_1")}, IDDSI ${valueField("sec4_4_5_2")}): ${valueField("sec4_4_5_3")}`)
    //newLine()
    sublistItem(`Spoon feeding (${valueField("sec4_4_6_1")}, IDDSI ${valueField("sec4_4_6_2")}): ${valueField("sec4_4_6_3")}`)
    //newLine()
    sublistItem(`Chewing: ${valueField("sec4_4_7")}`)
    gap()
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
    textTOM(`${valueField("sec5_5")}`)
    // ------------------
    //newLine()
    text(`Impairment: ${valueField("sec5_6")}`)
    //newLine()
    text(`Activity: ${valueField("sec5_7")}`)
    //newLine()
    text(`Participation: ${valueField("sec5_8")}`)
    //newLine()
    text(`Well-being (child): ${valueField("sec5_9")}`)
    //newLine()
    text(`Well-being (parent): ${valueField("sec5_10")}`)
    smallGap()
    text("Written and verbal recommendation:")
    if(valueField("sec5_11") != ""){
        //newLine()
        text(`- ${valueField("sec5_11")}`)
    }
    if(valueField("sec5_12") != ""){
        //newLine()
        text(`- ${valueField("sec5_12")}`)
    }
    if(valueField("sec5_13") != ""){
        //newLine()
        text(`- ${valueField("sec5_13")}`)
    }
    if(valueField("sec5_14") != ""){
        //newLine()
        text(`- ${valueField("sec5_14")}`)
    }
    gap()
    text("P/")
    smallGap()
    listItem(`Priority: ${valueField("sec6_1_1")}; dysphagia-risk - ${valueField("sec6_1_2")} ${valueField("sec6_1_3")}.`)
    if(lastIsChecked("last1")){
        //newLine()
        listItem(`SLT RV in ${valueField("sec6_2_1")} months with view to ${valueField("sec_6_2_2")}.`)
    }
    if(lastIsChecked("last2")){
        //newLine()
        listItem("DC from SLT with recommandations.")
    }
    if(lastIsChecked("last3")){
        //newLine()
        listItem("Internal referral for CDT communication.")
    }
    if(lastIsChecked("last4")){
        //newLine()
        listItem(`Letter to GP for: ${valueField("sec6_3")}.`)
    }
    if(lastIsChecked("last5")){
        //newLine()
        listItem(`Refferal for VFSS at: ${valueField("sec6_4")}.`)
    }
    if(lastIsChecked("last6")){
        //newLine()
        listItem("Referral to SSOT for supportive seating at mealtimes.")
    }
    if(lastIsChecked("last7")){
        //newLine()
        listItem(`Referral / Contact DT re: ${valueField("sec6_5")}.`)
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
const selectedValue = document.querySelector('input[name="group1"]:checked').value;

face_virtual.forEach(ch => {
    ch.addEventListener('change', () => {
        const selectedValue = document.querySelector('input[name="group1"]:checked').value;
        const faceOption = document.getElementById("faceOption")
        const virtualOption = document.getElementById("virtualOption")

        if(selectedValue == "face"){
            faceOption.style = "visibility: visible"
            virtualOption.style = "visibility: hidden; display: none;"
            // isFace = true
        }
        else{
            faceOption.style = "visibility: hidden; display: none;"
            virtualOption.style = "visibility: visible"
            // isFace = false
        }
        // console.log(selectedValue);
        // console.log(document.getElementById("faceOption").style.visibility)
    });
});

// check for last section optional sentences
const last_secs = ["last1", "last2", "last3", "last4", "last5", "last6", "last7"]

last_secs.forEach(sec => {
    var d_sec = document.getElementById(sec)

    d_sec.addEventListener('change', () => {
        if(d_sec.checked){
            document.getElementById(`last${sec[sec.length-1]}txt`).style = "text-decoration: none;"
        }
        else{
            document.getElementById(`last${sec[sec.length-1]}txt`).style = "text-decoration: line-through;"
        }
    })
})

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