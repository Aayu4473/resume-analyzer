async function extractTextFromPDF(file){

const pdf = await pdfjsLib.getDocument(URL.createObjectURL(file)).promise

let text = ""

for(let i=1;i<=pdf.numPages;i++){

let page = await pdf.getPage(i)

let content = await page.getTextContent()

let strings = content.items.map(item => item.str)

text += strings.join(" ")

}

return text

}

async function analyzeResume(){

const fileInput = document.getElementById("resumeUpload")

if(fileInput.files.length === 0){
alert("Upload a resume PDF")
return
}

const file = fileInput.files[0]

document.getElementById("result").innerHTML="Reading resume..."

const resumeText = await extractTextFromPDF(file)

document.getElementById("result").innerHTML="Analyzing resume with AI..."

const response = await fetch("https://openrouter.ai/api/v1/chat/completions",{

method:"POST",

headers:{
"Authorization":"Bearer YOUR_API_KEY",
"Content-Type":"application/json"
},

body:JSON.stringify({
model:"openai/gpt-3.5-turbo",
messages:[
{
role:"user",
content:"Analyze this resume and suggest improvements:\n\n" + resumeText.substring(0,1500)
}
]
})

})

const data = await response.json()

document.getElementById("result").innerHTML =
"<h3>AI Suggestions:</h3>" + data.choices[0].message.content

}