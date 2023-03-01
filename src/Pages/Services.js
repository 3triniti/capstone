import React from "react";
import { useGetServiceQuery } from "../app/services/api";

function Services() {
  const { data } = useGetServiceQuery();

  return (
    <>
      <div className="">
        <div className="">
          {data.service.map((service) => (
            <img className="" src={service.image} alt={service?.name} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
