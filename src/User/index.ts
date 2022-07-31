import { UserModel } from '../dbconfig';

export class User {
  private name: string;
  private password: string;
  private age: string | undefined;
  private createdAt: number;
  private id: string | undefined;


  constructor(name: string, password: string, age?: string) {
    this.name = name;
    this.password = password;
    this.age = age || undefined; 
    this.createdAt = Date.now();
  }

  public create(): boolean {
    try {
    const CreatedUser = new UserModel({name: this.name, password: this.password, 
    age: this.age, createdAt: this.createdAt});
    this.id = CreatedUser.id;
      return true;
    } catch {
      return false;
    }

  }
}
