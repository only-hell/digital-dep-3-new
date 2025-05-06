function loadData() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true); // асинхронный запрос
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) { // запрос завершен
            if (xhr.status === 200) {
                try {
                    // Преобразуем JSON-строку в объект
                    const data = JSON.parse(xhr.responseText);
                    console.log(data);
                }
                catch (e) {
                    console.error('Ошибка парсинга JSON:', e);
                }
            }
            else {
                console.error('Ошибка ' + xhr.status + ': ' + xhr.statusText);
            }
        }
    };
    xhr.onerror = () => {
        console.error('Произошла ошибка при запросе данных');
    };
    xhr.send();
}
loadData();
