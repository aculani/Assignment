const getCars = async () => {
    const res = await fetch(`http://localhost:3333/api/cars`);
    const data = await res.json();
    console.log(data);
    return data;
};



const currencyFormatter = (value) => {
    return new Intl.NumberFormat('mn-MN', { maximumSignificantDigits: 3 }).format(value);
}


const getCarCard = (car) => {
    return `<div class="col-3">
                <div class="card">
                    <div class="ratio ratio-4x3">
                        <img src="${car.imageUrl}" alt="">
                    </div>
                    <div class="card-body">
                        <p class="card-id">${car.id}</p>
                        <p class="card-name">${car.model}</p>
                        <p class="card-category">${car.brand}</p>
                        <p class="card-price">${currencyFormatter(car.price)}₮</p>

                        <div class="d-flex justify-content-end gap-3">
                            <button type="button" class="btn btn-success" onclick="updateCar(${car.id})">Засах</button>
                            <button type="button" class="btn btn-danger" onclick="deleteCar(${car.id})">Устгах</button>
                        </div>
                    </div>
                </div>
            </div>`;
};

const carsTarget = document.querySelector('#cars');
const getCarsHtml = async () => {
    carsTarget.innerHTML = '';
    const cars = await getCars();
    for (const car of cars) {
        carsTarget.innerHTML += getCarCard(car);
    }

    getCarsHtml();

    const submitButton = document.querySelector("#formSubmit");

    const idTarget = document.querySelector('#idTarget');
    const modelTarget = document.querySelector('#modelTarget');
    const priceTarget = document.querySelector('#priceTarget');
    const brandTarget = document.querySelector('#brandTarget');
    const imageUrlTarget = document.querySelector('#imageUrlTarget');

    submitButton.addEventListener('click', async () => {
        const newCar = {
            id: idTarget.value,
            imageUrl: imageUrlTarget.value,
            model: modelTarget.value,
            brand: brandTarget.value,
            price: priceTarget.value,
        };


        if (Number(idTarget.value) !== Number(idTarget.id)) {
            const req = await fetch(`http://localhost:3333/api/cars/`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(newCar),
            });
        } else {
            fetch(`http://localhost:3333/api/cars/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedCar),
            });
        }



        const res = await req.json();
        console.log(res);
        getCarsHtml();
    });



    const deleteCar = (id) => {
        if (confirm('Ustgahuu')) {
            fetch('http://localhost:3333/api/cars', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id }),
            })
                .then(res => res.json())
                .catch((err) => {
                    alert('Amjilttai ustgalaa');
                    getCarsHtml();
                });
        }
    };

    const updateCar = (id) => {
        modal.show();
        fetch("http://localhost:3333/api/cars/" + id).then(res => res.json()).then(data => {

            Number(idTarget.value) = data.id

        })
        console.log(car);
    };

    const modal = new bootstrap.Modal(document.getElementById('modal'));
// //haruulna
// modal.show();
// //nuuna
// modal.hide();

//so many bug is here