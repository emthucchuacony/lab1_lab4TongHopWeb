document.addEventListener("click", function () {
    const solveBut = document.getElementById("solveButton");
    const resultDiv = document.getElementById("result");


    solveBut.addEventListener("click", function () {
        const a = parseFloat(document.getElementById("a").value);
        const b = parseFloat(document.getElementById("b").value);
        const c = parseFloat(document.getElementById("c").value);
        const delta = (b*b)  - (4 * a*c);
        if (isNaN(delta)) {
            resultDiv.textContent = "Xin vui long nhap so";
        }
        else if(delta<0) {
            resultDiv.textContent ="vo nghiem";
        }
        else if (delta==0) {
            const root = -b / (2 * a);
            resultDiv.textContent = `The root is x = ${root}`;
        }
        else {
            const root1 = (-b + Math.sqrt(delta)) / (2 * a);
            const root2 = (-b - Math.sqrt(delta)) / (2 * a);
            resultDiv.textContent = `The roots are x1 = ${root1} and x2 = ${root2}`;

        }

    });

})