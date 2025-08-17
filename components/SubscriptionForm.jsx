"use client";
export default function SubscriptionForm() {
  return (
    <section>
      <h2>Add a new bill</h2>
      <form onSubmit={() => {}}>
        <label>
          <span>Subscription Name</span>
          <input
            type="text"
            name="name"
            placeholder="e.g. Netflix, HBO, etc."
            required
          />
        </label>
        <label>
          <span>Category</span>
          <select name="category">
            {[
              "Entertainment",
              "Music",
              "Software",
              "Health & Fitness",
              "Other",
            ].map((cat, catIndex) => {
              return <option key={catIndex}>{cat}</option>;
            })}
          </select>
        </label>
        <label>
          <span>Cost</span>
          <input
            type="number"
            name="cost"
            step="0.01"
            placeholder="e.g. 12.00"
            required
          />
        </label>
        <label>
          <span>Currency</span>
          <select name="currency">
            {["USD", "EUR"].map((curr, currIndex) => {
              return <option key={currIndex}>{curr}</option>;
            })}
          </select>
        </label>

        <label>
          <span>Billing Frequency</span>
          <select name="billingFrequency">
            {["One-Time", "Weekly", "Monthly", "Quarterly", "Yearly"].map(
              (freq, freqIndex) => {
                return <option key={freqIndex}>{freq}</option>;
              }
            )}
          </select>
        </label>

        <label>
          <span>Payment Method</span>
          <select name="paymentMethod">
            {["Credit Card", "Debit Card", "Paypal", "Bank Xfer", "Other"].map(
              (item, itemIndex) => {
                return <option key={itemIndex}>{item}</option>;
              }
            )}
          </select>
        </label>

        <label>
          <span>Subscription Start Date</span>
          <input type="date" name="startDate" />
        </label>

        <label>
          <span>Status</span>
          <select name="status">
            {["Active", "Paused", "Cancelled"].map((item, itemIndex) => {
              return <option key={itemIndex}>{item}</option>;
            })}
          </select>
        </label>

        <label className="fat-column">
          <span>Notes</span>
          <textarea name="notes" placeholder="e.g. private / shared / etc." />
        </label>

        <div className="fat-column form-submit-btns">
          <button>Cancel</button>
          <button type="submit">Add Bill</button>
        </div>
      </form>
    </section>
  );
}
