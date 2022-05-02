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

const create = (review) => ({
  type: CREATE,
  review,
});

const edit = (review) => ({
  type: EDIT,
  review,
});

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

export const postReview = (data) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    // new review
    const newReview = await response.json();
    dispatch(create(newReview.newReview));
  }
};

// Create thunk for editReview

export const editReview = (reviewId, data) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const editedReview = await response.json();
    console.log(editedReview);
    dispatch(edit(editedReview.reviewToUpdate));
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
    case CREATE:
      const newState = {
        ...state,
        [action.review.id]: action.review,
      };
      return newState;
    case EDIT:
      const editState = {
        ...state,
        [action.review.id]: action.review,
      };
      return editState;
    default:
      return state;
  }
};

export default reviewReducer;
