/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useEffect } from "react";

import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";

import "./App.scss";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilterType] = useState("");

  const handleFilters = (filter) => {
    setFilterType(filter);
  };

  useEffect(() => {
    const filterContacts = (filter) => {
      switch (filter.type) {
        case "sort_by":
          const sorted = [...contacts].sort((a, b) =>
            a[filter.value].localeCompare(b[filter.value])
          );
          setContacts(sorted);
          break;

        case "text":
          const found = [...contacts].filter((contact) =>
            contact.name.toLowerCase().includes(filter.value.toLowerCase())
          );
          setContacts(found);
          break;

        default:
          setContacts([...contacts]);
      }
    };
    filterContacts(filter);
  }, [filter]);

  useEffect(() => {
    fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts")
      .then((res) => res.json())
      .then((data) => {
        setContacts(data);
      });
  }, []);

  return (
    <div class="app" data-testid="app">
      <Topbar />
      <Filters handleFilters={handleFilters} />
      <Contacts data={contacts} />
    </div>
  );
};
export default App;
