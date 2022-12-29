class ArticleItemView extends View {
  constructor() {
    super();
    this.init();
  }

  init = async function () {
    //creates the model to get the template and other data items
    this.model = await new ArticleItemModel().init();
    //with the template html add it to <template> tag in dom
    this.templateElement = this.createTemplateElement(
      "article-item-template",
      this.model.templateContent
    );
  };

  //Method used by Article List to render its list items
  //sends article param with article data
  render = function (article) {
    //this.templateElement is the dom element <template>
    const clonedElement = this.templateElement.content.cloneNode(true);
    const element = clonedElement.firstElementChild;
    const { title } = article;
    element.querySelector("h2").innerText = title;

    return element;
  };
}
