export default function Hero() {
  return (
    <div className="hero-section">
      {/* this div is for the text */}
      <div>
        <p className="header-text">
          Stay on top <br />
          of your <br />
          bills!
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#0000F5"
          >
            <path d="M80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Zm160-40h80v-40h40q17 0 28.5-11.5T480-360v-120q0-17-11.5-28.5T440-520H320v-40h160v-80h-80v-40h-80v40h-40q-17 0-28.5 11.5T240-600v120q0 17 11.5 28.5T280-440h120v40H240v80h80v40Zm320-30 80-80H560l80 80Zm-80-250h160l-80-80-80 80Z" />
          </svg>
        </p>
        <p className="text-medium">Measure, analyze and track your bills.</p>
        <button>
          <h5>Get started &rarr;</h5>
        </button>
        <small>Sign up for free, no ads.</small>
      </div>

      {/* and this div is for the visual display */}
      <div classname="hero-display">
        {/* column 1 */}
        <div>
          <div className="card">
            <div>
              <div className="card-reader"></div>
              <div className="card-blank"></div>
              <div className="card-description-large" />
              <div className="card-description-small" />
            </div>
            <div className="card-square" />
          </div>
          <div className="card">
            <div>
              <div className="card-reader"></div>
              <div className="card-blank"></div>
              <div className="card-description-large" />
              <div className="card-description-small" />
            </div>
            <div className="card-square" />
          </div>
        </div>

        {/* column 2 */}
        <div>
          <div className="card">
            <div>
              <div className="card-reader"></div>
              <div className="card-blank"></div>
              <div className="card-description-large" />
              <div className="card-description-small" />
            </div>
            <div className="card-square" />
          </div>
          <div className="card">
            <div>
              <div className="card-reader"></div>
              <div className="card-blank"></div>
              <div className="card-description-large" />
              <div className="card-description-small" />
            </div>
            <div className="card-square" />
          </div>
        </div>
      </div>
    </div>
  );
}
