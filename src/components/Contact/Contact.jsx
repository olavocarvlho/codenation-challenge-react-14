import React from "react";
import dayjs from "dayjs";

import "./Contact.scss";

const Contact = ({ data }) => {
  const {
    name,
    avatar,
    company,
    department,
    admissionDate,
    phone,
    country,
  } = data;
  return (
    <article className="contact" data-testid="contact">
      <span className="contact__avatar">
        <img src={avatar} alt={name} />
      </span>
      <span className="contact__data" data-testid="contact-name">
        {name}
      </span>
      <span className="contact__data" data-testid="contact-phone">
        {phone}
      </span>
      <span className="contact__data" data-testid="contact-country">
        {country}
      </span>
      <span className="contact__data" data-testid="contact-date">
        08/04/2019
      </span>
      <span className="contact__data" data-testid="contact-company">
        {company}
      </span>
      <span className="contact__data" data-testid="contact-department">
        {department}
      </span>
    </article>
  );
};

export default Contact;
