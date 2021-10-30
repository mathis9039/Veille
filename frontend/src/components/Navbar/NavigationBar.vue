
<template>
  <NavigationBar> </NavigationBar>
</template>


<script>
import { React, useState } from "react";
import auth from "../../services/Auth";
import { useHistory } from "react-router";
import NavUserSwitch from "./NavUserSwitch";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../../styles/Navbar.css";
export default {
  name: 'navbar',
  components:{
    Navbar
  }
  
  ,let,history = useHistory(),
  const: [useState, setUserStatus] = useState({
    isLoggedIn: auth.authenticated,
  },

  history,listen, {
    setUserStatus({
      isLoggedIn: auth,authenticated,
    });
  },

  methods,checkIfLogin, {
    if (userStatus,isLoggedIn) {
      return (
        <>
          <Nav.Link>
            <li
              className="nav-links-header"
              onClick={() => {
                history.push({
                  pathname: `/home/${auth.user.username}`,
                });
              }}
            >
              Home
            </li>
          </Nav.Link>
          <NavUserSwitch />
          <Nav.Link>
            <li
              className="nav-links-header"
              onClick={() => {
                auth.logout(() => {
                  history.push("/");
                });
              }}
            >
              Déconnexion
            </li>
          </Nav.Link>
        </>
      );
    },

  }
  ,methods,test2, {
    Navbar
      ,id
      ,collapseOnSelect
      ,expand="lg"
      ,bg="white"
      ,variant="light"
    >
      Navbar.Brand ,className="title-navbar">GDS,Navbar,Brand
      ,Navbar,Toggle ,aria
      ,Navbar,Collapse,id
        ,Nav ,className="mr">{checkIfLogin()},Nav,
      Navbar,Collapse
    ,Navbar
  },
</script>

<style scoped>
#main-navbar {
  background: linear-gradient(-87deg, #fdaeae 40%, rgb(194, 206, 207) 70%);
}

.title-navbar {
  padding-left: 2%;
  font-size: 2rem;
}

.mr {
  margin-right: 5%;
}

.nav-link {
  margin-left: 2%;
  font-size: 1.5rem;
  border-radius: 8px;
}

.nav-link:hover {
  background: linear-gradient(-87deg, #aeb4b4 40%, #9bacb3 100%);
  box-shadow: 0px 2px 20px 2px rgba(192, 220, 223, 0.5);
}

.nav-link:hover .nav-links-header {
  color: white;
}

.nav-links-header {
  text-decoration: none;
  color: rgb(0, 0, 0);
  white-space: nowrap;
  padding-left: 5px;
  padding-right: 5px;
}

.nav-drop-cust {
  margin-left: 1.5%;
}
</style>