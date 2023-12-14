export interface IUserDtoModel {
  id: number;
  name: string;
  email: string;
}

class UserDto {
  id: number;
  name: string;
  email: string;
  constructor(model: IUserDtoModel) {
    this.id = model.id;
    this.name = model.name;
    this.email = model.email;
  }
}

export default UserDto;
