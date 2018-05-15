export class CharacterModel {
  constructor(
    public Id: number,
    public Name: string,
    public Exp: number,
    public CurrentHp: number,
    public MaxHp: number,
    public Town: string
  ) {}
}
