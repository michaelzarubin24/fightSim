"use strict";

// ---------- Define the Hero class
class Hero {
  constructor(name, damage, hp) {
    this.name = name;
    this.damage = damage;
    this.hp = hp;
  }

  kick() {
    return -23;
  }

  skill() {
    return -33;
  }
}

// ---------- Define the User class
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  getPassword() {
    return this.password;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }
}

// ---------- Function to register and login user
function registerAndLogin(name, email, password) {
  const user = new User(name, email, password);
  return user;
}

// ---------- Function for the fight
function fight(user1, user2) {
  const hero = new Hero("HeroName", 50, 100);

  const user1Password = user1.getPassword();
  const user2Name = user2.getName();

  // ---------- Simulate a fight
  const user1Score = hero.kick();
  const user2Score = hero.skill();

  const result = {
    user1: {
      name: user1.getName(),
      email: user1.getEmail(),
      password: user1Password,
      score: user1Score,
    },
    user2: {
      name: user2Name,
      score: user2Score,
    },
  };

  return result;
}

// ---------- Example
const registeredUser = registerAndLogin(
  "Michael",
  "michael@gmail.com",
  "password123"
);
const computerUser = new User("Computer", "computer@example.com", "comp123");

const fightResult = fight(registeredUser, computerUser);
console.log(fightResult);
