function create(__helpers) {
  var __widgetType = {
          name: "/todomvc$1.0.0/src/components/todo-list/index",
          def: function() {
            return require("./");
          }
        },
      __markoWidgets = require("marko-widgets"),
      __widgetAttrs = __markoWidgets.attrs,
      __widgetArgs = require("marko-widgets/taglib/helpers/widgetArgs"),
      _cleanupWidgetArgs = __widgetArgs.cleanup,
      str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      w_widget_tag = __loadTag(require("marko-widgets/taglib/widget-tag")),
      attr = __helpers.a,
      attrs = __helpers.as,
      escapeXmlAttr = __helpers.xa,
      forEachWithStatusVar = __helpers.fv,
      todo_item_tag = __loadTag(require("../todo-item"));

  return function render(data, out) {
    w_widget_tag({
        type: __widgetType,
        _cfg: data.widgetConfig,
        _state: data.widgetState,
        _props: data.widgetProps,
        _body: data.widgetBody,
        renderBody: function renderBody(out, widget) {
          out.w("<div" +
            attr("id", widget.id) +
            attrs(__widgetAttrs(widget)) +
            "><input type=\"text\" placeholder=\"Enter a todo\" data-w-onkeydown=\"handleKeyPress|" +
            escapeXmlAttr(widget.id) +
            "\"><ul id=\"todo-list\">");

          forEachWithStatusVar(data.todoItems, function(todoItem, loop) {
            out.w("<li>");

            __widgetArgs(out, widget.id, "todoItems[]", [
              "activate",
              "activateTodo",
              "complete",
              "completeTodo"
            ]);
            todo_item_tag({
                title: todoItem.title,
                completed: todoItem.completed,
                index: loop.getIndex()
              }, out);
            _cleanupWidgetArgs(out);

            out.w("</li>");
          });

          out.w("</ul><label>Number of tasks left: " +
            escapeXml(data.todoItems.length - data.completed) +
            "</label></div>");
        }
      }, out);
  };
}

(module.exports = require("marko").c(__filename)).c(create);
