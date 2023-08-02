class SkillBox {
    constructor() {
        this.images = [];
        this.text = [];
        this.tools = [];
        this.setbackgroundColor;
        this.title;
    }
    AddImage(url) {
        this.images.push(url)
    }
    AddText(url) {
        this.text.push(url)
    }
    AddTools(url) {
        this.tools.push(url)
    }
    SetBackgroundColor(color){
        this.setbackgroundColor = color
    }
    SetTitle(title){
        this.title = title
    }
}

let frontEnd = new SkillBox()
frontEnd.AddImage("https://media.tproger.ru/uploads/2020/12/react-roadmap-2021-cover-icon-original.png")
frontEnd.AddImage("https://a.storyblok.com/f/192301/300x300/bc5aa4cc8c/remix-logo-light.webp")
frontEnd.AddImage("https://coreui.io/images/blog/next-js.webp")
frontEnd.AddImage("https://cdn.worldvectorlogo.com/logos/javascript-1.svg")
frontEnd.AddImage("https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/220px-HTML5_logo_and_wordmark.svg.png")
frontEnd.AddImage("https://cdn-icons-png.flaticon.com/512/732/732190.png")
frontEnd.AddImage("https://cdn-icons-png.flaticon.com/512/5968/5968358.png")

frontEnd.AddText("Responsive Design")
frontEnd.AddText("Cross - Browser Compatibility")
frontEnd.AddText("Testing and Debugging")

frontEnd.SetBackgroundColor("#D12272")
frontEnd.SetTitle("Front-End")

let BackEnd = new SkillBox()
BackEnd.AddImage("https://icon-library.com/images/java-icon-images/java-icon-images-6.jpg")
BackEnd.AddImage("https://cdn-icons-png.flaticon.com/512/4248/4248443.png")
BackEnd.AddImage("https://cdn-icons-png.flaticon.com/512/2164/2164832.png")
BackEnd.AddImage("https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png")


BackEnd.AddText("Responsive Design")
BackEnd.AddText("Cross - Browser Compatibility")
BackEnd.AddText("Testing and Debugging")

BackEnd.AddTools("https://cdn.cookielaw.org/logos/70564414-548a-4286-8ad7-04d95b172a08/e26443c0-68d1-47c8-b8fc-9bc765da2e95/3a159462-db70-43cf-a27d-f602a6baed44/pm-logo-horiz.png")
BackEnd.SetBackgroundColor("red")

BackEnd.SetTitle("Back-End")

let Combinedskills = new SkillBox()
Combinedskills.AddImage("https://devopedia.org/images/article/377/9576.1642018528.png")
Combinedskills.AddImage("https://repository-images.githubusercontent.com/657248114/d3c7b91a-b285-4d1e-8429-5de1acc5f61e")
Combinedskills.AddImage("https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png")
Combinedskills.AddImage("https://icon-library.com/images/python-code-icon/python-code-icon-6.jpg")


Combinedskills.AddText("Responsive Design")
Combinedskills.AddText("Cross - Browser Compatibility")
Combinedskills.AddText("Testing and Debugging")

Combinedskills.SetBackgroundColor("#2B006F")

Combinedskills.SetTitle("Combined skills")
let data = [
    frontEnd,
    BackEnd,
    Combinedskills
]
export default data