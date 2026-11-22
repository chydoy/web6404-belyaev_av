class VisitRequest {
    constructor(name, email, visitDate) {
        this.name = name;
        this.email = email;
        this.visitDate = visitDate;
    }

    printInfo() {
        console.log(
            `=== Заявка на экскурсию (RetroTech 80s) ===\n` +
            `Посетитель: ${this.name}\n` +
            `Email: ${this.email}\n` +
            `Дата визита: ${this.visitDate}`
        );
    }
}

const form = document.querySelector('#visit-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#visitor-name').value;
    const email = document.querySelector('#visitor-email').value;
    const visitDate = document.querySelector('#visit-date').value;

    const request = new VisitRequest(name, email, visitDate);
    request.printInfo();
});
