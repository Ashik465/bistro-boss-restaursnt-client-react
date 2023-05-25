import Cover from "../../shared/cover/Cover";
import orderImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";

import CategoryOrderTab from "../orderTab/CategoryOrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
const categories =['salad','pizza','soup','dessert','drinks']
const {category} = useParams();
  const initialIndex = categories.indexOf(category);
 console.log(initialIndex)
       

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const dessert = menu.filter((item) => item.category === "dessert");

  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <>
         <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover img={orderImg} title={"Order Food"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <CategoryOrderTab items={salad}></CategoryOrderTab>
        </TabPanel>
        <TabPanel>
          <CategoryOrderTab items={pizza}></CategoryOrderTab>
        </TabPanel>
        <TabPanel>
          <CategoryOrderTab items={soup}></CategoryOrderTab>
        </TabPanel>
        <TabPanel>
          <CategoryOrderTab items={dessert}></CategoryOrderTab>
        </TabPanel>
        <TabPanel>
          <CategoryOrderTab items={drinks}></CategoryOrderTab>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Order;
