import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { FilterBlock } from '../components/UsersFilter';
import { UsersBlock } from '../components/Users';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [filterBy, setFilterBy] = useState('any');
  const [sortBy, setSortBy] = useState('name');
  const [searchBy, setSearchBy] = useState('');

  useEffect(() => {
    axios
      .get(
        `https://randomuser.me/api/?results=200`
      )
      .then(({ data }) => {
        setUsers(data.results);
      });
  }, []);

  const changeSortBy = (e) => {
    return setSortBy(e.target.value);
  };

  const changeFilterBy = (e) => {
    return setFilterBy(e.target.value);
  };

  const searchUser = users.filter((user) => {
    return (
      user.name.first.toLowerCase().indexOf(searchBy.toLowerCase()) > -1 ||
      user.name.last.toLowerCase().indexOf(searchBy.toLowerCase()) > -1 ||
      user.email.toLowerCase().indexOf(searchBy.toLowerCase()) > -1
    );
  });

  const filteredUsers = () => {
    return searchUser.filter((user) => {
      return filterBy === 'any' ? user : user.gender === filterBy;
    });
  };

  const sortedUsers = () => {
    if (sortBy === 'name') {
      return filteredUsers().sort((a, b) => {
        return a.name.first.toLowerCase()
        > b.name.first.toLowerCase() ? 1 : -1;
      });
    }

    if (sortBy === 'last-name') {
      return filteredUsers().sort((a, b) => {
        return a.name.last.toLowerCase() 
        > b.name.last.toLowerCase() ? 1 : -1;
      });
    }

    if (sortBy === 'email') {
      return filteredUsers().sort((a, b) => {
        return a.email.toLowerCase()
        > b.email.toLowerCase() ? 1 : -1;
      });
    }
  };

  const paginationUsers = () => {
    return sortedUsers().slice(currentPage * 20, (currentPage + 1) * 20);
  };

  return (
    <div className="body">
      <Header searchBy={searchBy} setSearchBy={setSearchBy} />
      <FilterBlock
        changeSortBy={changeSortBy}
        sortBy={sortBy}
        filterBy={filterBy}
        changeFilterBy={changeFilterBy}
      />

      <UsersBlock
        users={paginationUsers()}
        usersLength={sortedUsers()}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
