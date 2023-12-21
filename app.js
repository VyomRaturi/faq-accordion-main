let btns = document.querySelectorAll(".qn");
let plus = document.querySelectorAll(".btn-plus");
let minus = document.querySelectorAll(".btn-minus");

for (btn of btns) {
    btn.addEventListener("click", function () {
        let ans = this.nextElementSibling;
        let plus = this.firstElementChild.nextElementSibling.firstElementChild;
        let minus = this.firstElementChild.nextElementSibling.lastElementChild;
        if (ans.style.display == "block") {
            ans.style.display = "none";
            plus.style.display = "block";
            minus.style.display = "none";
        } else {
            ans.style.display = "block";
            plus.style.display = "none";
            minus.style.display = "block";
        }
    });
}
