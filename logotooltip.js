document.addEventListener("DOMContentLoaded", function (event) {
    let logoToolTip = new LogoToolTip();
    logoToolTip.createLogo();
});
class LogoToolTip {
    textTooltip = "'Powered by wiringbits'";
    hrefLogo = `https://wiringbits.net/?utm_medium=referrer&utm_source=${window.location.hostname}`;
    svgLogo = "M0,10.5982,10.5982,0l2.9874,2.9874L2.9874,13.5856Zm44.6556,2.9874,2.9873-2.9874L37.0447,0,34.0573,2.9874ZM16.21,26.8091l7.6108-7.6108,7.6108,7.6108L42.03,16.2109,31.432,5.6127l-7.6108,7.61L16.21,5.6127,5.6122,16.2109Zm0-15.2217,4.6234,4.6235L16.21,20.8338l-4.623-4.6229Zm15.2216,0,4.6235,4.6235L31.432,20.8338l-4.6234-4.6229Z";
    svgLogoColor = "#39f";

    bakgroundTooltip = "#73d8ff";
    colorTextTooltip = "#000000";
    mainContainer = `wiringbitsLogo`;
    fixed = "wiringbitsFixed";
    floatLogo = "wiringbitsFloatLogo";
    highLight ="wiringbitsHighlight";
    link = "wiringbitsLogoLink";
    backgroundStyle = "background-image: linear-gradient(to bottom right, #60d3ff, #ffffff);";
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
            `.${this.floatLogo} {  background-color: #fff;  border-radius: 34px;  border: 3px solid #3f3f3f;  ${this.backgroundStyle}  padding: 2px;}
            .${this.floatLogo} svg {  width: ${this.width};  height: ${this.height}; }`;
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
        const svg =  document.createElementNS("http://www.w3.org/2000/svg", "svg");
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        link.setAttribute("href", this.hrefLogo);
        link.setAttribute("target", "_Blank");
        
        svg.setAttribute("viewBox", "0 0 47.6429 26.8091");
        svg.setAttribute("data-name", "Layer 1");
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg.setAttribute("id", "Layer_1");
        path.setAttribute("d", this.svgLogo);
        path.setAttribute("style", `fill: ${this.svgLogoColor}`);
        path.setAttribute("id","logoMark");

        

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
        svg.appendChild(path);
        link.appendChild(svg);
        document.body.appendChild(container);
        
    }
}

