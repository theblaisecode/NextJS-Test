const createUser = async () => {
  "use server";
  console.log("creating user...");
};

function Form() {
  return (
    <form className={formStyle} action={createUser}>
      <h3 className="text-3xl">Create User</h3>

      <input
        type="text"
        name="firstName"
        defaultValue="Blaise"
        className={inputStyle}
        required
      />

      <input
        type="text"
        name="lastName"
        defaultValue="Nwachukwu"
        className={inputStyle}
        required
      />

      <button type="submit" className={btnStyle}>
        Create
      </button>
    </form>
  );
}

const formStyle =
  "max-w-lg flex flex-col gap-y-4 bg-[#242424] shadow rounded p-8";
const inputStyle = "border shadow rounded py-2 px-3 text-[#a09f9f]";
const btnStyle =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize cursor-pointer";
export default Form;
