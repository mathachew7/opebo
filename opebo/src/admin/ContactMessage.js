import React, { useState, useEffect } from "react";

import { isAuthenticated } from "./adminAuth";
import { Link } from "react-router-dom";
import { getContactMessage } from "./apiAdmin";
import AdminNavbar from "./AdminNavbar";
import moment from "moment";

import Spinner from "../core/components/Spinner";

const ContactMessage = ({ history }) => {
  const [messageHistory, setMessageHistory] = useState([]);

  const [fetched, setFetched] = useState(false);

  const { admin, token } = isAuthenticated();

  const init = (adminId, token) => {
    setFetched(false);
    getContactMessage(adminId, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setMessageHistory(data);
        setFetched(true);
      }
    });
  };

  useEffect(() => {
    init(admin._id, token);
  }, [admin._id, token]);

  const breadLinks = () => {
    return (
      <div className='flex flex-row mb-2'>
        <Link className='text-xs text-gray-500 hover:text-gray-800'>
          Your account >{" "}
        </Link>
        <Link className='ml-2 text-xs text-orange-600 hover:text-orange-500'>
          Your messages
        </Link>
      </div>
    );
  };

  const messagesCard = (messagesData) =>
    messagesData.map((messages, i) => (
      <div className='mt-2 w-full border border-gray-300 rounded overflow-hidden hover:border-orange-500'>
        <div
          className='bg-gray-300 font-semibold border-b border-gray-400
         flex flex-row justify-between uppercase items-baseline px-3 pt-2'
        >
          <p className='text-xs'>message #{messages._id}</p>
          <p className='text-xs'>
            date :{moment(messages.createdAt).format("llll")}
          </p>
        </div>
        <div className='px-3 py-2'>
          <div>Name: {messages.name}</div>
          <div>Email: {messages.email}</div>
          <div>Phone: {messages.phone}</div>
          <div>Message: {messages.message}</div>
        </div>
      </div>
    ));
  const messageInfo = (messages) => {
    return (
      <>
        {AdminNavbar(history)}
        <div className='justify-center items-center md:px-40 mb-10'>
          <div className='bg-white flex flex-col rounded overflow-hidden px-3 -pt-16'>
            {breadLinks()}

            <h1 className='text-2xl text-left font-semibold'>
              Contact Us page Messages
            </h1>
            {fetched ? messagesCard(messages) : <Spinner />}
          </div>
        </div>
      </>
    );
  };

  return <>{messageInfo(messageHistory)}</>;
};

export default ContactMessage;
