import {createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies: null,
        popularMovie: null,
        topRatedMovies: null,
        upcomingMovies: null,
        toggle: false,
        trailerMovie:null,
        open: false,
        id:"",
    },
    reducers:{
        //actions
        getNowPlayingMovies:(state, action)=> {
            state.nowPlayingMovies = action.payload;
        },
        getPopularMovie:(state, action) => {
            state.popularMovie = action.payload;
        },
        getTopRatedMovies:(state, action) => {
            state.topRatedMovies = action.payload;
        },
        getUpcomingMovies:(state, action) => {
            state.payload = action.payload;
        },
        setToggle:(state) => {
            state.toggle = !state.toggle;
        },
        getTrailerMovie:(state, action) => {
            state.trailerMovie = action.payload;
        },
        setOpen: (state, action) => {
            state.open = action.payload;
        },
        getId: (state, action) => {
            state.id = action.payload;
        }
    },
});

export const {getNowPlayingMovies, getPopularMovie, getTopRatedMovies, getUpcomingMovies, setToggle, getTrailerMovie, setOpen, getId} = movieSlice.actions;
export default movieSlice.reducer;

