import Image from "next/image";
import Table from "../../shared/Table";
import { Person2Outlined } from "@mui/icons-material";
import styles from "./style.module.css";
import { useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import {
  MoreVert as MoreVertIcon,
  Edit as EditIcon,
  Description as DescriptionIcon,
  DisabledByDefault as DisabledByDefaultIcon,
} from "@mui/icons-material";

const { container } = styles;
const data = [
  {
    jobName: ["Computer Engineer", "Remotely"],
    countries: [
      {
        name: "Jordan",
        flag: "/images/joFlag.png",
      },
      { name: "Jordan", flag: "/images/joFlag.png" },
    ],

    candidates: 5,
    status: "active",
  },
];
const columns = [
  {
    Header: "Job",
    accessor: "jobName",
    Cell: ({ cell: { value } }) => (
      <div>
        <div>{value[0]}</div>
        <div>{value[1]}</div>
      </div>
    ),
  },
  {
    Header: "Country",
    accessor: "countries",
    Cell: ({ cell: { value } }) => (
      <div className={styles.countryFlags}>
        {value.map((country, index) => (
          <div key={index} className={styles.country}>
            <Image src={country.flag} width={20} height={20} alt="flag" />
            <span>{country.name}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    Header: "Candidates",
    accessor: "candidates",
    Cell: ({ cell: { value } }) => (
      <div className={styles.candidates}>
        <Person2Outlined />
        {value}
      </div>
    ),
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ cell: { value } }) => (
      <div
        className={styles.status}
        style={{ backgroundColor: value === "active" ? "green" : "red" }}
      >
        {value.charAt(0).toUpperCase() + value.slice(1)}
      </div>
    ),
  },
  {
    Header: "Actions",
    accessor: "actions",
    Cell: () => <ActionMenu />,
  },
];

const ActionMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <DescriptionIcon />
          Job Description
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <DisabledByDefaultIcon />
          Disable
        </MenuItem>
      </Menu>
    </div>
  );
};
function Job() {
  return (
    <div className={container}>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default Job;
