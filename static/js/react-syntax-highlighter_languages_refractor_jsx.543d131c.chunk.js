"use strict";(self.webpackChunkreducks_redux_queue=self.webpackChunkreducks_redux_queue||[]).push([[4657],{765:function(e){function t(e){!function(e){var t=e.util.clone(e.languages.javascript),n=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,s=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function g(e,t){return e=e.replace(/<S>/g,(function(){return n})).replace(/<BRACES>/g,(function(){return a})).replace(/<SPREAD>/g,(function(){return s})),RegExp(e,t)}s=g(s).source,e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=g(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:g(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:g(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var o=function e(t){return t?"string"===typeof t?t:"string"===typeof t.content?t.content:t.content.map(e).join(""):""},c=function t(n){for(var a=[],s=0;s<n.length;s++){var g=n[s],c=!1;if("string"!==typeof g&&("tag"===g.type&&g.content[0]&&"tag"===g.content[0].type?"</"===g.content[0].content[0].content?a.length>0&&a[a.length-1].tagName===o(g.content[0].content[1])&&a.pop():"/>"===g.content[g.content.length-1].content||a.push({tagName:o(g.content[0].content[1]),openedBraces:0}):a.length>0&&"punctuation"===g.type&&"{"===g.content?a[a.length-1].openedBraces++:a.length>0&&a[a.length-1].openedBraces>0&&"punctuation"===g.type&&"}"===g.content?a[a.length-1].openedBraces--:c=!0),(c||"string"===typeof g)&&a.length>0&&0===a[a.length-1].openedBraces){var r=o(g);s<n.length-1&&("string"===typeof n[s+1]||"plain-text"===n[s+1].type)&&(r+=o(n[s+1]),n.splice(s+1,1)),s>0&&("string"===typeof n[s-1]||"plain-text"===n[s-1].type)&&(r=o(n[s-1])+r,n.splice(s-1,1),s--),n[s]=new e.Token("plain-text",r,null,r)}g.content&&"string"!==typeof g.content&&t(g.content)}};e.hooks.add("after-tokenize",(function(e){"jsx"!==e.language&&"tsx"!==e.language||c(e.tokens)}))}(e)}e.exports=t,t.displayName="jsx",t.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_jsx.543d131c.chunk.js.map