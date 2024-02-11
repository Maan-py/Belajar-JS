// https://omdbapi.com/?apikey=53aa2cd6&t
// http://www.omdbapi.com/?apikey=53aa2cd6&t&

$(".search-button").on("click", function () {
  $.ajax({
    url: "https://omdbapi.com/?apikey=53aa2cd6&s=" + $(".input-keyword").val(),
    success: (results) => {
      const movies = results.Search;
      let cards = "";
      movies.forEach((m) => {
        cards += showCards(m);
      });
      $(".movie-container").html(cards);

      // ketika tombol detail di klik
      $(".modal-detail-button").on("click", function () {
        $.ajax({
          url: "https://omdbapi.com/?apikey=53aa2cd6&i=" + $(this).data("imdbid"),
          success: (m) => {
            const movieDetail = showDetail(m);
            $(".modal-body").html(movieDetail);
          },
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
});

function showCards(m) {
  return `<div class="col-md-4 my-3">
                <div class="card" style="width: 18rem;">
                    <img src="${m.Poster}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's
                            content.</p>
                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-imdbid="${m.imdbID}">Go somewhere</a>
                    </div>
                </div>
            </div>`;
}

function showDetail(m) {
  return `<div class="container-fluid">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="${m.Poster}" alt="" class="img-fluid">
                            </div>
                            <div class="col-md">
                                <ul class="list-group">
                                    <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
                                    <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
                                    <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
                                    <li class="list-group-item"><strong>Plot : </strong>${m.Plot}</li>
                                    <li>
                                </ul>
                            </div>
                        </div>
                    </div>`;
}
