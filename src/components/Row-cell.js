export default function RowCell({ nameOfField, country }) {
  return (
    <div className={`row-cell ${nameOfField}`}>{country[nameOfField]}</div>
  );
}
