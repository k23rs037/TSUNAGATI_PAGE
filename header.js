document.addEventListener("DOMContentLoaded", function () {
    fetch("./header.html")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("header.htmlが見つかりません");
            }
            return response.text();
        })
        .then(function (data) {
            document.getElementById("header").innerHTML = data;
        })
        .catch(function (error) {
            console.error("ヘッダーの読み込みに失敗しました:", error);
        });
});