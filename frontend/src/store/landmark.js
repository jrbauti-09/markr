import { csrfFetch } from "./csrf";

const LOAD = "landmarks/LOAD";
const CREATE = "landmarks/CREATE";

const EDIT = "landmarks/EDIT";
const DELETE = "landmarks/DELETE";

// Action creator for getting all landmarks.
const get = (landmarks) => ({
  type: LOAD,
  landmarks,
});

// Action creator for posting landmark.
const create = (landmark) => ({
  type: CREATE,
  landmark,
});
// Action creator for editing landmark.
const edit = (editedLandmark) => ({
  type: EDIT,
  editedLandmark,
});
// Action creator for deleting landmark.
const deletePost = (deletePost) => ({
  type: DELETE,
  deletePost,
});

// Thunk for getting all landmarks.

export const getLandmarks = () => async (dispatch) => {
  const response = await csrfFetch("/api/landmarks");

  if (response.ok) {
    // array of landmarks.
    const landmarks = await response.json();
    // console.log(landmarks, "landmarks");
    dispatch(get(landmarks.landmark));
  }
};

// Thunk for adding a landmark.

export const addLandmark = (data) => async (dispatch) => {
  const response = await csrfFetch("/api/landmarks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const landmark = await response.json();
    dispatch(create(landmark));
  }
};

// Thunk for editing a landmark.

export const editLandmark = (landMarkId, data) => async (dispatch) => {
  const response = await csrfFetch(`/api/landmarks/${landMarkId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const editedLandmark = await response.json();
    // console.log(editedLandmark, "Edited Landmark");
    dispatch(edit(editedLandmark.landMarkToUpdate));
    return editedLandmark;
  }
};

// Thunk for deleting a landmark.

export const deleteLandmark = (landMarkId) => async (dispatch) => {
  const response = await csrfFetch(`/api/landmarks/${landMarkId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    const data = await response.json();
    // console.log(data);
    dispatch(deletePost(data.landMarkToDelete));
  }
};

// initial state.

const initialState = {};

// Ex. data for landmark
/*
{
          userId: 1,
          name: "Eiffel Tower",
          imageUrl: "https://w.wallhaven.cc/full/6q/wallhaven-6qmzj6.jpg",
          description:
            "The Eiffel tower is a puddled iron structure, an iron that has lost some of its carbon and therefore rusts less quickly. It is pyramidal in shape with slightly curved sides. It measures 324m high and is divided into 4 parts separated by a floor.",
          lat: 48.8584,
          lng: 2.2945,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
*/

const landMarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      const allLandmarks = {};
      action.landmarks.forEach((landmark) => {
        allLandmarks[landmark.id] = landmark;
      });
      return {
        ...state,
        ...allLandmarks,
      };
    case CREATE:
      // console.log(action.landmark.id, "LOOK HERE");
      // console.log(action.landmark.landmark, "LOOK HERE");
      const newState = {
        ...state,
        [action.landmark.newLandmark.id]: action.landmark.newLandmark,
      };
      return newState;
    case EDIT:
      const editState = {
        ...state,
        [action.editedLandmark.id]: action.editedLandmark,
      };
      return editState;
    case DELETE: {
      const newState = {
        ...state,
      };
      delete newState[action.deletePost.id];
      // console.log(newState, "NEW STATE");
      return newState;
    }
    default:
      return state;
  }
};

export default landMarkReducer;
