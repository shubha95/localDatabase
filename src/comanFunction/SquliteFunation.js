import React, { useState, useEffect } from 'react';
import { enablePromise, openDatabase } from 'react-native-sqlite-storage';

const SquliteFunation = (val) => {
  enablePromise(true);

  const [db, setDb] = useState(null);
  const [useList, setUserList] = useState(null)



  // create Data Base and Canaection
  useEffect(() => {
    const initializeDb = async () => {
      try {
        const database = await openDatabase({ name: "sqlite_master" });
        setDb(database);
      } catch (error) {
        console.error('Failed to open database:', error);
      }
    }

    initializeDb();
  }, []);


  // check user Avlabal or Not 
  useEffect(() => {
    if (db) {
      db.transaction((txn) => {
        txn.executeSql(
          "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
          [],
          function (tx, res) {
            if (res.rows.length === 0) {
              txn.executeSql('DROP TABLE IF EXISTS table_user', []);
              txn.executeSql(
                'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
                []
              );
            }
          }
        );
      });
    }
  }, [db]);


  //  create Table 
  const dbcreateTable = () => {
    if (db) {
      db.transaction(txn => {
        txn.executeSql(`CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, mobileNo TEXT NOT NULL UNIQUE, password TEXT NOT NULL)`,
          [], (sqlTxn, res) => {
            console.log('Table created successfully', res);
            allUserData()
            return true
          }, (error) => {
            console.error('Failed to create table:', error);
          });
      });
    }
  };

  useEffect(() => {
    dbcreateTable();
  }, [db]);


  // Register New User 
  const registerUser = (user) => {

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO table_user (user_name, user_contact, user_address) VALUES (?,?,?)',
        [user.name, user.content, user.address],
        (tx, results) => {
          alert('Registration Sucess');
          console.log("sucsesss Data", results)
          if (results.rowsAffected > 0) {
            console.log("user resgister")
            allUserData()
            return true
          } else alert('Registration Failed');
        }
      );
    });
  }

  // Get All user 
  const allUserData = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user',
        [],
        (tx, results) => {
          let temp = [];
          for (let i = 0; i < results.rows.length; ++i) {
            console.log(results.rows.item(i))
            temp.push(results.rows.item(i));
          }
          setUserList(temp)
          return true
        }
      );
    });
  }

  // Delete user 
  let deleteUser = (id) => {
    console.log('user================================== recive', id)
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM  table_user where user_id=?',
        [id],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            alert('User Detelte Sucess');
            console.log('Delete Data Sucess')
            return true
          } else {
            alert('Please insert a valid User Id');
          }
        }
      );
    });
  };



  // Update User
  const updateUser = (user) => {
    console.log('user================================== recive', user)
    // console.log(inputUserId, userName, userContact, userAddress);
    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE table_user set user_name=?, user_contact=? , user_address=? where user_id=?',
        [user.name, user.contect, user.address, user.id],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            alert('User Details update Sucess'); 
            allUserData()
          } else alert('Updation Failed');
        }
      );
    });
  };

  return { registerUser, allUserData, useList, updateUser, deleteUser }
}
export default SquliteFunation;

