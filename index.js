'use strict';
Object.defineProperty(exports, "__esModule", {value: true});

exports.default = function(babel, options) {
  const { types: t } = babel;
  const jsxEnv = options.JSX_ENV;
  const classMethodEnv = options.CLASS_METHOD_ENV;
    return {
      name: "ast-transform", // not required
      visitor: {
        Program(programPath) {
          programPath.traverse({
            ClassMethod(path) {
              if (path.node.key.name.endsWith(classMethodEnv)) {
                path.remove();
              }
            },
            JSXElement(path) {
              path.node.openingElement.attributes.forEach(ele => {
                if (ele.name.name === jsxEnv)
                  path.remove();
              });
            }
          });
        }
      }
    };
}
