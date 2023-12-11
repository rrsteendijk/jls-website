document.addEventListener('DOMContentLoaded', function () {
    const table = document.getElementById('multiplication-table');
    for (let i = 1; i <= 12; i++) {
        let row = table.insertRow();
        for (let j = 1; j <= 12; j++) {
            let cell = row.insertCell();
            cell.innerHTML = `${i} x ${j}`;
            cell.addEventListener('click', function () {
                alert(i * j);
            });
        }
    }
});
