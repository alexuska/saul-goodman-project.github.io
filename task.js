document.getElementById('triangleForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const x = parseFloat(document.getElementById('sideX').value);
    const y = parseFloat(document.getElementById('sideY').value);
    const z = parseFloat(document.getElementById('sideZ').value);

    if (isNaN(x) || isNaN(y) || isNaN(z) || x <= 0 || y <= 0 || z <= 0) {
        document.getElementById('result').textContent = 'Пожалуйста, введите корректные положительные значения сторон.';
        return;
    }

    let result = '';

    if (x + y > z && x + z > y && y + z > x) {
        result = 'Треугольник существует.';
        if (x * x + y * y === z * z || x * x + z * z === y * y || y * y + z * z === x * x) {
            result += ' Он является прямоугольным.';
        } else {
            result += ' Он не является прямоугольным.';
        }
    } else {
        result = 'Треугольник не существует.';
    }

    document.getElementById('result').textContent = result;
});
