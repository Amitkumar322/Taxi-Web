import './Header.css';

export const Header = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        <div className="marquee-item">
          <h4>Airport Transfers || Offered At Short Notice</h4>
        </div>
        <div className="marquee-item">
          <h4>Wedding Parties || Can Be Easily Arranged</h4>
        </div>
        <div className="marquee-item">
          <h4>Business || You Will Arrive On Time</h4>
        </div>
        <div className="marquee-item">
          <h4 className="phone">+91 9876745637 || gmailrahil24322@gmail.com</h4>
        </div>

        {/* Duplicate items for infinite loop */}
        <div className="marquee-item">
          <h4>Airport Transfers || Offered At Short Notice</h4>
        </div>
        <div className="marquee-item">
          <h4>Wedding Parties || Can Be Easily Arranged</h4>
        </div>
        <div className="marquee-item">
          <h4>Business || You Will Arrive On Time</h4>
        </div>
        <div className="marquee-item">
          <h4 className="phone">+91 9876745637 || gmailrahil24322@gmail.com</h4>
        </div>
      </div>
    </div>
  );
};
