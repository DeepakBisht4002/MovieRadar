import React, { useEffect } from "react";
import axios from "axios";
import Chip from "@mui/material/Chip";

function Genres({
  type,
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  setPage,
}) {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };
  const handleDelete = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const apikey = import.meta.env.VITE_MOVIEDB_API_KEY;
  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${apikey}&language=en-US`
    );
    setGenres(data.genres);
  };
  useEffect(() => {
    fetchGenres();
    return () => {
      setGenres([]);
    };
  }, []);
  return (
    <div style={{ padding: "8px 20px" }}>
      {selectedGenres &&
        selectedGenres.map((genre) => (
          <Chip
            style={{ margin: 2 }}
            size="small"
            label={genre.name}
            key={genre.id}
            color="secondary"
            clickable
            onDelete={() => handleDelete(genre)}
          />
        ))}
      {genres &&
        genres.map((genre) => (
          <Chip
            style={{ margin: 2, color: "white", padding: "15px" }}
            size="small"
            label={genre.name}
            key={genre.id}
            color="primary"
            clickable
            onClick={() => handleAdd(genre)}
          />
        ))}
    </div>
  );
}

export default Genres;
