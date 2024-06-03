
        let count = 0;
        const counter = document.getElementById('counter');

        function updateCounter() {
            counter.textContent = count;
            if (count > 0) {
                counter.style.color = 'green';
            } else if (count < 0) {
                counter.style.color = 'red';
            } else {
                counter.style.color = 'black';
            }
        }

        function increase() {
            count++;
            updateCounter();
        }

        function decrease() {
            count--;
            updateCounter();
        }

        function reset() {
            count = 0;
            updateCounter();
        }