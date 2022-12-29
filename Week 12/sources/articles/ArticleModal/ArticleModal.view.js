class ArticleModalView extends View {
  model = null;

  static articleModalEl = "article-modal";

  constructor(BaseModal) {
    super();

    this.modal = BaseModal;
    this.htmlEl = document.querySelector("html");
    this.modalsContainer = document.querySelector("#modals-container");
    this.articleModalContainer = document.querySelector(
      `#${ArticleModalView.articleModalEl}`
    );

    return this.init();
  }

  init = async function () {
    this.model = await new ArticleModalModel().init();
    const templateElement = this.createTemplateElement(
      "article-modal-template",
      this.model.templateContent
    );

    this.renderModal(templateElement);

    return this;
  };

  renderModal(templateElement) {
    if (!this.articleModalContainer) {
      const modalTemplateElement =
        templateElement.content.cloneNode(true).firstElementChild;
      modalTemplateElement.setAttribute("id", ArticleModalView.articleModalEl);
      this.modalsContainer.appendChild(modalTemplateElement);
      this.articleModalContainer = modalTemplateElement;
    }

    this.modal.init(
      document.querySelector(`#${ArticleModalView.articleModalEl}`)
    );
  }
}
