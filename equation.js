function calculate() {
            let d = parseFloat(document.getElementById("distance").value);
            let s = parseFloat(document.getElementById("displacement").value);
            let v = parseFloat(document.getElementById("velocity").value);
            let u = parseFloat(document.getElementById("initialVelocity").value);
            let ts = parseFloat(document.getElementById("seconds").value);


            function speed() {
                return d / ts;
            }

            function velocity() {
                return s / ts;
            }

            function displacement() {
                return v * ts;
            }

            function time() {
                return s / v;
            }

            function acceleration() {
                return (v - u) / ts;
            }

            let select = parseInt(document.getElementById("option").value);
            let result;

            if (select === 1) {
                result = speed() + " m/s";
            } else if (select === 2) {
                result = velocity() + " m/s";
            } else if (select === 3) {
                result = displacement() + " m";
            } else if (select === 4) {
                result = time() + "seconds";
            } else if (select === 5) {
                result = acceleration() + " m/s²";
            } else {
                result = "Invalid selection.";
            }

            document.getElementById("result").innerText = "Result: " + result;
        }