import { createStore } from "redux";
import { reducerSuggestions } from "./reducer";
export var suggestionVideos =  createStore (reducerSuggestions)