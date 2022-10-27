import { PaginationBlock } from "./Pagination";
import { UserTile } from "./UserTile";

export const UsersBlock = ({
  users,
  currentPage,
  setCurrentPage,
  usersLength,
}) => {
  return (
    <div>
      {users.length === 0 ? (
        <div className="title is-2">Nothing</div>
      ) : (
        <>
          <div className="content">
            {users.map((user, i) => {
              return <UserTile user={user} key={user.login.uuid} />;
            })}
          </div>

          <PaginationBlock
            usersLength={usersLength}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};
