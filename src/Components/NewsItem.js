import React from "react";

const NewsItem = (props) => {
  let { title, description, imageURL, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <span
          class="position-absolute top-0 translate-middle badge rounded-pill bg-success"
          style={{ left: "90%", zIndex: "1" }}
        >
          {source}
        </span>
        <img
          src={
            imageURL
              ? imageURL
              : "https://images.moneycontrol.com/static-mcnews/2023/06/Vedanta-770x433.jpg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}...</p>
          <p class="card-text">
            {" "}
            <small class="text-muted">
              {" "}
              by {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>{" "}
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
