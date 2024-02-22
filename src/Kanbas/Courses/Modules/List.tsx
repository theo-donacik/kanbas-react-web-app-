import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();

  const [selectedModule, setSelectedModule] = useState(moduleList[0]);
  return (
    <div>
      <div className="wd-button-row">
        <button type="button" className="wd-button">Collapse All</button>
        <button type="button" className="wd-button">View Progress</button>
        <select id="publish-all" className="wd-button">
            <option selected value="Publish All">Publish All</option>
        </select>
        <button type="button" className="wd-button add">+ Module</button>
      </div>
      <hr/>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <button className="wd-button" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
            Add
          </button>
          <button 
            className="wd-button"
            onClick={() => dispatch(updateModule(module))}>
            Update
          </button>
          <input className="wd-input" value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
          <input className="wd-input" value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
        </li>
        {moduleList.filter((module: any) => module.course === courseId)
        .map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <button
                className="wd-button"
                onClick={() => dispatch(setModule(module))}>
                Edit
              </button>
              <button
                className="wd-button"
                onClick={() => dispatch(deleteModule(module._id))}>
                Delete
              </button>

              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson:any) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ModuleList;
