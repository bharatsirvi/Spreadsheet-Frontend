const priorityColors: Record<string, string> = {
  High: "text-[#EF4D44]",
  Medium: "text-[#C29210]",
  Low: "text-[#1A8CFF]",
};

const PriorityLabel = ({ priority }: { priority: string }) => (
  <span className={`text-xs font-semibold ${priorityColors[priority]}`}>
    {priority}
  </span>
);

export default PriorityLabel;
