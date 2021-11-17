function HeaderCell({ name, clas }) {
  return (
    <>
      <p className="separator">|</p>
      <div className={`header-cell ${clas}`}>
        <p className="cell-name">{name}</p>
        <div className="cell-buttons"></div>
      </div>
    </>
  );
}

export default HeaderCell;
