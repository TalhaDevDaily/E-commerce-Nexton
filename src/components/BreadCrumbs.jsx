import React from "react";
import { TbHome } from "react-icons/tb";
import { Link, useParams } from "react-router";

const BreadCrumbs = ({ pageName, pageLink, page2Name, page2Link }) => {
  const params = useParams();
  // console.log(params);

  return (
    <div className="text-body-text flex gap-2 items-center">
      <Link to={"/"} className="text-xl translate-y-[-2px]">
        <TbHome />
      </Link>
      <span>/</span>
      <Link
        to={pageLink}
        className="text-md translate-y-[-2px] capitalize text-primary"
      >
        {pageName}
      </Link>
      {page2Name && (
        <div>
          <span>/</span>
          <Link
            to={page2Link}
            className="text-md translate-y-[-2px] capitalize text-primary"
          >
            {page2Name}
          </Link>
        </div>
      )}
    </div>
  );
};

export default BreadCrumbs;
