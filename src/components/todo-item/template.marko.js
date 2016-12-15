function create(__helpers) {
  var __widgetType = {
          name: "/todomvc$1.0.0/src/components/todo-item/index",
          def: function() {
            return require("./");
          }
        },
      __markoWidgets = require("marko-widgets"),
      __widgetAttrs = __markoWidgets.attrs,
      str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      w_widget_tag = __loadTag(require("marko-widgets/taglib/widget-tag")),
      classAttr = __helpers.ca,
      attr = __helpers.a,
      attrs = __helpers.as,
      escapeXmlAttr = __helpers.xa;

  return function render(data, out) {
    w_widget_tag({
        type: __widgetType,
        _cfg: data.widgetConfig,
        _state: data.widgetState,
        _props: data.widgetProps,
        _body: data.widgetBody,
        renderBody: function renderBody(out, widget) {
          out.w("<div" +
            classAttr(data.completed ? "completed" : "") +
            attr("id", widget.id) +
            attrs(__widgetAttrs(widget)) +
            "><input type=\"checkbox\"" +
            attr("checked", data.completed) +
            " data-w-onchange=\"handleTodoItemClick|" +
            escapeXmlAttr(widget.id) +
            "\"><label>" +
            escapeXml(data.title) +
            "</label> </div>");
        }
      }, out);
  };
}

(module.exports = require("marko").c(__filename)).c(create);
