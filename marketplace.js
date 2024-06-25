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

class ModelUtente {
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
  constructor(referencekeyUser, referencekeyAds, title, description, rating) {
    this.primarykey = Math.random();
    this.referencekeyUser = referencekeyUser;
    this.referencekeyAds = referencekeyAds;
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
  constructor(username, password) {
    this.referencekeyUser = referencekeyUser;
    this.token = Math.random();
  }
}

const auth = new ModelAuth("utente");

class ModelReports {
  constructor(id, iduser, idad, description, status) {
    this.primarykey = math.random();
    this.referencekeyUser = iduser;
    this.referencekeyAds = idad;
    this.description = description;
    this.status = status;
  }
}

const reports = new ModelReports("utente", "ads", "description", "status");
