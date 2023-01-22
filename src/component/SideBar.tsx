import { Sidebar, Menu, MenuItem, sidebarClasses } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded'
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded'
import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded'
import { Box } from '@mui/material'

import Logout from '../features/authentication/Logout'

export default function SideBar() {
  return (
    <>
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            height: '97vh',
            backgroundColor: 'white',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          },
        }}
      >
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              if (level === 0)
                return {
                  color: disabled ? 'black' : '#1565c0',
                  backgroundColor: active ? 'black' : undefined,
                  fontFamily: 'Outfit',
                  fontWeight: 700,
                  fontSize: '14px',
                  ':hover': {
                    backgroundColor: '#1565c0',
                    color: 'white',
                  },
                }
            },
          }}
        >
          <MenuItem routerLink={<Link to="/" />}> Add New Patient</MenuItem>
          <MenuItem routerLink={<Link to="adddiagnose" />}>
            {' '}
            Add Patient Diagnose
          </MenuItem>
          <Box>
            <MenuItem routerLink={<Link to="viewpatient" />}>
              {' '}
              View Patient History
            </MenuItem>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Logout />
          </Box>
        </Menu>
      </Sidebar>
    </>
  )
}

// import React from "react";
// import { Link } from "react-router-dom";
// import Logout from "../features/authentication/Logout";

// function SideBar() {
//   const sideContent = [
//     { label: "Add New Patient", link: "/" },
//     { label: "Add Patient Diagnose", link: "adddiagnose" },
//     { label: "View Patient History", link: "viewpatient" },
//     { label: "Update Patient Info", link: "adddiagnose" },
//     { label: "Add Patient Schedule", link: "adddiagnose" },
//     { label: "View Patient Schedule", link: "adddiagnose" },
//     { label: "Change Schedule", link: "adddiagnose" },
//   ];
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         borderRight: "1px black solid",
//         height: "98vh",
//       }}
//     >
//       <ul
//         style={{
//           listStyle: "none",
//         }}
//       >
//         {" "}
//         {sideContent.map(
//           (content: { label: string; link: string }, index: number) => (
//             <li style={{ marginBottom: "10px" }} key={index}>
//               <Link to={content.link} style={{ textDecoration: "none" }}>
//                 {content.label}
//               </Link>
//             </li>
//           )
//         )}
//       </ul>
//       <Logout />
//     </div>
//   );
// }

// export default SideBar;
