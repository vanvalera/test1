function createModal(movie) {
  const modal = document.createElement('div');
  modal.classList.add('modal-film', 'backdrop-movie');

  const {
    title,
    poster_path: poster,
    vote_average: voteAverage,
    vote_count: voteCount,
    popularity,
    overview,
    genres,
  } = movie;
  const genresMovie = genres.map(genre => genre.name).join(', ');

  modal.innerHTML = `
    <div class="modal-movie">
      <button class="btn-close js-btn-close-modal" data-modal-close aria-label="Close">
        <svg class="btn-close__icon" width="14" height="14">
          <use href="./images/icons.svg#icon-close"></use>
        </svg>
      </button>
      <div class="modal-card js-modal-card">
        <div class="modal-card__thumb-left">
          <img class="modal-card__img" src="${poster}" alt="${title}" data-id="${movie.id}" />
        </div>
        <div class="modal-card__thumb-right">
          <p class="thumb-right__title">${title}</p>
          <div class="thumb-right__details">
            <ul class="thumb-right__name-details">
              <li class="thumb-right__name-item">Vote / Votes</li>
              <li class="thumb-right__name-item">Popularity</li>
              <li class="thumb-right__name-item">Genre</li>
            </ul>
            <ul class="thumb-right__value-details">
              <li class="thumb-right__value-item">
                <span class="thumb-right__vote">${voteAverage}</span>
                <span class="thumb-right__delimiter"><span>&nbsp</span>/<span>&nbsp</span></span>
                <span class="thumb-right__votes">${voteCount}</span>
              </li>
              <li class="thumb-right__value-item">${popularity}</li>
              <li class="thumb-right__value-item">${genresMovie}</li>
            </ul>
          </div>
          <p class="thumb-right__about">About</p>
          <p class="thumb-right__overview">${overview}</p>
          <div class="modal-card__btn-wrap">
            <button class="modal-card__library-btn js-add-library-btn" data-id="${movie.id}" data-name="library">
              Add to library
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.querySelector('.js-btn-close-modal').addEventListener('click', () => {
    modal.remove();
  });

  return modal;
}
export { createModal };
