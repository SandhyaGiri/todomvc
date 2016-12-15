function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __browser_json = require.resolve("./browser.json"),
      __loadTag = __helpers.t,
      lasso_page_tag = __loadTag(require("lasso/taglib/page-tag")),
      lasso_head_tag = __loadTag(require("lasso/taglib/head-tag")),
      todo_list_tag = __loadTag(require("../../components/todo-list")),
      lasso_body_tag = __loadTag(require("lasso/taglib/body-tag")),
      init_widgets_tag = __loadTag(require("marko-widgets/taglib/init-widgets-tag"));

  return function render(data, out) {
    lasso_page_tag({
        name: "home",
        packagePath: __browser_json,
        dirname: __dirname,
        filename: __filename
      }, out);

    out.w("<!DOCTYPE html><html><head><title>TODO App using marko widgets</title>");

    lasso_head_tag({}, out);

    out.w("</head><body><section id=\"todoapp\"><h1>TODO Application</h1>");

    todo_list_tag({}, out);

    out.w("</section>");

    lasso_body_tag({}, out);

    init_widgets_tag({}, out);

    out.w("<browser-refresh></browser-refresh></body></html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
