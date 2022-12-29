function ArticleListModel() {
  Model.call(this);
  this.templateUrl = "./sources/articles/ArticleList/ArticleList.template.html";
  this.articleList = [
    {
      id: 1,
      title: "Article title #1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id elit viverra enim euismod ornare. Pellentesque fermentum porttitor aliquam. In vestibulum ultricies urna, non egestas ipsum imperdiet ut. Sed consequat gravida sem quis imperdiet. Curabitur blandit finibus turpis nec mattis. Suspendisse in purus sed dolor sagittis porttitor id in dui. Quisque vulputate lorem sit amet libero dapibus gravida. Nulla fringilla lorem libero, sed suscipit velit blandit aliquam.",
    },
    {
      id: 2,
      title: "Article title #2",
      description:
        "Maecenas maximus, augue ut placerat cursus, elit velit consectetur massa, sed iaculis quam nunc non nibh. Curabitur maximus fringilla neque sit amet varius. Morbi ut arcu lacus. Aliquam est arcu, rutrum non pulvinar non, elementum non tellus. Aenean nunc ex, finibus quis dictum in, mattis aliquam erat. Maecenas blandit metus ex, eget tincidunt est lobortis sed. Aliquam lobortis turpis sit amet aliquam imperdiet.",
    },
    {
      id: 3,
      title: "Article title #3",
      description:
        "Etiam eget varius lorem. In quis pellentesque sapien. Fusce rhoncus tortor eu justo ultricies commodo. Suspendisse porttitor sapien scelerisque, rhoncus justo sed, viverra nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam vitae sodales ipsum. Mauris vitae tortor eu eros fermentum posuere vitae commodo justo.",
    },
  ];

  this.createNewArticle = (obj) => {
    // we update the article array using spread operator
    this.articleList.push(obj);
    console.log(this.articleList);
  };

  return this;
}

ArticleListModel.prototype = Object.create(Model.prototype);

