import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { modURL } from "../common/constants";
import ModuleComp from "../Components/ModuleComp";

const Module = () => {
  const [modules, setModules] = useState([]);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    getModules();
  }, []);

  const getModules = () => {
    axios.get(modURL + user).then((response) => {
      const result = response.data;
      setModules(result.data)
    });
  };
  return (
    <div className="container">
      <p className="title">Modules</p>
      <table className="table table-success table-striped table-bordered">
        <tbody>
        {modules.map((module) => {
          return <ModuleComp module={module}  />
        })}
        </tbody>
      </table>
    </div>
  );
};
export default Module;
