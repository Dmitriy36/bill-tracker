"use client"; // make this a client-side page
import { useState } from "react";

export default function SubscriptionForm(props) {
  const { onSubmit, closeInput } = props;
  const [formData, setFormData] = useState({
    name: "",
    category: "Web Services",
    cost: "",
    currency: "USD",
    billingFrequency: "Monthly",
    nextBillingDate: "",
    paymentMethod: "Credit Card",
    startDate: "",
    renewalType: "",
    notes: "",
    status: "Active",
  });

  function handleChangeInput(e) {
    const newData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newData);
  }

  function handleFormSubmit(e) {
    e.preventDefault(); // this is to prevent page from reloading
    onSubmit();
  }

  return (
    <section>
      <h2>Add a new bill</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          <span>Subscription Name</span>
          <input
            value={formData.name}
            onChange={handleChangeInput}
            type="text"
            name="name"
            placeholder="e.g. Netflix, HBO, etc."
            required
          />
        </label>
        <label>
          <span>Category</span>
          <select
            value={formData.category}
            onChange={handleChangeInput}
            name="category"
          >
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
            value={formData.cost}
            onChange={handleChangeInput}
            type="number"
            name="cost"
            step="0.01"
            placeholder="e.g. 12.00"
            required
          />
        </label>
        <label>
          <span>Currency</span>
          <select
            value={formData.currency}
            onChange={handleChangeInput}
            name="currency"
          >
            {["USD", "EUR"].map((curr, currIndex) => {
              return <option key={currIndex}>{curr}</option>;
            })}
          </select>
        </label>

        <label>
          <span>Billing Frequency</span>
          <select
            value={formData.billingFrequency}
            onChange={handleChangeInput}
            name="billingFrequency"
          >
            {["One-Time", "Weekly", "Monthly", "Quarterly", "Yearly"].map(
              (freq, freqIndex) => {
                return <option key={freqIndex}>{freq}</option>;
              }
            )}
          </select>
        </label>

        <label>
          <span>Payment Method</span>
          <select
            value={formData.paymentMethod}
            onChange={handleChangeInput}
            name="paymentMethod"
          >
            {["Credit Card", "Debit Card", "Paypal", "Bank Xfer", "Other"].map(
              (item, itemIndex) => {
                return <option key={itemIndex}>{item}</option>;
              }
            )}
          </select>
        </label>

        <label>
          <span>Subscription Start Date</span>
          <input
            value={formData.startDate}
            onChange={handleChangeInput}
            type="date"
            name="startDate"
          />
        </label>

        <label>
          <span>Status</span>
          <select
            value={formData.status}
            onChange={handleChangeInput}
            name="status"
          >
            {["Active", "Paused", "Cancelled"].map((item, itemIndex) => {
              return <option key={itemIndex}>{item}</option>;
            })}
          </select>
        </label>

        <label className="fat-column">
          <span>Notes</span>
          <textarea
            value={formData.notes}
            onChange={handleChangeInput}
            name="notes"
            placeholder="e.g. private / shared / etc."
          />
        </label>

        <div className="fat-column form-submit-btns">
          <button onClick={closeInput}>Cancel</button>
          <button type="submit">Add Bill</button>
        </div>
      </form>
    </section>
  );
}
