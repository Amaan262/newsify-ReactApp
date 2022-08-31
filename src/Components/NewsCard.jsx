import React from "react";
import replacedimage from '../assets/noImage.png'

const NewsCard = (props) => {
  // let [title,link,description,image_url] = props;
  return (
    <>
      <div className="m-1 mb-4 sm:m-5 last:justify-start">
        <div className="flex justify-center last:justify-start">
          <div className="rounded-lg shadow-lg bg-[#ffffff9c] max-w-lg sm:max-w-[27rem]">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img
                className="rounded-t-lg w-[100%] object-fill h-[210px]"
                src={props.image_url == null ? replacedimage : `${props.image_url}`}
                alt="card-img"
              />
            </a>
            <div className="p-6">

              <h5 className="text-white-900 text-[23px] font-medium mb-2">{props.title}</h5>
              <p className="text-gray-700 text-base mb-4">
                {props.description}
              </p>
              <div className="date flex justify-between">
                <a
                  href={props.link}
                  type="button"
                  target="_blank" rel="noreferrer"
                  className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Read More...
                </a>
                <p className=" text-[12px]">{new Date(props.date).toGMTString().slice(0, 26)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
