class ModelUser {
  constructor(username, email, password) {
    this.id = Math.random();
    this.username = username;
    this.email = email;
    this.password = password;
  }
}

const user = new ModelUser("nome", "email", "password");

class ModelUser {
  constructor(username, email, password) {
    this.primarykey = Math.random();
    this.username = username;
    this.email = email;
    this.password = password;
  }
}

const User = new ModelUser(
  "GiuseppeRandazzo",
  "GiuseppeRandazzo@gmail.com",
  "1234"
);

class ModelAd {
  constructor(referencekeyUser, title, description, price, category, urlphoto) {
    this.primarykey = Math.random();
    this.referencekeyUser = referencekeyUser;
    this.title = title;
    this.description = description;
    this.price = price;
    this.category = category;
    this.urlphoto = urlphoto;
  }
}

const Ad = new ModelAd(
  "utente",
  "title",
  "description",
  "price",
  "category",
  "urlphoto"
);

class ModelReview {
  constructor(referencekeyUser, referencekeyAd, title, description, rating) {
    this.primarykey = Math.random();
    this.referencekeyUser = referencekeyUser;
    this.referencekeyAd = referencekeyAd;
    this.title = title;
    this.description = description;
    this.rating = rating;
    this.date = new Date();
  }
}

const Review = new ModelReview(
  "utente",
  "ads",
  "title",
  "description",
  "rating"
);

class ModelAuth {
  constructor(referencekeyUser) {
    this.primarykey = Math.random();
    this.referencekeyUser = referencekeyUser;
    this.token = Math.random();
  }
}

class ModelReport {
  constructor(idUser, idAd, description, status) {
    this.primarykey = Math.random();
    this.referencekeyUser = idUser;
    this.referencekeyAd = idAd;
    this.description = description;
    this.status = status;
  }
}

class modelFavorite {
  constructor(idUser, idAd) {
    this.primarykey = Math.random();
    this.referencekeyUser = idUser;
    this.referencekeyAd = idAd;
  }
}

class ModelDevice {
  constructor(idUser, idAd) {
    this.primarykey = Math.random();
    this.referencekeyUser = idUser;
    this.referencekeyAd = idAd;
  }
}

class Marketplace {
  users = [];
  ad = [];
  review = [];
  auth = [];
  report = [];
  favorite = [];
  device = [];

  login(email, password) {
    const userfound = this.users.find(function (user) {
      if (user.email === email && user.password === password) return true;
      else return false;
    });
    if (!!userfound) {
      const newAuth = new ModelAuth(userfound.primaryKeyUser);
      this.auth = [...this.auth, newAuth];
      return newAuth.token;
    } else console.log("Ma chi minchia sei?");
  }

  logout(token) {
    const authFound = this.auth.find(function (auth) {
      if (auth.token === token) return true;
      else return false;
    });
    if (!!authFound) {
      this.auth = this.auth.find(function (auth) {
        if (auth.token === token) return false;
        else return true;
      });
      console.log("logout effettuato con successo");
    } else console.log("token non valido");
  }

  register(email, password) {
    const userfound = this.users.find(function (user) {
      if (user.email === email) return true;
      else return false;
    });

    if (!!userfound) console.log("utente gia registrato");
    else {
      const newUser = new ModelUser(email, email, password);
      this.users = [...this.users, newUser];
      console.log("Registrazione effettuata con successo");
    }
  }

  isTokenValid(token) {
    const authFound = this.auth.find(function (auth) {
      if (auth.token === token) return true;
      else return false;
    });
    if (!!authFound) return true;
    else return false;
  }

  getAuthUserbytoken(token) {
    const authFound = this.auth.find(function (auth) {
      if (auth.token === token) return true;
      else return false;
    });
    if (!!authFound) return authFound;
    else return null;
  }

  addFavorite(token, referencekeyUser, referencekeyAd) {
    const userAuth = this.getAuthUserbytoken(token);
    if (!userAuth) console.log("Token non valido");
    else {
      const newFavorite = new modelFavorite(
        uaserAuth,
        referencekeyUser,
        referencekeyAd
      );
      this.favorite = [...this.favorite, newFavorite];
      console.log("aggiunto ai preferiti");
    }
  }
}
createad(referencekeyUser, title, description, price, category, urlphoto);

modifiedad(referencekeyUser, title, description, price, category, urlphoto);

deletead(referencekeyUser, title, description, price, category, urlphoto);

createreview(referencekeyUser, referencekeyAd, title, description, rating);

modifiedreview(referencekeyUser, referencekeyAd, title, description, rating);

deletereview(referencekeyUser, referencekeyAd, title, description, rating);

deleteaccount(referencekeyUser);

modfiedusername(referencekeyUser, username);
