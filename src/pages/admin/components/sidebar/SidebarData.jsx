import React from "react";
import * as BiIcons from "react-icons/bi";
import {CgNotes} from "react-icons/cg";
import Buku from "../../buku/Buku";
import Absensi from "../../absensi/Absensi";
import Dashboard from "../../Dashboard";
export const SidebarData = [
  {
    name : "Dashboard",
    path : "/",
    icon : <BiIcons.BiHomeAlt />,
    content : <Dashboard />
  },
  {
    name : "Absen",
    path : "/",
    icon : <BiIcons.BiUser/>,
    content : <Absensi />
  },
  {
    name : "Peminjaman",
    path : "/",
    icon : <CgNotes />,
    content : <Buku />
  },
  {
    name : "Buku",
    path : "/",
    icon : <BiIcons.BiBook />,
    content : <Buku />
  },
  {
    name : "Log Out",
    path : "/",
    icon : <BiIcons.BiLogOut />,
    content : <Buku />
  },
];
