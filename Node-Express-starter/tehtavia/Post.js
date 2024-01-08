const databaseyhteys = require("../config/db");

class Post {
  constructor(Nimet, Syntymavuosi, Paino, LinkkiKuvaan, Laji, Saavutukset) {
    this.Nimet = Nimet;
    this.Syntymavuosi = Syntymavuosi;
    this.Paino = Paino;
    this.LinkkiKuvaan = LinkkiKuvaan;
    this.Laji = Laji;
    this.Saavutukset = Saavutukset;
  }

  async tallentaminen() {
    let sql = `
        INSERT INTO urheilijatiedot(
            Nimet, Syntymavuosi, Paino, LinkkiKuvaan, Laji, Saavutukset
        )
        VALUES(
            '${this.Nimet}',
            '${this.Syntymavuosi}',
            ${this.Paino},
            '${this.LinkkiKuvaan}',
            '${this.Laji}',
            '${this.Saavutukset}'
        )`;
    const [databasepostaus, _] = await databaseyhteys.execute(sql);

    return databasepostaus;
  }

  static searchAll() {
    let sql = "SELECT * FROM urheilijatiedot;";
    return databaseyhteys.execute(sql);
  }

  static findByID(ID) {
    let sql = `SELECT * FROM urheilijatiedot WHERE ID = ${ID};`;
    return databaseyhteys.execute(sql);
  }

  static updateByID(ID, updated) {
    return databaseyhteys.execute(
      `UPDATE urheilijatiedot SET ${Object.keys(updated)
        .map((key) => `${key} = ?`)
        .join(", ")} WHERE ID = ?`,
      [...Object.values(updated), ID]
    );
  }

  static deletePostsByID(ID) {
    let sql = `DELETE FROM urheilijatiedot WHERE ID = ${ID};`;

    return databaseyhteys.execute(sql);
  }
}

module.exports = Post;
