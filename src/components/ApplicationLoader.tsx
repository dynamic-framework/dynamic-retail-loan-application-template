export default function ApplicationLoader() {
  return (
    <div className="d-flex flex-column align-items-center gap-6 placeholder-glow">
      <span
        className="placeholder bg-secondary-200 rounded-2 col-12"
        style={{
          height: '6rem',
        }}
      />
      <span
        className="placeholder bg-secondary-200 rounded-2 col-12"
        style={{
          height: '6rem',
        }}
      />
      <span
        className="placeholder bg-secondary-200 rounded-4 col-4"
        style={{
          height: '3rem',
        }}
      />
    </div>
  );
}
