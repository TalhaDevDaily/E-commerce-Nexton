import React from "react";
import { TbHome } from "react-icons/tb";
import { Link, useParams } from "react-router";

const BreadCrumbs = ({ pageName, pageLink }) => {
  const params = useParams();
  // console.log(params);

  return (
    <div className="text-body-text flex gap-2 items-center">
      <Link to={"/"} className="text-xl translate-y-[-2px]">
        <TbHome />
      </Link>
      <span>/</span>
      <Link to={pageLink} className="text-md translate-y-[-2px] capitalize">
        {pageName}
      </Link>
    </div>
  );
};

export default BreadCrumbs;
