var Handlebars = require('handlebars');

module.exports = {
    lang: "cpp",
    ext: "cpp",
    rules: {
        "int": {
            repr: "int",
            parser: "parseInt",
            encoder: "defaultEncoder"
        }
    },
    templates: {
        "solution": Handlebars.compile(`class Solution {
public:
    /*
     {{#params}}
     * param {{name}}: {{desc}}
     {{/params}}
     * return: {{retdesc}}
     */
    {{rettype}} {{method}}({{#params}}{{repr}} {{name}}{{#unless @last}}, {{/unless}}{{/params}}) {
        // {{hint}}
    }
};
`),
        "main": Handlebars.compile(`int main() {
    string data;
    std::getline(std::cin, data);
    //load the data -> data[]
    {{#params}}
    {{repr}} {{name}} = {{parser}}(data[{{@index}}]);
    {{/params}}
    Solution solution;
    std::cout << solution.{{method}}({{#params}}{{name}}{{#unless @last}}, {{/unless}}{{/params}}) << std::endl;
    return 0;
}`)
    }
}