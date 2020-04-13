(function() {
    (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["body-en.njk"] = (function() {
        function root(env, context, frame, runtime, cb) {
            var lineno = 0;
            var colno = 0;
            var output = "";
            try {
                var parentTemplate = null;
                output += "<img src=\"https://upload.wikimedia.org/wikipedia/commons/6/66/NTUST-Emblem.png\" style=\"opacity: 0.15;position: absolute;left: 50%;top: 50%;left: 50%;margin-left: -244px; margin-top: -250px;\">\n<div class=\"container\">\n    <div class=\"row justify-content-center\">\n        <span class=\"h4\">NATIONAL TAIWAN UNIVERSITY OF SCIENCE AND TECHNOLOGY</span><span class=\"h4\">TRANSCRIPT OF ACADEMIC RECORD</span></div>\n    <div class=\"row justify-content-center\">\n        <span>Reg. No.\n            ";
                output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "studentId"), env.opts.autoescape);
                output += "</span>\n        <span class=\"ml-3\">Name:\n            ";
                output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "enName"), env.opts.autoescape);
                output += "</span>\n    </div>\n    <div class=\"row justify-content-center\">\n        <span>Major:\n            ";
                output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "enMajor"), env.opts.autoescape);
                output += "</span>\n        ";
                if (runtime.contextOrFrameLookup(context, frame, "showMinor")) {
                    output += "\n            <span class=\"ml-3\">Minor:\n                ";
                    output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "enMinor"), env.opts.autoescape);
                    output += "</span>\n        ";;
                }
                output += "\n        <span class=\"ml-3\">Overall GPA:\n            ";
                output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "gradeInfo")), "overallGPA"), env.opts.autoescape);
                output += "</span>\n    </div>\n\n    <div class=\"container pt-2 text-center\" style=\"font-size: 12px\">\n        ";
                var macro_t_1 = runtime.makeMacro(
                    ["code", "en", "credits", "grade"], [],
                    function(l_code, l_en, l_credits, l_grade, kwargs) {
                        var callerFrame = frame;
                        frame = new runtime.Frame();
                        kwargs = kwargs || {};
                        if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
                            frame.set("caller", kwargs.caller);
                        }
                        frame.set("code", l_code);
                        frame.set("en", l_en);
                        frame.set("credits", l_credits);
                        frame.set("grade", l_grade);
                        var t_2 = "";
                        t_2 += "\n            <tr>\n                <td style=\"width: 20%\">";
                        t_2 += runtime.suppressValue(l_code, env.opts.autoescape);
                        t_2 += "</td>\n                <td style=\"width: 56%; text-align: left;\">";
                        t_2 += runtime.suppressValue(l_en, env.opts.autoescape);
                        t_2 += "</td>\n                <td style=\"width: 12%\">";
                        t_2 += runtime.suppressValue(l_credits, env.opts.autoescape);
                        t_2 += "</td>\n                <td style=\"width: 12%\">";
                        t_2 += runtime.suppressValue(l_grade, env.opts.autoescape);
                        t_2 += "</td>\n            </tr>\n        ";;
                        frame = callerFrame;
                        return new runtime.SafeString(t_2);
                    });
                context.addExport("course");
                context.setVariable("course", macro_t_1);
                output += "\n\n        ";
                var macro_t_3 = runtime.makeMacro(
                    ["semData", "lastSemN", "lastSem"], [],
                    function(l_semData, l_lastSemN, l_lastSem, kwargs) {
                        var callerFrame = frame;
                        frame = new runtime.Frame();
                        kwargs = kwargs || {};
                        if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
                            frame.set("caller", kwargs.caller);
                        }
                        frame.set("semData", l_semData);
                        frame.set("lastSemN", l_lastSemN);
                        frame.set("lastSem", l_lastSem);
                        var t_4 = "";
                        t_4 += "\n            <div class=\"row justify-content-center\">\n                <span class=\"mt-3 mb-2\" style=\"text-align: center;\">\n                    <strong>\n                        <u>\n                            ";
                        var t_5;
                        t_5 = runtime.memberLookup((l_semData), "semYear") + 1911;
                        frame.set("semYear", t_5, true);
                        if (frame.topLevel) {
                            context.setVariable("semYear", t_5);
                        }
                        if (frame.topLevel) {
                            context.addExport("semYear", t_5);
                        }
                        t_4 += "\n                            ";
                        if (runtime.memberLookup((l_semData), "semN") == "1" || runtime.memberLookup((l_semData), "semN") == 1) {
                            t_4 += "\n                                1st Semester\n                                ";
                            t_4 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "semYear"), env.opts.autoescape);
                            t_4 += "/";
                            t_4 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "semYear") + 1, env.opts.autoescape);
                            t_4 += "(Fall\n                                ";
                            t_4 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "semYear"), env.opts.autoescape);
                            t_4 += ")\n                            ";;
                        } else {
                            t_4 += "\n                                2nd Semester\n                                ";
                            t_4 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "semYear"), env.opts.autoescape);
                            t_4 += "/";
                            t_4 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "semYear") + 1, env.opts.autoescape);
                            t_4 += "(Spring\n                                ";
                            t_4 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "semYear"), env.opts.autoescape);
                            t_4 += ")\n                            ";;
                        }
                        t_4 += "\n                        </u>\n                    </strong>\n                </span>\n            </div>\n            <div class=\"row\">\n                <table class=\"table table-borderless\">\n                    <tr>\n                        <td style=\"width: 20%\">Course No</td>\n                        <td style=\"width: 56%\">Course Title</td>\n                        <td style=\"width: 12%\">Credits</td>\n                        <td style=\"width: 12%\">Grade</td>\n                    </tr>\n\n                    ";
                        frame = frame.push();
                        var t_8 = runtime.memberLookup((runtime.memberLookup((l_semData), "record")), "semCourse");
                        if (t_8) {
                            t_8 = runtime.fromIterator(t_8);
                            var t_7 = t_8.length;
                            for (var t_6 = 0; t_6 < t_8.length; t_6++) {
                                var t_9 = t_8[t_6];
                                frame.set("c", t_9);
                                frame.set("loop.index", t_6 + 1);
                                frame.set("loop.index0", t_6);
                                frame.set("loop.revindex", t_7 - t_6);
                                frame.set("loop.revindex0", t_7 - t_6 - 1);
                                frame.set("loop.first", t_6 === 0);
                                frame.set("loop.last", t_6 === t_7 - 1);
                                frame.set("loop.length", t_7);
                                t_4 += "\n                        ";
                                t_4 += runtime.suppressValue((lineno = 60, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "course"), "course", context, [runtime.memberLookup((t_9), "code"), runtime.memberLookup((t_9), "en"), runtime.memberLookup((t_9), "credits"), runtime.memberLookup((t_9), "grade")])), env.opts.autoescape);
                                t_4 += "\n                    ";;
                            }
                        }
                        frame = frame.pop();
                        t_4 += "\n                </table>\n                <table class=\"table table-borderless\">\n                    <tr>\n                        <td style=\"width: 20%\"></td>\n                        <td style=\"width: 56%; text-align: right;\">Total Credits Earned:</td>\n                        <td style=\"width: 12%\">";
                        t_4 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_semData), "record")), "semCredits"), env.opts.autoescape);
                        t_4 += "</td>\n                        <td style=\"width: 12%\"></td>\n                    </tr>\n                    <tr>\n                        <td style=\"width: 20%\"></td>\n                        <td style=\"width: 56%; text-align: right;\">Grade Point Average:</td>\n                        <td style=\"width: 12%\"></td>\n                        <td style=\"width: 12%\">";
                        t_4 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_semData), "record")), "semGPA"), env.opts.autoescape);
                        t_4 += "</td>\n                    </tr>\n                </table>\n            </div>\n            ";;
                        frame = callerFrame;
                        return new runtime.SafeString(t_4);
                    });
                context.addExport("semester");
                context.setVariable("semester", macro_t_3);
                output += "\n            ";
                var macro_t_10 = runtime.makeMacro(
                    ["semData1", "semData2"], [],
                    function(l_semData1, l_semData2, kwargs) {
                        var callerFrame = frame;
                        frame = new runtime.Frame();
                        kwargs = kwargs || {};
                        if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
                            frame.set("caller", kwargs.caller);
                        }
                        frame.set("semData1", l_semData1);
                        frame.set("semData2", l_semData2);
                        var t_11 = "";
                        t_11 += "\n                <div class=\"row mt-2\">\n                    <div class=\"col-6 pr-3 pl-3\" style=\"border-width:1px;border-style:solid;border-color:#333333;\">\n                        ";
                        t_11 += runtime.suppressValue((lineno = 82, colno = 35, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "semester"), "semester", context, [l_semData1])), env.opts.autoescape);
                        t_11 += "\n                    </div>\n                    ";
                        if (l_semData2 != runtime.contextOrFrameLookup(context, frame, "undefined")) {
                            t_11 += "\n                        <div class=\"col-6 pr-3 pl-3\" style=\"border-width:1px;border-style:solid;border-color:#333333;border-left-style:none;\">\n                            ";
                            t_11 += runtime.suppressValue((lineno = 86, colno = 39, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "semester"), "semester", context, [l_semData2])), env.opts.autoescape);
                            t_11 += "\n                        </div>\n                    ";;
                        }
                        t_11 += "\n                </div>\n            ";;
                        frame = callerFrame;
                        return new runtime.SafeString(t_11);
                    });
                context.addExport("semRow");
                context.setVariable("semRow", macro_t_10);
                output += "\n\n            ";
                var t_12;
                t_12 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "gradeInfo")), "semDataList")), "length");
                frame.set("semNum", t_12, true);
                if (frame.topLevel) {
                    context.setVariable("semNum", t_12);
                }
                if (frame.topLevel) {
                    context.addExport("semNum", t_12);
                }
                output += "\n            ";
                frame = frame.push();
                var t_15 = (lineno = 93, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", context, [0, runtime.contextOrFrameLookup(context, frame, "semNum"), 2]));
                if (t_15) {
                    t_15 = runtime.fromIterator(t_15);
                    var t_14 = t_15.length;
                    for (var t_13 = 0; t_13 < t_15.length; t_13++) {
                        var t_16 = t_15[t_13];
                        frame.set("i", t_16);
                        frame.set("loop.index", t_13 + 1);
                        frame.set("loop.index0", t_13);
                        frame.set("loop.revindex", t_14 - t_13);
                        frame.set("loop.revindex0", t_14 - t_13 - 1);
                        frame.set("loop.first", t_13 === 0);
                        frame.set("loop.last", t_13 === t_14 - 1);
                        frame.set("loop.length", t_14);
                        output += "\n                ";
                        if (t_16 + 1 >= runtime.contextOrFrameLookup(context, frame, "semNum")) {
                            output += "\n                    ";
                            output += runtime.suppressValue((lineno = 95, colno = 29, runtime.callWrap(macro_t_10, "semRow", context, [runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "gradeInfo")), "semDataList")), t_16), runtime.contextOrFrameLookup(context, frame, "undefined")])), env.opts.autoescape);
                            output += "\n                ";;
                        } else {
                            output += "\n                    ";
                            output += runtime.suppressValue((lineno = 97, colno = 29, runtime.callWrap(macro_t_10, "semRow", context, [runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "gradeInfo")), "semDataList")), t_16), runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "gradeInfo")), "semDataList")), (t_16 + 1))])), env.opts.autoescape);
                            output += "\n                ";;
                        }
                        output += "\n            ";;
                    }
                }
                frame = frame.pop();
                output += "\n\n        </div>\n    </div>\n    <script src=\"https://code.jquery.com/jquery-3.4.1.slim.min.js\"></script>\n    <script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\"></script>\n    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js\"></script>\n    <style>\n        .table td,\n        .table th {\n            padding: 0;\n            background: transparent;\n        }\n    </style>\n    <style>\n        @media print {\n            @page {\n                size: A4;\n                margin-right: 3rem;\n            }\n        }\n    </style>";
                if (parentTemplate) {
                    parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
                } else {
                    cb(null, output);
                };
            } catch (e) {
                cb(runtime.handleError(e, lineno, colno));
            }
        }
        return {
            root: root
        };

    })();
})();