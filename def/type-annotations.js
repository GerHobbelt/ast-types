"use strict";
/**
 * Type annotation defs shared between Flow and TypeScript.
 * These defs could not be defined in ./flow.ts or ./typescript.ts directly
 * because they use the same name.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __importDefault(require("../lib/types"));
var shared_1 = __importDefault(require("../lib/shared"));
function default_1(fork) {
    var types = fork.use(types_1.default);
    var def = types.Type.def;
    var or = types.Type.or;
    var defaults = fork.use(shared_1.default).defaults;
    var TypeAnnotation = or(def("TypeAnnotation"), def("TSTypeAnnotation"), null);
    var TypeParamDecl = or(def("TypeParameterDeclaration"), def("TSTypeParameterDeclaration"), null);
    def("Identifier")
        .field("typeAnnotation", TypeAnnotation, defaults["null"]);
    def("ObjectPattern")
        .field("typeAnnotation", TypeAnnotation, defaults["null"]);
    def("Function")
        .field("returnType", TypeAnnotation, defaults["null"])
        .field("typeParameters", TypeParamDecl, defaults["null"]);
    def("ClassProperty")
        .build("key", "value", "typeAnnotation", "static")
        .field("value", or(def("Expression"), null))
        .field("static", Boolean, defaults["false"])
        .field("typeAnnotation", TypeAnnotation, defaults["null"]);
    ["ClassDeclaration",
        "ClassExpression",
    ].forEach(function (typeName) {
        def(typeName)
            .field("typeParameters", TypeParamDecl, defaults["null"])
            .field("superTypeParameters", or(def("TypeParameterInstantiation"), def("TSTypeParameterInstantiation"), null), defaults["null"])
            .field("implements", or([def("ClassImplements")], [def("TSExpressionWithTypeArguments")]), defaults.emptyArray);
    });
}
exports.default = default_1;
;
