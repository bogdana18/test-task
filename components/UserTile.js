/* eslint-disable @next/next/no-img-element */
export const UserTile = ({ user }) => {
  return (
    <div className="card content__card">
      <div class="card-image image">
        <figure class="image is-128x128">
          <img
            alt="user"
            src={user.picture.large}
          />
        </figure>
      </div>
      <p className="title is-4">
        {`${user.name.first} ${user.name.last}`}
      </p>
      <p class="subtitle is-6">
        {user.email}
      </p>
    </div>
  );
};
