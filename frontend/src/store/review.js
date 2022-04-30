import { csrfFetch } from "./csrf";

const LOAD = "reviews/LOAD";
const CREATE = "reviews/CREATE";

const EDIT = "reviews/EDIT";
const DELETE = "reviews/DELETE";

// Action creator for getting all reviews for a landmark.
const load = (reviews) => ({
  type: LOAD,
  reviews,
});

// Action creator for posting a review for a landmark.

const create = () => ({});

const edit = () => ({});

const deleteReview = () => ({});

// Thunk for getting all reviews for a landmark.

export const getReviews = (id) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${id}`);

  if (response.ok) {
    // array of reviews.
    const reviews = await response.json();
    // console.log(reviews, "LOOOOK HERE!!");
    dispatch(load(reviews));
  }
};

// Reducer.
// Ex. data for review.
/*
{
          userId: 1,
          landMarkId: 1,
          review:
            "Had an amazing trip in Paris. The Eiffel Tower is way taller in person. Would recommend visiting!",
          createdAt: new Date(),
          updatedAt: new Date(),
},
*/

const initialState = {};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      const allReviews = {};
      // console.log(action.reviews, "action.reviews");
      //   console.log(action.reviews, "Action here");
      action.reviews.reviews.forEach((review) => {
        // console.log(review, "REVIEW HERE");
        allReviews[review.id] = review;
      });
      return {
        ...allReviews,
      };
    default:
      return state;
  }
};

export default reviewReducer;
