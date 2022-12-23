export class AuthService {
  loggedIn: boolean = false;


  isAuthenticated(): Promise<boolean> {

    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve(this.loggedIn) }, 800);
    });
  }

  logIn() {
    this.loggedIn = true;
  }

  logOut() {
    this.loggedIn = false;
  }
}
