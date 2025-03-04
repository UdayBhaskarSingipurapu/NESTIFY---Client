import React from "react";
import './FeedbackForm.css'
const FeedbackForm = () => {
   return (
    <div className="bg-white shadow-xl rounded-lg p-10 w-full max-w-2xl">
      <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">
        Feedback Form
      </h1>
      <form className="flex flex-col gap-6">
      <fieldset class="starability-slot">
  <legend className="block text-gray-700 font-medium mb-2">Rating</legend>
  <input type="radio" id="no-rate" class="input-no-rate" name="rating" value="0" checked aria-label="No rating." />
  <input type="radio" id="second-rate1" name="rating" value="1" />
  <label for="second-rate1" title="Terrible">1 star</label>
  <input type="radio" id="second-rate2" name="rating" value="2" />
  <label for="second-rate2" title="Not good">2 stars</label>
  <input type="radio" id="second-rate3" name="rating" value="3" />
  <label for="second-rate3" title="Average">3 stars</label>
  <input type="radio" id="second-rate4" name="rating" value="4" />
  <label for="second-rate4" title="Very good">4 stars</label>
  <input type="radio" id="second-rate5" name="rating" value="5" />
  <label for="second-rate5" title="Amazing">5 stars</label>
</fieldset>
        {/* Description Input */}
        <div>
            <label htmlFor="feedback" className="block text-gray-700 font-medium mb-2">
              Student's Feedback
            </label>
          <textarea
            id="feedback"
            placeholder="Enter Your Feedback"
            rows="5"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
   );
};

export default FeedbackForm;