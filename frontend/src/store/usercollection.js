import { csrfFetch } from "./csrf";

const LOAD = "collections/LOAD";

// Action creator for getting all landmarks for a session user.
const load = (landmarks) => ({
  type: LOAD,
  landmarks: landmarks.userLandmarks,
});

// Thunk for getting all landmarks for a session user.

export const getUserLandmarks = (userId) => async (dispatch) => {
  const response = await fetch(`/api/landmarks/${userId}`);

  if (response.ok) {
    // json object of userLandmarks
    const landmarks = await response.json();
    // console.log(landmarks)
    dispatch(load(landmarks));
  }
};

// Ex. data for landmarks
/*
{
          userId: 1,
          name: "Colosseum",
          imageUrl: "https://w.wallhaven.cc/full/43/wallhaven-43g6xd.jpg",
          description:
            "The Colosseum is an amphitheatre built in Rome under the Flavian emperors of the Roman Empire. It is also called the Flavian Amphitheatre. It is an elliptical structure made of stone, concrete, and tuff, and it stands four stories tall at its highest point.",
          lat: 41.8902,
          lng: 12.4922,
          createdAt: new Date(),
          updatedAt: new Date(),
},
*/

const initialState = {};

const collectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      const userLandmarks = {};

      action.landmarks.forEach((landmark) => {
        userLandmarks[landmark.id] = landmark;
      });
      return {
        ...userLandmarks,
      };
    default:
      return state;
  }
};

export default collectionReducer;
