import { type User } from "../types/types";
import { fetchUsers } from "../utils/actions";

async function UsersList() {
  const users = await fetchUsers();

  return (
    <div className="mt-4 ml-6">
      {users ? (
        <ol className="list-decimal">
          {users.map((item) => {
            const { id, firstName, lastName }: User = item;
            
            return (
              <li key={id} className="capitalize text-lg">
                {firstName} {lastName}
              </li>
            );
          })}
        </ol>
      ) : (
        <p>No users found...</p>
      )}
    </div>
  );
}
export default UsersList;
