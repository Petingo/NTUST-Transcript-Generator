(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["body-ch.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<img src=\"./NTUST-Emblem.png\" style=\"opacity: 0.15;position: absolute;left: 50%;top: 50%;left: 50%;margin-left: -244px; margin-top: -250px;\">\n<div class=\"container\">\n    <div class=\"row justify-content-center\">\n        <span class=\"h4\">國立臺灣科技大學歷年成績表</span></div>\n    <div class=\"row justify-content-center\">\n        <span>學號：\n            ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "studentId"), env.opts.autoescape);
output += "</span>\n        <span class=\"ml-3\">姓名：\n            ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "chName"), env.opts.autoescape);
output += "</span>\n    </div>\n    <div class=\"row justify-content-center\">\n        <span>系所：\n            ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "chMajor"), env.opts.autoescape);
output += "</span>\n        ";
if(runtime.contextOrFrameLookup(context, frame, "showMinor")) {
output += "\n            <span class=\"ml-3\">輔系：\n                ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "chMinor"), env.opts.autoescape);
output += "</span>\n        ";
;
}
output += "\n        <span class=\"ml-3\">GPA:\n            ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "gradeInfo")),"overallGPA"), env.opts.autoescape);
output += "</span>\n    </div>\n\n    <div class=\"container pt-2 text-center\" style=\"font-size: 12px\">\n        ";
var macro_t_1 = runtime.makeMacro(
["code", "en", "credits", "grade"], 
[], 
function (l_code, l_en, l_credits, l_grade, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("code", l_code);
frame.set("en", l_en);
frame.set("credits", l_credits);
frame.set("grade", l_grade);
var t_2 = "";t_2 += "\n            <tr>\n                <td style=\"width: 20%\">";
t_2 += runtime.suppressValue(l_code, env.opts.autoescape);
t_2 += "</td>\n                <td style=\"width: 56%; text-align: left;\">";
t_2 += runtime.suppressValue(l_en, env.opts.autoescape);
t_2 += "</td>\n                <td style=\"width: 12%\">";
t_2 += runtime.suppressValue(l_credits, env.opts.autoescape);
t_2 += "</td>\n                <td style=\"width: 12%\">";
t_2 += runtime.suppressValue(l_grade, env.opts.autoescape);
t_2 += "</td>\n            </tr>\n        ";
;
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("course");
context.setVariable("course", macro_t_1);
output += "\n\n        ";
var macro_t_3 = runtime.makeMacro(
["semData", "lastSemN", "lastSem"], 
[], 
function (l_semData, l_lastSemN, l_lastSem, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("semData", l_semData);
frame.set("lastSemN", l_lastSemN);
frame.set("lastSem", l_lastSem);
var t_4 = "";t_4 += "\n            <div class=\"row justify-content-center\">\n                <span class=\"mt-3 mb-2\" style=\"text-align: center;\">\n                    <strong>\n                        <u>\n                            ";
t_4 += runtime.suppressValue(runtime.memberLookup((l_semData),"semYear"), env.opts.autoescape);
t_4 += "\n                            學年度第 ";
t_4 += runtime.suppressValue(runtime.memberLookup((l_semData),"semN"), env.opts.autoescape);
t_4 += " 學期\n                        </u>\n                    </strong>\n                </span>\n            </div>\n            <div class=\"row\">\n                <table class=\"table table-borderless\">\n                    <tr>\n                        <td style=\"width: 20%\">課碼</td>\n                        <td style=\"width: 56%\">科目名稱</td>\n                        <td style=\"width: 12%\">學分</td>\n                        <td style=\"width: 12%\">成績</td>\n                    </tr>\n\n                    ";
frame = frame.push();
var t_7 = runtime.memberLookup((runtime.memberLookup((l_semData),"record")),"semCourse");
if(t_7) {t_7 = runtime.fromIterator(t_7);
var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("c", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
t_4 += "\n                        ";
if(runtime.memberLookup((t_8),"grade") == "pass") {
t_4 += "\n                            ";
var t_9;
t_9 = "通過";
frame.set("grade", t_9, true);
if(frame.topLevel) {
context.setVariable("grade", t_9);
}
if(frame.topLevel) {
context.addExport("grade", t_9);
}
t_4 += "\n                        ";
;
}
else {
if(runtime.memberLookup((t_8),"grade") == "W") {
t_4 += "\n                            ";
var t_10;
t_10 = "退選";
frame.set("grade", t_10, true);
if(frame.topLevel) {
context.setVariable("grade", t_10);
}
if(frame.topLevel) {
context.addExport("grade", t_10);
}
t_4 += "\n                        ";
;
}
else {
t_4 += "\n                            ";
var t_11;
t_11 = runtime.memberLookup((t_8),"grade");
frame.set("grade", t_11, true);
if(frame.topLevel) {
context.setVariable("grade", t_11);
}
if(frame.topLevel) {
context.addExport("grade", t_11);
}
t_4 += "\n                        ";
;
}
;
}
t_4 += "\n\n                        ";
t_4 += runtime.suppressValue((lineno = 60, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "course"), "course", context, [runtime.memberLookup((t_8),"code"),runtime.memberLookup((t_8),"ch"),runtime.memberLookup((t_8),"credits"),runtime.contextOrFrameLookup(context, frame, "grade")])), env.opts.autoescape);
t_4 += "\n                    ";
;
}
}
frame = frame.pop();
t_4 += "\n\n                    </table>\n                    <table class=\"table table-borderless\">\n                        <tr>\n                            <td style=\"width: 20%\"></td>\n                            <td style=\"width: 56%; text-align: right;\">實得學分：</td>\n                            <td style=\"width: 12%\">";
t_4 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_semData),"record")),"semCredits"), env.opts.autoescape);
t_4 += "</td>\n                            <td style=\"width: 12%\"></td>\n                        </tr>\n                        <tr>\n                            <td style=\"width: 20%\"></td>\n                            <td style=\"width: 56%; text-align: right;\">學期成績：</td>\n                            <td style=\"width: 12%\"></td>\n                            <td style=\"width: 12%\">";
t_4 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_semData),"record")),"semGPA"), env.opts.autoescape);
t_4 += "</td>\n                        </tr>\n                    </table>\n                </div>\n                ";
;
frame = callerFrame;
return new runtime.SafeString(t_4);
});
context.addExport("semester");
context.setVariable("semester", macro_t_3);
output += "\n                ";
var macro_t_12 = runtime.makeMacro(
["semData1", "semData2"], 
[], 
function (l_semData1, l_semData2, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("semData1", l_semData1);
frame.set("semData2", l_semData2);
var t_13 = "";t_13 += "\n                    <div class=\"row mt-2\">\n                        <div class=\"col-6 pr-3 pl-3\" style=\"border-width:1px;border-style:solid;border-color:#333333;\">\n                            ";
t_13 += runtime.suppressValue((lineno = 83, colno = 39, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "semester"), "semester", context, [l_semData1])), env.opts.autoescape);
t_13 += "\n                        </div>\n                        ";
if(l_semData2 != runtime.contextOrFrameLookup(context, frame, "undefined")) {
t_13 += "\n                            <div class=\"col-6 pr-3 pl-3\" style=\"border-width:1px;border-style:solid;border-color:#333333;border-left-style:none;\">\n                                ";
t_13 += runtime.suppressValue((lineno = 87, colno = 43, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "semester"), "semester", context, [l_semData2])), env.opts.autoescape);
t_13 += "\n                            </div>\n                        ";
;
}
t_13 += "\n                    </div>\n                ";
;
frame = callerFrame;
return new runtime.SafeString(t_13);
});
context.addExport("semRow");
context.setVariable("semRow", macro_t_12);
output += "\n\n                ";
var t_14;
t_14 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "gradeInfo")),"semDataList")),"length");
frame.set("semNum", t_14, true);
if(frame.topLevel) {
context.setVariable("semNum", t_14);
}
if(frame.topLevel) {
context.addExport("semNum", t_14);
}
output += "\n                ";
frame = frame.push();
var t_17 = (lineno = 94, colno = 33, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", context, [0,runtime.contextOrFrameLookup(context, frame, "semNum"),2]));
if(t_17) {t_17 = runtime.fromIterator(t_17);
var t_16 = t_17.length;
for(var t_15=0; t_15 < t_17.length; t_15++) {
var t_18 = t_17[t_15];
frame.set("i", t_18);
frame.set("loop.index", t_15 + 1);
frame.set("loop.index0", t_15);
frame.set("loop.revindex", t_16 - t_15);
frame.set("loop.revindex0", t_16 - t_15 - 1);
frame.set("loop.first", t_15 === 0);
frame.set("loop.last", t_15 === t_16 - 1);
frame.set("loop.length", t_16);
output += "\n                    ";
if(t_18 + 1 >= runtime.contextOrFrameLookup(context, frame, "semNum")) {
output += "\n                        ";
output += runtime.suppressValue((lineno = 96, colno = 33, runtime.callWrap(macro_t_12, "semRow", context, [runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "gradeInfo")),"semDataList")),t_18),runtime.contextOrFrameLookup(context, frame, "undefined")])), env.opts.autoescape);
output += "\n                    ";
;
}
else {
output += "\n                        ";
output += runtime.suppressValue((lineno = 98, colno = 33, runtime.callWrap(macro_t_12, "semRow", context, [runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "gradeInfo")),"semDataList")),t_18),runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "gradeInfo")),"semDataList")),(t_18 + 1))])), env.opts.autoescape);
output += "\n                    ";
;
}
output += "\n                ";
;
}
}
frame = frame.pop();
output += "\n\n            </div>\n        </div>\n        <style>\n            .table td,\n            .table th {\n                padding: 0;\n                background: transparent;\n            }\n        </style>\n        <style>\n            @media print {\n                @page {\n                    size: A4;\n                    margin-right: 3rem;\n                }\n            }\n        </style>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
