import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

// Validates the first half of an email address.
const validateText = (text) => {
  // NOTE: Passes RFC 5322 but not tested on google's standard.
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
  return re.test(text) || text.length === 0;
};

const messages = [
  "Code sleeps, bugs creep!",
  "Hire me before my coffee runs out!",
  "404: Motivation not found",
  "Ctrl + C, Ctrl + V - It is a lifestyle!",
  "When in doubt, blame it on JavaScript!",
  "Debugging: My favorite way to spend an afternoon",
  "I am not lazy; I am on energy-saving mode",
  "If it compiles, ship it!",
  "May the source be with you",
  "Currently adding Procrastination Expert to my resume",
];

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay) {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
    return () => {}; // pass linter
  }, [delay]);
};

const EmailLink = ({ loopMessage }) => {
  const hold = 50; // ticks to wait after message is complete before rendering next message
  const delay = 50; // tick length in mS

  const [idx, updateIter] = useState(0); // points to current message
  const [message, updateMessage] = useState(messages[idx]);
  const [char, updateChar] = useState(0); // points to current char
  const [isActive, setIsActive] = useState(true); // disable when all messages are printed

  useInterval(
    () => {
      let newIdx = idx;
      let newChar = char;
      if (char - hold >= messages[idx].length) {
        newIdx += 1;
        newChar = 0;
      }
      if (newIdx === messages.length) {
        if (loopMessage) {
          updateIter(0);
          updateChar(0);
        } else {
          setIsActive(false);
        }
      } else {
        updateMessage(messages[newIdx].slice(0, newChar));
        updateIter(newIdx);
        updateChar(newChar + 1);
      }
    },
    isActive ? delay : null
  );

  return (
    <div
      className="inline-container"
      style={validateText(message) ? {} : { color: "red" }}
      onMouseEnter={() => setIsActive(false)}
      onMouseLeave={() => idx < messages.length && setIsActive(true)}
    >
      <a
        href={
          validateText(message)
            ? "mailto:chandanparameshwarappa96@gmail.com"
            : ""
        }
      >
        <span>{message}</span>
        <span>@cparam.me</span>
      </a>
    </div>
  );
};

EmailLink.defaultProps = {
  loopMessage: false,
};

EmailLink.propTypes = {
  loopMessage: PropTypes.bool,
};

export default EmailLink;
