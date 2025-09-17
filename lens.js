function calculate() {
            let f_input = parseFloat(document.getElementById("f").value);
            let u = parseFloat(document.getElementById("u").value);
            let v = parseFloat(document.getElementById("v").value);
            let hi = parseFloat(document.getElementById("hi").value);
            let ho = parseFloat(document.getElementById("ho").value);


            function focalLength() {
                return 1 / (1/v - 1/u);
            }

            function magnification() {
                let mag1 = (!isNaN(hi) && !isNaN(ho) && ho !== 0) ? hi / ho : NaN;
                let mag2 = (!isNaN(v) && !isNaN(u) && v !== 0) ? v / u : NaN;
                return !isNaN(mag1) ? mag1 : mag2;
            }

            function power() {
                let f_val = f_input || focalLength();
                return f_val ? 100 / f_val : NaN;
            }


            let select = parseInt(document.getElementById("option").value);
            let result;

// just adding the unit
            if (select === 1) {
                result = focalLength() + " cm";
            } else if (select === 2) {
                result = magnification();
            } else if (select === 3) {
                result = power() + " D";
            } 

            document.getElementById("result").innerText = "Result: " + result;
        }