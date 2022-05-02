document.addEventListener("DOMContentLoaded", function (event) {
    let logoToolTip = new LogoToolTip();
    logoToolTip.createLogo();
});
class LogoToolTip {
    textTooltip = "'Powered by wiringbits'";
    hrefLogo = `https://wiringbits.net/?utm_medium=referrer&utm_source=${window.location.hostname}`;
    srcImage = "https://raw.githubusercontent.com/paulquintero/logo/75b9d2ccb0c2d743504448224c68cc126f2acb1b/logo.png";

    bakgroundTooltip = "#73d8ff";
    colorTextTooltip = "#000000";
    mainContainer = `wiringbitsLogo`;
    fixed = "wiringbitsFixed";
    floatLogo = "wiringbitsFloatLogo";
    highLight ="wiringbitsHighlight";
    link = "wiringbitsLogoLink";
    backGroundStyle = "background-image: linear-gradient(to bottom right, #60d3ff, #ffffff);";
    alignLogoBottom = "5px";
    alignLogoRight = "5px";
    width = "50px;";
    height = "50px";
    borderRadius = "8px";
    constructor() {

    }
    
    styleMainContainer() {
        var style = document.createElement("style");
        style.innerHTML = `.${this.mainContainer} {width: ${this.width};  height: ${this.height};}
            .${this.mainContainer}:hover {  width: auto;  height: auto;}
            .${this.mainContainer}::before {  visibility: hidden;}
            :hover.${this.mainContainer}::before {  content: ${this.textTooltip};  margin-right: 70px;  margin-bottom: 11px;  background: ${this.bakgroundTooltip};  border-radius: ${this.borderRadius};  padding: 5px;  color: ${this.colorTextTooltip};  font-weight: 700;  border: 2px solid #3f3f3f;  visibility: visible;  display: block;  box-shadow:  0px 0px 7px 2px #2e9efd;}
            `;
        document.getElementsByTagName('head')[0].appendChild(style);
        return style;
    }
    styleFixed() {
        let style = document.createElement("style");
        style.innerHTML = `.${this.fixed} {  bottom: ${this.alignLogoBottom};  right: ${this.alignLogoRight};  position: fixed;  z-index: 100;} `;
        document.getElementsByTagName('head')[0].appendChild(style);
        return style;
    }
    styleFloatLogo() {
        let style = document.createElement("style");
        style.innerHTML =
            `.${this.floatLogo} {  background-color: #fff;  border-radius: 34px;  border: 3px solid #3f3f3f;  ${this.backGroundStyle}  padding: 2px;}
            .${this.floatLogo} img {  width: ${this.width};  height: ${this.height};  object-fit: contain;}`;
        document.getElementsByTagName('head')[0].appendChild(style);
        return style;
    }
    styleHighlight() {
        let style = document.createElement("style");
        style.innerHTML = `.${this.highLight} { box-shadow:  0px 0px 7px 2px #2e9efd;}`;
        document.getElementsByTagName('head')[0].appendChild(style);
        return style;
    }

    styleLink() {
        let style = document.createElement("style");
        style.innerHTML = `.${this.link} {  text-decoration: none;  font-size: 18px;  color: #fff; display:flex;}`;
        document.getElementsByTagName('head')[0].appendChild(style);
        return style;
    }

    createLogo() {
        const container = document.createElement("div");
        const logo = document.createElement("div");
        const link = document.createElement("a");
        const img = document.createElement("img");

        link.setAttribute("href", this.hrefLogo);
        link.setAttribute("target", "_Blank");
        img.setAttribute("src", this.srcImage);

        this.styleMainContainer();
        this.styleFixed();
        this.styleFloatLogo();
        this.styleHighlight();
        this.styleLink();

        container.classList.add(this.mainContainer, this.fixed);
        logo.classList.add(this.floatLogo, this.highLight, this.fixed);
        link.className = this.link;
        container.appendChild(logo);
        logo.appendChild(link);
        link.appendChild(img);
        document.body.appendChild(container);
    }
}

