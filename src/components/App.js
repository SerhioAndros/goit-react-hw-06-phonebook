// import React from "react";
import styles from "./App.module.css";
import React, { Component } from "react";
import { connect } from "react-redux";

import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
import { fetchContacts } from "../redux/contacts-operations";
import { getLoading } from "../redux/contacts-selectors";
import { ContactsLoader } from "./loader/Loader";

class App extends Component {
  state = {};
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.mainHeader}>Phonebook</h1>
        <ContactForm />
        <h2 className={styles.additionalHeader}>Contacts</h2>

        <Filter />
        {this.props.loadingContacts && <ContactsLoader />}
        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loadingContacts: getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
