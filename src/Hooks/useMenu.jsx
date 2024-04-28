import axios from "axios";
import { useEffect, useState } from "react";
import useAxios from "./useAxios";

const useMenu = () => {
  const axios = useAxios();
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    axios.get("/menus").then((res) => setMenus(res.data));
  }, [axios]);

  return menus;
};

export default useMenu;
