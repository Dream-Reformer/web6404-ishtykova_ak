class FilmRecommendation {
    constructor(visitorName, filmTitle, releaseYear, hasWatched) {
        this.visitorName = visitorName;
        this.filmTitle = filmTitle;
        this.releaseYear = releaseYear;
        this.hasWatched = hasWatched;
    }

    printToConsole() {
        console.log(`Рекомендация фильма: «${this.filmTitle}» (${this.releaseYear})`);
        console.log(`Автор: ${this.visitorName}`);
        console.log(`Уже смотрел: ${this.hasWatched ? 'да' : 'нет'}`);
    }
}

const form = document.getElementById('film-form');
const filmStatus = document.getElementById('film-status');

form.addEventListener('submit', function (event) {
    // Без адреса сервера форма работает в учебном режиме.
    if (!form.getAttribute('action')) {
        event.preventDefault();
        filmStatus.textContent = 'Рекомендация выведена в консоль.';
    }

    const recommendation = new FilmRecommendation(
        form.elements.visitorName.value,
        form.elements.filmTitle.value,
        form.elements.releaseYear.valueAsNumber,
        form.elements.hasWatched.checked
    );

    recommendation.printToConsole();
});
