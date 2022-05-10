import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchPriceList } from "../../store/reducers/ActionCreators";
import "./price.scss";
import PriceItems from "./PriceItems";

const Price: FC = () => {
  const [activeTitle, setActiveTitle] = useState(1);

  const dispatch = useAppDispatch();
  const { list, isLoading } = useAppSelector((state) => state.priceList);

  useEffect(() => {
    dispatch(fetchPriceList());
  }, []);

  const onClick = (category: number) => {
    setActiveTitle(category);
  };

  return (
    <section id="price" className="price">
      <div className="container">
				<h2 className="title">Прайс лист</h2>
        <h3
          onClick={() => onClick(1)}
          className={
            activeTitle == 1
              ? "price__title price__title--active"
              : "price__title"
          }
        >
          Маникюр
        </h3>
        <h3
          onClick={() => onClick(2)}
          className={
            activeTitle == 2
              ? "price__title price__title--active"
              : "price__title"
          }
        >
          Педикюр
        </h3>
        <h3
          onClick={() => onClick(3)}
          className={
            activeTitle == 3
              ? "price__title price__title--active"
              : "price__title"
          }
        >
          Подологические услуги
        </h3>
        {<PriceItems list={list.filter((el) => el.category == activeTitle)} />}
      </div>
    </section>
  );
};

export default Price;
