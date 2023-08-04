import { createSlice } from '@reduxjs/toolkit';
const podcastsSlice = createSlice({
  name: 'podcastsSlice',
  initialState: {
    allPodcasts: [],
    isLoading: false,
    currentSeason: null,
    currentPodcast: null,
    homePageDisplayedPodcasts: [],
    sorting: 'unsorted',
    searchInput: '',
    userData: { userName: '', userEmail: '', userPassword: '' },
    userDataDB: null,
    hasAccount: false,
    isLoggedIn: false,
    favourites: null,
    favouriteSwitch: true,
  },
  reducers: {
    setAllPodcasts: (state, action) => {
      return { ...state, allPodcasts: action.payload };
    },
    setIsLoading: (state, action) => {
      return { ...state, isLoading: action.payload };
    },
    setCurrentPodcast: (state, action) => {
      return { ...state, currentPodcast: action.payload };
    },
    setCurrentSeason: (state, action) => {
      return { ...state, currentSeason: action.payload };
    },
    setHomePageDisplayedPodcasts: (state, action) => {
      return { ...state, homePageDisplayedPodcasts: action.payload };
    },
    setSorting: (state, action) => {
      return { ...state, sorting: action.payload };
    },
    setSearchInput: (state, action) => {
      return { ...state, searchInput: action.payload };
    },
    setUserData: (state, action) => {
      const { name, value } = action.payload;
      return { ...state, userData: { ...state.userData, [name]: value } };
    },
    resetUserDataForm: (state, action) => {
      return { ...state, userData: action.payload };
    },
    setUserDataFromDB: (state, action) => {
      return { ...state, userDataDB: action.payload };
    },
    setHasAccount: (state, action) => {
      return {
        ...state,
        hasAccount: action.payload,
      };
    },
    setIsLoggedIn: (state, action) => {
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    },
    setFavourites: (state, action) => {
      return {
        ...state,
        favourites: action.payload,
      };
    },
    setFavouriteSwitch: (state) => {
      return { ...state, favouriteSwitch: !state.favouriteSwitch };
    },
  },
});

export const {
  setAllPodcasts,
  setIsLoading,
  setCurrentPodcast,
  setCurrentSeason,
  setHomePageDisplayedPodcasts,
  setSorting,
  setSearchInput,
  setUserData,
  resetUserDataForm,
  setUserDataFromDB,
  setHasAccount,
  setIsLoggedIn,
  setFavourites,
  setFavouriteSwitch,
} = podcastsSlice.actions;
export const podcastsReducer = podcastsSlice.reducer;
