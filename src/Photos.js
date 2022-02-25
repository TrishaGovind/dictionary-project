import React from "react";
import { Carousel } from "react-bootstrap";
import Media from "react-media";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos pb-1">
        <Media query="(max-width: 600px)">
          {(matches) =>
            matches ? (
              <Carousel>
                {props.photos.map(function (photo, index) {
                  return (
                    <Carousel.Item>
                      <div key={index}>
                        <a
                          href={photo.src.original}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={photo.src.landscape}
                            className="img-fluid"
                            alt={photo.alt}
                          />
                        </a>
                      </div>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            ) : (
              <div className="row">
                {props.photos.map(function (photo, index) {
                  return (
                    <div className="col-4" key={index}>
                      <a
                        href={photo.src.original}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={photo.src.landscape}
                          className="img-fluid"
                          alt={photo.alt}
                        />
                      </a>
                    </div>
                  );
                })}
              </div>
            )
          }
        </Media>
      </section>
    );
  } else {
    return null;
  }
}
