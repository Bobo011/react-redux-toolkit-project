/* eslint-disable no-unused-vars */
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { APIKey } from '../../common/apis/MovieApiKey';
import movieApi from "../../common/apis/movieApi";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText = "Friends";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${seriesText}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
  
    const response = await movieApi.get(
      `?apiKey=${APIKey}&i=${id}&Plot=full`
    );
    return response.data;
  }
);
const initialState = {
	movies:{},
	shows:{},
  selectedMovieOrShow:{},
}

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow:(state)=>{
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, (state) => {
        console.log("Pending");
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        console.log("Fetched Successfully ");
        state.movies = payload;
      })
      .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
        console.log("Fetched Successfully ");
        state.shows = payload;
      })
      .addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, { payload }) => {
        console.log("Fetched Successfully ");
        state.selectedMovieOrShow = payload;
      })
      .addCase(fetchAsyncMovies.rejected, (state) => {
        console.log("Rejected ");
      });
  },
});


export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export const getAllShows = (state) => state.movies.shows;
export default movieSlice.reducer;

