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

class ModelAnnuncio {
  constructor(
    referencekeyuser,
    title,
    description,
    price,
    category,
    status,
    address,
    urlphoto
  ) {
    this.referencekeyuser = referencekeyuser;
    this.title = title;
    this.description = description;
    this.price = price;
    this.category = category;
    this.status = status;
    this.address = address;
    this.urlphoto = urlphoto;
  }
}

class ModelRecensione {
  constructor(title, titledescription, rating) {
    this.id = Math.random();
    this.title = title;
    this.titledescription = titledescription;
    this.rating = rating;
  }
}
