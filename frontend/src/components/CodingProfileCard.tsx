import React from 'react';

interface CodingProfileCardProps {
  platform: string;
  icon?: React.ReactNode;
  iconBgColor?: string;
  rank?: string;
  rating?: number;
  problemsSolved?: number;
  profileUrl: string;
  stats?: {
    label: string;
    value: string | number;
  }[];
}

const CodingProfileCard: React.FC<CodingProfileCardProps> = ({
  platform,
  icon,
  iconBgColor = 'var(--nav-text-hover)',
  rank,
  rating,
  problemsSolved,
  profileUrl,
  stats,
}) => {
  return (
    <div className="p-6 bg-[var(--nav-hover-bg)] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--nav-border-color)] hover:border-[var(--nav-text-hover)] group">
      {/* Platform Header */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: iconBgColor }}
        >
          {icon || <span className="text-white font-bold text-lg">{platform.slice(0, 2).toUpperCase()}</span>}
        </div>
        <h4 className="font-bold text-lg text-[var(--nav-text-color)]">{platform}</h4>
      </div>

      {/* Stats Section */}
      <div className="space-y-3 mb-4">
        {rank && (
          <div className="flex justify-between items-center">
            <span className="text-sm text-[var(--nav-text-color)] opacity-70">Rank</span>
            <span className="font-semibold text-[var(--nav-text-color)] text-base">{rank}</span>
          </div>
        )}

        {rating !== undefined && (
          <div className="flex justify-between items-center">
            <span className="text-sm text-[var(--nav-text-color)] opacity-70">Rating</span>
            <span className="font-semibold text-[var(--nav-text-hover)] text-base">{rating}</span>
          </div>
        )}

        {problemsSolved !== undefined && (
          <div className="flex justify-between items-center">
            <span className="text-sm text-[var(--nav-text-color)] opacity-70">Problems Solved</span>
            <span className="font-semibold text-[var(--nav-text-color)] text-base">{problemsSolved}</span>
          </div>
        )}

        {/* Additional Custom Stats
        {stats && stats.map((stat, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-sm text-[var(--nav-text-color)] opacity-70">{stat.label}</span>
            <span className="font-semibold text-[var(--nav-text-color)] text-base">{stat.value}</span>
          </div>
        ))} */}
      </div>

      {/* View Profile Link */}
      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[var(--nav-text-hover)] hover:opacity-90 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg group/link"
      >
        <span>View Profile</span>
        <svg
          className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </a>
    </div>
  );
};

export default CodingProfileCard;
