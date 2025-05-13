import React from "react";

const SkeletonTable = ({ rows, columns }) => {
  return (
    <div className="overflow-x-auto w-full rounded-md border border-gray-200 bg-[#f6f8fb]">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-white">
          <tr>
            {Array.from({ length: columns }).map((_, i) => (
              <th
                key={i}
                className="px-4 py-3 text-left text-sm font-medium text-gray-500"
              >
                <div className="h-4 w-24 rounded bg-[#e1e6f0] animate-pulse"></div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <td key={colIndex} className="px-4 py-3">
                  <div className="h-4 w-full max-w-[120px] rounded bg-[#e1e6f0] animate-pulse"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkeletonTable;
