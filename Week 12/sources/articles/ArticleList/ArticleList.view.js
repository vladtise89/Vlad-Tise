class ArticleListView extends View {
  constructor(ArticleItem) {
    super();
    this.blogListContainer = document.querySelector("#blog-list-container");
    this.model = null;
    this.init();
    //ArticleItem instance is saved in this class object
    this.ArticleItem = ArticleItem;
  }

  something;

  init = async function () {
    //creates the model to get the template and other data items
    this.model = await new ArticleListModel().init();
    //with the template html add it to <template> tag in dom
    this.something = this.createTemplateElement(
      "article-list-template",
      this.model.templateContent
    );
    //adds the template into dom
    this.createListElements(this.something);
  };

  rerender = function () {
    //recreate list of elements
    this.createListElements(this.something);
  };

  renderNewArticle() {
    //render only the new article elements
    //const articleItemElement = this.ArticleItem.render(article);
  }

  createListElements = function (templateElement) {
    const { articleList } = this.model;
    const listElement =
      templateElement.content.cloneNode(true).firstElementChild;

    articleList.forEach((article) => {
      //for each article in the array
      //use instance of the articleItem to render the list item
      const articleItemElement = this.ArticleItem.render(article);
      //add to the dom list the generated dom list item element
      listElement.appendChild(articleItemElement);
    });

    //add to dom the list with all list items in the dom
    this.blogListContainer.innerHTML = "";
    this.blogListContainer.appendChild(listElement);
  };
}

