const selectedPlaces = [];

document.querySelector('.seatsBlock').addEventListener('click', ({target}) => {
    const orderElement = document.querySelector('.order');

    if (target.checked === true) {
        selectedPlaces.push(target.value);
    } else {
        const index = selectedPlaces.indexOf(target.value);
        if (index > -1) {
            selectedPlaces.splice(index, 1);
        }
    }

    console.log(selectedPlaces.sort());

    selectedPlaces.length > 0 ? renderOrderElementWithTickets(orderElement, stringifyArray(selectedPlaces.sort()))
    : renderOrderElementWithText(orderElement, 'Выберите места, чтобы забронировать билеты');

});

const renderOrderElementWithTickets = (orderElement, places) => {
    orderElement.innerHTML = `
    <div class="order-info-big">
        <p class="order-title-big">Данные заказа:</p>
    </div>
    <div class="order-info">
        <p class="order-title">Фильм:</p>
        <p class="order-description">Довод (Tenet)</p>
    </div>
    <div class="order-info">
        <p class="order-title">Cеанс:</p>
        <p class="order-description">5 Февраля, 22:30</p>
    </div>
    <div class="order-info">
        <p class="order-title">Билеты:</p>
        <p class="order-description">${places}</p>
    </div>
    <form action="" method="post" class="order-form">
        <button class="pay">Забронировать</button>
    </form>
    `;
    orderElement.style.border = '2px solid #024fff';
};

const renderOrderElementWithText = (orderElement, text) => {
    orderElement.innerHTML = `
    <p class="before-order">${text}</p>
    `;
    orderElement.style.border = 'none';
};

const stringifyArray = (selectedPlaces) => {
    return "bla-bla";
};


