$(document).ready(function () {
    // 注册模态框显示事件
    $("#registerModal").on("show.bs.modal", function () {
        // 清空验证码
        $("#registerVerificationCode").val("");
        // 还原生成验证码按钮文本
        $("#registerGenerateCode").text("生成验证码");
    });

    // 登录模态框显示事件
    $("#loginModal").on("show.bs.modal", function () {
        // 清空验证码
        $("#loginVerificationCode").val("");
        // 还原生成验证码按钮文本
        $("#loginGenerateCode").text("生成验证码");
    });

    // 生成验证码按钮点击事件
    $(".generate-code-btn").click(function () {
        var code = generateCode(6); // 生成 6 位的随机验证码
        $(this).text(code); // 将验证码显示在按钮上
    });

    // 注册按钮点击事件
    $("#Modal-register").click(function () {
        var inputCode = $("#registerVerificationCode").val().trim(); // 获取用户输入的验证码

        // 验证用户输入的验证码是否正确
        if (inputCode === "") {
            // 如果用户未输入验证码
            alert("请输入验证码");
            return;
        }

        var generatedCode = $("#registerGenerateCode").text().trim(); // 获取生成的验证码

        if (inputCode === generatedCode) {
            // 验证码正确
            // 在此处添加处理注册逻辑
            alert("注册成功！");
            $("#registerModal").modal("hide"); // 关闭注册模态框
        } else {
            // 验证码错误
            alert("验证码错误，请重新输入");
            // 清空输入框
            $("#registerVerificationCode").val("");
        }
    });

    // 登录按钮点击事件
    $("#Modal-login").click(function () {
        var username = $("#username").val().trim(); // 获取用户名
        var password = $("#password").val().trim(); // 获取密码
        var inputCode = $("#loginVerificationCode").val().trim(); // 获取用户输入的验证码
        // 验证用户名、密码和验证码是否正确
        if (username === "") {
            // 如果用户名未输入
            alert("请输入用户名");
            return;
        }

        if (password === "") {
            // 如果密码未输入
            alert("请输入密码");
            return;
        }

        if (inputCode === "") {
            // 如果用户未输入验证码
            alert("请输入验证码");
            return;
        }
        var generatedCode = $("#loginGenerateCode").text().trim(); // 获取生成的验证码
        if (inputCode === generatedCode) {
            // 验证码正确
            // 在此处添加处理登录逻辑
            if (username === "lijun" && password === "123456") {
                // 验证用户名和密码是否匹配
                alert("登录成功！");
                $("#loginModal").modal("hide"); // 关闭登录模态框
                window.location.href='https://blog.lijun920.xyz/';
            } else {
                alert("用户名或密码不正确");
            }
        } else {
            // 验证码错误
            alert("验证码错误，请重新输入");
            // 清空输入框
            $("#loginVerificationCode").val("");
        }

    });
});

// 生成指定长度的随机验证码
function generateCode(length) {
    var charset = "0123456789";
    var code = "";

    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        code += charset.charAt(randomIndex);
    }

    return code;
}