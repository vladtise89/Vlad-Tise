function ArticleModalModel() {
  Model.call(this);
  this.templateUrl =
    "./sources/articles/ArticleModal/ArticleModal.template.html";

  return this;
}

ArticleModalModel.prototype = Object.create(Model.prototype);
