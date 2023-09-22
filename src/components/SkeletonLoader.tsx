import { DSkeleton } from '@dynamic-framework/ui-react';

export default function SkeletonLoader() {
  return (
    <>
      <div className="d-block d-md-none">
        <DSkeleton viewBox="0 0 400 200" backgroundColor="#e9e9ff" foregroundColor="#f8f8fb">
          <rect x="50" y="30" rx="5" ry="5" width="300" height="40" />
          <rect x="50" y="100" rx="5" ry="5" width="300" height="40" />
          <rect x="160" y="160" rx="5" ry="5" width="80" height="40" />
        </DSkeleton>
      </div>
      <div className="d-none d-md-block">
        <DSkeleton viewBox="0 0 600 140" backgroundColor="#e9e9ff" foregroundColor="#f8f8fb">
          <rect x="150" y="20" rx="5" ry="5" width="300" height="30" />
          <rect x="150" y="70" rx="5" ry="5" width="300" height="30" />
          <rect x="280" y="120" rx="5" ry="5" width="40" height="20" />
        </DSkeleton>
      </div>
    </>
  );
}
