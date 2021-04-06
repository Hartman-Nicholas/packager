import React, { useState, useEffect, MouseEvent } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { userLanguage } from "../../shared/state/userLanguage";

import { RenderCard } from "./packageCard";
import { IPackage } from "../../types/Interfaces/IPackage";
import { recoilFetch } from "../../shared/state/recoilFetch";
import { enPackageFilter } from "../../utils/language/english/enPackageFilter";
import { swPackageFilter } from "../../utils/language/swedish/swPackageFilter";

export const PackageFilter: React.FC = () => {
  const [language] = useRecoilState(userLanguage);
  const { data } = useRecoilValue(recoilFetch);
  const [filterData, setFilterData] = useState<IPackage[]>(data);
  const [searchData, setSearchFilter] = useState<IPackage[]>([]);
  const [rdyData, setRdyFilter] = useState<IPackage[]>([]);
  const [otwData, setOtwFilter] = useState<IPackage[]>([]);
  const [orderData, setOrderFilter] = useState<IPackage[]>([]);
  const [deliveredData, setDeliveredFilter] = useState<IPackage[]>([]);

  const [
    { search, placeholder, pickup, delivered, order, otw, filter },
    setLanguage,
  ] = useState(enPackageFilter[0]);

  useEffect(() => {
    if (language === "EN") {
      setLanguage(enPackageFilter[0]);
    } else {
      setLanguage(swPackageFilter[0]);
    }
  }, [setLanguage, language, setFilterData, data]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const searchFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 0 || event.target.value === "") {
      const resetSearchData = [...searchData, ...filterData];
      setSearchFilter(
        resetSearchData.filter(
          (value: IPackage) => !value.parcel_id.includes(event.target.value)
        )
      );
      setFilterData(
        resetSearchData.filter((value: IPackage) =>
          value.parcel_id.includes(event.target.value)
        )
      );
    }
  };

  const readyFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked);
    if (event.target.checked) {
      setRdyFilter(
        filterData.filter(
          (value: IPackage) => !(value.status === "ready-for-pickup")
        )
      );
      setFilterData(
        filterData.filter(
          (value: IPackage) => value.status === "ready-for-pickup"
        )
      );
    } else {
      const resetRdyFilter = [...rdyData, ...filterData];
      setFilterData(resetRdyFilter);
    }
  };

  const orderInfoFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setOrderFilter(
        filterData.filter(
          (value: IPackage) => !(value.status === "order-info-received")
        )
      );
      setFilterData(
        filterData.filter(
          (value: IPackage) => value.status === "order-info-received"
        )
      );
    } else {
      const resetOrderFilter = [...orderData, ...filterData];
      setFilterData(resetOrderFilter);
    }
  };

  const otwFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setOtwFilter(
        filterData.filter((value: IPackage) => !(value.status === "on-the-way"))
      );
      setFilterData(
        filterData.filter((value: IPackage) => value.status === "on-the-way")
      );
    } else {
      const resetOtwFilter = [...otwData, ...filterData];
      setFilterData(resetOtwFilter);
    }
  };

  const deliveredFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setDeliveredFilter(
        filterData.filter((value: IPackage) => !(value.status === "delivered"))
      );
      setFilterData(
        filterData.filter((value: IPackage) => value.status === "delivered")
      );
    } else {
      const resetDeliverdFilter = [...deliveredData, ...filterData];
      setFilterData(resetDeliverdFilter);
    }
  };

  return (
    <div className="packagesFilter">
      <form className="packagesFilter__form" onSubmit={handleSubmit}>
        <label className="packagesFilter__form--label">{search}</label>
        <input
          className="packagesFilter__form--input"
          placeholder={placeholder}
          onChange={(event) => {
            searchFilter(event);
          }}
          type="text"
          name="search"
        />
        <h2 className="packagesFilter__subHeading">{filter}</h2>

        <div className="packagesFilter__form__checkBox">
          <div className="packagesFilter__form__checkBox--wrapper">
            <input
              id="pickup"
              className="packagesFilter__form__checkBox--checkbox"
              placeholder={placeholder}
              onChange={(event) => {
                readyFilter(event);
              }}
              type="checkbox"
              name="search"
            />
            <label
              htmlFor="pickup"
              className="packagesFilter__form__checkBox--label"
            >
              {pickup}
            </label>
          </div>
          <div className="packagesFilter__form__checkBox--wrapper">
            <input
              id="delivered"
              className="packagesFilter__form__checkBox--checkbox"
              placeholder={placeholder}
              onChange={(event) => {
                deliveredFilter(event);
              }}
              type="checkbox"
              name="search"
            />
            <label
              htmlFor="delivered"
              className="packagesFilter__form__checkBox--label"
            >
              {delivered}
            </label>
          </div>
          <div className="packagesFilter__form__checkBox--wrapper">
            <input
              id="info"
              className="packagesFilter__form__checkBox--checkbox"
              placeholder={placeholder}
              onChange={(event) => {
                orderInfoFilter(event);
              }}
              type="checkbox"
              name="search"
            />
            <label
              htmlFor="info"
              className="packagesFilter__form__checkBox--label"
            >
              {order}
            </label>
          </div>
          <div className="packagesFilter__form__checkBox--wrapper">
            <input
              id="otw"
              className="packagesFilter__form__checkBox--checkbox"
              placeholder={placeholder}
              onChange={(event) => {
                otwFilter(event);
              }}
              type="checkbox"
              name="search"
            />
            <label
              htmlFor="otw"
              className="packagesFilter__form__checkBox--label"
            >
              {otw}
            </label>
          </div>
        </div>
      </form>
      <div className="packagesFilter__grid">
        <RenderCard data={filterData} />
      </div>
    </div>
  );
};
