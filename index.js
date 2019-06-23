'use strict';
Object.defineProperty(exports, "__esModule", {value: true});

exports.default = function(babel, options) {
  const { types: t } = babel;
  const htmlEnv = options.HTML_ENV;
  const functionEnv = options.FUNCTION_ENV;
    return {
      name: "ast-transform", // not required
      visitor: {
        Program(programPath) {
          programPath.traverse({
            ClassMethod(path) {
              if (path.node.key.name.endsWith(functionEnv)) {
                path.remove();
              }
            },
            JSXElement(path) {
              path.node.openingElement.attributes.forEach(ele => {
                if (ele.name.name === htmlEnv)
                  path.remove();
              });
            }
          });
        }
      }
    };
}
