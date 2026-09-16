export default function Brand() {
  return (
    <span className="brand">
      <span className="brand-emblem" aria-hidden="true">
        <img src="/transparent logo.png" alt="" width="152" height="152" />
      </span>
      <span className="brand-wordmark">
        <span className="brand-name">JNEX</span>
        <span className="brand-descriptor">
          <span className="sr-only">EDUCATION</span>
          {'EDUCATION'.split('').map((letter, index) => <span aria-hidden="true" key={index}>{letter}</span>)}
        </span>
      </span>
    </span>
  );
}
