export default function ApplicationLoader() {
  return (
    <div className="d-flex flex-column align-items-center mt-6 gap-6 placeholder-glow">
      <span
        className="placeholder bg-secondary-200 rounded-2 col-12 col-md-6 mb-5"
        style={{
          height: '5rem',
        }}
      />
      <span
        className="placeholder bg-secondary-200 rounded-2 col-12 col-md-6 mb-3"
        style={{
          height: '5rem',
        }}
      />
      <span
        className="placeholder bg-secondary-200 rounded-4 col-4 col-md-1"
        style={{
          height: '3rem',
        }}
      />
    </div>
  );
}
