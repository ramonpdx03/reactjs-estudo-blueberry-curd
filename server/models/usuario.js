import { db } from '../db.js';

export const getUsers = (req, res) => {
  const sql = "SELECT * FROM usuario";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
