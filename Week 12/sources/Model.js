function Model() {
  this.templateContent = "";
  this.templateUrl = "";
}

Model.prototype.loadHtml = async function () {
  let response;
  try {
    response = await fetch(this.templateUrl).then((response) =>
      response.text()
    );
    this.templateContent = response;
  } catch (e) {
    this.templateContent = "";
    console.log(e);
  }
};

Model.prototype.init = async function () {
  await this.loadHtml();

  return this;
};
