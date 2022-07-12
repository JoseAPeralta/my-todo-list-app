interface IUrgencyProps {
  urgency: "More" | "Medium" | "Less";
}

export const UrgencyItem = ({ urgency }: IUrgencyProps) => {
  return (
    <>
      <span role="img" aria-label={`${urgency} urgency`}>
        {urgency === "More" ? "🔴" : urgency === "Medium" ? "🟠" : "🟢"}
      </span>
    </>
  );
};
