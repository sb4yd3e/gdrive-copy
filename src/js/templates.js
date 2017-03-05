module.exports = (function() {
    var Hogan = require('hogan.js');
    var templates = {};
    templates['header-icon'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<svg xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:osb=\"http://www.openswatchbook.org/uri/2009/osb\" height=\"36\" width=\"36\" version=\"1.1\" xmlns:cc=\"http://creativecommons.org/ns#\" viewBox=\"0 0 36 36.000001\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\"><g><path d=\"m5.7599 1.1996-2.1822 1.8964h-3.0438v25.218h6.7741v-18.937h3.0418l2.1822-1.8943h8.0122l1.9588 1.8943h5.9467v-6.2809h-12.719l-1.9588-1.8964h-8.0122z\" fill-rule=\"evenodd\" stroke=\"#000\" stroke-width=\".25\"/></g><g><path style=\"color-rendering:auto;text-decoration-color:#000000;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;block-progression:tb;text-decoration-line:none;text-decoration-style:solid;image-rendering:auto;white-space:normal;text-indent:0;text-transform:none\" d=\"m12.093 7.0608-2.168 1.8828h-3.0234v11.053h-3.1009v1h3.1009v13.008h27.74v-25.061h-12.639l-1.9473-1.8828z\" fill-rule=\"evenodd\" stroke=\"#000\" stroke-width=\".5\" fill=\"#fff\"/></g><g stroke-linejoin=\"bevel\" stroke=\"#000\" stroke-width=\".5\" fill=\"none\"><path d=\"m19.933 25.519 8.0838-5.023-8.0732-4.8707\"/><path d=\"m27.994 20.496h-20.844\"/></g></svg>");return t.fl(); },partials: {}, subs: {  }});
    templates['question'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<!--from http://iconmonstr.com/help-3/-->");t.b("\n" + i);t.b("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1.25 17c0 .69-.559 1.25-1.25 1.25-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25zm1.393-9.998c-.608-.616-1.515-.955-2.551-.955-2.18 0-3.59 1.55-3.59 3.95h2.011c0-1.486.829-2.013 1.538-2.013.634 0 1.307.421 1.364 1.226.062.847-.39 1.277-.962 1.821-1.412 1.343-1.438 1.993-1.432 3.468h2.005c-.013-.664.03-1.203.935-2.178.677-.73 1.519-1.638 1.536-3.022.011-.924-.284-1.719-.854-2.297z\"/></svg>");return t.fl(); },partials: {}, subs: {  }});
    return templates;
})();