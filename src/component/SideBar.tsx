import React from "react";
import { Link } from "react-router-dom";
import Logout from "../features/authentication/Logout";

function SideBar() {
  const sideContent = [
    { label: "Add New Patient", link: "/" },
    { label: "Add Patient Diagnose", link: "adddiagnose" },
    { label: "View Patient History", link: "viewpatient" },
    { label: "Update Patient Info", link: "adddiagnose" },
    { label: "Add Patient Schedule", link: "adddiagnose" },
    { label: "View Patient Schedule", link: "adddiagnose" },
    { label: "Change Schedule", link: "adddiagnose" },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRight: "1px black solid",
        height: "98vh",
      }}
    >
      <ul
        style={{
          listStyle: "none",
        }}
      >
        {" "}
        {sideContent.map(
          (content: { label: string; link: string }, index: number) => (
            <li style={{ marginBottom: "10px" }} key={index}>
              <Link to={content.link} style={{ textDecoration: "none" }}>
                {content.label}
              </Link>
            </li>
          )
        )}
      </ul>
      <Logout />
    </div>
  );
}

export default SideBar;
