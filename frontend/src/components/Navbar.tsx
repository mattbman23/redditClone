import Link from 'next/link';
import Logo from '../images/logo.svg';

import { useAuthDispatch, useAuthState } from '../context/auth';
import { Fragment } from 'react';
import axios from 'axios';

export const Navbar: React.FC = () => {
  const { authenticated, loading } = useAuthState();
  const dispatch = useAuthDispatch();

  const logout = () => {
    axios
      .get('/auth/logout')
      .then(() => {
        dispatch('LOGOUT');
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="fixed inset-x-0 top-0 z-10 flex items-center justify-center h-12 px-5 bg-white">
      <div className="flex items-center">
        <Link href="/">
          <a>
            <Logo className="w-8 h-8 mr-2" />
          </a>
        </Link>
        <span className="text-2xl font-semibold">
          <Link href="/">Reddit</Link>
        </span>
      </div>

      <div className="flex items-center mx-auto bg-gray-100 border rounded div hover:border-blue-500 hover:bg-white">
        <i className="pl-4 pr-3 text-gray-500 fas fa-search" />
        <input
          type="text"
          placeholder="Search"
          className="py-1 pr-3 bg-transparent rounded w-96 focus:outline-none"
        />
      </div>

      <div className="flex">
        {!loading && authenticated ? (
          <button
            onClick={logout}
            className="w-32 py-1 mr-4 leading-5 hollow blue button"
          >
            Logout
          </button>
        ) : (
          <Fragment>
            <Link href="/login">
              <a className="w-32 py-1 mr-4 leading-5 hollow blue button">
                Login
              </a>
            </Link>
            <Link href="/register">
              <a className="w-32 py-1 leading-5 blue button">Register</a>
            </Link>
          </Fragment>
        )}
      </div>
    </div>
  );
};
