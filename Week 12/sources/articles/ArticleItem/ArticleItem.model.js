function ArticleItemModel() {
  Model.call(this);
  this.templateUrl = "./sources/articles/ArticleItem/ArticleItem.template.html";

  return this;
}

ArticleItemModel.prototype = Object.create(Model.prototype);
