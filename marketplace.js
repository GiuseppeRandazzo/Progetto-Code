class Marketplace {
  users = [];
  ads = [];
  reviews = [];
  auth = [];
}

class ModelUser {
  constructor(username, email, password) {
    this.id = Math.random();
    this.username = username;
    this.email = email;
    this.password = password;
  }
}

const user = new ModelUser("nome", "email", "password");

class ModelUsers {
  constructor(username, email, password) {
    this.primarykey = Math.random();
    this.username = username;
    this.email = email;
    this.password = password;
  }
}

const utente = new ModelUtente(
  "Giuseppe",
  "giusepperandazzo@gmail.com",
  "1234"
);

class ModelAds {
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

const ads = new ModelAds(
  "utente",
  "title",
  "description",
  "price",
  "category",
  "urlphoto"
);

class ModelReviews {
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

const reviews = new ModelReviews(
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

const auth = new ModelAuth("utente");

class ModelReports {
  constructor(idUser, idAd, description, status) {
    this.primarykey = Math.random();
    this.referencekeyUser = idUser;
    this.referencekeyAd = idAd;
    this.description = description;
    this.status = status;
  }
}

const reports = new ModelReports("utente", "ads", "description", "status");

class modelFavorites {
  constructor(idUser, idAd) {
    this.primarykey = Math.random();
    this.referencekeyUser = idUser;
    this.referencekeyAd = idAd;
  }
}
