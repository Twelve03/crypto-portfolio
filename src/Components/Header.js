const Header = ({ total, apiCoins }) => {
  return (
    <div className="header">
      <p>My portfolio</p>
      <h1 style={{ color: "#6eeb5e" }}>
        {new Intl.NumberFormat("us-US", {
          style: "currency",
          currency: "USD",
        }).format(total)}
      </h1>
    </div>
  );
};

export default Header;
