const statusColors: Record<string, string> = {
  "In-process": "bg-[#FFF3D6] text-[#85640B]",
  Complete: "bg-[#D3F2E3] text-[#0A6E3D]",
  Blocked: "bg-[#FFE1DE] text-[#C22219]",
  "Need to start": "bg-[#E2E8F0] text-[#475569",
};

const StatusBadge = ({ status }: { status: string }) => (
  <span
    className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}
  >
    {status}
  </span>
);

export default StatusBadge;
