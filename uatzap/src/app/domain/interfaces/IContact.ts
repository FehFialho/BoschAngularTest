export interface IContact {
  Id: string
  Phone: string,
  Username: string,
}

export interface IAddContact {
  Contact: IContact,
  Nickname?: string,
  UserToken?: string
}
