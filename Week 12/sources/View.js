class View {
  constructor() {
    this.body = document.querySelector("body");
  }

  createTemplateElement = function (elementId, htmlContent) {
    const templateElement = document.querySelector(`#${elementId}`);
    if (templateElement) {
      return templateElement;
    }

    const templateEl = document.createElement("template");
    templateEl.setAttribute("id", elementId);
    templateEl.innerHTML = htmlContent;

    this.body.appendChild(templateEl);

    return templateEl;
  };
}
