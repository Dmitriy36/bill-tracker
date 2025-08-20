"use client"; // make this a client-side page
import { useState } from "react";
import Login from "@/components/Login";
import SubscriptionsDisplay from "@/components/SubscriptionsDisplay";
import SubscriptionSummary from "@/components/SubscriptionSummary";
import SubscriptionForm from "@/components/SubscriptionForm";
export default function DashBoardpage() {
  const isAuthenticated = false;
  const [isAddEntry, setIsAddEntry] = useState(false);

  function handleToggleInput() {
    setIsAddEntry(!isAddEntry);
  }

  if (!isAuthenticated) {
    return <Login />;
  }
  return (
    <>
      <SubscriptionSummary />
      <SubscriptionsDisplay
        handleShowInput={isAddEntry ? () => {} : handleToggleInput}
      />
      {isAddEntry && (
        <SubscriptionForm onSubmit={() => {}} closeInput={handleToggleInput} />
      )}
    </>
  );
}
