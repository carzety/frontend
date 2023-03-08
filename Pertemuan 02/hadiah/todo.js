/** TUGAS 1 :
 * Membuat Array Object (5 Pengguna)
 * Objek meliputi: nama, umur, jurusan
 * Note: menggunakan const sebagai pengganti var
 */

const users = [
  {
    name: "Irzan",
    age: 22,
    major: "Hukum",
  },
  {
    name: "Isfa",
    age: 23,
    major: "English",
  },
  {
    name: "Nurul",
    age: 19,
    major: "Teknik Sipil",
  },
  {
    name: "Kala",
    age: 23,
    major: "Sastra Cina",
  },
  {
    name: "Naya",
    age: 21,
    major: "PGSD",
  },
];

/** TUGAS 2 :
 * Membuat fungsi memanggil seluruh data
 * Objek meliputi: nama, umur, jurusan
 * Note: menggunakan const sebagai pengganti var
 */

const all = () => {
  for (const user of users) {
    console.log(
      `name: ${user.name}`,
      `age: ${user.age}`,
      `major: ${user.major}`
    );
  }
};

/** TUGAS 3 :
 * Membuat fungsi tambahkan data pengguna
 * Petunjuk: use push method
 * Note: menggunakan arrow-function dan const */

const store = (user) => {
  users.push(user);
  all();
};

/** TUGAS 4 : */

const update = (index, user) => {
    users[index] = user;
    all();
};

/** TUGAS 5 : */

const destroy = (index) => {
    users.splice(index, 1);
    all();
};

/** MAIN FUNCTION */
const main = () => {
  /**
   * Test function index
   */
  console.log("# Get All Users");
  all();

  /**
   * Test function store
   */
  console.log("# Add New User: Sabiq");
  const newUser = {
    name: "Sabiq",
    age: 20,
    major: "Informatics",
  };
  store(newUser);

  /**
   * Test function update
   */
  console.log("# Edit User: Isfa");
  const editedIndex = 1;
  const editedUser = {
    name: "Isfhani Ghiyath",
    age: 23,
    major: "English",
  };
  update(editedIndex, editedUser);

  /**
   * Test function destroy
   */
  console.log("# Delete User: Nurul");
  const deletedIndex = 2;
  destroy(deletedIndex);
};

main();

/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
module.exports = { users, all, store, update, destroy };
