import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import Foods from "../../Components/Shared/Food/Foods";

const Order = ({ category }) => {
  const categoryList = [
    "dessert",
    "pizza",
    "soup",
    "salad",
    "drinks",
    "offered",
  ];
  const [categoryName, setCategoryName] = useState(category);
  const [initialIndex, setInitialIndex] = useState(
    categoryList.indexOf(category)
  );
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const menus = useMenu();
  const food = menus.filter((items) => items.category === categoryName);
  console.log(categoryName);

  return (
    <div className="my-20  ">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="w-fit mx-auto">
          <TabList>
            {categoryList.map((item, idx) => (
              <Tab key={idx}>
                <p
                  onClick={() => {
                    setInitialIndex(idx);
                    setCategoryName(item);
                  }}
                  className={`${
                    tabIndex === initialIndex ? "text-yellow-500 font-bold" : ""
                  } uppercase`}
                >
                  {item}
                </p>
              </Tab>
            ))}
          </TabList>
        </div>
        <div className="mt-16">
          {categoryList.map((item, idx) => (
            <div key={idx}>
              <TabPanel id>
                <Foods items={food} />
              </TabPanel>
            </div>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default Order;
