/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";

import "./App.scss";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [noResults, setNoResults] = useState(false);
  const [sortFilter, setSortFilter] = useState("");
  const [contactsList, setContactsList] = useState([]);

  const handleSearch = (event) => {
    //const toSearch = event.target.value;
    const toSearch = event;
    if (toSearch) {
      setSearchFilter(toSearch);
    } else {
      setSearchFilter("");
    }
  };
  const handleSortBy = (event) => {
    //const toSort = event.target.dataset.sortby;
    const toSort = event;
    if (toSort) {
      setSortFilter(toSort);
    } else {
      setSortFilter("");
    }
  };

  const searchByTerm = (term) => {
    const sorted = [...contacts].filter((contact) =>
      contact.name.toLowerCase().includes(term.toLowerCase())
    );
    if (sorted.length === 0 && term !== "") {
      setNoResults(true);
      console.log("aqui");
    }
    if (sorted.length > 0) {
      setNoResults(false);
      setContactsList(sorted);
    }
  };

  const sortByColumn = (term) => {
    if (!noResults && searchFilter !== "" && contactsList.length > 0) {
      const found = [...contactsList].sort((a, b) =>
        a[term].localeCompare(b[term])
      );
      setContactsList(found);
    } else {
      const found = [...contacts].sort((a, b) =>
        a[term].localeCompare(b[term])
      );
      setContactsList(found);
    }
  };

  useEffect(() => {
    fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts")
      .then((res) => res.json())
      .then((data) => {
        setContacts(data);
      });
  }, []);

  useEffect(() => {
    searchByTerm(searchFilter);
  }, [searchFilter]);

  useEffect(() => {
    sortByColumn(sortFilter);
  }, [sortFilter]);

  let output;
  console.log({ contactsList, contacts, searchFilter });
  if (!noResults && contactsList.length > 0) {
    output = contactsList;
  } else if (noResults) {
    output = [];
  } else {
    output = contacts;
  }

  return (
    <div className="app" data-testid="app">
      <Topbar />
      <Filters handleSearch={handleSearch} handleSortBy={handleSortBy} />
      <Contacts data={output} />
    </div>
  );
};
export default App;
